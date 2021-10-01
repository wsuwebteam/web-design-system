/*import WsuToggleMenu from "../../../_assets/js/wsuToggleMenu";

const wsuMenuToggle = new WsuToggleMenu( { clickClass: 'wsu-menu-toggle--toggle', toggleHeight: true } );

export default wsuMenuToggle;*/

import { elementGet } from "../../../_assets/js/partials/element";
import { toggleAria, toggleShould, toggleAriaExpandedOpen, toggleAriaExpandedClose } from "../../../_assets/js/partials/toggle";
import { keyDownEvent } from '../../../_assets/js/partials/events';

class WsuMenuToggle {

    constructor( atts = {} ) {

        this.baseClass        = ( atts.hasOwnProperty( 'baseClass') ) ? atts.baseClass : 'wsu-menu-toggle';
        this.wrapperClass     = ( atts.hasOwnProperty( 'wrapperClass') ) ? atts.wrapperClass : this.baseClass;
        this.closeClass       = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : this.baseClass + '--close';
        this.openClass        = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : this.baseClass + '--open';
        this.toggleClass      = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : this.baseClass + '--toggle';
        this.animatingClass   = ( atts.hasOwnProperty( 'animatingClass') ) ? atts.animatingClass : 'wsu-animating';
        this.animationTiming  = ( atts.hasOwnProperty( 'animationTiming') ) ? atts.animationTiming : 300;
        this.actionPrefix     = ( atts.hasOwnProperty( 'actionPrefix') ) ? atts.actionPrefix : this.baseClass;
        this.toggleHeight     = ( atts.hasOwnProperty( 'toggleHeight') ) ? atts.toggleHeight : true;
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

	}

    clickEvents( event ) {
		
		try {

            let eventElement = event.target;

            let toggleShouldClick = toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true } );
            let toggleShouldEmpty = toggleShould( { eventElement: eventElement, checkEmptyLink: true }) && toggleShould( { eventElement: eventElement, checkSibling: true, clickClass: this.toggleClass } );

            console.log( toggleShouldClick );
            console.log( toggleShouldEmpty );

            if ( toggleShouldClick || toggleShouldEmpty ) {

                event.preventDefault();

                let wrapper      = event.target.parentElement;

                if ( wrapper ) {

                    let childElement =  wrapper.getElementsByTagName('ul')[0];

                    toggleAria( { 
                        wrapper: wrapper,
                        toggleByClass: this.actionPrefix + '--openned',
                        childElement: childElement,
                        actionPrefix: this.actionPrefix,
                        animateHeight: true,
                        ariaLabelElement: eventElement,
                    } );

                }

            }

            if ( toggleShould( { eventElement: eventElement, checkEmptyLink: true }) && toggleShould( { eventElement: eventElement, checkSibling: true, clickClass: this.toggleClass }) ) {

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


    /*keyDownEvents( event ) {

        try {

            if ( keyDownEvent( { domEvent: event, key:'Escape', inClass: this.wrapperClass } ) ) {

                let menu = eventElement.closest( 'ul' );

                if ( menu ) {

                    let wrapper = menu.parentElement;
                    let button = wrapper.querySelector('button');

                    if ( wrapper ) {

                        toggleAria( { 
                            wrapper: wrapper,
                            childElement: menu,
                            actionPrefix: this.actionPrefix,
                            animateHeight: true,
                            ariaLabelElement: button,
                        } );
                        
                    }
                }

            }
           
		} catch (error) {
		  console.error(error);
		}

    }*/

}

export default WsuMenuToggle;


