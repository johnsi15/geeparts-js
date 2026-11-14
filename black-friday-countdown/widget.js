function initBlackDays(variant) {
  const config = window.geepartsBlackDaysConfig || {}
  const defaults = variant === 'mayoristas'
    ? [
        '.stk--hide-mobile .stk-block-carousel__slider > .wp-block-stackable-column.stk-d1016b2 .stk-block-content',
        '.stk--hide-desktop .stk-block-carousel__slider > .wp-block-stackable-column.stk-982d90e:not([class*="stk-slide-clone"]) .stk-block-content',
      ]
    : [
        '.js-home-slider .swiper-slide[data-swiper-slide-index="0"] .js-slider-slide',
        '.js-home-slider .swiper-slide:not(.swiper-slide-duplicate):first-child .js-slider-slide',
        '.js-home-slider-mobile .swiper-slide[data-swiper-slide-index="0"] .js-slider-slide',
        '.js-home-slider-mobile .swiper-slide:not(.swiper-slide-duplicate):first-child .js-slider-slide',
      ]
  const selectors = config.selectors || defaults
  const target = new Date(config.targetDate || '2026-11-27T00:00:00-05:00').getTime()
  if (!Number.isFinite(target)) {
    console.warn('Geeparts Black Days: fecha de inicio inválida.')
    return
  }
  const desktop = variant === 'mayoristas' ? 'blackdays-mayoristas-d.webp' : 'blackdays-detal-d.webp'
  const labels = ['Días', 'Horas', 'Minutos', 'Segundos']
  let interval
  let observer

  function tick() {
    const remaining = Math.max(0, Math.ceil((target - Date.now()) / 1000))
    const values = [
      Math.floor(remaining / 86400),
      Math.floor((remaining % 86400) / 3600),
      Math.floor((remaining % 3600) / 60),
      remaining % 60,
    ]
    document.querySelectorAll('.gb-blackdays--' + variant + ' .gb-blackdays__timer').forEach(timer => {
      if (remaining === 0) {
        if (!timer.querySelector('.gb-blackdays__message')) {
          timer.innerHTML = '<p class="gb-blackdays__message" role="status">¡BLACK DAYS YA ESTÁ AQUÍ!</p>'
        }
        return
      }
      timer.querySelectorAll('.gb-blackdays__number').forEach((element, index) => {
        element.textContent = String(values[index]).padStart(2, '0')
      })
    })
    if (remaining === 0) clearInterval(interval)
  }

  function mount() {
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(host => {
        if (host.querySelector('.gb-blackdays')) return
        host.classList.add('gb-blackdays-host')
        const banner = document.createElement('div')
        banner.className = 'gb-blackdays gb-blackdays--' + variant
        banner.innerHTML = `
          <picture>
            <source media="(max-width: 767px)" srcset="https://download.geeparts.co/blackdays-m.webp">
            <img src="https://download.geeparts.co/${desktop}" alt="Black Days Geeparts: el evento más esperado del año está cargando">
          </picture>
          <div class="gb-blackdays__timer" role="timer" aria-label="Tiempo restante para Black Days">
            ${labels.map(label => `<div class="gb-blackdays__item"><span class="gb-blackdays__number">00</span><span class="gb-blackdays__label">${label}</span></div>`).join('')}
          </div>`
        host.appendChild(banner)
      })
    })
    tick()
  }

  function start() {
    // Una sola instancia por variante, incluso si se carga el script dos veces.
    const key = '__geepartsBlackDays_' + variant
    if (window[key]) return
    window[key] = true
    mount()
    if (target > Date.now()) interval = setInterval(tick, 1000)
    // Swiper/Stackable pueden crear diapositivas después de DOMContentLoaded.
    let queued = false
    observer = new MutationObserver(records => {
      const externalChange = records.some(record =>
        !record.target.closest('.gb-blackdays') &&
        Array.from(record.addedNodes).some(node =>
          node.nodeType === 1 && !node.classList.contains('gb-blackdays'),
        ),
      )
      if (!externalChange || queued) return
      queued = true
      requestAnimationFrame(() => {
        queued = false
        mount()
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true })
  else start()
}
