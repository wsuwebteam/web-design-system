//load swiper css through js
//populate slider nav text based on slide title -- use data attribute

//??
//import { ariaUpdate } from "../../../_assets/js/ariaUpdate";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

Swiper.use( [ Navigation, Pagination ] );

const initSwiper = () => {
	let heroSlider = document.getElementsByClassName('');
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
