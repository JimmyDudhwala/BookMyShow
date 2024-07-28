var swiperMain = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        autoplay: function() {
            swiperMain.translateTo(swiperMain.translate - 400, 1000);
        }
    }
});

    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: 5,
      spaceBetween: 32,
      freeMode: true,
      cssMode: true,
      
    });
    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: 5,
      spaceBetween: 32,
      freeMode: true,
      cssMode: true,
      
    });
