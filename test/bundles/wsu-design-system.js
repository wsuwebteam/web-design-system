/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_assets/js/ariaUpdate.js":
/*!**********************************!*\
  !*** ./_assets/js/ariaUpdate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ariaUpdate": () => (/* binding */ ariaUpdate),
/* harmony export */   "ariaUpdateElement": () => (/* binding */ ariaUpdateElement)
/* harmony export */ });
var ariaUpdate = function ariaUpdate(action, selector) {
  var toggles = document.querySelectorAll(selector);
  toggles.forEach(function (element, i) {
    if (element.hasAttribute('aria-label')) {
      var regex = 'Open' == action ? /Open/i : /Close/i;
      var actionLabel = 'Open' == action ? 'Close' : 'Open';
      var label = element.getAttribute('aria-label'); //alert(actionLabel);
      //alert( label.replace( regex, actionLabel ) );

      element.setAttribute('aria-label', label.replace(regex, actionLabel));
    }
  });
};

var ariaUpdateElement = function ariaUpdateElement(element, action) {
  if (element.hasAttribute('aria-label')) {
    var regex = 'open' == action ? /Open/i : /Close/i;
    var actionLabel = 'open' == action ? 'Close' : 'Open';
    var label = element.getAttribute('aria-label');
    element.setAttribute('aria-label', label.replace(regex, actionLabel));
  }
};



/***/ }),

/***/ "./_assets/js/partials/element.js":
/*!****************************************!*\
  !*** ./_assets/js/partials/element.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementGet": () => (/* binding */ elementGet),
/* harmony export */   "elementGetClosest": () => (/* binding */ elementGetClosest),
/* harmony export */   "elementGetSiblings": () => (/* binding */ elementGetSiblings)
/* harmony export */ });
var elementGet = function elementGet(_ref) {
  var _ref$parent = _ref.parent,
      parent = _ref$parent === void 0 ? false : _ref$parent,
      _ref$elementClass = _ref.elementClass,
      elementClass = _ref$elementClass === void 0 ? false : _ref$elementClass;

  if (elementClass) {
    var elements = parent ? parent.getElementsByClassName(elementClass) : document.getElementsByClassName(elementClass);

    if (0 < elements.length) {
      return elements[0];
    } else {
      return false;
    }
  }

  return false;
};

var elementGetClosest = function elementGetClosest(element, parentClass) {
  if (element) {
    return element.closest('.' + parentClass);
  } else {
    return false;
  }
};

var elementGetSiblings = function elementGetSiblings(element) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = element.parentNode.firstChild; // Loop through each sibling and push to the array

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};



/***/ }),

/***/ "./_assets/js/partials/events.js":
/*!***************************************!*\
  !*** ./_assets/js/partials/events.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyDownEvent": () => (/* binding */ keyDownEvent)
/* harmony export */ });
var keyDownEvent = function keyDownEvent(props) {
  var _props$domEvent = props.domEvent,
      domEvent = _props$domEvent === void 0 ? false : _props$domEvent,
      _props$key = props.key,
      key = _props$key === void 0 ? false : _props$key,
      _props$inClass = props.inClass,
      inClass = _props$inClass === void 0 ? false : _props$inClass;

  if (!domEvent || !key) {
    return false;
  }

  var eventElement = domEvent.target;
  var eventKey = domEvent.key;

  if (key === eventKey && Element.prototype.closest) {
    if (inClass && eventElement.closest('.' + inClass)) {
      return true;
    }
  } else {
    return false;
  }
};



/***/ }),

/***/ "./_assets/js/partials/toggle.js":
/*!***************************************!*\
  !*** ./_assets/js/partials/toggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleAnimating": () => (/* binding */ toggleAnimating),
/* harmony export */   "toggleAria": () => (/* binding */ toggleAria),
/* harmony export */   "toggleAriaExpandedClose": () => (/* binding */ toggleAriaExpandedClose),
/* harmony export */   "toggleAriaExpandedOpen": () => (/* binding */ toggleAriaExpandedOpen),
/* harmony export */   "toggleShould": () => (/* binding */ toggleShould)
/* harmony export */ });
var toggleAria = function toggleAria(props) {
  var _props$wrapper = props.wrapper,
      wrapper = _props$wrapper === void 0 ? false : _props$wrapper,
      _props$toggleByClass = props.toggleByClass,
      toggleByClass = _props$toggleByClass === void 0 ? false : _props$toggleByClass; // If element exists

  if (wrapper) {
    if (toggleByClass) {
      if (wrapper.classList.contains(toggleByClass)) {
        toggleAriaExpandedClose(props);
      } else {
        toggleAriaExpandedOpen(props);
      }
    } else {
      if (wrapper.getAttribute('aria-expanded') && 'false' != wrapper.getAttribute('aria-expanded')) {
        toggleAriaExpandedClose(props);
      } else {
        toggleAriaExpandedOpen(props);
      }
    }
  }
};

var toggleAriaExpandedOpen = function toggleAriaExpandedOpen(props) {
  var _props$wrapper2 = props.wrapper,
      wrapper = _props$wrapper2 === void 0 ? false : _props$wrapper2,
      _props$isAnimated = props.isAnimated,
      isAnimated = _props$isAnimated === void 0 ? true : _props$isAnimated,
      _props$actionPrefix = props.actionPrefix,
      actionPrefix = _props$actionPrefix === void 0 ? false : _props$actionPrefix,
      _props$ariaLabelEleme = props.ariaLabelElement,
      ariaLabelElement = _props$ariaLabelEleme === void 0 ? false : _props$ariaLabelEleme; // If element exists

  if (wrapper) {
    toggleHeight(props, true);
    toggleAnimating(props);
    toggleLabel(props, true);
    wrapper.setAttribute('aria-expanded', true);

    if (actionPrefix) {
      wrapper.classList.add(actionPrefix + '--openned');
      wrapper.classList.remove(actionPrefix + '--closed');
    }

    toggleAnimating(props);
  }
};

var toggleAriaExpandedClose = function toggleAriaExpandedClose(props) {
  var _props$wrapper3 = props.wrapper,
      wrapper = _props$wrapper3 === void 0 ? false : _props$wrapper3,
      _props$isAnimated2 = props.isAnimated,
      isAnimated = _props$isAnimated2 === void 0 ? true : _props$isAnimated2,
      _props$actionPrefix2 = props.actionPrefix,
      actionPrefix = _props$actionPrefix2 === void 0 ? false : _props$actionPrefix2,
      _props$ariaLabelEleme2 = props.ariaLabelElement,
      ariaLabelElement = _props$ariaLabelEleme2 === void 0 ? false : _props$ariaLabelEleme2; // If element exists

  if (wrapper) {
    toggleHeight(props, false);
    toggleAnimating(props);
    toggleLabel(props, false);

    if (actionPrefix) {
      wrapper.classList.add(actionPrefix + '--closed');
      wrapper.classList.remove(actionPrefix + '--openned');
    }

    wrapper.setAttribute('aria-expanded', false);
    toggleAnimating(props);
  }
};

var toggleAnimating = function toggleAnimating(props) {
  var _props$wrapper4 = props.wrapper,
      wrapper = _props$wrapper4 === void 0 ? false : _props$wrapper4,
      _props$animatedDurati = props.animatedDuration,
      animatedDuration = _props$animatedDurati === void 0 ? 300 : _props$animatedDurati,
      _props$animateClass = props.animateClass,
      animateClass = _props$animateClass === void 0 ? 'wsu-animating' : _props$animateClass,
      _props$isAnimated3 = props.isAnimated,
      isAnimated = _props$isAnimated3 === void 0 ? true : _props$isAnimated3,
      _props$animateHeight = props.animateHeight,
      animateHeight = _props$animateHeight === void 0 ? false : _props$animateHeight,
      _props$childElement = props.childElement,
      childElement = _props$childElement === void 0 ? false : _props$childElement;

  if (isAnimated && wrapper) {
    if (wrapper.classList.contains(animateClass)) {
      var timer = setTimeout(function () {
        wrapper.classList.remove(animateClass);

        if (animateHeight && childElement) {
          childElement.style.maxHeight = '';
        }
      }, animatedDuration);
      return timer;
    } else {
      wrapper.classList.add(animateClass);
      return false;
    }
  }
};

var toggleShould = function toggleShould(props) {
  var _props$eventElement = props.eventElement,
      eventElement = _props$eventElement === void 0 ? false : _props$eventElement,
      _props$clickClass = props.clickClass,
      clickClass = _props$clickClass === void 0 ? false : _props$clickClass,
      _props$checkParent = props.checkParent,
      checkParent = _props$checkParent === void 0 ? false : _props$checkParent,
      _props$checkSibling = props.checkSibling,
      checkSibling = _props$checkSibling === void 0 ? false : _props$checkSibling,
      _props$checkEmptyLink = props.checkEmptyLink,
      checkEmptyLink = _props$checkEmptyLink === void 0 ? false : _props$checkEmptyLink;

  if (clickClass && eventElement.classList.contains(clickClass)) {
    return true;
  } else if (checkEmptyLink && eventElement.hasAttribute('href') && '#' === eventElement.getAttribute('href')) {
    return true;
  } else if (checkParent && eventElement.parentElement.classList.contains(clickClass)) {
    return true;
  } else if (checkSibling && eventElement.nextElementSibling.classList.contains(clickClass)) {
    return true;
  }

  return false;
};

