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
