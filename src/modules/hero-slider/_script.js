//load swiper css through js

//import { ariaUpdate } from "../../../_assets/js/ariaUpdate";
import Swiper, { Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';
//import 'swiper/swiper-bundle.css';

Swiper.use( [ Navigation, Pagination, Scrollbar, EffectFade ] );

const initSwiper = () => {
  let slider = document.getElementsByClassName('swiper');

  if ( slider.length > 0 ) {
    let slideTitles = document.querySelectorAll('.swiper-slide .wsu-title');
    console.log(slideTitles);

    const swiper = new Swiper('.swiper', {
      //loop: true,
      effect: 'fade',
      slidesPerView: 1,
      scrollbar: {
        el: ".swiper-scrollbar", //doesn't work with loop
      },
      navigation: {
        nextEl: ".wsu-i-arrow-right-carrot",
        prevEl: ".wsu-i-arrow-left-carrot",
      },
      pagination: {
        el: ".wsu-hero-slider__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + ( slideTitles[index].innerText )  + "</span>";
        },
      }
    });
  }
}

export default () => {
	initSwiper();
}
