// ============================================
// CONFIGURACIÓN DEL WIDGET
// ============================================
const defaultConfig = {
  autoOpen: true,
  autoOpenDelay: 3000,
  couponCode: 'WELCOME5',
  listId: 12,
}

// Merge con configuración del usuario
const config = Object.assign({}, defaultConfig, window.geepartsNewsletterConfig || {})

// ============================================
// CONFIGURACIÓN DE BREVO
// ============================================
const BREVO_CONFIG = {
  listId: config.listId,
  apiUrl: 'https://api.brevo.com/v3/contacts',
}

// ============================================
// FUNCIONES DEL MODAL
// ============================================
function openModal() {
  document.getElementById('modalOverlay').classList.add('active')
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active')
  // Reiniciar el modal después de cerrar
  setTimeout(() => {
    resetModal()
  }, 300)
}

function resetModal() {
  document.getElementById('formContent').style.display = 'block'
  document.getElementById('successContent').classList.remove('active')
  document.getElementById('newsletterForm').reset()
  document.getElementById('errorMessage').classList.remove('active')
  document.getElementById('submitBtn').disabled = false
}

// Cerrar modal al hacer clic fuera de él
document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal()
  }
})

// ============================================
// FUNCIÓN PARA COPIAR CUPÓN
// ============================================
function copyCoupon() {
  const couponCode = document.getElementById('couponCode').textContent
  const copyBtn = document.getElementById('copyBtn')

  navigator.clipboard.writeText(couponCode).then(() => {
    copyBtn.textContent = '✓'
    copyBtn.classList.add('copied')

    setTimeout(() => {
      copyBtn.textContent = '📋'
      copyBtn.classList.remove('copied')
    }, 2000)
  })
}

// ============================================
// INTEGRACIÓN CON BREVO
// ============================================
async function addContactToBrevo(email) {
  const WORKER_URL = 'https://shy-fire-438e.jandreys15.workers.dev'

  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listId: BREVO_CONFIG.listId,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Error al suscribir')
    }

    return data
  } catch (error) {
    console.error('Error al suscribir:', error)
    throw error
  }
}

// ============================================
// MANEJO DEL FORMULARIO
// ============================================
document.getElementById('newsletterForm').addEventListener('submit', async function (e) {
  e.preventDefault()

  const emailInput = document.getElementById('emailInput')
  const submitBtn = document.getElementById('submitBtn')
  // const errorMessage = document.getElementById('errorMessage')
  const email = emailInput.value.trim()

  if (!email || !isValidEmail(email)) {
    showError('Por favor, ingresa un email válido')
    return
  }

  // Deshabilitar botón y mostrar loading
  submitBtn.disabled = true
  submitBtn.innerHTML = '<span class="loading"></span>'

  try {
    const result = await addContactToBrevo(email)

    const { message, success, duplicate } = result

    if (!success) {
      throw new Error(result.message || 'Error al suscribir')
    }

    if (duplicate) {
      showSuccess({ message, duplicate })
      localStorage.setItem('newsletterSubmitted', 'true')
      return
    }

    showSuccess({ message })
    localStorage.setItem('newsletterSubmitted', 'true')
  } catch (error) {
    console.error('Error:', error)
    showError('Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.')
    submitBtn.disabled = false
    submitBtn.textContent = '5% de descuento'
  }
})

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function showError(message) {
  const errorMessage = document.getElementById('errorMessage')
  errorMessage.textContent = message
  errorMessage.classList.add('active')

  setTimeout(() => {
    errorMessage.classList.remove('active')
  }, 3000)
}

function showSuccess({ message, duplicate = false }) {
  const couponElement = document.getElementById('couponCode')
  const couponBox = document.querySelector('.coupon-box')
  const successTitle = document.querySelector('#successContent .modal-title')

  if (duplicate) {
    const successTitle = document.querySelector('#successContent .modal-title')
    if (successTitle) {
      successTitle.textContent = message
    }

    if (couponBox) {
      couponBox.style.display = 'none'
    }
  } else {
    if (couponElement && config.couponCode) {
      couponElement.textContent = config.couponCode
    }

    if (message && successTitle) {
      successTitle.textContent = message
    }
  }

  document.getElementById('formContent').style.display = 'none'
  document.getElementById('successContent').classList.add('active')
}

// ============================================
// AUTO-ABRIR MODAL
// ============================================
if (config.autoOpen && !localStorage.getItem('newsletterSubmitted')) {
  setTimeout(() => {
    openModal()
  }, config.autoOpenDelay)
}
