const elementGet = ( { parent = false, elementClass = false } ) => {

    if ( elementClass ) {

        let elements = parent ? parent.getElementsByClassName( elementClass ) : document.getElementsByClassName( elementClass );
        
        if ( 0 < elements.length ) {
            
            return elements[0];
            
        } else {
            
            return false;
            
        }
            
    } 

    return false;

}


const elementGetClosest = ( element, parentClass ) => {

    if ( element ) {

        return element.closest( '.' + parentClass );
            
    } else {

        return false;

    }

}

export { elementGet, elementGetClosest }