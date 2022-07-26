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

                    ariaUpdate("Close", ".wsu-mobile-menu--toggle");
                } else {
                    this.open(eventElement);

                    ariaUpdate("Open", ".wsu-mobile-menu--toggle");
                }
            }

            // Open Action
            if (eventElement.classList.contains("wsu-mobile-menu--open")) {
                this.open(eventElement);
            }

            // Close Action
            if (eventElement.classList.contains("wsu-mobile-menu--close")) {
                this.close(eventElement);
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
