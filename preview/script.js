(() => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (!toggle || !menu) return;

  const label = toggle.querySelector('.menu-label');
  const desktop = window.matchMedia('(min-width: 861px)');
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';
  const setOpen = (open, restoreFocus = false) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (label) label.textContent = open ? 'Close' : 'Menu';
    menu.hidden = !open;
    if (restoreFocus) toggle.focus();
  };

  // Without JavaScript, mobile navigation stays visible and usable.
  setOpen(false);
  toggle.hidden = false;

  toggle.addEventListener('click', () => setOpen(!isOpen()));
  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    setOpen(false);
    if (link.hash) document.getElementById(link.hash.slice(1))?.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      event.preventDefault();
      setOpen(false, true);
    }
  });
  document.addEventListener('click', (event) => {
    if (isOpen() && !menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  desktop.addEventListener('change', (event) => {
    if (!event.matches) return;
    const moveFocus = menu.contains(document.activeElement);
    setOpen(false);
    if (moveFocus) document.querySelector('.desktop-nav a')?.focus();
  });
})();
