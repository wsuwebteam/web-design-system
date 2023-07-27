import { bindEventClass } from '../../../_assets/js/partials/bindEvent';

class WsuSlideInPanel {

    constructor( atts = {} ) {

        this.panelClass    = ( atts.hasOwnProperty( 'panelClass') ) ? atts.panelClass : 'wsu-slide-in-panel';
        this.closeClass     = ( atts.hasOwnProperty( 'closeClass') ) ? atts.closeClass : 'wsu-slide-in-panel--close';
        this.closeThisClass  = ( atts.hasOwnProperty( 'closeThisClass') ) ? atts.closeThisClass : 'wsu-slide-in-panel--close-this';
        this.openClass     = ( atts.hasOwnProperty( 'openClass') ) ? atts.openClass : 'wsu-slide-in-panel--open';
        this.toggleClass     = ( atts.hasOwnProperty( 'toggleClass') ) ? atts.toggleClass : 'wsu-slide-in-panel--toggle';
        this.focusClass     = ( atts.hasOwnProperty( 'focusClass') ) ? atts.toggleClass : 'wsu-slide-in-panel--focus';
        this.init();
        
    }

    init() { 

        bindEventClass( { eventAction: 'click', eventClass: this.closeClass, eventCallback: this.closePanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.closeThisClass, eventCallback: this.closeCurrentPanel.bind(this) } );
        bindEventClass( { eventAction: 'click', eventClass: this.openClass, eventCallback: this.openPanel.bind(this) } );

    }

    closePanel( eventElement ) { 

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    closeCurrentPanel( eventElement ) { 

        let panel = this.getPanel( eventElement, false );

        if ( panel ) {

            panel.setAttribute('aria-expanded', false)

        }

    }

    openPanel( eventElement ) {

        let panel = this.getPanel( eventElement );

        if ( panel ) {

            panel.setAttribute('aria-expanded', true );

            const focusSelector = eventElement.dataset.panelFocus ?? '.' + this.focusClass;
            panel.querySelector(focusSelector)?.focus();        

        }

    }

    getPanel( eventElement, check_remote = true ) {

        if ( check_remote && eventElement.hasAttribute('data-panel') ) {

            return document.getElementById( eventElement.dataset.panel );

        }

        return eventElement.closest( '.' + this.panelClass );

    }


}

export default WsuSlideInPanel;