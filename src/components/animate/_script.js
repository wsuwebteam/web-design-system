class WsuAnimate {

    constructor( atts = {} ) {

        this.animateClass = 'wsu-animate';

        this.animateItems = [];

        this.animateRatio = { timeEarly: 0.95, timeDefault: 0.85, timeLate: 0.70 };

        this.animateEarlyClass = 'wsu-animate--do-early';
        this.animateDefaultClass = 'wsu-animate--do-default';
        this.animateLateClass = 'wsu-animate--do-late';

        this.init();
        
    }

    init() {

        this.bindEvents();

        this.initialize();

        this.animate();

    }

    initialize() {
        let foundItems = document.querySelectorAll( `.${this.animateClass}:not(.wsu-initialized)` );

        if ( 0 < foundItems.length ) {

            foundItems.forEach( ( item ) => {

                this.animateItems.push( item );
    
                item.classList.add('wsu-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.animate() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.animate() }, false);

        } catch (error) {
            console.error(error);
        }
		
	}

    animate() {

        let height = window.innerHeight;

        let timeEarly = ( height * this.animateRatio.timeEarly );
        let timeDefault = ( height * this.animateRatio.timeDefault );
        let timeLate = ( height * this.animateRatio.timeLate);
    
        this.animateItems.forEach( element => {

            let elementPosition = ( element.getBoundingClientRect().top + this.getAdjustHeight( element ) );

            if ( timeEarly > elementPosition && ! element.classList.contains( this.animateEarlyClass ) ) {

                element.classList.add( this.animateEarlyClass );

            }

            if ( timeDefault > elementPosition && ! element.classList.contains( this.animateDefaultClass ) ) {

                element.classList.add( this.animateDefaultClass );

            }

            if ( timeLate > elementPosition && ! element.classList.contains( this.animateLateClass ) ) {

                element.classList.add( this.animateLateClass );

            }
            
        });

    }

    getAdjustHeight( element ) {

        if ( element.classList.contains( 'wsu-animate--style-fade-bottom' ) || element.classList.contains( 'wsu-animate--style-angle-left' ) || element.classList.contains( 'wsu-animate--style-angle-right' )  ) {

            return -300;

        } else {

            return 0;
        }

    }


}

export default WsuAnimate; 