var toggleLabel = function toggleLabel(props, isExpanded) {
  var _props$expandedText = props.expandedText,
      expandedText = _props$expandedText === void 0 ? 'Close' : _props$expandedText,
      _props$collapsedText = props.collapsedText,
      collapsedText = _props$collapsedText === void 0 ? 'Open' : _props$collapsedText,
      _props$ariaLabelEleme3 = props.ariaLabelElement,
      ariaLabelElement = _props$ariaLabelEleme3 === void 0 ? false : _props$ariaLabelEleme3;
  console.log(props);

  if (ariaLabelElement && ariaLabelElement.hasAttribute('aria-label')) {
    var label = ariaLabelElement.getAttribute('aria-label');
    var action = isExpanded ? expandedText : collapsedText;
    var regex = new RegExp(expandedText + '|' + collapsedText, "g");
    console.log(regex);
    label = label.replace(regex, action);
    ariaLabelElement.setAttribute('aria-label', label);
  }
};

var toggleHeight = function toggleHeight(props, isExpanding) {
  var _props$childElement2 = props.childElement,
      childElement = _props$childElement2 === void 0 ? false : _props$childElement2,
      _props$animateHeight2 = props.animateHeight,
      animateHeight = _props$animateHeight2 === void 0 ? false : _props$animateHeight2,
      _props$heightPadding = props.heightPadding,
      heightPadding = _props$heightPadding === void 0 ? 20 : _props$heightPadding;

  if (childElement && animateHeight) {
    var childElementHeight = childElement.scrollHeight + heightPadding + "px";
    childElement.style.maxHeight = childElementHeight;

    if (!isExpanding) {
      setTimeout(function () {
        childElement.style.maxHeight = 0;
      }, 25);
    }
  }
};



/***/ }),

/***/ "./_assets/js/partials/utilities.js":
/*!******************************************!*\
  !*** ./_assets/js/partials/utilities.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuSlideDown": () => (/* reexport safe */ _wsuSlideDown__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _wsuSlideDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wsuSlideDown */ "./_assets/js/partials/wsuSlideDown.js");


/***/ }),

/***/ "./_assets/js/partials/wsuAnimate.js":
/*!*******************************************!*\
  !*** ./_assets/js/partials/wsuAnimate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuAnimateSlideDown": () => (/* binding */ wsuAnimateSlideDown),
/* harmony export */   "wsuAnimateSlideUp": () => (/* binding */ wsuAnimateSlideUp)
/* harmony export */ });
var wsuAnimateSlideDown = function wsuAnimateSlideDown(element, args) {
  var _args$duration = args.duration,
      duration = _args$duration === void 0 ? 300 : _args$duration,
      _args$extra = args.extra,
      extra = _args$extra === void 0 ? '20' : _args$extra;
  var timer = false;
  element.style.maxHeight = element.scrollHeight + parseInt(extra) + 'px';
  timer = setTimeout(function () {
    element.style.maxHeight = '';
  }, duration);
};

var wsuAnimateSlideUp = function wsuAnimateSlideUp(element, args) {
  var _args$duration2 = args.duration,
      duration = _args$duration2 === void 0 ? 300 : _args$duration2,
      _args$extra2 = args.extra,
      extra = _args$extra2 === void 0 ? '20' : _args$extra2,
      _args$callback = args.callback,
      callback = _args$callback === void 0 ? false : _args$callback;
  var timer = false;
  var delayTimer = false;
  element.style.maxHeight = element.scrollHeight + parseInt(extra) + 'px';
  delayTimer = setTimeout(function () {
    element.style.maxHeight = '0';
  }, 15);
  timer = setTimeout(function () {
    element.style.maxHeight = '';
  }, duration);
};



/***/ }),

/***/ "./_assets/js/partials/wsuAria.js":
/*!****************************************!*\
  !*** ./_assets/js/partials/wsuAria.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuAriaExpanded": () => (/* binding */ wsuAriaExpanded),
/* harmony export */   "wsuAriaIsExpanded": () => (/* binding */ wsuAriaIsExpanded)
/* harmony export */ });
var wsuAriaExpanded = function wsuAriaExpanded(element, value) {
  if (element.hasAttribute('aria-expanded')) {
    element.setAttribute('aria-expanded', value);
  }
};

var wsuAriaIsExpanded = function wsuAriaIsExpanded(element) {
  if (element.hasAttribute('aria-expanded')) {
    return 'true' == element.getAttribute('aria-expanded');
  } else {
    return false;
  }
};



/***/ }),

/***/ "./_assets/js/partials/wsuClass.js":
/*!*****************************************!*\
  !*** ./_assets/js/partials/wsuClass.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuClassAdd": () => (/* binding */ wsuClassAdd),
/* harmony export */   "wsuClassRemove": () => (/* binding */ wsuClassRemove),
/* harmony export */   "wsuClassToggle": () => (/* binding */ wsuClassToggle)
/* harmony export */ });
var wsuClassAdd = function wsuClassAdd(element, elementClass) {
  element.classList.add(elementClass);
};

var wsuClassRemove = function wsuClassRemove(element, elementClass) {
  element.classList.remove(elementClass);
};

var wsuClassToggle = function wsuClassToggle(element, elementClass) {};



/***/ }),

/***/ "./_assets/js/partials/wsuPartials.js":
/*!********************************************!*\
  !*** ./_assets/js/partials/wsuPartials.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuAnimateSlideDown": () => (/* reexport safe */ _wsuAnimate__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideDown),
/* harmony export */   "wsuAnimateSlideUp": () => (/* reexport safe */ _wsuAnimate__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideUp),
/* harmony export */   "wsuAriaExpanded": () => (/* reexport safe */ _wsuAria__WEBPACK_IMPORTED_MODULE_1__.wsuAriaExpanded),
/* harmony export */   "wsuAriaIsExpanded": () => (/* reexport safe */ _wsuAria__WEBPACK_IMPORTED_MODULE_1__.wsuAriaIsExpanded),
/* harmony export */   "wsuClassAdd": () => (/* reexport safe */ _wsuClass__WEBPACK_IMPORTED_MODULE_2__.wsuClassAdd),
/* harmony export */   "wsuClassRemove": () => (/* reexport safe */ _wsuClass__WEBPACK_IMPORTED_MODULE_2__.wsuClassRemove),
/* harmony export */   "wsuClassToggle": () => (/* reexport safe */ _wsuClass__WEBPACK_IMPORTED_MODULE_2__.wsuClassToggle)
/* harmony export */ });
/* harmony import */ var _wsuAnimate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wsuAnimate */ "./_assets/js/partials/wsuAnimate.js");
/* harmony import */ var _wsuAria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wsuAria */ "./_assets/js/partials/wsuAria.js");
/* harmony import */ var _wsuClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wsuClass */ "./_assets/js/partials/wsuClass.js");








/***/ }),

/***/ "./_assets/js/partials/wsuSlideDown.js":
/*!*********************************************!*\
  !*** ./_assets/js/partials/wsuSlideDown.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var wsuGetElementHeight = function wsuGetElementHeight(element) {
  if (element) {
    element.style.display = 'block';
    var height = element.scrollHeight;
    element.style.display = '';
    return height;
  }

  return 0;
};

var wsuSlideDown = function wsuSlideDown(props) {
  var timer = false;
  var _props$element = props.element,
      element = _props$element === void 0 ? false : _props$element,
      _props$heightPadding = props.heightPadding,
      heightPadding = _props$heightPadding === void 0 ? 20 : _props$heightPadding,
      _props$timing = props.timing,
      timing = _props$timing === void 0 ? 150 : _props$timing,
      _props$ariaElement = props.ariaElement,
      ariaElement = _props$ariaElement === void 0 ? false : _props$ariaElement;

  if (element) {
    var startHeight = element.scrollHeight;

    if (startHeight < 10) {
      // assume closed
      element.classList.add('wsu-animating');
      var endHeight = wsuGetElementHeight(element);
      element.style.maxHeight = endHeight + heightPadding + 'px';
      timer = setTimeout(function () {
        if (ariaElement) {
          ariaElement.setAttribute('aria-expanded', 'true');
        }

        element.classList.remove('wsu-animating');
        element.style.maxHeight = '';
      }, timing);
    } else {
      element.classList.add('wsu-animating');

      var _endHeight = wsuGetElementHeight(element);

      element.style.maxHeight = _endHeight + heightPadding + 'px'; // If this happens too quickly it css doesn't register it.

      setTimeout(function () {
        element.style.maxHeight = 0;
      }, 25);
      timer = setTimeout(function () {
        if (ariaElement) {
          ariaElement.setAttribute('aria-expanded', 'false');
        }

        element.classList.remove('wsu-animating');
        element.style.maxHeight = '';
      }, timing);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wsuSlideDown);

/***/ }),

/***/ "./_assets/js/updateAriaElement.js":
/*!*****************************************!*\
  !*** ./_assets/js/updateAriaElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var updateAriaElement = function updateAriaElement(action, element) {
  if (element.hasAttribute('aria-label')) {
    var regex = 'Open' == action ? /Open/i : /Close/i;
    var actionLabel = 'Open' == action ? 'Close' : 'Open';
    var label = element.getAttribute('aria-label');
    element.setAttribute('aria-label', label.replace(regex, actionLabel));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateAriaElement);

/***/ }),

