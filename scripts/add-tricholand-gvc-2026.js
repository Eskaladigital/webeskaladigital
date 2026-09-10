const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://yivdoyjjcwvevznwzrph.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const tricholand2026 = {
  title: 'Tricholand 2026: Tienda mayorista B2B en 7 idiomas',
  slug: 'tricholand-tienda-mayorista-2026',
  client: 'Tricholand',
  industry: 'Agricultura y Viveros Especializados',
  short_description:
    'Tienda mayorista de Trichocereus en 7 idiomas: lotes B2B, Redsys y Stripe, blog técnico y landings por país. Next.js 16.',
  full_description: `# Tricholand 2026: de vitrina a tienda mayorista

Tricholand es un vivero de Murcia especializado en **Trichocereus** y cactus columnares, con clientes profesionales en la UE, Reino Unido y Estados Unidos. En 2021 ESKALA levantó su primera web multiidioma. En **2026** reconstruimos el sitio como **tienda B2B**: el mayorista pide, el vivero valida, cobra y factura, todo en el idioma del cliente.

La ficha de 2021 se queda en el portfolio ([Tricholand 2021](/portfolio/tricholand-vivero-cactus)). Esta es la web nueva: [tricholand.com](https://www.tricholand.com).

## Qué hace la tienda

**Siete idiomas de verdad**  
Español, inglés, neerlandés, francés, alemán, italiano y portugués. No es un selector de cortesía: catálogo, carrito, checkout, página de pedido, correos y PDFs salen traducidos. Los slugs del blog y de las variedades también.

**Lotes de mayorista**  
Cada producto lleva pedido mínimo e incremento (por ejemplo 750 uds y luego de 150 en 150). El precio se calcula por unidad a partir del lote. Un particular no compra una planta: un vivero pide un camión.

**IVA B2B a la vista**  
Base imponible e IVA estimado (21 %) en todo el flujo. Nota de exención para entregas UE con NIF-IVA válido. Checkout con 28 países (UE-27 + Reino Unido).

**Pedidos, no un formulario**  
El cliente pide → el admin valida (precios, descuento, envío) → proforma PDF → el cliente paga (transferencia, TPV Redsys o Stripe) → factura PDF. Los mails al cliente van en su idioma; los del admin, en español.

**Catálogo y SEO internacional**  
Fichas de variedad, landings B2B de Pachanoi por país e idioma (UK, Europa, España, Francia, Alemania, Países Bajos, Italia, Portugal) y blog técnico. Sitemap con hreflang. Reloj suizo: 121 artículos en español; el resto de idiomas se traduce encima.

**Contacto y admin**  
Wizard particular / profesional → tabla \`contacts\` + correo. Panel: productos, pedidos, clientes, contactos, blog, media y configuración. PWA en el administrador.

## Stack

Next.js **16.3.3**, React 19, Supabase, Vercel ESKALADIGITAL, Redsys, Stripe, SMTP. Redirecciones desde las rutas viejas de Joomla.`,
  challenge:
    'La web de 2021 posicionaba y explicaba el vivero, pero el pedido B2B seguía fuera: correo, WhatsApp, cantidades a mano. Un mayorista europeo necesita ver lotes, IVA, idioma propio y un flujo de proforma → pago → factura. Plantar un WooCommerce encima no resolvía ni los lotes ni los 7 idiomas del checkout.',
  solution:
    'ESKALA reconstruyó tricholand.com en Next.js 16 como tienda mayorista. Lotes con mínimo e incremento, 7 idiomas de cabo a rabo, IVA B2B visible, checkout a 28 países, pipeline de pedido con proforma y factura, Redsys y Stripe, landings Pachanoi por país y blog técnico con hreflang. El contacto B2B queda en base de datos. Las rutas de Joomla redirigen.',
  results:
    'El vivero vende en la web, no solo se enseña. El pedido mínimo y los incrementos evitan cantidades de aficionado. Un cliente en alemán o neerlandés recorre tienda, checkout y factura sin cambiar de idioma. El blog (121 piezas en español, traducidas a 6 idiomas más) sigue el reloj. La ficha de 2021 documenta el salto anterior; esta es la tienda que está en producción.',
  featured_image: '/portfolio/tricholand-tienda-mayorista-2026/hero.jpg',
  gallery_images: [
    '/portfolio/tricholand-tienda-mayorista-2026/hero.jpg',
    '/portfolio/tricholand-tienda-mayorista-2026/tienda.jpg',
    '/portfolio/tricholand-tienda-mayorista-2026/variedades.jpg',
    '/portfolio/tricholand-tienda-mayorista-2026/blog.jpg',
    '/portfolio/tricholand-tienda-mayorista-2026/contacto.jpg',
    '/portfolio/tricholand-tienda-mayorista-2026/screenshot-full.jpg',
  ],
  video_url: null,
  website_url: 'https://www.tricholand.com',
  og_image: '/portfolio/tricholand-tienda-mayorista-2026/og-image.jpg',
  services: ['diseño-web', 'desarrollo-web', 'seo'],
  metrics: {
    idiomas: '7 (ES, EN, NL, FR, DE, IT, PT)',
    blog_es: '121 artículos',
    checkout: '28 países (UE-27 + UK)',
    pagos: 'Transferencia, Redsys, Stripe',
    lotes: 'Mínimo + incremento por producto',
    tecnologia: 'Next.js 16.3.3 + Supabase + Vercel',
    migracion: 'Joomla → Next.js (tienda B2B)',
    año: '2026',
  },
  published: true,
  featured: true,
  order_position: 1,
  meta_title: 'Tricholand 2026 | Tienda B2B 7 idiomas | ESKALA',
  meta_description:
    'Tienda mayorista B2B de Trichocereus en 7 idiomas. Lotes, Redsys y Stripe, blog técnico y landings por país. Next.js. Hecha por ESKALA.',
  project_date: '2026-08-26',
  published_at: new Date().toISOString(),
};

