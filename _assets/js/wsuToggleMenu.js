class WsuToggleMenu {

    constructor( atts ) {
        this.clickParentClass = ( atts.hasOwnProperty( 'clickParentClass') ) ? atts.clickParentClass : false
        this.clickClass       = ( atts.hasOwnProperty( 'clickClass') ) ? atts.clickClass : false;
        this.animatingClass   = ( atts.hasOwnProperty( 'animatingClass') ) ? atts.animatingClass : 'wsu-animating';
        this.animationTiming  = ( atts.hasOwnProperty( 'animationTiming') ) ? atts.animationTiming : 300;
        this.timer            = false;
        this.toggleHeight     = ( atts.hasOwnProperty( 'toggleHeight') ) ? atts.toggleHeight : false;

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

            let parent       = event.target.parentElement;
            let clickElement = event.target;

            if ( this.shouldToggle( clickElement, parent ) ) {

                event.preventDefault();

                this.toggle( clickElement, parent );

            }
			
			
		} catch (error) {
		  console.error(error);
		}
		
	}


    toggle( clickElement, parent ) {

        let submenu = parent.getElementsByTagName('ul')[0];

        if ( parent.getAttribute('aria-expanded') && 'false' != parent.getAttribute('aria-expanded') ) {
			
			this.close( clickElement, parent, submenu );

		} else {

            this.open( clickElement, parent, submenu );
			
		}
        
    }

    open( clickElement, parent, submenu ) {

        if ( this.toggleHeight ) {

            let submenuHeight = ( submenu.scrollHeight + 20 ) + "px";

            submenu.style.maxHeight = submenuHeight;

        }

        this.setAnimationStatus( parent, submenu, true );
        
        parent.setAttribute('aria-expanded',true);

        this.setAnimationStatus( parent, submenu, false );

    }

    close( clickElement, parent, submenu ) {

        if ( this.toggleHeight ) {

            let submenuHeight = ( submenu.scrollHeight + 20 ) + "px";

            submenu.style.maxHeight = submenuHeight;

            /* If this happens too quickly it doesn't work? */
            setTimeout(
                function() {
                    submenu.style.maxHeight = 0;
                }, 
                25
            );

        }

        this.setAnimationStatus( parent, submenu, true );

        parent.setAttribute('aria-expanded',false);

        this.setAnimationStatus( parent, submenu, false ); 

    }

    setAnimationStatus( parent, submenu, isAnimating ) {


        if ( parent.classList.contains( this.animatingClass ) ) {

            this.timer = setTimeout(
                function() {
                    parent.classList.remove( this.animatingClass );

                    if ( this.toggleHeight ) {
                        submenu.style.maxHeight = '';
                    }
                }.bind(this), 
                this.animationTiming
            );

        } else {

            parent.classList.add( this.animatingClass );

        }

    }

    shouldToggle( clickElement, parent ) {

        if ( this.clickParentClass ) {

            if ( parent.classList.contains( this.clickClass ) && ! parent.classList.contains( this.animatingClass ) ) {

                return true;

            }

        } else {

            if ( clickElement.classList.contains( this.clickClass ) && ! clickElement.classList.contains( this.animatingClass ) ) {

                return true;

            }

        }

        return false;

    }

} 

export default WsuToggleMenu;