class WsuAnchorMenu {

    constructor( atts = {} ) {

        this.elements = [];

        this.selector = '.wsu-anchor-menu';

        this.buffer = 0.60;

        this.init();
        
    }

    init() {

        this.initElements();

        this.bindEvents();

    }

    initElements() {
        
        let found = document.querySelectorAll( this.selector + ':not(.wsu-initialized)' );

        if ( 0 < found.length ) {

            found.forEach( ( element ) => {

                this.elements.push( element );
    
                element.classList.add('wsu-initialized');
    
            } );

        }
        
    }

    bindEvents() {

        try {

            window.addEventListener( 
                'scroll', ( event ) => { this.updateMenus() }, false);

            window.addEventListener( 
                'resize', ( event ) => { this.updateMenus() }, false);

            this.updateMenus()

        } catch (error) {
            console.error(error);
        }
		
	}

    isActive( anchor ) {

        let element = document.querySelector( anchor );

        if ( element ) {

            let wHeight = ( window.innerHeight * this.buffer );

            let elHeight = element.getBoundingClientRect().top;

            return  ( elHeight < wHeight ) ? true : false;

        }

    }

    updateMenus() {

        this.elements.forEach( element => {

            let children = Array.from( element.querySelectorAll('li') );

            if ( children.length ) {

                let activeChild = false;

                if ( document.documentElement.scrollTop > 50 ) {

                    for (let i = children.length - 1; i >= 0; i-- ) {

                        const child = children[i];

                        let link = child.querySelector('a');

                        if ( link && link.hasAttribute('href') ) {
    
                            let anchor = link.getAttribute('href');
    
                            if ( this.isActive( anchor ) && ! activeChild ) {
    
                                activeChild = child;
    
                            } else {
    
                                child.classList.remove('wsu-active');
    
                            }
    
                        }
                        
                    }

                } else {

                    activeChild = children[0].classList.add('wsu-active');

                }

                if ( activeChild ) {

                    activeChild.classList.add('wsu-active');

                } else {

                    children[0].classList.add('wsu-active');

                }

            }

            

            

            


            

            //console.log( element.getBoundingClientRect().top );

            /*let child = element.firstElementChild;

            if ( 1 > element.getBoundingClientRect().top ) {

                let width = element.offsetWidth;

                element.classList.add('wsu-sticky-box--stuck');

                child.style.width = width + 'px';

            } else {

                element.classList.remove('wsu-sticky-box--stuck');

                child.style.width = '';

            }*/
            
        });

    }

}

export default WsuAnchorMenu; 