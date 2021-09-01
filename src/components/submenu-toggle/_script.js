class WsuSubmenuToggle {

    constructor( props = {} ) {

        this.class            = ( props.hasOwnProperty( 'class') ) ? props.class : 'wsu-submenu';
        this.closeClass       = ( props.hasOwnProperty( 'closeClass') ) ? props.closeClass : this.class + "--close";
        this.openClass        = ( props.hasOwnProperty( 'openClass') ) ? props.openClass : this.class + "--open";
        this.toggleClass      = ( props.hasOwnProperty( 'toggleClass') ) ? props.toggleClass : this.class + "--toggle";
        this.animatingClass   = ( props.hasOwnProperty( 'animatingClass') ) ? props.animatingClass : 'wsu-animating';
        this.animationTiming  = ( props.hasOwnProperty( 'animationTiming') ) ? props.animationTiming : 300;
        this.timer            = false;

        console.log( this );

        if ( this.class ) {

            this.init();

        }
        
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

        /*document.addEventListener(
			'keydown', 
			this.keyDownEvents.bind( this ),
			false
		);*/
	}

    clickEvents( event ) {
		
		try {

            let clickElement = event.target;

            if ( clickElement.classList.contains( this.toggleClass ) ) {

                this.toggle( clickElement );

            }

            // check Close Navigation
            /*if ( toggleShould( { eventElement: eventElement, clickClass: this.closeClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedClose( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Open Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.openClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAriaExpandedOpen( { 
                        wrapper: wrapper,
                        actionPrefix: this.actionPrefix,
                    } );

                }

            }

            // Check Toggle Navigation
            if ( toggleShould( { eventElement: eventElement, clickClass: this.toggleClass, checkParent: true }) ) {

                event.preventDefault();

                let wrapper = elementGet( { elementClass: this.wrapperClass } );

                if ( wrapper ) {

                    toggleAria( { 
                        wrapper: wrapper,
                        toggleByClass: this.actionPrefix + '--openned',
                        actionPrefix: this.actionPrefix,
                        ariaLabelElement: eventElement,
                    } );

                }

            }*/
			
		} catch (error) {
		  console.error(error);
		}
		
	}

    toggle( clickElement ) {

        let parentElement = clickElement.parentElement;

        if ( parentElement.hasAttribute( 'aria-expanded' ) && 'true' == parentElement.getAttribute( 'aria-expanded' ) ) {

            this.close( parentElement );

        } else {

            this.open( parentElement );

        }

    }

    open( parentElement ) {

        this.isAnimating( parentElement );

        parentElement.setAttribute( 'aria-expanded', true );

    }

    close( parentElement ) {

        this.isAnimating( parentElement );

        parentElement.setAttribute( 'aria-expanded', false );

    }

    isAnimating( parentElement ) {

        parentElement.classList.add( this.animatingClass );

        this.timer = setTimeout( () => {

            parentElement.classList.remove('wsu-animating');

        }, this.animationTiming );

    }


    /*keyDownEvents( event ) {

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

    }*/


}

export default WsuSubmenuToggle;