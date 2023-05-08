class WsuBackToTop {

    constructor( atts = {} ) {

        this.init();
        
    }

    init() {

        //this.initialize();

        this.bindEvents();

    }

    initialize() {
        /*let foundBoxes = document.querySelectorAll( this.boxSelector + ':not(.wsu-initialized)' );

        if ( 0 < foundBoxes.length ) {

            foundBoxes.forEach( ( box ) => {

                this.boxes.push( box );
    
                box.classList.add('wsu-initialized');
    
            } );

        }*/
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.setTopClass() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.setTopClass() }, false);

            this.setTopClass( false );

        } catch (error) {
            console.error(error);
        }
		
	}

    setTopClass() {

        if ( document.documentElement.scrollTop > 150 ) {

            document.body.classList.add('wsu-scroll--is-scrolled');

        } else {

            document.body.classList.remove('wsu-scroll--is-scrolled');

        }

    }

}

export default WsuBackToTop; 