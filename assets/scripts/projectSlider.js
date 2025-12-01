// Универсальный скрипт для инициализации слайдеров контента (project, product, blog)
(function() {
    // Типы слайдеров
    var sliderTypes = ['project', 'product', 'blog'];
    
    sliderTypes.forEach(function(sliderType) {
        var sliderSelector = '.' + sliderType + '-swiper';
        var sliderElement = document.querySelector(sliderSelector);
        
        // Пропускаем, если слайдер не найден на странице
        if (!sliderElement) return;
        
        // Получаем реальное количество слайдов из DOM
        var totalSlides = sliderElement.querySelectorAll('.swiper-slide').length;
        var totalElement = document.querySelector('.' + sliderType + '-swiper__total');
        if (totalElement && totalSlides > 0) {
            totalElement.textContent = totalSlides;
        }
        
        // Инициализация Swiper
        var swiper = new Swiper(sliderSelector, {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: totalSlides > 3,
            navigation: {
                nextEl: '.' + sliderType + '-swiper__next',
                prevEl: '.' + sliderType + '-swiper__prev',
            },
            on: {
                init: function () {
                    // Используем realIndex для корректного отображения при loop: true
                    var currentElement = document.querySelector('.' + sliderType + '-swiper__current');
                    if (currentElement) {
                        currentElement.textContent = this.realIndex + 1;
                    }
                },
                slideChange: function () {
                    // Используем realIndex вместо activeIndex для корректной работы с loop
                    var currentElement = document.querySelector('.' + sliderType + '-swiper__current');
                    if (currentElement) {
                        currentElement.textContent = this.realIndex + 1;
                    }
                },
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            },
        });
    });
})();

