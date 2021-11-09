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

const elementGetSiblings = ( element ) => {

    // Setup siblings array and get the first sibling
	let siblings = [];
	let sibling = element.parentNode.firstChild;

	// Loop through each sibling and push to the array
	while ( sibling ) {

		if (sibling.nodeType === 1 && sibling !== element) {

			siblings.push(sibling);

		}

		sibling = sibling.nextSibling;

	}

	return siblings;

}

export { elementGet, elementGetClosest, elementGetSiblings }