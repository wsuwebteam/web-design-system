import hasReducedMotion from '../../../_assets/js/partials/hasReducedMotion';

class WsuBackgroundSlider {

	constructor() {

			this.sliders = [];

			this.init();
			
	}

	init() {

		let bgSliders = document.querySelectorAll(".wsu-background-slider");

		if ( bgSliders.length ) {

			bgSliders.forEach( slider => {

				if ( ! slider.classList.contains('wsu-initialized') ) {

					this.sliders.push( new WsuBackgroundSliderInstance( slider ) );

				}

			}
			);

		}

			//this.bindEvents();

	}

	/*bindEvents() {
	document.addEventListener(
		'click', 
		this.clickEvents.bind( this ),
		false
	);

			document.addEventListener(
		'keydown', 
		this.keyDownEvents.bind( this ),
		false
	);
}

	clickEvents( event ) {
	
	try {

					let eventElement = event.target;

					// Toggle Action
					if ( eventElement.classList.contains( 'wsu-navigation-site-vertical--toggle' ) ) {

							if ( this.shouldClose() ) {

									this.close( eventElement );

									ariaUpdate( 'Close', '.wsu-navigation-site-vertical--toggle' );

							} else {

									this.open( eventElement );

									ariaUpdate( 'Open', '.wsu-navigation-site-vertical--toggle' );

							}

					}

					// Open Action
					if ( eventElement.classList.contains('wsu-navigation-site-vertical--open' ) ) {

							this.open( eventElement );

					}

					// Close Action
					if ( eventElement.classList.contains('wsu-navigation-site-vertical--close' ) ) {

							this.close( eventElement );

					}
		
	} catch (error) {
		console.error(error);
	}
	
}


	keyDownEvents( event ) {

			try {

					if ( keyDownEvent( { domEvent: event, key:'Escape', inClass: this.wrapperClass } ) ) {

							toggleAriaExpandedClose( { 
									wrapper:          elementGet( { elementClass: this.wrapperClass } ),
									actionPrefix:     this.actionPrefix,
									ariaLabelElement: elementGet( { elementClass: 'wsu-navigation-site--toggle' } ),  
							} );

					}
				 
	} catch (error) {
		console.error(error);
	}

	}*/


}


class WsuBackgroundSliderInstance { 

	constructor( instance ) {

		this.instance = instance;

		this.slides = [];

		this.activeSlides = {
			active: instance.dataset.active ?? 0,
		}

		this.delay = instance.dataset.delay ?? 5000;

		this.timer = false;

		this.init(); 
		
	}

	init() {

		this.slides = this.instance.querySelectorAll(".wsu-background-slider__slide");
		this.instance.classList.add('wsu-initialized');
		this.bindEvents();

		this.timer = setTimeout( () => { this.doSlideshow(1) }, this.delay );

	}

	bindEvents() {
		this.instance.addEventListener(
			'click', 
			this.clickEvents.bind( this ),
			false
		);
	
	}

	clickEvents( event ) {
	
		try {
	
			let eventElement = event.target;

			// Toggle Action
			if ( eventElement.classList.contains( 'wsu-background-slider__pause-button' ) ) {

				if ( eventElement.getAttribute('aria-label').includes('ause') ) {

					clearTimeout( this.timer );

				} else {

					this.doSlideshow(0);
					eventElement.setAttribute('aria-label').includes('Pause');

				}
			}
	
		} catch (error) {
			console.error(error);
		}
		
	}


	setActiveSlides( increment = 0 ) {

		this.activeSlides.active = this.getSlideIndex( this.activeSlides.active, increment );
		this.activeSlides.next = this.getSlideIndex( this.activeSlides.active, 1 );
		this.activeSlides.previous = this.getSlideIndex( this.activeSlides.active, -1 );

	}

	doSlideshow( increment = 0 ) {

		console.log( hasReducedMotion() );

		if ( ! hasReducedMotion() ) {

			this.setActiveSlides( increment );

			this.slides.forEach( ( slide, index ) => {

				if ( index !== this.activeSlides.active || index !== this.activeSlides.next || this.activeSlides.previous ) {
					slide.classList.remove('wsu-slide--active', 'wsu-slide--next', 'wsu-slide--previous');
				}
			});

			this.slides[ this.activeSlides.active].classList.add('wsu-slide--active');
			this.slides[ this.activeSlides.next].classList.add('wsu-slide--next');
			this.slides[ this.activeSlides.previous].classList.add('wsu-slide--previous');

			this.timer = setTimeout( () => { this.doSlideshow(1) }, this.delay );

		}

		
	}

	getSlideIndex( index, increment ) {

		let slideIndex = index + increment;

		if ( slideIndex < 0 ) {

			return ( this.slides.length - 1 );

		} else if ( slideIndex >= this.slides.length ) {

			return ( 0 );

		} else {

			return slideIndex;
		}

	}

}

export default WsuBackgroundSlider; 