class WsuSearchBar {

    constructor( atts = {} ) {

        this.init();

    }

    init() {

        this.bindEvents();

    }

    bindEvents() {
			document.addEventListener(
				'click',
				this.clickEvents.bind( this ),
				false
			);
		}

    clickEvents( event ) {

		try {

			let eventElement = event.target;
      console.log(eventElement);

			var radios = document.querySelectorAll('.wsu-search-bar__scope-option');

			if ( eventElement.classList.contains('wsu-search-bar__radio') || eventElement.classList.contains('wsu-search-bar__scope-label') ) {
				radios.forEach(( radio ) => {

					radio.setAttribute('aria-checked', 'false');

					eventElement.closest('.wsu-search-bar__scope-option').setAttribute('aria-checked', 'true');
				});
			}

		} catch (error) {
		  console.error(error);
		}

	}

}

export default WsuSearchBar;
