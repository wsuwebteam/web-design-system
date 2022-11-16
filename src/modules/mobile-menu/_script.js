import { ariaUpdate } from "../../../_assets/js/ariaUpdate";

class WsuMobileMenu {
    constructor(atts = {}) {
        this.timer = false;

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

            // Toggle Action
            if (eventElement.classList.contains("wsu-mobile-menu--toggle")) {
                if (this.shouldClose()) {
                    this.close(eventElement);
                    //let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                    //toggleContainer.classList.remove("wsu-mobile-menu__toggle-container-open");
                    ariaUpdate("Close", ".wsu-mobile-menu--toggle");
                } else {
                    this.open(eventElement);
                    //let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                    //toggleContainer.classList.add("wsu-mobile-menu__toggle-container-open");
                    ariaUpdate("Open", ".wsu-mobile-menu--toggle");
                }
            }
            // Open Action
            if (eventElement.classList.contains("wsu-mobile-menu--open")) {
                this.open(eventElement);
                //let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                //toggleContainer.classList.add("wsu-mobile-menu__toggle-container-open");
            }

            // Close Action
            if (eventElement.classList.contains("wsu-mobile-menu--close")) {
                this.close(eventElement);
                //let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                //toggleContainer.classList.remove("wsu-mobile-menu__toggle-container-open");
            }

            //Quicklinks overlay click actions
            /*if (eventElement.classList.contains("wsu-mobile-menu__quicklinks")){
                let quicklinksOverlay = document.getElementsByClassName("wsu-mobile-menu__quicklinks-overlay")[0] || false;
                let quicklinksButton = document.getElementsByClassName("wsu-mobile-menu__quicklinks")[0] || false;

                quicklinksOverlay.classList.toggle("wsu-mobile-menu__quicklinks-overlay-open");
                quicklinksButton.classList.toggle("wsu-mobile-menu__quicklinks-open");
            }
            if (eventElement.classList.contains("wsu-mobile-menu__quicklinks-close")){
                let quicklinksOverlay = document.getElementsByClassName("wsu-mobile-menu__quicklinks-overlay")[0] || false;
                let quicklinksButton = document.getElementsByClassName("wsu-mobile-menu__quicklinks")[0] || false;

                quicklinksOverlay.classList.remove("wsu-mobile-menu__quicklinks-overlay-open");
                quicklinksButton.classList.toggle("wsu-mobile-menu__quicklinks-open");
            }*/
            
        } catch (error) {
            console.error(error);
        }
    }

    keyDownEvents(event) {
        const KEYCODE_TAB = 9;
        const KEYCODE_ESCAPE = 27;
        let mobileMenu = document.querySelector(".wsu-mobile-menu");
        
        try {
            if (event.code === "Escape" || event.keyCode === KEYCODE_ESCAPE) {
                if (document.body.classList.contains("wsu-mobile-menu--is-open")) {
                    document.body.classList.remove("wsu-mobile-menu--is-open");
                    document.body.classList.add("wsu-mobile-menu--is-closed");
                    //let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                    //toggleContainer.classList.remove("wsu-mobile-menu__toggle-container-open");
                }
            }
            // Gather all focusable elements in a list
            var query =
                "a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type='email']:not([disabled]), input[type='text']:not([disabled]), input[type='radio']:not([disabled]), input[type='checkbox']:not([disabled]), select:not([disabled]), [tabindex='0']";
            var focusableEls = mobileMenu.querySelectorAll(query);
            var firstFocusableEl = focusableEls[0];
            var lastFocusableEl = focusableEls[focusableEls.length - 1];

            // Add the key listener to the mobile menu container to listen for Tab, Enter and Escape
            mobileMenu.addEventListener("keydown", function (e) {
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
                            console.log('last focusable el working')
                            e.preventDefault();
                        }
                    }
                }
                // Define behaviour for Escape
                if (isEscPressed) {
                    mobileMenu.querySelector("button.wsu-mobile-menu--close").click();
                    
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    open(eventElement = false) {
        let nav = document.getElementsByClassName("wsu-mobile-menu")[0] || false;

        if (!nav) return;

        nav.setAttribute("aria-expanded", true);

        document.body.classList.add("wsu-mobile-menu--is-open");
        document.body.classList.remove("wsu-mobile-menu--is-closed");
        // Place class on element that triggered event
        // so we know where to restore focus when the modal is closed
        eventElement.classList.add("last-focus");

        // Hide the background page with ARIA
        var all = document.querySelectorAll("button#mobile-menu-open,input");
        for (var i = 0; i < all.length; i++) {
            all[i].setAttribute("aria-hidden", "true");
        }

        ariaUpdate("Open", ".wsu-mobile-menu--toggle");
    }

    close(eventElement = false) {
        let nav = document.getElementsByClassName("wsu-mobile-menu")[0] || false;

        if (!nav) return;

        nav.setAttribute("aria-expanded", false);

        document.body.classList.remove("wsu-mobile-menu--is-open");
        document.body.classList.add("wsu-mobile-menu--is-closed");
        // Restore the background page by removing ARIA
        var all = document.querySelectorAll("button#mobile-menu-open,input");
        for (var i = 0; i < all.length; i++) {
            all[i].removeAttribute("aria-hidden");
        }
        // Restore focus to the last element that had it
        if (document.querySelector(".last-focus")) {
            var target = document.querySelector(".last-focus");
            target.classList.remove("last-focus");
            target.focus();
        }
        ariaUpdate("Close", ".wsu-mobile-menu--toggle");

        const myTimeout = setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 300);
    }

    shouldClose() {
        let nav = document.getElementsByClassName(".wsu-mobile-menu")[0] || false;

        if (!nav) false;

        return document.body.classList.contains("wsu-mobile-menu--is-open") || false;
    }
}

export default WsuMobileMenu;
