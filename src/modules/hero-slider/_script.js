import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use( [ Navigation, Pagination, EffectFade ] );

const initSwiper = () => {
  let slider = document.getElementsByClassName('swiper');

  if ( slider.length > 0 ) {
    let slideTitles = document.querySelectorAll('.swiper-slide .wsu-title');

    const swiper = new Swiper('.swiper', {
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
          return '<span class="' + className + '">' + slideTitles[index].innerText + "</span>";
        },
      }
    });
  }
}

export default () => {
	initSwiper();
}
