export const runtime = 'nodejs'
export const maxDuration = 60

import { getSupabaseServiceClient, getSupabaseServiceConfigError } from '@/lib/supabase-service'
import {
  getOrCreateConversation,
  loadConversationHistory,
  prepareChatContext,
  saveMessage,
  streamChatCompletion,
  toOpenAIMessages,
} from '@/lib/chatbot/chat-service'

function sseLine(data: Record<string, unknown>): string {
  return `data: ${JSON.stringify(data)}\n\n`
}

export async function POST(request: Request) {
  const configError = getSupabaseServiceConfigError()
  if (configError) {
    return new Response(JSON.stringify({ error: configError }), { status: 503 })
  }

  if (!process.env.OPENAI_API_KEY?.trim()) {
    return new Response(JSON.stringify({ error: 'Falta OPENAI_API_KEY en el servidor' }), {
      status: 503,
    })
  }

  const sb = getSupabaseServiceClient()
  if (!sb) {
    return new Response(JSON.stringify({ error: 'Chatbot no configurado' }), { status: 503 })
  }

  let body: {
    sessionId?: string
    conversationId?: string
    text?: string
  }

  try {
    body = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 400 })
  }

  const sessionId = typeof body.sessionId === 'string' ? body.sessionId.trim() : ''
  const text = typeof body.text === 'string' ? body.text.trim() : ''

  if (!sessionId) {
    return new Response(JSON.stringify({ error: 'Falta sessionId' }), { status: 400 })
  }
  if (!text) {
    return new Response(JSON.stringify({ error: 'Falta text' }), { status: 400 })
  }

  try {
    const conversationId = await getOrCreateConversation(sb, sessionId, body.conversationId)
    const history = await loadConversationHistory(sb, conversationId)
    const { systemPrompt } = await prepareChatContext(sb, text, history)
    const openaiMessages = toOpenAIMessages(history, systemPrompt, text)

    await saveMessage(sb, conversationId, 'user', text)

    const stream = await streamChatCompletion(openaiMessages)
    const encoder = new TextEncoder()

    const readable = new ReadableStream({
      async start(controller) {
        let full = ''
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content ?? ''
            if (delta) {
              full += delta
              controller.enqueue(encoder.encode(sseLine({ type: 'token', content: delta })))
            }
          }

          const assistantId = await saveMessage(sb, conversationId, 'assistant', full)
          controller.enqueue(
            encoder.encode(
              sseLine({
                type: 'done',
                conversationId,
                messageId: assistantId,
                content: full,
              })
            )
          )
        } catch (err) {
          const msg = err instanceof Error ? err.message : 'Error en el chat'
          controller.enqueue(encoder.encode(sseLine({ type: 'error', error: msg })))
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error del chatbot'
    return new Response(JSON.stringify({ error: message }), { status: 500 })
  }
}