/***/ "./_assets/js/wsuMenuExpand.js":
/*!*************************************!*\
  !*** ./_assets/js/wsuMenuExpand.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wsuMenuExpandDown": () => (/* binding */ wsuMenuExpandDown),
/* harmony export */   "wsuMenuExpandToggle": () => (/* binding */ wsuMenuExpandToggle),
/* harmony export */   "wsuMenuExpandUp": () => (/* binding */ wsuMenuExpandUp)
/* harmony export */ });
var wsuMenuExpandUp = function wsuMenuExpandUp(navItem) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var subMenu = navItem.lastElementChild;
  subMenu.style.maxHeight = subMenu.scrollHeight + 20 + 'px'; //subMenu.style.maxHeight = 0;

  /* If this happens too quickly it doesn't work? */

  setTimeout(function () {
    navItem.setAttribute('aria-expanded', false);
  }, 15); // Remove max height after animation

  var timer = setTimeout(function () {
    subMenu.style.maxHeight = '';
  }, 500);
};

var wsuMenuExpandDown = function wsuMenuExpandDown(navItem) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var subMenu = navItem.lastElementChild;
  subMenu.style.maxHeight = subMenu.scrollHeight + 20 + 'px';
  navItem.setAttribute('aria-expanded', true); // Remove max height after animation

  var timer = setTimeout(function () {
    subMenu.style.maxHeight = '';
  }, 500);
};

var wsuMenuExpandToggle = function wsuMenuExpandToggle(navItem) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (shouldExpand(navItem)) {
    wsuMenuExpandDown(navItem, args);
    return 'open';
  } else {
    wsuMenuExpandUp(navItem, args);
    return 'close';
  }
};

var shouldExpand = function shouldExpand(navItem) {
  return !navItem.hasAttribute('aria-expanded') || 'false' == navItem.getAttribute('aria-expanded') || false;
};



/***/ }),

/***/ "./src/animations/slide/_script.js":
/*!*****************************************!*\
  !*** ./src/animations/slide/_script.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/updateAriaElement */ "./_assets/js/updateAriaElement.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WsuAnimateSubmenuSlideVertical = /*#__PURE__*/function () {
  function WsuAnimateSubmenuSlideVertical() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuAnimateSubmenuSlideVertical);

    this.timer = false;
    this.init();
  }

  _createClass(WsuAnimateSubmenuSlideVertical, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      /*document.addEventListener(
      'keydown', 
      this.keyDownEvents.bind( this ),
      false
      );*/
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target;
        var navElement = event.target.parentElement; // Toggle Action

        if (eventElement.classList.contains('wsu-animate--submenu-toggle')) {
          if (this.shouldClose(navElement)) {} else {}
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsuAnimateSubmenuSlideVertical;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuAnimateSubmenuSlideVertical);

/***/ }),

/***/ "./src/components/accordion/_script.js":
/*!*********************************************!*\
  !*** ./src/components/accordion/_script.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/partials/wsuPartials */ "./_assets/js/partials/wsuPartials.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WsuAccordion = /*#__PURE__*/function () {
  function WsuAccordion() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuAccordion);

    this.timer = false;
    this.openClass = 'wsu-accordion--open';
    this.init();
  }

  _createClass(WsuAccordion, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      /*document.addEventListener(
      'keydown', 
      this.keyDownEvents.bind( this ),
      false
      );*/
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // Toggle Action

        if (eventElement.classList.contains('wsu-accordion--toggle')) {
          var accordionElement = eventElement.closest('.wsu-accordion');
          var accordionContent = accordionElement.querySelector('.wsu-accordion__content');

          if ((0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaIsExpanded)(eventElement)) {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(eventElement, false);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideUp)(accordionContent, {});
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(accordionElement, this.openClass);
          } else {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(eventElement, true);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideDown)(accordionContent, {});
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(accordionElement, this.openClass);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsuAccordion;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuAccordion);

/***/ }),

/***/ "./src/components/anchor-menu/_script.js":
/*!***********************************************!*\
  !*** ./src/components/anchor-menu/_script.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WsuAnchorMenu = /*#__PURE__*/function () {
  function WsuAnchorMenu() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuAnchorMenu);

    this.elements = [];
    this.selector = '.wsu-anchor-menu';
    this.buffer = 0.60;
    this.init();
  }

  _createClass(WsuAnchorMenu, [{
    key: "init",
    value: function init() {
      this.initElements();
      this.bindEvents();
    }
  }, {
    key: "initElements",
    value: function initElements() {
      var _this = this;

      var found = document.querySelectorAll(this.selector + ':not(.wsu-initialized)');

      if (0 < found.length) {
        found.forEach(function (element) {
          _this.elements.push(element);

          element.classList.add('wsu-initialized');
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      try {
        window.addEventListener('scroll', function (event) {
          _this2.updateMenus();
        }, false);
        window.addEventListener('resize', function (event) {
          _this2.updateMenus();
        }, false);
        this.updateMenus();
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "isActive",
    value: function isActive(anchor) {
      var element = document.querySelector(anchor);

      if (element) {
        var wHeight = window.innerHeight * this.buffer;
        var elHeight = element.getBoundingClientRect().top;
        return elHeight < wHeight ? true : false;
      }
    }
  }, {
    key: "updateMenus",
    value: function updateMenus() {
      var _this3 = this;

      this.elements.forEach(function (element) {
        var children = Array.from(element.querySelectorAll('li'));

        if (children.length) {
          var activeChild = false;

          if (document.documentElement.scrollTop > 50) {
            for (var i = children.length - 1; i >= 0; i--) {
              var child = children[i];
              var link = child.querySelector('a');

              if (link && link.hasAttribute('href')) {
                var anchor = link.getAttribute('href');

                if (_this3.isActive(anchor) && !activeChild) {
                  activeChild = child;
                } else {
                  child.classList.remove('wsu-active');
                }
              }
            }
          } else {//activeChild = children[0].classList.add('wsu-active');
          }

          if (activeChild) {
            activeChild.classList.add('wsu-active');
          } else {//children[0].classList.add('wsu-active');
          }
        } //console.log( element.getBoundingClientRect().top );

        /*let child = element.firstElementChild;
          if ( 1 > element.getBoundingClientRect().top ) {
              let width = element.offsetWidth;
              element.classList.add('wsu-sticky-box--stuck');
              child.style.width = width + 'px';
          } else {
              element.classList.remove('wsu-sticky-box--stuck');
              child.style.width = '';
          }*/

      });
    }
  }]);

  return WsuAnchorMenu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuAnchorMenu);

/***/ }),

/***/ "./src/components/button/_script.js":
/*!******************************************!*\
  !*** ./src/components/button/_script.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WsuButton = /*#__PURE__*/function () {
  function WsuButton() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuButton);

    this.init();
  }

  _createClass(WsuButton, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      document.addEventListener('click', function (event) {
        _this.clickEvents(event);
      }, false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        if (event.target.classList.contains('wsu-button-pause-background')) {
          this.toggleActiveButton(event.target, 'wsu-button-pause-background', ['Pause', 'Play']);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "toggleActiveButton",
    value: function toggleActiveButton(button, buttonClass, labels) {
      var activeClass = buttonClass + '--active';
      var label = button.hasAttribute('aria-label') ? button.getAttribute('aria-label') : false;

      if (button.classList.contains(activeClass)) {
        button.classList.remove(activeClass);

        if (label) {
          label = label.replace(labels[1], labels[0]);
          button.setAttribute('aria-label', label);
        }
      } else {
        button.classList.add(activeClass);

        if (label) {
          label = label.replace(labels[0], labels[1]);
          button.setAttribute('aria-label', label);
        }
      }
    }
  }]);

  return WsuButton;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuButton);

/***/ }),

/***/ "./src/components/experimental_collapsable/script.js":
/*!***********************************************************!*\
  !*** ./src/components/experimental_collapsable/script.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/partials/element */ "./_assets/js/partials/element.js");
/* harmony import */ var _assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_assets/js/partials/toggle */ "./_assets/js/partials/toggle.js");
/* harmony import */ var _assets_js_partials_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_assets/js/partials/utilities */ "./_assets/js/partials/utilities.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var WsuCollapsable = /*#__PURE__*/function () {
  function WsuCollapsable() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuCollapsable);

    this.wrapperClass = atts.hasOwnProperty('wrapperClass') ? atts.wrapperClass : 'wsu-collapsable';
    this.toggleClass = atts.hasOwnProperty('toggleClass') ? atts.toggleClass : 'wsu-collapsable--toggle';
    this.contentClass = atts.hasOwnProperty('contentClass') ? atts.contentClass : 'wsu-collapsable--content';
    this.actionPrefix = atts.hasOwnProperty('actionPrefix') ? atts.actionPrefix : 'wsu-collapsable';
    this.init();
  }

  _createClass(WsuCollapsable, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // check Close Navigation

        if ((0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleShould)({
          eventElement: eventElement,
          clickClass: this.toggleClass,
          checkParent: true
        })) {
          event.preventDefault();
          var wrapper = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGetClosest)(eventElement, this.wrapperClass);
          var element = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
            parent: wrapper,
            elementClass: this.contentClass
          });

          if (wrapper) {
            (0,_assets_js_partials_utilities__WEBPACK_IMPORTED_MODULE_2__.wsuSlideDown)({
              element: element,
              ariaElement: wrapper
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsuCollapsable;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuCollapsable);

/***/ }),

