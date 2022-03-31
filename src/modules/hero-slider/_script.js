//load swiper css through js
//populate slider nav text based on slide title -- use data attribute

//??
//import { ariaUpdate } from "../../../_assets/js/ariaUpdate";
import Swiper, { Navigation, Scrollbar } from 'swiper';
//import 'swiper/swiper-bundle.css';

Swiper.use( [ Navigation, Scrollbar ] );

const initSwiper = () => {
  console.log('initSwiper');
  let slider = document.getElementsByClassName('swiper');

  if ( slider.length > 0 ) {
    console.log('inside if');
    const swiper = new Swiper('.swiper', {
      loop: true,
      direction: 'horizontal',
      slidesPerView: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
      },
      effect: 'fade',
    });
  }
}

/*class WsuHeroSlider {
  constructor( atts = {} ) {
    this.timer = false;

    this.init();
  }

  init() {

  }
}*/

export default () => {
	initSwiper();
}
