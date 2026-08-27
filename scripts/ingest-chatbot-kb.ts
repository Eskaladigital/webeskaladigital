/**
 * Ingesta KB del chatbot Eskala (servicios + FAQs + blog publicado).
 * Uso: npm run ingest:chatbot-kb
 */
import path from 'path'
import dotenv from 'dotenv'
import { getSupabaseServiceClient } from '../src/lib/supabase-service'
import { embedText } from '../src/lib/chatbot/openai'
import { chunkFromArticle, collectStaticChunks } from '../src/lib/chatbot/kb-sources'
import type { IngestChunk } from '../src/lib/chatbot/types'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })
// Scripts locales en Windows (proxy/antivirus): si no, fetch a Supabase/OpenAI muere con certificado.
if (process.env.BLOG_REDACTOR_INSECURE_TLS !== '0') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

async function loadBlogChunks(): Promise<IngestChunk[]> {
  const sb = getSupabaseServiceClient()
  if (!sb) return []
  const { data, error } = await sb
    .from('articles')
    .select('title, slug, excerpt, content, category:categories(name)')
    .eq('published', true)
  if (error) throw new Error(error.message)
  const out: IngestChunk[] = []
  for (const a of data ?? []) {
    const catRaw = (a as { category?: { name?: string } | { name?: string }[] | null }).category
    const category = Array.isArray(catRaw) ? catRaw[0] : catRaw
    const c = chunkFromArticle({ ...a, category })
    if (c) out.push(c)
  }
  return out
}

async function upsertSourceChunks(source: string, chunks: IngestChunk[]): Promise<number> {
  const sb = getSupabaseServiceClient()
  if (!sb) throw new Error('Supabase service no configurado')

  const { error: delErr } = await sb.from('chatbot_kb_chunks').delete().eq('source', source)
  if (delErr) throw new Error(`Delete ${source}: ${delErr.message}`)

  let inserted = 0
  for (const chunk of chunks) {
    const embedding = await embedText(`${chunk.title}\n${chunk.content}`)
    const { error } = await sb.from('chatbot_kb_chunks').insert({
      source: chunk.source,
      title: chunk.title,
      content: chunk.content,
      content_hash: chunk.content_hash,
      embedding,
    })
    if (error) {
      if (error.message.includes('duplicate') || error.code === '23505') continue
      throw new Error(`Insert: ${error.message}`)
    }
    inserted++
    process.stdout.write(`\r  ${source}: ${inserted}/${chunks.length}`)
  }
  console.log('')
  return inserted
}

async function main() {
  console.log('\nIngesta KB chatbot ESKALA\n')

  const staticChunks = collectStaticChunks()
  const blogChunks = await loadBlogChunks()
  const all = [...staticChunks, ...blogChunks]

  const bySource = new Map<string, IngestChunk[]>()
  for (const c of all) {
    const list = bySource.get(c.source) ?? []
    list.push(c)
    bySource.set(c.source, list)
  }

  console.log(`Fragmentos totales: ${all.length} (${bySource.size} fuentes)\n`)

  let total = 0
  for (const [source, chunks] of bySource) {
    console.log(`→ ${source} (${chunks.length} chunks)`)
    total += await upsertSourceChunks(source, chunks)
  }

  console.log(`\nIngesta completada: ${total} chunks insertados\n`)
}

main().catch((e) => {
  const cause = e instanceof Error && 'cause' in e ? e.cause : undefined
  console.error(`\n${e instanceof Error ? e.message : e}`)
  if (cause) console.error(cause)
  process.exit(1)
})
