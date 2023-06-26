import updateAriaElement from "../../../_assets/js/updateAriaElement";
import { elementGetSiblings } from "../../../_assets/js/partials/element";

class WsuNavigationVertical {

    
        constructor( atts = {} ) {

            this.heightElements = ['.wsu-header-unit','.wsu-header-campus','.wsu-nav-site-horiz'];

            this.navigation = false;
    
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

            let height = this.getHeaderHeight();

            if ( navigation && ( false !== height ) ) {

                navigation.style.paddingTop = ( height < 0 ) ? 0 : height + 'px';

            }

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

        getHeaderHeight() {

            let height = 0;

            for ( let h = 0; h < this.heightElements.length; h++ ) {

                let heightElement = document.querySelector( this.heightElements[h] );

                if ( heightElement ) {

                    height = height + heightElement.scrollHeight;

                }

            }

            console.log( 'navigation-vertical:' + height );

            return height;

        }
    
    
    }
    
    export default WsuNavigationVertical; 