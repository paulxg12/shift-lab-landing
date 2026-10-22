const views = [...document.querySelectorAll('.view')];
const main = document.getElementById('main');
const aliases = { top: 'home', process: 'services', work: 'services' };
function showView(focus = false) {
  const requested = location.hash.slice(1);
  if (requested === 'main') { main.focus({ preventScroll: true }); return; }
  const id = aliases[requested] || requested || 'home';
  const active = views.find(view => view.id === id) || views[0];
  for (const view of views) view.hidden = view !== active;
  for (const link of document.querySelectorAll('header a')) {
    if (link.getAttribute('href') === '#' + active.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  main.scrollTop = 0;
  if (focus) main.focus({ preventScroll: true });
}
window.addEventListener('hashchange', () => showView(true));
showView();
document.getElementById('year').textContent = new Date().getFullYear();
const motion = document.getElementById('motion-toggle');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotionControl() { motion.hidden = reduceMotion.matches; }
syncMotionControl();
reduceMotion.addEventListener('change', syncMotionControl);
motion.addEventListener('click', () => {
  const paused = document.body.classList.toggle('motion-paused');
  motion.setAttribute('aria-pressed', String(paused));
  motion.textContent = paused ? 'Resume motion' : 'Pause motion';
});
// One open note keeps the services view focused and easy to read.
for (const detail of document.querySelectorAll('details')) {
  detail.addEventListener('toggle', () => {
    if (detail.open) for (const other of document.querySelectorAll('details')) if (other !== detail) other.open = false;
  });
}
