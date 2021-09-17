import updateAria from "../../../_assets/js/updateAria"; 

class WsuNavigationSiteVertical {

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
            if ( eventElement.classList.contains( 'wsu-navigation-site-vertical--toggle' ) ) {

                if ( this.shouldClose() ) {

                    this.close( eventElement );

                    updateAria( 'Close', '.wsu-navigation-site-vertical--toggle' );

                } else {

                    this.open( eventElement );

                    updateAria( 'Open', '.wsu-navigation-site-vertical--toggle' );

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

    }

    open( eventElement = false ) {

        let nav = document.getElementsByClassName('wsu-navigation-site-vertical')[0] || false;

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', true );

        document.body.classList.add('wsu-navigation-site-vertical--is-open');
        document.body.classList.remove('wsu-navigation-site-vertical--is-closed');

        updateAria( 'Open', '.wsu-navigation-site-vertical--toggle' );

    }

    close( eventElement = false ) {

        let nav = document.getElementsByClassName('wsu-navigation-site-vertical')[0] || false;

        if ( ! nav ) return;

        nav.setAttribute( 'aria-expanded', false );

        document.body.classList.remove('wsu-navigation-site-vertical--is-open');
        document.body.classList.add('wsu-navigation-site-vertical--is-closed');

        updateAria( 'Close', '.wsu-navigation-site-vertical--toggle' );

    }

    shouldClose() {

        let nav = document.getElementsByClassName('.wsu-navigation-site-vertical')[0] || false;

        if ( ! nav ) false;

        return ( document.body.classList.contains('wsu-navigation-site-vertical--is-open') ) || false;

    }

}

export default WsuNavigationSiteVertical; 