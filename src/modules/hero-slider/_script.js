//load swiper css through js
//populate slider nav text based on slide title -- use data attribute

//??
//import { ariaUpdate } from "../../../_assets/js/ariaUpdate";
import Swiper, { Navigation, Pagination } from 'swiper';
//import 'swiper/swiper-bundle.css';

Swiper.use( [ Navigation, Pagination ] );

const initSwiper = () => {
  let slider = document.getElementsByClassName('swiper');

  if ( slider.length > 0 ) {
    //let sliderTitle = document.getElementsByClassName('wsu-title');

    const swiper = new Swiper('.swiper', {
      loop: true,
      effect: 'fade',
      slidesPerView: 1,
      /*scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },*/
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + ( (index + 1) ) + "</span>"; //demo
        },
      }
    });
  }
}

export default () => {
	initSwiper();
}
