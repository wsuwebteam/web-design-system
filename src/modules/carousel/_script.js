import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
//Test

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
const initSwiper = () => {
  const carouselName = ".wsu-carousel";

  let carouselSliders = document.querySelectorAll(carouselName);

  if (carouselSliders.length > 0) {

    carouselSliders.forEach((carousel, index) => {

      carousel.classList.add(`wsu-carousel-${index}`);

      const slideWrapper = document.querySelector(`.wsu-carousel-${index} .wsu-carousel__wrapper`);
      const carouselSlides = slideWrapper.children;

      for (let i = 0; i < carouselSlides.length; i++) {
        carouselSlides[i].classList.add(`swiper-slide`);
        carouselSlides[i].setAttribute('data', `lbwps-gid: 'carousel-${index}'`);
      };

      let desktopCols;
      let tabletLargeCols;
      let tabletCols;
      let phoneCols;

      switch(carousel.dataset.desktopColumns) {
        case '1':
          desktopCols = 1;
          tabletLargeCols = 1;
          tabletCols = 1;
          phoneCols = 1;
          break;
        case '2':
          desktopCols = 2;
          tabletLargeCols = 2;
          tabletCols = 2;
          phoneCols = 1;
          break;
        case '4':
          desktopCols = 4;
          tabletLargeCols = 3;
          tabletCols = 2;
          phoneCols = 1;
          break;
        case '5':
          desktopCols = 5;
          tabletLargeCols = 4;
          tabletCols = 3;
          phoneCols = 1;
          break;
        default:
          desktopCols = 3;
          tabletLargeCols = 2;
          tabletCols = 2;
          phoneCols = 1;
      }

      const swiperSettings = {
        slidesPerView: desktopCols,
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
            // when window width is >= 0px
            0: {
              slidesPerView: phoneCols,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: tabletCols,
              spaceBetween: 40,
            },
            // when window width is >= 640px
            992: {
              slidesPerView: tabletLargeCols,
              spaceBetween: 40,
            },
            // when window width is >= 640px
            1260: {
              slidesPerView: desktopCols,
              spaceBetween: 40,
            },
          },
      };

      const carouselSlider = new Swiper(`.wsu-carousel-${index}`, swiperSettings);

    });
  }
}
initSwiper(); 