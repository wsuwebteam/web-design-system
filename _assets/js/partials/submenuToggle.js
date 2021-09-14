const wsuSubmenuOpen = ( parentElement ) => {

    parentElement.setAttribute( 'aria-expanded', true );

}

const wsuSubmenuClose = ( parentElement ) => {

    parentElement.setAttribute( 'aria-expanded', false );
    
}

const wsuSubmenuToggle = ( clickElement ) => {

    let parentElement = clickElement.parentElement;

    if ( parentElement.hasAttribute( 'aria-expanded' ) && 'true' == parentElement.getAttribute( 'aria-expanded' ) ) {

        wsuSubmenuClose( parentElement );

    } else {

        wsuSubmenuOpen( parentElement );

    }

}

export { wsuSubmenuToggle, wsuSubmenuClose, wsuSubmenuOpen };