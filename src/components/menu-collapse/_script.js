import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class WsuMenuCollapse {

    

    
        constructor( atts = {} ) {

            this.timer = false;
            this.animationLength = 600;
    
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
    
            /*document.addEventListener(
                'keydown', 
                this.keyDownEvents.bind( this ),
                false
            );*/
        }
    
        clickEvents( event ) {
            
            try {
                
                // Toggle Action
                if ( event.target.classList.contains( 'wsu-menu-collapse--action-toggle' ) ) {
    
                    let navElement = event.target.parentElement;
    
                    if ( this.shouldClose( navElement ) ) {
    
                        this.close( navElement );
    
                        updateAriaElement( 'Close', event.target );
    
                    } else {
    
                        this.open( navElement );
    
                        updateAriaElement( 'Open', event.target );
    
                    }
    
                }
                
            } catch (error) {
              console.error(error);
            }
            
        }
    
    
    
        open( navElement ) {
    
            this.closeSiblings( navElement );
    
            let subMenu = navElement.lastElementChild;

            subMenu.style.maxHeight = ( ( this.getHeight( subMenu ) + 20 ) + 'px' );

            navElement.setAttribute( 'aria-expanded', true );

            
            this.timer = setTimeout(
                function() {
                    subMenu.style.maxHeight = '';
                }, 
                this.animationLength
            );
    
        }

        getHeight( submenu ) {

            let height = submenu.scrollHeight;

            return height;
        }
    
        close( navElement ) {
    
            let subMenu = navElement.lastElementChild;

            subMenu.style.maxHeight = ( ( this.getHeight( subMenu ) + 20 ) + 'px' );

            setTimeout(
                function() {
    
                    navElement.setAttribute( 'aria-expanded', false );

                    subMenu.style.maxHeight = '';
                }, 
                15
            );
    
        }
    
        closeSiblings( navElement ) {
    
            let siblings = elementGetSiblings( navElement );
    
            siblings.forEach( element => {
    
                if ( this.shouldClose( element ) ) {
                    this.close( element );
                }
            }); 
    
        }
    
        shouldClose( navElement ) {
    
            return ( navElement.hasAttribute( 'aria-expanded') && 'true' == navElement.getAttribute( 'aria-expanded') ) || false;
    
        }
    
    
    }
    
    export default WsuMenuCollapse; 