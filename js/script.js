// ════════════════════════════════════════════════════════
// SCROLL NAVIGATION
// ════════════════════════════════════════════════════════

function scrollToSection(name) {
  const el = document.getElementById(name);
  if (!el) return;
  const headerH = window.innerWidth <= 768 ? 64 : 70;
  const top = el.getBoundingClientRect().top + window.scrollY - (name === 'home' ? 0 : headerH);
  window.scrollTo({ top, behavior: 'smooth' });
}

// IntersectionObserver — меняет активный пункт при скролле
function initScrollSpy() {
  const sections = ['home', 'onas', 'kontakt'];
  const options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const name = entry.target.id;
      setActiveNav(name);

      // Хедер прозрачный только на home
      if (name === 'home') {
        document.querySelectorAll('header').forEach(h => h.classList.add('header-transparent'));
      } else {
        document.querySelectorAll('header').forEach(h => h.classList.remove('header-transparent'));
      }
    });
  }, options);

  sections.forEach(name => {
    const el = document.getElementById(name);
    if (el) observer.observe(el);
  });
}

function setActiveNav(name) {
  document.querySelectorAll('nav.desktop-nav a').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.mobile-nav a').forEach(a => a.classList.remove('active'));
  const dn = document.getElementById('nav-' + name);
  if (dn) dn.classList.add('active');
  const mn = document.getElementById('mnav-' + name);
  if (mn) mn.classList.add('active');

  const indicator = document.querySelector('.nav-indicator');
  if (indicator) {
    if (name === 'home')    indicator.style.transform = 'translateX(6%)';
    if (name === 'onas')    indicator.style.transform = 'translateX(100%)';
    if (name === 'kontakt') indicator.style.transform = 'translateX(194%)';
  }
}

// Scroll reveal для блоков
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
}

