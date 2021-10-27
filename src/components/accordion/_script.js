import {
    wsuAriaExpanded,
    wsuAriaIsExpanded,
    wsuClassAdd,
    wsuClassRemove,
    wsuAnimateSlideDown,
    wsuAnimateSlideUp,
} from '../../../_assets/js/partials/wsuPartials';

class WsuAccordion {

    constructor( atts = {} ) {

        this.timer = false;
        this.openClass = 'wsu-accordion--open';

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
		document.addEventListener(
			'click', 
			this.clickEvents.bind( this ),
			false
		);

        /*document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);*/
	}

    clickEvents( event ) { 
		
		try {

            let eventElement = event.target;

            // Toggle Action
            if ( eventElement.classList.contains( 'wsu-accordion--toggle' ) ) {

                let accordionElement = eventElement.closest('.wsu-accordion');
                let accordionContent = accordionElement.querySelector('.wsu-accordion__content');

                if ( wsuAriaIsExpanded( eventElement ) ) {

                    wsuAriaExpanded( eventElement, false );

                    wsuAnimateSlideUp( accordionContent, {} );

                    wsuClassRemove( accordionElement, this.openClass );

                } else { 

                    wsuAriaExpanded( eventElement, true );

                    wsuAnimateSlideDown( accordionContent, {} );

                    wsuClassAdd( accordionElement, this.openClass );

                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}

}

export default WsuAccordion; 