const gvc2026 = {
  title: 'GVC Abogados 2026: Web del bufete en Murcia (Next.js)',
  slug: 'gvc-abogados-murcia-2026',
  client: 'García-Válcarcel & Cáceres',
  industry: 'Servicios Legales - Bufete Multidisciplinar',
  short_description:
    'Web del bufete en Murcia: 6 áreas, ES/EN, SEO de plaza y lead en BD. Next.js 16. La de 2022 se queda en el portfolio.',
  full_description: `# GVC Abogados 2026: el bufete en Next.js

**García-Valcárcel & Cáceres** es un despacho de Murcia desde 1946 (Gran Vía, 15). En 2022 ESKALA hizo su primera web moderna. En **2026** la reconstruimos en Next.js: plaza Murcia, seis áreas, bilingüe ES/EN y una valla clara con [GVC Expertos](https://www.gvcexpertos.com) para no pelearse el mismo clic.

La ficha de 2022 se queda ([GVC 2022](/portfolio/gvc-abogados-murcia)). Esta es la web viva: [gvcabogados.com](https://www.gvcabogados.com).

## Qué hay en la web nueva

**Seis áreas, no un catálogo infinito**  
Accidentes de tráfico, derecho de familia, negligencias médicas (solo Murcia), permisos de residencia, responsabilidad de la Administración y responsabilidad civil. Accidentes y familia tienen diseño propio; el resto, el molde de servicio.

**Hub & spoke de plaza**  
Cada área tiene página genérica + landings de ciudad. El tiro es **abogados en Murcia**. NAP real: Gran Vía, 15 — 3ª planta. No se finge sucursal en otra ciudad.

**Valla con Expertos**  
Las negligencias médicas **en Murcia** se quedan en el bufete (GSC: esa query en pos. 2,2). Las 18 landings de otras ciudades hacen 301 a gvcexpertos.com (lugar del daño, no sucursal). El vertical nacional de sanitario es Expertos; el bufete es la plaza.

**Bilingüe ES/EN**  
Paridad: cada página en español tiene su gemela en inglés, con hreflang.

**Lead vivo**  
Formulario (particular/empresa, materia, origen, GDPR) → \`contact_submissions\` + SMTP OVH \`contacto@gvcabogados.com\` (aviso al despacho y confirmación al visitante). Admin \`/administrator/contactos\`.

**Blog**  
Administrable con TinyMCE. Redactor en el panel. Cadencia parada desde febrero 2026; la infra está.

## Stack

Next.js **16.3.3**, React 19, Supabase, TinyMCE, Vercel ESKALADIGITAL. Sin middleware ni proxy: las rutas ES/EN son carpetas reales.`,
  challenge:
    'El bufete tenía web desde 2022, pero el SEO de plaza y el de negligencias en toda España se pisaban. Hacía falta una web rápida, bilingüe, con seis áreas bien cortadas y una valla con GVC Expertos: Murcia en el bufete, el resto de ciudades de sanitario al vertical nacional. El lead no podía ser un mailto.',
  solution:
    'ESKALA reconstruyó gvcabogados.com en Next.js 16. Seis áreas con hub y landings de ciudad, ES/EN en paridad, NAP de Gran Vía, formulario a base de datos y correo HTML. Negligencias: hub + landing Murcia; 18 ciudades 301 a Expertos. El blog se administra en el mismo panel.',
  results:
    'La web viva es Next.js en Vercel, no Joomla. Search Console del bufete (16 meses a agosto 2026): 5,99k clics; la query de negligencias en Murcia la gana el bufete (pos. 2,2). La plaza genérica («abogados en Murcia») sigue siendo el trabajo sucio. El visitante deja el lead en la BD. La ficha de 2022 documenta el salto anterior.',
  featured_image: '/portfolio/gvc-abogados-murcia-2026/hero.jpg',
  gallery_images: [
    '/portfolio/gvc-abogados-murcia-2026/hero.jpg',
    '/portfolio/gvc-abogados-murcia-2026/servicios.jpg',
    '/portfolio/gvc-abogados-murcia-2026/accidentes.jpg',
    '/portfolio/gvc-abogados-murcia-2026/blog.jpg',
    '/portfolio/gvc-abogados-murcia-2026/contacto.jpg',
    '/portfolio/gvc-abogados-murcia-2026/screenshot-full.jpg',
  ],
  video_url: null,
  website_url: 'https://www.gvcabogados.com',
  og_image: '/portfolio/gvc-abogados-murcia-2026/og-image.jpg',
  services: ['diseño-web', 'seo-local', 'desarrollo-web'],
  metrics: {
    areas: '6 servicios activos',
    idiomas: 'ES + EN',
    seo: 'Plaza Murcia; negligencias Murcia en el bufete',
    valla: '18 ciudades 301 a GVC Expertos',
    gsc: '5,99k clics / 16 meses (propiedad del bufete)',
    contacto: 'Lead en BD + SMTP OVH',
    tecnologia: 'Next.js 16.3.3 + Supabase + Vercel',
    migracion: 'Joomla → Next.js',
    año: '2026',
  },
  published: true,
  featured: true,
  order_position: 1,
  meta_title: 'GVC Abogados 2026 | Web bufete Murcia | ESKALA',
  meta_description:
    'Web del bufete en Murcia: 6 áreas, ES/EN, SEO de plaza y lead en BD. Next.js 16. Hecha por ESKALA.',
  project_date: '2026-08-28',
  published_at: new Date().toISOString(),
};

