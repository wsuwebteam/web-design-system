class WsuEvents {
    constructor(name, year) {
        this.clickEventQueue = [];
        this.eventQueue = [];
        this.init();
    }
    
    init() {
        
        document.addEventListener( 'click', this.clickEvent.bind(this) );

        window.addEventListener( 'load', this.loadEvent.bind( this ) );
        
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

        this.eventQueue.forEach( ( eventObj ) => {

            if ( eventObj.type && 'click' === eventObj.type ) {

                if ( eventObj.callback && typeof eventObj.callback === 'function' ) {

                    try {

                        if ( eventObj.hasClass && element.classList.contains( eventObj.hasClass ) ) {
                        
                            eventObj.callback( element, event );
                            
                        }
                    } catch (error) {
            
                        console.log( error );
            
                    }

                }

            }

        });

        /** Legacy */
        
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


    loadEvent( event ) {
        
        let element = event.target;

        console.log( this.eventQueue );

        this.eventQueue.forEach( ( eventObj ) => {

            if ( eventObj.type && 'load' === eventObj.type ) {

                if ( eventObj.callback && typeof eventObj.callback === 'function' ) {

                    try {

                        eventObj.callback( element, event );
                        
                    } catch (error) {
            
                        console.log( error );
            
                    }

                }

            }

        });
    }

    addEvent( eventObj ) {

        let defaultEvent = {
            type: false,
            callback: false,
            hasClass: false,
            parentClass: false,
        }

        let event = {
            ...defaultEvent,
            ...eventObj
        }

        this.eventQueue.push( event );

    } 
}

export default WsuEvents; 
