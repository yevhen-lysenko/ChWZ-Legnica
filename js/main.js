$(function () {

    $('.burger').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('burger--active')
        $('.header__links-box').toggleClass('header__links--open')
        $('.burger_item').toggleClass('burger_item--open')
    })

    $('.question__item-button').on('click', function (e) {
        e.preventDefault()
        $('.question__item-text').toggleClass('question__item-text--active')
        $('.question__item-arrow').toggleClass('question__item-arrow--active')
    })
    $('.question__item-button2').on('click', function (e) {
        e.preventDefault()
        $('.question__item-text2').toggleClass('question__item-text2--active')
        $('.question__item-arrow2').toggleClass('question__item-arrow2--active')
    })
    $('.question__item-button3').on('click', function (e) {
        e.preventDefault()
        $('.question__item-text3').toggleClass('question__item-text3--active')
        $('.question__item-arrow3').toggleClass('question__item-arrow3--active')
    })
    $('.question__item-button4').on('click', function (e) {
        e.preventDefault()
        $('.question__item-text4').toggleClass('question__item-text4--active')
        $('.question__item-arrow4').toggleClass('question__item-arrow4--active')
    })
    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.header_nav-burger').toggleClass('header_nav-burger--active')
    })
    $('.header_nav-link a').on('click', function (e) {
        e.preventDefault()
        $('.header_nav-burger').toggleClass('header_nav-burger--active')
        $('.burger').toggleClass('burger--active')
    })

    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top -70; //-70px это у меня приклеиное меню, если подскажите как якоря сдлеать -70px, буду признателен
            $('body,html').animate({scrollTop: top}, 600);
        });
    });
});