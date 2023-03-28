import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
//Test

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
const initSwiper = () => {
  const carouselName = ".wsu-carousel";
  let carouselSliders = document.querySelectorAll(carouselName);

  if (carouselSliders.length > 0) {

    carouselSliders.forEach((carousel, index) => {

      carousel.classList.add(`wsu-carousel-${index}`);

      const swiperSettings = {
        slidesPerView: carousel.dataset.desktopColumns,
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
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
 
            },
            // when window width is >= 640px
            768: {
              slidesPerView: carousel.dataset.tabletColumns,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: carousel.dataset.desktopColumns,
              spaceBetween: 40
            },
          },
      };

      const carouselSlider = new Swiper(`.wsu-carousel-${index}`, swiperSettings);

    });
  }
}
initSwiper(); 