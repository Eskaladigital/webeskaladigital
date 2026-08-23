const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = 'https://yivdoyjjcwvevznwzrph.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const project = {
  title: 'Optimal Breaks: La Biblia del Breakbeat, Archivo Cultural Bilingüe con IA',
  slug: 'optimalbreaks-archivo-breakbeat',
  client: 'Optimal Breaks',
  industry: 'Música / Cultura',
  short_description: 'Archivo cultural bilingüe (ES/EN) sobre la cultura breakbeat: historia, artistas, sellos, eventos, escenas, mixes y charts semanales. DJ deck interactivo con audio real, agentes de IA para gestión de contenido y estética fanzine/club única. Next.js + Supabase.',
  full_description: `# Optimal Breaks: La Biblia del Breakbeat

**Optimal Breaks** es un archivo cultural vivo dedicado a preservar y celebrar la cultura **breakbeat** en todo el mundo: desde el Bronx de los 70 y el rave británico hasta la época dorada de Andalucía y la escena actual. Un proyecto editorial y tecnológico desarrollado íntegramente por ESKALA Digital.

## El Concepto

Una plataforma **bilingüe (español/inglés)** que funciona como archivo, revista, guía, agenda y memoria de escena. No es una web estática: es una base de datos cultural en crecimiento constante, alimentada por agentes de IA y curaduría editorial.

### Las Secciones

**1. Historia**
- Línea temporal interactiva desde 1973 (DJ Kool Herc) hasta hoy
- Capítulos: orígenes y Amen break, UK rave, Big Beat, Nu Skool, Andalucía, Australia, era digital

**2. Artistas y Sellos**
- Fichas completas con bios bilingües, estilos, tracks esenciales y redes
- Top 10 de Beatport integrado por artista y sello (scraping automatizado)
- Cronología de artistas por lustros

**3. Charts y Tracks**
- 40 Breaks Vitales, New Releases semanales y Retro Vinyl Picks
- Fechas de lanzamiento con scraping de Beatport y Bandcamp
- Top de la Comunidad y listas personales de usuarios

**4. Eventos y Escenas**
- Agenda mundial de eventos breakbeat con fichas de promotoras
- Escenas territoriales documentadas (Andalucía, Australia, UK...)

**5. Blog y Mixes**
- Ensayos editoriales sobre la cultura del break
- Reproductor de mixes integrado

## DJ Deck Interactivo

La portada incluye una **cabina de DJ funcional** con dos platos, mixer, EQ de 3 bandas, FX, crossfader y audio real con scratch. Una experiencia inmersiva que convierte la home en una declaración de intenciones.

## Agentes de IA para Gestión de Contenido

- **Agente conversacional admin**: foto de un cartel, texto o link → extracción con visión/OCR → confirmación → alta automática de eventos, artistas, sellos o mixes
- **Agente de artistas**: genera fichas completas bilingües a partir de un slug
- **Descubrimiento desde charts**: alta automática de artistas con ≥3 créditos en los charts semanales
- **Selección de carteles por visión**: el cartel oficial de cada evento se elige con OCR, no solo por búsqueda de imágenes

## Comunidad y Usuarios

- Registro con Supabase Auth (email + Google OAuth)
- Favoritos, guardados y valoraciones 1-5 de experiencias en vivo
- Listas de tracks propias y públicas, "Almas Gemelas" por afinidad musical
- PWA instalable con reproductor persistente

## Rendimiento y SEO

- Optimización Core Web Vitals: fuentes self-hosted con preload, audio diferido hasta el primer Play, caché de lecturas públicas
- Rutas /es y /en con middleware propio de idioma
- Sitemap dinámico, Open Graph por ficha y SEO editorial orientado a "breakbeat"
- Google Analytics 4 con Consent Mode v2

## Stack Tecnológico

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **IA**: OpenAI (agentes con tools, visión/OCR para carteles)
- **Scraping**: Beatport y Bandcamp para charts y fechas de release
- **Hosting**: Vercel con Data Cache y CDN global
- **Analítica**: GA4 con Consent Mode v2`,

  challenge: 'La cultura breakbeat, pese a su enorme influencia (es la semilla del hip-hop, el jungle y el drum and bass), carecía de un archivo digital serio, bilingüe y vivo. La información estaba dispersa en foros muertos, mixes sin contexto y memoria oral que se pierde. El reto era doble: por un lado, construir una plataforma editorial capaz de documentar 50 años de historia, cientos de artistas, sellos, eventos y escenas territoriales en dos idiomas; por otro, hacerlo mantenible por un equipo mínimo, con charts semanales, agenda de eventos mundial y fichas que se actualizan constantemente. Además, la web debía transmitir la estética de la escena (fanzine, club, vinilo) sin sacrificar rendimiento ni SEO.',

  solution: 'ESKALA Digital diseñó y desarrolló Optimal Breaks como un archivo cultural sobre Next.js 14 y Supabase, con una capa de agentes de IA que hace viable el mantenimiento: un agente conversacional admin que da de alta eventos a partir de la foto de un cartel (visión/OCR), un agente de artistas que genera fichas bilingües completas, y pipelines de scraping de Beatport y Bandcamp que alimentan los charts semanales y los Top 10 por artista y sello. La identidad visual fanzine/club se materializa en un DJ deck interactivo en portada con audio real, platos, mixer y crossfader. El rendimiento se cuidó al detalle: audio diferido hasta el primer Play, fuentes self-hosted con preload del LCP, caché de lecturas públicas con revalidación y middleware de idioma propio para las rutas /es y /en.',

  results: 'Optimal Breaks se ha consolidado como el archivo de referencia de la cultura breakbeat en español e inglés. La plataforma documenta la historia completa del género (del Bronx a Andalucía), mantiene charts semanales con los 40 Breaks Vitales y New Releases, una agenda mundial de eventos y fichas de artistas, sellos, escenas y promotoras en crecimiento constante. Los agentes de IA han reducido drásticamente el coste de mantenimiento editorial: dar de alta un evento pasa de 20 minutos a mandar una foto del cartel. La comunidad puede registrarse, valorar experiencias en vivo, crear listas de tracks y descubrir "Almas Gemelas" por afinidad musical. Todo con Core Web Vitals optimizados y una estética fanzine única en el sector.',

  featured_image: '/portfolio/optimalbreaks-archivo-breakbeat/hero.jpg',
  gallery_images: [
    '/portfolio/optimalbreaks-archivo-breakbeat/hero.jpg',
    '/portfolio/optimalbreaks-archivo-breakbeat/screenshot-full.jpg'
  ],
  video_url: null,
  website_url: 'https://www.optimalbreaks.com',
  services: ['diseño-web', 'apps-ia', 'branding'],
  metrics: {
    idiomas: "ES + EN (rutas /es y /en con middleware propio)",
    secciones: "Historia, Artistas, Sellos, Eventos, Escenas, Mixes, Tracks, Top 100, Blog",
    charts: "40 Breaks Vitales + New Releases semanales + Retro Vinyl Picks",
    dj_deck: "Cabina interactiva con audio real, mixer, EQ y crossfader",
    agentes_ia: "Alta de eventos por foto de cartel (visión/OCR), fichas de artistas automáticas",
    scraping: "Beatport + Bandcamp (Top 10 por artista/sello, fechas de release)",
    comunidad: "Auth, favoritos, valoraciones en vivo, listas de tracks, Almas Gemelas",
    pwa: "Instalable con reproductor persistente",
    rendimiento: "Audio diferido, fuentes self-hosted, caché de lecturas públicas",
    tecnologia: "Next.js 14 + Supabase + OpenAI + Tailwind + Vercel",
    analitica: "GA4 con Consent Mode v2",
    año: "2026"
  },
  published: true,
  featured: true,
  order_position: 1,
  meta_title: 'Optimal Breaks | Archivo Breakbeat Bilingüe con IA | ESKALA',
  meta_description: 'Archivo cultural del breakbeat en ES/EN: historia, artistas, charts y eventos. DJ deck interactivo y agentes de IA. Next.js + Supabase.',
  project_date: '2026-08-23',
  published_at: new Date().toISOString()
};

async function main() {
  console.log('Insertando Optimal Breaks en portfolio...\n');

  const { data: existing } = await supabase
    .from('portfolio_projects')
    .select('id')
    .eq('slug', project.slug)
    .single();

  if (existing) {
    console.log('Proyecto existe, actualizando...');
    const { data, error } = await supabase
      .from('portfolio_projects')
      .update(project)
      .eq('slug', project.slug)
      .select();

    if (error) {
      console.error('Error actualizando:', error.message);
      return;
    }
    console.log('Actualizado:', data[0].title);
  } else {
    console.log('Proyecto nuevo, insertando...');
    const { data, error } = await supabase
      .from('portfolio_projects')
      .insert(project)
      .select();

    if (error) {
      console.error('Error insertando:', error.message);
      console.error('Detalle:', error.details);
      return;
    }
    console.log('Insertado:', data[0].title);
  }

  const { data: verify } = await supabase
    .from('portfolio_projects')
    .select('title, slug, client, published, featured, order_position, project_date, website_url')
    .eq('slug', project.slug)
    .single();

  console.log('\nVerificacion:');
  console.log(JSON.stringify(verify, null, 2));
  console.log('\nOptimal Breaks añadido al portfolio.');
}

main().catch(console.error);
