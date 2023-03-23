import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
//Test

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
const initSwiper = () => {

    const carousel = new Swiper(".wsu-carousel", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".wsu-carousel__pagination",
          clickable: false,
        },
        navigation: {
          nextEl: '.wsu-carousel__button-next',
          prevEl: '.wsu-carousel__button-prev',
        },
        a11y: {
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
        },
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
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
        },
    });

}
initSwiper(); 