(function() {
  const target = new Date('2026-05-20T00:00:00');
  const pad = n => String(n).padStart(2, '0');
 
  function tick() {
    const grids = document.querySelectorAll('.countdown-grid');
    if (grids.length === 0) return;

    const now  = new Date();
    const diff = Math.floor((target - now) / 1000);
 
    if (diff <= 0) {
      grids.forEach(grid => {
        grid.innerHTML = '<p class="finished-msg">¡Los descuentos de feria están activos!</p>';
      });
      const footerTags = document.querySelectorAll('.footer-tag');
      footerTags.forEach(tag => tag.textContent = '¡Ya comenzó!');
      return;
    }
 
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
 
    const daysArr = document.querySelectorAll('.days-val');
    const hoursArr = document.querySelectorAll('.hours-val');
    const minsArr = document.querySelectorAll('.mins-val');
    const secsArr = document.querySelectorAll('.secs-val');

    const dStr = pad(d);
    const hStr = pad(h);
    const mStr = pad(m);
    const sStr = pad(s);

    daysArr.forEach(el => el.textContent = dStr);
    hoursArr.forEach(el => el.textContent = hStr);
    minsArr.forEach(el => el.textContent = mStr);
    secsArr.forEach(el => el.textContent = sStr);
  }
 
  tick();
  const interval = setInterval(tick, 1000);
})();
