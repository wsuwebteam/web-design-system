const wsuMenuExpandUp = ( navItem, args = {} ) => {

    let subMenu = navItem.lastElementChild;

        subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

        //subMenu.style.maxHeight = 0;

        /* If this happens too quickly it doesn't work? */
        setTimeout(
            function() {
                navItem.setAttribute( 'aria-expanded', false );
            }, 
            15
        );


        // Remove max height after animation
        let timer = setTimeout(
            function() {
                subMenu.style.maxHeight = '';
            }, 
            500
        );

}

const wsuMenuExpandDown = ( navItem, args = {} ) => {

    let subMenu = navItem.lastElementChild;

    subMenu.style.maxHeight = ( ( subMenu.scrollHeight + 20 ) + 'px' );

    navItem.setAttribute( 'aria-expanded', true );

    // Remove max height after animation
    let timer = setTimeout(
        function() {
            subMenu.style.maxHeight = '';
        }, 
        500
    );
}

const wsuMenuExpandToggle = ( navItem, args = {}  ) => {

    if ( shouldExpand( navItem ) ) {

        wsuMenuExpandDown( navItem, args );

        return 'open';

    } else {

        wsuMenuExpandUp( navItem, args );

        return 'close';

    }

}


const shouldExpand = ( navItem ) => {

    return ( ! navItem.hasAttribute( 'aria-expanded') || 'false' == navItem.getAttribute( 'aria-expanded') ) || false;

}

export { wsuMenuExpandUp, wsuMenuExpandToggle, wsuMenuExpandDown  };