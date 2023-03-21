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


    // // Gather all focusable elements in a list
    // let carouselQuery = document.querySelector(".wsu-card-carousel");
    // const KEYCODE_TAB = 9;
    // var activeSlide = document.querySelector(".swiper-slide-active .wsu-news-card__content .wsu-article-title a");
    // var lastSlideInFrame = document.querySelector(".swiper-slide-next + .swiper-slide .wsu-news-card__content .wsu-article-title a");
    // var prevButton = document.querySelector(".wsu-card-carousel__button-prev");
    // var nextButton = document.querySelector(".wsu-card-carousel__button-next");

    // carouselQuery.addEventListener("keydown", function (e) {
    //   var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

    //   // Define behaviour for Tab or Shift+Tab
    //   if (isTabPressed) {
    //     console.log("tab pressed");
    //       // Shift+Tab
    //       if (e.shiftKey) {
    //           if (document.activeElement === activeSlide) {

    //             // NEED TO RESET FOCUS ON THE ELEMENT JUST BEFORE RIGHT ARROW.
    //               // prevButton.focus();
    //               // console.log("shift tab pressed");
    //               // e.preventDefault();
    //           }
    //       }

    //       // Tab
    //       else {
    //           if (document.activeElement === lastSlideInFrame) {
    //               nextButton.focus();
    //               console.log("tabbed on last element");
    //               e.preventDefault();
    //           }
    //       }
    //   }
    // });

}
initSwiper(); 