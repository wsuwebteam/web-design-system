import { elementGet, elementGetClosest } from "../../../_assets/js/partials/element";
import { toggleShould } from "../../../_assets/js/partials/toggle";
import {wsuSlideDown} from '../../../_assets/js/partials/utilities';

class WsuCollapsable {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'wsu-collapsable';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'wsu-collapsable--toggle';
        this.contentClass     = ( atts.hasOwnProperty( 'contentClass') ) ? atts.contentClass : 'wsu-collapsable--content';
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'wsu-collapsable';
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

export default WsuCollapsable;