// ============================================
// CONFIGURACIÓN DEL WIDGET
// ============================================
const defaultConfig = {
  autoOpen: true,
  autoOpenDelay: 3000,
  couponCode: 'WELCOME15',
  apiKey: 'TU_API_KEY_AQUI',
  listId: 2,
}

// Merge con configuración del usuario
const config = Object.assign({}, defaultConfig, window.geepartsNewsletterConfig || {})

// ============================================
// CONFIGURACIÓN DE BREVO
// ============================================
const BREVO_CONFIG = {
  apiKey: config.apiKey,
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
  // IMPORTANTE: Esta llamada directa a Brevo API causará error CORS
  // Para producción, debes usar una de estas opciones:
  // 1. Un backend (PHP, Node.js, Python) que haga la llamada
  // 2. Un serverless function (Vercel, Netlify Functions, etc.)
  // 3. El formulario nativo de Brevo embebido

  // Opción para DESARROLLO/TESTING: Simular la llamada
  const USE_DEMO_MODE = true // Cambia a false cuando tengas backend

  if (USE_DEMO_MODE) {
    // Simula una petición exitosa para testing
    console.log('📧 Email a suscribir:', email)
    console.log('📋 Lista ID:', BREVO_CONFIG.listId)
    await new Promise(resolve => setTimeout(resolve, 1500)) // Simula delay
    return { id: 'demo-' + Date.now() }
  }

  // Código real para cuando tengas un backend
  // Reemplaza '/api/subscribe' con tu endpoint backend
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      listId: BREVO_CONFIG.listId,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Error al suscribir')
  }

  return await response.json()
}

// ============================================
// MANEJO DEL FORMULARIO
// ============================================
document.getElementById('newsletterForm').addEventListener('submit', async function (e) {
  e.preventDefault()

  const emailInput = document.getElementById('emailInput')
  const submitBtn = document.getElementById('submitBtn')
  const errorMessage = document.getElementById('errorMessage')
  const email = emailInput.value.trim()

  // Validar email
  if (!email || !isValidEmail(email)) {
    showError('Por favor, ingresa un email válido')
    return
  }

  // Deshabilitar botón y mostrar loading
  submitBtn.disabled = true
  submitBtn.innerHTML = '<span class="loading"></span>'

  try {
    // Agregar contacto a Brevo
    await addContactToBrevo(email)

    // Mostrar mensaje de éxito
    showSuccess()
    localStorage.setItem('newsletterSubmitted', 'true')
  } catch (error) {
    console.error('Error:', error)
    showError('Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.')
    submitBtn.disabled = false
    submitBtn.textContent = '15% de descuento'
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

function showSuccess() {
  const couponElement = document.getElementById('couponCode')
  if (couponElement && config.couponCode) {
    couponElement.textContent = config.couponCode
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
