const toggleAria = ( props ) => {

    let {
        wrapper = false,
        toggleByClass = false,
    } = props;

    // If element exists
    if ( wrapper ) {

        if ( toggleByClass ) {

            if ( wrapper.classList.contains( toggleByClass ) ) {
			
                toggleAriaExpandedClose( props ); 
        
            } else {
        
                toggleAriaExpandedOpen( props );
                
            }

        } else {

            if ( wrapper.getAttribute('aria-expanded') && 'false' != wrapper.getAttribute('aria-expanded') ) {
			
                toggleAriaExpandedClose( props ); 
        
            } else {
        
                toggleAriaExpandedOpen( props );
                
            }

        }

    }

}

const toggleAriaExpandedOpen = ( props ) => {

    let {
        wrapper          = false,
        isAnimated       = true,
        actionPrefix     = false,
        ariaLabelElement = false,
    } = props;


    // If element exists
    if ( wrapper ) {

        toggleHeight( props, true );
        toggleAnimating( props );
        toggleLabel( props, true );

        wrapper.setAttribute('aria-expanded',true);

        if ( actionPrefix ) {
            wrapper.classList.add( actionPrefix + '--openned' );
            wrapper.classList.remove( actionPrefix + '--closed' );
        }
        
        toggleAnimating( props );

    }

}

const toggleAriaExpandedClose = ( props ) => {

    let {
        wrapper          = false,
        isAnimated       = true,
        actionPrefix     = false,
        ariaLabelElement = false,
    } = props;

    // If element exists
    if ( wrapper ) {

        toggleHeight( props, false );
        toggleAnimating( props );

        toggleLabel( props, false );

        if ( actionPrefix ) {
            wrapper.classList.add( actionPrefix + '--closed' );
            wrapper.classList.remove( actionPrefix + '--openned' );
        }

        wrapper.setAttribute('aria-expanded', false ); 

        toggleAnimating( props );
            

    }

}

const toggleAnimating = ( props ) => {

    let {
        wrapper          = false,
        animatedDuration = 300,
        animateClass     = 'wsu-animating',
        isAnimated       = true,
        animateHeight    = false,
        childElement     = false,
    } = props;

    if ( isAnimated && wrapper ) {

        if ( wrapper.classList.contains( animateClass ) ) {

            let timer = setTimeout(
                function() {
                    wrapper.classList.remove( animateClass );

                    if ( animateHeight && childElement ) {

                        childElement.style.maxHeight = '';

                    }
                
                }, 
                animatedDuration
            );
    
            return timer;
    
        } else {
    
            wrapper.classList.add( animateClass );
    
            return false;
    
        }

    }

}

const toggleShould = ( props ) => {

    let { 
        eventElement = false, 
        clickClass = false,
        checkParent = false,
        checkSibling = false,
        checkEmptyLink = false,
    } = props;

    if ( clickClass && eventElement.classList.contains( clickClass ) ) {

        return true;

    } else if ( checkEmptyLink && eventElement.hasAttribute('href') && '#' === eventElement.getAttribute('href') ) {

        return true;

    } else if ( checkParent && eventElement.parentElement.classList.contains( clickClass ) ) {

        return true;

    } else if ( checkSibling && eventElement.nextElementSibling.classList.contains( clickClass ) ) {

        return true;

    }

    return false;

}


const toggleLabel = ( props, isExpanded ) => {
    let { 
        expandedText = 'Close', 
        collapsedText = 'Open', 
        ariaLabelElement = false,
    } = props;

    console.log( props );


    if ( ariaLabelElement && ariaLabelElement.hasAttribute('aria-label') ) {

        let label = ariaLabelElement.getAttribute('aria-label');

        let action = ( isExpanded ) ? expandedText : collapsedText;

        let regex = new RegExp( expandedText + '|' + collapsedText, "g");

        console.log( regex );

        label = label.replace( regex, action );

        ariaLabelElement.setAttribute( 'aria-label', label );

    }
}


const toggleHeight = ( props, isExpanding ) => {

    let {
        
        childElement = false,
        animateHeight = false,
        heightPadding = 20,
    } = props;

    if ( childElement && animateHeight ) {

        let childElementHeight = ( childElement.scrollHeight + heightPadding ) + "px";

        childElement.style.maxHeight = childElementHeight;

        if ( ! isExpanding ) {

            setTimeout(
                function() {
                    childElement.style.maxHeight = 0;
                }, 
                25
            );

        }

    }

}


export { toggleAria, toggleAriaExpandedOpen, toggleAriaExpandedClose, toggleAnimating, toggleShould };