const esbuild = require('esbuild')
const fs = require('fs')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist', { recursive: true })
}

async function build() {
  try {
    console.log('🔨 Building Geeparts Newsletter Widget...')

    const css = fs.readFileSync('newsletter/styles.css', 'utf8')
    const html = fs.readFileSync('newsletter/index.html', 'utf8')

    // Extraer solo el contenido del modal del HTML (sin el <!DOCTYPE>, <html>, <head>, etc.)
    const modalContent = html.match(/<div class="modal-overlay"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/)?.[0] || ''

    const js = fs.readFileSync('newsletter/widget.js', 'utf8')

    // Crear el archivo bundle que incluye todo
    const bundleContent = `
    (function() {
      'use strict';
      
      const CSS = \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
      const HTML = \`${modalContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

      if (!document.getElementById('geeparts-newsletter-styles')) {
        const style = document.createElement('style');
        style.id = 'geeparts-newsletter-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      function init() {
        if (!document.getElementById('modalOverlay')) {
          document.body.insertAdjacentHTML('beforeend', HTML);
        }

        ${js}

        window.openModal = openModal;
        window.closeModal = closeModal;
        window.copyCoupon = copyCoupon;
        
        window.geepartsNewsletter = {
          config: config,
          openModal: openModal,
          closeModal: closeModal,
        };
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
    `

    const tempFile = 'newsletter/bundle-temp.js'
    fs.writeFileSync(tempFile, bundleContent)

    await esbuild.build({
      entryPoints: [tempFile],
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2015'],
      outfile: 'dist/geeparts-newsletter.min.js',
      format: 'iife',
      banner: {
        js: `/*! Geeparts Newsletter Widget v${
          require('./package.json').version
        } | MIT License | https://github.com/johnsi15/geeparts-js */`,
      },
    })

    // Eliminar archivo temporal
    fs.unlinkSync(tempFile)

    console.log('✅ Build completado exitosamente!')
    console.log('📦 Archivo generado: dist/geeparts-newsletter.min.js')

    const stats = fs.statSync('dist/geeparts-newsletter.min.js')
    const fileSizeInKB = (stats.size / 1024).toFixed(2)
    console.log(`📊 Tamaño: ${fileSizeInKB} KB`)
  } catch (error) {
    console.error('❌ Error en el build:', error)
    process.exit(1)
  }
}

build()
