import {
  wsuAriaExpanded,
  wsuAriaIsExpanded,
  wsuClassAdd,
  wsuClassRemove,
  wsuAnimateSlideDown,
  wsuAnimateSlideUp,
} from '../../../_assets/js/partials/wsuPartials';

class WsuTabs {
  constructor( atts = {} ) {

    this.timer = false;
    this.openClass = 'wsu-tabs--open';
		this.closedPanel = 'hidden';
    this.showMobile = 'show-mobile';

    this.init();

  }

  init() {

    this.tabIds();

		if ( !this.checkMobile() ) {
			this.bindEvents();
		} else {
			this.tabsDesktop();
		}

  }

  tabIds() {
    var wsuTabs = document.querySelectorAll(".wsu-tabs");

    if ( wsuTabs.length > 0 ) {
      wsuTabs.forEach((tabs, index) => {
        tabs.setAttribute("data-tab", `wsu-tabs-${index}`);
      });
    }
  }

  bindEvents() {
		document.addEventListener(
			'click',
			this.accordionClicks.bind( this ),
			false
		);

    document.addEventListener(
      'keydown',
      this.accKeyEvents.bind( this ),
      false
    );
	}

  accordionClicks ( event ) {
    try {
				let eventElement = event.target;

				if ( eventElement.classList.contains( 'wsu-accordion--toggle' ) ) {

					let accordionElement = eventElement.closest('.wsu-tabs__panel-inner');
					let accordionContent = accordionElement.querySelector('.wsu-tabs__content');

					if ( wsuAriaIsExpanded( eventElement ) ) {
            wsuAriaExpanded( eventElement, false );
            wsuAnimateSlideUp( accordionContent, {} );
            wsuClassRemove( accordionElement, this.openClass );
            wsuClassAdd( accordionContent, this.closedPanel );
            wsuClassRemove( accordionContent, 'show-mobile' );

					} else {
						wsuAriaExpanded( eventElement, true );
						wsuAnimateSlideDown( accordionContent, {} );
						wsuClassAdd( accordionElement, this.openClass );
						wsuClassRemove( accordionContent, this.closedPanel );
            wsuClassAdd( accordionContent, 'show-mobile' );
            wsuClassRemove( accordionContent, 'show-desktop' );
					}

          //Tracking for desktop tabs with mobile clicks
          var wsuTabs = document.querySelectorAll(".wsu-tabs");
          let activeDesktop = eventElement.getAttribute("aria-controls");
          let parentTab = eventElement.closest('.wsu-tabs');

          if ( wsuTabs.length > 0 ) {
            let desktopTabs = parentTab.querySelectorAll(".wsu-tabs__button-desktop");
            let panelContent = parentTab.querySelectorAll(".wsu-tabs__content");

            desktopTabs.forEach(function(tab) {
              if ( tab.getAttribute("aria-controls") === activeDesktop ) {
                tab.setAttribute("aria-selected", true);
              } else {
                tab.setAttribute("aria-selected", false);
              }
            });

            panelContent.forEach(function(panel) {
              if ( panel.getAttribute("id") === activeDesktop ) {
                wsuClassAdd( panel, "last-clicked" );
                wsuClassAdd( panel, 'show-desktop' );
              } else {
                wsuClassRemove( panel, "last-clicked" );
                wsuClassRemove( panel, 'show-desktop' );
              }
            });
          }
				}

				if ( eventElement.classList.contains( 'wsu-tabs__button-desktop' ) ) {
					this.tabsDesktop();
				}


    } catch (error) {
		  console.error(error);
		}

  }

  // Arrow keys (up/down) navigation on mobile only
  accKeyEvents() {
    var wsuTabs = document.querySelectorAll(".wsu-tabs");

    if ( wsuTabs.length > 0 ) {
      wsuTabs.forEach((accTab) => {
        var accButtons = accTab.querySelectorAll(".wsu-accordion__title-button");

        var keys = {
          end: 35,
          home: 36,
          up: 38,
          down: 40,
        };

        var direction = {
          37: -1,
          38: -1,
          39: 1,
          40: 1,
        };

        // Bind listeners
        for (var i = 0; i < accButtons.length; ++i) {
          addListeners(i);
        }

        function addListeners(index) {
          accButtons[index].addEventListener('keydown', keydownEventListener);
          accButtons[index].addEventListener('keyup', keyupEventListener);

          // Build an array with all tabs (<button>s) in it
          accButtons[index].index = index;
        }

        function keydownEventListener(eventElement) {
          var key = eventElement.keyCode;

          switch (key) {
            case keys.up:
            case keys.down:
              eventElement.preventDefault();
              break;
          }
        }

        function keyupEventListener(event) {
          var key = event.keyCode;

          switch (key) {
            case keys.up:
            case keys.down:
              switchTabOnArrowPress(event);
              break;
          }
        }

        function switchTabOnArrowPress(event) {
          var pressed = event.keyCode;

          if (direction[pressed]) {
            var target = event.target;
            if (target.index !== undefined) {
              if (accButtons[target.index + direction[pressed]]) {
                accButtons[target.index + direction[pressed]].focus();
              } else if (pressed === keys.left || pressed === keys.up) {
                accButtons[accButtons.length - 1].focus();
              } else if (pressed === keys.right || pressed == keys.down) {
                accButtons[0].focus();
              }
            }
          }
        }
      });

    }
  }

