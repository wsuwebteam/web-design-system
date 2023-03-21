import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
//Test

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
const initSwiper = () => {

    const cardCarousel = new Swiper(".wsu-card-carousel", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".wsu-card-carousel__pagination",
          clickable: false,
        },
        navigation: {
          nextEl: '.wsu-card-carousel__button-next',
          prevEl: '.wsu-card-carousel__button-prev',
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