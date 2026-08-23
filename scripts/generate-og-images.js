/**
 * Script para generar imágenes Open Graph (1200x630) a partir de los screenshots del portfolio
 * Las imágenes OG son las que se muestran cuando compartes en Facebook, Twitter, etc.
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Proyectos del portfolio
const PROJECTS = [
  'hakadogs-escuela-online-ia',
  'aleman-pajaron-gestion-obras',
  'furgocasa-alquiler-camper',
  'mapa-furgocasa-ia',
  'tricholand-tienda-cactus',
  'acttax-asesoria-fiscal',
  'gvc-expertos-abogados',
  'gvc-abogados-murcia',
  'casi-cinco-recomendaciones',
  'on-procuradores-murcia',
  'rebeca-medina',
  'bcm-abogados-ibiza',
];

async function generateOGImage(projectFolder) {
  const heroPath = path.join(PORTFOLIO_DIR, projectFolder, 'hero.jpg');
  const ogPath = path.join(PORTFOLIO_DIR, projectFolder, 'og-image.jpg');

  if (!fs.existsSync(heroPath)) {
    console.log(`   ⚠️  No se encontró hero.jpg para ${projectFolder}`);
    return { success: false, project: projectFolder };
  }

  try {
    console.log(`\n📸 Generando OG image: ${projectFolder}`);

    // Leer la imagen hero
    const image = sharp(heroPath);
    const metadata = await image.metadata();

    console.log(`   📐 Tamaño original: ${metadata.width}x${metadata.height}`);

    // Calcular el crop para mantener el centro
    // Queremos crop desde arriba para capturar el hero principal
    await image
      .resize(OG_WIDTH, OG_HEIGHT, {
        fit: 'cover',
        position: 'top', // Mantener la parte superior (donde está el contenido principal)
      })
      .jpeg({ quality: 90 })
      .toFile(ogPath);

    console.log(`   ✅ Guardado: ${ogPath} (${OG_WIDTH}x${OG_HEIGHT})`);

    return { success: true, project: projectFolder };
  } catch (error) {
    console.error(`   ❌ Error en ${projectFolder}: ${error.message}`);
    return { success: false, project: projectFolder, error: error.message };
  }
}

async function main() {
  console.log('🚀 Generando imágenes Open Graph para el portfolio...\n');
  console.log(`📁 Directorio: ${PORTFOLIO_DIR}`);
  console.log(`📐 Tamaño OG: ${OG_WIDTH}x${OG_HEIGHT} (proporción 1.91:1)`);
  console.log(`🌐 Proyectos a procesar: ${PROJECTS.length}\n`);

  // Verificar que Sharp está instalado
  try {
    require.resolve('sharp');
  } catch (e) {
    console.error('❌ ERROR: Sharp no está instalado.');
    console.error('Por favor ejecuta: npm install sharp');
    process.exit(1);
  }

  const results = [];

  for (const project of PROJECTS) {
    const result = await generateOGImage(project);
    results.push(result);
  }

  // Resumen
  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN DE GENERACIÓN');
  console.log('='.repeat(50));

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  console.log(`\n✅ Exitosas: ${successful.length}/${results.length}`);
  successful.forEach(r => console.log(`   • ${r.project}`));

  if (failed.length > 0) {
    console.log(`\n❌ Fallidas: ${failed.length}/${results.length}`);
    failed.forEach(r => console.log(`   • ${r.project}: ${r.error || 'No encontrado'}`));
  }

  // Generar SQL para actualizar Supabase
  console.log('\n' + '='.repeat(50));
  console.log('📝 SQL PARA ACTUALIZAR SUPABASE:');
  console.log('='.repeat(50) + '\n');

  PROJECTS.forEach(project => {
    const slug = project;
    console.log(`UPDATE portfolio_projects SET og_image = '/portfolio/${project}/og-image.jpg' WHERE slug = '${slug}';`);
  });

  console.log('\n💡 NOTA: Si la tabla no tiene la columna og_image, agrégala con:');
  console.log('ALTER TABLE portfolio_projects ADD COLUMN og_image VARCHAR(500);');

  console.log('\n🎉 ¡Proceso completado!');
}

main().catch(console.error);
