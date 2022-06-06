

class WsuStickyBox {

    constructor( atts = {} ) {

        this.boxes = [];

        this.boxSelector = '.wsu-sticky-box';

        this.init();
        
    }

    init() {

        this.initialize();

        this.bindEvents();

        this.stickBoxes();

    }

    initialize() {
        let foundBoxes = document.querySelectorAll( this.boxSelector + ':not(.wsu-initialized)' );

        if ( 0 < foundBoxes.length ) {

            foundBoxes.forEach( ( box ) => {

                this.boxes.push( box );
    
                box.classList.add('wsu-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        window.addEventListener( 
            'scroll', ( event ) => { this.stickBoxes() }, false);

        window.addEventListener( 
            'resize', ( event ) => { this.stickBoxes() }, false);
		
	}

    stickBoxes() {

        this.boxes.forEach( element => {

            console.log( element.getBoundingClientRect().top );

            let child = element.firstElementChild;

            if ( 1 > element.getBoundingClientRect().top ) {

                let width = element.offsetWidth;

                element.classList.add('wsu-sticky-box--stuck');

                child.style.width = width + 'px';

            } else {

                element.classList.remove('wsu-sticky-box--stuck');

                child.style.width = '';

            }
            
        });

    }

}

export default WsuStickyBox; 