/***/ "./src/components/experimental_navigation-horizontal/_script.js":
/*!**********************************************************************!*\
  !*** ./src/components/experimental_navigation-horizontal/_script.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/ariaUpdate */ "./_assets/js/ariaUpdate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WsuNavigationSiteHorizontal = /*#__PURE__*/function () {
  function WsuNavigationSiteHorizontal() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuNavigationSiteHorizontal);

    this.timer = false;
    this.init();
  }

  _createClass(WsuNavigationSiteHorizontal, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      document.addEventListener('keydown', this.keyDownEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // Toggle Action

        if (eventElement.classList.contains('wsu-navigation-site-horizontal--toggle')) {
          if (this.shouldClose()) {
            this.close(eventElement);
            (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Close', '.wsu-navigation-site-horizontal--toggle');
          } else {
            this.open(eventElement);
            (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Open', '.wsu-navigation-site-horizontal--toggle');
          }
        } // Open Action


        if (eventElement.classList.contains('wsu-navigation-site-horizontal--open')) {
          this.open(eventElement);
        } // Close Action


        if (eventElement.classList.contains('wsu-navigation-site-horizontal--close')) {
          this.close(eventElement);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      try {
        if (keyDownEvent({
          domEvent: event,
          key: 'Escape',
          inClass: this.wrapperClass
        })) {
          toggleAriaExpandedClose({
            wrapper: elementGet({
              elementClass: this.wrapperClass
            }),
            actionPrefix: this.actionPrefix,
            ariaLabelElement: elementGet({
              elementClass: 'wsu-navigation-site--toggle'
            })
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "open",
    value: function open() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var nav = document.getElementsByClassName('wsu-navigation-site-horizontal')[0] || false;
      console.log(nav);
      if (!nav) return;
      nav.setAttribute('aria-expanded', true);
      document.body.classList.add('wsu-navigation-site-horizontal--is-open');
      document.body.classList.remove('wsu-navigation-site-horizontal--is-closed');
      (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Open', '.wsu-navigation-site-horizontal--toggle');
    }
  }, {
    key: "close",
    value: function close() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var nav = document.getElementsByClassName('wsu-navigation-site-horizontal')[0] || false;
      if (!nav) return;
      nav.setAttribute('aria-expanded', false);
      document.body.classList.remove('wsu-navigation-site-horizontal--is-open');
      document.body.classList.add('wsu-navigation-site-horizontal--is-closed');
      (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Close', '.wsu-navigation-site-horizontal--toggle');
    }
  }, {
    key: "shouldClose",
    value: function shouldClose() {
      var nav = document.getElementsByClassName('wsu-navigation-horizontal')[0] || false;
      if (!nav) false;
      return document.body.classList.contains('wsu-navigation-site-horizontal--is-open') || false;
    }
  }]);

  return WsuNavigationSiteHorizontal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuNavigationSiteHorizontal);

/***/ }),

/***/ "./src/components/experimental_video-frame/_script.js":
/*!************************************************************!*\
  !*** ./src/components/experimental_video-frame/_script.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WsuVideoFrame = /*#__PURE__*/function () {
  function WsuVideoFrame() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuVideoFrame);

    this.bassClass = 'wsu-video-frame';
    this.init();
  }

  _createClass(WsuVideoFrame, [{
    key: "init",
    value: function init() {
      this.setVideoSize();
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      document.addEventListener('click', function (event) {
        _this.clickEvents(event);
      }, false);
      window.addEventListener('resize', function () {
        _this.resize();
      }, false);
    }
  }, {
    key: "resize",
    value: function resize() {
      try {
        this.setVideoSize();
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        if (event.target.classList.contains('wsu-video-frame--action-play')) {
          this.playVideo(event.target.parentElement);
        }

        if (event.target.classList.contains(this.bassClass + '--action-pause-background') || event.target.classList.contains(this.bassClass + '--action-play-background')) {
          this.toggleBackgroundVideo(event.target);
        }

        if (event.target.classList.contains('wsu-video-frame--action-toggle-background')) {
          this.pauseBackgroundVideo(event.target.parentElement);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "playVideo",
    value: function playVideo(videoWrapper) {
      if (!videoWrapper.hasAttribute('data-play')) {
        return false;
      }

      var video = videoWrapper.getElementsByClassName('wsu-video-frame__video-background');

      if (video.length) {
        video = video[0];
        var videoSrc = videoWrapper.dataset.play;
        video.setAttribute('src', videoSrc);
        video.classList.add('wsu-video-frame__video');
        video.classList.remove('wsu-video-frame__video-background');
      }
    }
  }, {
    key: "pauseBackgroundVideo",
    value: function pauseBackgroundVideo(videoWrapper) {
      var video = videoWrapper.getElementsByClassName('wsu-video-frame__video-background');

      if (video.length) {
        video = video[0];
        var player = new Vimeo.Player(video);
        player.pause();
      }
    }
  }, {
    key: "toggleBackgroundVideo",
    value: function toggleBackgroundVideo(element) {
      var videoWrapper = element.parentElement;
      var video = videoWrapper.getElementsByClassName(this.bassClass + '__video-background');

      if (!video.length) {
        console.log('WSU Video Frame: Video Not Found');
        return;
      }

      var player = new Vimeo.Player(video[0]);

      if (element.classList.contains(this.bassClass + '--action-pause-background')) {
        element.classList.remove(this.bassClass + '--action-pause-background');
        element.classList.add(this.bassClass + '--action-play-background');
        player.pause();
      } else {
        element.classList.add(this.bassClass + '--action-pause-background');
        element.classList.remove(this.bassClass + '--action-play-background');
        player.play();
      }
    }
  }, {
    key: "setVideoSize",
    value: function setVideoSize() {
      var _this2 = this;

      var videos = document.getElementsByClassName('wsu-video-frame__video-background');

      if (videos.length > 0) {
        Array.from(videos).forEach(function (video) {
          var videoWrapper = video.parentElement;

          if (_this2.isWideVideo(videoWrapper)) {
            video.style.width = '100%';
            video.style.height = (videoWrapper.offsetWidth + 260) * 0.5625 + 'px';
          } else {
            video.style.height = '100%';
            video.style.width = videoWrapper.offsetHeight / 0.5625 + 'px';
          }
        });
      }
    }
  }, {
    key: "isWideVideo",
    value: function isWideVideo(videoWrapper) {
      return videoWrapper.offsetWidth * 0.5625 > videoWrapper.offsetHeight;
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      try {} catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsuVideoFrame;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuVideoFrame);

/***/ }),

/***/ "./src/components/menu/_script.js":
/*!****************************************!*\
  !*** ./src/components/menu/_script.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/updateAriaElement */ "./_assets/js/updateAriaElement.js");
/* harmony import */ var _assets_js_partials_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_assets/js/partials/element */ "./_assets/js/partials/element.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var WsuMenu = /*#__PURE__*/function () {
  function WsuMenu() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuMenu);

    this.timer = false;
    this.init();
  }

  _createClass(WsuMenu, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      document.addEventListener('keydown', this.keyDownEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // Toggle Action

        if (eventElement.classList.contains('wsu-menu--toggle')) {
          var navElement = event.target.parentElement;

          if (this.shouldClose(navElement)) {
            this.close(navElement);
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__["default"])('Close', eventElement);
          } else {
            this.open(navElement);
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__["default"])('Open', eventElement);
          }
        }

        if (eventElement.classList.contains('wsu-menu--submenu-close')) {
          var _navElement = eventElement.parentElement.parentElement.closest('li');

          if (this.shouldClose(_navElement)) {
            this.close(_navElement);
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__["default"])('Close', eventElement);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      try {
        if (keyDownEvent({
          domEvent: event,
          key: 'Escape',
          inClass: this.wrapperClass
        })) {
          toggleAriaExpandedClose({
            wrapper: elementGet({
              elementClass: this.wrapperClass
            }),
            actionPrefix: this.actionPrefix,
            ariaLabelElement: elementGet({
              elementClass: 'wsu-navigation-site--toggle'
            })
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "open",
    value: function open(navElement) {
      this.closeSiblings(navElement);
      var subMenu = navElement.lastElementChild;
      subMenu.style.maxHeight = subMenu.scrollHeight + 20 + 'px';
      subMenu.classList.add('wsu-animate--slide-down');
      navElement.setAttribute('aria-expanded', true); // Remove max height after animation

      this.timer = setTimeout(function () {
        subMenu.style.maxHeight = '';
        subMenu.classList.remove('wsu-animate--slide-down');
      }, 500);
    }
  }, {
    key: "close",
    value: function close(navElement) {
      var subMenu = navElement.lastElementChild;
      subMenu.style.maxHeight = subMenu.scrollHeight + 20 + 'px';
      /* If this happens too quickly it doesn't work? */

      setTimeout(function () {
        //navElement.setAttribute( 'aria-expanded', false );
        subMenu.classList.add('wsu-animate--slide-up');
        navElement.setAttribute('aria-expanded', false);
      }, 15); // Remove max height after animation

      this.timer = setTimeout(function () {
        subMenu.style.maxHeight = '';
        subMenu.classList.remove('wsu-animate--slide-up');
      }, 500);
    }
  }, {
    key: "closeSiblings",
    value: function closeSiblings(navElement) {
      var _this = this;

      var siblings = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_1__.elementGetSiblings)(navElement);
      siblings.forEach(function (element) {
        if (_this.shouldClose(element)) {
          _this.close(element);
        }
      });
    }
  }, {
    key: "shouldClose",
    value: function shouldClose(navElement) {
      return navElement.hasAttribute('aria-expanded') && 'true' == navElement.getAttribute('aria-expanded') || false;
    }
  }]);

  return WsuMenu;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuMenu);

/***/ }),

/***/ "./src/components/sticky-box/_script.js":
/*!**********************************************!*\
  !*** ./src/components/sticky-box/_script.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WsuStickyBox = /*#__PURE__*/function () {
  function WsuStickyBox() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuStickyBox);

    this.boxes = [];
    this.boxSelector = '.wsu-sticky-box';
    this.timer = false;
    this.init();
  }

  _createClass(WsuStickyBox, [{
    key: "init",
    value: function init() {
      this.initialize();
      this.bindEvents();
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      var foundBoxes = document.querySelectorAll(this.boxSelector + ':not(.wsu-initialized)');

      if (0 < foundBoxes.length) {
        foundBoxes.forEach(function (box) {
          _this.boxes.push(box);

          box.classList.add('wsu-initialized');
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      try {
        window.addEventListener('scroll', function (event) {
          _this2.stickBoxes();
        }, false);
        window.addEventListener('resize', function (event) {
          _this2.stickBoxes();
        }, false);
        this.stickBoxes(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "stickBoxes",
    value: function stickBoxes() {
      var isEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isEvent) {
        this.addActiveClass();
      }

      this.boxes.forEach(function (element) {
        var child = element.firstElementChild;

        if (1 > element.getBoundingClientRect().top) {
          var width = element.offsetWidth;
          element.classList.add('wsu-sticky-box--stuck');
          child.style.width = width + 'px';
        } else {
          element.classList.remove('wsu-sticky-box--stuck');
          child.style.width = '';
        }
      });
    }
  }, {
    key: "addActiveClass",
    value: function addActiveClass() {
      var _this3 = this;

      clearTimeout(this.timer);
      this.boxes.forEach(function (element) {
        element.classList.add('wsu-active');
      });
      this.timer = setTimeout(function () {
        _this3.removeActiveClass();
      }, 2000);
    }
  }, {
    key: "removeActiveClass",
    value: function removeActiveClass() {
      this.boxes.forEach(function (element) {
        element.classList.remove('wsu-active');
      });
    }
  }]);

  return WsuStickyBox;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuStickyBox);

/***/ }),

/***/ "./src/modules/deprecated_navigation-site/_navigation-site.js":
/*!********************************************************************!*\
  !*** ./src/modules/deprecated_navigation-site/_navigation-site.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/partials/element */ "./_assets/js/partials/element.js");
/* harmony import */ var _assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_assets/js/partials/toggle */ "./_assets/js/partials/toggle.js");
/* harmony import */ var _assets_js_partials_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_assets/js/partials/events */ "./_assets/js/partials/events.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var WsunavigationSite = /*#__PURE__*/function () {
  function WsunavigationSite() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsunavigationSite);

    this.wrapperClass = atts.hasOwnProperty('wrapperClass') ? atts.wrapperClass : 'wsu-navigation-site';
    this.closeClass = atts.hasOwnProperty('closeClass') ? atts.closeClass : 'wsu-navigation-site--close';
    this.openClass = atts.hasOwnProperty('openClass') ? atts.openClass : 'wsu-navigation-site--open';
    this.toggleClass = atts.hasOwnProperty('toggleClass') ? atts.toggleClass : 'wsu-navigation-site--toggle';
    this.animatingClass = atts.hasOwnProperty('animatingClass') ? atts.animatingClass : 'wsu-animating';
    this.animationTiming = atts.hasOwnProperty('animationTiming') ? atts.animationTiming : 300;
    this.actionPrefix = atts.hasOwnProperty('actionPrefix') ? atts.actionPrefix : 'wsu-navigation-site';
    this.timer = false;
    this.init();
  }

  _createClass(WsunavigationSite, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      document.addEventListener('keydown', this.keyDownEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // check Close Navigation

        if ((0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleShould)({
          eventElement: eventElement,
          clickClass: this.closeClass,
          checkParent: true
        })) {
          event.preventDefault();
          var wrapper = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
            elementClass: this.wrapperClass
          });

          if (wrapper) {
            (0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleAriaExpandedClose)({
              wrapper: wrapper,
              actionPrefix: this.actionPrefix
            });
          }
        } // Check Open Navigation


        if ((0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleShould)({
          eventElement: eventElement,
          clickClass: this.openClass,
          checkParent: true
        })) {
          event.preventDefault();

          var _wrapper = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
            elementClass: this.wrapperClass
          });

          if (_wrapper) {
            (0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleAriaExpandedOpen)({
              wrapper: _wrapper,
              actionPrefix: this.actionPrefix
            });
          }
        } // Check Toggle Navigation


        if ((0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleShould)({
          eventElement: eventElement,
          clickClass: this.toggleClass,
          checkParent: true
        })) {
          event.preventDefault();

          var _wrapper2 = (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
            elementClass: this.wrapperClass
          });

          if (_wrapper2) {
            (0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleAria)({
              wrapper: _wrapper2,
              toggleByClass: this.actionPrefix + '--openned',
              actionPrefix: this.actionPrefix,
              ariaLabelElement: eventElement
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      try {
        if ((0,_assets_js_partials_events__WEBPACK_IMPORTED_MODULE_2__.keyDownEvent)({
          domEvent: event,
          key: 'Escape',
          inClass: this.wrapperClass
        })) {
          (0,_assets_js_partials_toggle__WEBPACK_IMPORTED_MODULE_1__.toggleAriaExpandedClose)({
            wrapper: (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
              elementClass: this.wrapperClass
            }),
            actionPrefix: this.actionPrefix,
            ariaLabelElement: (0,_assets_js_partials_element__WEBPACK_IMPORTED_MODULE_0__.elementGet)({
              elementClass: 'wsu-navigation-site--toggle'
            })
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsunavigationSite;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsunavigationSite);

/***/ }),

/***/ "./src/modules/header-global/_header-global.js":
/*!*****************************************************!*\
  !*** ./src/modules/header-global/_header-global.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_wsuMenuExpand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/wsuMenuExpand */ "./_assets/js/wsuMenuExpand.js");
/* harmony import */ var _assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_assets/js/ariaUpdate */ "./_assets/js/ariaUpdate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var WsuHeaderGlobal = /*#__PURE__*/function () {
  function WsuHeaderGlobal() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuHeaderGlobal);

    this.timer = false;
    this.init();
  }

  _createClass(WsuHeaderGlobal, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target;
        var navElement = event.target.parentElement; // Toggle Action

        if (eventElement.classList.contains('wsu-menu-expand--toggle')) {
          (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_1__.ariaUpdateElement)(eventElement, (0,_assets_js_wsuMenuExpand__WEBPACK_IMPORTED_MODULE_0__.wsuMenuExpandToggle)(navElement));
        }

        if (eventElement.classList.contains('wsu-menu-expand--down')) {
          wsuMenuExpandDown(navElement);
          (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_1__.ariaUpdateElement)(eventElement, 'open');
        }

        if (eventElement.classList.contains('wsu-menu-expand--up')) {
          wsuMenuExpandDown(navElement);
          (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_1__.ariaUpdateElement)(eventElement, 'close');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }]);

  return WsuHeaderGlobal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuHeaderGlobal);

