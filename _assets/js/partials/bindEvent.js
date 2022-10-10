const bindEventClass = ( { eventAction, eventClass, eventCallback } ) => {

    window.addEventListener( 
        eventAction, 
        ( event ) => {
            if ( event.target.classList.contains( eventClass ) ) {
                try {
                    eventCallback( event.target );
                } catch ( error ) {
                    console.error(error);
                }
            }
        }, 
        false
    );
}

export { bindEventClass }