class WsuMenuAction {
  
    constructor() {
        this.init();
    }
    
    init() {
        if ( 'undefined' !== window['wsuEvents'] ) {
            window['wsuEvents'].addEventClass( 'wsu-menu-action-toggle','click', 'wsu-menu-action--toggle', this.toggle.bind(this) );
            window['wsuEvents'].addEventClass( 'wsu-menu-action-close', 'click', 'wsu-menu-action--close-menu', this.closeButton.bind(this) );
        }
    }
    
    
    toggle( element, event ) {
    
        let parentElement = element.parentElement;
        
        if ( parentElement.hasAttribute( 'aria-expanded') ) {
            
            if ( 'true' == parentElement.getAttribute( 'aria-expanded') ) {
            
            this.close( element, event );
            
            } else {
            
            this.open( element, event );
            
            }
            
        } 
    }
    
    
    closeButton( element, event ) {
    
        let menuElement = element.closest('ul');
        
        this.close( menuElement, event );
    
    }
    
    close( element, event, isParent=false ) {
    
        let parent = ( isParent ) ? element : element.parentElement;
        
        parent.setAttribute('aria-expanded', 'false' );

    }
    
    closeSiblings( element, event ) {
        
        let children = element.children;
        
        for( let i=0; i < children.length; i++ ){
            
            this.close( children[i], false, true );
        }
    
    }
    
    open( element, event, isParent=false ) {
    
        let parent = ( isParent ) ? element : element.parentElement;
        
        this.closeSiblings( parent.parentElement, event );
        
        parent.setAttribute('aria-expanded', 'true' );
    }
  }

  export default WsuMenuAction; 
  