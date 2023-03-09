import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const initSwiper = () => {

    const cardCarousel = new Swiper(".wsu-card-carousel", {
        slidesPerView: 3,
        keyboardControl: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".wsu-card-carousel__next",
          prevEl: ".wsu-card-carousel__prev",
        },
        pagination: {
          el: ".wsu-card-carousel__pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
        allowTouchMove: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
              enabled: false,
            },
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
            navigation: {
              enabled: false,
            },
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
        },
    });
    
}
initSwiper(); 