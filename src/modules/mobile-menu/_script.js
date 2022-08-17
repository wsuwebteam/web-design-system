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
                    let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                    toggleContainer.classList.remove("wsu-mobile-menu__toggle-container-open");
                    ariaUpdate("Close", ".wsu-mobile-menu--toggle");
                } else {
                    this.open(eventElement);
                    let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                    toggleContainer.classList.add("wsu-mobile-menu__toggle-container-open");
                    ariaUpdate("Open", ".wsu-mobile-menu--toggle");
                }
            }
            // Open Action
            if (eventElement.classList.contains("wsu-mobile-menu--open")) {
                this.open(eventElement);
                let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                toggleContainer.classList.add("wsu-mobile-menu__toggle-container-open");
            }

            // Close Action
            if (eventElement.classList.contains("wsu-mobile-menu--close")) {
                this.close(eventElement);
                let toggleContainer = document.getElementsByClassName("wsu-mobile-menu__toggle-container")[0] || false;
                toggleContainer.classList.remove("wsu-mobile-menu__toggle-container-open");
            }

            //Quicklinks overlay click actions
            if (eventElement.classList.contains("wsu-mobile-menu__quicklinks")){
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
            }
            
        } catch (error) {
            console.error(error);
        }
    }

    keyDownEvents(event) {
        const KEYCODE_ESCAPE = 27;
        try {
            if (event.code === "Escape" || event.keyCode === KEYCODE_ESCAPE) {
                if (document.body.classList.contains("wsu-mobile-menu--is-open")) {
                    document.body.classList.remove("wsu-mobile-menu--is-open");
                    document.body.classList.add("wsu-mobile-menu--is-closed");
                }
            }
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

        ariaUpdate("Open", ".wsu-mobile-menu--toggle");
    }

    close(eventElement = false) {
        let nav = document.getElementsByClassName("wsu-mobile-menu")[0] || false;

        if (!nav) return;

        nav.setAttribute("aria-expanded", false);

        document.body.classList.remove("wsu-mobile-menu--is-open");
        document.body.classList.add("wsu-mobile-menu--is-closed");

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
