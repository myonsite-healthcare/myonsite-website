/* myOnsite Healthcare — Global JavaScript */

// ── NAV SCROLL EFFECT ──────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.style.borderBottomColor = window.scrollY > 40
    ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)';
});

// ── HAMBURGER MENU ─────────────────────────────────
function toggleMenu() {
  const m = document.getElementById('mobileNav');
  if (m) m.classList.toggle('open');
}

// ── FAQ ACCORDION ──────────────────────────────────
function toggleFaq(btn) {
  const body = btn.nextElementSibling;
  const arrow = btn.querySelector('.faq-arrow');
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
  document.querySelectorAll('.faq-arrow').forEach(a => a.style.transform = '');
  if (!isOpen) {
    body.classList.add('open');
    if (arrow) arrow.style.transform = 'rotate(180deg)';
  }
}

// ── SMOOTH ANCHOR SCROLL ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    const m = document.getElementById('mobileNav');
    if (m) m.classList.remove('open');
  });
});

// ── SCROLL REVEAL ──────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
  observer.observe(el);
});

// ── ACTIVE NAV LINK ────────────────────────────────
const path = window.location.pathname;
document.querySelectorAll('.nav-link[href]').forEach(a => {
  if (a.getAttribute('href') === path || a.getAttribute('href') === path.split('/').pop()) {
    a.classList.add('active');
  }
});
