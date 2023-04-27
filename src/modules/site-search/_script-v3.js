class WsuSiteSearch {

    
    constructor( atts = {} ) {

        this.init();
        
    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
        document.addEventListener(
            'change', 
            this.click.bind( this ),
            false
        );

    }

    click( event ) {
        
        try {

            let eventElement = event.target;

            // Toggle Action
            if ( eventElement.classList.contains( 'wsu-search-options__option-input' ) ) {

                this.changeSearch( eventElement );

            }
            
        } catch (error) {

          console.error( error );

        }
        
    }

    changeSearch( eventElement ) {

        let parent = eventElement.closest( '.wsu-site-search' );

        let searchValue = eventElement.value

        let searchForms = parent.querySelectorAll('.wsu-site-search__tab');

        for ( let i = 0; i < searchForms.length; ++i ) {

            if ( searchValue === searchForms[i].dataset.context ) {

                searchForms[i].classList.add( 'wsu-site-search--active' );


            } else {

                searchForms[i].classList.remove( 'wsu-site-search--active' );

            }
        
        } 

    }

    
}

export default WsuSiteSearch; 