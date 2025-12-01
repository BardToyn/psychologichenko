var totalSlides = document.querySelectorAll(".swiper__hero-slide").length;
document.querySelector(".swiper__hero-total").textContent = totalSlides;

var swiper = new Swiper(".swiper__hero", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',

    fadeEffect: {
        crossFade: true
    },

    speed: 800,
    loop: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper__hero-next",
        prevEl: ".swiper__hero-prev",
    },
    on: {
        init: function () {
            // Используем realIndex для корректного отображения при loop: true
            document.querySelector(".swiper__hero-current").textContent = this.realIndex + 1;
        },
        slideChange: function () {
            // Используем realIndex вместо activeIndex для корректной работы с loop
            document.querySelector(".swiper__hero-current").textContent = this.realIndex + 1;
        },
    },
});

