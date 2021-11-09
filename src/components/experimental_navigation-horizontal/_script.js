import { ariaUpdate } from "../../../_assets/js/ariaUpdate"; 

class WsuNavigationSiteHorizontal {

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
            if ( eventElement.classList.contains( 'wsu-navigation-site-horizontal--toggle' ) ) {

                if ( this.shouldClose() ) {

                    this.close( eventElement );

                    ariaUpdate( 'Close', '.wsu-navigation-site-horizontal--toggle' );

                } else {

                    this.open( eventElement );

                    ariaUpdate( 'Open', '.wsu-navigation-site-horizontal--toggle' );

                }

            }

            // Open Action
            if ( eventElement.classList.contains('wsu-navigation-site-horizontal--open' ) ) {

                this.open( eventElement );

            }

            // Close Action
            if ( eventElement.classList.contains('wsu-navigation-site-horizontal--close' ) ) {

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

    }

    open( eventElement = false ) {

        let nav = document.getElementsByClassName('wsu-navigation-site-horizontal')[0] || false;

        console.log( nav );

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', true );

        document.body.classList.add('wsu-navigation-site-horizontal--is-open');
        document.body.classList.remove('wsu-navigation-site-horizontal--is-closed');

        ariaUpdate( 'Open', '.wsu-navigation-site-horizontal--toggle' );

    }

    close( eventElement = false ) {

        let nav = document.getElementsByClassName('wsu-navigation-site-horizontal')[0] || false;

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', false ); 

        document.body.classList.remove('wsu-navigation-site-horizontal--is-open');
        document.body.classList.add('wsu-navigation-site-horizontal--is-closed');

        ariaUpdate( 'Close', '.wsu-navigation-site-horizontal--toggle' ); 

    }

    shouldClose() {

        let nav = document.getElementsByClassName('wsu-navigation-horizontal')[0] || false;

        if ( ! nav ) false;

        return ( document.body.classList.contains('wsu-navigation-site-horizontal--is-open') ) || false;

    }

}

export default WsuNavigationSiteHorizontal; 