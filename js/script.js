document.addEventListener('DOMContentLoaded', () => {

    const burger = document.getElementById('burger'),
          lines = document.querySelectorAll('.header_line'),
          board = document.querySelector('.menu_board'),
          ok = document.querySelectorAll('.ok'),
          accordion = document.querySelector('.learn_all'),
          accordionContent = document.querySelector('.rules_text'),
          arrow = document.querySelector('.item_arrow'),
          rules = document.querySelector('.rules'),
          calendarButton = document.querySelector('.calendar_button'),
          calendarContainer = document.querySelector('.calendar_container');


    function showCalendarContainer() {
        calendarContainer.classList.toggle('active');
    }

    calendarButton.addEventListener('click', (e) => {
        showCalendarContainer()
    });

    function burgerAnimation() {
        lines.forEach(item => {
            item.classList.toggle('active');
        });
    };

    function showMenuBoard() {
        board.classList.toggle('active');
    };

    function burgerSecondAnimation() {
        lines.forEach(item => {
            item.classList.toggle('rotate');
        });
    };

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burgerAnimation();
        showMenuBoard();
        setTimeout(() => {
            burgerSecondAnimation()
        }, 200)
    });

    ok.forEach(item => {
        item.addEventListener('click', (e) => {
            showMenuBoard();
            burgerAnimation();
            burgerSecondAnimation();
        })
    })

    document.addEventListener('click', (e) => {
        if (
            board.classList.contains('active') &&
            !board.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            showMenuBoard();
            burgerAnimation();
            burgerSecondAnimation();
        }
    });

    

    //mobile version
    function accordionAnimation() {
        accordionContent.classList.toggle('active');
        arrow.classList.toggle('active');
    };

    accordion.addEventListener('click', () => {
        if (accordionContent.classList.contains('active')) {
            rules.scrollIntoView({
                top: 'start'
            });
        }
        accordionAnimation();
    });

    showEvents(new Date());
});

flatpickr("#calendar", {
    inline: true,
    locale: "pl",
    weekNumbers: false, 
    enable: ["2026-04-02", "2026-04-03", "2026-04-05", "2026-04-06", "2026-04-09", "2026-04-10", "2026-04-12", "2026-04-13", "2026-04-16", "2026-04-17", "2026-04-19", "2026-04-20", "2026-04-23", "2026-04-24", "2026-04-26", "2026-04-27", "2026-04-30"],
    onChange: function(selectedDates, dateStr, instance) {
        showEvents(dateStr);
    },
});

const weekend = [
    [
        { day: "Niedziela", time: "10:00", event: "Nabożeństwo poranne" },
        { day: "Niedziela", time: "18:00", event: "Nabożeństwo wieczorowe" }
    ],
    [
        { day: "Poniedziałek", time: "19:00", event: "Modlitwa" }
    ],
    [
    ],
    [
    ],
    [
        { day: "Czwartek", time: "18:00", event: "Nabożeństwo" }
    ],
    [
        { day: "Piątek", time: "18:00", event: "Młodzieżowe nabożeństwo" }
    ],
    [
    ]
]

function showEvents(dateStr) {
    const el = document.querySelector(".calendar_window");
    const event = weekend[new Date(dateStr).getDay()];

    if (event && event.length) {
        let text = '';
        event.forEach((e) => { text += `${e.time} ${e.event}\r\n`; });
        el.innerText = text;
    } else {
        el.innerText = "Dzisiaj nabożeństw nie ma";
    }
}
