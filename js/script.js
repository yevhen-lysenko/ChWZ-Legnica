  function showPage(name) {
    // hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // show target
    document.getElementById('page-' + name).classList.add('active');
    // update desktop nav
    document.querySelectorAll('nav.desktop-nav a').forEach(a => a.classList.remove('active'));
    const dn = document.getElementById('nav-' + name);
    if (dn) dn.classList.add('active');
    // update mobile nav
    document.querySelectorAll('.mobile-nav a').forEach(a => a.classList.remove('active'));
    const mn = document.getElementById('mnav-' + name);
    if (mn) mn.classList.add('active');
    // scroll to top
    window.scrollTo(0, 0);

    const indicator = document.querySelector('.nav-indicator');
      if (name === 'home')    indicator.style.transform = 'translateX(6%)';
      if (name === 'onas')    indicator.style.transform = 'translateX(100%)';
      if (name === 'kontakt') indicator.style.transform = 'translateX(194%)';

    // if (name === 'home') {
    //   document.querySelectorAll('header').forEach(h => {
    //     h.style.background = 'linear-gradient(133deg, #225085, #2d5a8c, #798da0)';
    //     h.style.backdropFilter = 'none';
    //     h.style.webkitBackdropFilter = 'none';
    //     h.style.borderBottom = 'none';
    //   });
    // } else {
    //   document.querySelectorAll('header').forEach(h => {
    //     h.style.background = '';
    //     h.style.backdropFilter = '';
    //     h.style.webkitBackdropFilter = '';
    //     h.style.borderBottom = '';
    //   });
    // }

    const header = document.querySelector('header.desktop-header, header.mobile-header');
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
    // close all
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
    // open clicked if was closed
    if (!isOpen) item.classList.add('open');
  }
  
  document.querySelector('.btn_e-mail').addEventListener('click', function() {
    window.open(
        'https://mail.google.com/mail/?view=cm&fs=1&to=legnica@chwz.org.pl',
        '_blank'
    );
  });

  const translations = {
    pl: {
      btn_lang: 'Polski',
      btn_menu: 'Menu',
      main_text: 'Oficjalna strona zboru ChWZ w Legnicy',
      nav_home: 'Główna',
      nav_onas: 'O nas',
      nav_kontakt: 'Kontakt',
      hero_tagline: 'Oficjalna strona kościoła w Legnicy',
      nav_video: 'Filmik o nas',
      nav_bracia: 'Bracia w służbie',
      role_pastor: "Pastor",
      role_pastor_senior: "Pastor Senior",
      role_deacon: "Diakon do spraw",
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
    },
    ru: {
      btn_lang: 'Русский',
      btn_menu: 'Меню',
      main_text: 'Официальный сайт церкви ChWZ в Легнице',
      nav_home: 'Главная',
      nav_onas: 'О нас',
      nav_kontakt: 'Контакт',
      hero_tagline: 'Официальный сайт церкви в Легнице',
      nav_video: 'Видео о нас',
      nav_bracia: 'Братья в служении',
      role_pastor: "Пастор",
      role_pastor_senior: "Старший пастор",
      role_deacon: "Диакон",
      nav_accordion: 'Основы веры',
      contakt_text: 'Свяжитесь с нами — мы с радостью ответим на ваши вопросы.',
      label_email: 'адрес электронной почты',
      btn_message: 'Написать',
      btn_copy: 'Скопировать',
      copied: 'Скопировано',
      label_phone: 'Телефон',
      btn_call: 'Позвонить',
      label_bank: 'Банковские данные',
      btn_copy_bank: 'Скопировать номер счёта',
      nav_media: 'Cоциальные сети',
      nav_address: 'Адрес',
      address_text: 'Посетите наше собрание — приглашаем в нашу церковь.',
      btn_maps: 'Открыть в картах',
    },
    en: {
      btn_lang: 'English',
      btn_menu: 'Menu',
      main_text: 'Official website of the ChWZ congregation in Legnica',
      nav_home: 'Home',
      nav_onas: 'About us',
      nav_kontakt: 'Contact',
      hero_tagline: 'Official website of the church in Legnica',
      nav_video: 'A video about us',
      nav_bracia: 'Brothers in ministry',
      role_pastor: "Pastor",
      role_pastor_senior: "Senior Pastor",
      role_deacon: "Deacon",
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
    },
    uk: {
      btn_lang: 'Українська',
      btn_menu: 'Меню',
      main_text: 'Офіційний сайт церкви ChWZ у Легниці',
      nav_home: 'Головна',
      nav_onas: 'Про нас',
      nav_kontakt: 'Контакт',
      hero_tagline: 'Офіційний сайт церкви в Легниці',
      nav_video: 'Відео про нас',
      nav_bracia: 'Брати в служінні',
      role_pastor: "Пастор",
      role_pastor_senior: "Старший пастор",
      role_deacon: "Диякон",
      nav_accordion: 'Основи віри',
      contakt_text: 'Зв’яжіться з нами — ми із задоволенням відповімо на ваші запитання.',
      label_email: 'адреса електронної пошти',
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
    // закрыть дропдаун
    document.getElementById('lang-dropdown').classList.remove('open');
    document.getElementById('lang-dropdown-mobile').classList.remove('open');
  }
// flatpickr("#calendar", {
//     inline: true,
//     locale: "pl",
//     weekNumbers: false, 
//     enable: ["2026-04-02", "2026-04-03", "2026-04-05", "2026-04-06", "2026-04-09", "2026-04-10", "2026-04-12", "2026-04-13", "2026-04-16", "2026-04-17", "2026-04-19", "2026-04-20", "2026-04-23", "2026-04-24", "2026-04-26", "2026-04-27", "2026-04-30"],
//     onChange: function(selectedDates, dateStr, instance) {
//         showEvents(dateStr);
//     },
// });

// const weekend = [
//     [
//         { day: "Niedziela", time: "10:00", event: "Nabożeństwo poranne" },
//         { day: "Niedziela", time: "18:00", event: "Nabożeństwo wieczorowe" }
//     ],
//     [
//         { day: "Poniedziałek", time: "19:00", event: "Modlitwa" }
//     ],
//     [
//     ],
//     [
//     ],
//     [
//         { day: "Czwartek", time: "18:00", event: "Nabożeństwo" }
//     ],
//     [
//         { day: "Piątek", time: "18:00", event: "Młodzieżowe nabożeństwo" }
//     ],
//     [
//     ]
// ]

// function showEvents(dateStr) {
//     const el = document.querySelector(".calendar_window");
//     const event = weekend[new Date(dateStr).getDay()];

//     if (event && event.length) {
//         let text = '';
//         event.forEach((e) => { text += `${e.time} ${e.event}\r\n`; });
//         el.innerText = text;
//     } else {
//         el.innerText = "Dzisiaj nabożeństw nie ma";
//     }
// }
