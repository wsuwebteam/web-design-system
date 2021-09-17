const updateAria = ( action, selector ) => {

    let toggles = document.querySelectorAll( selector );

    toggles.forEach(
        ( element, i ) => {

            if ( element.hasAttribute( 'aria-label' ) ) {

                let regex = ( 'Open' == action ) ? /Open/i : /Close/i;

                let actionLabel = ( 'Open' == action ) ? 'Close' : 'Open';

                let label = element.getAttribute( 'aria-label' );

                //alert(actionLabel);

                //alert( label.replace( regex, actionLabel ) );

                element.setAttribute( 'aria-label', label.replace( regex, actionLabel ) );

            }

        }
    )

}

export default updateAria;