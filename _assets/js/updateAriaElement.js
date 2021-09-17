const updateAriaElement = ( action, element ) => {

    if ( element.hasAttribute( 'aria-label' ) ) {

        let regex = ( 'Open' == action ) ? /Open/i : /Close/i;

        let actionLabel = ( 'Open' == action ) ? 'Close' : 'Open';

        let label = element.getAttribute( 'aria-label' );

        element.setAttribute( 'aria-label', label.replace( regex, actionLabel ) );

    }

}

export default updateAriaElement;