import { bindEventClass } from '../../../_assets/js/partials/bindEvent';

class WsuUtilityPanel {

    constructor( atts = {} ) {

        this.panelClass    = ( atts.hasOwnProperty( 'panelClass') ) ? atts.panelClass : 'wsu-utility-panel';
        this.closeClass     = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'wsu-utility-panel--close';
        this.openClass     = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'wsu-utility-panel--open';
        this.init();
        
    }

    init() { 

        bindEventClass( { eventAction: 'click', eventClass: this.closeClass, eventCallback: this.closePanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.openClass, eventCallback: this.openPanel.bind(this) } );

    }

    closePanel( eventElement ) {

        let panel = this.getPanel();

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    openPanel( eventElement ) {

        let panel = this.getPanel();

        if ( panel ) {

            panel.setAttribute('aria-expanded', true )

        }

    }

    getPanel() {

        return document.querySelector( '.' + this.panelClass );

    }


}

export default WsuUtilityPanel;