/* ── Palette toggle ───────────────────────────────────────────────── */
function setPalette(p) {
  document.getElementById('site').classList.toggle('sage', p === 'sage');
  document.getElementById('btn-blue').classList.toggle('active', p === 'blue');
  document.getElementById('btn-sage').classList.toggle('active', p === 'sage');
  try { localStorage.setItem('palette', p); } catch (_) {}
}

(function () {
  try {
    const saved = localStorage.getItem('palette');
    if (saved === 'sage') setPalette('sage');
  } catch (_) {}
}());

/* ── Photo carousel ───────────────────────────────────────────────── */
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function startTimer() { timer = setInterval(() => goTo(current + 1), 5000); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  document.querySelector('.carousel-next').addEventListener('click', () => { goTo(current + 1); resetTimer(); });
  document.querySelector('.carousel-prev').addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));

  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', startTimer);

  startTimer();
}());
