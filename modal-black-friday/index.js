/**
 *
 * Modal Black Friday
 *
 * This module creates a modal popup for Black Friday promotions.
 * It includes functions to open and close the modal, as well as event listeners for user interactions.
 *
 * Mayoristas Geeparts - https://mayoristas.geeparts.co
 */
// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
  const html = `<div class="modal-blackfriday-overlay" id="modalBlackfridayOverlay">
        <div class="modal-content" id="modalContent">
            <button class="close-btn" id="closeBtn">&times;</button>
            <img src="https://download.geeparts.co/black-friday-modal-geeparts.webp" alt="Black Friday" id="modalImage">
        </div>
    </div>`

  document.body.insertAdjacentHTML('beforeend', html)

  const modalOverlay = document.getElementById('modalBlackfridayOverlay')
  const modalImage = document.getElementById('modalImage')
  const closeBtn = document.getElementById('closeBtn')

  function closeModal() {
    modalOverlay.style.display = 'none'
    document.body.style.overflow = 'auto'
  }

  // Event listeners
  closeBtn.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      closeModal()
    }
  })

  // Mostrar el modal automáticamente (opcional)
  setTimeout(() => {
    modalOverlay.style.display = 'flex'
  }, 1000) // Espera 1 segundo después de cargar
})
