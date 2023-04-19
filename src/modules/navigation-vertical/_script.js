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

            try {
                
                this.scrollNav();
                
            } catch (error) {

              console.error(error);

            }

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

            window.addEventListener(
                'load', 
                this.scrollEvent.bind( this ),
                false
            );
    
        }
    
        scrollEvent( event ) {
            
            try {
                
                this.scrollNav();
                
            } catch (error) {
              console.error(error);
            }
            
        }

        scrollNav() { 

            let navigation = this.getNavigation();

            let height = this.getHeight();

            if ( navigation && ( false !== height ) ) {

                navigation.style.paddingTop = height + 'px';

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

        getNavigation() {

            if ( ! this.navigation ) {

                let navigationWrapper = document.querySelector( '.wsu-navigation-vertical' );

                if ( navigationWrapper ) {

                    this.navigation = navigationWrapper.querySelector( '.wsu-slide-in-panel__panel-inner' );

                } 

            }

            return this.navigation;

        }
    
        
        getHeight() {

            let siteHeader = this.getHeader();

            let height = false;

            if ( siteHeader ) {

                let headerHeight = siteHeader.scrollHeight;

                height = siteHeader.getBoundingClientRect().top + headerHeight;

            }

            return height; 
        }
    
    }
    
    export default WsuNavigationVertical; 