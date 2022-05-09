(()=>{"use strict";var e=function(e){var t=e.parent,n=void 0!==t&&t,i=e.elementClass,a=void 0!==i&&i;if(a){var s=n?n.getElementsByClassName(a):document.getElementsByClassName(a);return 0<s.length&&s[0]}return!1},t=function(e){var t=e.wrapper,n=void 0!==t&&t,a=(e.isAnimated,e.actionPrefix),r=void 0!==a&&a;e.ariaLabelElement,n&&(o(e,!0),i(e),s(e,!0),n.setAttribute("aria-expanded",!0),r&&(n.classList.add(r+"--openned"),n.classList.remove(r+"--closed")),i(e))},n=function(e){var t=e.wrapper,n=void 0!==t&&t,a=(e.isAnimated,e.actionPrefix),r=void 0!==a&&a;e.ariaLabelElement,n&&(o(e,!1),i(e),s(e,!1),r&&(n.classList.add(r+"--closed"),n.classList.remove(r+"--openned")),n.setAttribute("aria-expanded",!1),i(e))},i=function(e){var t=e.wrapper,n=void 0!==t&&t,i=e.animatedDuration,a=void 0===i?300:i,s=e.animateClass,o=void 0===s?"wsu-animating":s,r=e.isAnimated,l=void 0===r||r,c=e.animateHeight,u=void 0!==c&&c,d=e.childElement,v=void 0!==d&&d;if(l&&n)return n.classList.contains(o)?setTimeout((function(){n.classList.remove(o),u&&v&&(v.style.maxHeight="")}),a):(n.classList.add(o),!1)},a=function(e){var t=e.eventElement,n=void 0!==t&&t,i=e.clickClass,a=void 0!==i&&i,s=e.checkParent,o=void 0!==s&&s,r=e.checkSibling,l=void 0!==r&&r,c=e.checkEmptyLink,u=void 0!==c&&c;return!!(a&&n.classList.contains(a)||u&&n.hasAttribute("href")&&"#"===n.getAttribute("href")||o&&n.parentElement.classList.contains(a)||l&&n.nextElementSibling.classList.contains(a))},s=function(e,t){var n=e.expandedText,i=void 0===n?"Close":n,a=e.collapsedText,s=void 0===a?"Open":a,o=e.ariaLabelElement,r=void 0!==o&&o;if(console.log(e),r&&r.hasAttribute("aria-label")){var l=r.getAttribute("aria-label"),c=t?i:s,u=new RegExp(i+"|"+s,"g");console.log(u),l=l.replace(u,c),r.setAttribute("aria-label",l)}},o=function(e,t){var n=e.childElement,i=void 0!==n&&n,a=e.animateHeight,s=void 0!==a&&a,o=e.heightPadding,r=void 0===o?20:o;if(i&&s){var l=i.scrollHeight+r+"px";i.style.maxHeight=l,t||setTimeout((function(){i.style.maxHeight=0}),25)}};function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const c=function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,i),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-navigation-site",this.closeClass=e.hasOwnProperty("closeClass")?e.closeClass:"wsu-navigation-site--close",this.openClass=e.hasOwnProperty("openClass")?e.openClass:"wsu-navigation-site--open",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-navigation-site--toggle",this.animatingClass=e.hasOwnProperty("animatingClass")?e.animatingClass:"wsu-animating",this.animationTiming=e.hasOwnProperty("animationTiming")?e.animationTiming:300,this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-navigation-site",this.timer=!1,this.init()}var s,o;return s=i,(o=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(i){try{var s=i.target;if(a({eventElement:s,clickClass:this.closeClass,checkParent:!0})){i.preventDefault();var o=e({elementClass:this.wrapperClass});o&&n({wrapper:o,actionPrefix:this.actionPrefix})}if(a({eventElement:s,clickClass:this.openClass,checkParent:!0})){i.preventDefault();var r=e({elementClass:this.wrapperClass});r&&t({wrapper:r,actionPrefix:this.actionPrefix})}if(a({eventElement:s,clickClass:this.toggleClass,checkParent:!0})){i.preventDefault();var l=e({elementClass:this.wrapperClass});l&&function(e){var i=e.wrapper,a=void 0!==i&&i,s=e.toggleByClass,o=void 0!==s&&s;a&&(o?a.classList.contains(o)?n(e):t(e):a.getAttribute("aria-expanded")&&"false"!=a.getAttribute("aria-expanded")?n(e):t(e))}({wrapper:l,toggleByClass:this.actionPrefix+"--openned",actionPrefix:this.actionPrefix,ariaLabelElement:s})}}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(t){try{(function(e){var t=e.domEvent,n=void 0!==t&&t,i=e.key,a=void 0!==i&&i,s=e.inClass,o=void 0!==s&&s;if(!n||!a)return!1;var r=n.target;return!(a!==n.key||!Element.prototype.closest)&&(!(!o||!r.closest("."+o))||void 0)})({domEvent:t,key:"Escape",inClass:this.wrapperClass})&&n({wrapper:e({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:e({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}}])&&l(s.prototype,o),Object.defineProperty(s,"prototype",{writable:!1}),i}();var u=function(e){var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",setTimeout((function(){e.setAttribute("aria-expanded",!1)}),15),setTimeout((function(){t.style.maxHeight=""}),500)},d=function(e){var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",e.setAttribute("aria-expanded",!0),setTimeout((function(){t.style.maxHeight=""}),500)},v=function(e){return!e.hasAttribute("aria-expanded")||"false"==e.getAttribute("aria-expanded")||!1},p=function(e,t){document.querySelectorAll(t).forEach((function(t,n){if(t.hasAttribute("aria-label")){var i="Open"==e?/Open/i:/Close/i,a="Open"==e?"Close":"Open",s=t.getAttribute("aria-label");t.setAttribute("aria-label",s.replace(i,a))}}))},h=function(e,t){if(e.hasAttribute("aria-label")){var n="open"==t?/Open/i:/Close/i,i="open"==t?"Close":"Open",a=e.getAttribute("aria-label");e.setAttribute("aria-label",a.replace(n,i))}};function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const g=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target,n=e.target.parentElement;t.classList.contains("wsu-menu-expand--toggle")&&h(t,function(e){return v(e)?(d(e),"open"):(u(e),"close")}(n)),t.classList.contains("wsu-menu-expand--down")&&(wsuMenuExpandDown(n),h(t,"open")),t.classList.contains("wsu-menu-expand--up")&&(wsuMenuExpandDown(n),h(t,"close"))}catch(e){console.error(e)}}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var m=function(e,t){e.hasAttribute("aria-expanded")&&e.setAttribute("aria-expanded",t)};function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const b=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.openClass="wsu-accordion--open",this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;if(t.classList.contains("wsu-accordion--toggle")){var n=t.closest(".wsu-accordion"),i=n.querySelector(".wsu-accordion__content");(a=t).hasAttribute("aria-expanded")&&"true"==a.getAttribute("aria-expanded")?(m(t,!1),function(e,t){var n=t.duration,i=void 0===n?300:n,a=t.extra,s=void 0===a?"20":a;e.style.maxHeight=e.scrollHeight+parseInt(s)+"px",setTimeout((function(){e.style.maxHeight="0"}),15),setTimeout((function(){e.style.maxHeight=""}),i)}(i,{}),function(e,t){e.classList.remove(t)}(n,this.openClass)):(m(t,!0),function(e,t){var n=t.duration,i=void 0===n?300:n,a=t.extra,s=void 0===a?"20":a;e.style.maxHeight=e.scrollHeight+parseInt(s)+"px",setTimeout((function(){e.style.maxHeight=""}),i)}(i,{}),function(e,t){e.classList.add(t)}(n,this.openClass))}}catch(e){console.error(e)}var a}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var w=function(e){if(e){e.style.display="block";var t=e.scrollHeight;return e.style.display="",t}return 0};function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k(this,t),this.wrapperClass=e.hasOwnProperty("wrapperClass")?e.wrapperClass:"wsu-collapsable",this.toggleClass=e.hasOwnProperty("toggleClass")?e.toggleClass:"wsu-collapsable--toggle",this.contentClass=e.hasOwnProperty("contentClass")?e.contentClass:"wsu-collapsable--content",this.actionPrefix=e.hasOwnProperty("actionPrefix")?e.actionPrefix:"wsu-collapsable",this.init()}var n,i;return n=t,(i=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1)}},{key:"clickEvents",value:function(t){try{var n=t.target;if(a({eventElement:n,clickClass:this.toggleClass,checkParent:!0})){t.preventDefault();var i=function(e,t){return!!e&&e.closest("."+t)}(n,this.wrapperClass),s=e({parent:i,elementClass:this.contentClass});i&&function(e){var t=e.element,n=void 0!==t&&t,i=e.heightPadding,a=void 0===i?20:i,s=e.timing,o=void 0===s?150:s,r=e.ariaElement,l=void 0!==r&&r;if(n)if(n.scrollHeight<10){n.classList.add("wsu-animating");var c=w(n);n.style.maxHeight=c+a+"px",setTimeout((function(){l&&l.setAttribute("aria-expanded","true"),n.classList.remove("wsu-animating"),n.style.maxHeight=""}),o)}else{n.classList.add("wsu-animating");var u=w(n);n.style.maxHeight=u+a+"px",setTimeout((function(){n.style.maxHeight=0}),25),setTimeout((function(){l&&l.setAttribute("aria-expanded","false"),n.classList.remove("wsu-animating"),n.style.maxHeight=""}),o)}}({element:s,ariaElement:i})}}catch(e){console.error(e)}}}])&&E(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(),x=function(e,t){if(t.hasAttribute("aria-label")){var n="Open"==e?/Open/i:/Close/i,i="Open"==e?"Close":"Open",a=t.getAttribute("aria-label");t.setAttribute("aria-label",a.replace(n,i))}};function L(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const P=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;if(t.classList.contains("wsu-menu--toggle")){var n=e.target.parentElement;this.shouldClose(n)?(this.close(n),x("Close",t)):(this.open(n),x("Open",t))}if(t.classList.contains("wsu-menu--submenu-close")){var i=t.parentElement.parentElement.closest("li");this.shouldClose(i)&&(this.close(i),x("Close",t))}}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(e){try{keyDownEvent({domEvent:e,key:"Escape",inClass:this.wrapperClass})&&toggleAriaExpandedClose({wrapper:elementGet({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:elementGet({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}},{key:"open",value:function(e){this.closeSiblings(e);var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",t.classList.add("wsu-animate--slide-down"),e.setAttribute("aria-expanded",!0),this.timer=setTimeout((function(){t.style.maxHeight="",t.classList.remove("wsu-animate--slide-down")}),500)}},{key:"close",value:function(e){var t=e.lastElementChild;t.style.maxHeight=t.scrollHeight+20+"px",setTimeout((function(){t.classList.add("wsu-animate--slide-up"),e.setAttribute("aria-expanded",!1)}),15),this.timer=setTimeout((function(){t.style.maxHeight="",t.classList.remove("wsu-animate--slide-up")}),500)}},{key:"closeSiblings",value:function(e){var t=this;(function(e){for(var t=[],n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t})(e).forEach((function(e){t.shouldClose(e)&&t.close(e)}))}},{key:"shouldClose",value:function(e){return e.hasAttribute("aria-expanded")&&"true"==e.getAttribute("aria-expanded")||!1}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const O=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;t.classList.contains("wsu-navigation-site-vertical--toggle")&&(this.shouldClose()?(this.close(t),p("Close",".wsu-navigation-site-vertical--toggle")):(this.open(t),p("Open",".wsu-navigation-site-vertical--toggle"))),t.classList.contains("wsu-navigation-site-vertical--open")&&this.open(t),t.classList.contains("wsu-navigation-site-vertical--close")&&this.close(t)}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(e){try{keyDownEvent({domEvent:e,key:"Escape",inClass:this.wrapperClass})&&toggleAriaExpandedClose({wrapper:elementGet({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:elementGet({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}},{key:"open",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-vertical")[0]||!1;e&&(e.setAttribute("aria-expanded",!0),document.body.classList.add("wsu-navigation-site-vertical--is-open"),document.body.classList.remove("wsu-navigation-site-vertical--is-closed"),p("Open",".wsu-navigation-site-vertical--toggle"))}},{key:"close",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-vertical")[0]||!1;e&&(e.setAttribute("aria-expanded",!1),document.body.classList.remove("wsu-navigation-site-vertical--is-open"),document.body.classList.add("wsu-navigation-site-vertical--is-closed"),p("Close",".wsu-navigation-site-vertical--toggle"),setTimeout((function(){window.dispatchEvent(new Event("resize"))}),300))}},{key:"shouldClose",value:function(){return document.getElementsByClassName(".wsu-navigation-site-vertical")[0],document.body.classList.contains("wsu-navigation-site-vertical--is-open")||!1}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const T=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.timer=!1,this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){document.addEventListener("click",this.clickEvents.bind(this),!1),document.addEventListener("keydown",this.keyDownEvents.bind(this),!1)}},{key:"clickEvents",value:function(e){try{var t=e.target;t.classList.contains("wsu-navigation-site-horizontal--toggle")&&(this.shouldClose()?(this.close(t),p("Close",".wsu-navigation-site-horizontal--toggle")):(this.open(t),p("Open",".wsu-navigation-site-horizontal--toggle"))),t.classList.contains("wsu-navigation-site-horizontal--open")&&this.open(t),t.classList.contains("wsu-navigation-site-horizontal--close")&&this.close(t)}catch(e){console.error(e)}}},{key:"keyDownEvents",value:function(e){try{keyDownEvent({domEvent:e,key:"Escape",inClass:this.wrapperClass})&&toggleAriaExpandedClose({wrapper:elementGet({elementClass:this.wrapperClass}),actionPrefix:this.actionPrefix,ariaLabelElement:elementGet({elementClass:"wsu-navigation-site--toggle"})})}catch(e){console.error(e)}}},{key:"open",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-horizontal")[0]||!1;console.log(e),e&&(e.setAttribute("aria-expanded",!0),document.body.classList.add("wsu-navigation-site-horizontal--is-open"),document.body.classList.remove("wsu-navigation-site-horizontal--is-closed"),p("Open",".wsu-navigation-site-horizontal--toggle"))}},{key:"close",value:function(){var e=document.getElementsByClassName("wsu-navigation-site-horizontal")[0]||!1;e&&(e.setAttribute("aria-expanded",!1),document.body.classList.remove("wsu-navigation-site-horizontal--is-open"),document.body.classList.add("wsu-navigation-site-horizontal--is-closed"),p("Close",".wsu-navigation-site-horizontal--toggle"))}},{key:"shouldClose",value:function(){return document.getElementsByClassName("wsu-navigation-horizontal")[0],document.body.classList.contains("wsu-navigation-site-horizontal--is-open")||!1}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const B=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.bassClass="wsu-video-frame",this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.setVideoSize(),this.bindEvents()}},{key:"bindEvents",value:function(){var e=this;document.addEventListener("click",(function(t){e.clickEvents(t)}),!1),window.addEventListener("resize",(function(){e.resize()}),!1)}},{key:"resize",value:function(){try{this.setVideoSize()}catch(e){console.error(e)}}},{key:"clickEvents",value:function(e){try{e.target.classList.contains("wsu-video-frame--action-play")&&this.playVideo(e.target.parentElement),(e.target.classList.contains(this.bassClass+"--action-pause-background")||e.target.classList.contains(this.bassClass+"--action-play-background"))&&this.toggleBackgroundVideo(e.target),e.target.classList.contains("wsu-video-frame--action-toggle-background")&&this.pauseBackgroundVideo(e.target.parentElement)}catch(e){console.error(e)}}},{key:"playVideo",value:function(e){if(!e.hasAttribute("data-play"))return!1;var t=e.getElementsByClassName("wsu-video-frame__video-background");if(t.length){t=t[0];var n=e.dataset.play;t.setAttribute("src",n),t.classList.add("wsu-video-frame__video"),t.classList.remove("wsu-video-frame__video-background")}}},{key:"pauseBackgroundVideo",value:function(e){var t=e.getElementsByClassName("wsu-video-frame__video-background");t.length&&(t=t[0],new Vimeo.Player(t).pause())}},{key:"toggleBackgroundVideo",value:function(e){var t=e.parentElement.getElementsByClassName(this.bassClass+"__video-background");if(t.length){var n=new Vimeo.Player(t[0]);e.classList.contains(this.bassClass+"--action-pause-background")?(e.classList.remove(this.bassClass+"--action-pause-background"),e.classList.add(this.bassClass+"--action-play-background"),n.pause()):(e.classList.add(this.bassClass+"--action-pause-background"),e.classList.remove(this.bassClass+"--action-play-background"),n.play())}else console.log("WSU Video Frame: Video Not Found")}},{key:"setVideoSize",value:function(){var e=this,t=document.getElementsByClassName("wsu-video-frame__video-background");t.length>0&&Array.from(t).forEach((function(t){var n=t.parentElement;e.isWideVideo(n)?(t.style.width="100%",t.style.height=.5625*(n.offsetWidth+260)+"px"):(t.style.height="100%",t.style.width=n.offsetHeight/.5625+"px")}))}},{key:"isWideVideo",value:function(e){return.5625*e.offsetWidth>e.offsetHeight}},{key:"keyDownEvents",value:function(e){}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const j=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){this.bindEvents()}},{key:"bindEvents",value:function(){var e=this;document.addEventListener("click",(function(t){e.clickEvents(t)}),!1)}},{key:"clickEvents",value:function(e){try{e.target.classList.contains("wsu-button-pause-background")&&this.toggleActiveButton(e.target,"wsu-button-pause-background",["Pause","Play"])}catch(e){console.error(e)}}},{key:"toggleActiveButton",value:function(e,t,n){var i=t+"--active",a=!!e.hasAttribute("aria-label")&&e.getAttribute("aria-label");e.classList.contains(i)?(e.classList.remove(i),a&&(a=a.replace(n[1],n[0]),e.setAttribute("aria-label",a))):(e.classList.add(i),a&&(a=a.replace(n[0],n[1]),e.setAttribute("aria-label",a)))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();new c,new O,new T,new g,new b,new C,new P,new j,new B})();
//# sourceMappingURL=wsu-design-system.js.map