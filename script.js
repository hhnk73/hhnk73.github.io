const buttons = document.querySelectorAll('[data-lang]');
const english = document.getElementById('english');
const russian = document.getElementById('russian');
function setLanguage(value) {
    const lang = value === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = lang;
    english.hidden = lang !== 'en';
    russian.hidden = lang !== 'ru';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
    try { localStorage.setItem('resume-language', lang); } catch (_) {}
}
buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let saved = 'en';
try { saved = localStorage.getItem('resume-language') || 'en'; } catch (_) {}
setLanguage(saved);
