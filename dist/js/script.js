/* $(document).ready(function(){
    $('.comment__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
}); */

$(document).ready(function(){
    $('.comment__inner').slick({
        arrows: true, // Показывать или нет стрелочки
        // slidesToShow:2, // Сколько слайдов показывать на страницу
        // slidesToScroll: 1, // Сколько склайдов скролить за одно нажатие
        initialSlide: 1, // С какого слайда отображать впервые
        variableWidth: true, //Автоматическая ширина (Размер блока)
        centerMode: true, // Размещение блоков по центру
        infinite: true, // Бесконечная прокрутка
        responsive: [   // Задает настройки при указанном Брекпоинте (ширине окна)
            {
                breakpoint: 768, //Ширина окна
                settings: { //Сами настройки
                    arrows: false,
                    variableWidth: false
                }
            }
        ]
    });
});