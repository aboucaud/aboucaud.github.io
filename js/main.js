/* ── External links ──────────────────────────────────────────────────
   Semantic classes instead of inline target/rel; applied at load.
   Content itself lives in index.html so the page works without JS. */
(function () {
  document.querySelectorAll('.project-link, .side-link, .talk-link').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}());

/* ── Photo carousel ───────────────────────────────────────────────── */
(function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.dot');
  const carousel = document.getElementById('carousel');
  const liveRegion = document.querySelector('.carousel-slides');
  if (!slides.length || !carousel) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const smallScreen  = window.matchMedia('(max-width: 700px)');

  const FADE_MS  = 1000;
  const DELAY_MS = 5000;

  let current = 0;
  let timer;
  let transitioning = false;

  /* ── Deferred backgrounds ──────────────────────────────────────
     Slides carry data-bg (a filename stem) instead of a background
     image, so a visit downloads the one slide on screen rather than
     all thirteen. Phones get the img/small/ copies. */
  function srcFor(name) {
    return (smallScreen.matches ? 'img/small/' : 'img/') + name + '.webp';
  }

  function load(i) {
    const slide = slides[(i + slides.length) % slides.length];
    const name = slide && slide.dataset.bg;
    if (!name || slide.dataset.loaded === srcFor(name)) return;
    const url = srcFor(name);
    const pre = new Image();
    pre.onload = () => {
      slide.style.backgroundImage = "url('" + url + "')";
      slide.dataset.loaded = url;
    };
    pre.onerror = () => {
      /* A missing small copy falls back to the full-size original once;
         a missing original leaves the slide on its dark ground. */
      const full = 'img/' + name + '.webp';
      if (url === full) { slide.dataset.loaded = 'failed'; return; }
      const retry = new Image();
      retry.onload = () => {
        slide.style.backgroundImage = "url('" + full + "')";
        slide.dataset.loaded = full;
      };
      retry.onerror = () => { slide.dataset.loaded = 'failed'; };
      retry.src = full;
    };
    pre.src = url;
  }

  function loadAround(i) { load(i); load(i + 1); load(i - 1); }

  /* Crossing the phone/desktop boundary re-resolves what's on screen. */
  const onBreakpoint = () => loadAround(current);
  if (smallScreen.addEventListener) smallScreen.addEventListener('change', onBreakpoint);

  /* ── Navigation ────────────────────────────────────────────────── */
  function goTo(n) {
    if (transitioning) return;
    const fade = reduceMotion.matches ? 0 : FADE_MS;
    transitioning = true;

    const prev = current;
    slides[prev].style.zIndex = '1';
    slides[prev].classList.remove('active');
    slides[prev].setAttribute('aria-hidden', 'true');
    if (dots[prev]) {
      dots[prev].classList.remove('active');
      dots[prev].removeAttribute('aria-current');
    }

    current = (n + slides.length) % slides.length;
    loadAround(current);

    slides[current].style.zIndex = '2';
    slides[current].classList.add('active');
    slides[current].removeAttribute('aria-hidden');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-current', 'true');
    }

    setTimeout(() => {
      slides[prev].style.zIndex = '';
      slides[current].style.zIndex = '';
      transitioning = false;
    }, fade);
  }

  /* ── Autoplay ──────────────────────────────────────────────────── */
  function stopTimer()  { clearInterval(timer); timer = null; }
  function startTimer() {
    if (reduceMotion.matches || document.hidden) return;
    stopTimer();
    timer = setInterval(() => goTo(current + 1), DELAY_MS);
  }
  function resetTimer() { stopTimer(); startTimer(); }

  /* Announce only what the visitor asked for: an unattended slide change
     every five seconds is noise, a deliberate one is the answer to a click. */
  function announce() { if (liveRegion) liveRegion.setAttribute('aria-live', 'polite'); }

  document.querySelector('.carousel-next').addEventListener('click', () => { announce(); goTo(current + 1); resetTimer(); });
  document.querySelector('.carousel-prev').addEventListener('click', () => { announce(); goTo(current - 1); resetTimer(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { announce(); goTo(i); resetTimer(); }));

  carousel.addEventListener('mouseenter', stopTimer);
  carousel.addEventListener('mouseleave', resetTimer);

  /* WCAG 2.2.2: moving content needs a pause mechanism every input method
     can reach. Hover covers the mouse, touchstart covers touch, and this
     covers the keyboard — tabbing into the carousel stops the rotation. */
  carousel.addEventListener('focusin', stopTimer);
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) resetTimer();
  });

  /* A backgrounded tab shouldn't burn through the set. */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopTimer(); else resetTimer();
  });

  /* ── Swipe ─────────────────────────────────────────────────────
     Touch has no arrows, so the photo itself is the control. */
  const SWIPE_MIN = 40;
  let startX = 0, startY = 0, tracking = false;

  carousel.addEventListener('touchstart', e => {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
    stopTimer();
  }, { passive: true });

  carousel.addEventListener('touchend', e => {
    if (!tracking) return;
    tracking = false;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    /* Ignore anything that reads as a vertical scroll. */
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
      goTo(current + (dx < 0 ? 1 : -1));
    }
    resetTimer();
  }, { passive: true });

  carousel.addEventListener('touchcancel', () => { tracking = false; resetTimer(); }, { passive: true });

  /* ── Start ─────────────────────────────────────────────────────── */
  loadAround(0);
  startTimer();
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener('change', () => reduceMotion.matches ? stopTimer() : startTimer());
  }
}());
