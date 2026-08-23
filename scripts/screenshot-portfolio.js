/**
 * Script para capturar screenshots automáticos de las webs del portfolio
 * Usa Puppeteer para visitar cada web y tomar capturas
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Webs del portfolio
const PORTFOLIO_WEBS = [
  { url: 'https://www.hakadogs.com', folder: 'hakadogs-escuela-online-ia', name: 'Hakadogs' },
  { url: 'https://www.alemanypajaron.es', folder: 'aleman-pajaron-gestion-obras', name: 'Alemán y Pajarón' },
  { url: 'https://www.furgocasa.com', folder: 'furgocasa-alquiler-camper', name: 'Furgocasa' },
  { url: 'https://www.mapafurgocasa.com', folder: 'mapa-furgocasa-ia', name: 'Mapa Furgocasa' },
  { url: 'https://www.tricholand.com', folder: 'tricholand-tienda-cactus', name: 'Tricholand' },
  { url: 'https://www.acttax.es', folder: 'acttax-asesoria-fiscal', name: 'Acttax' },
  { url: 'https://www.gvcexpertos.com', folder: 'gvc-expertos-abogados', name: 'GVC Expertos' },
  { url: 'https://www.gvcabogados.com', folder: 'gvc-abogados-murcia', name: 'GVC Abogados' },
  { url: 'https://www.casicinco.com', folder: 'casi-cinco-recomendaciones', name: 'Casi Cinco' },
  { url: 'https://www.onprocuradores.com', folder: 'on-procuradores-murcia', name: 'ON Procuradores' },
  { url: 'https://www.rebecamedina.es', folder: 'rebeca-medina', name: 'Rebeca Medina' },
  { url: 'https://www.abogadoslaboralistasibiza.com', folder: 'bcm-abogados-ibiza', name: 'BCM Abogados' },
  { url: 'https://www.health4spain.com/es', folder: 'health4spain-marketplace-extranjeros', name: 'Health4Spain' },
  { url: 'https://www.retiru.com/es', folder: 'retiru-marketplace-retiros-wellness', name: 'Retiru' },
  { url: 'https://www.optimalbreaks.com/es', folder: 'optimalbreaks-archivo-breakbeat', name: 'Optimal Breaks' },
];

// Filtro opcional por CLI: node scripts/screenshot-portfolio.js <texto>
// Captura solo las webs cuyo folder o name contengan el texto.
const filterArg = process.argv[2]?.toLowerCase();

const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');

// Configuración de viewport (tamaño de la captura)
const VIEWPORT = {
  width: 1400,
  height: 900,
  deviceScaleFactor: 1,
};

async function captureScreenshot(browser, web) {
  const page = await browser.newPage();
  
  try {
    console.log(`\n📸 Capturando: ${web.name} (${web.url})`);
    
    // Configurar viewport
    await page.setViewport(VIEWPORT);
    
    // Configurar user agent para evitar bloqueos
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Navegar a la web
    await page.goto(web.url, { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Esperar un poco para que carguen animaciones/imágenes
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Cerrar posibles popups de cookies o modales
    try {
      // Intentar cerrar modales comunes
      const closeSelectors = [
        '[class*="cookie"] button',
        '[class*="consent"] button',
        '[class*="modal"] button[class*="close"]',
        '.cookie-banner button',
        '#cookie-accept',
        '.accept-cookies',
        'button[aria-label="Cerrar"]',
        'button[aria-label="Close"]',
      ];
      
      for (const selector of closeSelectors) {
        const button = await page.$(selector);
        if (button) {
          await button.click();
          await new Promise(resolve => setTimeout(resolve, 500));
          break;
        }
      }
    } catch (e) {
      // Ignorar errores de cierre de modales
    }
    
    // Directorio de salida
    const outputDir = path.join(PORTFOLIO_DIR, web.folder);
    
    // Asegurar que existe el directorio
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Captura principal (hero)
    const heroPath = path.join(outputDir, 'hero.jpg');
    await page.screenshot({ 
      path: heroPath,
      type: 'jpeg',
      quality: 90,
      fullPage: false // Solo la parte visible
    });
    
    console.log(`   ✅ Guardado: ${heroPath}`);
    
    // Captura de página completa (screenshot-full)
    const fullPath = path.join(outputDir, 'screenshot-full.jpg');
    await page.screenshot({ 
      path: fullPath,
      type: 'jpeg',
      quality: 85,
      fullPage: true
    });
    
    console.log(`   ✅ Guardado: ${fullPath}`);
    
    return { success: true, web: web.name };
    
  } catch (error) {
    console.error(`   ❌ Error capturando ${web.name}: ${error.message}`);
    return { success: false, web: web.name, error: error.message };
    
  } finally {
    await page.close();
  }
}

async function main() {
  const websToCapture = filterArg
    ? PORTFOLIO_WEBS.filter(w => w.folder.toLowerCase().includes(filterArg) || w.name.toLowerCase().includes(filterArg))
    : PORTFOLIO_WEBS;

  console.log('🚀 Iniciando captura de screenshots del portfolio...\n');
  console.log(`📁 Directorio de salida: ${PORTFOLIO_DIR}`);
  console.log(`📐 Viewport: ${VIEWPORT.width}x${VIEWPORT.height}`);
  console.log(`🌐 Webs a capturar: ${websToCapture.length}\n`);
  
  // Iniciar navegador
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1400,900'
    ]
  });
  
  const results = [];
  
  // Capturar cada web
  for (const web of websToCapture) {
    const result = await captureScreenshot(browser, web);
    results.push(result);
  }
  
  // Cerrar navegador
  await browser.close();
  
  // Resumen
  console.log('\n' + '='.repeat(50));
  console.log('📊 RESUMEN DE CAPTURAS');
  console.log('='.repeat(50));
  
  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`\n✅ Exitosas: ${successful.length}/${results.length}`);
  successful.forEach(r => console.log(`   • ${r.web}`));
  
  if (failed.length > 0) {
    console.log(`\n❌ Fallidas: ${failed.length}/${results.length}`);
    failed.forEach(r => console.log(`   • ${r.web}: ${r.error}`));
  }
  
  // Generar SQL para actualizar Supabase
  console.log('\n' + '='.repeat(50));
  console.log('📝 SQL PARA ACTUALIZAR SUPABASE:');
  console.log('='.repeat(50) + '\n');
  
  websToCapture.forEach(web => {
    console.log(`UPDATE portfolio_projects SET featured_image = '/portfolio/${web.folder}/hero.jpg' WHERE slug = '${web.folder}';`);
  });
  
  console.log('\n🎉 ¡Proceso completado!');
}

main().catch(console.error);