/***/ }),

/***/ "./src/modules/navigation-site-vertical/_script.js":
/*!*********************************************************!*\
  !*** ./src/modules/navigation-site-vertical/_script.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/ariaUpdate */ "./_assets/js/ariaUpdate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WsuNavigationSiteVertical = /*#__PURE__*/function () {
  function WsuNavigationSiteVertical() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuNavigationSiteVertical);

    this.timer = false;
    this.init();
  }

  _createClass(WsuNavigationSiteVertical, [{
    key: "init",
    value: function init() {
      this.bindEvents();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.clickEvents.bind(this), false);
      document.addEventListener('keydown', this.keyDownEvents.bind(this), false);
    }
  }, {
    key: "clickEvents",
    value: function clickEvents(event) {
      try {
        var eventElement = event.target; // Toggle Action

        if (eventElement.classList.contains('wsu-navigation-site-vertical--toggle')) {
          if (this.shouldClose()) {
            this.close(eventElement);
            (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Close', '.wsu-navigation-site-vertical--toggle');
          } else {
            this.open(eventElement);
            (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Open', '.wsu-navigation-site-vertical--toggle');
          }
        } // Open Action


        if (eventElement.classList.contains('wsu-navigation-site-vertical--open')) {
          this.open(eventElement);
        } // Close Action


        if (eventElement.classList.contains('wsu-navigation-site-vertical--close')) {
          this.close(eventElement);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      try {
        if (keyDownEvent({
          domEvent: event,
          key: 'Escape',
          inClass: this.wrapperClass
        })) {
          toggleAriaExpandedClose({
            wrapper: elementGet({
              elementClass: this.wrapperClass
            }),
            actionPrefix: this.actionPrefix,
            ariaLabelElement: elementGet({
              elementClass: 'wsu-navigation-site--toggle'
            })
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "open",
    value: function open() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var nav = document.getElementsByClassName('wsu-navigation-site-vertical')[0] || false;
      if (!nav) return;
      nav.setAttribute('aria-expanded', true);
      document.body.classList.add('wsu-navigation-site-vertical--is-open');
      document.body.classList.remove('wsu-navigation-site-vertical--is-closed');
      (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Open', '.wsu-navigation-site-vertical--toggle');
    }
  }, {
    key: "close",
    value: function close() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var nav = document.getElementsByClassName('wsu-navigation-site-vertical')[0] || false;
      if (!nav) return;
      nav.setAttribute('aria-expanded', false);
      document.body.classList.remove('wsu-navigation-site-vertical--is-open');
      document.body.classList.add('wsu-navigation-site-vertical--is-closed');
      (0,_assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__.ariaUpdate)('Close', '.wsu-navigation-site-vertical--toggle');
      var myTimeout = setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }
  }, {
    key: "shouldClose",
    value: function shouldClose() {
      var nav = document.getElementsByClassName('.wsu-navigation-site-vertical')[0] || false;
      if (!nav) false;
      return document.body.classList.contains('wsu-navigation-site-vertical--is-open') || false;
    }
  }]);

  return WsuNavigationSiteVertical;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuNavigationSiteVertical);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ./src/bundles/wsu-design-system.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_deprecated_navigation_site_navigation_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/deprecated_navigation-site/_navigation-site */ "./src/modules/deprecated_navigation-site/_navigation-site.js");
/* harmony import */ var _modules_header_global_header_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header-global/_header-global */ "./src/modules/header-global/_header-global.js");
/* harmony import */ var _components_accordion_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/accordion/_script */ "./src/components/accordion/_script.js");
/* harmony import */ var _components_experimental_collapsable_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/experimental_collapsable/script */ "./src/components/experimental_collapsable/script.js");
/* harmony import */ var _components_menu_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu/_script */ "./src/components/menu/_script.js");
/* harmony import */ var _modules_navigation_site_vertical_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/navigation-site-vertical/_script */ "./src/modules/navigation-site-vertical/_script.js");
/* harmony import */ var _animations_slide_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/slide/_script */ "./src/animations/slide/_script.js");
/* harmony import */ var _components_experimental_navigation_horizontal_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/experimental_navigation-horizontal/_script */ "./src/components/experimental_navigation-horizontal/_script.js");
/* harmony import */ var _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/experimental_video-frame/_script */ "./src/components/experimental_video-frame/_script.js");
/* harmony import */ var _components_button_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/button/_script */ "./src/components/button/_script.js");
/* harmony import */ var _components_sticky_box_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sticky-box/_script */ "./src/components/sticky-box/_script.js");
/* harmony import */ var _components_anchor_menu_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/anchor-menu/_script */ "./src/components/anchor-menu/_script.js");
//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";












