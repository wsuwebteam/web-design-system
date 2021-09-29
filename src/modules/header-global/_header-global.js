import { wsuMenuExpandToggle } from "../../../_assets/js/wsuMenuExpand";
import { ariaUpdateElement } from "../../../_assets/js/ariaUpdate"; 

class WsuHeaderGlobal {

    constructor( atts = {} ) {
        this.timer            = false;
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

            let eventElement = event.target;
            let navElement = event.target.parentElement;

            // Toggle Action
            if ( eventElement.classList.contains( 'wsu-menu-expand--toggle' ) ) {

                ariaUpdateElement( eventElement, wsuMenuExpandToggle( navElement ) );

            }

            if ( eventElement.classList.contains( 'wsu-menu-expand--down' ) ) {

                wsuMenuExpandDown( navElement );
                ariaUpdateElement( eventElement, 'open' );

            }

            if ( eventElement.classList.contains( 'wsu-menu-expand--up' ) ) {

                wsuMenuExpandDown( navElement );
                ariaUpdateElement( eventElement, 'close' );

            }			
			
		} catch (error) {
		  console.error(error);
		}
		
	}

    

}

export default WsuHeaderGlobal;