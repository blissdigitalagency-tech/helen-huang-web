import { en } from './i18n.js';

const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

// ---------- Mobile nav ----------
function setMenu(open) {
  nav.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
  toggle.setAttribute('aria-expanded', String(open));
}
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ---------- Header background once scrolled ----------
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ---------- Scroll reveals ----------
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }),
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

// ---------- Language switch (ID default, EN from i18n.js) ----------
const textEls = [...document.querySelectorAll('[data-i18n]')];
const attrEls = [...document.querySelectorAll('[data-i18n-attr]')];
const langButtons = document.querySelectorAll('.lang-switch [data-lang]');

// Remember the Indonesian copy that ships in the HTML.
const idText = new Map(textEls.map((el) => [el, el.innerHTML]));
const idAttr = new Map(attrEls.map((el) => {
  const [attr] = el.dataset.i18nAttr.split(':');
  return [el, el.getAttribute(attr)];
}));

function applyLang(lang) {
  textEls.forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'en' && en[key] ? en[key] : idText.get(el);
  });
  attrEls.forEach((el) => {
    const [attr, key] = el.dataset.i18nAttr.split(':');
    el.setAttribute(attr, lang === 'en' && en[key] ? en[key] : idAttr.get(el));
  });
  document.documentElement.lang = lang;
  langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('hh-lang', lang); } catch { /* storage unavailable */ }
}

langButtons.forEach((btn) => btn.addEventListener('click', () => {
  const lang = btn.dataset.lang;
  if (document.documentElement.lang === lang) return;
  document.body.classList.add('lang-swap');
  setTimeout(() => {
    applyLang(lang);
    document.body.classList.remove('lang-swap');
  }, 200);
}));

let saved = null;
try { saved = localStorage.getItem('hh-lang'); } catch { /* storage unavailable */ }
if (saved === 'en') applyLang('en');

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
