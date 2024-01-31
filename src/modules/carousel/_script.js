import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);
const initSwiper = () => {
  const carouselName = ".wsu-carousel";
  
  // Defining all sliders by the .wsu-carousel class name
  let carouselSliders = document.querySelectorAll(carouselName);

  if (carouselSliders.length > 0) {
    // For each carousel with the .wsu-carousel class name
    carouselSliders.forEach((carousel, index) => {

      // add .wsu-carousel-(index number) class name to each carousel with .wsu-carousel
      carousel.classList.add(`wsu-carousel-${index}`);
      
      // define slider wrappers by targeting carousels that have been tagged with an index number, and drill down to the wrapper inside
      let slideWrapper = document.querySelector(`.wsu-carousel-${index} .wsu-carousel__wrapper`);
      let carouselSlides = slideWrapper.children;
      //let carouselImageSlides = slideWrapper.querySelectorAll('.wp-block-image a');
      

      
      // for each carousel slide in the slider, add swiper-slide
      for (let i = 0; i < carouselSlides.length; i++) {
        carouselSlides[i].classList.add(`swiper-slide`);

        if ( carouselSlides[i].classList.contains('wp-block-image') ) {
          let slideLink = carouselSlides[i].querySelector('a');
          if ( slideLink ) {
            slideLink.setAttribute('data-lbwps-gid', `carousel-${index}`);
          } 
        };
      };

      // for each slide that is a wp-block-image, add a data attribute for the lightbox plugin
      /*for (let i = 0; i < carouselImageSlides.length; i++) {
        if (carouselImageSlides[i].parent.classList.contains('wp-block-image') && carouselImageSlides[i].parent.classList.contains('swiper-slide')) {
          carouselImageSlides[i].setAttribute('data-lbwps-gid', `carousel-${index}`);
        };
      };*/

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