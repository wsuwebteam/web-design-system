import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

Swiper.use( [ Navigation, Pagination, Autoplay, EffectFade ] );

const initSwiper = () => {
  const sliderName = '.swiper';
  let heroSliders = document.querySelectorAll( sliderName );

  if ( heroSliders.length > 0 ) {
    heroSliders.forEach( ( slider, index ) => {
      let heroSlider = slider.querySelector( '.swiper-wrapper' );
      let slides = heroSlider.querySelectorAll( '.wsu-hero' );

      let slideTitles = document.querySelectorAll( '.swiper-slide .wsu-title' );
      let pauseButton = document.getElementById( 'slider-pause' );

      if ( slides.length > 1 ) {
        let autoplayDelay = '';
        slider.classList.add( `swiper-${index}` );

        if ( slides[`${index}`].classList.contains( 'swiper-autoplay' ) ) {
          autoplayDelay = slides[0].getAttribute( 'data-swiper-autoplay' );

          const swiper = new Swiper( `.swiper-${index}` , {
            effect: 'fade',
            slidesPerView: 1,
            autoplay: {
              delay: autoplayDelay,
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

        } else {
          const swiper = new Swiper( `.swiper-${index}` , {
            effect: 'fade',
            slidesPerView: 1,
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
        }
      }
    });
  }
}

export default () => {
	initSwiper();
}
