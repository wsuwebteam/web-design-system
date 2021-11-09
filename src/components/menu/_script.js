import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class WsuMenu {

    constructor( atts = {} ) {

        this.timer = false;

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
            
            // Toggle Action
            if ( eventElement.classList.contains( 'wsu-menu--toggle' ) ) {

                let navElement = event.target.parentElement;

                if ( this.shouldClose( navElement ) ) {

                    this.close( navElement );

                    updateAriaElement( 'Close', eventElement );

                } else {

                    this.open( navElement );

                    updateAriaElement( 'Open', eventElement );

                }

            }

            if ( eventElement.classList.contains( 'wsu-menu--submenu-close' ) ) {

                let navElement = eventElement.parentElement.parentElement.closest('li');

                if ( this.shouldClose( navElement ) ) {

                    this.close( navElement );

                    updateAriaElement( 'Close', eventElement );

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

    open( navElement ) {

        this.closeSiblings( navElement );

        let subMenu = navElement.lastElementChild;

        subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

        subMenu.classList.add( 'wsu-animate--slide-down' );

        navElement.setAttribute( 'aria-expanded', true );

        // Remove max height after animation
        this.timer = setTimeout(
            function() {
                subMenu.style.maxHeight = '';
                subMenu.classList.remove( 'wsu-animate--slide-down' );
            }, 
            500
        );

    }

    close( navElement ) {

        let subMenu = navElement.lastElementChild;

        subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

        /* If this happens too quickly it doesn't work? */
        setTimeout(
            function() {
                //navElement.setAttribute( 'aria-expanded', false );
                subMenu.classList.add( 'wsu-animate--slide-up' );

                navElement.setAttribute( 'aria-expanded', false );
            }, 
            15
        );


        // Remove max height after animation
        this.timer = setTimeout(
            function() {
                subMenu.style.maxHeight = '';
                subMenu.classList.remove( 'wsu-animate--slide-up' );
            }, 
            500
        );

    }

    closeSiblings( navElement ) {

        let siblings = elementGetSiblings( navElement );

        siblings.forEach( element => {

            if ( this.shouldClose( element ) ) {
                this.close( element );
            }
        }); 

    }

    shouldClose( navElement ) {

        return ( navElement.hasAttribute( 'aria-expanded') && 'true' == navElement.getAttribute( 'aria-expanded') ) || false;

    }


}

export default WsuMenu; 