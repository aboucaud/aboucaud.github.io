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
