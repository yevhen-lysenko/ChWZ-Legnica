// ════════════════════════════════════════════════════════
// MAIN SITE FUNCTIONS (оригинальные)
// ════════════════════════════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('nav.desktop-nav a').forEach(a => a.classList.remove('active'));
  const dn = document.getElementById('nav-' + name);
  if (dn) dn.classList.add('active');
  document.querySelectorAll('.mobile-nav a').forEach(a => a.classList.remove('active'));
  const mn = document.getElementById('mnav-' + name);
  if (mn) mn.classList.add('active');
  window.scrollTo(0, 0);

  const indicator = document.querySelector('.nav-indicator');
  if (name === 'home')    indicator.style.transform = 'translateX(6%)';
  if (name === 'onas')    indicator.style.transform = 'translateX(100%)';
  if (name === 'kontakt') indicator.style.transform = 'translateX(194%)';

  if (name === 'home') {
    document.querySelectorAll('header').forEach(h => h.classList.add('header-transparent'));
  } else {
    document.querySelectorAll('header').forEach(h => h.classList.remove('header-transparent'));
  }
}

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

document.querySelector('.btn_e-mail').addEventListener('click', function() {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=legnica@chwz.org.pl', '_blank');
});

// ════════════════════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════════════════════
const translations = {
  pl: {
    btn_lang: 'Polski', 
    btn_menu: 'Menu', 
    btn_live: 'Transmisje na żywo',
    btn_calendar: 'Kalendarz spotkań', 
    main_text: 'Oficjalna strona zboru ChWZ w Legnicy',
    nav_home: 'Główna', 
    nav_onas: 'O nas', 
    nav_kontakt: 'Kontakt',
    nav_video: 'Filmik o nas', 
    nav_bracia: 'Bracia w służbie',
    role_pastor: 'Pastor', 
    role_pastor_senior: 'Pastor Senior', 
    role_deacon: 'Diakon do spraw',
    nav_accordion: 'Zasady wiary',
    contakt_text: 'Skontaktuj się z nami – chętnie odpowiemy na Twoje pytania.',
    label_email: 'Adres e-mail', 
    btn_message: 'Napisz', 
    btn_copy: 'Skopiuj', 
    copied: 'Skopiowano',
    label_phone: 'Telefon', 
    btn_call: 'Zadzwoń', 
    label_bank: 'Dane bankowe',
    btn_copy_bank: 'Skopiuj numer konta', 
    nav_media: 'Media społecznościowe',
    nav_address: 'Adres', 
    address_text: 'Odwiedź nas na miejscu – zapraszamy do naszego zboru.',
    btn_maps: 'Otwórz w Mapach', 
    btn_close: 'Zamknij'
  },
  ru: {
    btn_lang: 'Русский', 
    btn_menu: 'Меню', 
    btn_live: 'Прямая трансляция',
    btn_calendar: 'Календарь собраний', 
    main_text: 'Официальный сайт церкви ChWZ в Легнице',
    nav_home: 'Главная', 
    nav_onas: 'О нас', 
    nav_kontakt: 'Контакт',
    nav_video: 'Видео о нас', 
    nav_bracia: 'Братья в служении',
    role_pastor: 'Пастор', 
    role_pastor_senior: 'Старший пастор', 
    role_deacon: 'Диакон',
    nav_accordion: 'Основы веры',
    contakt_text: 'Свяжитесь с нами — мы с радостью ответим на ваши вопросы.',
    label_email: 'Адрес электронной почты', 
    btn_message: 'Написать', 
    btn_copy: 'Скопировать', 
    copied: 'Скопировано',
    label_phone: 'Телефон', 
    btn_call: 'Позвонить', 
    label_bank: 'Банковские данные',
    btn_copy_bank: 'Скопировать номер счёта', 
    nav_media: 'Социальные сети',
    nav_address: 'Адрес', 
    address_text: 'Посетите наше собрание — приглашаем в нашу церковь.',
    btn_maps: 'Открыть в картах', 
    btn_close: 'Закрыть'
  },
  en: {
    btn_lang: 'English', 
    btn_menu: 'Menu', 
    btn_live: 'Live stream',
    btn_calendar: 'Service schedule', 
    main_text: 'Official website of the ChWZ congregation in Legnica',
    nav_home: 'Home', 
    nav_onas: 'About us', 
    nav_kontakt: 'Contact',
    nav_video: 'A video about us', 
    nav_bracia: 'Brothers in ministry',
    role_pastor: 'Pastor', 
    role_pastor_senior: 'Senior Pastor', 
    role_deacon: 'Deacon',
    nav_accordion: 'Articles of faith',
    contakt_text: 'Contact us – we will gladly answer your questions.',
    label_email: 'Email Address', 
    btn_message: 'Message', 
    btn_copy: 'Copy', 
    copied: 'Copied',
    label_phone: 'Phone', 
    btn_call: 'To call', 
    label_bank: 'Bank details',
    btn_copy_bank: 'Copy the account number', 
    nav_media: 'Social media',
    nav_address: 'Address', 
    address_text: 'Visit our gathering – we invite you to our church.',
    btn_maps: 'Open in Maps', 
    btn_close: 'Close'
  },
  uk: {
    btn_lang: 'Українська', 
    btn_menu: 'Меню', 
    btn_live: 'Пряма трансляція',
    btn_calendar: 'Календар зібрань', 
    main_text: 'Офіційна сторінка церкви ChWZ у Легниці',
    nav_home: 'Головна', 
    nav_onas: 'Про нас', 
    nav_kontakt: 'Контакт',
    nav_video: 'Відео про нас', 
    nav_bracia: 'Брати служителя',
    role_pastor: 'Пастор', 
    role_pastor_senior: 'Старший пастор', 
    role_deacon: 'Диякон',
    nav_accordion: 'Основи віри',
    contakt_text: 'Зв\'яжіться з нами — ми із задоволенням відповімо на ваші запитання.',
    label_email: 'Адреса електронної пошти', 
    btn_message: 'Написати', 
    btn_copy: 'Скопіювати', 
    copied: 'Скопійовано',
    label_phone: 'Телефон', 
    btn_call: 'Зателефонувати', 
    label_bank: 'Банківські дані',
    btn_copy_bank: 'Скопіювати номер рахунку', 
    nav_media: 'Соціальні мережі',
    nav_address: 'Адреса', 
    address_text: 'Відвідайте наше зібрання — запрошуємо до нашої церкви.',
    btn_maps: 'Відкрити в картах', 
    btn_close: 'Закрити'
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
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-wrapper')) {
    document.getElementById('lang-dropdown').classList.remove('open');
  }
});