  tabsDesktop() {
    var wsuTabs = document.querySelectorAll(".wsu-tabs");

    if ( wsuTabs.length > 0 ) {
      wsuTabs.forEach((tabs) => {

        var tabButtons = tabs.querySelectorAll(".wsu-tabs__button-desktop");
        var tabPanels = tabs.querySelectorAll(".wsu-tabs__content");

        // Accordion buttons on mobile
        var accButtons = tabs.querySelectorAll(".wsu-accordion__title-button");

        if ( tabButtons.length > 0 ) {
          var keys = {
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
          };

          var direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1,
          };

          // Bind listeners
          for (var i = 0; i < tabButtons.length; ++i) {
            addListeners(i);
          }

          function addListeners(index) {
            tabButtons[index].addEventListener('click', clickEventListener);
            tabButtons[index].addEventListener('keydown', keydownEventListener);
            tabButtons[index].addEventListener('keyup', keyupEventListener);

            // Build an array with all tabs (<button>s) in it
            tabButtons[index].index = index;
          }

          // When a tab is clicked, activateTab is fired to activate it
          function clickEventListener(eventElement) {
            var tab = eventElement.target;
            activateTab(tab, false);
          }

          // Handle keydown on tabs
          function keydownEventListener(eventElement) {
            var key = eventElement.keyCode;

            switch (key) {
              case keys.end:
                eventElement.preventDefault();
                activateTab(tabButtons[tabButtons.length - 1]);
                break;
              case keys.home:
                eventElement.preventDefault();
                activateTab(tabButtons[0]);
                break;
            }
          }

          // Handle keyup on tabs
          function keyupEventListener(eventElement) {
            var key = eventElement.keyCode;

            switch (key) {
              case keys.left:
              case keys.right:
                switchTabOnArrowPress(eventElement);
                break;
            }
          }

          function activateTab(tab, setFocus) {
            setFocus = setFocus || true;

            deactivateTabs();
            activateAccordion();

            tab.setAttribute('aria-selected', 'true');

            var panelId = tab.getAttribute("aria-controls");
            let panel = document.getElementById(panelId);
            panel.classList.remove("hidden");
            panel.classList.add("show-desktop");

            var accTitle = panel.closest(".wsu-tabs__panel-inner");
            accTitle.classList.add("wsu-tabs--open");

            if (setFocus) {
              tab.focus();
            }
          }

          // Deactivate all tabs and tab panels
          function deactivateTabs() {
            tabButtons.forEach(function(tab) {
              tab.setAttribute("aria-selected", "false");
            });

            tabPanels.forEach(function(panel) {
              panel.classList.add("hidden");
              panel.classList.remove("show-mobile");
              panel.classList.remove("show-desktop");
              panel.classList.remove("last-clicked");

              var accTitle = panel.closest(".wsu-tabs__panel-inner");
              if ( accTitle.classList.contains("wsu-tabs--open") ) {
                accTitle.classList.remove("wsu-tabs--open");
              }
            });
          }

          // Activate mobile accordions
          function activateAccordion() {
            accButtons.forEach(function(accButton) {
              if ( accButton.getAttribute("aria-expanded") === "false" ) {
                accButton.setAttribute("aria-expanded", "true");
              } else {
                accButton.setAttribute("aria-expanded", "false");
              }
            });
          }

          // Either focus the next, previous, first, or last tab
          // depending on key pressed
          function switchTabOnArrowPress(eventElement) {
            var pressed = eventElement.keyCode;

            for (var i = 0; i < tabButtons.length; i++) {
              tabButtons[i].addEventListener('focus', checkTabFocus);
            }

            if (direction[pressed]) {
              var target = eventElement.target;
              if (target.index !== undefined) {
                if (tabButtons[target.index + direction[pressed]]) {
                  tabButtons[target.index + direction[pressed]].focus();
                } else if (pressed === keys.left || pressed === keys.up) {
                  focusLastTab();
                } else if (pressed === keys.right || pressed == keys.down) {
                  focusFirstTab();
                }
              }
            }
          }

          function focusFirstTab() {
            tabButtons[0].focus();
          }

          function focusLastTab() {
            tabButtons[tabButtons.length - 1].focus();
          }

          function checkTabFocus(target) {
            var focused = document.activeElement;

            if (target === focused) {
              activateTab(target, false);
            }
          }
        }
      });
    }
  }

  checkMobile() {
    let tablist = document.querySelector(".wsu-tabs__tablist");

		let tablistDisplay = window.getComputedStyle(tablist);

    if ( !tablistDisplay.getPropertyValue('display') === "none" ) {
			this.tabsDesktop();
		}
  }

}

export default WsuTabs;
