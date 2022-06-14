import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const initSwiper = () => {
  const sliderName = ".wsu-hero-slider";
  let heroSliders = document.querySelectorAll(sliderName);

  if (heroSliders.length > 0) {
    heroSliders.forEach((slider, index) => {
      const autoplay = slider.dataset.autoplay === "true" ? true : false;

      let heroSlider = slider.querySelector(".swiper-wrapper");
      let slides = heroSlider.querySelectorAll(".wsu-hero");

      let slideTitles = slider.querySelectorAll(".swiper-slide .wsu-title");
      let pauseButton = slider.querySelector(".wsu-hero-slider__pause-btn");

      if (slides.length > 1) {
        slider.classList.add(`wsu-hero-slider-${index}`);

        const swiperSettings = {
          effect: "fade",
          slidesPerView: 1,
          navigation: {
            nextEl: ".wsu-i-arrow-right-carrot",
            prevEl: ".wsu-i-arrow-left-carrot",
          },
          pagination: {
            el: ".wsu-hero-slider__pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<button class="' +
                className +
                '">' +
                slideTitles[index].textContent +
                "</button>"
              );
            },
          },
        };

        if (autoplay) {
          swiperSettings.autoplay = {
            delay: slider.dataset.autoplayDelay || "5000",
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          };
        }

        const swiper = new Swiper(`.wsu-hero-slider-${index}`, swiperSettings);

        if (autoplay) {
          pauseButton.addEventListener("click", function () {
            if (pauseButton.classList.contains("play")) {
              pauseButton.classList.remove("play");
              pauseButton.classList.add("paused");
              swiper.autoplay.stop();
            } else {
              pauseButton.classList.remove("paused");
              pauseButton.classList.add("play");
              swiper.autoplay.start();
            }
          });
        }
      }
    });
  }
};

initSwiper();
