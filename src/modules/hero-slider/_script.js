import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

Swiper.use( [ Navigation, Pagination, EffectFade, Autoplay ] );

const initSwiper = () => {
  let slider = document.getElementsByClassName('swiper');

  if ( slider.length > 0 ) {
    let slideTitles = document.querySelectorAll('.swiper-slide .wsu-title');
    let pauseButton = document.getElementById('slider-pause');

    const swiper = new Swiper('.swiper', {
      effect: 'fade',
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".wsu-i-arrow-right-carrot",
        prevEl: ".wsu-i-arrow-left-carrot",
      },
      pagination: {
        el: ".wsu-hero-slider__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<button class="' + className + '">' + slideTitles[index].innerText + "</button>";
        },
      },
    });

    pauseButton.addEventListener('click', function() {
      if ( pauseButton.classList.contains('play') ) {
        pauseButton.classList.remove('play');
        pauseButton.classList.add('paused');
        swiper.autoplay.stop();
      } else {
        pauseButton.classList.remove('paused');
        pauseButton.classList.add('play');
        swiper.autoplay.start();
      }
    });
  }
}

export default () => {
	initSwiper();
}
