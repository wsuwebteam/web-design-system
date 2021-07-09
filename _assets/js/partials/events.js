const keyDownEvent = ( props ) => {

    let { 
        domEvent = false,
        key      = false,
        inClass  = false
    } = props;

    if ( ! domEvent || ! key ) {

        return false;

    }

    let eventElement = domEvent.target;
    let eventKey     = domEvent.key;

    if ( key === eventKey && Element.prototype.closest ) {

        if ( inClass && eventElement.closest( '.' + inClass ) ) {

            return true;

        } 

    } else {

        return false;

    }

}

export { keyDownEvent };