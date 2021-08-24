import { elementGet } from "../../../_assets/js/partials/element";
import { toggleAria, toggleShould, toggleAriaExpandedOpen, toggleAriaExpandedClose } from "../../../_assets/js/partials/toggle";
import { keyDownEvent } from '../../../_assets/js/partials/events';

class WsunavigationSite {

    constructor( atts = {} ) {

        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : 'wsu-navigation-site';
        this.closeClass       = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'wsu-navigation-site--close';
        this.openClass        = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'wsu-navigation-site--open';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'wsu-navigation-site--toggle';
        this.animatingClass   = ( atts.hasOwnProperty( 'animatingClass') ) ? atts.animatingClass : 'wsu-animating';
        this.animationTiming  = ( atts.hasOwnProperty( 'animationTiming') ) ? atts.animationTiming : 300;
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : 'wsu-navigation-site';
        this.timer            = false;

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

        document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);
	}

    clickEvents( event ) {
		
		try {

            let eventElement = event.target;

            // check Close Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.closeClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedClose( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Open Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.openClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedOpen( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Toggle Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAria( { 
                        wrapper: wrapper,
                        toggleByClass: this.actionPrefix + '--openned',
                        actionPrefix: this.actionPrefix,
                        ariaLabelElement: eventElement,
                    } );

                }

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

    }


}

export default WsunavigationSite; 
