class WsuActionExpanded {
  
    constructor() {
        this.init();
    }
    
    init() {
        if ( 'undefined' !== window['wsuEvents'] ) {
            window['wsuEvents'].addEventClass( 'wsu-action-expanded--toggle','click', 'wsu-action-expanded--toggle', this.toggle.bind(this) );
            window['wsuEvents'].addEventClass( 'wsu-action-expanded--close', 'click', 'wsu-action-expanded--close', this.closeElement.bind(this) );
            window['wsuEvents'].addEventClass( 'wsu-action-expanded--open-target', 'click', 'wsu-action-expanded--open-target', this.openTargetElement.bind(this) );
        }
    }

    closeElement( element, event ) {
    
        let parentElement = element.closest( '[aria-expanded]' )
        
        if ( parentElement ) {
            
            this.close( element, parentElement, event );
            
        } 
    }
    
    
    toggle( element, event ) {
    
        let parentElement = element.closest( '[aria-expanded]' )
        
        if ( parentElement ) {
            
            if ( 'true' == parentElement.getAttribute( 'aria-expanded') ) {
            
            this.close( element, parentElement, event );
            
            } else {
            
            this.open( element, parentElement, event );
            
            }
            
        } 
    }

    
    close( element, parentElement, event ) {
        
        parentElement.setAttribute('aria-expanded', 'false' );

    }
    
    /*closeSiblings( element, event ) {
        
        let children = element.children;
        
        for( let i=0; i < children.length; i++ ){
            
            this.close( children[i], false, true );
        }
    
    }*/

    open( element, parentElement, event ) {
        
        parentElement.setAttribute('aria-expanded', 'true' );
    }
    
    openTargetElement( element, event ) {

        if ( element.hasAttribute('data-target-id') ) {

            let targetId = element.dataset.targetId;

            let parentElement = document.getElementById( targetId );

            if ( parentElement ) {

                this.open( element, parentElement, event );

            }


        }

    }
  }

  export default WsuActionExpanded; 
