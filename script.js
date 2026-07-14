// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
revealEls.forEach((el, i) => el.style.setProperty('--i', i % 8));

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ---------- Word reclamation ticker ----------
// Sample/illustrative pairs only — replace with the community's real,
// verified word list. Edit or extend this array with confirmed entries.
const wordPairs = [
  { loan: 'schedule', mising: '— add real word —', meaning: 'e.g. a native term for planning/time-order' },
  { loan: 'style', mising: '— add real word —', meaning: 'e.g. a native term for manner/appearance' },
  { loan: 'shop', mising: '— add real word —', meaning: 'e.g. a native term for a place of exchange' },
  { loan: 'idea', mising: '— add real word —', meaning: 'e.g. a native term for a thought/plan' },
];

const wordOldEl = document.getElementById('wordOld');
const wordNewEl = document.getElementById('wordNew');
const wordMeaningEl = document.getElementById('wordMeaning');

let wordIndex = 0;

function renderWordPair(pair) {
  if (!wordOldEl || !wordNewEl || !wordMeaningEl) return;
  wordOldEl.style.opacity = 0;
  wordNewEl.style.opacity = 0;
  setTimeout(() => {
    wordOldEl.textContent = pair.loan;
    wordNewEl.textContent = pair.mising;
    wordMeaningEl.textContent = pair.meaning;
    wordOldEl.style.opacity = 1;
    wordNewEl.style.opacity = 1;
    // restart the strike-through animation
    wordOldEl.style.animation = 'none';
    void wordOldEl.offsetWidth;
    wordOldEl.style.animation = '';
  }, 250);
}

if (wordPairs.length && wordOldEl) {
  renderWordPair(wordPairs[0]);
  if (!prefersReducedMotion) {
    setInterval(() => {
      wordIndex = (wordIndex + 1) % wordPairs.length;
      renderWordPair(wordPairs[wordIndex]);
    }, 4200);
  }
}
