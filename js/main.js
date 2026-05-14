/* ── Config fill ─────────────────────────────────────────────────── */
(function () {
  if (typeof SITE === 'undefined') return;

  document.querySelectorAll('[data-fill]').forEach(el => {
    const val = el.dataset.fill.split('.').reduce((o, k) => o?.[k], SITE);
    if (val != null) el.textContent = val;
  });

  const r = (sel, html) => { const el = document.querySelector(sel); if (el) el.innerHTML = html; };

  r('[data-render="institution"]',
    `<a class="side-link" href="${SITE.institution.lab.url}">${SITE.institution.lab.name}</a> · ` +
    `<a class="side-link" href="${SITE.institution.cnrs.url}">${SITE.institution.cnrs.name}</a>`
  );

  r('[data-render="hero-links"]',
    SITE.links.map(l =>
      `<a class="side-link" href="${l.url}">${l.label}</a>`
    ).join(' · ')
  );

  r('[data-render="contact-links"]',
    `<a class="contact-link-row" href="mailto:${SITE.email}">` +
      `<span class="contact-link-label">Email</span>` +
      `<span class="contact-link-url">${SITE.email}</span>` +
    `</a>` +
    SITE.links.map(l =>
      `<a class="contact-link-row side-link" href="${l.url}">` +
        `<span class="contact-link-label">${l.label}</span>` +
        `<span class="contact-link-url">${l.display}</span>` +
      `</a>`
    ).join('')
  );

  document.querySelectorAll('.project-link, .side-link, .talk-link').forEach(a => {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}());

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

    const prev = current;
    slides[prev].style.zIndex = '1';
    slides[prev].classList.remove('active');
    if (dots[prev]) {
      dots[prev].classList.remove('active');
      dots[prev].setAttribute('aria-selected', 'false');
    }

    current = (n + slides.length) % slides.length;

    slides[current].style.zIndex = '2';
    slides[current].classList.add('active');
    if (dots[current]) {
      dots[current].classList.add('active');
      dots[current].setAttribute('aria-selected', 'true');
    }

    setTimeout(() => {
      slides[prev].style.zIndex = '';
      slides[current].style.zIndex = '';
      transitioning = false;
    }, 1000);
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