function toggleLangDropdown() {
  document.getElementById('lang-dropdown').classList.toggle('open');
}

  const bar = document.querySelector('.lang-dropdown');
    let startX, scrollLeft;

  bar.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = bar.scrollLeft;
  }, { passive: true });

  bar.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
      const walk = startX - x;
    bar.scrollLeft = scrollLeft + walk;
  }, { passive: true });

// ════════════════════════════════════════════════════════
// SCHEDULE DATA
// ════════════════════════════════════════════════════════
const weeklySchedule = {
  0: [
    { pl: '10:00 Nabożeństwo poranne',     ru: '10:00 Утреннее богослужение',    en: '10:00 Morning service',        uk: '10:00 Ранкове богослужіння' },
    { pl: '18:00 Nabożeństwo wieczorowe',  ru: '18:00 Вечернее богослужение',    en: '18:00 Evening service',        uk: '18:00 Вечірнє богослужіння' }
  ],
  1: [{ pl: '19:00 Modlitwa',                ru: '19:00 Молитва',                  en: '19:00 Prayer meeting',         uk: '19:00 Молитва' }],
  4: [{ pl: '18:00 Nabożeństwo',             ru: '18:00 Богослужение',             en: '18:00 Service',                uk: '18:00 Богослужіння' }],
  5: [{ pl: '18:00 Młodzieżowe nabożeństwo', ru: '18:00 Молодёжное богослужение',  en: '18:00 Youth service',          uk: '18:00 Молодіжне богослужіння' }]
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
    const res = await fetch(`${API}?select=*`, { headers: sbHeaders });
    const rows = await res.json();
    exceptionsCache = {};
    rows.forEach(row => {
      exceptionsCache[row.date] = (row.pl || row.ru || row.en || row.uk)
        ? [{ pl: row.pl||'', ru: row.ru||'', en: row.en||'', uk: row.uk||'' }]
        : [];
    });
    return exceptionsCache;
  } catch(e) {
    console.error('Supabase load error:', e);
    return {};
  }
}

async function saveException(date, pl, ru, en, uk) {
  exceptionsCache = null;
  await fetch(`${API}?date=eq.${date}`, { method: 'DELETE', headers: sbHeaders });
  await fetch(API, {
    method: 'POST',
    headers: { ...sbHeaders, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ date, pl, ru, en, uk })
  });
}

async function deleteException(date) {
  exceptionsCache = null;
  await fetch(`${API}?date=eq.${date}`, { method: 'DELETE', headers: sbHeaders });
}

async function getEventsForDate(dateStr) {
  const exc = await loadExceptions();
  if (exc.hasOwnProperty(dateStr)) return exc[dateStr];
  const d = new Date(dateStr + 'T12:00:00');
  return weeklySchedule[d.getDay()] || [];
}

