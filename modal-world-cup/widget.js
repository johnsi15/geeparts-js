(function() {
  var overlay = document.getElementById('gc-modal-overlay');
  var openBtn = document.getElementById('gc-trigger-btn');
  var closeBtn = document.getElementById('gc-close-btn');
  var copyBtn = document.getElementById('gc-copy-btn');
  var copyText = document.getElementById('gc-copy-text');
  var couponCode = document.getElementById('gc-coupon-code').textContent.trim();

  function openModal() {
    overlay.classList.add('gc-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('gc-open');
    document.body.style.overflow = '';
  }

  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      navigator.clipboard.writeText(couponCode).then(function() {
        copyText.textContent = 'Copiado';
        copyBtn.classList.add('gc-copied');
        setTimeout(function() {
          copyText.textContent = 'Copiar';
          copyBtn.classList.remove('gc-copied');
        }, 1800);
      });
    });
  }

  // Auto-open on load for this demo. Remove this line in production
  // if you want the modal to open on a different trigger (page load, delay, exit-intent, etc).
  openModal();
})();
