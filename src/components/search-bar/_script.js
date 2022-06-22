class WsuSearchBar {

    constructor( atts = {} ) {

        this.init();

    }

    init() {

        this.bindEvents();
        this.searchParam();

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

        var div = eventElement.closest('.wsu-search-bar__scope-option');

        this.displayElements( div );
      }

		} catch (error) {
		  console.error(error);
		}

	}

  searchParam() {
    var searchbox = document.getElementsByClassName('gcse-searbox')[0];
    console.log(searchbox);

    var site = window.location.hostname;
    console.log(site);

  }

  displayElements( div ) {
    console.log(div);
    var allBox = document.getElementsByClassName('wsu-search-bar--all')[0];
    var singleBox = document.getElementsByClassName('wsu-search-bar--single')[0];

    var allResults = document.getElementsByClassName('wsu-search-results--all')[0];
    var singleResults = document.getElementsByClassName('wsu-search-results--single')[0];

    if ( div.getAttribute('id') === 'all' ) {
      allBox.setAttribute('aria-hidden', 'false');
      allResults.setAttribute('aria-hidden', 'false');

      singleBox.setAttribute('aria-hidden', 'true');
      singleResults.setAttribute('aria-hidden', 'true');

    } else {
      allBox.setAttribute('aria-hidden', 'true');
      allResults.setAttribute('aria-hidden', 'true');

      singleBox.setAttribute('aria-hidden', 'false');
      singleResults.setAttribute('aria-hidden', 'false');
    }
  }

}

export default WsuSearchBar;
