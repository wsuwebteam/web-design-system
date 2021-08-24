import { elementGet, elementGetClosest } from "../../../_assets/js/partials/element";
import { toggleAria, toggleShould, toggleAriaExpandedOpen, toggleAriaExpandedClose } from "../../../_assets/js/partials/toggle";
import {wsuSlideDown} from '../../../_assets/js/partials/utilities';

class WsuAccordion {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'wsu-accordion';
        this.closeClass       = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'wsu-accordion--close';
        this.openClass        = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'wsu-accordion--open';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'wsu-accordion__title';
        this.contentClass     = ( atts.hasOwnProperty( 'contentClass') ) ? atts.contentClass : 'wsu-accordion__content';
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'wsu-accordion';
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

	}


    clickEvents( event ) {
		
		try {

            let eventElement = event.target;

            // check Close Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGetClosest( eventElement, this.wrapperClass );
                let element = elementGet ( { parent: wrapper, elementClass: this.contentClass } )

                if ( wrapper ) {

                    wsuSlideDown(
                        {
                            element: element,
                            ariaElement: wrapper
                        }
                    )
                }

            }
			
		} catch (error) {
		  console.error(error);
		}
		
	}



}

export default WsuAccordion; 