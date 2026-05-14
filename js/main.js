/* ── Photo carousel ───────────────────────────────────────────────── */
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer;
  let transitioning = false;

  function goTo(n) {
    if (transitioning) return;
    transitioning = true;
    setTimeout(() => { transitioning = false; }, 1000);

    slides[current].style.zIndex = '1';
    slides[current].classList.remove('active');
    if (dots[current]) {
      dots[current].classList.remove('active');
      dots[current].setAttribute('aria-selected', 'false');
    }

    current = (n + slides.length) % slides.length;

    slides[current].style.zIndex = '2';
    slides[current].classList.add('active');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    setTimeout(() => { slides[current].style.zIndex = ''; }, 1000);
  }

  function startTimer() { timer = setInterval(() => goTo(current + 1), 5000); }
  function resetTimer()  { clearInterval(timer); startTimer(); }

  document.querySelector('.carousel-next').addEventListener('click', () => { goTo(current + 1); resetTimer(); });
  document.querySelector('.carousel-prev').addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));

  const carousel = document.getElementById('carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', resetTimer);

  startTimer();
}());
