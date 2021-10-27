const wsuAriaExpanded = ( element, value ) => {

    if ( element.hasAttribute( 'aria-expanded') ) {

        element.setAttribute( 'aria-expanded', value );

    }

}

const wsuAriaIsExpanded = ( element ) => {

    if ( element.hasAttribute( 'aria-expanded') ) {

        return ('true' == element.getAttribute( 'aria-expanded') );

    } else {

        return false;

    }

} 


export { wsuAriaExpanded, wsuAriaIsExpanded }