function dateKey(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

// ════════════════════════════════════════════════════════
// CALENDAR i18n
// ════════════════════════════════════════════════════════
const calI18n = {
  pl: {
    btn_close: 'Zamknij', no_events: 'Brak wydarzeń',
    months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    dows: ['Su','Mo','Tu','We','Th','Fr','Sa']
  },
  ru: {
    btn_close: 'Закрыть', no_events: 'Нет событий',
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    dows: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
  },
  en: {
    btn_close: 'Close', no_events: 'No events',
    months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    dows: ['Su','Mo','Tu','We','Th','Fr','Sa']
  },
  uk: {
    btn_close: 'Закрити', no_events: 'Немає подій',
    months: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    dows: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб']
  }
};

// ════════════════════════════════════════════════════════
// CALENDAR OPEN / CLOSE / RENDER
// ════════════════════════════════════════════════════════
let calYear, calMonth, calSelectedDate;

async function openCalendar() {
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
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pl';
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

    const btn = document.createElement('button');
    btn.className   = cls;
    btn.textContent = d;
    btn.onclick = () => { calSelectedDate = key; renderCalendar(); updateCalEvents(key); };
    grid.appendChild(btn);
  }
}

async function updateCalEvents(dateStr) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pl';
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
  const prefix = {
    pl: isTomorrow ? 'Uwaga! Jutro zamiast zwykłego programu odbędzie się: ' : 'Uwaga! Dzisiaj zamiast zwykłego programu odbędzie się: ',
    ru: isTomorrow ? 'Внимание! Завтра вместо обычной программы будет: '     : 'Внимание! Сегодня вместо обычной программы будет: ',
    en: isTomorrow ? 'Notice! Tomorrow instead of the regular program: '      : 'Notice! Today instead of the regular program: ',
    uk: isTomorrow ? 'Увага! Завтра замість звичайної програми відбудеться: ': 'Увага! Сьогодні замість звичайної програми відбудеться: ',
  }[lang];

  const noEvents = {
    pl: isTomorrow ? 'Uwaga! Jutro nie odbędą się żadne nabożeństwa.'    : 'Uwaga! Dzisiaj nie odbędą się żadne nabożeństwa.',
    ru: isTomorrow ? 'Внимание! Завтра богослужений не будет.'            : 'Внимание! Сегодня богослужений не будет.',
    en: isTomorrow ? 'Notice! There are no services tomorrow.'            : 'Notice! There are no services today.',
    uk: isTomorrow ? 'Увага! Завтра богослужінь не буде.'                : 'Увага! Сьогодні богослужінь не буде.',
  }[lang];

  if (exceptionEvs.length === 0) return noEvents;
  const list = exceptionEvs.map(e => e[lang] || e.pl).join(', ');
  return prefix + list + '.';
}

async function checkUwagaBanner() {
  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayKey    = dateKey(today.getFullYear(),    today.getMonth(),    today.getDate());
  const tomorrowKey = dateKey(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());

  const exc = await loadExceptions();

  // Проверяем сначала сегодня, потом завтра
  let targetKey = null;
  let isTomorrow = false;

  if (exc.hasOwnProperty(todayKey)) {
    const normalText = (weeklySchedule[today.getDay()] || []).map(e => e.pl).join('|');
    if (normalText !== exc[todayKey].map(e => e.pl).join('|')) {
      targetKey = todayKey;
    }
  }
  if (!targetKey && exc.hasOwnProperty(tomorrowKey)) {
    const normalText = (weeklySchedule[tomorrow.getDay()] || []).map(e => e.pl).join('|');
    if (normalText !== exc[tomorrowKey].map(e => e.pl).join('|')) {
      targetKey = tomorrowKey;
      isTomorrow = true;
    }
  }

  if (!targetKey) return;

  const exceptionEvs = exc[targetKey];
  window._uwagaExceptions = exceptionEvs;
  window._uwagaIsTomorrow = isTomorrow;

  const lang = typeof currentLang !== 'undefined' ? currentLang : 'pl';
  document.getElementById('uwaga-text').textContent = getUwagaMsg(lang, exceptionEvs, isTomorrow);
  document.getElementById('uwaga-banner').style.display = 'flex';
}

function updateUwagaText(lang) {
  if (!window._uwagaExceptions) return;
  const banner = document.getElementById('uwaga-banner');
  if (banner.style.display === 'none') return;
  document.getElementById('uwaga-text').textContent = getUwagaMsg(lang, window._uwagaExceptions, window._uwagaIsTomorrow);
}

function hideUwaga() {
  const banner = document.getElementById('uwaga-banner');
  banner.classList.add('hiding');
  setTimeout(() => { banner.style.display = 'none'; banner.classList.remove('hiding'); }, 320);
}

