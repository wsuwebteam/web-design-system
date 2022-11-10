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

        setHeader() {

            if ( ! this.siteHeader ) {

                for ( let h = 0; h < this.headers.length; h++ ) {

                    let header = document.querySelector( this.headers[h] );
    
                    if ( header ) {
    
                        this.siteHeader = header;
                        
                        break;
    
                    }
    
                }

            }

        }

        setNavigation() {

            if ( ! this.navigation ) {

                this.navigation = document.querySelector( '.wsu-navigation-vertical__panel' );

            }

        }
    
        
        getHeight() {

            this.setHeader();

            let height = false;

            if ( this.siteHeader ) {

                let headerHeight = this.siteHeader.scrollHeight;

                height = this.siteHeader.getBoundingClientRect().top + headerHeight;

            }

            return height;
        }
    
    }
    
    export default WsuNavigationVertical; 