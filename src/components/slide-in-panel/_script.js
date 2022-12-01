import { bindEventClass } from '../../../_assets/js/partials/bindEvent';

class WsuSlideInPanel {

    constructor( atts = {} ) {

        this.panelClass    = ( atts.hasOwnProperty( 'panelClass') ) ? atts.panelClass : 'wsu-slide-in-panel';
        this.closeClass     = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'wsu-slide-in-panel--close';
        this.openClass     = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'wsu-slide-in-panel--open';
        this.toggleClass     = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'wsu-slide-in-panel--toggle';
        this.init();
        
    }

    init() { 

        bindEventClass( { eventAction: 'click', eventClass: this.closeClass, eventCallback: this.closePanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.openClass, eventCallback: this.openPanel.bind(this) } );

    }

    closePanel( eventElement ) { 

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    openPanel( eventElement ) {

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', true )

        }

    }

    getPanel( eventElement ) {

        if ( eventElement.hasAttribute('data-panel') ) {

            return document.getElementById( eventElement.dataset.panel );

        }

        return eventElement.closest( '.' + this.panelClass );

    }


}

export default WsuSlideInPanel;