// ════════════════════════════════════════════════════════
// Swipe-Uwaga-Banner
// ════════════════════════════════════════════════════════
function initUwagaSwipe() {
  const banner = document.getElementById('uwaga-banner');
  let startX = 0, startY = 0, isDragging = false;

  banner.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    banner.style.animation = 'none'; // отключаем анимацию пока тащим
    banner.style.transition = 'none';
  }, { passive: true });

  banner.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    banner.style.transform = `translate(${dx}px, ${Math.min(dy, 0)}px)`;
    banner.style.opacity = 1 - Math.min(Math.sqrt(dx*dx + dy*dy) / 120, 1);
  }, { passive: true });

  banner.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    const dist = Math.sqrt(dx*dx + dy*dy);

    if (dist > 60) {
      // Улетает в ту сторону
      const angle = Math.atan2(dy, dx);
      const flyX = Math.cos(angle) * 300;
      const flyY = Math.min(Math.sin(angle) * 300, 0);
      banner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
      banner.style.transform = `translate(${flyX}px, ${flyY}px)`;
      banner.style.opacity = '0';
      setTimeout(() => {
        banner.style.display = 'none';
        banner.style.transform = '';
        banner.style.opacity = '';
        banner.style.transition = '';
        banner.style.animation = '';
      }, 310);
    } else {
      // Возвращается назад — с той же анимацией как вылезало
      banner.style.transition = 'none';
      banner.style.transform = '';
      banner.style.opacity = '';
      // Перезапускаем slideDown анимацию
      banner.style.animation = 'none';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          banner.style.animation = 'uwagaSlideDown 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both';
        });
      });
    }
  }, { passive: true });
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
  const date  = document.getElementById('admin-exc-date').value;
  const pl    = document.getElementById('admin-exc-pl').value.trim();
  const ru    = document.getElementById('admin-exc-ru').value.trim();
  const en    = document.getElementById('admin-exc-en').value.trim();
  const uk    = document.getElementById('admin-exc-uk').value.trim();
  const msgEl = document.getElementById('admin-add-msg');

  if (!date) {
    msgEl.style.cssText = 'display:block;color:rgba(220,100,100,0.95)';
    msgEl.textContent = 'Wybierz datę!';
    setTimeout(() => { msgEl.style.display = 'none'; }, 2500);
    return;
  }

  msgEl.style.cssText = 'display:block;color:rgba(245,239,232,0.6)';
  msgEl.textContent = 'Zapisywanie...';

  try {
    await saveException(date, pl||null, ru||null, en||null, uk||null);
    ['admin-exc-date','admin-exc-pl','admin-exc-ru','admin-exc-en','admin-exc-uk']
      .forEach(id => document.getElementById(id).value = '');
    msgEl.style.cssText = 'display:block;color:rgba(100,200,130,0.95)';
    msgEl.textContent = 'Wyjątek zapisany!';
    setTimeout(() => { msgEl.style.display = 'none'; }, 2500);
    await renderAdminList();
  } catch(e) {
    msgEl.style.cssText = 'display:block;color:rgba(220,100,100,0.95)';
    msgEl.textContent = 'Błąd zapisu. Spróbuj ponownie.';
  }
}

async function adminDeleteException(dateStr) {
  await deleteException(dateStr);
  await renderAdminList();
}

async function renderAdminList() {
  const exc   = await loadExceptions();
  const list  = document.getElementById('admin-exc-list');
  const noExc = document.getElementById('admin-no-exc');
  const keys  = Object.keys(exc).sort();
  list.innerHTML = '';
  if (keys.length === 0) { noExc.style.display = 'block'; return; }
  noExc.style.display = 'none';
  keys.forEach(key => {
    const events = exc[key];
    const item = document.createElement('div');
    item.className = 'admin-exc-item';
    item.innerHTML = `
      <div class="admin-exc-item-info">
        <div class="admin-exc-date-label">${key}</div>
        <div class="admin-exc-events-text">${
          events.length === 0
            ? '<em>Brak wydarzeń</em>'
            : events.map(e => `PL: ${e.pl}`).join('<br>')
        }</div>
      </div>
      <button class="admin-exc-delete" onclick="adminDeleteException('${key}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
        </svg>
      </button>`;
    list.appendChild(item);
  });
}

// ════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════
function initMenuButtons() {
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
  initMenuButtons();
  initUwagaSwipe();
  checkUwagaBanner();

  const origSetLang = window.setLanguage;
  if (typeof origSetLang === 'function') {
    window.setLanguage = function(lang) {
      origSetLang(lang);
      updateUwagaText(lang);
      const closeSpan = document.querySelector('.cal-close-btn span[data-i18n="btn_close"]');
      if (closeSpan) closeSpan.textContent = calI18n[lang]?.btn_close || 'Zamknij';
      const overlay = document.getElementById('calendar-overlay');
      if (overlay && overlay.style.display !== 'none') {
        renderCalendar();
        updateCalEvents(calSelectedDate);
      }
    };
  }
});