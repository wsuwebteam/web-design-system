import { ariaUpdate } from "../../../_assets/js/ariaUpdate";

class WsuModal {

    constructor( atts = {} ) {

        this.timer = false;

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

        document.addEventListener(
			'keydown',
			this.keyDownEvents.bind( this ),
			false
		);
	}

    clickEvents( event ) {

		try {

            let eventElement = event.target;

            // Open Action
            if ( eventElement.getAttribute( 'data-open' ) ) {
				var modalId = eventElement.getAttribute( 'data-open' );
				this.open( eventElement, modalId );
				this.focusFirst( modalId );

				if ( ! eventElement.classList.contains( 'return-focus' ) ) {
					this.returnFocus( eventElement );
				}


            }

            // Close Action
            if ( eventElement.classList.contains('wsu-modal__overlay' ) || eventElement.classList.contains('wsu-modal__close' ) ) {
                this.close( eventElement );

            }

		} catch (error) {
		  console.error(error);
		}

	}

    keyDownEvents( event ) {

        try {

			var modalList = document.querySelectorAll('.wsu-modal');

			modalList.forEach( (modal) => {

				if ( event.key === 'Escape' ) {
					console.log('Escape pressed');
					this.close( event.target );
				}

				var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]):not(.wsu-modal__overlay), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
				var firstEl = focusableEls[0];
				var lastEl = focusableEls[focusableEls.length - 1];
				var tabKeyCode = 9;

				if ( event.key === 'Tab' || event.keyCode === tabKeyCode ) {
					if ( event.shiftKey ) {
						if ( document.activeElement === firstEl ) {
							lastEl.focus();
							event.preventDefault();
						}
					} else {
						if ( document.activeElement === lastEl ) {
							firstEl.focus();
							event.preventDefault();
						}
					}
				}
			});


		} catch (error) {
		  console.error(error);
		}

    }

    open( eventElement = false, modalId ) {

        let modal = document.getElementById( modalId ) || false;

        if ( ! modal ) return;

		modal.classList.remove('wsu-modal--hidden');

    }

    close( eventElement = false ) {

        let targetModal = eventElement.closest('.wsu-modal') || false;
		let focusEls = document.getElementsByClassName('return-focus')[0] || false;

        if ( ! targetModal ) return;

		targetModal.classList.add('wsu-modal--hidden');

		focusEls.focus();

        const myTimeout = setTimeout(
            function() {
                window.dispatchEvent(new Event('resize'));
            }, 300
        );

    }

    focusFirst( modalId ) {

        let modal = document.getElementById( modalId ) || false;

        if ( ! modal ) false;

        var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]):not(.wsu-modal__overlay)');
		var firstEl = focusableEls[0];
		firstEl.focus();

    }

	returnFocus( eventElement ) {

		var modalTriggers = document.querySelectorAll('.return-focus');

		modalTriggers.forEach( (trigger) => {
			trigger.classList.remove('return-focus');
		});

		eventElement.classList.add( 'return-focus' );

	}

}

export default WsuModal;
