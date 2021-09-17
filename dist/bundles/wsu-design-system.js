(()=>{"use strict";var e=function(e){var t=e.parent,n=void 0!==t&&t,i=e.elementClass,s=void 0!==i&&i;if(s){var a=n?n.getElementsByClassName(s):document.getElementsByClassName(s);return 0<a.length&&a[0]}return!1},t=function(e,t){return!!e&&e.closest("."+t)},n=function(e){var t=e.wrapper,n=void 0!==t&&t,a=e.toggleByClass,l=void 0!==a&&a;n&&(l?n.classList.contains(l)?s(e):i(e):n.getAttribute("aria-expanded")&&"false"!=n.getAttribute("aria-expanded")?s(e):i(e))},i=function(e){var t=e.wrapper,n=void 0!==t&&t,i=(e.isAnimated,e.actionPrefix),s=void 0!==i&&i;e.ariaLabelElement,n&&(r(e,!0),a(e),o(e,!0),n.setAttribute("aria-expanded",!0),s&&(n.classList.add(s+"--openned"),n.classList.remove(s+"--closed")),a(e))},s=function(e){var t=e.wrapper,n=void 0!==t&&t,i=(e.isAnimated,e.actionPrefix),s=void 0!==i&&i;e.ariaLabelElement,n&&(r(e,!1),a(e),o(e,!1),s&&(n.classList.add(s+"--closed"),n.classList.remove(s+"--openned")),n.setAttribute("aria-expanded",!1),a(e))},a=function(e){var t=e.wrapper,n=void 0!==t&&t,i=e.animatedDuration,s=void 0===i?300:i,a=e.animateClass,l=void 0===a?"wsu-animating":a,o=e.isAnimated,r=void 0===o||o,c=e.animateHeight,u=void 0!==c&&c,h=e.childElement,v=void 0!==h&&h;if(r&&n)return n.classList.contains(l)?setTimeout((function(){n.classList.remove(l),u&&v&&(v.style.maxHeight="")}),s):(n.classList.add(l),!1)},l=function(e){var t=e.eventElement,n=void 0!==t&&t,i=e.clickClass,s=void 0!==i&&i,a=e.checkParent,l=void 0!==a&&a,o=e.checkSibling,r=void 0!==o&&o,c=e.checkEmptyLink,u=void 0!==c&&c;return!!(s&&n.classList.contains(s)||u&&n.hasAttribute("href")&&"#"===n.getAttribute("href")||l&&n.parentElement.classList.contains(s)||r&&n.nextElementSibling.classList.contains(s))},o=function(e,t){var n=e.expandedText,i=void 0===n?"Close":n,s=e.collapsedText,a=void 0===s?"Open":s,l=e.ariaLabelElement,o=void 0!==l&&l;if(console.log(e),o&&o.hasAttribute("aria-label")){var r=o.getAttribute("aria-label"),c=t?i:a,u=new RegExp(i+"|"+a,"g");console.log(u),r=r.replace(u,c),o.setAttribute("aria-label",r)}},r=function(e,t){var n=e.childElement,i=void 0!==n&&n,s=e.animateHeight,a=void 0!==s&&s,l=e.heightPadding,o=void 0===l?20:l;if(i&&a){var r=i.scrollHeight+o+"px";i.style.maxHeight=r,t||setTimeout((function(){i.style.maxHeight=0}),25)}};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,t),this.baseClass=e.hasOwnProperty("baseClass")?e.baseClass:"wsu-menu-toggle",this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:this.baseClass,this.closeClass=e.hasOwnProperty("closeClass")?e.closeClass:this.baseClass+"--close",this.openClass=e.hasOwnProperty("openClass")?e.openClass:this.baseClass+"--open",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:this.baseClass+"--toggle",this.animatingClass=e.hasOwnProperty("animatingClass")?e.animatingClass:"wsu-animating",this.animationTiming=e.hasOwnProperty("animationTiming")?e.animationTiming:300,this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:this.baseClass,this.toggleHeight=!e.hasOwnProperty("toggleHeight")||e.toggleHeight,this.timer=!1,this.init()}var i,s;return i=t,(s=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(t){try{var i=t.target,s=l({eventElement:i,clickClass:this.toggleClass,checkParent:!0}),a=l({eventElement:i,checkEmptyLink:!0})&&l({eventElement:i,checkSibling:!0,clickClass:this.toggleClass});if(console.log(s),console.log(a),s||a){t.preventDefault();var o=t.target.parentElement;if(o){var r=o.getElementsByTagName("ul")[0];n({wrapper:o,toggleByClass:this.actionPrefix+"--openned",childElement:r,actionPrefix:this.actionPrefix,animateHeight:!0,ariaLabelElement:i})}}if(l({eventElement:i,checkEmptyLink:!0})&&l({eventElement:i,checkSibling:!0,clickClass:this.toggleClass})){t.preventDefault();var c=e({elementClass:this.wrapperClass});c&&n({wrapper:c,toggleByClass:this.actionPrefix+"--openned",actionPrefix:this.actionPrefix,ariaLabelElement:i})}}catch(e){console.error(e)}}}])&&u(i.prototype,s),t}();var v=function(e){var t=e.domEvent,n=void 0!==t&&t,i=e.key,s=void 0!==i&&i,a=e.inClass,l=void 0!==a&&a;if(!n||!s)return!1;var o=n.target;return!(s!==n.key||!Element.prototype.closest)&&(!(!l||!o.closest("."+l))||void 0)};function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,t),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-navigation-site",this.closeClass=e.hasOwnProperty("closeClass")?e.closeClass:"wsu-navigation-site--close",this.openClass=e.hasOwnProperty("openClass")?e.openClass:"wsu-navigation-site--open",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-navigation-site--toggle",this.animatingClass=e.hasOwnProperty("animatingClass")?e.animatingClass:"wsu-animating",this.animationTiming=e.hasOwnProperty("animationTiming")?e.animationTiming:300,this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-navigation-site",this.timer=!1,this.init()}var a,o;return a=t,(o=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(t){try{var a=t.target;if(l({eventElement:a,clickClass:this.closeClass,checkParent:!0})){t.preventDefault();var o=e({elementClass:this.wrapperClass});o&&s({wrapper:o,actionPrefix:this.actionPrefix})}if(l({eventElement:a,clickClass:this.openClass,checkParent:!0})){t.preventDefault();var r=e({elementClass:this.wrapperClass});r&&i({wrapper:r,actionPrefix:this.actionPrefix})}if(l({eventElement:a,clickClass:this.toggleClass,checkParent:!0})){t.preventDefault();var c=e({elementClass:this.wrapperClass});c&&n({wrapper:c,toggleByClass:this.actionPrefix+"--openned",actionPrefix:this.actionPrefix,ariaLabelElement:a})}}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(t){try{v({domEvent:t,key:"Escape",inClass:this.wrapperClass})&&s({wrapper:e({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:e({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}}])&&g(a.prototype,o),t}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m(this,t),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-header-global__navigation-menu",this.closeClass=e.hasOwnProperty("closeClass")?e.closeClass:"wsu-header-global__navigation-menu--close",this.openClass=e.hasOwnProperty("openClass")?e.openClass:"wsu-header-global__navigation-menu--open",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-header-global__navigation-menu--toggle",this.animatingClass=e.hasOwnProperty("animatingClass")?e.animatingClass:"wsu-animating",this.animationTiming=e.hasOwnProperty("animationTiming")?e.animationTiming:300,this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-header-global__navigation-menu",this.timer=!1,this.init()}var i,a;return i=t,(a=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(t){try{var i=t.target;if(l({eventElement:i,clickClass:this.closeClass,checkParent:!0})){t.preventDefault();var a=e({elementClass:this.wrapperClass});a&&s({wrapper:a,actionPrefix:this.actionPrefix,ariaLabelElement:i})}if(l({eventElement:i,clickClass:this.toggleClass,checkParent:!0})){t.preventDefault();var o=e({elementClass:this.wrapperClass});o&&n({wrapper:o,actionPrefix:this.actionPrefix,ariaLabelElement:i})}}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(t){try{v({domEvent:t,key:"Escape",inClass:this.wrapperClass})&&s({wrapper:e({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:e({elementClass:this.toggleClass})})}catch(e){console.error(e)}}}])&&f(i.prototype,a),t}();var w=function(e){if(e){e.style.display="block";var t=e.scrollHeight;return e.style.display="",t}return 0};const y=function(e){var t=e.element,n=void 0!==t&&t,i=e.heightPadding,s=void 0===i?20:i,a=e.timing,l=void 0===a?150:a,o=e.ariaElement,r=void 0!==o&&o;if(n)if(n.scrollHeight<10){n.classList.add("wsu-animating");var c=w(n);n.style.maxHeight=c+s+"px",setTimeout((function(){r&&r.setAttribute("aria-expanded","true"),n.classList.remove("wsu-animating"),n.style.maxHeight=""}),l)}else{n.classList.add("wsu-animating");var u=w(n);n.style.maxHeight=u+s+"px",setTimeout((function(){n.style.maxHeight=0}),25),setTimeout((function(){r&&r.setAttribute("aria-expanded","false"),n.classList.remove("wsu-animating"),n.style.maxHeight=""}),l)}};function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const k=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,n),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-accordion",this.closeClass=e.hasOwnProperty("closeClass")?e.closeClass:"wsu-accordion--close",this.openClass=e.hasOwnProperty("openClass")?e.openClass:"wsu-accordion--open",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-accordion__title",this.contentClass=e.hasOwnProperty("contentClass")?e.contentClass:"wsu-accordion__content",this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-accordion",this.init()}var i,s;return i=n,(s=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(n){try{var i=n.target;if(l({eventElement:i,clickClass:this.toggleClass,checkParent:!0})){n.preventDefault();var s=t(i,this.wrapperClass),a=e({parent:s,elementClass:this.contentClass});s&&y({element:a,ariaElement:s})}}catch(e){console.error(e)}}}])&&E(i.prototype,s),n}();function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const O=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,n),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-collapsable",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-collapsable--toggle",this.contentClass=e.hasOwnProperty("contentClass")?e.contentClass:"wsu-collapsable--content",this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-collapsable",this.init()}var i,s;return i=n,(s=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(n){try{var i=n.target;if(l({eventElement:i,clickClass:this.toggleClass,checkParent:!0})){n.preventDefault();var s=t(i,this.wrapperClass),a=e({parent:s,elementClass:this.contentClass});s&&y({element:a,ariaElement:s})}}catch(e){console.error(e)}}}])&&x(i.prototype,s),n}();function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(this,e),this.class=t.hasOwnProperty("class")?t.class:"wsu-submenu",this.closeClass=t.hasOwnProperty("closeClass")?t.closeClass:this.class+"--close",this.openClass=t.hasOwnProperty("openClass")?t.openClass:this.class+"--open",this.toggleClass=t.hasOwnProperty("toggleClass")?t.toggleClass:this.class+"--toggle",this.animatingClass=t.hasOwnProperty("animatingClass")?t.animatingClass:"wsu-animating",this.animationTiming=t.hasOwnProperty("animationTiming")?t.animationTiming:300,this.timer=!1,console.log(this),this.class&&this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;t.classList.contains(this.toggleClass)&&this.toggle(t)}catch(e){console.error(e)}}},{key:"toggle",value:function(e){var t=e.parentElement;t.hasAttribute("aria-expanded")&&"true"==t.getAttribute("aria-expanded")?this.close(t):this.open(t)}},{key:"open",value:function(e){this.isAnimating(e),e.setAttribute("aria-expanded",!0)}},{key:"close",value:function(e){this.isAnimating(e),e.setAttribute("aria-expanded",!1)}},{key:"isAnimating",value:function(e){e.classList.add(this.animatingClass),this.timer=setTimeout((function(){e.classList.remove("wsu-animating")}),this.animationTiming)}}])&&A(t.prototype,n),e}(),H=function(e,t){if(t.hasAttribute("aria-label")){var n="Open"==e?/Open/i:/Close/i,i="Open"==e?"Close":"Open",s=t.getAttribute("aria-label");t.setAttribute("aria-label",s.replace(n,i))}};function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const _=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target,n=e.target.parentElement;t.classList.contains("wsu-menu--toggle")&&(this.shouldClose(n)?(this.close(n),H("Close",t)):(this.open(n),H("Open",t)))}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(e){try{keyDownEvent({domEvent:e,key:"Escape",inClass:this.wrapperClass})&&toggleAriaExpandedClose({wrapper:elementGet({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:elementGet({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}},{key:"open",value:function(e){var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",e.setAttribute("aria-expanded",!0),this.timer=setTimeout((function(){t.style.maxHeight=""}),500)}},{key:"close",value:function(e){var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",setTimeout((function(){e.setAttribute("aria-expanded",!1)}),15),this.timer=setTimeout((function(){t.style.maxHeight=""}),500)}},{key:"shouldClose",value:function(e){return e.hasAttribute("aria-expanded")&&"true"==e.getAttribute("aria-expanded")||!1}}])&&D(t.prototype,n),e}(),B=function(e,t){document.querySelectorAll(t).forEach((function(t,n){if(t.hasAttribute("aria-label")){var i="Open"==e?/Open/i:/Close/i,s="Open"==e?"Close":"Open",a=t.getAttribute("aria-label");t.setAttribute("aria-label",a.replace(i,s))}}))};function j(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const N=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;t.classList.contains("wsu-navigation-site-vertical--toggle")&&(this.shouldClose()?(this.close(t),B("Close",".wsu-navigation-site-vertical--toggle")):(this.open(t),B("Open",".wsu-navigation-site-vertical--toggle"))),t.classList.contains("wsu-navigation-site-vertical--open")&&this.open(t),t.classList.contains("wsu-navigation-site-vertical--close")&&this.close(t)}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(e){try{keyDownEvent({domEvent:e,key:"Escape",inClass:this.wrapperClass})&&toggleAriaExpandedClose({wrapper:elementGet({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:elementGet({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}},{key:"open",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-vertical")[0]||!1;e&&(e.setAttribute("aria-expanded",!0),document.body.classList.add("wsu-navigation-site-vertical--is-open"),document.body.classList.remove("wsu-navigation-site-vertical--is-closed"),B("Open",".wsu-navigation-site-vertical--toggle"))}},{key:"close",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-vertical")[0]||!1;e&&(e.setAttribute("aria-expanded",!1),document.body.classList.remove("wsu-navigation-site-vertical--is-open"),document.body.classList.add("wsu-navigation-site-vertical--is-closed"),B("Close",".wsu-navigation-site-vertical--toggle"))}},{key:"shouldClose",value:function(){return document.getElementsByClassName(".wsu-navigation-site-vertical")[0],document.body.classList.contains("wsu-navigation-site-vertical--is-open")||!1}}])&&j(t.prototype,n),e}();new d,new N,new h,new C,new k,new O,new T,new _})();
//# sourceMappingURL=wsu-design-system.js.map