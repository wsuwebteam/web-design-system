class WsuDropdown {

    constructor( atts ) {
        this.clickClass      = ( atts.hasOwnProperty( 'clickClass') ) ? atts.clickClass : false;
        this.animatingClass  = ( atts.hasOwnProperty( 'animatingClass') ) ? atts.animatingClass : 'wsu-animating';
        this.animationTiming = ( atts.hasOwnProperty( 'animationTiming') ) ? atts.animationTiming : 150;
        this.timer           = false;

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

            let parent  = event.target.parentElement;

			if ( parent.classList.contains( this.clickClass ) && ! parent.classList.contains( this.animatingClass ) ) {

                event.preventDefault();

				this.toggleDropdown( event.target, parent );

			}
			
		} catch (error) {
		  console.error(error);
		}
		
	}


    toggleDropdown( clickElement, parent ) {

        let submenu = parent.getElementsByTagName('ul')[0];

        if ( parent.getAttribute('aria-expanded') && 'false' != parent.getAttribute('aria-expanded') ) {
			
			this.closeDropdown( clickElement, parent, submenu );

		} else {

            this.openDropdown( clickElement, parent, submenu );
			
			
		}
        
    }

    openDropdown( clickElement, parent, submenu ) {

        this.setAnimationStatus( parent, true );
        
        parent.setAttribute('aria-expanded',true);

        this.setAnimationStatus( parent, false );

    }

    closeDropdown( clickElement, parent, submenu ) {

        this.setAnimationStatus( parent, true );

        parent.setAttribute('aria-expanded',false);

        this.setAnimationStatus( parent, false );

    }

    setAnimationStatus( parent, isAnimating ) {


        if ( parent.classList.contains( this.animatingClass ) ) {

            this.timer = setTimeout(
                function() {
                    parent.classList.remove( this.animatingClass );
                }.bind(this), 
                this.animationTiming
            );

        } else {

            parent.classList.add( this.animatingClass );

        }

    }

} 

export default WsuDropdown;