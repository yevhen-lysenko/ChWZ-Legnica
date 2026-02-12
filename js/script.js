document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items'),
          copy = document.querySelectorAll('.copy'),
          burger = document.getElementById('burger'),
          lines = document.querySelectorAll('.header_line'),
          board = document.querySelector('.menu_board'),
          ok = document.querySelectorAll('.ok'),
          accordion = document.querySelector('.learn_all'),
          accordionContent = document.querySelector('.rules_text'),
          arrow = document.querySelector('.item_arrow');

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
        accordionAnimation();
    });


    //desktop version
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            })
        }
    }); 

    copy.forEach(btn => {
        btn.addEventListener('click', function () {
        const email = this.closest('.text').querySelector('.email').innerText;

            // копируем текст
            navigator.clipboard.writeText(email);

            // меняем картинку
            const defaultImg = this.dataset.default;
            const successImg = this.dataset.success;

            this.src = successImg;

            // возвращаем обратно через 3 секунды
            setTimeout(() => {
                this.src = defaultImg;
            }, 1000);
        });
    });

    showEvents(new Date());
});

flatpickr("#calendar", {
    inline: true,
    locale: "pl",
    weekNumbers: false, 
    enable: ["2026-02-01", "2026-02-02", "2026-02-05", "2026-02-06", "2026-02-08", "2026-02-09", "2026-02-12", "2026-02-13", "2026-02-15", "2026-02-16", "2026-02-19", "2026-02-20", "2026-02-22", "2026-02-23", "2026-02-26", "2026-02-27"],
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
