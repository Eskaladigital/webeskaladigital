# Portfolio - Imágenes de Proyectos

## Estructura de carpetas

Cada proyecto tiene su propia carpeta donde debes subir las capturas de pantalla:

### 📂 Proyectos:

1. **furgocasa-alquiler-camper/** - www.furgocasa.com ⭐ **PROYECTO DESTACADO**
2. **mapa-furgocasa-ia/** - www.mapafurgocasa.com
3. **tricholand-tienda-cactus/** - www.tricholand.com (ficha 2021)
3b. **tricholand-tienda-mayorista-2026/** - tienda B2B Next.js (ficha 2026; la de 2021 se queda)
4. **acttax-asesoria-fiscal/** - www.acttax.es
5. **gvc-expertos-abogados/** - www.gvcexpertos.com
6. **gvc-abogados-murcia/** - www.gvcabogados.com (ficha 2022)
6b. **gvc-abogados-murcia-2026/** - web Next.js del bufete (ficha 2026; la de 2022 se queda)
7. **casi-cinco-recomendaciones/** - www.casicinco.com
8. **hakadogs-adiestramiento-canino/** - www.hakadogs.com
9. **on-procuradores-murcia/** - www.onprocuradores.com

## 📸 Qué imágenes subir:

### Para proyectos estándar:
En cada carpeta, sube:
- `hero.jpg` o `hero.png` - Imagen principal (captura del home)
- `screenshot-full.jpg` - Captura de pantalla completa
- `screenshot-1.jpg` - Captura adicional (opcional)
- `screenshot-2.jpg` - Captura adicional (opcional)
- `screenshot-3.jpg` - Captura adicional (opcional)

### Para proyecto Furgocasa (página completa detallada):
Necesitas al menos 6-9 imágenes para contar la historia completa:

**Obligatorias:**
- `hero.jpg` - Imagen principal (furgoneta en paisaje espectacular)
- `screenshot-full.jpg` - Screenshot completo de la web
- `interior.jpg` - Interior de una furgoneta
- `exterior.jpg` - Exterior de otra furgoneta de la flota
- `branding.jpg` - Elementos de identidad visual (logo, colores, tipografía)
- `mockup-web.jpg` - Mockup de la web en múltiples dispositivos

**Opcionales pero recomendadas:**
- `social-media.jpg` - Grid de Instagram o posts de redes sociales
- `lifestyle-1.jpg` - Personas disfrutando de la experiencia
- `lifestyle-2.jpg` - Furgoneta en ubicación emblemática
- `screenshot-2.jpg` - Otra sección destacada de la web
- `screenshot-3.jpg` - Sistema de reservas o calendario

## 🔧 Después de subir las imágenes:

### 1. Para actualizar imagen principal de cada proyecto:

```sql
-- Actualizar imagen principal de cada proyecto
UPDATE portfolio_projects SET featured_image = '/portfolio/furgocasa-alquiler-camper/hero.jpg' WHERE slug = 'furgocasa-alquiler-camper';
UPDATE portfolio_projects SET featured_image = '/portfolio/mapa-furgocasa-ia/hero.jpg' WHERE slug = 'mapa-furgocasa-ia';
UPDATE portfolio_projects SET featured_image = '/portfolio/tricholand-tienda-cactus/hero.jpg' WHERE slug = 'tricholand-tienda-cactus';
UPDATE portfolio_projects SET featured_image = '/portfolio/acttax-asesoria-fiscal/hero.jpg' WHERE slug = 'acttax-asesoria-fiscal';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-expertos-abogados/hero.jpg' WHERE slug = 'gvc-expertos-abogados';
UPDATE portfolio_projects SET featured_image = '/portfolio/gvc-abogados-murcia/hero.jpg' WHERE slug = 'gvc-abogados-murcia';
UPDATE portfolio_projects SET featured_image = '/portfolio/casi-cinco-recomendaciones/hero.jpg' WHERE slug = 'casi-cinco-recomendaciones';
UPDATE portfolio_projects SET featured_image = '/portfolio/hakadogs-adiestramiento-canino/hero.jpg' WHERE slug = 'hakadogs-adiestramiento-canino';
UPDATE portfolio_projects SET featured_image = '/portfolio/on-procuradores-murcia/hero.jpg' WHERE slug = 'on-procuradores-murcia';
```

### 2. Para Furgocasa - Galería completa:

```sql
-- Actualizar galería de imágenes de Furgocasa (ajusta según las imágenes que subas)
UPDATE portfolio_projects SET gallery_images = ARRAY[
  '/portfolio/furgocasa-alquiler-camper/hero.jpg',
  '/portfolio/furgocasa-alquiler-camper/screenshot-full.jpg',
  '/portfolio/furgocasa-alquiler-camper/interior.jpg',
  '/portfolio/furgocasa-alquiler-camper/exterior.jpg',
  '/portfolio/furgocasa-alquiler-camper/branding.jpg',
  '/portfolio/furgocasa-alquiler-camper/mockup-web.jpg',
  '/portfolio/furgocasa-alquiler-camper/social-media.jpg',
  '/portfolio/furgocasa-alquiler-camper/lifestyle-1.jpg',
  '/portfolio/furgocasa-alquiler-camper/lifestyle-2.jpg'
] WHERE slug = 'furgocasa-alquiler-camper';
```

### 3. Para las galerías de otros proyectos (opcional):

```sql
UPDATE portfolio_projects SET gallery_images = ARRAY[
  '/portfolio/nombre-proyecto/screenshot-1.jpg',
  '/portfolio/nombre-proyecto/screenshot-2.jpg',
  '/portfolio/nombre-proyecto/screenshot-3.jpg'
] WHERE slug = 'nombre-proyecto';
```

## 📐 Recomendaciones de tamaño:

- **hero.jpg**: 1920x1080px (landscape 16:9) - Imagen espectacular y de alta calidad
- **screenshot-full.jpg**: 1200x2400px o más (captura completa de la página)
- **Resto de imágenes**: 1200x800px o similar (landscape 3:2)
- **Formato**: JPG para fotos, PNG solo si necesitas transparencia
- **Calidad**: Alta (85-90% quality en JPG)
- **Peso**: Optimizar para web (< 300KB por imagen si es posible)

## 🎨 Consejos para Furgocasa:

1. **Hero**: Usa una imagen de atardecer o amanecer con una furgoneta, que transmita aventura
2. **Branding**: Crea un mockup profesional con logo, paleta de colores y tipografías
3. **Mockup Web**: Usa herramientas como Figma, Mockuphone o similares para crear mockups multi-dispositivo
4. **Social Media**: Haz un collage con los mejores posts de Instagram de Furgocasa
5. **Lifestyle**: Busca fotos que muestren la experiencia, no solo el producto

## 🛠️ Herramientas útiles:

- **Capturas de pantalla web completas**: GoFullPage (extensión Chrome)
- **Mockups de dispositivos**: Mockuphone.com, Figma, Canva
- **Optimización de imágenes**: TinyPNG.com, Squoosh.app
- **Creación de composiciones**: Canva Pro, Photoshop, Figma

## ✅ Checklist antes de actualizar Supabase:

- [ ] Todas las imágenes están en la carpeta correcta
- [ ] Las imágenes tienen nombres consistentes (lowercase, guiones)
- [ ] Las imágenes están optimizadas (buen balance calidad/peso)
- [ ] Hero image es espectacular y de alta calidad
- [ ] Screenshot-full muestra la web completa
- [ ] (Furgocasa) Tienes al menos 6 imágenes variadas
- [ ] Has verificado las rutas en el SQL antes de ejecutar










