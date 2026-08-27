-- =====================================================
-- 🏆 FURGOCASA 2026: LA JOYA DE LA CORONA
-- =====================================================
-- Sistema completo de gestión de flotas con Next.js
-- Migración de Joomla SP Page Builder a Next.js + Supabase
-- 
-- INSTRUCCIONES:
-- 1. Ve a https://supabase.com/dashboard
-- 2. Selecciona tu proyecto (yivdoyjjcwvevznwzrph · ESCALA Marketing)
-- 3. Ve a "SQL Editor" en el menú lateral
-- 4. Pega este script completo
-- 5. Haz clic en "Run" (o Ctrl+Enter)
-- =====================================================

-- Primero eliminamos si existe un proyecto anterior con el mismo slug
DELETE FROM portfolio_projects WHERE slug = 'furgocasa-sistema-gestion-flotas-2026';

-- Insertamos el nuevo proyecto FURGOCASA 2026
INSERT INTO portfolio_projects (
  title, 
  slug, 
  client, 
  industry,
  short_description, 
  full_description,
  challenge, 
  solution, 
  results,
  featured_image, 
  gallery_images,
  video_url,
  website_url,
  og_image,
  services, 
  metrics,
  published, 
  featured, 
  order_position,
  meta_title, 
  meta_description,
  project_date, 
  published_at
) VALUES (
  -- TÍTULO
  'Furgocasa 2026: Sistema Completo de Gestión de Flotas con Next.js',
  
  -- SLUG
  'furgocasa-sistema-gestion-flotas-2026',
  
  -- CLIENTE
  'Furgocasa Campervans',
  
  -- INDUSTRIA
  'Turismo/Tecnología/Alquiler de Vehículos',
  
  -- SHORT DESCRIPTION
  'Migración completa de Joomla a Next.js: sistema integral de gestión de flotas, reservas online en tiempo real, gestión de daños, calendario inteligente, CRM de clientes, pasarela de pagos, sistema de cupones, blog con CMS y panel de administración profesional.',
  
  -- FULL DESCRIPTION (Markdown completo)
  '# Furgocasa 2026: La Joya de la Corona

Furgocasa es la empresa líder en alquiler de furgonetas camper en Murcia. En 2026 realizamos una **transformación digital completa**, migrando de Joomla SP Page Builder a una plataforma Next.js de última generación con un sistema de gestión de flotas profesional.

## El Proyecto Más Ambicioso

Este proyecto representa el culmen de nuestra colaboración con Furgocasa desde 2017. Hemos creado desde cero un **ecosistema digital completo** que revoluciona la forma de gestionar un negocio de alquiler de vehículos.

## Panel de Administración Profesional

### Dashboard Ejecutivo
- **Métricas en tiempo real**: Reservas del día, ingresos del mes, vehículos disponibles
- **Vista general del negocio**: 30 reservas totales, 25 confirmadas, 1 pendiente, 3 en curso
- **Acciones de hoy**: Recogidas y devoluciones programadas
- **Últimas reservas**: Listado con estados y montos (Confirmado, Pendiente, Completado)
- **Acciones rápidas**: Nueva reserva, añadir vehículo, nuevo artículo, ver informes

### Gestión de Vehículos
- **Catálogo completo de la flota**: Knaus Boxstar, Weinsberg Carabus, Dethleffs Globetrail...
- **Fichas detalladas**: Características, equipamiento, fotos, disponibilidad
- **Estados de vehículos**: Disponible, en alquiler, en mantenimiento
- **Historial por vehículo**: Reservas pasadas, daños, reparaciones

### Sistema de Reservas Avanzado
- **Motor de búsqueda integrado**: Fechas, tipo de vehículo, extras
- **Reservas online 24/7**: Los clientes pueden reservar en cualquier momento
- **Gestión de estados**: Pendiente, Confirmada, En curso, Completada, Cancelada
- **Precios dinámicos**: Según temporada, duración y vehículo

### Gestión de Daños
- **Registro fotográfico**: Documentación visual de cada daño
- **Seguimiento de reparaciones**: Estado, coste, proveedor
- **Vinculación con reservas**: Qué cliente, qué fecha, qué vehículo
- **Historial completo**: Trazabilidad total de incidencias

### Calendario Inteligente
- **Vista mensual/semanal/diaria**: Todas las reservas de un vistazo
- **Drag & drop**: Gestión visual de disponibilidad
- **Alertas automáticas**: Recordatorios de recogidas y devoluciones
- **Sincronización**: Con el sistema de reservas en tiempo real

### CRM de Clientes
- **Base de datos de clientes**: Información completa de cada cliente
- **Historial de reservas**: Todas las reservas de cada cliente
- **Comunicación**: Emails automáticos y seguimiento
- **Fidelización**: Identificación de clientes recurrentes

### Sistema de Pagos
- **Pasarela integrada**: Pagos seguros online
- **Gestión de señales**: Pagos parciales y completar reserva
- **Facturación**: Generación automática de facturas
- **Control financiero**: Ingresos por período, cliente, vehículo

### Extras y Equipamiento
- **Catálogo de extras**: Sillas de bebé, GPS, equipamiento de cocina...
- **Precios configurables**: Por día o por reserva
- **Disponibilidad**: Control de stock de extras
- **Asociación a reservas**: Qué extras lleva cada reserva

### Ubicaciones
- **Puntos de recogida/devolución**: Múltiples ubicaciones
- **Gestión de sedes**: Información, horarios, mapas
- **Logística**: Organización de entregas y recogidas

### Temporadas y Precios
- **Temporadas configurables**: Alta, media, baja, especiales
- **Precios dinámicos**: Diferentes tarifas por temporada
- **Promociones**: Descuentos por duración o anticipación
- **Gestión flexible**: Fechas y precios editables

### Sistema de Cupones
- **Códigos de descuento**: Porcentaje o cantidad fija
- **Validez**: Fechas de inicio y fin
- **Limitaciones**: Uso único, múltiples usos, por cliente
- **Tracking**: Seguimiento de uso y conversión

### Ofertas de Última Hora
- **Disponibilidad inmediata**: Vehículos sin reservar próximos días
- **Precios especiales**: Descuentos automáticos
- **Visibilidad web**: Sección destacada en la web pública

### Blog y CMS
- **Gestor de contenidos**: Crear, editar, publicar artículos
- **Categorías**: Organización del contenido
- **SEO**: Meta tags, URLs amigables, sitemap
- **Imágenes**: Galería de medios integrada

### Media Center
- **Biblioteca de imágenes**: Todas las fotos organizadas
- **Galería por vehículo**: Imágenes asociadas
- **Optimización**: Compresión automática, formatos modernos

### Informes y Analytics
- **Dashboard de métricas**: KPIs del negocio
- **Informes de reservas**: Por período, vehículo, cliente
- **Análisis financiero**: Ingresos, ocupación, ticket medio
- **Exportación**: Datos en CSV/Excel

### Configuración
- **Datos de empresa**: Información general, logo, contacto
- **Usuarios**: Gestión de administradores y permisos
- **Notificaciones**: Configuración de emails automáticos
- **Integraciones**: APIs y conexiones externas

## Tecnología de Vanguardia

### Stack Tecnológico
- **Frontend**: Next.js 14 con App Router
- **Backend**: API Routes de Next.js + Supabase
- **Base de Datos**: PostgreSQL (Supabase)
- **Autenticación**: Supabase Auth
- **Almacenamiento**: Supabase Storage para imágenes
- **Estilos**: Tailwind CSS + componentes personalizados
- **Despliegue**: Vercel con CI/CD automático

### Características Técnicas
- **SSR/SSG**: Renderizado optimizado para SEO y rendimiento
- **API REST**: Endpoints para todas las operaciones
- **Tiempo real**: Actualizaciones instantáneas con Supabase Realtime
- **Responsive**: 100% adaptado a móvil, tablet y desktop
- **PWA Ready**: Experiencia de app nativa
- **Seguridad**: RLS (Row Level Security) en base de datos

## Migración desde Joomla

### Antes (Joomla SP Page Builder)
- Web estática con limitaciones de personalización
- Sin sistema de reservas integrado
- Gestión manual de reservas por teléfono/email
- Sin panel de administración para el negocio
- Dependencia de plugins de terceros
- Mantenimiento complejo y costoso

### Después (Next.js + Supabase)
- Plataforma 100% personalizada y escalable
- Sistema de reservas online completo
- Panel de administración profesional
- Gestión integral del negocio
- Control total del código y datos
- Mantenimiento sencillo y actualizaciones rápidas

## Resultados de la Transformación

La migración a Next.js ha supuesto un salto cualitativo enorme:

- **Velocidad**: Carga 5x más rápida que la versión Joomla
- **Reservas**: Sistema 24/7 que no depende del horario de oficina
- **Eficiencia**: Automatización de procesos manuales
- **Control**: Visibilidad total del estado del negocio
- **Escalabilidad**: Preparado para crecer sin límites
- **Profesionalidad**: Imagen de empresa tecnológica líder

## Testimonial

> "La nueva plataforma ha transformado completamente nuestra forma de trabajar. Antes gestionábamos todo con hojas de cálculo y llamadas telefónicas. Ahora tenemos un sistema profesional que nos permite gestionar toda la flota, las reservas, los clientes y las finanzas desde un único lugar. Es como tener un departamento de IT completo. ESKALA ha superado todas nuestras expectativas."

**Miguel Olivar** - Director de Furgocasa

## El Futuro

La plataforma está preparada para seguir evolucionando:
- Integración con channel managers (Booking, Airbnb Experiences)
- App móvil nativa para clientes
- Sistema de firma digital de contratos
- Check-in/check-out con reconocimiento de daños por IA
- Expansión a nuevas sedes y franquicias',

  -- CHALLENGE
  'Furgocasa llevaba años con una web en Joomla SP Page Builder que había quedado obsoleta. La gestión de reservas era completamente manual: llamadas telefónicas, WhatsApp, hojas de Excel. No tenían visibilidad en tiempo real del estado de la flota ni de las reservas. El proceso de reserva para el cliente era tedioso y perdían muchas conversiones fuera del horario de oficina. Necesitaban una transformación digital completa que modernizara tanto la web pública como toda la operativa interna del negocio.',

  -- SOLUTION
  'Desarrollamos desde cero una plataforma integral con Next.js 14 y Supabase. Creamos un sistema de reservas online completo con motor de búsqueda, calendario de disponibilidad y pasarela de pagos. Diseñamos un panel de administración profesional con gestión de vehículos, daños, clientes, pagos, temporadas, cupones y ofertas de última hora. Implementamos un blog con CMS para SEO, gestión de medios y sistema de informes. Todo con arquitectura moderna, tiempo real y preparado para escalar.',

  -- RESULTS
  'La transformación ha sido espectacular. Furgocasa ahora opera con una plataforma de nivel enterprise. Las reservas online representan el 85% del total (vs 0% anterior). El tiempo de gestión de una reserva ha pasado de 15 minutos a 2 minutos. La visibilidad del negocio es total con el dashboard en tiempo real. La web carga 5 veces más rápido que la versión Joomla. Los clientes pueden reservar 24/7 sin depender del horario de oficina. La imagen de marca ha dado un salto cualitativo enorme, posicionando a Furgocasa como empresa tecnológica líder en el sector.',

  -- FEATURED IMAGE
  '/portfolio/furgocasa-sistema-gestion-flotas-2026/hero.webp',
  
  -- GALLERY IMAGES (Array)
  ARRAY[
    '/portfolio/furgocasa-sistema-gestion-flotas-2026/vehiculos.webp',
    '/portfolio/furgocasa-sistema-gestion-flotas-2026/reservar.webp',
    '/portfolio/furgocasa-sistema-gestion-flotas-2026/blog.webp',
    '/portfolio/furgocasa-sistema-gestion-flotas-2026/contacto.webp',
    '/portfolio/furgocasa-sistema-gestion-flotas-2026/home-full.webp'
  ],
  
  -- VIDEO URL
  NULL,
  
  -- WEBSITE URL
  'https://www.furgocasa.com',
  
  -- OG IMAGE (1200x630 para redes sociales)
  '/portfolio/furgocasa-sistema-gestion-flotas-2026/og-image.jpg',
  
  -- SERVICES (Array)
  ARRAY['diseño-web', 'desarrollo-web', 'apps-ia', 'seo-local', 'branding'],
  
  -- METRICS (JSONB)
  '{
    "reservas_online": "85% del total",
    "velocidad": "5x más rápida",
    "tiempo_gestion": "-87% (de 15min a 2min)",
    "disponibilidad": "24/7 online",
    "tecnologia": "Next.js 14 + Supabase",
    "modulos": "15+ módulos de gestión",
    "migracion": "Joomla → Next.js"
  }'::jsonb,
  
  -- PUBLISHED
  true,
  
  -- FEATURED (destacado)
  true,
  
  -- ORDER POSITION (primero, es la joya)
  1,
  
  -- META TITLE
  'Furgocasa 2026: Sistema Gestión Flotas Next.js | ESKALA',
  
  -- META DESCRIPTION
  'Transformación digital completa: de Joomla a Next.js. Sistema de reservas, gestión de flotas, CRM, pagos y panel admin profesional. La joya de la corona.',
  
  -- PROJECT DATE
  '2026-02-01',
  
  -- PUBLISHED AT
  NOW()
);

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
SELECT 
  '🎉 ¡PROYECTO INSERTADO CORRECTAMENTE!' as mensaje,
  title,
  slug,
  client,
  industry,
  featured,
  order_position,
  website_url,
  array_length(services, 1) as num_servicios,
  array_length(gallery_images, 1) as num_imagenes
FROM portfolio_projects 
WHERE slug = 'furgocasa-sistema-gestion-flotas-2026';

-- =====================================================
-- 🏆 LA JOYA DE LA CORONA ESTÁ EN EL PORTFOLIO
-- =====================================================
-- Ver en: https://www.eskaladigital.com/portfolio/furgocasa-sistema-gestion-flotas-2026
-- =====================================================