// ════════════════════════════════════════════════════════
// MISC SITE FUNCTIONS
// ════════════════════════════════════════════════════════
function copyWithFeedback(text, btn) {
  navigator.clipboard.writeText(text);
  const original = btn.innerHTML;
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    ${translations[currentLang].copied}`;
  btn.style.background = 'rgba(80,200,120,0.25)';
  btn.style.borderColor = 'rgba(80,200,120,0.5)';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    btn.style.borderColor = '';
  }, 1500);
}

function toggleAccordion(btn) {
  const item = btn.closest('.accordion-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ════════════════════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════════════════════
const translations = {
  pl: {
    btn_lang: 'Polski', btn_live: 'Transmisje na żywo',
    btn_calendar: 'Kalendarz spotkań', main_text: 'Oficjalna strona zboru ChWZ w Legnicy',
    nav_home: 'Główna', nav_onas: 'O nas', nav_kontakt: 'Kontakt',
    nav_video: 'Filmik o nas', nav_bracia: 'Bracia w służbie',
    role_pastor: 'Pastor', role_pastor_senior: 'Pastor Senior', role_deacon: 'Diakon do spraw',
    nav_accordion: 'Zasady wiary',
    contakt_text: 'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania.',
    label_email: 'Adres e-mail', btn_message: 'Napisz', btn_copy: 'Skopiuj', copied: 'Skopiowano',
    label_phone: 'Telefon', btn_call: 'Zadzwoń', label_bank: 'Dane bankowe',
    btn_copy_bank: 'Skopiuj numer konta', nav_media: 'Media społecznościowe',
    nav_address: 'Adres', address_text: 'Odwiedź nas na miejscu – zapraszamy do naszego zboru.',
    btn_maps: 'Otwórz w Mapach', btn_close: 'Zamknij'
  },
  ru: {
    btn_lang: 'Русский', btn_live: 'Прямая трансляция',
    btn_calendar: 'Календарь собраний', main_text: 'Официальный сайт церкви ChWZ в Легнице',
    nav_home: 'Главная', nav_onas: 'О нас', nav_kontakt: 'Контакт',
    nav_video: 'Видео о нас', nav_bracia: 'Братья в служении',
    role_pastor: 'Пастор', role_pastor_senior: 'Старший пастор', role_deacon: 'Диакон',
    nav_accordion: 'Основы веры',
    contakt_text: 'Свяжитесь с нами — мы с радостью ответим на ваши вопросы.',
    label_email: 'Адрес электронной почты', btn_message: 'Написать', btn_copy: 'Скопировать', copied: 'Скопировано',
    label_phone: 'Телефон', btn_call: 'Позвонить', label_bank: 'Банковские данные',
    btn_copy_bank: 'Скопировать номер счёта', nav_media: 'Социальные сети',
    nav_address: 'Адрес', address_text: 'Посетите наше собрание — приглашаем в нашу церковь.',
    btn_maps: 'Открыть в картах', btn_close: 'Закрыть'
  },
  en: {
    btn_lang: 'English', btn_live: 'Live stream',
    btn_calendar: 'Service schedule', main_text: 'Official website of the ChWZ congregation in Legnica',
    nav_home: 'Home', nav_onas: 'About us', nav_kontakt: 'Contact',
    nav_video: 'A video about us', nav_bracia: 'Brothers in ministry',
    role_pastor: 'Pastor', role_pastor_senior: 'Senior Pastor', role_deacon: 'Deacon',
    nav_accordion: 'Articles of faith',
    contakt_text: 'Contact us – we will gladly answer your questions.',
    label_email: 'Email Address', btn_message: 'Message', btn_copy: 'Copy', copied: 'Copied',
    label_phone: 'Phone', btn_call: 'To call', label_bank: 'Bank details',
    btn_copy_bank: 'Copy the account number', nav_media: 'Social media',
    nav_address: 'Address', address_text: 'Visit our gathering – we invite you to our church.',
    btn_maps: 'Open in Maps', btn_close: 'Close'
  },
  uk: {
    btn_lang: 'Українська', btn_live: 'Пряма трансляція',
    btn_calendar: 'Календар зібрань', main_text: 'Офіційна сторінка церкви ChWZ у Легниці',
    nav_home: 'Головна', nav_onas: 'Про нас', nav_kontakt: 'Контакт',
    nav_video: 'Відео про нас', nav_bracia: 'Брати служителя',
    role_pastor: 'Пастор', role_pastor_senior: 'Старший пастор', role_deacon: 'Диякон',
    nav_accordion: 'Основи віри',
    contakt_text: 'Зв\'яжіться з нами — ми із задоволенням відповімо на ваші запитання.',
    label_email: 'Адреса електронної пошти', btn_message: 'Написати', btn_copy: 'Скопіювати', copied: 'Скопійовано',
    label_phone: 'Телефон', btn_call: 'Зателефонувати', label_bank: 'Банківські дані',
    btn_copy_bank: 'Скопіювати номер рахунку', nav_media: 'Соціальні мережі',
    nav_address: 'Адреса', address_text: 'Відвідайте наше зібрання — запрошуємо до нашої церкви.',
    btn_maps: 'Відкрити в картах', btn_close: 'Закрити'
  }
};

let currentLang = 'pl';

function setLanguage(lang) {
  const t = translations[lang];
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.getElementById('lang-dropdown').classList.remove('open');
  updateUwagaText(lang);
  const closeSpan = document.querySelector('.cal-close-btn span[data-i18n="btn_close"]');
  if (closeSpan) closeSpan.textContent = calI18n[lang]?.btn_close || 'Zamknij';
  const overlay = document.getElementById('calendar-overlay');
  if (overlay && overlay.style.display !== 'none') {
    renderCalendar();
    updateCalEvents(calSelectedDate);
  }
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-wrapper')) {
    document.getElementById('lang-dropdown').classList.remove('open');
  }
});

function toggleLangDropdown() {
  document.getElementById('lang-dropdown').classList.toggle('open');
  const isOpen = document.getElementById('lang-dropdown').classList.contains('open');
  // if (window.innerWidth <= 443) {
  //   document.getElementById('uwaga-banner').classList.toggle('dropdown-open', isOpen);
  // }
}

// ════════════════════════════════════════════════════════
// EMAIL BUTTON
// ════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  const emailBtn = document.querySelector('.btn_e-mail');
  if (emailBtn) {
    emailBtn.addEventListener('click', function() {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=legnica@chwz.org.pl', '_blank');
    });
  }
});

// ════════════════════════════════════════════════════════
// SCHEDULE DATA
// ════════════════════════════════════════════════════════
const weeklySchedule = {
  0: [
    { pl: 'Nabożeństwo poranne o 10:00',     ru: 'Утреннее богослужение в 10:00',    en: 'Morning service at 10:00',        uk: 'Ранкове богослужіння о 10:00' },
    { pl: 'Nabożeństwo wieczorowe o 18:00',  ru: 'Вечернее богослужение в 18:00',    en: 'Evening service at 18:00',        uk: 'Вечірнє богослужіння о 18:00' }
  ],
  1: [{ pl: 'Modlitwa o 19:00',                ru: 'Молитва в 19:00',                  en: 'Prayer meeting at 19:00',         uk: 'Молитва о 19:00' }],
  4: [{ pl: 'Nabożeństwo o 18:00',             ru: 'Богослужение в 18:00',             en: 'Service at 18:00',                uk: 'Богослужіння о 18:00' }],
  5: [{ pl: 'Młodzieżowe nabożeństwo o 18:00', ru: 'Молодёжное богослужение в 18:00',  en: 'Youth service at 18:00',          uk: 'Молодіжне богослужіння о 18:00' }]
};

// ════════════════════════════════════════════════════════
// SUPABASE CONFIG
// ════════════════════════════════════════════════════════
const SUPABASE_URL = 'https://yrksamlxpyjypwuorvjg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_dhIJrIKTdS_FtNv63msNcw_er5n-jD1';
const API = `${SUPABASE_URL}/rest/v1/exceptions`;
const sbHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
  'Content-Type': 'application/json'
};

let exceptionsCache = null;

async function loadExceptions() {
  if (exceptionsCache) return exceptionsCache;
  try {
    const res = await fetch(`${API}?select=*&order=date,event_index`, { headers: sbHeaders });
    const rows = await res.json();
    const raw = {};
    rows.forEach(row => {
      if (!raw[row.date]) raw[row.date] = [];
      raw[row.date][row.event_index] = {
        pl: row.pl||'', ru: row.ru||'', en: row.en||'', uk: row.uk||''
      };
    });
    exceptionsCache = {};
    Object.keys(raw).forEach(date => {
      const d = new Date(date + 'T12:00:00');
      const base = (weeklySchedule[d.getDay()] || []).map(e => ({...e}));
      const overrides = raw[date];
      const result = [...base];
      overrides.forEach((ov, idx) => {
        if (!ov) return;
        if (!ov.pl && !ov.ru && !ov.en && !ov.uk) {
          result[idx] = null;
        } else {
          result[idx] = { pl: ov.pl, ru: ov.ru, en: ov.en, uk: ov.uk };
        }
      });
      exceptionsCache[date] = result.filter(e => e !== null);
    });
    return exceptionsCache;
  } catch(e) {
    console.error('Supabase load error:', e);
    return {};
  }
}

async function saveException(date, eventIndex, pl, ru, en, uk) {
  exceptionsCache = null;
  await fetch(`${API}?date=eq.${date}&event_index=eq.${eventIndex}`, { method: 'DELETE', headers: sbHeaders });
  await fetch(API, {
    method: 'POST',
    headers: { ...sbHeaders, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ date, event_index: eventIndex, pl, ru, en, uk })
  });
}

async function deleteException(date, eventIndex = null) {
  exceptionsCache = null;
  if (eventIndex !== null) {
    await fetch(`${API}?date=eq.${date}&event_index=eq.${eventIndex}`, { method: 'DELETE', headers: sbHeaders });
  } else {
    await fetch(`${API}?date=eq.${date}`, { method: 'DELETE', headers: sbHeaders });
  }
}

async function getEventsForDate(dateStr) {
  const exc = await loadExceptions();
  if (exc.hasOwnProperty(dateStr)) return exc[dateStr];
  const d = new Date(dateStr + 'T12:00:00');
  return weeklySchedule[d.getDay()] || [];
}

function dateKey(y, m, d) {
  return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}

// ════════════════════════════════════════════════════════
// CALENDAR i18n
// ════════════════════════════════════════════════════════
const calI18n = {
  pl: { btn_close: 'Zamknij', no_events: 'Brak wydarzeń', months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'], dows: ['Su','Mo','Tu','We','Th','Fr','Sa'] },
  ru: { btn_close: 'Закрыть', no_events: 'Нет событий', months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], dows: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'] },
  en: { btn_close: 'Close', no_events: 'No events', months: ['January','February','March','April','May','June','July','August','September','October','November','December'], dows: ['Su','Mo','Tu','We','Th','Fr','Sa'] },
  uk: { btn_close: 'Закрити', no_events: 'Немає подій', months: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'], dows: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'] }
};

// ════════════════════════════════════════════════════════
// CALENDAR OPEN / CLOSE / RENDER
// ════════════════════════════════════════════════════════
let calYear, calMonth, calSelectedDate;

async function openCalendar() {
  const pulsingDate = window._pulsingDate; // ← сохраняем до сброса
  stopCalBtnPulse();
  hideUwaga();
  window._pulsingDate = pulsingDate; // ← восстанавливаем после hideUwaga
  const overlay = document.getElementById('calendar-overlay');
  overlay.style.display = 'flex';
  overlay.classList.remove('hiding');
  const today = new Date();
  calYear  = today.getFullYear();
  calMonth = today.getMonth();
  calSelectedDate = dateKey(calYear, calMonth, today.getDate());
  await renderCalendar();
  updateCalEvents(calSelectedDate);
}

function closeCalendar() {
  const overlay = document.getElementById('calendar-overlay');
  overlay.classList.add('hiding');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('hiding');
  }, 230);
}

function calOverlayClick(e) {
  if (e.target === e.currentTarget) closeCalendar();
}

async function renderCalendar() {
  const lang = currentLang || 'pl';
  const t = calI18n[lang];
  const today = new Date();
  const exc = await loadExceptions();

  document.getElementById('cal-month-label').textContent = t.months[calMonth];
  document.getElementById('cal-year-label').textContent  = calYear;

  const dowRow = document.getElementById('cal-dow-row');
  dowRow.innerHTML = '';
  t.dows.forEach((label, i) => {
    const cell = document.createElement('div');
    cell.className = 'cal-dow-cell' + (i === 0 ? ' sunday' : '');
    cell.textContent = label;
    dowRow.appendChild(cell);
  });

  const grid = document.getElementById('cal-grid');
  grid.innerHTML = '';
  const firstDow = new Date(calYear, calMonth, 1).getDay();
  const daysInMo = new Date(calYear, calMonth + 1, 0).getDate();

  for (let i = 0; i < firstDow; i++) {
    const el = document.createElement('button');
    el.className = 'cal-day empty';
    grid.appendChild(el);
  }

  for (let d = 1; d <= daysInMo; d++) {
    const key    = dateKey(calYear, calMonth, d);
    const dow    = new Date(calYear, calMonth, d).getDay();
    const isToday = calYear === today.getFullYear() && calMonth === today.getMonth() && d === today.getDate();
    const isSel  = key === calSelectedDate;
    const events = exc.hasOwnProperty(key) ? exc[key] : (weeklySchedule[dow] || []);

    let cls = 'cal-day';
    if (dow === 0)         cls += ' sunday';
    if (isToday)           cls += ' today';
    if (isSel && !isToday) cls += ' selected';
    if (events.length > 0) cls += ' has-events';
    if (window._pulsingDate === key) cls += ' day-pulse';

    const btn = document.createElement('button');
    btn.className   = cls;
    btn.textContent = d;
    btn.onclick = () => { calSelectedDate = key; renderCalendar(); updateCalEvents(key); };
    grid.appendChild(btn);
  }
}

async function updateCalEvents(dateStr) {
  const lang = currentLang || 'pl';
  const t = calI18n[lang];
  const events = await getEventsForDate(dateStr);
  const el = document.getElementById('cal-events-content');
  if (!events || events.length === 0) {
    el.innerHTML = `<span class="cal-no-events">${t.no_events}</span>`;
  } else {
    el.innerHTML = events.map(e => `<span class="cal-event-line">${e[lang] || e.pl}</span>`).join('');
  }
}

async function calPrevMonth() {
  calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; }
  await renderCalendar(); updateCalEvents(calSelectedDate);
}
async function calNextMonth() {
  calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; }
  await renderCalendar(); updateCalEvents(calSelectedDate);
}
async function calChangeYear(delta) {
  calYear += delta; await renderCalendar(); updateCalEvents(calSelectedDate);
}

// ════════════════════════════════════════════════════════
// UWAGA BANNER
// ════════════════════════════════════════════════════════
function getUwagaMsg(lang, exceptionEvs, isTomorrow = false) {
  const dayStr = isTomorrow ? {
    pl: 'Jutro', ru: 'Завтра', en: 'Tomorrow', uk: 'Завтра'
  }[lang] : {
    pl: 'Dzisiaj', ru: 'Сегодня', en: 'Today', uk: 'Сьогодні'
  }[lang];

  if (exceptionEvs.length === 0) {
    return {
      pl: `Uwaga! ${dayStr} nie odbędą się żadne nabożeństwa.`,
      ru: `Внимание! ${dayStr} богослужений не будет.`,
      en: `Notice! ${dayStr} there are no services.`,
      uk: `Увага! ${dayStr} богослужінь не буде.`
    }[lang];
  }

  // Получаем оригинальное расписание дня
  const targetDate = isTomorrow ? (() => { const d = new Date(); d.setDate(d.getDate()+1); return d; })() : new Date();
  const originalEvs = weeklySchedule[targetDate.getDay()] || [];

  // Находим только изменённые события
  const changed = exceptionEvs.filter((ev, idx) => {
    const orig = originalEvs[idx];
    if (!orig) return true; // новое событие
    return orig.pl !== ev.pl || orig.ru !== ev.ru || orig.en !== ev.en || orig.uk !== ev.uk;
  });

  const list = (changed.length > 0 ? changed : exceptionEvs).map(e => e[lang] || e.pl).join(', ');

  return {
    pl: `Uwaga! ${dayStr} zamiast zwykłego programu odbędzie się: ${list}.`,
    ru: `Внимание! ${dayStr} вместо обычной программы будет: ${list}.`,
    en: `Notice! ${dayStr} instead of the regular program: ${list}.`,
    uk: `Увага! ${dayStr} замість звичайної програми відбудеться: ${list}.`
  }[lang];
}

async function checkUwagaBanner() {
  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayKey    = dateKey(today.getFullYear(),    today.getMonth(),    today.getDate());
  const tomorrowKey = dateKey(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());
  const exc = await loadExceptions();

  let targetKey = null, isTomorrow = false;

  if (exc.hasOwnProperty(todayKey)) {
    const normalText = (weeklySchedule[today.getDay()] || []).map(e => e.pl).join('|');
    if (normalText !== exc[todayKey].map(e => e.pl).join('|')) targetKey = todayKey;
  }
  if (!targetKey && exc.hasOwnProperty(tomorrowKey)) {
    const normalText = (weeklySchedule[tomorrow.getDay()] || []).map(e => e.pl).join('|');
    if (normalText !== exc[tomorrowKey].map(e => e.pl).join('|')) { targetKey = tomorrowKey; isTomorrow = true; }
  }
  if (!targetKey) return;

  const exceptionEvs = exc[targetKey];
  window._uwagaExceptions = exceptionEvs;
  window._uwagaIsTomorrow = isTomorrow;

  startCalBtnPulse();
  startDayPulse(targetKey);

  const lang = currentLang || 'pl';
  document.getElementById('uwaga-text').textContent = getUwagaMsg(lang, exceptionEvs, isTomorrow);
  document.getElementById('uwaga-banner').style.display = 'flex';
}

function startDayPulse(dateStr) {
  window._pulsingDate = dateStr;
}

function stopDayPulse() {
  window._pulsingDate = null;
  document.querySelectorAll('.cal-day.day-pulse').forEach(btn => {
    btn.classList.remove('day-pulse');
  });
}

function updateUwagaText(lang) {
  if (!window._uwagaExceptions) return;
  const banner = document.getElementById('uwaga-banner');
  if (banner.style.display === 'none') return;
  document.getElementById('uwaga-text').textContent = getUwagaMsg(lang, window._uwagaExceptions, window._uwagaIsTomorrow);
}

function hideUwaga() {
  stopCalBtnPulse();
  const banner = document.getElementById('uwaga-banner');
  banner.classList.add('hiding');
  setTimeout(() => { banner.style.display = 'none'; banner.classList.remove('hiding'); }, 320);
}

function startCalBtnPulse() {
  document.querySelectorAll('.cal-header-btn').forEach(btn => btn.classList.add('cal-btn-pulse'));
}
function stopCalBtnPulse() {
  document.querySelectorAll('.cal-header-btn').forEach(btn => btn.classList.remove('cal-btn-pulse'));
  stopDayPulse();
}

// Swipe to dismiss uwaga banner
function initUwagaSwipe() {
  const banner = document.getElementById('uwaga-banner');
}

// ════════════════════════════════════════════════════════
// ADMIN PANEL
// ════════════════════════════════════════════════════════
const ADMIN_PASSWORD = 'chwz2024';

function openAdmin() {
  document.getElementById('admin-overlay').style.display = 'flex';
  document.getElementById('admin-login').style.display   = 'flex';
  document.getElementById('admin-main').style.display    = 'none';
  document.getElementById('admin-login-error').style.display = 'none';
  document.getElementById('admin-password-input').value  = '';
  setTimeout(() => document.getElementById('admin-password-input').focus(), 100);
}
function closeAdmin() { document.getElementById('admin-overlay').style.display = 'none'; }
function adminOverlayClick(e) { if (e.target === e.currentTarget) closeAdmin(); }

function adminLogin() {
  if (document.getElementById('admin-password-input').value === ADMIN_PASSWORD) {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-main').style.display  = 'flex';
    renderAdminList();
  } else {
    document.getElementById('admin-login-error').style.display = 'block';
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-password-input').focus();
  }
}
function adminLogout() {
  document.getElementById('admin-main').style.display  = 'none';
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-password-input').value = '';
}

async function adminAddException() {
  const date       = document.getElementById('admin-exc-date').value;
  const eventIndex = parseInt(document.getElementById('admin-exc-index').value);
  const pl         = document.getElementById('admin-exc-pl').value.trim();
  const ru         = document.getElementById('admin-exc-ru').value.trim();
  const en         = document.getElementById('admin-exc-en').value.trim();
  const uk         = document.getElementById('admin-exc-uk').value.trim();
  const msgEl      = document.getElementById('admin-add-msg');

  if (!date) {
    msgEl.style.cssText = 'display:block;color:rgba(220,100,100,0.95)';
    msgEl.textContent = 'Wybierz datę!';
    setTimeout(() => { msgEl.style.display = 'none'; }, 2500);
    return;
  }
  msgEl.style.cssText = 'display:block;color:rgba(245,239,232,0.6)';
  msgEl.textContent = 'Zapisywanie...';
  try {
    await saveException(date, eventIndex, pl||null, ru||null, en||null, uk||null);
    ['admin-exc-date','admin-exc-pl','admin-exc-ru','admin-exc-en','admin-exc-uk'].forEach(id => document.getElementById(id).value = '');
    msgEl.style.cssText = 'display:block;color:rgba(100,200,130,0.95)';
    msgEl.textContent = 'Wyjątek zapisany!';
    setTimeout(() => { msgEl.style.display = 'none'; }, 2500);
    await renderAdminList();
  } catch(e) {
    msgEl.style.cssText = 'display:block;color:rgba(220,100,100,0.95)';
    msgEl.textContent = 'Błąd zapisu. Spróbuj ponownie.';
  }
}

async function adminDeleteException(date, eventIndex = null) {
  await deleteException(date, eventIndex);
  await renderAdminList();
}

async function renderAdminList() {
  exceptionsCache = null;
  const res  = await fetch(`${API}?select=*&order=date,event_index`, { headers: sbHeaders });
  const rows = await res.json();
  const list  = document.getElementById('admin-exc-list');
  const noExc = document.getElementById('admin-no-exc');
  list.innerHTML = '';

  const byDate = {};
  rows.forEach(row => {
    if (!byDate[row.date]) byDate[row.date] = [];
    byDate[row.date].push(row);
  });

  const keys = Object.keys(byDate).sort();
  if (keys.length === 0) { noExc.style.display = 'block'; return; }
  noExc.style.display = 'none';

  keys.forEach(date => {
    const dateRows = byDate[date];
    const item = document.createElement('div');
    item.className = 'admin-exc-item';
    const eventsHtml = dateRows.map(row => `
      <div class="admin-exc-event-row">
        <span>#${row.event_index + 1}: ${row.pl || '<em>usuń</em>'}</span>
        <button class="admin-exc-delete" onclick="adminDeleteException('${date}', ${row.event_index})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
            <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
          </svg>
        </button>
      </div>`).join('');
    item.innerHTML = `
      <div class="admin-exc-item-info" style="width:100%">
        <div class="admin-exc-date-label">${date}</div>
        <div class="admin-exc-events-text">${eventsHtml}</div>
      </div>`;
    list.appendChild(item);
  });
}

// ════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════
function initAdminAccess() {
  let tapCount = 0, tapTimer = null;
  document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', e => { if (e.shiftKey) { e.stopPropagation(); openAdmin(); } });
    logo.addEventListener('touchstart', e => {
      tapCount++;
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => { tapCount = 0; }, 1500);
      if (tapCount >= 3) {
        tapCount = 0;
        e.preventDefault();
        e.stopPropagation();
        openAdmin();
      }
    }, { passive: false });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initScrollSpy();
  initScrollReveal();
  initAdminAccess();
  initUwagaSwipe();
  checkUwagaBanner();
});