async function upsert(project) {
  const { data: existing, error: findError } = await supabase
    .from('portfolio_projects')
    .select('id')
    .eq('slug', project.slug)
    .maybeSingle();

  if (findError) {
    console.error('Error buscando', project.slug, findError.message);
    return false;
  }

  if (existing) {
    const { error } = await supabase
      .from('portfolio_projects')
      .update(project)
      .eq('slug', project.slug);
    if (error) {
      console.error('Error actualizando', project.slug, error.message, error.details);
      return false;
    }
    console.log('Actualizado:', project.title);
  } else {
    const { error } = await supabase.from('portfolio_projects').insert(project);
    if (error) {
      console.error('Error insertando', project.slug, error.message, error.details);
      return false;
    }
    console.log('Insertado:', project.title);
  }
  return true;
}

async function restoreOldShorts() {
  const restorations = [
    {
      slug: 'tricholand-vivero-cactus',
      short_description:
        'Vivero especializado en cactus Trichocereus. Web B2B multiidioma (2021).',
      meta_title: 'Tricholand | Vivero Cactus B2B | ESKALA Portfolio',
      meta_description:
        'Web multiidioma y marketing digital para Tricholand (2021). Vivero de Trichocereus con blog técnico, SEO internacional y redes sociales.',
    },
    {
      slug: 'gvc-abogados-murcia',
      short_description:
        'Bufete multidisciplinar en Murcia desde 1946. Primera web moderna (2022).',
      meta_title: 'GVC Abogados Murcia | Web del bufete | ESKALA Portfolio',
      meta_description:
        'Web de García-Válcarcel & Cáceres (2022): bufete multidisciplinar en Murcia. La versión Next.js de 2026 tiene ficha propia.',
    },
  ];

  for (const row of restorations) {
    const { error } = await supabase
      .from('portfolio_projects')
      .update({
        short_description: row.short_description,
        meta_title: row.meta_title,
        meta_description: row.meta_description,
      })
      .eq('slug', row.slug);
    if (error) {
      console.error('Error restaurando', row.slug, error.message);
    } else {
      console.log('Ficha antigua dejada como histórica:', row.slug);
    }
  }
}

async function main() {
  console.log('Alta Tricholand 2026 + GVC Abogados 2026 (las antiguas se quedan)\n');

  const okT = await upsert(tricholand2026);
  const okG = await upsert(gvc2026);
  await restoreOldShorts();

  if (!okT || !okG) {
    process.exit(1);
  }

  const { data, error } = await supabase
    .from('portfolio_projects')
    .select('slug,title,project_date,published,featured')
    .in('slug', [
      'tricholand-tienda-mayorista-2026',
      'gvc-abogados-murcia-2026',
      'tricholand-vivero-cactus',
      'gvc-abogados-murcia',
    ])
    .order('project_date', { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const { count } = await supabase
    .from('portfolio_projects')
    .select('id', { count: 'exact', head: true })
    .eq('published', true);

  console.log('\nVerificación:');
  console.log(JSON.stringify(data, null, 2));
  console.log('\nPublicadas:', count);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
