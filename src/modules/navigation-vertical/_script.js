import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class WsuNavigationVertical {

    
        constructor( atts = {} ) {

            this.headers = ['.wsu-header-unit','.wsu-header-campus'];

            this.navigation = false;

            this.siteHeader = false;
    
            this.init();
            
        }
    
        init() {
    
            this.bindEvents();
    
        }
    
        bindEvents() {
            document.addEventListener(
                'scroll', 
                this.scrollEvent.bind( this ),
                false
            );

            window.addEventListener(
                'resize', 
                this.scrollEvent.bind( this ),
                false
            );
    
    
            /*document.addEventListener(
                'keydown', 
                this.keyDownEvents.bind( this ),
                false
            );*/
        }
    
        scrollEvent( event ) {
            
            try {
                
                this.scrollNav();
                
            } catch (error) {
              console.error(error);
            }
            
        }

        scrollNav() { 

            this.setNavigation();

            let height = this.getHeight();

            if ( this.navigation && ( false !== height ) ) {

                this.navigation.style.paddingTop = height + 'px';

            }

        }

        getHeader() {

            if ( ! this.siteHeader ) {

                for ( let h = 0; h < this.headers.length; h++ ) {

                    let header = document.querySelector( this.headers[h] );
    
                    if ( header ) {
    
                        this.siteHeader = header;
                        
                        break;
    
                    }
    
                }

            }

            return this.siteHeader;

        }

        setNavigation() {

            if ( ! this.navigation ) {

                this.navigation = document.querySelector( '.wsu-navigation-vertical__panel' );

            }

        }
    
        
        getHeight() {

            let siteHeader = this.getHeader();

            let height = false;

            console.log( siteHeader );

            if ( siteHeader ) {

                let headerHeight = siteHeader.scrollHeight;

                height = siteHeader.getBoundingClientRect().top + headerHeight;

            }

            console.log( height );

            return height; 
        }
    
    }
    
    export default WsuNavigationVertical; 