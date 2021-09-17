import updateAriaElement from "../../../_assets/js/updateAriaElement";

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
            let navElement = event.target.parentElement;

            // Toggle Action
            if ( eventElement.classList.contains( 'wsu-menu--toggle' ) ) {

                if ( this.shouldClose( navElement ) ) {

                    this.close( navElement );

                    updateAriaElement( 'Close', eventElement );

                } else {

                    this.open( navElement );

                    updateAriaElement( 'Open', eventElement );

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

        let subMenu = navElement.lastElementChild;

        subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

        navElement.setAttribute( 'aria-expanded', true );

        // Remove max height after animation
        this.timer = setTimeout(
            function() {
                subMenu.style.maxHeight = '';
            }, 
            500
        );

    }

    close( navElement ) {

        let subMenu = navElement.lastElementChild;

        subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

        //subMenu.style.maxHeight = 0;

        /* If this happens too quickly it doesn't work? */
        setTimeout(
            function() {
                navElement.setAttribute( 'aria-expanded', false );
            }, 
            15
        );


        // Remove max height after animation
        this.timer = setTimeout(
            function() {
                subMenu.style.maxHeight = '';
            }, 
            500
        );

    }

    shouldClose( navElement ) {

        return ( navElement.hasAttribute( 'aria-expanded') && 'true' == navElement.getAttribute( 'aria-expanded') ) || false;

    }


}

export default WsuMenu; 