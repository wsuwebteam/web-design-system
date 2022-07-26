class WsuModal {
    constructor(atts = {}) {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener("click", this.clickEvents.bind(this), false);

        document.addEventListener("keydown", this.keyDownEvents.bind(this), false);
    }

    clickEvents(event) {
        try {
            let eventElement = event.target; 
            let modal = document.querySelector(".wsu-modal");
            let openButton = document.getElementById("open-modal");
            let closeButton = document.querySelector(".wsu-modal__close-button");

            //for mobile menu quicklinks popover
            let quickLinks = document.querySelector(".wsu-mobile-menu__quicklinks");

            // If open is clicked, open modal
            if (eventElement === openButton) {
                if (modal.classList.contains(".modal-open") === false) {
                    // Place class on element that triggered event
                    // so we know where to restore focus when the modal is closed
                    eventElement.classList.add("last-focus");

                    // Hide the background page with ARIA
                    var all = document.querySelectorAll("button#modal-open,input");
                    for (var i = 0; i < all.length; i++) {
                        all[i].setAttribute("aria-hidden", "true");
                    }

                    // Add the classes and attributes to make the modal visible
                    modal.classList.toggle("wsu-modal__closed");
                    document.body.classList.toggle("modal-open");
                    setTimeout(() => closeButton.focus(), 1);
                }
            }

            //If close is clicked, close modal
            if (eventElement === closeButton) {
                if (document.body.classList.contains("modal-open")) {
                    modal.classList.toggle("wsu-modal__closed");
                    document.body.classList.toggle("modal-open");
                    modal.setAttribute("aria-modal", "false");

                    // Restore the background page by removing ARIA
                    var all = document.querySelectorAll("button#modal-open,input");
                    for (var i = 0; i < all.length; i++) {
                        all[i].removeAttribute("aria-hidden");
                    }

                    // Restore focus to the last element that had it
                    if (document.querySelector(".last-focus")) {
                        var target = document.querySelector(".last-focus");
                        target.classList.remove("last-focus");
                        target.focus();
                    }
                }
            }
            if (eventElement == modal) {
                modal.classList.toggle("wsu-modal__closed");
                document.body.classList.toggle("modal-open");
            }
        } catch (error) {
            console.error(error);
        }
    }

    keyDownEvents(event) {
        const KEYCODE_TAB = 9;
        const KEYCODE_ESCAPE = 27;
        let modal = document.querySelector(".wsu-modal");

        try {
            if (event.code === "Escape" || event.keyCode === KEYCODE_ESCAPE) {
                if (document.body.classList.contains("modal-open")) {
                    modal.classList.toggle("wsu-modal__closed");
                    document.body.classList.toggle("modal-open");
                    modal.setAttribute("aria-modal", "false");

                    // Restore the background page by removing ARIA
                    var all = document.querySelectorAll("button#modal-open,input");
                    for (var i = 0; i < all.length; i++) {
                        all[i].removeAttribute("aria-hidden");
                    }

                    // Restore focus to the last element that had it
                    if (document.querySelector(".last-focus")) {
                        var target = document.querySelector(".last-focus");
                        target.classList.remove("last-focus");
                        target.focus();
                    }
                }
            }

            // Gather all focusable elements in a list
            var query =
                "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='email']:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]), [tabindex='0']";
            var focusableEls = modal.querySelectorAll(query);
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];

            // Add the key listener to the modal container to listen for Tab, Enter and Escape
            modal.addEventListener("keydown", function (e) {
                var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;
                var isEscPressed = e.key === "Escape" || e.keyCode === KEYCODE_ESCAPE;

                // Define behaviour for Tab or Shift+Tab
                if (isTabPressed) {
                    // Shift+Tab
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    }

                    // Tab
                    else {
                        if (document.activeElement === lastFocusableEl) {
                            firstFocusableEl.focus();
                            e.preventDefault();
                        }
                    }
                }

                // Define behaviour for Escape
                if (isEscPressed) {
                    modal.querySelector("button.wsu-modal__close-button").click();
                }
            });
        } catch (error) {
            console.error(error);
        }
    }
}

export default WsuModal;
