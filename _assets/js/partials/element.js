const elementGet = ( { elementClass = false } ) => {

    if ( elementClass ) {

		
        let elements = document.getElementsByClassName( elementClass );
        
        if ( 0 < elements.length ) {
            
            return elements[0];
            
        } else {
            
            return false;
            
        }
            
    } 

    return false;

}

export { elementGet }