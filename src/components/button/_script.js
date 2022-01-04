class WsuButton {

    constructor( atts = {} ) {

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
		document.addEventListener(
			'click', 
			( event ) => { this.clickEvents( event) },
			false
		);

	}

    

    clickEvents( event ) {

        try {

            if ( event.target.classList.contains( 'wsu-button-pause-background' ) ) {

                this.toggleActiveButton( event.target, 'wsu-button-pause-background', ['Pause','Play'] )
            }
            
		} catch (error) {
		  console.error(error);
		}

    }


    toggleActiveButton( button, buttonClass, labels ) {

        let activeClass = buttonClass + '--active';

        let label = button.hasAttribute('aria-label') ? button.getAttribute('aria-label') : false;

        if ( button.classList.contains( activeClass ) ) {

            button.classList.remove( activeClass );

            if ( label ) {
                label = label.replace( labels[1], labels[0] );

                button.setAttribute( 'aria-label', label );
            }    

        } else {

            button.classList.add( activeClass );

            if ( label ) {

                label = label.replace( labels[0], labels[1] );

                button.setAttribute( 'aria-label', label );
            }   

        }


    }


}

export default WsuButton;  