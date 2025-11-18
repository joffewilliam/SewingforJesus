document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav') || document.querySelector('header .wrap nav');
  if (!btn || !nav || !header) return;

  function closeNav() {
    btn.setAttribute('aria-expanded', 'false');
    header.classList.remove('nav-open');
  }

  function openNav() {
    btn.setAttribute('aria-expanded', 'true');
    header.classList.add('nav-open');
  }

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    if (expanded) closeNav(); else openNav();
  });

  // Close nav when a link is clicked (mobile)
  nav.addEventListener('click', function (e) {
    if (e.target && e.target.matches('a')) {
      // give a quick delay so link navigation still works
      setTimeout(closeNav, 100);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
});
