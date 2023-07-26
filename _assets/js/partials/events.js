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

};

const onTransitionEnd = (element, callback) => {
    element.addEventListener("transitionend", function once() {
        element.removeEventListener("transitionend", once, false);
        callback();
      }, false);
};

const onAnimationEnd = (element, callback) => {
    element.addEventListener("animationend", function once() {
        element.removeEventListener("animationend", once, false);
        callback();
      }, false);
};  

export { 
    keyDownEvent,
    onTransitionEnd,
    onAnimationEnd
};