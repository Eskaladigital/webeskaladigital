import { readFile, readdir } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const SLUG_PATTERN = /^[a-z0-9-]+$/i

// Nombres bonitos por familia para el selector de versiones
const FAMILY_LABELS: Record<string, string> = {
  neotermica: 'Neotérmica',
  onprocuradores: 'ON Procuradores',
  thenauticstore: 'The Nautic Store',
}

const PRUEBAS_DIRS = [
  join(process.cwd(), 'public', 'pruebas'),
  join(process.cwd(), '..', 'public', 'pruebas'),
]

async function loadDemoHtml(slug: string): Promise<string | null> {
  for (const base of PRUEBAS_DIRS) {
    try {
      return await readFile(join(base, slug, 'index.html'), 'utf-8')
    } catch {
      // standalone vs dev
    }
  }
  return null
}

// Descubre qué versiones (carpetas familia-N con index.html) existen
async function findVersions(family: string): Promise<number[]> {
  const re = new RegExp(`^${family}-(\\d+)$`)
  for (const base of PRUEBAS_DIRS) {
    try {
      const entries = await readdir(/*turbopackIgnore: true*/ base, { withFileTypes: true })
      const nums = entries
        .filter((e) => e.isDirectory() && re.test(e.name))
        .map((e) => parseInt(e.name.match(re)![1], 10))
        .sort((a, b) => a - b)
      if (nums.length) return nums
    } catch {
      // siguiente candidato
    }
  }
  return []
}

function buildSwitcher(family: string, current: number, versions: number[]): string {
  const label = FAMILY_LABELS[family] ?? family.charAt(0).toUpperCase() + family.slice(1)
  const items = versions
    .map(
      (n) =>
        `<a class="esk-vsw__item${n === current ? ' active' : ''}" href="/pruebas/${family}-${n}"${
          n === current ? ' aria-current="true"' : ''
        }><span>Versión ${n}</span><span class="esk-vsw__num">v${n}</span></a>`
    )
    .join('')

  return `
<style>
.esk-vsw{position:fixed;right:18px;bottom:18px;z-index:2147483000;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}
.esk-vsw *{box-sizing:border-box;margin:0}
.esk-vsw__toggle{display:flex;align-items:center;gap:.5rem;background:#0f172a;color:#fff;border:1px solid rgba(255,255,255,.18);
  border-radius:999px;padding:.6rem 1rem;font-size:13px;line-height:1;font-weight:600;cursor:pointer;box-shadow:0 12px 34px rgba(0,0,0,.4)}
.esk-vsw__toggle:hover{background:#1e293b}
.esk-vsw__dot{width:8px;height:8px;border-radius:50%;background:#34d399;box-shadow:0 0 9px #34d399;flex:none}
.esk-vsw__caret{margin-left:.15rem;opacity:.6;transition:transform .2s}
.esk-vsw.open .esk-vsw__caret{transform:rotate(180deg)}
.esk-vsw__panel{position:absolute;right:0;bottom:calc(100% + 10px);min-width:220px;background:#0f172a;color:#fff;
  border:1px solid rgba(255,255,255,.14);border-radius:15px;padding:.5rem;box-shadow:0 22px 55px rgba(0,0,0,.55);
  opacity:0;transform:translateY(8px) scale(.98);pointer-events:none;transition:opacity .18s,transform .18s}
.esk-vsw.open .esk-vsw__panel{opacity:1;transform:none;pointer-events:auto}
.esk-vsw__head{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.55);padding:.45rem .65rem .55rem}
.esk-vsw__list{display:grid;gap:2px;max-height:min(60vh,420px);overflow:auto}
.esk-vsw__item{display:flex;align-items:center;justify-content:space-between;gap:.6rem;padding:.6rem .7rem;border-radius:10px;
  color:#e5edf6;text-decoration:none;font-size:13px;font-weight:500}
.esk-vsw__item:hover{background:rgba(255,255,255,.08)}
.esk-vsw__item.active{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;font-weight:700}
.esk-vsw__num{opacity:.6;font-variant-numeric:tabular-nums}
.esk-vsw__item.active .esk-vsw__num{opacity:.85}
.esk-vsw__foot{padding:.55rem .7rem .35rem;border-top:1px solid rgba(255,255,255,.1);margin-top:.35rem;font-size:11px;color:rgba(255,255,255,.5)}
.esk-vsw__foot a{color:#93c5fd;text-decoration:none}
.esk-vsw__foot a:hover{text-decoration:underline}
@media(max-width:600px){.esk-vsw{right:12px;bottom:12px}.esk-vsw__toggle{padding:.55rem .85rem;font-size:12px}}
@media print{.esk-vsw{display:none!important}}
</style>
<div class="esk-vsw" id="eskVsw">
  <div class="esk-vsw__panel" role="menu" aria-label="Versiones de ${label}">
    <div class="esk-vsw__head">${label} · versiones</div>
    <div class="esk-vsw__list">${items}</div>
    <div class="esk-vsw__foot">Comparativa de propuestas · <a href="https://www.eskaladigital.com/servicios" target="_blank" rel="noopener">ESCALA</a></div>
  </div>
  <button class="esk-vsw__toggle" type="button" aria-haspopup="menu" aria-expanded="false">
    <span class="esk-vsw__dot"></span>Versión ${current} · cambiar<span class="esk-vsw__caret">▾</span>
  </button>
</div>
<script>
(function(){
  var w=document.getElementById('eskVsw');if(!w)return;
  var t=w.querySelector('.esk-vsw__toggle');
  t.addEventListener('click',function(e){e.stopPropagation();var o=w.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
  document.addEventListener('click',function(e){if(!w.contains(e.target)){w.classList.remove('open');t.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){w.classList.remove('open');t.setAttribute('aria-expanded','false');}});
})();
</script>
`
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  if (!SLUG_PATTERN.test(slug)) {
    return new NextResponse('Not found', { status: 404 })
  }

  let html = await loadDemoHtml(slug)
  if (!html) {
    return new NextResponse('Not found', { status: 404 })
  }

  // Inyecta el selector de versiones si el slug es familia-N y hay 2+ versiones
  const m = slug.match(/^(.+)-(\d+)$/)
  if (m) {
    const family = m[1]
    const current = parseInt(m[2], 10)
    const versions = await findVersions(family)
    if (versions.length > 1) {
      const switcher = buildSwitcher(family, current, versions)
      html = html.includes('</body>')
        ? html.replace(/<\/body>/i, `${switcher}\n</body>`)
        : html + switcher
    }
  }

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
