-- =====================================================
-- AÑADIR IMÁGENES OPEN GRAPH AL PORTFOLIO
-- =====================================================
-- Este script añade la columna og_image y actualiza
-- todos los proyectos con sus imágenes optimizadas
-- para redes sociales (1200x630px)

-- =====================================================
-- PASO 1: AÑADIR COLUMNA OG_IMAGE (si no existe)
-- =====================================================
ALTER TABLE portfolio_projects 
ADD COLUMN IF NOT EXISTS og_image VARCHAR(500);

-- =====================================================
-- PASO 2: ACTUALIZAR IMÁGENES OG DE TODOS LOS PROYECTOS
-- =====================================================

UPDATE portfolio_projects SET og_image = '/portfolio/hakadogs-escuela-online-ia/og-image.jpg' WHERE slug = 'hakadogs-escuela-online-ia';
UPDATE portfolio_projects SET og_image = '/portfolio/aleman-pajaron-gestion-obras/og-image.jpg' WHERE slug = 'aleman-pajaron-gestion-obras';
UPDATE portfolio_projects SET og_image = '/portfolio/furgocasa-alquiler-camper/og-image.jpg' WHERE slug = 'furgocasa-alquiler-camper';
UPDATE portfolio_projects SET og_image = '/portfolio/mapa-furgocasa-ia/og-image.jpg' WHERE slug = 'mapa-furgocasa-ia';
UPDATE portfolio_projects SET og_image = '/portfolio/tricholand-tienda-cactus/og-image.jpg' WHERE slug = 'tricholand-tienda-cactus';
UPDATE portfolio_projects SET og_image = '/portfolio/acttax-asesoria-fiscal/og-image.jpg' WHERE slug = 'acttax-asesoria-fiscal';
UPDATE portfolio_projects SET og_image = '/portfolio/gvc-expertos-abogados/og-image.jpg' WHERE slug = 'gvc-expertos-abogados';
UPDATE portfolio_projects SET og_image = '/portfolio/gvc-abogados-murcia/og-image.jpg' WHERE slug = 'gvc-abogados-murcia';
UPDATE portfolio_projects SET og_image = '/portfolio/casi-cinco-recomendaciones/og-image.jpg' WHERE slug = 'casi-cinco-recomendaciones';
UPDATE portfolio_projects SET og_image = '/portfolio/on-procuradores-murcia/og-image.jpg' WHERE slug = 'on-procuradores-murcia';
UPDATE portfolio_projects SET og_image = '/portfolio/rebeca-medina/og-image.jpg' WHERE slug = 'rebeca-medina';
UPDATE portfolio_projects SET og_image = '/portfolio/bcm-abogados-ibiza/og-image.jpg' WHERE slug = 'bcm-abogados-ibiza';

-- =====================================================
-- VERIFICACIÓN
-- =====================================================
SELECT 
  slug, 
  title,
  featured_image,
  og_image,
  published
FROM portfolio_projects
WHERE published = true
ORDER BY order_position ASC;

-- =====================================================
-- NOTAS
-- =====================================================
-- 1. Las imágenes OG tienen proporción 1.91:1 (1200x630px)
-- 2. Son las imágenes que se muestran al compartir en Facebook, Twitter, LinkedIn
-- 3. Se generaron automáticamente desde las hero.jpg con Sharp
-- 4. El código de Next.js usa og_image si existe, si no usa featured_image
-- 5. Esto soluciona el problema de las imágenes raras al compartir
