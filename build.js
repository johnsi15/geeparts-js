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
    const modalContent = html.match(/<div[^>]*id="modalOverlay"[\s\S]*?<\/div>\s*<\/div>/)?.[0] || ''

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

async function buildFeria() {
  try {
    console.log('🔨 Building Geeparts Feria Countdown...')
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true })
    }

    const css = fs.readFileSync('feria-countdown/styles.css', 'utf8')
    const html = fs.readFileSync('feria-countdown/index.html', 'utf8')
    const js = fs.readFileSync('feria-countdown/widget.js', 'utf8')

    const bundleContent = `
    (function() {
      'use strict';
      
      const CSS = \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
      const HTML = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

      if (!document.getElementById('geeparts-feria-styles')) {
        const style = document.createElement('style');
        style.id = 'geeparts-feria-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      function init() {
        const selectors = [
          '.js-home-main-slider-visibility [data-swiper-slide-index="0"] .js-slider-slide',
          '.js-home-mobile-slider-visibility [data-swiper-slide-index="0"] .js-slider-slide'
        ];
        
        selectors.forEach(selector => {
          const container = document.querySelector(selector);
          if (container && !container.querySelector('.countdown-wrap')) {
            container.insertAdjacentHTML('beforeend', HTML);
          }
        });

        // Ejecutar el JS del contador solo una vez
        ${js}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
    `

    const tempFile = 'feria-countdown/bundle-temp.js'
    fs.writeFileSync(tempFile, bundleContent)

    await esbuild.build({
      entryPoints: [tempFile],
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2015'],
      outfile: 'dist/feria-countdown.min.js',
      format: 'iife',
    })

    fs.unlinkSync(tempFile)
    console.log('✅ Geeparts Feria Countdown built successfully!')
  } catch (error) {
    console.error('❌ Feria Build failed:', error)
  }
}

async function buildFeriaMayorista() {
  try {
    console.log('🔨 Building Geeparts Feria Mayorista Countdown...')
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true })
    }

    const css = fs.readFileSync('feria-mayorista/styles.css', 'utf8')
    const html = fs.readFileSync('feria-mayorista/index.html', 'utf8')
    const js = fs.readFileSync('feria-mayorista/widget.js', 'utf8')

    const bundleContent = `
    (function() {
      'use strict';
      
      const CSS = \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
      const HTML = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

      if (!document.getElementById('geeparts-feria-mayorista-styles')) {
        const style = document.createElement('style');
        style.id = 'geeparts-feria-mayorista-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      function init() {
        const selectors = [
          '.stk--hide-mobile .stk-block-carousel__slider > .wp-block-stackable-column.stk-d1016b2 .stk-block-content',
          '.stk--hide-desktop .stk-block-carousel__slider > .wp-block-stackable-column.stk-982d90e:not([class*="stk-slide-clone"]) .stk-block-content'
        ];
        
        selectors.forEach(selector => {
          const container = document.querySelector(selector);
          if (container && !container.querySelector('.countdown-wrap')) {
            container.insertAdjacentHTML('beforeend', HTML);
          }
        });

        ${js}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
    `

    const tempFile = 'feria-mayorista/bundle-temp.js'
    fs.writeFileSync(tempFile, bundleContent)

    await esbuild.build({
      entryPoints: [tempFile],
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2015'],
      outfile: 'dist/feria-mayorista-countdown.min.js',
      format: 'iife',
    })

    fs.unlinkSync(tempFile)
    console.log('✅ Geeparts Feria Mayorista Countdown built successfully!')
  } catch (error) {
    console.error('❌ Feria Mayorista Build failed:', error)
  }
}

async function buildModalWorldCup() {
  try {
    console.log('🔨 Building Geeparts Modal World Cup...')
    if (!fs.existsSync('dist')) {
      fs.mkdirSync('dist', { recursive: true })
    }

    const css = fs.readFileSync('modal-world-cup/styles.css', 'utf8')
    const html = fs.readFileSync('modal-world-cup/index.html', 'utf8')
    const js = fs.readFileSync('modal-world-cup/widget.js', 'utf8')

    const bundleContent = `
    (function() {
      'use strict';
      
      const CSS = \`${css.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
      const HTML = \`${html.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

      if (!document.getElementById('geeparts-modal-world-cup-styles')) {
        const style = document.createElement('style');
        style.id = 'geeparts-modal-world-cup-styles';
        style.textContent = CSS;
        document.head.appendChild(style);
      }

      function init() {
        if (!document.getElementById('gc-modal-overlay')) {
          document.body.insertAdjacentHTML('beforeend', HTML);
        }

        ${js}
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
    `

    const tempFile = 'modal-world-cup/bundle-temp.js'
    fs.writeFileSync(tempFile, bundleContent)

    await esbuild.build({
      entryPoints: [tempFile],
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2015'],
      outfile: 'dist/modal-world-cup.min.js',
      format: 'iife',
    })

    fs.unlinkSync(tempFile)
    console.log('✅ Geeparts Modal World Cup built successfully!')
  } catch (error) {
    console.error('❌ Modal World Cup Build failed:', error)
  }
}

build()
buildFeria()
buildFeriaMayorista()
buildModalWorldCup()