var wsu = {
  verticalNavitation: new _modules_deprecated_navigation_site_navigation_site__WEBPACK_IMPORTED_MODULE_0__["default"](),
  navigationSiteVertical: new _modules_navigation_site_vertical_script__WEBPACK_IMPORTED_MODULE_5__["default"](),
  navigationSiteHorizontal: new _components_experimental_navigation_horizontal_script__WEBPACK_IMPORTED_MODULE_7__["default"](),
  headerGlobal: new _modules_header_global_header_global__WEBPACK_IMPORTED_MODULE_1__["default"](),
  accordion: new _components_accordion_script__WEBPACK_IMPORTED_MODULE_2__["default"](),
  collapsable: new _components_experimental_collapsable_script__WEBPACK_IMPORTED_MODULE_3__["default"](),
  menu: new _components_menu_script__WEBPACK_IMPORTED_MODULE_4__["default"](),
  button: new _components_button_script__WEBPACK_IMPORTED_MODULE_9__["default"](),
  animations: {//submenuSlideVertical: new WsuAnimateSubmenuSlideVertical(),
  },
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__["default"](),
  stickyBox: new _components_sticky_box_script__WEBPACK_IMPORTED_MODULE_10__["default"](),
  wsuAnchorMenu: new _components_anchor_menu_script__WEBPACK_IMPORTED_MODULE_11__["default"]()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNSSxHQUFHLEdBQUc7QUFDUkMsRUFBQUEsa0JBQWtCLEVBQUUsSUFBSVYsMkZBQUosRUFEWjtBQUVSVyxFQUFBQSxzQkFBc0IsRUFBRSxJQUFJTixnRkFBSixFQUZoQjtBQUdSTyxFQUFBQSx3QkFBd0IsRUFBRSxJQUFJckQsNkZBQUosRUFIbEI7QUFJUnNELEVBQUFBLFlBQVksRUFBRSxJQUFJVCw0RUFBSixFQUpOO0FBS1JVLEVBQUFBLFNBQVMsRUFBRSxJQUFJN0Ysb0VBQUosRUFMSDtBQU1SOEYsRUFBQUEsV0FBVyxFQUFFLElBQUk5RCxtRkFBSixFQU5MO0FBT1IrRCxFQUFBQSxJQUFJLEVBQUUsSUFBSTlCLCtEQUFKLEVBUEU7QUFRUnJDLEVBQUFBLE1BQU0sRUFBRSxJQUFJRixpRUFBSixFQVJBO0FBU1JzRSxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBVEo7QUFZUkMsRUFBQUEsVUFBVSxFQUFFLElBQUlyRCxtRkFBSixFQVpKO0FBYVJzRCxFQUFBQSxTQUFTLEVBQUUsSUFBSS9CLHNFQUFKLEVBYkg7QUFjUmdDLEVBQUFBLGFBQWEsRUFBRSxJQUFJOUYsdUVBQUo7QUFkUCxDQUFaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYW5jaG9yLW1lbnUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfdmlkZW8tZnJhbWUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9tZW51L19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvc3RpY2t5LWJveC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcmlhVXBkYXRlID0gKCBhY3Rpb24sIHNlbGVjdG9yICkgPT4ge1xyXG5cclxuICAgIGxldCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goXHJcbiAgICAgICAgKCBlbGVtZW50LCBpICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGFjdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFyaWFVcGRhdGVFbGVtZW50ID0gKCBlbGVtZW50LCBhY3Rpb24gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCwgYXJpYVVwZGF0ZSB9OyIsImNvbnN0IGVsZW1lbnRHZXQgPSAoIHsgcGFyZW50ID0gZmFsc2UsIGVsZW1lbnRDbGFzcyA9IGZhbHNlIH0gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IHBhcmVudCA/IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggMCA8IGVsZW1lbnRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRDbG9zZXN0ID0gKCBlbGVtZW50LCBwYXJlbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoICcuJyArIHBhcmVudENsYXNzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRTaWJsaW5ncyA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXHJcblx0bGV0IHNpYmxpbmdzID0gW107XHJcblx0bGV0IHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcclxuXHR3aGlsZSAoIHNpYmxpbmcgKSB7XHJcblxyXG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbWVudCkge1xyXG5cclxuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QsIGVsZW1lbnRHZXRTaWJsaW5ncyB9IiwiY29uc3Qga2V5RG93bkV2ZW50ID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBkb21FdmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGtleSAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaW5DbGFzcyAgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggISBkb21FdmVudCB8fCAhIGtleSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRFbGVtZW50ID0gZG9tRXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGV2ZW50S2V5ICAgICA9IGRvbUV2ZW50LmtleTtcclxuXHJcbiAgICBpZiAoIGtleSA9PT0gZXZlbnRLZXkgJiYgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbkNsYXNzICYmIGV2ZW50RWxlbWVudC5jbG9zZXN0KCAnLicgKyBpbkNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93bkV2ZW50IH07IiwiY29uc3QgdG9nZ2xlQXJpYSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyID0gZmFsc2UsXHJcbiAgICAgICAgdG9nZ2xlQnlDbGFzcyA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlQnlDbGFzcyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIHRvZ2dsZUJ5Q2xhc3MgKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJiAnZmFsc2UnICE9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCB0cnVlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgdHJ1ZSApO1xyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgZmFsc2UgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFuaW1hdGluZyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZWREdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBhbmltYXRlQ2xhc3MgICAgID0gJ3dzdS1hbmltYXRpbmcnLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgICAgPSBmYWxzZSxcclxuICAgICAgICBjaGlsZEVsZW1lbnQgICAgID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBpc0FuaW1hdGVkICYmIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIGFuaW1hdGVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYW5pbWF0ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYW5pbWF0ZUhlaWdodCAmJiBjaGlsZEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZER1cmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFuaW1hdGVDbGFzcyApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG91bGQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV2ZW50RWxlbWVudCA9IGZhbHNlLCBcclxuICAgICAgICBjbGlja0NsYXNzID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tQYXJlbnQgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1NpYmxpbmcgPSBmYWxzZSxcclxuICAgICAgICBjaGVja0VtcHR5TGluayA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2xpY2tDbGFzcyAmJiBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrRW1wdHlMaW5rICYmIGV2ZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSAmJiAnIycgPT09IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tQYXJlbnQgJiYgZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrU2libGluZyAmJiBldmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUxhYmVsID0gKCBwcm9wcywgaXNFeHBhbmRlZCApID0+IHtcclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV4cGFuZGVkVGV4dCA9ICdDbG9zZScsIFxyXG4gICAgICAgIGNvbGxhcHNlZFRleHQgPSAnT3BlbicsIFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMgKTtcclxuXHJcblxyXG4gICAgaWYgKCBhcmlhTGFiZWxFbGVtZW50ICYmIGFyaWFMYWJlbEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgKSB7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGFyaWFMYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoIGlzRXhwYW5kZWQgKSA/IGV4cGFuZGVkVGV4dCA6IGNvbGxhcHNlZFRleHQ7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoIGV4cGFuZGVkVGV4dCArICd8JyArIGNvbGxhcHNlZFRleHQsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlZ2V4ICk7XHJcblxyXG4gICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbiApO1xyXG5cclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUhlaWdodCA9ICggcHJvcHMsIGlzRXhwYW5kaW5nICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCA9IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNoaWxkRWxlbWVudCAmJiBhbmltYXRlSGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRFbGVtZW50SGVpZ2h0ID0gKCBjaGlsZEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyApICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gY2hpbGRFbGVtZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoICEgaXNFeHBhbmRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UsIHRvZ2dsZUFuaW1hdGluZywgdG9nZ2xlU2hvdWxkIH07IiwiZXhwb3J0IHtkZWZhdWx0IGFzIHdzdVNsaWRlRG93biB9IGZyb20gJy4vd3N1U2xpZGVEb3duJzsiLCJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9OyIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiXHJcbmNvbnN0IHdzdUdldEVsZW1lbnRIZWlnaHQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1U2xpZGVEb3duID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGVsZW1lbnQgPSBmYWxzZSwgLy8gRWxlbWVudCB0byBleHBhbmRcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsIC8vIEV4dHJhIGhpZWdodCBqdXN0IGluIGNhc2VcclxuICAgICAgICB0aW1pbmcgPSAxNTAsIC8vIGhvdyBsb25nIHdpbGwgdGhlIGFuaW1hdGlvbiBydW4gXHJcbiAgICAgICAgYXJpYUVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wc1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhcnRIZWlnaHQgPCAxMCApIHsgLy8gYXNzdW1lIGNsb3NlZFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGNzcyBkb2Vzbid0IHJlZ2lzdGVyIGl0LlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3N1U2xpZGVEb3duOyIsImNvbnN0IHVwZGF0ZUFyaWFFbGVtZW50ID0gKCBhY3Rpb24sIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVBcmlhRWxlbWVudDsiLCJjb25zdCB3c3VNZW51RXhwYW5kVXAgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvL3N1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZERvd24gPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9LCBcclxuICAgICAgICA1MDBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmRUb2dnbGUgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSAgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBzaG91bGRFeHBhbmQoIG5hdkl0ZW0gKSApIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdvcGVuJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kVXAoIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdjbG9zZSc7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3VsZEV4cGFuZCA9ICggbmF2SXRlbSApID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCAhIG5hdkl0ZW0uaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpIHx8ICdmYWxzZScgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdU1lbnVFeHBhbmRVcCwgd3N1TWVudUV4cGFuZFRvZ2dsZSwgd3N1TWVudUV4cGFuZERvd24gIH07IiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYW5pbWF0ZS0tc3VibWVudS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWw7IiwiaW1wb3J0IHtcclxuICAgIHdzdUFyaWFFeHBhbmRlZCxcclxuICAgIHdzdUFyaWFJc0V4cGFuZGVkLFxyXG4gICAgd3N1Q2xhc3NBZGQsXHJcbiAgICB3c3VDbGFzc1JlbW92ZSxcclxuICAgIHdzdUFuaW1hdGVTbGlkZURvd24sXHJcbiAgICB3c3VBbmltYXRlU2xpZGVVcCxcclxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcclxuXHJcbmNsYXNzIFdzdUFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS1hY2NvcmRpb24tLW9wZW4nO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkgeyBcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hY2NvcmRpb24tLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtYWNjb3JkaW9uX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFjY29yZGlvbjsgIiwiY2xhc3MgV3N1QW5jaG9yTWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gJy53c3UtYW5jaG9yLW1lbnUnO1xyXG5cclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IDAuNjA7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEVsZW1lbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0RWxlbWVudHMoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggdGhpcy5zZWxlY3RvciArICc6bm90KC53c3UtaW5pdGlhbGl6ZWQpJyApO1xyXG5cclxuICAgICAgICBpZiAoIDAgPCBmb3VuZC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBmb3VuZC5mb3JFYWNoKCAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKCBlbGVtZW50ICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWluaXRpYWxpemVkJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcclxuICAgICAgICAgICAgICAgICdzY3JvbGwnLCAoIGV2ZW50ICkgPT4geyB0aGlzLnVwZGF0ZU1lbnVzKCkgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG4gICAgICAgICAgICAgICAgJ3Jlc2l6ZScsICggZXZlbnQgKSA9PiB7IHRoaXMudXBkYXRlTWVudXMoKSB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1lbnVzKClcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIGlzQWN0aXZlKCBhbmNob3IgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggYW5jaG9yICk7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB3SGVpZ2h0ID0gKCB3aW5kb3cuaW5uZXJIZWlnaHQgKiB0aGlzLmJ1ZmZlciApO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsSGVpZ2h0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gICggZWxIZWlnaHQgPCB3SGVpZ2h0ICkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWVudXMoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSBBcnJheS5mcm9tKCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggY2hpbGRyZW4ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3RpdmVDaGlsZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDUwICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0gKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmsgPSBjaGlsZC5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpbmsgJiYgbGluay5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuY2hvciA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc0FjdGl2ZSggYW5jaG9yICkgJiYgISBhY3RpdmVDaGlsZCApIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoaWxkID0gY2hpbGQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2FjdGl2ZUNoaWxkID0gY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnd3N1LWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFjdGl2ZUNoaWxkICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZC5jbGFzc0xpc3QuYWRkKCd3c3UtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCd3c3UtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKTtcclxuXHJcbiAgICAgICAgICAgIC8qbGV0IGNoaWxkID0gZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgICAgIGlmICggMSA+IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3Utc3RpY2t5LWJveC0tc3R1Y2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3Utc3RpY2t5LWJveC0tc3R1Y2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS53aWR0aCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFuY2hvck1lbnU7ICIsImNsYXNzIFdzdUJ1dHRvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlQnV0dG9uKCBldmVudC50YXJnZXQsICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnLCBbJ1BhdXNlJywnUGxheSddIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlQWN0aXZlQnV0dG9uKCBidXR0b24sIGJ1dHRvbkNsYXNzLCBsYWJlbHMgKSB7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGJ1dHRvbkNsYXNzICsgJy0tYWN0aXZlJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID8gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggYWN0aXZlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzFdLCBsYWJlbHNbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMF0sIGxhYmVsc1sxXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VCdXR0b247ICAiLCJpbXBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlU2hvdWxkIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7d3N1U2xpZGVEb3dufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3V0aWxpdGllcyc7XHJcblxyXG5jbGFzcyBXc3VDb2xsYXBzYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY29udGVudENsYXNzJykgKSA/IGF0dHMuY29udGVudENsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgXHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBDbG9zZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldENsb3Nlc3QoIGV2ZW50RWxlbWVudCwgdGhpcy53cmFwcGVyQ2xhc3MgKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudEdldCAoIHsgcGFyZW50OiB3cmFwcGVyLCBlbGVtZW50Q2xhc3M6IHRoaXMuY29udGVudENsYXNzIH0gKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1U2xpZGVEb3duKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQ6IHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1Q29sbGFwc2FibGU7IiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBuYXYgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24taG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDsgIiwiY2xhc3MgV3N1VmlkZW9GcmFtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNzQ2xhc3MgPSAnd3N1LXZpZGVvLWZyYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J3Jlc2l6ZScsIFxyXG5cdFx0XHQoKSA9PiB7IHRoaXMucmVzaXplKCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tcGxheScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyApIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXRvZ2dsZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW9XcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGF5JykgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZpZGVvU3JjID0gdmlkZW9XcmFwcGVyLmRhdGFzZXQucGxheTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMgKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJhY2tncm91bmRWaWRlbyggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIHRoaXMuYmFzc0NsYXNzICsgJ19fdmlkZW8tYmFja2dyb3VuZCcgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXU1UgVmlkZW8gRnJhbWU6IFZpZGVvIE5vdCBGb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlb1swXSApO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJykgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFZpZGVvU2l6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbSggdmlkZW9zICkuZm9yRWFjaCggKCB2aWRlbyApID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gdmlkZW8ucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICsgMjYwICkgKiAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgPiB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1VmlkZW9GcmFtZTsgICIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBlbGVtZW50R2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnT3BlbicsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS1zdWJtZW51LWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcblxyXG4gICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL25hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc2libGluZ3MgPSBlbGVtZW50R2V0U2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIGVsZW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5hdkVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICYmICd0cnVlJyA9PSBuYXZFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VNZW51OyAiLCJcclxuXHJcbmNsYXNzIFdzdVN0aWNreUJveCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmJveFNlbGVjdG9yID0gJy53c3Utc3RpY2t5LWJveCc7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIGxldCBmb3VuZEJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggdGhpcy5ib3hTZWxlY3RvciArICc6bm90KC53c3UtaW5pdGlhbGl6ZWQpJyApO1xyXG5cclxuICAgICAgICBpZiAoIDAgPCBmb3VuZEJveGVzLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIGZvdW5kQm94ZXMuZm9yRWFjaCggKCBib3ggKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3hlcy5wdXNoKCBib3ggKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoJ3dzdS1pbml0aWFsaXplZCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXHJcbiAgICAgICAgICAgICAgICAnc2Nyb2xsJywgKCBldmVudCApID0+IHsgdGhpcy5zdGlja0JveGVzKCkgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG4gICAgICAgICAgICAgICAgJ3Jlc2l6ZScsICggZXZlbnQgKSA9PiB7IHRoaXMuc3RpY2tCb3hlcygpIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RpY2tCb3hlcyggZmFsc2UgKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIHN0aWNrQm94ZXMoIGlzRXZlbnQgPSB0cnVlICkge1xyXG5cclxuICAgICAgICBpZiAoIGlzRXZlbnQgKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFkZEFjdGl2ZUNsYXNzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ib3hlcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIDEgPiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LXN0aWNreS1ib3gtLXN0dWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXN0aWNreS1ib3gtLXN0dWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRBY3RpdmVDbGFzcygpIHtcclxuXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KCB0aGlzLnRpbWVyICk7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ZXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVBY3RpdmVDbGFzcygpO1xyXG4gICAgICAgIH0sIDIwMDAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKSB7XHJcbiAgICAgICAgdGhpcy5ib3hlcy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYWN0aXZlJyk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1U3RpY2t5Qm94OyAiLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbXlUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgMzAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHdzdURyb3Bkb3duTW9kYWwgZnJvbSBcIi4uL2VsZW1lbnRzL2Ryb3Bkb3duLW1vZGFsL19kcm9wZG93bi1tb2RhbFwiO1xyXG5pbXBvcnQgV3N1bmF2aWdhdGlvblNpdGUgZnJvbSAnLi4vbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlJztcclxuaW1wb3J0IFdzdUhlYWRlckdsb2JhbCBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXItZ2xvYmFsL19oZWFkZXItZ2xvYmFsXCI7XHJcbmltcG9ydCBXc3VBY2NvcmRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdUNvbGxhcHNhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHRcIjtcclxuaW1wb3J0IFdzdU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIGZyb20gXCIuLi9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwgZnJvbSAnLi4vYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VWaWRlb0ZyYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1U3RpY2t5Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvc3RpY2t5LWJveC9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUFuY2hvck1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9hbmNob3ItbWVudS9fc2NyaXB0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3c3UgPSB7XHJcbiAgICB2ZXJ0aWNhbE5hdml0YXRpb246IG5ldyBXc3VuYXZpZ2F0aW9uU2l0ZSgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVWZXJ0aWNhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCgpLFxyXG4gICAgaGVhZGVyR2xvYmFsOiBuZXcgV3N1SGVhZGVyR2xvYmFsKCksXHJcbiAgICBhY2NvcmRpb246IG5ldyBXc3VBY2NvcmRpb24oKSxcclxuICAgIGNvbGxhcHNhYmxlOiBuZXcgV3N1Q29sbGFwc2FibGUoKSxcclxuICAgIG1lbnU6IG5ldyBXc3VNZW51KCksXHJcbiAgICBidXR0b246IG5ldyBXc3VCdXR0b24oKSxcclxuICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAvL3N1Ym1lbnVTbGlkZVZlcnRpY2FsOiBuZXcgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsKCksXHJcbiAgICB9LFxyXG4gICAgdmlkZW9GcmFtZTogbmV3IFdzdVZpZGVvRnJhbWUoKSxcclxuICAgIHN0aWNreUJveDogbmV3IFdzdVN0aWNreUJveCgpLFxyXG4gICAgd3N1QW5jaG9yTWVudTogbmV3IFdzdUFuY2hvck1lbnUoKSxcclxufVxyXG4iXSwibmFtZXMiOlsiYXJpYVVwZGF0ZSIsImFjdGlvbiIsInNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImhhc0F0dHJpYnV0ZSIsInJlZ2V4IiwiYWN0aW9uTGFiZWwiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcmlhVXBkYXRlRWxlbWVudCIsImVsZW1lbnRHZXQiLCJwYXJlbnQiLCJlbGVtZW50Q2xhc3MiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlbGVtZW50R2V0Q2xvc2VzdCIsInBhcmVudENsYXNzIiwiY2xvc2VzdCIsImVsZW1lbnRHZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJrZXlEb3duRXZlbnQiLCJwcm9wcyIsImRvbUV2ZW50Iiwia2V5IiwiaW5DbGFzcyIsImV2ZW50RWxlbWVudCIsInRhcmdldCIsImV2ZW50S2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInRvZ2dsZUFyaWEiLCJ3cmFwcGVyIiwidG9nZ2xlQnlDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UiLCJ0b2dnbGVBcmlhRXhwYW5kZWRPcGVuIiwiaXNBbmltYXRlZCIsImFjdGlvblByZWZpeCIsImFyaWFMYWJlbEVsZW1lbnQiLCJ0b2dnbGVIZWlnaHQiLCJ0b2dnbGVBbmltYXRpbmciLCJ0b2dnbGVMYWJlbCIsImFkZCIsInJlbW92ZSIsImFuaW1hdGVkRHVyYXRpb24iLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiY2hpbGRFbGVtZW50IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0b2dnbGVTaG91bGQiLCJjbGlja0NsYXNzIiwiY2hlY2tQYXJlbnQiLCJjaGVja1NpYmxpbmciLCJjaGVja0VtcHR5TGluayIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpc0V4cGFuZGVkIiwiZXhwYW5kZWRUZXh0IiwiY29sbGFwc2VkVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJSZWdFeHAiLCJpc0V4cGFuZGluZyIsImhlaWdodFBhZGRpbmciLCJjaGlsZEVsZW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJkZWZhdWx0Iiwid3N1U2xpZGVEb3duIiwid3N1QW5pbWF0ZVNsaWRlRG93biIsImFyZ3MiLCJkdXJhdGlvbiIsImV4dHJhIiwicGFyc2VJbnQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJ3c3VDbGFzc0FkZCIsIndzdUNsYXNzUmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJ3c3VHZXRFbGVtZW50SGVpZ2h0IiwiZGlzcGxheSIsImhlaWdodCIsInRpbWluZyIsImFyaWFFbGVtZW50Iiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJ1cGRhdGVBcmlhRWxlbWVudCIsIndzdU1lbnVFeHBhbmRVcCIsIm5hdkl0ZW0iLCJzdWJNZW51IiwibGFzdEVsZW1lbnRDaGlsZCIsIndzdU1lbnVFeHBhbmREb3duIiwid3N1TWVudUV4cGFuZFRvZ2dsZSIsInNob3VsZEV4cGFuZCIsIldzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCIsImF0dHMiLCJpbml0IiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50cyIsImJpbmQiLCJldmVudCIsIm5hdkVsZW1lbnQiLCJzaG91bGRDbG9zZSIsImVycm9yIiwiV3N1QWNjb3JkaW9uIiwib3BlbkNsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImFjY29yZGlvbkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiV3N1QW5jaG9yTWVudSIsImJ1ZmZlciIsImluaXRFbGVtZW50cyIsImZvdW5kIiwid2luZG93IiwidXBkYXRlTWVudXMiLCJhbmNob3IiLCJ3SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJlbEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNoaWxkcmVuIiwiQXJyYXkiLCJmcm9tIiwiYWN0aXZlQ2hpbGQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjaGlsZCIsImxpbmsiLCJpc0FjdGl2ZSIsIldzdUJ1dHRvbiIsInRvZ2dsZUFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvbkNsYXNzIiwibGFiZWxzIiwiYWN0aXZlQ2xhc3MiLCJXc3VDb2xsYXBzYWJsZSIsIndyYXBwZXJDbGFzcyIsImhhc093blByb3BlcnR5IiwidG9nZ2xlQ2xhc3MiLCJjb250ZW50Q2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIldzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCIsImtleURvd25FdmVudHMiLCJjbG9zZSIsIm9wZW4iLCJuYXYiLCJib2R5IiwiV3N1VmlkZW9GcmFtZSIsImJhc3NDbGFzcyIsInNldFZpZGVvU2l6ZSIsInJlc2l6ZSIsInBsYXlWaWRlbyIsInRvZ2dsZUJhY2tncm91bmRWaWRlbyIsInBhdXNlQmFja2dyb3VuZFZpZGVvIiwidmlkZW9XcmFwcGVyIiwidmlkZW8iLCJ2aWRlb1NyYyIsImRhdGFzZXQiLCJwbGF5IiwicGxheWVyIiwiVmltZW8iLCJQbGF5ZXIiLCJwYXVzZSIsInZpZGVvcyIsImlzV2lkZVZpZGVvIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIldzdU1lbnUiLCJjbG9zZVNpYmxpbmdzIiwiV3N1U3RpY2t5Qm94IiwiYm94ZXMiLCJib3hTZWxlY3RvciIsImluaXRpYWxpemUiLCJmb3VuZEJveGVzIiwiYm94Iiwic3RpY2tCb3hlcyIsImlzRXZlbnQiLCJhZGRBY3RpdmVDbGFzcyIsImZpcnN0RWxlbWVudENoaWxkIiwiY2xlYXJUaW1lb3V0IiwicmVtb3ZlQWN0aXZlQ2xhc3MiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiLCJzdGlja3lCb3giLCJ3c3VBbmNob3JNZW51Il0sInNvdXJjZVJvb3QiOiIifQ==