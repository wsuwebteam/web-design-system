class WsuEvents {
    constructor(name, year) {
        this.clickEventQueue = [];
        this.init();
    }
    
    init() {
        
        document.addEventListener( 'click', this.clickEvent.bind(this) );
        
    }
    
    addEventClass( slug, action, eventClass, callback ) {
        
        switch ( action  ) {
            
        case 'click':
            this.clickEventQueue.push( { eventClass, callback } );
            break;
        }
        
    }
    
    clickEvent( event ) {
        
        let element = event.target;
        
        this.clickEventQueue.forEach( ( eventAction, i) => {
        
        
            if ( ( 'eventClass' in eventAction ) && ( 'callback' in eventAction ) ) {
                
                try {
                
                    if ( element.classList.contains( eventAction.eventClass ) ) {
                        
                        eventAction.callback( element, event );
                        
                    }
                
                } catch (error) {
        
                    console.log( error );
        
                }
            }
        
        } );
    }
}

export default WsuEvents; 
