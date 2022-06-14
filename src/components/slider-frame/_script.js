import Swiper, { Autoplay, EffectFade } from "swiper";

Swiper.use([Autoplay, EffectFade]);

const initSliderFrame = () => {
  const sliderFrameSelector = ".wsu-slider-frame";
  const sliderFrames = document.querySelectorAll(sliderFrameSelector);

  if (sliderFrames.length > 0) {
    sliderFrames.forEach((sliderFrame, index) => {
      const swiperSettings = {
        effect: sliderFrame.dataset.effect || "slide",
        loop: true,
        autoplay: {
          delay: sliderFrame.dataset.delay || 5000,
        },
      };

      if (sliderFrame.dataset.effect.toLowerCase() === "fade") {
        swiperSettings.fadeEffect = {
          crossFade: true,
        };
        swiperSettings.speed = 1000;
      }

      sliderFrame.classList.add(`wsu-slider-frame-${index}`);
      const instance = new Swiper(`.wsu-slider-frame-${index}`, swiperSettings);
    });

    handlePauseButtonClicks();
  }
};

const handlePauseButtonClicks = () => {
  document.addEventListener("click", function (event) {
    const target = event.target;
    const classList = target.classList;

    if (classList.contains("wsu-slider-frame__pause-button")) {
      if (classList.contains("wsu-button-pause-background--active")) {
        target.parentElement.swiper?.autoplay.start();
      } else {
        target.parentElement.swiper?.autoplay.stop();
      }
    }
  });
};

initSliderFrame();
