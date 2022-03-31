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

/***/ "./src/modules/hero-slider/_script.js":
/*!********************************************!*\
  !*** ./src/modules/hero-slider/_script.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js");
//load swiper css through js
//populate slider nav text based on slide title -- use data attribute
//??
//import { ariaUpdate } from "../../../_assets/js/ariaUpdate";
 //import 'swiper/swiper-bundle.css';

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_1__.default, swiper__WEBPACK_IMPORTED_MODULE_2__.default]);

var initSwiper = function initSwiper() {
  console.log('initSwiper');
  var slider = document.getElementsByClassName('swiper');

  if (slider.length > 0) {
    console.log('inside if');
    var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__.default('.swiper', {
      loop: true,
      direction: 'horizontal',
      slidesPerView: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false
      },
      effect: 'fade'
    });
  }
};
/*class WsuHeroSlider {
  constructor( atts = {} ) {
    this.timer = false;

    this.init();
  }

  init() {

  }
}*/


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  initSwiper();
});

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

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "$": () => (/* binding */ $),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addClass": () => (/* binding */ addClass),
/* harmony export */   "animate": () => (/* binding */ animate),
/* harmony export */   "animationEnd": () => (/* binding */ animationEnd),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "appendTo": () => (/* binding */ appendTo),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "blur": () => (/* binding */ blur),
/* harmony export */   "change": () => (/* binding */ change),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "closest": () => (/* binding */ closest),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "dataset": () => (/* binding */ dataset),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "eq": () => (/* binding */ eq),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "focus": () => (/* binding */ focus),
/* harmony export */   "focusin": () => (/* binding */ focusin),
/* harmony export */   "focusout": () => (/* binding */ focusout),
/* harmony export */   "hasClass": () => (/* binding */ hasClass),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "html": () => (/* binding */ html),
/* harmony export */   "index": () => (/* binding */ index),
/* harmony export */   "insertAfter": () => (/* binding */ insertAfter),
/* harmony export */   "insertBefore": () => (/* binding */ insertBefore),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "keydown": () => (/* binding */ keydown),
/* harmony export */   "keypress": () => (/* binding */ keypress),
/* harmony export */   "keyup": () => (/* binding */ keyup),
/* harmony export */   "mousedown": () => (/* binding */ mousedown),
/* harmony export */   "mouseenter": () => (/* binding */ mouseenter),
/* harmony export */   "mouseleave": () => (/* binding */ mouseleave),
/* harmony export */   "mousemove": () => (/* binding */ mousemove),
/* harmony export */   "mouseout": () => (/* binding */ mouseout),
/* harmony export */   "mouseover": () => (/* binding */ mouseover),
/* harmony export */   "mouseup": () => (/* binding */ mouseup),
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "nextAll": () => (/* binding */ nextAll),
/* harmony export */   "off": () => (/* binding */ off),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outerHeight": () => (/* binding */ outerHeight),
/* harmony export */   "outerWidth": () => (/* binding */ outerWidth),
/* harmony export */   "parent": () => (/* binding */ parent),
/* harmony export */   "parents": () => (/* binding */ parents),
/* harmony export */   "prepend": () => (/* binding */ prepend),
/* harmony export */   "prependTo": () => (/* binding */ prependTo),
/* harmony export */   "prev": () => (/* binding */ prev),
/* harmony export */   "prevAll": () => (/* binding */ prevAll),
/* harmony export */   "prop": () => (/* binding */ prop),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "removeAttr": () => (/* binding */ removeAttr),
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "removeData": () => (/* binding */ removeData),
/* harmony export */   "resize": () => (/* binding */ resize),
/* harmony export */   "scroll": () => (/* binding */ scroll),
/* harmony export */   "scrollLeft": () => (/* binding */ scrollLeft),
/* harmony export */   "scrollTo": () => (/* binding */ scrollTo),
/* harmony export */   "scrollTop": () => (/* binding */ scrollTop),
/* harmony export */   "show": () => (/* binding */ show),
/* harmony export */   "siblings": () => (/* binding */ siblings),
/* harmony export */   "stop": () => (/* binding */ stop),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "submit": () => (/* binding */ submit),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "toggleClass": () => (/* binding */ toggleClass),
/* harmony export */   "touchend": () => (/* binding */ touchend),
/* harmony export */   "touchmove": () => (/* binding */ touchmove),
/* harmony export */   "touchstart": () => (/* binding */ touchstart),
/* harmony export */   "transform": () => (/* binding */ transform),
/* harmony export */   "transition": () => (/* binding */ transition),
/* harmony export */   "transitionEnd": () => (/* binding */ transitionEnd),
/* harmony export */   "trigger": () => (/* binding */ trigger),
/* harmony export */   "val": () => (/* binding */ val),
/* harmony export */   "value": () => (/* binding */ value),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

<<<<<<< HEAD
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
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__.default() //heroSlider: new HeroSlider(),
=======
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}
>>>>>>> 5830cc8 (Get swiper functional and test settings)

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);



/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "getDocument": () => (/* binding */ getDocument),
/* harmony export */   "getWindow": () => (/* binding */ getWindow),
/* harmony export */   "ssrDocument": () => (/* binding */ ssrDocument),
/* harmony export */   "ssrWindow": () => (/* binding */ ssrWindow)
/* harmony export */ });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getBreakpoint)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__.default,
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBreakpoint)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

  if (breakpointOnlyParams) {
    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === 'undefined') return;

      if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
        breakpointOnlyParams[param] = 'auto';
      } else if (param === 'slidesPerView') {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }

  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");

    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }

    swiper.emitContainerClasses();
  }

  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/check-overflow/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/addClasses.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addClasses)
/* harmony export */ });
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ "./node_modules/swiper/esm/components/core/classes/addClasses.js");
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ "./node_modules/swiper/esm/components/core/classes/removeClasses.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__.default,
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/removeClasses.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeClasses)
/* harmony export */ });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/core-class.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/get-support */ "./node_modules/swiper/esm/utils/get-support.js");
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/get-device */ "./node_modules/swiper/esm/utils/get-device.js");
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/get-browser */ "./node_modules/swiper/esm/utils/get-browser.js");
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../modules/resize/resize */ "./node_modules/swiper/esm/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../modules/observer/observer */ "./node_modules/swiper/esm/modules/observer/observer.js");
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modular */ "./node_modules/swiper/esm/components/core/modular.js");
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-emitter */ "./node_modules/swiper/esm/components/core/events-emitter.js");
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update/index */ "./node_modules/swiper/esm/components/core/update/index.js");
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./translate/index */ "./node_modules/swiper/esm/components/core/translate/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition/index */ "./node_modules/swiper/esm/components/core/transition/index.js");
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slide/index */ "./node_modules/swiper/esm/components/core/slide/index.js");
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loop/index */ "./node_modules/swiper/esm/components/core/loop/index.js");
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grab-cursor/index */ "./node_modules/swiper/esm/components/core/grab-cursor/index.js");
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manipulation/index */ "./node_modules/swiper/esm/components/core/manipulation/index.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./events/index */ "./node_modules/swiper/esm/components/core/events/index.js");
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./breakpoints/index */ "./node_modules/swiper/esm/components/core/breakpoints/index.js");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/index */ "./node_modules/swiper/esm/components/core/classes/index.js");
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/index */ "./node_modules/swiper/esm/components/core/images/index.js");
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./check-overflow/index */ "./node_modules/swiper/esm/components/core/check-overflow/index.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./defaults */ "./node_modules/swiper/esm/components/core/defaults.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-param-reassign: "off" */























var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_2__.default,
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_3__.default,
  update: _update_index__WEBPACK_IMPORTED_MODULE_4__.default,
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_5__.default,
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_6__.default,
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_7__.default,
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_8__.default,
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_9__.default,
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_10__.default,
  events: _events_index__WEBPACK_IMPORTED_MODULE_11__.default,
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_12__.default,
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_13__.default,
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_14__.default,
  images: _images_index__WEBPACK_IMPORTED_MODULE_15__.default
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).length > 1) {
      var swipers = [];
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(params.el).each(function (containerEl) {
        var newParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0,_utils_get_support__WEBPACK_IMPORTED_MODULE_17__.getSupport)();
    swiper.device = (0,_utils_get_device__WEBPACK_IMPORTED_MODULE_18__.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0,_utils_get_browser__WEBPACK_IMPORTED_MODULE_19__.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, _defaults__WEBPACK_IMPORTED_MODULE_20__.default);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, swiper.params);
    swiper.passedParams = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_1__.default; // Extend Swiper

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  };

  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  };

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    var getWrapperSelector = function getWrapperSelector() {
      return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
    };

    var getWrapper = function getWrapper() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = function (options) {
          return $el.children(options);
        };

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    var $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
      var wrapper = document.createElement('div');
      $wrapperEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function (slideEl) {
        $wrapperEl.append(slideEl);
      });
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.extend)(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0,_utils_utils__WEBPACK_IMPORTED_MODULE_16__.now)();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_20__.default;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_21__.default, _modules_observer_observer__WEBPACK_IMPORTED_MODULE_22__.default]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/defaults.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events-emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ "./node_modules/swiper/esm/components/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ "./node_modules/swiper/esm/components/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js");
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onResize */ "./node_modules/swiper/esm/components/core/events/onResize.js");
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ "./node_modules/swiper/esm/components/core/events/onClick.js");
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onScroll */ "./node_modules/swiper/esm/components/core/events/onScroll.js");







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__.default.bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__.default.bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__.default.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_4__.default.bind(swiper);
  }

  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__.default.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default, true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_6__.default);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onClick.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onClick)
/* harmony export */ });
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onResize.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onScroll)
/* harmony export */ });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchEnd)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchMove.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchMove)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



function onTouchMove(event) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchStart.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onTouchStart)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)() || el === (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(event.path[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__.default,
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setGrabCursor)
/* harmony export */ });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unsetGrabCursor)
/* harmony export */ });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "./node_modules/swiper/esm/components/core/images/loadImage.js");
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ "./node_modules/swiper/esm/components/core/images/preloadImages.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__.default,
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/loadImage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadImage)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/preloadImages.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preloadImages)
/* harmony export */ });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ "./node_modules/swiper/esm/components/core/loop/loopCreate.js");
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ "./node_modules/swiper/esm/components/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__.default,
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__.default,
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopCreate.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopCreate)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loopCreate() {
  var swiper = this;
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopDestroy)
/* harmony export */ });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopFix.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loopFix)
/* harmony export */ });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addSlide)
/* harmony export */ });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendSlide)
/* harmony export */ });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js");
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js");
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js");
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js");
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__.default,
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__.default,
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__.default,
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__.default,
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prependSlide)
/* harmony export */ });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeAllSlides)
/* harmony export */ });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeSlide)
/* harmony export */ });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/modular.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/modular.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ "./node_modules/swiper/esm/components/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ "./node_modules/swiper/esm/components/core/slide/slideNext.js");
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ "./node_modules/swiper/esm/components/core/slide/slidePrev.js");
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ "./node_modules/swiper/esm/components/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__.default,
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__.default,
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__.default,
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__.default,
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__.default,
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__.default,
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideNext)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
  if (!enabled) return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slidePrev.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slidePrev)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideReset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideReset)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideTo.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideTo)
/* harmony export */ });
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToClosest)
/* harmony export */ });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ slideToLoop)
/* harmony export */ });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ "./node_modules/swiper/esm/components/core/transition/setTransition.js");
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ "./node_modules/swiper/esm/components/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__.default,
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__.default,
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/setTransition.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTransition)
/* harmony export */ });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionStart.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionStart)
/* harmony export */ });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/getTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSwiperTranslate)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ "./node_modules/swiper/esm/components/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ "./node_modules/swiper/esm/components/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ "./node_modules/swiper/esm/components/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ "./node_modules/swiper/esm/components/core/translate/translateTo.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__.default,
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__.default,
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__.default,
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__.default,
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ maxTranslate)
/* harmony export */ });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/minTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ minTranslate)
/* harmony export */ });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/setTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setTranslate)
/* harmony export */ });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/translateTo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ translateTo)
/* harmony export */ });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ "./node_modules/swiper/esm/components/core/update/updateSize.js");
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ "./node_modules/swiper/esm/components/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ "./node_modules/swiper/esm/components/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__.default,
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__.default,
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__.default,
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__.default,
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__.default,
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__.default,
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__.default,
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__.default,
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__.default
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateActiveIndex)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js":
/*!****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAutoHeight)
/* harmony export */ });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateClickedSlide)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateProgress.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProgress)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSize)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlides.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlides)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesClasses)
/* harmony export */ });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesOffset)
/* harmony export */ });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateSlidesProgress)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/navigation/navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    swiper.params.navigation = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElementIfNotDefined)(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }

      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    },
    click: function click(swiper, e) {
      var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).is($prevEl) && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.default)(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.nextTick)(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    swiper.params.scrollbar = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.createElementIfNotDefined)($swiperEl, swiper.params.scrollbar, swiper.params.createElements, {
      el: 'swiper-scrollbar'
    });
    var params = swiper.params.scrollbar;
    if (!params.el) return;
    var $el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__.default)("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.extend)(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.bindModuleMethods)(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.scrollbar.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
      }
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/observer/observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.bindModuleMethods)(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/resize/resize.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



var supportsResizeObserver = function supportsResizeObserver() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  return typeof window.ResizeObserver !== 'undefined';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.extend)(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/utils/dom.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__.addClass,
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__.removeClass,
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__.hasClass,
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__.toggleClass,
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__.attr,
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__.removeAttr,
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__.transform,
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__.transition,
  on: dom7__WEBPACK_IMPORTED_MODULE_0__.on,
  off: dom7__WEBPACK_IMPORTED_MODULE_0__.off,
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__.trigger,
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__.transitionEnd,
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__.outerWidth,
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__.outerHeight,
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__.styles,
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__.offset,
  css: dom7__WEBPACK_IMPORTED_MODULE_0__.css,
  each: dom7__WEBPACK_IMPORTED_MODULE_0__.each,
  html: dom7__WEBPACK_IMPORTED_MODULE_0__.html,
  text: dom7__WEBPACK_IMPORTED_MODULE_0__.text,
  is: dom7__WEBPACK_IMPORTED_MODULE_0__.is,
  index: dom7__WEBPACK_IMPORTED_MODULE_0__.index,
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__.eq,
  append: dom7__WEBPACK_IMPORTED_MODULE_0__.append,
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__.prepend,
  next: dom7__WEBPACK_IMPORTED_MODULE_0__.next,
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__.nextAll,
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__.prev,
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__.prevAll,
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__.parent,
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__.parents,
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__.closest,
  find: dom7__WEBPACK_IMPORTED_MODULE_0__.find,
  children: dom7__WEBPACK_IMPORTED_MODULE_0__.children,
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__.filter,
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__.remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom7__WEBPACK_IMPORTED_MODULE_0__.$);

/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBrowser": () => (/* binding */ getBrowser)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-device.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDevice": () => (/* binding */ getDevice)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "./node_modules/swiper/esm/utils/get-support.js");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = (0,_get_support__WEBPACK_IMPORTED_MODULE_1__.getSupport)();
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-support.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSupport": () => (/* binding */ getSupport)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/utils.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteProps": () => (/* binding */ deleteProps),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "getTranslate": () => (/* binding */ getTranslate),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "bindModuleMethods": () => (/* binding */ bindModuleMethods),
/* harmony export */   "getComputedStyle": () => (/* binding */ getComputedStyle),
/* harmony export */   "classesToSelector": () => (/* binding */ classesToSelector),
/* harmony export */   "createElementIfNotDefined": () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}

function createElementIfNotDefined($container, params, createElements, checkProps) {
  var document = (0,ssr_window__WEBPACK_IMPORTED_MODULE_0__.getDocument)();

  if (createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = document.createElement('div');
        element.className = checkProps[key];
        $container.append(element);
        params[key] = element;
      }
    });
  }

  return params;
}



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
/* harmony import */ var _modules_hero_slider_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/hero-slider/_script */ "./src/modules/hero-slider/_script.js");
//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";











var wsu = {
  verticalNavitation: new _modules_deprecated_navigation_site_navigation_site__WEBPACK_IMPORTED_MODULE_0__.default(),
  navigationSiteVertical: new _modules_navigation_site_vertical_script__WEBPACK_IMPORTED_MODULE_5__.default(),
  navigationSiteHorizontal: new _components_experimental_navigation_horizontal_script__WEBPACK_IMPORTED_MODULE_7__.default(),
  headerGlobal: new _modules_header_global_header_global__WEBPACK_IMPORTED_MODULE_1__.default(),
  accordion: new _components_accordion_script__WEBPACK_IMPORTED_MODULE_2__.default(),
  collapsable: new _components_experimental_collapsable_script__WEBPACK_IMPORTED_MODULE_3__.default(),
  menu: new _components_menu_script__WEBPACK_IMPORTED_MODULE_4__.default(),
  button: new _components_button_script__WEBPACK_IMPORTED_MODULE_9__.default(),
  animations: {//submenuSlideVertical: new WsuAnimateSubmenuSlideVertical(),
  },
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__.default(),
  heroSlider: new _modules_hero_slider_script__WEBPACK_IMPORTED_MODULE_10__.default()
};
})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFBQSxVQUFVLEVBQUUsSUFBSTVDLG1GQUFKO0FBWkosQ0FBWixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VBcmlhLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVNsaWRlRG93bi5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX25hdmlnYXRpb24taG9yaXpvbnRhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL21lbnUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJpYVVwZGF0ZSA9ICggYWN0aW9uLCBzZWxlY3RvciApID0+IHtcclxuXHJcbiAgICBsZXQgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKFxyXG4gICAgICAgICggZWxlbWVudCwgaSApID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydChhY3Rpb25MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCggbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5jb25zdCBhcmlhVXBkYXRlRWxlbWVudCA9ICggZWxlbWVudCwgYWN0aW9uICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQsIGFyaWFVcGRhdGUgfTsiLCJjb25zdCBlbGVtZW50R2V0ID0gKCB7IHBhcmVudCA9IGZhbHNlLCBlbGVtZW50Q2xhc3MgPSBmYWxzZSB9ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudENsYXNzICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBwYXJlbnQgPyBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICkgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIDAgPCBlbGVtZW50cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBlbGVtZW50R2V0Q2xvc2VzdCA9ICggZWxlbWVudCwgcGFyZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCAnLicgKyBwYXJlbnRDbGFzcyApO1xyXG4gICAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBlbGVtZW50R2V0U2libGluZ3MgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgLy8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xyXG5cdGxldCBzaWJsaW5ncyA9IFtdO1xyXG5cdGxldCBzaWJsaW5nID0gZWxlbWVudC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XHJcblx0d2hpbGUgKCBzaWJsaW5nICkge1xyXG5cclxuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiBzaWJsaW5ncztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0LCBlbGVtZW50R2V0U2libGluZ3MgfSIsImNvbnN0IGtleURvd25FdmVudCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZG9tRXZlbnQgPSBmYWxzZSxcclxuICAgICAgICBrZXkgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGluQ2xhc3MgID0gZmFsc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoICEgZG9tRXZlbnQgfHwgISBrZXkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV2ZW50RWxlbWVudCA9IGRvbUV2ZW50LnRhcmdldDtcclxuICAgIGxldCBldmVudEtleSAgICAgPSBkb21FdmVudC5rZXk7XHJcblxyXG4gICAgaWYgKCBrZXkgPT09IGV2ZW50S2V5ICYmIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5DbGFzcyAmJiBldmVudEVsZW1lbnQuY2xvc2VzdCggJy4nICsgaW5DbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGtleURvd25FdmVudCB9OyIsImNvbnN0IHRvZ2dsZUFyaWEgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciA9IGZhbHNlLFxyXG4gICAgICAgIHRvZ2dsZUJ5Q2xhc3MgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHRvZ2dsZUJ5Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCB0b2dnbGVCeUNsYXNzICkgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgJiYgJ2ZhbHNlJyAhPSB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgdHJ1ZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIHRydWUgKTtcclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIGZhbHNlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBbmltYXRpbmcgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVkRHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgYW5pbWF0ZUNsYXNzICAgICA9ICd3c3UtYW5pbWF0aW5nJyxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ICAgID0gZmFsc2UsXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ICAgICA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggaXNBbmltYXRlZCAmJiB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCBhbmltYXRlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFuaW1hdGVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFuaW1hdGVIZWlnaHQgJiYgY2hpbGRFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWREdXJhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhbmltYXRlQ2xhc3MgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlU2hvdWxkID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBldmVudEVsZW1lbnQgPSBmYWxzZSwgXHJcbiAgICAgICAgY2xpY2tDbGFzcyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrUGFyZW50ID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTaWJsaW5nID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tFbXB0eUxpbmsgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNsaWNrQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja0VtcHR5TGluayAmJiBldmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdocmVmJykgJiYgJyMnID09PSBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrUGFyZW50ICYmIGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1NpYmxpbmcgJiYgZXZlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVMYWJlbCA9ICggcHJvcHMsIGlzRXhwYW5kZWQgKSA9PiB7XHJcbiAgICBsZXQgeyBcclxuICAgICAgICBleHBhbmRlZFRleHQgPSAnQ2xvc2UnLCBcclxuICAgICAgICBjb2xsYXBzZWRUZXh0ID0gJ09wZW4nLCBcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc29sZS5sb2coIHByb3BzICk7XHJcblxyXG5cclxuICAgIGlmICggYXJpYUxhYmVsRWxlbWVudCAmJiBhcmlhTGFiZWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICkge1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBhcmlhTGFiZWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uID0gKCBpc0V4cGFuZGVkICkgPyBleHBhbmRlZFRleHQgOiBjb2xsYXBzZWRUZXh0O1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCBleHBhbmRlZFRleHQgKyAnfCcgKyBjb2xsYXBzZWRUZXh0LCBcImdcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZWdleCApO1xyXG5cclxuICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb24gKTtcclxuXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVIZWlnaHQgPSAoIHByb3BzLCBpc0V4cGFuZGluZyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgPSBmYWxzZSxcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjaGlsZEVsZW1lbnQgJiYgYW5pbWF0ZUhlaWdodCApIHtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkRWxlbWVudEhlaWdodCA9ICggY2hpbGRFbGVtZW50LnNjcm9sbEhlaWdodCArIGhlaWdodFBhZGRpbmcgKSArIFwicHhcIjtcclxuXHJcbiAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGNoaWxkRWxlbWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCAhIGlzRXhwYW5kaW5nICkge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHRvZ2dsZUFyaWEsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlLCB0b2dnbGVBbmltYXRpbmcsIHRvZ2dsZVNob3VsZCB9OyIsImNvbnN0IHdzdUFuaW1hdGVTbGlkZURvd24gPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFuaW1hdGVTbGlkZVVwID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgICAgIGNhbGxiYWNrID0gZmFsc2UsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuICAgIGxldCBkZWxheVRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xyXG5cclxuICAgIH0sIDE1ICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUFuaW1hdGVTbGlkZURvd24sIHdzdUFuaW1hdGVTbGlkZVVwIH07IiwiY29uc3Qgd3N1QXJpYUV4cGFuZGVkID0gKCBlbGVtZW50LCB2YWx1ZSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB2YWx1ZSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFyaWFJc0V4cGFuZGVkID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoJ3RydWUnID09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHsgd3N1QXJpYUV4cGFuZGVkLCB3c3VBcmlhSXNFeHBhbmRlZCB9IiwiY29uc3Qgd3N1Q2xhc3NBZGQgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NSZW1vdmUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NUb2dnbGUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VDbGFzc0FkZCwgd3N1Q2xhc3NSZW1vdmUsIHdzdUNsYXNzVG9nZ2xlIH0iLCJleHBvcnQge3dzdUFuaW1hdGVTbGlkZURvd24gYXMgd3N1QW5pbWF0ZVNsaWRlRG93biB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlVXAgYXMgd3N1QW5pbWF0ZVNsaWRlVXAgfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFyaWFFeHBhbmRlZCBhcyB3c3VBcmlhRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUFyaWFJc0V4cGFuZGVkIGFzIHdzdUFyaWFJc0V4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VDbGFzc0FkZCBhcyB3c3VDbGFzc0FkZCB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzUmVtb3ZlIGFzIHdzdUNsYXNzUmVtb3ZlIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NUb2dnbGUgYXMgd3N1Q2xhc3NUb2dnbGUgfSBmcm9tICcuL3dzdUNsYXNzJzsiLCJcclxuY29uc3Qgd3N1R2V0RWxlbWVudEhlaWdodCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCB3c3VTbGlkZURvd24gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZWxlbWVudCA9IGZhbHNlLCAvLyBFbGVtZW50IHRvIGV4cGFuZFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCwgLy8gRXh0cmEgaGllZ2h0IGp1c3QgaW4gY2FzZVxyXG4gICAgICAgIHRpbWluZyA9IDE1MCwgLy8gaG93IGxvbmcgd2lsbCB0aGUgYW5pbWF0aW9uIHJ1biBcclxuICAgICAgICBhcmlhRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzXHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCBzdGFydEhlaWdodCA8IDEwICkgeyAvLyBhc3N1bWUgY2xvc2VkXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgY3NzIGRvZXNuJ3QgcmVnaXN0ZXIgaXQuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3c3VTbGlkZURvd247IiwiY29uc3QgdXBkYXRlQXJpYUVsZW1lbnQgPSAoIGFjdGlvbiwgZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUFyaWFFbGVtZW50OyIsImNvbnN0IHdzdU1lbnVFeHBhbmRVcCA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICkgPT4ge1xyXG5cclxuICAgIGxldCBzdWJNZW51ID0gbmF2SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8vc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kRG93biA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICkgPT4ge1xyXG5cclxuICAgIGxldCBzdWJNZW51ID0gbmF2SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIDUwMFxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZFRvZ2dsZSA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICApID0+IHtcclxuXHJcbiAgICBpZiAoIHNob3VsZEV4cGFuZCggbmF2SXRlbSApICkge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2SXRlbSwgYXJncyApO1xyXG5cclxuICAgICAgICByZXR1cm4gJ29wZW4nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmRVcCggbmF2SXRlbSwgYXJncyApO1xyXG5cclxuICAgICAgICByZXR1cm4gJ2Nsb3NlJztcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3Qgc2hvdWxkRXhwYW5kID0gKCBuYXZJdGVtICkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoICEgbmF2SXRlbS5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgfHwgJ2ZhbHNlJyA9PSBuYXZJdGVtLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1TWVudUV4cGFuZFVwLCB3c3VNZW51RXhwYW5kVG9nZ2xlLCB3c3VNZW51RXhwYW5kRG93biAgfTsiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuXHJcbmNsYXNzIFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hbmltYXRlLS1zdWJtZW51LXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbDsiLCJpbXBvcnQge1xyXG4gICAgd3N1QXJpYUV4cGFuZGVkLFxyXG4gICAgd3N1QXJpYUlzRXhwYW5kZWQsXHJcbiAgICB3c3VDbGFzc0FkZCxcclxuICAgIHdzdUNsYXNzUmVtb3ZlLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlRG93bixcclxuICAgIHdzdUFuaW1hdGVTbGlkZVVwLFxyXG59IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvd3N1UGFydGlhbHMnO1xyXG5cclxuY2xhc3MgV3N1QWNjb3JkaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2xhc3MgPSAnd3N1LWFjY29yZGlvbi0tb3Blbic7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7IFxyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFjY29yZGlvbi0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25FbGVtZW50ID0gZXZlbnRFbGVtZW50LmNsb3Nlc3QoJy53c3UtYWNjb3JkaW9uJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uQ29udGVudCA9IGFjY29yZGlvbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1hY2NvcmRpb25fX2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdzdUFyaWFJc0V4cGFuZGVkKCBldmVudEVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZVVwKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIHRydWUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlRG93biggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QWNjb3JkaW9uOyAiLCJjbGFzcyBXc3VCdXR0b24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZUJ1dHRvbiggZXZlbnQudGFyZ2V0LCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJywgWydQYXVzZScsJ1BsYXknXSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvZ2dsZUFjdGl2ZUJ1dHRvbiggYnV0dG9uLCBidXR0b25DbGFzcywgbGFiZWxzICkge1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSBidXR0b25DbGFzcyArICctLWFjdGl2ZSc7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA/IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoIGFjdGl2ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1sxXSwgbGFiZWxzWzBdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzBdLCBsYWJlbHNbMV0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QnV0dG9uOyAgIiwiaW1wb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcbmltcG9ydCB7IHRvZ2dsZVNob3VsZCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQge3dzdVNsaWRlRG93bn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy91dGlsaXRpZXMnO1xyXG5cclxuY2xhc3MgV3N1Q29sbGFwc2FibGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMud3JhcHBlckNsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3dyYXBwZXJDbGFzcycpICkgPyBhdHRzLndyYXBwZXJDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3RvZ2dsZUNsYXNzJykgKSA/IGF0dHMudG9nZ2xlQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuY29udGVudENsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2NvbnRlbnRDbGFzcycpICkgPyBhdHRzLmNvbnRlbnRDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLWNvbnRlbnQnO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IFxyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXRDbG9zZXN0KCBldmVudEVsZW1lbnQsIHRoaXMud3JhcHBlckNsYXNzICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRHZXQgKCB7IHBhcmVudDogd3JhcHBlciwgZWxlbWVudENsYXNzOiB0aGlzLmNvbnRlbnRDbGFzcyB9IClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdVNsaWRlRG93bihcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50OiB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUNvbGxhcHNhYmxlOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggbmF2ICk7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw7ICIsImNsYXNzIFdzdVZpZGVvRnJhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzc0NsYXNzID0gJ3dzdS12aWRlby1mcmFtZSc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdyZXNpemUnLCBcclxuXHRcdFx0KCkgPT4geyB0aGlzLnJlc2l6ZSgpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXBsYXknICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcgKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi10b2dnbGUtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5VmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvV3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGxheScpICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2aWRlb1NyYyA9IHZpZGVvV3JhcHBlci5kYXRhc2V0LnBsYXk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZGVvU3JjICk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvJyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUJhY2tncm91bmRWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlbyApO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCB0aGlzLmJhc3NDbGFzcyArICdfX3ZpZGVvLWJhY2tncm91bmQnICk7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlby5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1NVIFZpZGVvIEZyYW1lOiBWaWRlbyBOb3QgRm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW9bMF0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRWaWRlb1NpemUoKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlb3MubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oIHZpZGVvcyApLmZvckVhY2goICggdmlkZW8gKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IHZpZGVvLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCArIDI2MCApICogMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICggdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCAvIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCAqIDAuNTYyNSApID4gdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdVZpZGVvRnJhbWU7ICAiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZWxlbWVudEdldFNpYmxpbmdzIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1TWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ09wZW4nLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tc3VibWVudS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG5cclxuICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9uYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZWxlbWVudEdldFNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIHNpYmxpbmdzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBlbGVtZW50ICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBlbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCBuYXZFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSAmJiAndHJ1ZScgPT0gbmF2RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TWVudTsgIiwiaW1wb3J0IHsgZWxlbWVudEdldCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlU2hvdWxkLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQgeyBrZXlEb3duRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cyc7XHJcblxyXG5jbGFzcyBXc3VuYXZpZ2F0aW9uU2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDbGFzcyAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2Nsb3NlQ2xhc3MnKSApID8gYXR0cy5jbG9zZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLWNsb3NlJztcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyAgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdvcGVuQ2xhc3MnKSApID8gYXR0cy5vcGVuQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tb3Blbic7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ2xhc3MgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGluZ0NsYXNzJykgKSA/IGF0dHMuYW5pbWF0aW5nQ2xhc3MgOiAnd3N1LWFuaW1hdGluZyc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmcgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW9uVGltaW5nJykgKSA/IGF0dHMuYW5pbWF0aW9uVGltaW5nIDogMzAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMuY2xvc2VDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgT3BlbiBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLm9wZW5DbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBUb2dnbGUgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCeUNsYXNzOiB0aGlzLmFjdGlvblByZWZpeCArICctLW9wZW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBldmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdW5hdmlnYXRpb25TaXRlOyBcclxuIiwiaW1wb3J0IHsgd3N1TWVudUV4cGFuZFRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3dzdU1lbnVFeHBhbmRcIjtcclxuaW1wb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1SGVhZGVyR2xvYmFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsIHdzdU1lbnVFeHBhbmRUb2dnbGUoIG5hdkVsZW1lbnQgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS1kb3duJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnb3BlbicgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdXAnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdjbG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUhlYWRlckdsb2JhbDsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG15VGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIDMwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3c3UgPSB7XHJcbiAgICB2ZXJ0aWNhbE5hdml0YXRpb246IG5ldyBXc3VuYXZpZ2F0aW9uU2l0ZSgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVWZXJ0aWNhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCgpLFxyXG4gICAgaGVhZGVyR2xvYmFsOiBuZXcgV3N1SGVhZGVyR2xvYmFsKCksXHJcbiAgICBhY2NvcmRpb246IG5ldyBXc3VBY2NvcmRpb24oKSxcclxuICAgIGNvbGxhcHNhYmxlOiBuZXcgV3N1Q29sbGFwc2FibGUoKSxcclxuICAgIG1lbnU6IG5ldyBXc3VNZW51KCksXHJcbiAgICBidXR0b246IG5ldyBXc3VCdXR0b24oKSxcclxuICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAvL3N1Ym1lbnVTbGlkZVZlcnRpY2FsOiBuZXcgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsKCksXHJcbiAgICB9LFxyXG4gICAgdmlkZW9GcmFtZTogbmV3IFdzdVZpZGVvRnJhbWUoKSxcclxuXHJcbn0gIl0sIm5hbWVzIjpbImFyaWFVcGRhdGUiLCJhY3Rpb24iLCJzZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJoYXNBdHRyaWJ1dGUiLCJyZWdleCIsImFjdGlvbkxhYmVsIiwibGFiZWwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXJpYVVwZGF0ZUVsZW1lbnQiLCJlbGVtZW50R2V0IiwicGFyZW50IiwiZWxlbWVudENsYXNzIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwiZWxlbWVudEdldENsb3Nlc3QiLCJwYXJlbnRDbGFzcyIsImNsb3Nlc3QiLCJlbGVtZW50R2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInNpYmxpbmciLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwia2V5RG93bkV2ZW50IiwicHJvcHMiLCJkb21FdmVudCIsImtleSIsImluQ2xhc3MiLCJldmVudEVsZW1lbnQiLCJ0YXJnZXQiLCJldmVudEtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJ0b2dnbGVBcmlhIiwid3JhcHBlciIsInRvZ2dsZUJ5Q2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIiwidG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiIsImlzQW5pbWF0ZWQiLCJhY3Rpb25QcmVmaXgiLCJhcmlhTGFiZWxFbGVtZW50IiwidG9nZ2xlSGVpZ2h0IiwidG9nZ2xlQW5pbWF0aW5nIiwidG9nZ2xlTGFiZWwiLCJhZGQiLCJyZW1vdmUiLCJhbmltYXRlZER1cmF0aW9uIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZUhlaWdodCIsImNoaWxkRWxlbWVudCIsInRpbWVyIiwic2V0VGltZW91dCIsInN0eWxlIiwibWF4SGVpZ2h0IiwidG9nZ2xlU2hvdWxkIiwiY2xpY2tDbGFzcyIsImNoZWNrUGFyZW50IiwiY2hlY2tTaWJsaW5nIiwiY2hlY2tFbXB0eUxpbmsiLCJwYXJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaXNFeHBhbmRlZCIsImV4cGFuZGVkVGV4dCIsImNvbGxhcHNlZFRleHQiLCJjb25zb2xlIiwibG9nIiwiUmVnRXhwIiwiaXNFeHBhbmRpbmciLCJoZWlnaHRQYWRkaW5nIiwiY2hpbGRFbGVtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwid3N1QW5pbWF0ZVNsaWRlRG93biIsImFyZ3MiLCJkdXJhdGlvbiIsImV4dHJhIiwicGFyc2VJbnQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJ3c3VDbGFzc0FkZCIsIndzdUNsYXNzUmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJ3c3VHZXRFbGVtZW50SGVpZ2h0IiwiZGlzcGxheSIsImhlaWdodCIsIndzdVNsaWRlRG93biIsInRpbWluZyIsImFyaWFFbGVtZW50Iiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJ1cGRhdGVBcmlhRWxlbWVudCIsIndzdU1lbnVFeHBhbmRVcCIsIm5hdkl0ZW0iLCJzdWJNZW51IiwibGFzdEVsZW1lbnRDaGlsZCIsIndzdU1lbnVFeHBhbmREb3duIiwid3N1TWVudUV4cGFuZFRvZ2dsZSIsInNob3VsZEV4cGFuZCIsIldzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCIsImF0dHMiLCJpbml0IiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50cyIsImJpbmQiLCJldmVudCIsIm5hdkVsZW1lbnQiLCJzaG91bGRDbG9zZSIsImVycm9yIiwiV3N1QWNjb3JkaW9uIiwib3BlbkNsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImFjY29yZGlvbkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiV3N1QnV0dG9uIiwidG9nZ2xlQWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uQ2xhc3MiLCJsYWJlbHMiLCJhY3RpdmVDbGFzcyIsIldzdUNvbGxhcHNhYmxlIiwid3JhcHBlckNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJ0b2dnbGVDbGFzcyIsImNvbnRlbnRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwia2V5RG93bkV2ZW50cyIsImNsb3NlIiwib3BlbiIsIm5hdiIsImJvZHkiLCJXc3VWaWRlb0ZyYW1lIiwiYmFzc0NsYXNzIiwic2V0VmlkZW9TaXplIiwid2luZG93IiwicmVzaXplIiwicGxheVZpZGVvIiwidG9nZ2xlQmFja2dyb3VuZFZpZGVvIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlbyIsInZpZGVvU3JjIiwiZGF0YXNldCIsInBsYXkiLCJwbGF5ZXIiLCJWaW1lbyIsIlBsYXllciIsInBhdXNlIiwidmlkZW9zIiwiQXJyYXkiLCJmcm9tIiwiaXNXaWRlVmlkZW8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiV3N1TWVudSIsImNsb3NlU2libGluZ3MiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9oZXJvLXNsaWRlci9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9kb203L2RvbTcuZXNtLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zc3Itd2luZG93L3Nzci13aW5kb3cuZXNtLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9nZXRCcmVha3BvaW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9icmVha3BvaW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvYnJlYWtwb2ludHMvc2V0QnJlYWtwb2ludC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2hlY2stb3ZlcmZsb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2NsYXNzZXMvYWRkQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvY2xhc3Nlcy9yZW1vdmVDbGFzc2VzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9jb3JlLWNsYXNzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzLWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uQ2xpY2suanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2V2ZW50cy9vblJlc2l6ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uU2Nyb2xsLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaEVuZC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZXZlbnRzL29uVG91Y2hNb3ZlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ldmVudHMvb25Ub3VjaFN0YXJ0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9ncmFiLWN1cnNvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3Ivc2V0R3JhYkN1cnNvci5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvZ3JhYi1jdXJzb3IvdW5zZXRHcmFiQ3Vyc29yLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9pbWFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2ltYWdlcy9sb2FkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2ltYWdlcy9wcmVsb2FkSW1hZ2VzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2luZGV4LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9sb29wL2xvb3BDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvbG9vcERlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL2xvb3AvbG9vcEZpeC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL2FkZFNsaWRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tYW5pcHVsYXRpb24vYXBwZW5kU2xpZGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL21hbmlwdWxhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3ByZXBlbmRTbGlkZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3JlbW92ZUFsbFNsaWRlcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvbWFuaXB1bGF0aW9uL3JlbW92ZVNsaWRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9tb2R1bGFyLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvc2xpZGUvc2xpZGVOZXh0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVByZXYuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlUmVzZXQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG8uanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbGlja2VkU2xpZGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3NsaWRlL3NsaWRlVG9DbG9zZXN0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS9zbGlkZS9zbGlkZVRvTG9vcC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdHJhbnNpdGlvbi9zZXRUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2l0aW9uL3RyYW5zaXRpb25FbmQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zaXRpb24vdHJhbnNpdGlvblN0YXJ0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvZ2V0VHJhbnNsYXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS90cmFuc2xhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9tYXhUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9taW5UcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS9zZXRUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3RyYW5zbGF0ZS90cmFuc2xhdGVUby5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL2luZGV4LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQWN0aXZlSW5kZXguanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVBdXRvSGVpZ2h0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlQ2xpY2tlZFNsaWRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlUHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vY29tcG9uZW50cy9jb3JlL3VwZGF0ZS91cGRhdGVTaXplLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvY29yZS91cGRhdGUvdXBkYXRlU2xpZGVzQ2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc09mZnNldC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9jb21wb25lbnRzL2NvcmUvdXBkYXRlL3VwZGF0ZVNsaWRlc1Byb2dyZXNzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL2NvbXBvbmVudHMvc2Nyb2xsYmFyL3Njcm9sbGJhci5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS9tb2R1bGVzL29ic2VydmVyL29ic2VydmVyLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9zd2lwZXIvZXNtL21vZHVsZXMvcmVzaXplL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZ2V0LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL3N3aXBlci9lc20vdXRpbHMvZ2V0LWRldmljZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy9nZXQtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvc3dpcGVyL2VzbS91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJhcmlhVXBkYXRlIiwiYWN0aW9uIiwic2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpIiwiaGFzQXR0cmlidXRlIiwicmVnZXgiLCJhY3Rpb25MYWJlbCIsImxhYmVsIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImFyaWFVcGRhdGVFbGVtZW50IiwiZWxlbWVudEdldCIsInBhcmVudCIsImVsZW1lbnRDbGFzcyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImVsZW1lbnRHZXRDbG9zZXN0IiwicGFyZW50Q2xhc3MiLCJjbG9zZXN0IiwiZWxlbWVudEdldFNpYmxpbmdzIiwic2libGluZ3MiLCJzaWJsaW5nIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImtleURvd25FdmVudCIsInByb3BzIiwiZG9tRXZlbnQiLCJrZXkiLCJpbkNsYXNzIiwiZXZlbnRFbGVtZW50IiwidGFyZ2V0IiwiZXZlbnRLZXkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwidG9nZ2xlQXJpYSIsIndyYXBwZXIiLCJ0b2dnbGVCeUNsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSIsInRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4iLCJpc0FuaW1hdGVkIiwiYWN0aW9uUHJlZml4IiwiYXJpYUxhYmVsRWxlbWVudCIsInRvZ2dsZUhlaWdodCIsInRvZ2dsZUFuaW1hdGluZyIsInRvZ2dsZUxhYmVsIiwiYWRkIiwicmVtb3ZlIiwiYW5pbWF0ZWREdXJhdGlvbiIsImFuaW1hdGVDbGFzcyIsImFuaW1hdGVIZWlnaHQiLCJjaGlsZEVsZW1lbnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm1heEhlaWdodCIsInRvZ2dsZVNob3VsZCIsImNsaWNrQ2xhc3MiLCJjaGVja1BhcmVudCIsImNoZWNrU2libGluZyIsImNoZWNrRW1wdHlMaW5rIiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzRXhwYW5kZWQiLCJleHBhbmRlZFRleHQiLCJjb2xsYXBzZWRUZXh0IiwiY29uc29sZSIsImxvZyIsIlJlZ0V4cCIsImlzRXhwYW5kaW5nIiwiaGVpZ2h0UGFkZGluZyIsImNoaWxkRWxlbWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIndzdUFuaW1hdGVTbGlkZURvd24iLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInBhcnNlSW50Iiwid3N1QW5pbWF0ZVNsaWRlVXAiLCJjYWxsYmFjayIsImRlbGF5VGltZXIiLCJ3c3VBcmlhRXhwYW5kZWQiLCJ2YWx1ZSIsIndzdUFyaWFJc0V4cGFuZGVkIiwid3N1Q2xhc3NBZGQiLCJ3c3VDbGFzc1JlbW92ZSIsIndzdUNsYXNzVG9nZ2xlIiwid3N1R2V0RWxlbWVudEhlaWdodCIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3c3VTbGlkZURvd24iLCJ0aW1pbmciLCJhcmlhRWxlbWVudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwidXBkYXRlQXJpYUVsZW1lbnQiLCJ3c3VNZW51RXhwYW5kVXAiLCJuYXZJdGVtIiwic3ViTWVudSIsImxhc3RFbGVtZW50Q2hpbGQiLCJ3c3VNZW51RXhwYW5kRG93biIsIndzdU1lbnVFeHBhbmRUb2dnbGUiLCJzaG91bGRFeHBhbmQiLCJXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwiLCJhdHRzIiwiaW5pdCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudHMiLCJiaW5kIiwiZXZlbnQiLCJuYXZFbGVtZW50Iiwic2hvdWxkQ2xvc2UiLCJlcnJvciIsIldzdUFjY29yZGlvbiIsIm9wZW5DbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJhY2NvcmRpb25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsIldzdUJ1dHRvbiIsInRvZ2dsZUFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvbkNsYXNzIiwibGFiZWxzIiwiYWN0aXZlQ2xhc3MiLCJXc3VDb2xsYXBzYWJsZSIsIndyYXBwZXJDbGFzcyIsImhhc093blByb3BlcnR5IiwidG9nZ2xlQ2xhc3MiLCJjb250ZW50Q2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIldzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCIsImtleURvd25FdmVudHMiLCJjbG9zZSIsIm9wZW4iLCJuYXYiLCJib2R5IiwiV3N1VmlkZW9GcmFtZSIsImJhc3NDbGFzcyIsInNldFZpZGVvU2l6ZSIsIndpbmRvdyIsInJlc2l6ZSIsInBsYXlWaWRlbyIsInRvZ2dsZUJhY2tncm91bmRWaWRlbyIsInBhdXNlQmFja2dyb3VuZFZpZGVvIiwidmlkZW9XcmFwcGVyIiwidmlkZW8iLCJ2aWRlb1NyYyIsImRhdGFzZXQiLCJwbGF5IiwicGxheWVyIiwiVmltZW8iLCJQbGF5ZXIiLCJwYXVzZSIsInZpZGVvcyIsIkFycmF5IiwiZnJvbSIsImlzV2lkZVZpZGVvIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIldzdU1lbnUiLCJjbG9zZVNpYmxpbmdzIiwiV3N1bmF2aWdhdGlvblNpdGUiLCJjbG9zZUNsYXNzIiwiYW5pbWF0aW5nQ2xhc3MiLCJhbmltYXRpb25UaW1pbmciLCJXc3VIZWFkZXJHbG9iYWwiLCJTd2lwZXIiLCJOYXZpZ2F0aW9uIiwiU2Nyb2xsYmFyIiwiaW5pdFN3aXBlciIsInNsaWRlciIsInN3aXBlciIsImxvb3AiLCJkaXJlY3Rpb24iLCJzbGlkZXNQZXJWaWV3Iiwic2Nyb2xsYmFyIiwiZWwiLCJoaWRlIiwiZWZmZWN0IiwiV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCIsIm15VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIndzdSIsInZlcnRpY2FsTmF2aXRhdGlvbiIsIm5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJoZWFkZXJHbG9iYWwiLCJhY2NvcmRpb24iLCJjb2xsYXBzYWJsZSIsIm1lbnUiLCJhbmltYXRpb25zIiwidmlkZW9GcmFtZSIsImhlcm9TbGlkZXIiLCJIZXJvU2xpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFFQyxNQUFGLEVBQVVDLFFBQVYsRUFBd0I7QUFFdkMsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTJCSCxRQUEzQixDQUFkO0FBRUFDLFNBQU8sQ0FBQ0csT0FBUixDQUNJLFVBQUVDLE9BQUYsRUFBV0MsQ0FBWCxFQUFrQjtBQUVkLFFBQUtELE9BQU8sQ0FBQ0UsWUFBUixDQUFzQixZQUF0QixDQUFMLEVBQTRDO0FBRXhDLFVBQUlDLEtBQUssR0FBSyxVQUFVVCxNQUFaLEdBQXVCLE9BQXZCLEdBQWlDLFFBQTdDO0FBRUEsVUFBSVUsV0FBVyxHQUFLLFVBQVVWLE1BQVosR0FBdUIsT0FBdkIsR0FBaUMsTUFBbkQ7QUFFQSxVQUFJVyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sWUFBUixDQUFzQixZQUF0QixDQUFaLENBTndDLENBUXhDO0FBRUE7O0FBRUFOLGFBQU8sQ0FBQ08sWUFBUixDQUFzQixZQUF0QixFQUFvQ0YsS0FBSyxDQUFDRyxPQUFOLENBQWVMLEtB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxREFBUztBQUN4QixpQkFBaUIsdURBQVc7QUFDNUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLG1CQUFtQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFDQUFxQyxxQkFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDbElEO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0EsMEJBQTBCLGlEQUFHO0FBQzdCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtB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QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUksb0RBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxzREFBUTtBQUM3QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNSSxHQUFHLEdBQUc7QUFDUkMsb0JBQWtCLEVBQUUsSUFBSXZCLHdGQUFKLEVBRFo7QUFFUndCLHdCQUFzQixFQUFFLElBQUlOLDZFQUFKLEVBRmhCO0FBR1JPLDBCQUF3QixFQUFFLElBQUl6RCwwRkFBSixFQUhsQjtBQUlSMEQsY0FBWSxFQUFFLElBQUl0Qix5RUFBSixFQUpOO0FBS1J1QixXQUFTLEVBQUUsSUFBSTVFLGlFQUFKLEVBTEg7QUFNUjZFLGFBQVcsRUFBRSxJQUFJbEUsZ0ZBQUosRUFOTDtBQU9SbUUsTUFBSSxFQUFFLElBQUkvQiw0REFBSixFQVBFO0FBUVJ4QyxRQUFNLEVBQUUsSUFBSUYsOERBQUosRUFSQTtBQVNSMEUsWUFBVSxFQUFFLENBQ1I7QUFEUSxHQVRKO0FBWVJDLFlBQVUsRUFBRSxJQUFJekQsZ0ZBQUosRUFaSjtBQWFSMEQsWUFBVSxFQUFFLElBQUlDLGlFQUFKO0FBYkosQ0FBWixDIiwiZmlsZSI6ImJ1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcmlhVXBkYXRlID0gKCBhY3Rpb24sIHNlbGVjdG9yICkgPT4ge1xyXG5cclxuICAgIGxldCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goXHJcbiAgICAgICAgKCBlbGVtZW50LCBpICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGFjdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFyaWFVcGRhdGVFbGVtZW50ID0gKCBlbGVtZW50LCBhY3Rpb24gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCwgYXJpYVVwZGF0ZSB9OyIsImNvbnN0IGVsZW1lbnRHZXQgPSAoIHsgcGFyZW50ID0gZmFsc2UsIGVsZW1lbnRDbGFzcyA9IGZhbHNlIH0gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IHBhcmVudCA/IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggMCA8IGVsZW1lbnRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRDbG9zZXN0ID0gKCBlbGVtZW50LCBwYXJlbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoICcuJyArIHBhcmVudENsYXNzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRTaWJsaW5ncyA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXHJcblx0bGV0IHNpYmxpbmdzID0gW107XHJcblx0bGV0IHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcclxuXHR3aGlsZSAoIHNpYmxpbmcgKSB7XHJcblxyXG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbWVudCkge1xyXG5cclxuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QsIGVsZW1lbnRHZXRTaWJsaW5ncyB9IiwiY29uc3Qga2V5RG93bkV2ZW50ID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBkb21FdmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGtleSAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaW5DbGFzcyAgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggISBkb21FdmVudCB8fCAhIGtleSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRFbGVtZW50ID0gZG9tRXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGV2ZW50S2V5ICAgICA9IGRvbUV2ZW50LmtleTtcclxuXHJcbiAgICBpZiAoIGtleSA9PT0gZXZlbnRLZXkgJiYgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbkNsYXNzICYmIGV2ZW50RWxlbWVudC5jbG9zZXN0KCAnLicgKyBpbkNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93bkV2ZW50IH07IiwiY29uc3QgdG9nZ2xlQXJpYSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyID0gZmFsc2UsXHJcbiAgICAgICAgdG9nZ2xlQnlDbGFzcyA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlQnlDbGFzcyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIHRvZ2dsZUJ5Q2xhc3MgKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJiAnZmFsc2UnICE9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCB0cnVlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgdHJ1ZSApO1xyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgZmFsc2UgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFuaW1hdGluZyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZWREdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBhbmltYXRlQ2xhc3MgICAgID0gJ3dzdS1hbmltYXRpbmcnLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgICAgPSBmYWxzZSxcclxuICAgICAgICBjaGlsZEVsZW1lbnQgICAgID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBpc0FuaW1hdGVkICYmIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIGFuaW1hdGVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYW5pbWF0ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYW5pbWF0ZUhlaWdodCAmJiBjaGlsZEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZER1cmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFuaW1hdGVDbGFzcyApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG91bGQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV2ZW50RWxlbWVudCA9IGZhbHNlLCBcclxuICAgICAgICBjbGlja0NsYXNzID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tQYXJlbnQgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1NpYmxpbmcgPSBmYWxzZSxcclxuICAgICAgICBjaGVja0VtcHR5TGluayA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2xpY2tDbGFzcyAmJiBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrRW1wdHlMaW5rICYmIGV2ZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSAmJiAnIycgPT09IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tQYXJlbnQgJiYgZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrU2libGluZyAmJiBldmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUxhYmVsID0gKCBwcm9wcywgaXNFeHBhbmRlZCApID0+IHtcclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV4cGFuZGVkVGV4dCA9ICdDbG9zZScsIFxyXG4gICAgICAgIGNvbGxhcHNlZFRleHQgPSAnT3BlbicsIFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMgKTtcclxuXHJcblxyXG4gICAgaWYgKCBhcmlhTGFiZWxFbGVtZW50ICYmIGFyaWFMYWJlbEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgKSB7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGFyaWFMYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoIGlzRXhwYW5kZWQgKSA/IGV4cGFuZGVkVGV4dCA6IGNvbGxhcHNlZFRleHQ7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoIGV4cGFuZGVkVGV4dCArICd8JyArIGNvbGxhcHNlZFRleHQsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlZ2V4ICk7XHJcblxyXG4gICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbiApO1xyXG5cclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUhlaWdodCA9ICggcHJvcHMsIGlzRXhwYW5kaW5nICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCA9IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNoaWxkRWxlbWVudCAmJiBhbmltYXRlSGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRFbGVtZW50SGVpZ2h0ID0gKCBjaGlsZEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyApICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gY2hpbGRFbGVtZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoICEgaXNFeHBhbmRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UsIHRvZ2dsZUFuaW1hdGluZywgdG9nZ2xlU2hvdWxkIH07IiwiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTsiLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsIlxyXG5jb25zdCB3c3VHZXRFbGVtZW50SGVpZ2h0ID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdVNsaWRlRG93biA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBlbGVtZW50ID0gZmFsc2UsIC8vIEVsZW1lbnQgdG8gZXhwYW5kXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLCAvLyBFeHRyYSBoaWVnaHQganVzdCBpbiBjYXNlXHJcbiAgICAgICAgdGltaW5nID0gMTUwLCAvLyBob3cgbG9uZyB3aWxsIHRoZSBhbmltYXRpb24gcnVuIFxyXG4gICAgICAgIGFyaWFFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXJ0SGVpZ2h0IDwgMTAgKSB7IC8vIGFzc3VtZSBjbG9zZWRcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBjc3MgZG9lc24ndCByZWdpc3RlciBpdC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdzdVNsaWRlRG93bjsiLCJjb25zdCB1cGRhdGVBcmlhRWxlbWVudCA9ICggYWN0aW9uLCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQXJpYUVsZW1lbnQ7IiwiY29uc3Qgd3N1TWVudUV4cGFuZFVwID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLy9zdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmREb3duID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgNTAwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kVG9nZ2xlID0gKCBuYXZJdGVtLCBhcmdzID0ge30gICkgPT4ge1xyXG5cclxuICAgIGlmICggc2hvdWxkRXhwYW5kKCBuYXZJdGVtICkgKSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnb3Blbic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZFVwKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnY2xvc2UnO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG91bGRFeHBhbmQgPSAoIG5hdkl0ZW0gKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggISBuYXZJdGVtLmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSB8fCAnZmFsc2UnID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VNZW51RXhwYW5kVXAsIHdzdU1lbnVFeHBhbmRUb2dnbGUsIHdzdU1lbnVFeHBhbmREb3duICB9OyIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFuaW1hdGUtLXN1Ym1lbnUtdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsOyIsImltcG9ydCB7XHJcbiAgICB3c3VBcmlhRXhwYW5kZWQsXHJcbiAgICB3c3VBcmlhSXNFeHBhbmRlZCxcclxuICAgIHdzdUNsYXNzQWRkLFxyXG4gICAgd3N1Q2xhc3NSZW1vdmUsXHJcbiAgICB3c3VBbmltYXRlU2xpZGVEb3duLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlVXAsXHJcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XHJcblxyXG5jbGFzcyBXc3VBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtYWNjb3JkaW9uLS1vcGVuJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHsgXHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWFjY29yZGlvbl9fY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlVXAoIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVEb3duKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBY2NvcmRpb247ICIsImNsYXNzIFdzdUJ1dHRvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlQnV0dG9uKCBldmVudC50YXJnZXQsICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnLCBbJ1BhdXNlJywnUGxheSddIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlQWN0aXZlQnV0dG9uKCBidXR0b24sIGJ1dHRvbkNsYXNzLCBsYWJlbHMgKSB7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGJ1dHRvbkNsYXNzICsgJy0tYWN0aXZlJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID8gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggYWN0aXZlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzFdLCBsYWJlbHNbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMF0sIGxhYmVsc1sxXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VCdXR0b247ICAiLCJpbXBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlU2hvdWxkIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7d3N1U2xpZGVEb3dufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3V0aWxpdGllcyc7XHJcblxyXG5jbGFzcyBXc3VDb2xsYXBzYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY29udGVudENsYXNzJykgKSA/IGF0dHMuY29udGVudENsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgXHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBDbG9zZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldENsb3Nlc3QoIGV2ZW50RWxlbWVudCwgdGhpcy53cmFwcGVyQ2xhc3MgKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudEdldCAoIHsgcGFyZW50OiB3cmFwcGVyLCBlbGVtZW50Q2xhc3M6IHRoaXMuY29udGVudENsYXNzIH0gKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1U2xpZGVEb3duKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQ6IHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1Q29sbGFwc2FibGU7IiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBuYXYgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24taG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDsgIiwiY2xhc3MgV3N1VmlkZW9GcmFtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNzQ2xhc3MgPSAnd3N1LXZpZGVvLWZyYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J3Jlc2l6ZScsIFxyXG5cdFx0XHQoKSA9PiB7IHRoaXMucmVzaXplKCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tcGxheScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyApIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXRvZ2dsZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW9XcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGF5JykgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZpZGVvU3JjID0gdmlkZW9XcmFwcGVyLmRhdGFzZXQucGxheTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMgKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJhY2tncm91bmRWaWRlbyggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIHRoaXMuYmFzc0NsYXNzICsgJ19fdmlkZW8tYmFja2dyb3VuZCcgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXU1UgVmlkZW8gRnJhbWU6IFZpZGVvIE5vdCBGb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlb1swXSApO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJykgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFZpZGVvU2l6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbSggdmlkZW9zICkuZm9yRWFjaCggKCB2aWRlbyApID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gdmlkZW8ucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICsgMjYwICkgKiAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgPiB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1VmlkZW9GcmFtZTsgICIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBlbGVtZW50R2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnT3BlbicsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS1zdWJtZW51LWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcblxyXG4gICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL25hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc2libGluZ3MgPSBlbGVtZW50R2V0U2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIGVsZW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5hdkVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICYmICd0cnVlJyA9PSBuYXZFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VNZW51OyAiLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsIi8vbG9hZCBzd2lwZXIgY3NzIHRocm91Z2gganNcbi8vcG9wdWxhdGUgc2xpZGVyIG5hdiB0ZXh0IGJhc2VkIG9uIHNsaWRlIHRpdGxlIC0tIHVzZSBkYXRhIGF0dHJpYnV0ZVxuXG4vLz8/XG4vL2ltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7XG5pbXBvcnQgU3dpcGVyLCB7IE5hdmlnYXRpb24sIFNjcm9sbGJhciB9IGZyb20gJ3N3aXBlcic7XG4vL2ltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzJztcblxuU3dpcGVyLnVzZSggWyBOYXZpZ2F0aW9uLCBTY3JvbGxiYXIgXSApO1xuXG5jb25zdCBpbml0U3dpcGVyID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnaW5pdFN3aXBlcicpO1xuICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3dpcGVyJyk7XG5cbiAgaWYgKCBzbGlkZXIubGVuZ3RoID4gMCApIHtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIGlmJyk7XG4gICAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzY3JvbGxiYXI6IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1zY3JvbGxiYXJcIixcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZWZmZWN0OiAnZmFkZScsXG4gICAgfSk7XG4gIH1cbn1cblxuLypjbGFzcyBXc3VIZXJvU2xpZGVyIHtcbiAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcbiAgICB0aGlzLnRpbWVyID0gZmFsc2U7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgfVxufSovXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0aW5pdFN3aXBlcigpO1xufVxuIiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICBjb25zdCBteVRpbWVvdXQgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG4gICAgICAgICAgICB9LCAzMDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWw7ICIsIi8qKlxuICogRG9tNyAzLjAuMFxuICogTWluaW1hbGlzdGljIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgRE9NIG1hbmlwdWxhdGlvbiwgd2l0aCBhIGpRdWVyeS1jb21wYXRpYmxlIEFQSVxuICogaHR0cHM6Ly9mcmFtZXdvcms3LmlvL2RvY3MvZG9tNy5odG1sXG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIF9jb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5mdW5jdGlvbiBtYWtlUmVhY3RpdmUob2JqKSB7XG4gIHZhciBwcm90byA9IG9iai5fX3Byb3RvX187XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdfX3Byb3RvX18nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gcHJvdG87XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgcHJvdG8uX19wcm90b19fID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIERvbTcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheSkge1xuICBfaW5oZXJpdHNMb29zZShEb203LCBfQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIERvbTcoaXRlbXMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BcnJheS5jYWxsLmFwcGx5KF9BcnJheSwgW3RoaXNdLmNvbmNhdChpdGVtcykpIHx8IHRoaXM7XG4gICAgbWFrZVJlYWN0aXZlKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICByZXR1cm4gRG9tNztcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEFycmF5KSk7XG5cbmZ1bmN0aW9uIGFycmF5RmxhdChhcnIpIHtcbiAgaWYgKGFyciA9PT0gdm9pZCAwKSB7XG4gICAgYXJyID0gW107XG4gIH1cblxuICB2YXIgcmVzID0gW107XG4gIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgcmVzLnB1c2guYXBwbHkocmVzLCBhcnJheUZsYXQoZWwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2goZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoYXJyLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBhcnJheVVuaXF1ZShhcnIpIHtcbiAgdmFyIHVuaXF1ZUFycmF5ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodW5pcXVlQXJyYXkuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlQXJyYXkucHVzaChhcnJbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHVuaXF1ZUFycmF5O1xufVxuZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgZ3JvdXApIHtcbiAgICByZXR1cm4gZ3JvdXAudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHFzYShzZWxlY3RvciwgY29udGV4dCkge1xuICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbc2VsZWN0b3JdO1xuICB9XG5cbiAgdmFyIGEgPSBbXTtcbiAgdmFyIHJlcyA9IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBhLnB1c2gocmVzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiAkKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIGFyciA9IFtdO1xuXG4gIGlmICghY29udGV4dCAmJiBzZWxlY3RvciBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH1cblxuICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyBEb203KGFycik7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgIHZhciBodG1sID0gc2VsZWN0b3IudHJpbSgpO1xuXG4gICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgdmFyIHRvQ3JlYXRlID0gJ2Rpdic7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8bGknKSA9PT0gMCkgdG9DcmVhdGUgPSAndWwnO1xuICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0ZCcpID09PSAwIHx8IGh0bWwuaW5kZXhPZignPHRoJykgPT09IDApIHRvQ3JlYXRlID0gJ3RyJztcbiAgICAgIGlmIChodG1sLmluZGV4T2YoJzx0Ym9keScpID09PSAwKSB0b0NyZWF0ZSA9ICd0YWJsZSc7XG4gICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICB2YXIgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodG9DcmVhdGUpO1xuICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBhcnIucHVzaCh0ZW1wUGFyZW50LmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcnIgPSBxc2Eoc2VsZWN0b3IudHJpbSgpLCBjb250ZXh0IHx8IGRvY3VtZW50KTtcbiAgICB9IC8vIGFyciA9IHFzYShzZWxlY3RvciwgZG9jdW1lbnQpO1xuXG4gIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RvcikpIHtcbiAgICBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBEb203KSByZXR1cm4gc2VsZWN0b3I7XG4gICAgYXJyID0gc2VsZWN0b3I7XG4gIH1cblxuICByZXR1cm4gbmV3IERvbTcoYXJyYXlVbmlxdWUoYXJyKSk7XG59XG5cbiQuZm4gPSBEb203LnByb3RvdHlwZTtcblxuZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNsYXNzZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBfZWwkY2xhc3NMaXN0O1xuXG4gICAgKF9lbCRjbGFzc0xpc3QgPSBlbC5jbGFzc0xpc3QpLmFkZC5hcHBseShfZWwkY2xhc3NMaXN0LCBjbGFzc05hbWVzKTtcbiAgfSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBjbGFzc2VzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgY2xhc3Nlc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZXMgPSBhcnJheUZsYXQoY2xhc3Nlcy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5zcGxpdCgnICcpO1xuICB9KSk7XG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICB2YXIgX2VsJGNsYXNzTGlzdDI7XG5cbiAgICAoX2VsJGNsYXNzTGlzdDIgPSBlbC5jbGFzc0xpc3QpLnJlbW92ZS5hcHBseShfZWwkY2xhc3NMaXN0MiwgY2xhc3NOYW1lcyk7XG4gIH0pO1xuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgY2xhc3NlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGNsYXNzZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHZhciBjbGFzc05hbWVzID0gYXJyYXlGbGF0KGNsYXNzZXMubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMuc3BsaXQoJyAnKTtcbiAgfSkpO1xuICB0aGlzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKCkge1xuICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGNsYXNzZXMgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBjbGFzc2VzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgY2xhc3NOYW1lcyA9IGFycmF5RmxhdChjbGFzc2VzLm1hcChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLnNwbGl0KCcgJyk7XG4gIH0pKTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkubGVuZ3RoID4gMDtcbiAgfSkubGVuZ3RoID4gMDtcbn1cblxuZnVuY3Rpb24gYXR0cihhdHRycywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGF0dHJzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBhdHRyXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdLmdldEF0dHJpYnV0ZShhdHRycyk7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSAvLyBTZXQgYXR0cnNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBTdHJpbmdcbiAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJzLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdFxuICAgICAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cnMpIHtcbiAgICAgICAgdGhpc1tpXVthdHRyTmFtZV0gPSBhdHRyc1thdHRyTmFtZV07XG4gICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyKGF0dHIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJvcChwcm9wcywgdmFsdWUpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgIC8vIEdldCBwcm9wXG4gICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBTZXQgcHJvcHNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFN0cmluZ1xuICAgICAgICB0aGlzW2ldW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIHByb3BzKSB7XG4gICAgICAgICAgdGhpc1tpXVtwcm9wTmFtZV0gPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBkYXRhKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVsO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7IC8vIEdldCB2YWx1ZVxuXG4gICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYga2V5IGluIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIHtcbiAgICAgIHJldHVybiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGRhdGFLZXkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsga2V5KTtcblxuICAgIGlmIChkYXRhS2V5KSB7XG4gICAgICByZXR1cm4gZGF0YUtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IC8vIFNldCB2YWx1ZVxuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWwgPSB0aGlzW2ldO1xuICAgIGlmICghZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSA9IHt9O1xuICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURhdGEoa2V5KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV0pIHtcbiAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0KCkge1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgZGF0YXNldCA9IHt9OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKGVsLmRhdGFzZXQpIHtcbiAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBfYXR0ciA9IGVsLmF0dHJpYnV0ZXNbaV07XG5cbiAgICAgIGlmIChfYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPj0gMCkge1xuICAgICAgICBkYXRhc2V0W3RvQ2FtZWxDYXNlKF9hdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IF9hdHRyLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhc2V0KSB7XG4gICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7ZWxzZSBpZiAoZGF0YXNldFtrZXldID09PSAndHJ1ZScpIGRhdGFzZXRba2V5XSA9IHRydWU7ZWxzZSBpZiAocGFyc2VGbG9hdChkYXRhc2V0W2tleV0pID09PSBkYXRhc2V0W2tleV0gKiAxKSBkYXRhc2V0W2tleV0gKj0gMTtcbiAgfVxuXG4gIHJldHVybiBkYXRhc2V0O1xufVxuXG5mdW5jdGlvbiB2YWwodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBnZXQgdmFsdWVcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgIGlmICghZWwpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZWwubXVsdGlwbGUgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbC5zZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goZWwuc2VsZWN0ZWRPcHRpb25zW2ldLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICB9XG5cbiAgICByZXR1cm4gZWwudmFsdWU7XG4gIH0gLy8gc2V0IHZhbHVlXG5cblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICB2YXIgX2VsID0gdGhpc1tfaV07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgX2VsLm11bHRpcGxlICYmIF9lbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZWN0Jykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZWwub3B0aW9ucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBfZWwub3B0aW9uc1tqXS5zZWxlY3RlZCA9IHZhbHVlLmluZGV4T2YoX2VsLm9wdGlvbnNbal0udmFsdWUpID49IDA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF9lbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZSh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy52YWwodmFsdWUpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoaXNbaV0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgZHVyYXRpb24gIT09ICdzdHJpbmcnID8gZHVyYXRpb24gKyBcIm1zXCIgOiBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBvbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgdmFyIGV2ZW50VHlwZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFR5cGUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICghY2FwdHVyZSkgY2FwdHVyZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgdmFyIGV2ZW50RGF0YSA9IGUudGFyZ2V0LmRvbTdFdmVudERhdGEgfHwgW107XG5cbiAgICBpZiAoZXZlbnREYXRhLmluZGV4T2YoZSkgPCAwKSB7XG4gICAgICBldmVudERhdGEudW5zaGlmdChlKTtcbiAgICB9XG5cbiAgICBpZiAoJCh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBldmVudERhdGEpO2Vsc2Uge1xuICAgICAgdmFyIF9wYXJlbnRzID0gJCh0YXJnZXQpLnBhcmVudHMoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5cbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgX3BhcmVudHMubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudHNba10pLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuYXBwbHkoX3BhcmVudHNba10sIGV2ZW50RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRXZlbnQoZSkge1xuICAgIHZhciBldmVudERhdGEgPSBlICYmIGUudGFyZ2V0ID8gZS50YXJnZXQuZG9tN0V2ZW50RGF0YSB8fCBbXSA6IFtdO1xuXG4gICAgaWYgKGV2ZW50RGF0YS5pbmRleE9mKGUpIDwgMCkge1xuICAgICAgZXZlbnREYXRhLnVuc2hpZnQoZSk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXIuYXBwbHkodGhpcywgZXZlbnREYXRhKTtcbiAgfVxuXG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcbiAgdmFyIGo7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCBldmVudHMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZXZlbnRzW2pdO1xuICAgICAgICBpZiAoIWVsLmRvbTdMaXN0ZW5lcnMpIGVsLmRvbTdMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgaWYgKCFlbC5kb203TGlzdGVuZXJzW2V2ZW50XSkgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgICAgZWwuZG9tN0xpc3RlbmVyc1tldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVFdmVudCwgY2FwdHVyZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpdmUgZXZlbnRzXG4gICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHZhciBfZXZlbnQgPSBldmVudHNbal07XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnMpIGVsLmRvbTdMaXZlTGlzdGVuZXJzID0ge307XG4gICAgICAgIGlmICghZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSkgZWwuZG9tN0xpdmVMaXN0ZW5lcnNbX2V2ZW50XSA9IFtdO1xuXG4gICAgICAgIGVsLmRvbTdMaXZlTGlzdGVuZXJzW19ldmVudF0ucHVzaCh7XG4gICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgIHByb3h5TGlzdGVuZXI6IGhhbmRsZUxpdmVFdmVudFxuICAgICAgICB9KTtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKF9ldmVudCwgaGFuZGxlTGl2ZUV2ZW50LCBjYXB0dXJlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb2ZmKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICBhcmdzW19rZXk2XSA9IGFyZ3VtZW50c1tfa2V5Nl07XG4gIH1cblxuICB2YXIgZXZlbnRUeXBlID0gYXJnc1swXSxcbiAgICAgIHRhcmdldFNlbGVjdG9yID0gYXJnc1sxXSxcbiAgICAgIGxpc3RlbmVyID0gYXJnc1syXSxcbiAgICAgIGNhcHR1cmUgPSBhcmdzWzNdO1xuXG4gIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV2ZW50VHlwZSA9IGFyZ3NbMF07XG4gICAgbGlzdGVuZXIgPSBhcmdzWzFdO1xuICAgIGNhcHR1cmUgPSBhcmdzWzJdO1xuICAgIHRhcmdldFNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKCFjYXB0dXJlKSBjYXB0dXJlID0gZmFsc2U7XG4gIHZhciBldmVudHMgPSBldmVudFR5cGUuc3BsaXQoJyAnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcbiAgICAgIHZhciBoYW5kbGVycyA9IHZvaWQgMDtcblxuICAgICAgaWYgKCF0YXJnZXRTZWxlY3RvciAmJiBlbC5kb203TGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpc3RlbmVyc1tldmVudF07XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldFNlbGVjdG9yICYmIGVsLmRvbTdMaXZlTGlzdGVuZXJzKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWwuZG9tN0xpdmVMaXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFuZGxlcnMgJiYgaGFuZGxlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGsgPSBoYW5kbGVycy5sZW5ndGggLSAxOyBrID49IDA7IGsgLT0gMSkge1xuICAgICAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNba107XG5cbiAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgaGFuZGxlci5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIucHJveHlMaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lciAmJiBoYW5kbGVyLmxpc3RlbmVyICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ICYmIGhhbmRsZXIubGlzdGVuZXIuZG9tN3Byb3h5ID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlci5wcm94eUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gb25jZSgpIHtcbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgdmFyIGV2ZW50TmFtZSA9IGFyZ3NbMF0sXG4gICAgICB0YXJnZXRTZWxlY3RvciA9IGFyZ3NbMV0sXG4gICAgICBsaXN0ZW5lciA9IGFyZ3NbMl0sXG4gICAgICBjYXB0dXJlID0gYXJnc1szXTtcblxuICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudE5hbWUgPSBhcmdzWzBdO1xuICAgIGxpc3RlbmVyID0gYXJnc1sxXTtcbiAgICBjYXB0dXJlID0gYXJnc1syXTtcbiAgICB0YXJnZXRTZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgZXZlbnRBcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICBldmVudEFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBldmVudEFyZ3MpO1xuICAgIGRvbS5vZmYoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3Rvciwgb25jZUhhbmRsZXIsIGNhcHR1cmUpO1xuXG4gICAgaWYgKG9uY2VIYW5kbGVyLmRvbTdwcm94eSkge1xuICAgICAgZGVsZXRlIG9uY2VIYW5kbGVyLmRvbTdwcm94eTtcbiAgICB9XG4gIH1cblxuICBvbmNlSGFuZGxlci5kb203cHJveHkgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGRvbS5vbihldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBvbmNlSGFuZGxlciwgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICBhcmdzW19rZXk5XSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICB2YXIgZXZlbnRzID0gYXJnc1swXS5zcGxpdCgnICcpO1xuICB2YXIgZXZlbnREYXRhID0gYXJnc1sxXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBldmVudCA9IGV2ZW50c1tpXTtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgdmFyIGVsID0gdGhpc1tqXTtcblxuICAgICAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCkge1xuICAgICAgICB2YXIgZXZ0ID0gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudCwge1xuICAgICAgICAgIGRldGFpbDogZXZlbnREYXRhLFxuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IGFyZ3MuZmlsdGVyKGZ1bmN0aW9uIChkYXRhLCBkYXRhSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YUluZGV4ID4gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgZWwuZG9tN0V2ZW50RGF0YSA9IFtdO1xuICAgICAgICBkZWxldGUgZWwuZG9tN0V2ZW50RGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZigndHJhbnNpdGlvbmVuZCcsIGZpcmVDYWxsQmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIHtcbiAgICBkb20ub24oJ3RyYW5zaXRpb25lbmQnLCBmaXJlQ2FsbEJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvbkVuZChjYWxsYmFjaykge1xuICB2YXIgZG9tID0gdGhpcztcblxuICBmdW5jdGlvbiBmaXJlQ2FsbEJhY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgZG9tLm9mZignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykge1xuICAgIGRvbS5vbignYW5pbWF0aW9uZW5kJywgZmlyZUNhbGxCYWNrKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiB3aWR0aCgpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoaW5jbHVkZU1hcmdpbnMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpbmNsdWRlTWFyZ2lucykge1xuICAgICAgdmFyIF9zdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aCArIHBhcnNlRmxvYXQoX3N0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tcmlnaHQnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0KCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG5cbiAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ2hlaWdodCcpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBvdXRlckhlaWdodChpbmNsdWRlTWFyZ2lucykge1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICB2YXIgX3N0eWxlczIgPSB0aGlzLnN0eWxlcygpO1xuXG4gICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi10b3AnKSkgKyBwYXJzZUZsb2F0KF9zdHlsZXMyLmdldFByb3BlcnR5VmFsdWUoJ21hcmdpbi1ib3R0b20nKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgdmFyIGJveCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY2xpZW50VG9wID0gZWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgdmFyIGNsaWVudExlZnQgPSBlbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuICAgIHZhciBzY3JvbGxUb3AgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFkgOiBlbC5zY3JvbGxUb3A7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbCA9PT0gd2luZG93ID8gd2luZG93LnNjcm9sbFggOiBlbC5zY3JvbGxMZWZ0O1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3AsXG4gICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBoaWRlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2hvdygpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBlbCA9IHRoaXNbaV07XG5cbiAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgLy8gU3RpbGwgbm90IHZpc2libGVcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBzdHlsZXMoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgcmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBjc3MocHJvcHMsIHZhbHVlKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGk7XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICBpZiAodHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gLmNzcygnd2lkdGgnKVxuICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLmNzcyh7IHdpZHRoOiAnMTAwcHgnIH0pXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBmb3IgKHZhciBfcHJvcCBpbiBwcm9wcykge1xuICAgICAgICAgIHRoaXNbaV0uc3R5bGVbX3Byb3BdID0gcHJvcHNbX3Byb3BdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAuY3NzKCd3aWR0aCcsICcxMDBweCcpXG4gICAgZm9yIChpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXNbaV0uc3R5bGVbcHJvcHNdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZWFjaChjYWxsYmFjaykge1xuICBpZiAoIWNhbGxiYWNrKSByZXR1cm4gdGhpcztcbiAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICBjYWxsYmFjay5hcHBseShlbCwgW2VsLCBpbmRleF0pO1xuICB9KTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gYXJyYXlGaWx0ZXIodGhpcywgY2FsbGJhY2spO1xuICByZXR1cm4gJChyZXN1bHQpO1xufVxuXG5mdW5jdGlvbiBodG1sKGh0bWwpIHtcbiAgaWYgKHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0aGlzWzBdID8gdGhpc1swXS5pbm5lckhUTUwgOiBudWxsO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhpc1tpXS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIHRleHQodGV4dCkge1xuICBpZiAodHlwZW9mIHRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKSA6IG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpcyhzZWxlY3Rvcikge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KCk7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIHZhciBjb21wYXJlV2l0aDtcbiAgdmFyIGk7XG4gIGlmICghZWwgfHwgdHlwZW9mIHNlbGVjdG9yID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29tcGFyZVdpdGggPSAkKHNlbGVjdG9yKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSBlbCkgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkge1xuICAgIHJldHVybiBlbCA9PT0gZG9jdW1lbnQ7XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykge1xuICAgIHJldHVybiBlbCA9PT0gd2luZG93O1xuICB9XG5cbiAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgRG9tNykge1xuICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaW5kZXgoKSB7XG4gIHZhciBjaGlsZCA9IHRoaXNbMF07XG4gIHZhciBpO1xuXG4gIGlmIChjaGlsZCkge1xuICAgIGkgPSAwOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHdoaWxlICgoY2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmcpICE9PSBudWxsKSB7XG4gICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IDEpIGkgKz0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaTtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcztcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuXG4gIGlmIChpbmRleCA+IGxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgdmFyIHJldHVybkluZGV4ID0gbGVuZ3RoICsgaW5kZXg7XG4gICAgaWYgKHJldHVybkluZGV4IDwgMCkgcmV0dXJuICQoW10pO1xuICAgIHJldHVybiAkKFt0aGlzW3JldHVybkluZGV4XV0pO1xuICB9XG5cbiAgcmV0dXJuICQoW3RoaXNbaW5kZXhdXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCgpIHtcbiAgdmFyIG5ld0NoaWxkO1xuICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuXG4gIGZvciAodmFyIGsgPSAwOyBrIDwgYXJndW1lbnRzLmxlbmd0aDsgayArPSAxKSB7XG4gICAgbmV3Q2hpbGQgPSBrIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGsgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNba107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKHRlbXBEaXYuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIERvbTcpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGRbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzW2ldLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kVG8ocGFyZW50KSB7XG4gICQocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBwcmVwZW5kKG5ld0NoaWxkKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBpO1xuICB2YXIgajtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcblxuICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgaiAtPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKHRlbXBEaXYuY2hpbGROb2Rlc1tqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgRG9tNykge1xuICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIHRoaXNbaV0uaW5zZXJ0QmVmb3JlKG5ld0NoaWxkW2pdLCB0aGlzW2ldLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZCwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKHBhcmVudCkge1xuICAkKHBhcmVudCkucHJlcGVuZCh0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydEJlZm9yZShzZWxlY3Rvcikge1xuICB2YXIgYmVmb3JlID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJlZm9yZVswXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLCBiZWZvcmVbMF0pO1xuICAgIH0gZWxzZSBpZiAoYmVmb3JlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGJlZm9yZVtqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYmVmb3JlW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIoc2VsZWN0b3IpIHtcbiAgdmFyIGFmdGVyID0gJChzZWxlY3Rvcik7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFmdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSBpZiAoYWZ0ZXIubGVuZ3RoID4gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhZnRlci5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBhZnRlcltqXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzW2ldLmNsb25lTm9kZSh0cnVlKSwgYWZ0ZXJbal0ubmV4dFNpYmxpbmcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBuZXh0KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZyAmJiAkKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKS5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuICQoW3RoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkKFtdKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFt0aGlzWzBdLm5leHRFbGVtZW50U2libGluZ10pO1xuICAgIHJldHVybiAkKFtdKTtcbiAgfVxuXG4gIHJldHVybiAkKFtdKTtcbn1cblxuZnVuY3Rpb24gbmV4dEFsbChzZWxlY3Rvcikge1xuICB2YXIgbmV4dEVscyA9IFtdO1xuICB2YXIgZWwgPSB0aGlzWzBdO1xuICBpZiAoIWVsKSByZXR1cm4gJChbXSk7XG5cbiAgd2hpbGUgKGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHZhciBfbmV4dCA9IGVsLm5leHRFbGVtZW50U2libGluZzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoJChfbmV4dCkuaXMoc2VsZWN0b3IpKSBuZXh0RWxzLnB1c2goX25leHQpO1xuICAgIH0gZWxzZSBuZXh0RWxzLnB1c2goX25leHQpO1xuXG4gICAgZWwgPSBfbmV4dDtcbiAgfVxuXG4gIHJldHVybiAkKG5leHRFbHMpO1xufVxuXG5mdW5jdGlvbiBwcmV2KHNlbGVjdG9yKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZWwgPSB0aGlzWzBdO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoZWwucHJldmlvdXNFbGVtZW50U2libGluZyAmJiAkKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gJChbZWwucHJldmlvdXNFbGVtZW50U2libGluZ10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJChbXSk7XG4gICAgfVxuXG4gICAgaWYgKGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHJldHVybiAkKFtlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgcmV0dXJuICQoW10pO1xuICB9XG5cbiAgcmV0dXJuICQoW10pO1xufVxuXG5mdW5jdGlvbiBwcmV2QWxsKHNlbGVjdG9yKSB7XG4gIHZhciBwcmV2RWxzID0gW107XG4gIHZhciBlbCA9IHRoaXNbMF07XG4gIGlmICghZWwpIHJldHVybiAkKFtdKTtcblxuICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgIHZhciBfcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCQoX3ByZXYpLmlzKHNlbGVjdG9yKSkgcHJldkVscy5wdXNoKF9wcmV2KTtcbiAgICB9IGVsc2UgcHJldkVscy5wdXNoKF9wcmV2KTtcblxuICAgIGVsID0gX3ByZXY7XG4gIH1cblxuICByZXR1cm4gJChwcmV2RWxzKTtcbn1cblxuZnVuY3Rpb24gc2libGluZ3Moc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRoaXMubmV4dEFsbChzZWxlY3RvcikuYWRkKHRoaXMucHJldkFsbChzZWxlY3RvcikpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnQoc2VsZWN0b3IpIHtcbiAgdmFyIHBhcmVudHMgPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0aGlzW2ldLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICBpZiAoJCh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJChwYXJlbnRzKTtcbn1cblxuZnVuY3Rpb24gcGFyZW50cyhzZWxlY3Rvcikge1xuICB2YXIgcGFyZW50cyA9IFtdOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIF9wYXJlbnQgPSB0aGlzW2ldLnBhcmVudE5vZGU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICAgIHdoaWxlIChfcGFyZW50KSB7XG4gICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKCQoX3BhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnRzLnB1c2goX3BhcmVudCk7XG4gICAgICB9XG5cbiAgICAgIF9wYXJlbnQgPSBfcGFyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICQocGFyZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsb3Nlc3Qoc2VsZWN0b3IpIHtcbiAgdmFyIGNsb3Nlc3QgPSB0aGlzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJChbXSk7XG4gIH1cblxuICBpZiAoIWNsb3Nlc3QuaXMoc2VsZWN0b3IpKSB7XG4gICAgY2xvc2VzdCA9IGNsb3Nlc3QucGFyZW50cyhzZWxlY3RvcikuZXEoMCk7XG4gIH1cblxuICByZXR1cm4gY2xvc2VzdDtcbn1cblxuZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBmb3VuZCA9IHRoaXNbaV0ucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBmb3VuZEVsZW1lbnRzLnB1c2goZm91bmRbal0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGZvdW5kRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4gPSBbXTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBjaGlsZE5vZGVzID0gdGhpc1tpXS5jaGlsZHJlbjtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCAkKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkTm9kZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAkKGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGhpc1tpXS5wYXJlbnROb2RlKSB0aGlzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpc1tpXSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gZGV0YWNoKCkge1xuICByZXR1cm4gdGhpcy5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gYWRkKCkge1xuICB2YXIgZG9tID0gdGhpcztcbiAgdmFyIGk7XG4gIHZhciBqO1xuXG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGVscyA9IG5ldyBBcnJheShfbGVuMTApLCBfa2V5MTAgPSAwOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgZWxzW19rZXkxMF0gPSBhcmd1bWVudHNbX2tleTEwXTtcbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgdG9BZGQgPSAkKGVsc1tpXSk7XG5cbiAgICBmb3IgKGogPSAwOyBqIDwgdG9BZGQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGRvbS5wdXNoKHRvQWRkW2pdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZG9tO1xufVxuXG5mdW5jdGlvbiBlbXB0eSgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpc1tpXTtcblxuICAgIGlmIChlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBlbC5jaGlsZE5vZGVzLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBlbC5jaGlsZE5vZGVzW2pdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwuY2hpbGROb2Rlc1tqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZWwudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgdG9wID0gYXJnc1sxXSxcbiAgICAgIGR1cmF0aW9uID0gYXJnc1syXSxcbiAgICAgIGVhc2luZyA9IGFyZ3NbM10sXG4gICAgICBjYWxsYmFjayA9IGFyZ3NbNF07XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICBsZWZ0ID0gYXJnc1swXTtcbiAgICB0b3AgPSBhcmdzWzFdO1xuICAgIGR1cmF0aW9uID0gYXJnc1syXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbM107XG4gICAgZWFzaW5nID0gYXJnc1s0XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykgZWFzaW5nID0gJ3N3aW5nJztcbiAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIHZhciBlbCA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnRUb3A7XG4gICAgdmFyIGN1cnJlbnRMZWZ0O1xuICAgIHZhciBtYXhUb3A7XG4gICAgdmFyIG1heExlZnQ7XG4gICAgdmFyIG5ld1RvcDtcbiAgICB2YXIgbmV3TGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICB2YXIgc2Nyb2xsTGVmdDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgdmFyIGFuaW1hdGVUb3AgPSB0b3AgPiAwIHx8IHRvcCA9PT0gMDtcbiAgICB2YXIgYW5pbWF0ZUxlZnQgPSBsZWZ0ID4gMCB8fCBsZWZ0ID09PSAwO1xuXG4gICAgaWYgKHR5cGVvZiBlYXNpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBlYXNpbmcgPSAnc3dpbmcnO1xuICAgIH1cblxuICAgIGlmIChhbmltYXRlVG9wKSB7XG4gICAgICBjdXJyZW50VG9wID0gZWwuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoIWR1cmF0aW9uKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIGN1cnJlbnRMZWZ0ID0gZWwuc2Nyb2xsTGVmdDtcblxuICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWR1cmF0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgbWF4VG9wID0gZWwuc2Nyb2xsSGVpZ2h0IC0gZWwub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0ZUxlZnQpIHtcbiAgICAgIG1heExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLm9mZnNldFdpZHRoO1xuICAgICAgbmV3TGVmdCA9IE1hdGgubWF4KE1hdGgubWluKGxlZnQsIG1heExlZnQpLCAwKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPT09IGN1cnJlbnRUb3ApIGFuaW1hdGVUb3AgPSBmYWxzZTtcbiAgICBpZiAoYW5pbWF0ZUxlZnQgJiYgbmV3TGVmdCA9PT0gY3VycmVudExlZnQpIGFuaW1hdGVMZWZ0ID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiByZW5kZXIodGltZSkge1xuICAgICAgaWYgKHRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gdGltZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgIHZhciBlYXNlUHJvZ3Jlc3MgPSBlYXNpbmcgPT09ICdsaW5lYXInID8gcHJvZ3Jlc3MgOiAwLjUgLSBNYXRoLmNvcyhwcm9ncmVzcyAqIE1hdGguUEkpIC8gMjtcbiAgICAgIHZhciBkb25lO1xuICAgICAgaWYgKGFuaW1hdGVUb3ApIHNjcm9sbFRvcCA9IGN1cnJlbnRUb3AgKyBlYXNlUHJvZ3Jlc3MgKiAobmV3VG9wIC0gY3VycmVudFRvcCk7XG4gICAgICBpZiAoYW5pbWF0ZUxlZnQpIHNjcm9sbExlZnQgPSBjdXJyZW50TGVmdCArIGVhc2VQcm9ncmVzcyAqIChuZXdMZWZ0IC0gY3VycmVudExlZnQpO1xuXG4gICAgICBpZiAoYW5pbWF0ZVRvcCAmJiBuZXdUb3AgPiBjdXJyZW50VG9wICYmIHNjcm9sbFRvcCA+PSBuZXdUb3ApIHtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSB7XG4gICAgICAgIGVsLnNjcm9sbFRvcCA9IG5ld1RvcDtcbiAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSB7XG4gICAgICAgIGVsLnNjcm9sbExlZnQgPSBuZXdMZWZ0O1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPCBjdXJyZW50TGVmdCAmJiBzY3JvbGxMZWZ0IDw9IG5ld0xlZnQpIHtcbiAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IG5ld0xlZnQ7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFuaW1hdGVUb3ApIGVsLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgIGlmIChhbmltYXRlTGVmdCkgZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9KTtcbn0gLy8gc2Nyb2xsVG9wKHRvcCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcblxuXG5mdW5jdGlvbiBzY3JvbGxUb3AoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB0b3AgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRvcCA9IGFyZ3NbMF07XG4gICAgZHVyYXRpb24gPSBhcmdzWzFdO1xuICAgIGNhbGxiYWNrID0gYXJnc1syXTtcbiAgICBlYXNpbmcgPSBhcmdzWzNdO1xuICB9XG5cbiAgdmFyIGRvbSA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGRvbS5sZW5ndGggPiAwKSByZXR1cm4gZG9tWzBdLnNjcm9sbFRvcDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8odW5kZWZpbmVkLCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsTGVmdCgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgdmFyIGxlZnQgPSBhcmdzWzBdLFxuICAgICAgZHVyYXRpb24gPSBhcmdzWzFdLFxuICAgICAgZWFzaW5nID0gYXJnc1syXSxcbiAgICAgIGNhbGxiYWNrID0gYXJnc1szXTtcblxuICBpZiAoYXJncy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGxlZnQgPSBhcmdzWzBdO1xuICAgIGR1cmF0aW9uID0gYXJnc1sxXTtcbiAgICBjYWxsYmFjayA9IGFyZ3NbMl07XG4gICAgZWFzaW5nID0gYXJnc1szXTtcbiAgfVxuXG4gIHZhciBkb20gPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoZG9tLmxlbmd0aCA+IDApIHJldHVybiBkb21bMF0uc2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkb20uc2Nyb2xsVG8obGVmdCwgdW5kZWZpbmVkLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoaW5pdGlhbFByb3BzLCBpbml0aWFsUGFyYW1zKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGVscyA9IHRoaXM7XG4gIHZhciBhID0ge1xuICAgIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsUHJvcHMpLFxuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnc3dpbmcnIC8vIG9yICdsaW5lYXInXG5cbiAgICAgIC8qIENhbGxiYWNrc1xuICAgICAgYmVnaW4oZWxlbWVudHMpXG4gICAgICBjb21wbGV0ZShlbGVtZW50cylcbiAgICAgIHByb2dyZXNzKGVsZW1lbnRzLCBjb21wbGV0ZSwgcmVtYWluaW5nLCBzdGFydCwgdHdlZW5WYWx1ZSlcbiAgICAgICovXG5cbiAgICB9LCBpbml0aWFsUGFyYW1zKSxcbiAgICBlbGVtZW50czogZWxzLFxuICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgcXVlOiBbXSxcbiAgICBlYXNpbmdQcm9ncmVzczogZnVuY3Rpb24gZWFzaW5nUHJvZ3Jlc3MoZWFzaW5nLCBwcm9ncmVzcykge1xuICAgICAgaWYgKGVhc2luZyA9PT0gJ3N3aW5nJykge1xuICAgICAgICByZXR1cm4gMC41IC0gTWF0aC5jb3MocHJvZ3Jlc3MgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKGEuZnJhbWVJZCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYS5mcmFtZUlkKTtcbiAgICAgIH1cblxuICAgICAgYS5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIGEuZWxlbWVudHMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBlbDtcbiAgICAgICAgZGVsZXRlIGVsZW1lbnQuZG9tN0FuaW1hdGVJbnN0YW5jZTtcbiAgICAgIH0pO1xuICAgICAgYS5xdWUgPSBbXTtcbiAgICB9LFxuICAgIGRvbmU6IGZ1bmN0aW9uIGRvbmUoY29tcGxldGUpIHtcbiAgICAgIGEuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZWw7XG4gICAgICAgIGRlbGV0ZSBlbGVtZW50LmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgICB9KTtcbiAgICAgIGlmIChjb21wbGV0ZSkgY29tcGxldGUoZWxzKTtcblxuICAgICAgaWYgKGEucXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHF1ZSA9IGEucXVlLnNoaWZ0KCk7XG4gICAgICAgIGEuYW5pbWF0ZShxdWVbMF0sIHF1ZVsxXSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRlOiBmdW5jdGlvbiBhbmltYXRlKHByb3BzLCBwYXJhbXMpIHtcbiAgICAgIGlmIChhLmFuaW1hdGluZykge1xuICAgICAgICBhLnF1ZS5wdXNoKFtwcm9wcywgcGFyYW1zXSk7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBbXTsgLy8gRGVmaW5lICYgQ2FjaGUgSW5pdGlhbHMgJiBVbml0c1xuXG4gICAgICBhLmVsZW1lbnRzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5pdGlhbEZ1bGxWYWx1ZTtcbiAgICAgICAgdmFyIGluaXRpYWxWYWx1ZTtcbiAgICAgICAgdmFyIHVuaXQ7XG4gICAgICAgIHZhciBmaW5hbFZhbHVlO1xuICAgICAgICB2YXIgZmluYWxGdWxsVmFsdWU7XG4gICAgICAgIGlmICghZWwuZG9tN0FuaW1hdGVJbnN0YW5jZSkgYS5lbGVtZW50c1tpbmRleF0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gICAgICAgIGVsZW1lbnRzW2luZGV4XSA9IHtcbiAgICAgICAgICBjb250YWluZXI6IGVsXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApLnJlcGxhY2UoJywnLCAnLicpO1xuICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IHBhcnNlRmxvYXQoaW5pdGlhbEZ1bGxWYWx1ZSk7XG4gICAgICAgICAgdW5pdCA9IGluaXRpYWxGdWxsVmFsdWUucmVwbGFjZShpbml0aWFsVmFsdWUsICcnKTtcbiAgICAgICAgICBmaW5hbFZhbHVlID0gcGFyc2VGbG9hdChwcm9wc1twcm9wXSk7XG4gICAgICAgICAgZmluYWxGdWxsVmFsdWUgPSBwcm9wc1twcm9wXSArIHVuaXQ7XG4gICAgICAgICAgZWxlbWVudHNbaW5kZXhdW3Byb3BdID0ge1xuICAgICAgICAgICAgaW5pdGlhbEZ1bGxWYWx1ZTogaW5pdGlhbEZ1bGxWYWx1ZSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogaW5pdGlhbFZhbHVlLFxuICAgICAgICAgICAgdW5pdDogdW5pdCxcbiAgICAgICAgICAgIGZpbmFsVmFsdWU6IGZpbmFsVmFsdWUsXG4gICAgICAgICAgICBmaW5hbEZ1bGxWYWx1ZTogZmluYWxGdWxsVmFsdWUsXG4gICAgICAgICAgICBjdXJyZW50VmFsdWU6IGluaXRpYWxWYWx1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgIHZhciB0aW1lO1xuICAgICAgdmFyIGVsZW1lbnRzRG9uZSA9IDA7XG4gICAgICB2YXIgcHJvcHNEb25lID0gMDtcbiAgICAgIHZhciBkb25lO1xuICAgICAgdmFyIGJlZ2FuID0gZmFsc2U7XG4gICAgICBhLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3M7XG4gICAgICAgIHZhciBlYXNlUHJvZ3Jlc3M7IC8vIGxldCBlbDtcblxuICAgICAgICBpZiAoIWJlZ2FuKSB7XG4gICAgICAgICAgYmVnYW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChwYXJhbXMuYmVnaW4pIHBhcmFtcy5iZWdpbihlbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnByb2dyZXNzKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgcGFyYW1zLnByb2dyZXNzKGVscywgTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCksIHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUgPCAwID8gMCA6IHN0YXJ0VGltZSArIHBhcmFtcy5kdXJhdGlvbiAtIHRpbWUsIHN0YXJ0VGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGVsID0gZWxlbWVudDtcbiAgICAgICAgICBpZiAoZG9uZSB8fCBlbC5kb25lKSByZXR1cm47XG4gICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGVsLmRvbmUpIHJldHVybjtcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gcGFyYW1zLmR1cmF0aW9uLCAxKSwgMCk7XG4gICAgICAgICAgICBlYXNlUHJvZ3Jlc3MgPSBhLmVhc2luZ1Byb2dyZXNzKHBhcmFtcy5lYXNpbmcsIHByb2dyZXNzKTtcbiAgICAgICAgICAgIHZhciBfZWwkcHJvcCA9IGVsW3Byb3BdLFxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA9IF9lbCRwcm9wLmluaXRpYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gX2VsJHByb3AuZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICB1bml0ID0gX2VsJHByb3AudW5pdDtcbiAgICAgICAgICAgIGVsW3Byb3BdLmN1cnJlbnRWYWx1ZSA9IGluaXRpYWxWYWx1ZSArIGVhc2VQcm9ncmVzcyAqIChmaW5hbFZhbHVlIC0gaW5pdGlhbFZhbHVlKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBlbFtwcm9wXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaW5hbFZhbHVlID4gaW5pdGlhbFZhbHVlICYmIGN1cnJlbnRWYWx1ZSA+PSBmaW5hbFZhbHVlIHx8IGZpbmFsVmFsdWUgPCBpbml0aWFsVmFsdWUgJiYgY3VycmVudFZhbHVlIDw9IGZpbmFsVmFsdWUpIHtcbiAgICAgICAgICAgICAgZWwuY29udGFpbmVyLnN0eWxlW3Byb3BdID0gZmluYWxWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgICAgIHByb3BzRG9uZSArPSAxO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9wc0RvbmUgPT09IE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0RvbmUgKz0gMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChlbGVtZW50c0RvbmUgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgIGEuZG9uZShwYXJhbXMuY29tcGxldGUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsLmNvbnRhaW5lci5zdHlsZVtwcm9wXSA9IGN1cnJlbnRWYWx1ZSArIHVuaXQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuOyAvLyBUaGVuIGNhbGxcblxuICAgICAgICBhLmZyYW1lSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgICB9XG5cbiAgICAgIGEuZnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfTtcblxuICBpZiAoYS5lbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZWxzO1xuICB9XG5cbiAgdmFyIGFuaW1hdGVJbnN0YW5jZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEuZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYS5lbGVtZW50c1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBhbmltYXRlSW5zdGFuY2UgPSBhLmVsZW1lbnRzW2ldLmRvbTdBbmltYXRlSW5zdGFuY2U7XG4gICAgfSBlbHNlIGEuZWxlbWVudHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoIWFuaW1hdGVJbnN0YW5jZSkge1xuICAgIGFuaW1hdGVJbnN0YW5jZSA9IGE7XG4gIH1cblxuICBpZiAoaW5pdGlhbFByb3BzID09PSAnc3RvcCcpIHtcbiAgICBhbmltYXRlSW5zdGFuY2Uuc3RvcCgpO1xuICB9IGVsc2Uge1xuICAgIGFuaW1hdGVJbnN0YW5jZS5hbmltYXRlKGEucHJvcHMsIGEucGFyYW1zKTtcbiAgfVxuXG4gIHJldHVybiBlbHM7XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBlbHMgPSB0aGlzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGVsc1tpXS5kb203QW5pbWF0ZUluc3RhbmNlKSB7XG4gICAgICBlbHNbaV0uZG9tN0FuaW1hdGVJbnN0YW5jZS5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBub1RyaWdnZXIgPSAncmVzaXplIHNjcm9sbCcuc3BsaXQoJyAnKTtcblxuZnVuY3Rpb24gc2hvcnRjdXQobmFtZSkge1xuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAobm9UcmlnZ2VyLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgICAgICAgaWYgKG5hbWUgaW4gdGhpc1tpXSkgdGhpc1tpXVtuYW1lXSgpO2Vsc2Uge1xuICAgICAgICAgICAgJCh0aGlzW2ldKS50cmlnZ2VyKG5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbi5hcHBseSh0aGlzLCBbbmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIHJldHVybiBldmVudEhhbmRsZXI7XG59XG5cbnZhciBjbGljayA9IHNob3J0Y3V0KCdjbGljaycpO1xudmFyIGJsdXIgPSBzaG9ydGN1dCgnYmx1cicpO1xudmFyIGZvY3VzID0gc2hvcnRjdXQoJ2ZvY3VzJyk7XG52YXIgZm9jdXNpbiA9IHNob3J0Y3V0KCdmb2N1c2luJyk7XG52YXIgZm9jdXNvdXQgPSBzaG9ydGN1dCgnZm9jdXNvdXQnKTtcbnZhciBrZXl1cCA9IHNob3J0Y3V0KCdrZXl1cCcpO1xudmFyIGtleWRvd24gPSBzaG9ydGN1dCgna2V5ZG93bicpO1xudmFyIGtleXByZXNzID0gc2hvcnRjdXQoJ2tleXByZXNzJyk7XG52YXIgc3VibWl0ID0gc2hvcnRjdXQoJ3N1Ym1pdCcpO1xudmFyIGNoYW5nZSA9IHNob3J0Y3V0KCdjaGFuZ2UnKTtcbnZhciBtb3VzZWRvd24gPSBzaG9ydGN1dCgnbW91c2Vkb3duJyk7XG52YXIgbW91c2Vtb3ZlID0gc2hvcnRjdXQoJ21vdXNlbW92ZScpO1xudmFyIG1vdXNldXAgPSBzaG9ydGN1dCgnbW91c2V1cCcpO1xudmFyIG1vdXNlZW50ZXIgPSBzaG9ydGN1dCgnbW91c2VlbnRlcicpO1xudmFyIG1vdXNlbGVhdmUgPSBzaG9ydGN1dCgnbW91c2VsZWF2ZScpO1xudmFyIG1vdXNlb3V0ID0gc2hvcnRjdXQoJ21vdXNlb3V0Jyk7XG52YXIgbW91c2VvdmVyID0gc2hvcnRjdXQoJ21vdXNlb3ZlcicpO1xudmFyIHRvdWNoc3RhcnQgPSBzaG9ydGN1dCgndG91Y2hzdGFydCcpO1xudmFyIHRvdWNoZW5kID0gc2hvcnRjdXQoJ3RvdWNoZW5kJyk7XG52YXIgdG91Y2htb3ZlID0gc2hvcnRjdXQoJ3RvdWNobW92ZScpO1xudmFyIHJlc2l6ZSA9IHNob3J0Y3V0KCdyZXNpemUnKTtcbnZhciBzY3JvbGwgPSBzaG9ydGN1dCgnc2Nyb2xsJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICQ7XG5leHBvcnQgeyAkLCBhZGQsIGFkZENsYXNzLCBhbmltYXRlLCBhbmltYXRpb25FbmQsIGFwcGVuZCwgYXBwZW5kVG8sIGF0dHIsIGJsdXIsIGNoYW5nZSwgY2hpbGRyZW4sIGNsaWNrLCBjbG9zZXN0LCBjc3MsIGRhdGEsIGRhdGFzZXQsIGRldGFjaCwgZWFjaCwgZW1wdHksIGVxLCBmaWx0ZXIsIGZpbmQsIGZvY3VzLCBmb2N1c2luLCBmb2N1c291dCwgaGFzQ2xhc3MsIGhlaWdodCwgaGlkZSwgaHRtbCwgaW5kZXgsIGluc2VydEFmdGVyLCBpbnNlcnRCZWZvcmUsIGlzLCBrZXlkb3duLCBrZXlwcmVzcywga2V5dXAsIG1vdXNlZG93biwgbW91c2VlbnRlciwgbW91c2VsZWF2ZSwgbW91c2Vtb3ZlLCBtb3VzZW91dCwgbW91c2VvdmVyLCBtb3VzZXVwLCBuZXh0LCBuZXh0QWxsLCBvZmYsIG9mZnNldCwgb24sIG9uY2UsIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoLCBwYXJlbnQsIHBhcmVudHMsIHByZXBlbmQsIHByZXBlbmRUbywgcHJldiwgcHJldkFsbCwgcHJvcCwgcmVtb3ZlLCByZW1vdmVBdHRyLCByZW1vdmVDbGFzcywgcmVtb3ZlRGF0YSwgcmVzaXplLCBzY3JvbGwsIHNjcm9sbExlZnQsIHNjcm9sbFRvLCBzY3JvbGxUb3AsIHNob3csIHNpYmxpbmdzLCBzdG9wLCBzdHlsZXMsIHN1Ym1pdCwgdGV4dCwgdG9nZ2xlQ2xhc3MsIHRvdWNoZW5kLCB0b3VjaG1vdmUsIHRvdWNoc3RhcnQsIHRyYW5zZm9ybSwgdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCwgdHJpZ2dlciwgdmFsLCB2YWx1ZSwgd2lkdGggfTtcbiIsIi8qKlxuICogU1NSIFdpbmRvdyAzLjAuMFxuICogQmV0dGVyIGhhbmRsaW5nIGZvciB3aW5kb3cgb2JqZWN0IGluIFNTUiBlbnZpcm9ubWVudFxuICogaHR0cHM6Ly9naXRodWIuY29tL25vbGltaXRzNHdlYi9zc3Itd2luZG93XG4gKlxuICogQ29weXJpZ2h0IDIwMjAsIFZsYWRpbWlyIEtoYXJsYW1waWRpXG4gKlxuICogTGljZW5zZWQgdW5kZXIgTUlUXG4gKlxuICogUmVsZWFzZWQgb246IE5vdmVtYmVyIDksIDIwMjBcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiAob2JqICE9PSBudWxsICYmXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmXG4gICAgICAgICdjb25zdHJ1Y3RvcicgaW4gb2JqICYmXG4gICAgICAgIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KTtcbn1cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNyYykge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSB7fTsgfVxuICAgIGlmIChzcmMgPT09IHZvaWQgMCkgeyBzcmMgPSB7fTsgfVxuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W2tleV0gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qoc3JjW2tleV0pICYmXG4gICAgICAgICAgICBpc09iamVjdCh0YXJnZXRba2V5XSkgJiZcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG52YXIgc3NyRG9jdW1lbnQgPSB7XG4gICAgYm9keToge30sXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkgeyB9LFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBhY3RpdmVFbGVtZW50OiB7XG4gICAgICAgIGJsdXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgbm9kZU5hbWU6ICcnLFxuICAgIH0sXG4gICAgcXVlcnlTZWxlY3RvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHF1ZXJ5U2VsZWN0b3JBbGw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH0sXG4gICAgZ2V0RWxlbWVudEJ5SWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVFdmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdEV2ZW50OiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBbXSxcbiAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgZ2V0RWxlbWVudHNCeVRhZ05hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlRWxlbWVudE5TOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIGltcG9ydE5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiAnJyxcbiAgICAgICAgaG9zdDogJycsXG4gICAgICAgIGhvc3RuYW1lOiAnJyxcbiAgICAgICAgaHJlZjogJycsXG4gICAgICAgIG9yaWdpbjogJycsXG4gICAgICAgIHBhdGhuYW1lOiAnJyxcbiAgICAgICAgcHJvdG9jb2w6ICcnLFxuICAgICAgICBzZWFyY2g6ICcnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKSB7XG4gICAgdmFyIGRvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuICAgIGV4dGVuZChkb2MsIHNzckRvY3VtZW50KTtcbiAgICByZXR1cm4gZG9jO1xufVxuXG52YXIgc3NyV2luZG93ID0ge1xuICAgIGRvY3VtZW50OiBzc3JEb2N1bWVudCxcbiAgICBuYXZpZ2F0b3I6IHtcbiAgICAgICAgdXNlckFnZW50OiAnJyxcbiAgICB9LFxuICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6ICcnLFxuICAgICAgICBob3N0OiAnJyxcbiAgICAgICAgaG9zdG5hbWU6ICcnLFxuICAgICAgICBocmVmOiAnJyxcbiAgICAgICAgb3JpZ2luOiAnJyxcbiAgICAgICAgcGF0aG5hbWU6ICcnLFxuICAgICAgICBwcm90b2NvbDogJycsXG4gICAgICAgIHNlYXJjaDogJycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBwdXNoU3RhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZ286IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKCkgeyB9LFxuICAgIH0sXG4gICAgQ3VzdG9tRXZlbnQ6IGZ1bmN0aW9uIEN1c3RvbUV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBJbWFnZTogZnVuY3Rpb24gKCkgeyB9LFxuICAgIERhdGU6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBzY3JlZW46IHt9LFxuICAgIHNldFRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBjbGVhclRpbWVvdXQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBtYXRjaE1lZGlhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9LFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG4gICAgfSxcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH0sXG59O1xuZnVuY3Rpb24gZ2V0V2luZG93KCkge1xuICAgIHZhciB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuICAgIGV4dGVuZCh3aW4sIHNzcldpbmRvdyk7XG4gICAgcmV0dXJuIHdpbjtcbn1cblxuZXhwb3J0IHsgZXh0ZW5kLCBnZXREb2N1bWVudCwgZ2V0V2luZG93LCBzc3JEb2N1bWVudCwgc3NyV2luZG93IH07XG4iLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIGJhc2UsIGNvbnRhaW5lckVsKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJ3dpbmRvdyc7XG4gIH1cblxuICBpZiAoIWJyZWFrcG9pbnRzIHx8IGJhc2UgPT09ICdjb250YWluZXInICYmICFjb250YWluZXJFbCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgdmFyIGJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgY3VycmVudEhlaWdodCA9IGJhc2UgPT09ICd3aW5kb3cnID8gd2luZG93LmlubmVySGVpZ2h0IDogY29udGFpbmVyRWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgcG9pbnRzID0gT2JqZWN0LmtleXMoYnJlYWtwb2ludHMpLm1hcChmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAodHlwZW9mIHBvaW50ID09PSAnc3RyaW5nJyAmJiBwb2ludC5pbmRleE9mKCdAJykgPT09IDApIHtcbiAgICAgIHZhciBtaW5SYXRpbyA9IHBhcnNlRmxvYXQocG9pbnQuc3Vic3RyKDEpKTtcbiAgICAgIHZhciB2YWx1ZSA9IGN1cnJlbnRIZWlnaHQgKiBtaW5SYXRpbztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcG9pbnQ6IHBvaW50XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcG9pbnQsXG4gICAgICBwb2ludDogcG9pbnRcbiAgICB9O1xuICB9KTtcbiAgcG9pbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYS52YWx1ZSwgMTApIC0gcGFyc2VJbnQoYi52YWx1ZSwgMTApO1xuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBfcG9pbnRzJGkgPSBwb2ludHNbaV0sXG4gICAgICAgIHBvaW50ID0gX3BvaW50cyRpLnBvaW50LFxuICAgICAgICB2YWx1ZSA9IF9wb2ludHMkaS52YWx1ZTtcblxuICAgIGlmIChiYXNlID09PSAnd2luZG93Jykge1xuICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogXCIgKyB2YWx1ZSArIFwicHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgYnJlYWtwb2ludCA9IHBvaW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWUgPD0gY29udGFpbmVyRWwuY2xpZW50V2lkdGgpIHtcbiAgICAgIGJyZWFrcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnJlYWtwb2ludCB8fCAnbWF4Jztcbn0iLCJpbXBvcnQgc2V0QnJlYWtwb2ludCBmcm9tICcuL3NldEJyZWFrcG9pbnQnO1xuaW1wb3J0IGdldEJyZWFrcG9pbnQgZnJvbSAnLi9nZXRCcmVha3BvaW50JztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QnJlYWtwb2ludDogc2V0QnJlYWtwb2ludCxcbiAgZ2V0QnJlYWtwb2ludDogZ2V0QnJlYWtwb2ludFxufTsiLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCcmVha3BvaW50KCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgaW5pdGlhbGl6ZWQgPSBzd2lwZXIuaW5pdGlhbGl6ZWQsXG4gICAgICBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9IHN3aXBlci5sb29wZWRTbGlkZXMsXG4gICAgICBsb29wZWRTbGlkZXMgPSBfc3dpcGVyJGxvb3BlZFNsaWRlcyA9PT0gdm9pZCAwID8gMCA6IF9zd2lwZXIkbG9vcGVkU2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICRlbCA9IHN3aXBlci4kZWw7XG4gIHZhciBicmVha3BvaW50cyA9IHBhcmFtcy5icmVha3BvaW50cztcbiAgaWYgKCFicmVha3BvaW50cyB8fCBicmVha3BvaW50cyAmJiBPYmplY3Qua2V5cyhicmVha3BvaW50cykubGVuZ3RoID09PSAwKSByZXR1cm47IC8vIEdldCBicmVha3BvaW50IGZvciB3aW5kb3cgd2lkdGggYW5kIHVwZGF0ZSBwYXJhbWV0ZXJzXG5cbiAgdmFyIGJyZWFrcG9pbnQgPSBzd2lwZXIuZ2V0QnJlYWtwb2ludChicmVha3BvaW50cywgc3dpcGVyLnBhcmFtcy5icmVha3BvaW50c0Jhc2UsIHN3aXBlci5lbCk7XG4gIGlmICghYnJlYWtwb2ludCB8fCBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPT09IGJyZWFrcG9pbnQpIHJldHVybjtcbiAgdmFyIGJyZWFrcG9pbnRPbmx5UGFyYW1zID0gYnJlYWtwb2ludCBpbiBicmVha3BvaW50cyA/IGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xuXG4gIGlmIChicmVha3BvaW50T25seVBhcmFtcykge1xuICAgIFsnc2xpZGVzUGVyVmlldycsICdzcGFjZUJldHdlZW4nLCAnc2xpZGVzUGVyR3JvdXAnLCAnc2xpZGVzUGVyR3JvdXBTa2lwJywgJ3NsaWRlc1BlckNvbHVtbiddLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICB2YXIgcGFyYW1WYWx1ZSA9IGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXTtcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgaWYgKHBhcmFtID09PSAnc2xpZGVzUGVyVmlldycgJiYgKHBhcmFtVmFsdWUgPT09ICdBVVRPJyB8fCBwYXJhbVZhbHVlID09PSAnYXV0bycpKSB7XG4gICAgICAgIGJyZWFrcG9pbnRPbmx5UGFyYW1zW3BhcmFtXSA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSBpZiAocGFyYW0gPT09ICdzbGlkZXNQZXJWaWV3Jykge1xuICAgICAgICBicmVha3BvaW50T25seVBhcmFtc1twYXJhbV0gPSBwYXJzZUZsb2F0KHBhcmFtVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWtwb2ludE9ubHlQYXJhbXNbcGFyYW1dID0gcGFyc2VJbnQocGFyYW1WYWx1ZSwgMTApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGJyZWFrcG9pbnRQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcyB8fCBzd2lwZXIub3JpZ2luYWxQYXJhbXM7XG4gIHZhciB3YXNNdWx0aVJvdyA9IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxO1xuICB2YXIgaXNNdWx0aVJvdyA9IGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMTtcbiAgdmFyIHdhc0VuYWJsZWQgPSBwYXJhbXMuZW5hYmxlZDtcblxuICBpZiAod2FzTXVsdGlSb3cgJiYgIWlzTXVsdGlSb3cpIHtcbiAgICAkZWwucmVtb3ZlQ2xhc3MocGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93IFwiICsgcGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBcIm11bHRpcm93LWNvbHVtblwiKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgfSBlbHNlIGlmICghd2FzTXVsdGlSb3cgJiYgaXNNdWx0aVJvdykge1xuICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3dcIik7XG5cbiAgICBpZiAoYnJlYWtwb2ludFBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsICYmIGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicgfHwgIWJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCAmJiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICRlbC5hZGRDbGFzcyhwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyArIFwibXVsdGlyb3ctY29sdW1uXCIpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0Q29udGFpbmVyQ2xhc3NlcygpO1xuICB9XG5cbiAgdmFyIGRpcmVjdGlvbkNoYW5nZWQgPSBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAmJiBicmVha3BvaW50UGFyYW1zLmRpcmVjdGlvbiAhPT0gcGFyYW1zLmRpcmVjdGlvbjtcbiAgdmFyIG5lZWRzUmVMb29wID0gcGFyYW1zLmxvb3AgJiYgKGJyZWFrcG9pbnRQYXJhbXMuc2xpZGVzUGVyVmlldyAhPT0gcGFyYW1zLnNsaWRlc1BlclZpZXcgfHwgZGlyZWN0aW9uQ2hhbmdlZCk7XG5cbiAgaWYgKGRpcmVjdGlvbkNoYW5nZWQgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLnBhcmFtcywgYnJlYWtwb2ludFBhcmFtcyk7XG4gIHZhciBpc0VuYWJsZWQgPSBzd2lwZXIucGFyYW1zLmVuYWJsZWQ7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBhbGxvd1RvdWNoTW92ZTogc3dpcGVyLnBhcmFtcy5hbGxvd1RvdWNoTW92ZSxcbiAgICBhbGxvd1NsaWRlTmV4dDogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlTmV4dCxcbiAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldlxuICB9KTtcblxuICBpZiAod2FzRW5hYmxlZCAmJiAhaXNFbmFibGVkKSB7XG4gICAgc3dpcGVyLmRpc2FibGUoKTtcbiAgfSBlbHNlIGlmICghd2FzRW5hYmxlZCAmJiBpc0VuYWJsZWQpIHtcbiAgICBzd2lwZXIuZW5hYmxlKCk7XG4gIH1cblxuICBzd2lwZXIuY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xuICBzd2lwZXIuZW1pdCgnX2JlZm9yZUJyZWFrcG9pbnQnLCBicmVha3BvaW50UGFyYW1zKTtcblxuICBpZiAobmVlZHNSZUxvb3AgJiYgaW5pdGlhbGl6ZWQpIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIubG9vcENyZWF0ZSgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXMoKTtcbiAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVJbmRleCAtIGxvb3BlZFNsaWRlcyArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdicmVha3BvaW50JywgYnJlYWtwb2ludFBhcmFtcyk7XG59IiwiZnVuY3Rpb24gY2hlY2tPdmVyZmxvdygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zO1xuICB2YXIgd2FzTG9ja2VkID0gc3dpcGVyLmlzTG9ja2VkO1xuICB2YXIgbGFzdFNsaWRlUG9zaXRpb24gPSBzd2lwZXIuc2xpZGVzLmxlbmd0aCA+IDAgJiYgcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSArIHBhcmFtcy5zcGFjZUJldHdlZW4gKiAoc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKSArIHN3aXBlci5zbGlkZXNbMF0ub2Zmc2V0V2lkdGggKiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcblxuICBpZiAocGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZSAmJiBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXIgJiYgbGFzdFNsaWRlUG9zaXRpb24pIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBsYXN0U2xpZGVQb3NpdGlvbiA8PSBzd2lwZXIuc2l6ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuaXNMb2NrZWQgPSBzd2lwZXIuc25hcEdyaWQubGVuZ3RoID09PSAxO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gIXN3aXBlci5pc0xvY2tlZDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gIXN3aXBlci5pc0xvY2tlZDsgLy8gZXZlbnRzXG5cbiAgaWYgKHdhc0xvY2tlZCAhPT0gc3dpcGVyLmlzTG9ja2VkKSBzd2lwZXIuZW1pdChzd2lwZXIuaXNMb2NrZWQgPyAnbG9jaycgOiAndW5sb2NrJyk7XG5cbiAgaWYgKHdhc0xvY2tlZCAmJiB3YXNMb2NrZWQgIT09IHN3aXBlci5pc0xvY2tlZCkge1xuICAgIHN3aXBlci5pc0VuZCA9IGZhbHNlO1xuICAgIGlmIChzd2lwZXIubmF2aWdhdGlvbikgc3dpcGVyLm5hdmlnYXRpb24udXBkYXRlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93XG59OyIsImZ1bmN0aW9uIHByZXBhcmVDbGFzc2VzKGVudHJpZXMsIHByZWZpeCkge1xuICB2YXIgcmVzdWx0Q2xhc3NlcyA9IFtdO1xuICBlbnRyaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyhpdGVtKS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWVzKSB7XG4gICAgICAgIGlmIChpdGVtW2NsYXNzTmFtZXNdKSB7XG4gICAgICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGNsYXNzTmFtZXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzdWx0Q2xhc3Nlcy5wdXNoKHByZWZpeCArIGl0ZW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRDbGFzc2VzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzc2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGNsYXNzTmFtZXMgPSBzd2lwZXIuY2xhc3NOYW1lcyxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBydGwgPSBzd2lwZXIucnRsLFxuICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgIGRldmljZSA9IHN3aXBlci5kZXZpY2UsXG4gICAgICBzdXBwb3J0ID0gc3dpcGVyLnN1cHBvcnQ7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIHZhciBzdWZmaXhlcyA9IHByZXBhcmVDbGFzc2VzKFsnaW5pdGlhbGl6ZWQnLCBwYXJhbXMuZGlyZWN0aW9uLCB7XG4gICAgJ3BvaW50ZXItZXZlbnRzJzogc3VwcG9ydC5wb2ludGVyRXZlbnRzICYmICFzdXBwb3J0LnRvdWNoXG4gIH0sIHtcbiAgICAnZnJlZS1tb2RlJzogcGFyYW1zLmZyZWVNb2RlXG4gIH0sIHtcbiAgICAnYXV0b2hlaWdodCc6IHBhcmFtcy5hdXRvSGVpZ2h0XG4gIH0sIHtcbiAgICAncnRsJzogcnRsXG4gIH0sIHtcbiAgICAnbXVsdGlyb3cnOiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMVxuICB9LCB7XG4gICAgJ211bHRpcm93LWNvbHVtbic6IHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gPiAxICYmIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAnY29sdW1uJ1xuICB9LCB7XG4gICAgJ2FuZHJvaWQnOiBkZXZpY2UuYW5kcm9pZFxuICB9LCB7XG4gICAgJ2lvcyc6IGRldmljZS5pb3NcbiAgfSwge1xuICAgICdjc3MtbW9kZSc6IHBhcmFtcy5jc3NNb2RlXG4gIH1dLCBwYXJhbXMuY29udGFpbmVyTW9kaWZpZXJDbGFzcyk7XG4gIGNsYXNzTmFtZXMucHVzaC5hcHBseShjbGFzc05hbWVzLCBzdWZmaXhlcyk7XG4gICRlbC5hZGRDbGFzcyhbXS5jb25jYXQoY2xhc3NOYW1lcykuam9pbignICcpKTtcbiAgc3dpcGVyLmVtaXRDb250YWluZXJDbGFzc2VzKCk7XG59IiwiaW1wb3J0IGFkZENsYXNzZXMgZnJvbSAnLi9hZGRDbGFzc2VzJztcbmltcG9ydCByZW1vdmVDbGFzc2VzIGZyb20gJy4vcmVtb3ZlQ2xhc3Nlcyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZENsYXNzZXM6IGFkZENsYXNzZXMsXG4gIHJlbW92ZUNsYXNzZXM6IHJlbW92ZUNsYXNzZXNcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciAkZWwgPSBzd2lwZXIuJGVsLFxuICAgICAgY2xhc3NOYW1lcyA9IHN3aXBlci5jbGFzc05hbWVzO1xuICAkZWwucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lcy5qb2luKCcgJykpO1xuICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogXCJvZmZcIiAqL1xuaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdywgZGVsZXRlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBnZXRTdXBwb3J0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LXN1cHBvcnQnO1xuaW1wb3J0IHsgZ2V0RGV2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWRldmljZSc7XG5pbXBvcnQgeyBnZXRCcm93c2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2V0LWJyb3dzZXInO1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuLi8uLi9tb2R1bGVzL3Jlc2l6ZS9yZXNpemUnO1xuaW1wb3J0IE9ic2VydmVyIGZyb20gJy4uLy4uL21vZHVsZXMvb2JzZXJ2ZXIvb2JzZXJ2ZXInO1xuaW1wb3J0IG1vZHVsYXIgZnJvbSAnLi9tb2R1bGFyJztcbmltcG9ydCBldmVudHNFbWl0dGVyIGZyb20gJy4vZXZlbnRzLWVtaXR0ZXInO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuL3VwZGF0ZS9pbmRleCc7XG5pbXBvcnQgdHJhbnNsYXRlIGZyb20gJy4vdHJhbnNsYXRlL2luZGV4JztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4vdHJhbnNpdGlvbi9pbmRleCc7XG5pbXBvcnQgc2xpZGUgZnJvbSAnLi9zbGlkZS9pbmRleCc7XG5pbXBvcnQgbG9vcCBmcm9tICcuL2xvb3AvaW5kZXgnO1xuaW1wb3J0IGdyYWJDdXJzb3IgZnJvbSAnLi9ncmFiLWN1cnNvci9pbmRleCc7XG5pbXBvcnQgbWFuaXB1bGF0aW9uIGZyb20gJy4vbWFuaXB1bGF0aW9uL2luZGV4JztcbmltcG9ydCBldmVudHMgZnJvbSAnLi9ldmVudHMvaW5kZXgnO1xuaW1wb3J0IGJyZWFrcG9pbnRzIGZyb20gJy4vYnJlYWtwb2ludHMvaW5kZXgnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9jbGFzc2VzL2luZGV4JztcbmltcG9ydCBpbWFnZXMgZnJvbSAnLi9pbWFnZXMvaW5kZXgnO1xuaW1wb3J0IGNoZWNrT3ZlcmZsb3cgZnJvbSAnLi9jaGVjay1vdmVyZmxvdy9pbmRleCc7XG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi9kZWZhdWx0cyc7XG52YXIgcHJvdG90eXBlcyA9IHtcbiAgbW9kdWxhcjogbW9kdWxhcixcbiAgZXZlbnRzRW1pdHRlcjogZXZlbnRzRW1pdHRlcixcbiAgdXBkYXRlOiB1cGRhdGUsXG4gIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICBzbGlkZTogc2xpZGUsXG4gIGxvb3A6IGxvb3AsXG4gIGdyYWJDdXJzb3I6IGdyYWJDdXJzb3IsXG4gIG1hbmlwdWxhdGlvbjogbWFuaXB1bGF0aW9uLFxuICBldmVudHM6IGV2ZW50cyxcbiAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRzLFxuICBjaGVja092ZXJmbG93OiBjaGVja092ZXJmbG93LFxuICBjbGFzc2VzOiBjbGFzc2VzLFxuICBpbWFnZXM6IGltYWdlc1xufTtcbnZhciBleHRlbmRlZERlZmF1bHRzID0ge307XG5cbnZhciBTd2lwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTd2lwZXIoKSB7XG4gICAgdmFyIGVsO1xuICAgIHZhciBwYXJhbXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIGFyZ3NbMF0uY29uc3RydWN0b3IgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3NbMF0pLnNsaWNlKDgsIC0xKSA9PT0gJ09iamVjdCcpIHtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsID0gYXJnc1swXTtcbiAgICAgIHBhcmFtcyA9IGFyZ3NbMV07XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMpIHBhcmFtcyA9IHt9O1xuICAgIHBhcmFtcyA9IGV4dGVuZCh7fSwgcGFyYW1zKTtcbiAgICBpZiAoZWwgJiYgIXBhcmFtcy5lbCkgcGFyYW1zLmVsID0gZWw7XG5cbiAgICBpZiAocGFyYW1zLmVsICYmICQocGFyYW1zLmVsKS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgc3dpcGVycyA9IFtdO1xuICAgICAgJChwYXJhbXMuZWwpLmVhY2goZnVuY3Rpb24gKGNvbnRhaW5lckVsKSB7XG4gICAgICAgIHZhciBuZXdQYXJhbXMgPSBleHRlbmQoe30sIHBhcmFtcywge1xuICAgICAgICAgIGVsOiBjb250YWluZXJFbFxuICAgICAgICB9KTtcbiAgICAgICAgc3dpcGVycy5wdXNoKG5ldyBTd2lwZXIobmV3UGFyYW1zKSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzd2lwZXJzO1xuICAgIH0gLy8gU3dpcGVyIEluc3RhbmNlXG5cblxuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHN3aXBlci5fX3N3aXBlcl9fID0gdHJ1ZTtcbiAgICBzd2lwZXIuc3VwcG9ydCA9IGdldFN1cHBvcnQoKTtcbiAgICBzd2lwZXIuZGV2aWNlID0gZ2V0RGV2aWNlKHtcbiAgICAgIHVzZXJBZ2VudDogcGFyYW1zLnVzZXJBZ2VudFxuICAgIH0pO1xuICAgIHN3aXBlci5icm93c2VyID0gZ2V0QnJvd3NlcigpO1xuICAgIHN3aXBlci5ldmVudHNMaXN0ZW5lcnMgPSB7fTtcbiAgICBzd2lwZXIuZXZlbnRzQW55TGlzdGVuZXJzID0gW107XG5cbiAgICBpZiAodHlwZW9mIHN3aXBlci5tb2R1bGVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgc3dpcGVyLm1vZHVsZXMgPSB7fTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIubW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgdmFyIG1vZHVsZSA9IHN3aXBlci5tb2R1bGVzW21vZHVsZU5hbWVdO1xuXG4gICAgICBpZiAobW9kdWxlLnBhcmFtcykge1xuICAgICAgICB2YXIgbW9kdWxlUGFyYW1OYW1lID0gT2JqZWN0LmtleXMobW9kdWxlLnBhcmFtcylbMF07XG4gICAgICAgIHZhciBtb2R1bGVQYXJhbXMgPSBtb2R1bGUucGFyYW1zW21vZHVsZVBhcmFtTmFtZV07XG4gICAgICAgIGlmICh0eXBlb2YgbW9kdWxlUGFyYW1zICE9PSAnb2JqZWN0JyB8fCBtb2R1bGVQYXJhbXMgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBpZiAoWyduYXZpZ2F0aW9uJywgJ3BhZ2luYXRpb24nLCAnc2Nyb2xsYmFyJ10uaW5kZXhPZihtb2R1bGVQYXJhbU5hbWUpID49IDAgJiYgcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0gPT09IHRydWUpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9IHtcbiAgICAgICAgICAgIGF1dG86IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEobW9kdWxlUGFyYW1OYW1lIGluIHBhcmFtcyAmJiAnZW5hYmxlZCcgaW4gbW9kdWxlUGFyYW1zKSkgcmV0dXJuO1xuXG4gICAgICAgIGlmIChwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID09PSAnb2JqZWN0JyAmJiAhKCdlbmFibGVkJyBpbiBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXSkpIHtcbiAgICAgICAgICBwYXJhbXNbbW9kdWxlUGFyYW1OYW1lXS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGFyYW1zW21vZHVsZVBhcmFtTmFtZV0pIHBhcmFtc1ttb2R1bGVQYXJhbU5hbWVdID0ge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7IC8vIEV4dGVuZCBkZWZhdWx0cyB3aXRoIG1vZHVsZXMgcGFyYW1zXG5cbiAgICB2YXIgc3dpcGVyUGFyYW1zID0gZXh0ZW5kKHt9LCBkZWZhdWx0cyk7XG4gICAgc3dpcGVyLnVzZVBhcmFtcyhzd2lwZXJQYXJhbXMpOyAvLyBFeHRlbmQgZGVmYXVsdHMgd2l0aCBwYXNzZWQgcGFyYW1zXG5cbiAgICBzd2lwZXIucGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXJQYXJhbXMsIGV4dGVuZGVkRGVmYXVsdHMsIHBhcmFtcyk7XG4gICAgc3dpcGVyLm9yaWdpbmFsUGFyYW1zID0gZXh0ZW5kKHt9LCBzd2lwZXIucGFyYW1zKTtcbiAgICBzd2lwZXIucGFzc2VkUGFyYW1zID0gZXh0ZW5kKHt9LCBwYXJhbXMpOyAvLyBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcyAmJiBzd2lwZXIucGFyYW1zLm9uKSB7XG4gICAgICBPYmplY3Qua2V5cyhzd2lwZXIucGFyYW1zLm9uKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgc3dpcGVyLm9uKGV2ZW50TmFtZSwgc3dpcGVyLnBhcmFtcy5vbltldmVudE5hbWVdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIucGFyYW1zICYmIHN3aXBlci5wYXJhbXMub25BbnkpIHtcbiAgICAgIHN3aXBlci5vbkFueShzd2lwZXIucGFyYW1zLm9uQW55KTtcbiAgICB9IC8vIFNhdmUgRG9tIGxpYlxuXG5cbiAgICBzd2lwZXIuJCA9ICQ7IC8vIEV4dGVuZCBTd2lwZXJcblxuICAgIGV4dGVuZChzd2lwZXIsIHtcbiAgICAgIGVuYWJsZWQ6IHN3aXBlci5wYXJhbXMuZW5hYmxlZCxcbiAgICAgIGVsOiBlbCxcbiAgICAgIC8vIENsYXNzZXNcbiAgICAgIGNsYXNzTmFtZXM6IFtdLFxuICAgICAgLy8gU2xpZGVzXG4gICAgICBzbGlkZXM6ICQoKSxcbiAgICAgIHNsaWRlc0dyaWQ6IFtdLFxuICAgICAgc25hcEdyaWQ6IFtdLFxuICAgICAgc2xpZGVzU2l6ZXNHcmlkOiBbXSxcbiAgICAgIC8vIGlzRGlyZWN0aW9uXG4gICAgICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgICB9LFxuICAgICAgaXNWZXJ0aWNhbDogZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICAgICAgcmV0dXJuIHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnO1xuICAgICAgfSxcbiAgICAgIC8vIEluZGV4ZXNcbiAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgcmVhbEluZGV4OiAwLFxuICAgICAgLy9cbiAgICAgIGlzQmVnaW5uaW5nOiB0cnVlLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgICAgLy8gUHJvcHNcbiAgICAgIHRyYW5zbGF0ZTogMCxcbiAgICAgIHByZXZpb3VzVHJhbnNsYXRlOiAwLFxuICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICB2ZWxvY2l0eTogMCxcbiAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAvLyBMb2Nrc1xuICAgICAgYWxsb3dTbGlkZU5leHQ6IHN3aXBlci5wYXJhbXMuYWxsb3dTbGlkZU5leHQsXG4gICAgICBhbGxvd1NsaWRlUHJldjogc3dpcGVyLnBhcmFtcy5hbGxvd1NsaWRlUHJldixcbiAgICAgIC8vIFRvdWNoIEV2ZW50c1xuICAgICAgdG91Y2hFdmVudHM6IGZ1bmN0aW9uIHRvdWNoRXZlbnRzKCkge1xuICAgICAgICB2YXIgdG91Y2ggPSBbJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJywgJ3RvdWNoY2FuY2VsJ107XG4gICAgICAgIHZhciBkZXNrdG9wID0gWydtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNldXAnXTtcblxuICAgICAgICBpZiAoc3dpcGVyLnN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgICAgICAgIGRlc2t0b3AgPSBbJ3BvaW50ZXJkb3duJywgJ3BvaW50ZXJtb3ZlJywgJ3BvaW50ZXJ1cCddO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggPSB7XG4gICAgICAgICAgc3RhcnQ6IHRvdWNoWzBdLFxuICAgICAgICAgIG1vdmU6IHRvdWNoWzFdLFxuICAgICAgICAgIGVuZDogdG91Y2hbMl0sXG4gICAgICAgICAgY2FuY2VsOiB0b3VjaFszXVxuICAgICAgICB9O1xuICAgICAgICBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wID0ge1xuICAgICAgICAgIHN0YXJ0OiBkZXNrdG9wWzBdLFxuICAgICAgICAgIG1vdmU6IGRlc2t0b3BbMV0sXG4gICAgICAgICAgZW5kOiBkZXNrdG9wWzJdXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzd2lwZXIuc3VwcG9ydC50b3VjaCB8fCAhc3dpcGVyLnBhcmFtcy5zaW11bGF0ZVRvdWNoID8gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2ggOiBzd2lwZXIudG91Y2hFdmVudHNEZXNrdG9wO1xuICAgICAgfSgpLFxuICAgICAgdG91Y2hFdmVudHNEYXRhOiB7XG4gICAgICAgIGlzVG91Y2hlZDogdW5kZWZpbmVkLFxuICAgICAgICBpc01vdmVkOiB1bmRlZmluZWQsXG4gICAgICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHVuZGVmaW5lZCxcbiAgICAgICAgdG91Y2hTdGFydFRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICAgICAgY3VycmVudFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBzdGFydFRyYW5zbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgICBhbGxvd1RocmVzaG9sZE1vdmU6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gRm9ybSBlbGVtZW50cyB0byBtYXRjaFxuICAgICAgICBmb2N1c2FibGVFbGVtZW50czogc3dpcGVyLnBhcmFtcy5mb2N1c2FibGVFbGVtZW50cyxcbiAgICAgICAgLy8gTGFzdCBjbGljayB0aW1lXG4gICAgICAgIGxhc3RDbGlja1RpbWU6IG5vdygpLFxuICAgICAgICBjbGlja1RpbWVvdXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgLy8gVmVsb2NpdGllc1xuICAgICAgICB2ZWxvY2l0aWVzOiBbXSxcbiAgICAgICAgYWxsb3dNb21lbnR1bUJvdW5jZTogdW5kZWZpbmVkLFxuICAgICAgICBpc1RvdWNoRXZlbnQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhcnRNb3Zpbmc6IHVuZGVmaW5lZFxuICAgICAgfSxcbiAgICAgIC8vIENsaWNrc1xuICAgICAgYWxsb3dDbGljazogdHJ1ZSxcbiAgICAgIC8vIFRvdWNoZXNcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiBzd2lwZXIucGFyYW1zLmFsbG93VG91Y2hNb3ZlLFxuICAgICAgdG91Y2hlczoge1xuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHN0YXJ0WTogMCxcbiAgICAgICAgY3VycmVudFg6IDAsXG4gICAgICAgIGN1cnJlbnRZOiAwLFxuICAgICAgICBkaWZmOiAwXG4gICAgICB9LFxuICAgICAgLy8gSW1hZ2VzXG4gICAgICBpbWFnZXNUb0xvYWQ6IFtdLFxuICAgICAgaW1hZ2VzTG9hZGVkOiAwXG4gICAgfSk7IC8vIEluc3RhbGwgTW9kdWxlc1xuXG4gICAgc3dpcGVyLnVzZU1vZHVsZXMoKTtcbiAgICBzd2lwZXIuZW1pdCgnX3N3aXBlcicpOyAvLyBJbml0XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5pbml0KSB7XG4gICAgICBzd2lwZXIuaW5pdCgpO1xuICAgIH0gLy8gUmV0dXJuIGFwcCBpbnN0YW5jZVxuXG5cbiAgICByZXR1cm4gc3dpcGVyO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcbiAgICBzd2lwZXIuZW5hYmxlZCA9IHRydWU7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcigpO1xuICAgIH1cblxuICAgIHN3aXBlci5lbWl0KCdlbmFibGUnKTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIuZW5hYmxlZCkgcmV0dXJuO1xuICAgIHN3aXBlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5ncmFiQ3Vyc29yKSB7XG4gICAgICBzd2lwZXIudW5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rpc2FibGUnKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiBzZXRQcm9ncmVzcyhwcm9ncmVzcywgc3BlZWQpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBwcm9ncmVzcyA9IE1hdGgubWluKE1hdGgubWF4KHByb2dyZXNzLCAwKSwgMSk7XG4gICAgdmFyIG1pbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICB2YXIgbWF4ID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICAgIHZhciBjdXJyZW50ID0gKG1heCAtIG1pbikgKiBwcm9ncmVzcyArIG1pbjtcbiAgICBzd2lwZXIudHJhbnNsYXRlVG8oY3VycmVudCwgdHlwZW9mIHNwZWVkID09PSAndW5kZWZpbmVkJyA/IDAgOiBzcGVlZCk7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfTtcblxuICBfcHJvdG8uZW1pdENvbnRhaW5lckNsYXNzZXMgPSBmdW5jdGlvbiBlbWl0Q29udGFpbmVyQ2xhc3NlcygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuX2VtaXRDbGFzc2VzIHx8ICFzd2lwZXIuZWwpIHJldHVybjtcbiAgICB2YXIgY2xhc3NlcyA9IHN3aXBlci5lbC5jbGFzc05hbWUuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGNsYXNzTmFtZS5pbmRleE9mKCdzd2lwZXItY29udGFpbmVyJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzKSA9PT0gMDtcbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnX2NvbnRhaW5lckNsYXNzZXMnLCBjbGFzc2VzLmpvaW4oJyAnKSk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uIGdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgcmV0dXJuIHNsaWRlRWwuY2xhc3NOYW1lLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBjbGFzc05hbWUuaW5kZXhPZignc3dpcGVyLXNsaWRlJykgPT09IDAgfHwgY2xhc3NOYW1lLmluZGV4T2Yoc3dpcGVyLnBhcmFtcy5zbGlkZUNsYXNzKSA9PT0gMDtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXRTbGlkZXNDbGFzc2VzID0gZnVuY3Rpb24gZW1pdFNsaWRlc0NsYXNzZXMoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLl9lbWl0Q2xhc3NlcyB8fCAhc3dpcGVyLmVsKSByZXR1cm47XG4gICAgdmFyIHVwZGF0ZXMgPSBbXTtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIHZhciBjbGFzc05hbWVzID0gc3dpcGVyLmdldFNsaWRlQ2xhc3NlcyhzbGlkZUVsKTtcbiAgICAgIHVwZGF0ZXMucHVzaCh7XG4gICAgICAgIHNsaWRlRWw6IHNsaWRlRWwsXG4gICAgICAgIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNcbiAgICAgIH0pO1xuICAgICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzJywgc2xpZGVFbCwgY2xhc3NOYW1lcyk7XG4gICAgfSk7XG4gICAgc3dpcGVyLmVtaXQoJ19zbGlkZUNsYXNzZXMnLCB1cGRhdGVzKTtcbiAgfTtcblxuICBfcHJvdG8uc2xpZGVzUGVyVmlld0R5bmFtaWMgPSBmdW5jdGlvbiBzbGlkZXNQZXJWaWV3RHluYW1pYygpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcyxcbiAgICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgICBzd2lwZXJTaXplID0gc3dpcGVyLnNpemUsXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICAgIHZhciBzcHYgPSAxO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgdmFyIHNsaWRlU2l6ZSA9IHNsaWRlc1thY3RpdmVJbmRleF0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgdmFyIGJyZWFrTG9vcDtcblxuICAgICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluZGV4ICsgMTsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW2ldICYmICFicmVha0xvb3ApIHtcbiAgICAgICAgICBzbGlkZVNpemUgKz0gc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZTtcbiAgICAgICAgICBzcHYgKz0gMTtcbiAgICAgICAgICBpZiAoc2xpZGVTaXplID4gc3dpcGVyU2l6ZSkgYnJlYWtMb29wID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IGFjdGl2ZUluZGV4IC0gMTsgX2kgPj0gMDsgX2kgLT0gMSkge1xuICAgICAgICBpZiAoc2xpZGVzW19pXSAmJiAhYnJlYWtMb29wKSB7XG4gICAgICAgICAgc2xpZGVTaXplICs9IHNsaWRlc1tfaV0uc3dpcGVyU2xpZGVTaXplO1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICAgIGlmIChzbGlkZVNpemUgPiBzd2lwZXJTaXplKSBicmVha0xvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pMiA9IGFjdGl2ZUluZGV4ICsgMTsgX2kyIDwgc2xpZGVzLmxlbmd0aDsgX2kyICs9IDEpIHtcbiAgICAgICAgaWYgKHNsaWRlc0dyaWRbX2kyXSAtIHNsaWRlc0dyaWRbYWN0aXZlSW5kZXhdIDwgc3dpcGVyU2l6ZSkge1xuICAgICAgICAgIHNwdiArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwdjtcbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICB2YXIgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7IC8vIEJyZWFrcG9pbnRzXG5cbiAgICBpZiAocGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH1cblxuICAgIHN3aXBlci51cGRhdGVTaXplKCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlcygpO1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcygpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgICB2YXIgdHJhbnNsYXRlVmFsdWUgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gc3dpcGVyLnRyYW5zbGF0ZSAqIC0xIDogc3dpcGVyLnRyYW5zbGF0ZTtcbiAgICAgIHZhciBuZXdUcmFuc2xhdGUgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVWYWx1ZSwgc3dpcGVyLm1heFRyYW5zbGF0ZSgpKSwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKTtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUobmV3VHJhbnNsYXRlKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNsYXRlZDtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgICBzZXRUcmFuc2xhdGUoKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgICBzd2lwZXIudXBkYXRlQXV0b0hlaWdodCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyA+IDEpICYmIHN3aXBlci5pc0VuZCAmJiAhc3dpcGVyLnBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2xhdGVkID0gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCAwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdHJhbnNsYXRlZCkge1xuICAgICAgICBzZXRUcmFuc2xhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc25hcEdyaWQgIT09IHN3aXBlci5zbmFwR3JpZCkge1xuICAgICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgndXBkYXRlJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNoYW5nZURpcmVjdGlvbiA9IGZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihuZXdEaXJlY3Rpb24sIG5lZWRVcGRhdGUpIHtcbiAgICBpZiAobmVlZFVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuZWVkVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgY3VycmVudERpcmVjdGlvbiA9IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uO1xuXG4gICAgaWYgKCFuZXdEaXJlY3Rpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgbmV3RGlyZWN0aW9uID0gY3VycmVudERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG5cbiAgICBpZiAobmV3RGlyZWN0aW9uID09PSBjdXJyZW50RGlyZWN0aW9uIHx8IG5ld0RpcmVjdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG5ld0RpcmVjdGlvbiAhPT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuIHN3aXBlcjtcbiAgICB9XG5cbiAgICBzd2lwZXIuJGVsLnJlbW92ZUNsYXNzKFwiXCIgKyBzd2lwZXIucGFyYW1zLmNvbnRhaW5lck1vZGlmaWVyQ2xhc3MgKyBjdXJyZW50RGlyZWN0aW9uKS5hZGRDbGFzcyhcIlwiICsgc3dpcGVyLnBhcmFtcy5jb250YWluZXJNb2RpZmllckNsYXNzICsgbmV3RGlyZWN0aW9uKTtcbiAgICBzd2lwZXIuZW1pdENvbnRhaW5lckNsYXNzZXMoKTtcbiAgICBzd2lwZXIucGFyYW1zLmRpcmVjdGlvbiA9IG5ld0RpcmVjdGlvbjtcbiAgICBzd2lwZXIuc2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgIGlmIChuZXdEaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVFbC5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzd2lwZXIuZW1pdCgnY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgaWYgKG5lZWRVcGRhdGUpIHN3aXBlci51cGRhdGUoKTtcbiAgICByZXR1cm4gc3dpcGVyO1xuICB9O1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KGVsKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKHN3aXBlci5tb3VudGVkKSByZXR1cm4gdHJ1ZTsgLy8gRmluZCBlbFxuXG4gICAgdmFyICRlbCA9ICQoZWwgfHwgc3dpcGVyLnBhcmFtcy5lbCk7XG4gICAgZWwgPSAkZWxbMF07XG5cbiAgICBpZiAoIWVsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZWwuc3dpcGVyID0gc3dpcGVyO1xuXG4gICAgdmFyIGdldFdyYXBwZXJTZWxlY3RvciA9IGZ1bmN0aW9uIGdldFdyYXBwZXJTZWxlY3RvcigpIHtcbiAgICAgIHJldHVybiBcIi5cIiArIChzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcyB8fCAnJykudHJpbSgpLnNwbGl0KCcgJykuam9pbignLicpO1xuICAgIH07XG5cbiAgICB2YXIgZ2V0V3JhcHBlciA9IGZ1bmN0aW9uIGdldFdyYXBwZXIoKSB7XG4gICAgICBpZiAoZWwgJiYgZWwuc2hhZG93Um9vdCAmJiBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIHJlcyA9ICQoZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKGdldFdyYXBwZXJTZWxlY3RvcigpKSk7IC8vIENoaWxkcmVuIG5lZWRzIHRvIHJldHVybiBzbG90IGl0ZW1zXG5cbiAgICAgICAgcmVzLmNoaWxkcmVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gJGVsLmNoaWxkcmVuKG9wdGlvbnMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkZWwuY2hpbGRyZW4oZ2V0V3JhcHBlclNlbGVjdG9yKCkpO1xuICAgIH07IC8vIEZpbmQgV3JhcHBlclxuXG5cbiAgICB2YXIgJHdyYXBwZXJFbCA9IGdldFdyYXBwZXIoKTtcblxuICAgIGlmICgkd3JhcHBlckVsLmxlbmd0aCA9PT0gMCAmJiBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICR3cmFwcGVyRWwgPSAkKHdyYXBwZXIpO1xuICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBzd2lwZXIucGFyYW1zLndyYXBwZXJDbGFzcztcbiAgICAgICRlbC5hcHBlbmQod3JhcHBlcik7XG4gICAgICAkZWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpLmVhY2goZnVuY3Rpb24gKHNsaWRlRWwpIHtcbiAgICAgICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVFbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICAkZWw6ICRlbCxcbiAgICAgIGVsOiBlbCxcbiAgICAgICR3cmFwcGVyRWw6ICR3cmFwcGVyRWwsXG4gICAgICB3cmFwcGVyRWw6ICR3cmFwcGVyRWxbMF0sXG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgICAgLy8gUlRMXG4gICAgICBydGw6IGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBydGxUcmFuc2xhdGU6IHN3aXBlci5wYXJhbXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgKGVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJyB8fCAkZWwuY3NzKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcpLFxuICAgICAgd3JvbmdSVEw6ICR3cmFwcGVyRWwuY3NzKCdkaXNwbGF5JykgPT09ICctd2Via2l0LWJveCdcbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoZWwpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm4gc3dpcGVyO1xuICAgIHZhciBtb3VudGVkID0gc3dpcGVyLm1vdW50KGVsKTtcbiAgICBpZiAobW91bnRlZCA9PT0gZmFsc2UpIHJldHVybiBzd2lwZXI7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZUluaXQnKTsgLy8gU2V0IGJyZWFrcG9pbnRcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmJyZWFrcG9pbnRzKSB7XG4gICAgICBzd2lwZXIuc2V0QnJlYWtwb2ludCgpO1xuICAgIH0gLy8gQWRkIENsYXNzZXNcblxuXG4gICAgc3dpcGVyLmFkZENsYXNzZXMoKTsgLy8gQ3JlYXRlIGxvb3BcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmxvb3ApIHtcbiAgICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gICAgfSAvLyBVcGRhdGUgc2l6ZVxuXG5cbiAgICBzd2lwZXIudXBkYXRlU2l6ZSgpOyAvLyBVcGRhdGUgc2xpZGVzXG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93KSB7XG4gICAgICBzd2lwZXIuY2hlY2tPdmVyZmxvdygpO1xuICAgIH0gLy8gU2V0IEdyYWIgQ3Vyc29yXG5cblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmdyYWJDdXJzb3IgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKCk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJlbG9hZEltYWdlcykge1xuICAgICAgc3dpcGVyLnByZWxvYWRJbWFnZXMoKTtcbiAgICB9IC8vIFNsaWRlIFRvIEluaXRpYWwgU2xpZGVcblxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMubG9vcCkge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnBhcmFtcy5pbml0aWFsU2xpZGUgKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCwgZmFsc2UsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIucGFyYW1zLmluaXRpYWxTbGlkZSwgMCwgc3dpcGVyLnBhcmFtcy5ydW5DYWxsYmFja3NPbkluaXQsIGZhbHNlLCB0cnVlKTtcbiAgICB9IC8vIEF0dGFjaCBldmVudHNcblxuXG4gICAgc3dpcGVyLmF0dGFjaEV2ZW50cygpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IHRydWU7IC8vIEVtaXRcblxuICAgIHN3aXBlci5lbWl0KCdpbml0Jyk7XG4gICAgc3dpcGVyLmVtaXQoJ2FmdGVySW5pdCcpO1xuICAgIHJldHVybiBzd2lwZXI7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGRlbGV0ZUluc3RhbmNlLCBjbGVhblN0eWxlcykge1xuICAgIGlmIChkZWxldGVJbnN0YW5jZSA9PT0gdm9pZCAwKSB7XG4gICAgICBkZWxldGVJbnN0YW5jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNsZWFuU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGNsZWFuU3R5bGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICAgJGVsID0gc3dpcGVyLiRlbCxcbiAgICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gICAgaWYgKHR5cGVvZiBzd2lwZXIucGFyYW1zID09PSAndW5kZWZpbmVkJyB8fCBzd2lwZXIuZGVzdHJveWVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnYmVmb3JlRGVzdHJveScpOyAvLyBJbml0IEZsYWdcblxuICAgIHN3aXBlci5pbml0aWFsaXplZCA9IGZhbHNlOyAvLyBEZXRhY2ggZXZlbnRzXG5cbiAgICBzd2lwZXIuZGV0YWNoRXZlbnRzKCk7IC8vIERlc3Ryb3kgbG9vcFxuXG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICB9IC8vIENsZWFudXAgc3R5bGVzXG5cblxuICAgIGlmIChjbGVhblN0eWxlcykge1xuICAgICAgc3dpcGVyLnJlbW92ZUNsYXNzZXMoKTtcbiAgICAgICRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgJHdyYXBwZXJFbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXG4gICAgICBpZiAoc2xpZGVzICYmIHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVzLnJlbW92ZUNsYXNzKFtwYXJhbXMuc2xpZGVWaXNpYmxlQ2xhc3MsIHBhcmFtcy5zbGlkZUFjdGl2ZUNsYXNzLCBwYXJhbXMuc2xpZGVOZXh0Q2xhc3MsIHBhcmFtcy5zbGlkZVByZXZDbGFzc10uam9pbignICcpKS5yZW1vdmVBdHRyKCdzdHlsZScpLnJlbW92ZUF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ2Rlc3Ryb3knKTsgLy8gRGV0YWNoIGVtaXR0ZXIgZXZlbnRzXG5cbiAgICBPYmplY3Qua2V5cyhzd2lwZXIuZXZlbnRzTGlzdGVuZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgIHN3aXBlci5vZmYoZXZlbnROYW1lKTtcbiAgICB9KTtcblxuICAgIGlmIChkZWxldGVJbnN0YW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgIHN3aXBlci4kZWxbMF0uc3dpcGVyID0gbnVsbDtcbiAgICAgIGRlbGV0ZVByb3BzKHN3aXBlcik7XG4gICAgfVxuXG4gICAgc3dpcGVyLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU3dpcGVyLmV4dGVuZERlZmF1bHRzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdHMobmV3RGVmYXVsdHMpIHtcbiAgICBleHRlbmQoZXh0ZW5kZWREZWZhdWx0cywgbmV3RGVmYXVsdHMpO1xuICB9O1xuXG4gIFN3aXBlci5pbnN0YWxsTW9kdWxlID0gZnVuY3Rpb24gaW5zdGFsbE1vZHVsZShtb2R1bGUpIHtcbiAgICBpZiAoIVN3aXBlci5wcm90b3R5cGUubW9kdWxlcykgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzID0ge307XG4gICAgdmFyIG5hbWUgPSBtb2R1bGUubmFtZSB8fCBPYmplY3Qua2V5cyhTd2lwZXIucHJvdG90eXBlLm1vZHVsZXMpLmxlbmd0aCArIFwiX1wiICsgbm93KCk7XG4gICAgU3dpcGVyLnByb3RvdHlwZS5tb2R1bGVzW25hbWVdID0gbW9kdWxlO1xuICB9O1xuXG4gIFN3aXBlci51c2UgPSBmdW5jdGlvbiB1c2UobW9kdWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobW9kdWxlKSkge1xuICAgICAgbW9kdWxlLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIFN3aXBlci5pbnN0YWxsTW9kdWxlKG0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gU3dpcGVyO1xuICAgIH1cblxuICAgIFN3aXBlci5pbnN0YWxsTW9kdWxlKG1vZHVsZSk7XG4gICAgcmV0dXJuIFN3aXBlcjtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3dpcGVyLCBudWxsLCBbe1xuICAgIGtleTogXCJleHRlbmRlZERlZmF1bHRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gZXh0ZW5kZWREZWZhdWx0cztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3dpcGVyO1xufSgpO1xuXG5PYmplY3Qua2V5cyhwcm90b3R5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm90b3R5cGVHcm91cCkge1xuICBPYmplY3Qua2V5cyhwcm90b3R5cGVzW3Byb3RvdHlwZUdyb3VwXSkuZm9yRWFjaChmdW5jdGlvbiAocHJvdG9NZXRob2QpIHtcbiAgICBTd2lwZXIucHJvdG90eXBlW3Byb3RvTWV0aG9kXSA9IHByb3RvdHlwZXNbcHJvdG90eXBlR3JvdXBdW3Byb3RvTWV0aG9kXTtcbiAgfSk7XG59KTtcblN3aXBlci51c2UoW1Jlc2l6ZSwgT2JzZXJ2ZXJdKTtcbmV4cG9ydCBkZWZhdWx0IFN3aXBlcjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IHRydWUsXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICB0b3VjaEV2ZW50c1RhcmdldDogJ2NvbnRhaW5lcicsXG4gIGluaXRpYWxTbGlkZTogMCxcbiAgc3BlZWQ6IDMwMCxcbiAgY3NzTW9kZTogZmFsc2UsXG4gIHVwZGF0ZU9uV2luZG93UmVzaXplOiB0cnVlLFxuICByZXNpemVPYnNlcnZlcjogZmFsc2UsXG4gIG5lc3RlZDogZmFsc2UsXG4gIGNyZWF0ZUVsZW1lbnRzOiBmYWxzZSxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgZm9jdXNhYmxlRWxlbWVudHM6ICdpbnB1dCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhLCBidXR0b24sIHZpZGVvLCBsYWJlbCcsXG4gIC8vIE92ZXJyaWRlc1xuICB3aWR0aDogbnVsbCxcbiAgaGVpZ2h0OiBudWxsLFxuICAvL1xuICBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IGZhbHNlLFxuICAvLyBzc3JcbiAgdXNlckFnZW50OiBudWxsLFxuICB1cmw6IG51bGwsXG4gIC8vIFRvIHN1cHBvcnQgaU9TJ3Mgc3dpcGUtdG8tZ28tYmFjayBnZXN0dXJlICh3aGVuIGJlaW5nIHVzZWQgaW4tYXBwKS5cbiAgZWRnZVN3aXBlRGV0ZWN0aW9uOiBmYWxzZSxcbiAgZWRnZVN3aXBlVGhyZXNob2xkOiAyMCxcbiAgLy8gRnJlZSBtb2RlXG4gIGZyZWVNb2RlOiBmYWxzZSxcbiAgZnJlZU1vZGVNb21lbnR1bTogdHJ1ZSxcbiAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiAxLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlOiB0cnVlLFxuICBmcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW86IDEsXG4gIGZyZWVNb2RlTW9tZW50dW1WZWxvY2l0eVJhdGlvOiAxLFxuICBmcmVlTW9kZVN0aWNreTogZmFsc2UsXG4gIGZyZWVNb2RlTWluaW11bVZlbG9jaXR5OiAwLjAyLFxuICAvLyBBdXRvaGVpZ2h0XG4gIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAvLyBTZXQgd3JhcHBlciB3aWR0aFxuICBzZXRXcmFwcGVyU2l6ZTogZmFsc2UsXG4gIC8vIFZpcnR1YWwgVHJhbnNsYXRlXG4gIHZpcnR1YWxUcmFuc2xhdGU6IGZhbHNlLFxuICAvLyBFZmZlY3RzXG4gIGVmZmVjdDogJ3NsaWRlJyxcbiAgLy8gJ3NsaWRlJyBvciAnZmFkZScgb3IgJ2N1YmUnIG9yICdjb3ZlcmZsb3cnIG9yICdmbGlwJ1xuICAvLyBCcmVha3BvaW50c1xuICBicmVha3BvaW50czogdW5kZWZpbmVkLFxuICBicmVha3BvaW50c0Jhc2U6ICd3aW5kb3cnLFxuICAvLyBTbGlkZXMgZ3JpZFxuICBzcGFjZUJldHdlZW46IDAsXG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIHNsaWRlc1BlckNvbHVtbjogMSxcbiAgc2xpZGVzUGVyQ29sdW1uRmlsbDogJ2NvbHVtbicsXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxuICBzbGlkZXNQZXJHcm91cFNraXA6IDAsXG4gIGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcbiAgY2VudGVyZWRTbGlkZXNCb3VuZHM6IGZhbHNlLFxuICBzbGlkZXNPZmZzZXRCZWZvcmU6IDAsXG4gIC8vIGluIHB4XG4gIHNsaWRlc09mZnNldEFmdGVyOiAwLFxuICAvLyBpbiBweFxuICBub3JtYWxpemVTbGlkZUluZGV4OiB0cnVlLFxuICBjZW50ZXJJbnN1ZmZpY2llbnRTbGlkZXM6IGZhbHNlLFxuICAvLyBEaXNhYmxlIHN3aXBlciBhbmQgaGlkZSBuYXZpZ2F0aW9uIHdoZW4gY29udGFpbmVyIG5vdCBvdmVyZmxvd1xuICB3YXRjaE92ZXJmbG93OiBmYWxzZSxcbiAgLy8gUm91bmQgbGVuZ3RoXG4gIHJvdW5kTGVuZ3RoczogZmFsc2UsXG4gIC8vIFRvdWNoZXNcbiAgdG91Y2hSYXRpbzogMSxcbiAgdG91Y2hBbmdsZTogNDUsXG4gIHNpbXVsYXRlVG91Y2g6IHRydWUsXG4gIHNob3J0U3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzOiB0cnVlLFxuICBsb25nU3dpcGVzUmF0aW86IDAuNSxcbiAgbG9uZ1N3aXBlc01zOiAzMDAsXG4gIGZvbGxvd0ZpbmdlcjogdHJ1ZSxcbiAgYWxsb3dUb3VjaE1vdmU6IHRydWUsXG4gIHRocmVzaG9sZDogMCxcbiAgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgdG91Y2hTdGFydFByZXZlbnREZWZhdWx0OiB0cnVlLFxuICB0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gIHRvdWNoUmVsZWFzZU9uRWRnZXM6IGZhbHNlLFxuICAvLyBVbmlxdWUgTmF2aWdhdGlvbiBFbGVtZW50c1xuICB1bmlxdWVOYXZFbGVtZW50czogdHJ1ZSxcbiAgLy8gUmVzaXN0YW5jZVxuICByZXNpc3RhbmNlOiB0cnVlLFxuICByZXNpc3RhbmNlUmF0aW86IDAuODUsXG4gIC8vIFByb2dyZXNzXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IGZhbHNlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IGZhbHNlLFxuICAvLyBDdXJzb3JcbiAgZ3JhYkN1cnNvcjogZmFsc2UsXG4gIC8vIENsaWNrc1xuICBwcmV2ZW50Q2xpY2tzOiB0cnVlLFxuICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gIHNsaWRlVG9DbGlja2VkU2xpZGU6IGZhbHNlLFxuICAvLyBJbWFnZXNcbiAgcHJlbG9hZEltYWdlczogdHJ1ZSxcbiAgdXBkYXRlT25JbWFnZXNSZWFkeTogdHJ1ZSxcbiAgLy8gbG9vcFxuICBsb29wOiBmYWxzZSxcbiAgbG9vcEFkZGl0aW9uYWxTbGlkZXM6IDAsXG4gIGxvb3BlZFNsaWRlczogbnVsbCxcbiAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gIGxvb3BQcmV2ZW50c1NsaWRlOiB0cnVlLFxuICAvLyBTd2lwaW5nL25vIHN3aXBpbmdcbiAgYWxsb3dTbGlkZVByZXY6IHRydWUsXG4gIGFsbG93U2xpZGVOZXh0OiB0cnVlLFxuICBzd2lwZUhhbmRsZXI6IG51bGwsXG4gIC8vICcuc3dpcGUtaGFuZGxlcicsXG4gIG5vU3dpcGluZzogdHJ1ZSxcbiAgbm9Td2lwaW5nQ2xhc3M6ICdzd2lwZXItbm8tc3dpcGluZycsXG4gIG5vU3dpcGluZ1NlbGVjdG9yOiBudWxsLFxuICAvLyBQYXNzaXZlIExpc3RlbmVyc1xuICBwYXNzaXZlTGlzdGVuZXJzOiB0cnVlLFxuICAvLyBOU1xuICBjb250YWluZXJNb2RpZmllckNsYXNzOiAnc3dpcGVyLWNvbnRhaW5lci0nLFxuICAvLyBORVdcbiAgc2xpZGVDbGFzczogJ3N3aXBlci1zbGlkZScsXG4gIHNsaWRlQmxhbmtDbGFzczogJ3N3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsnLFxuICBzbGlkZUFjdGl2ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWFjdGl2ZScsXG4gIHNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3M6ICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZScsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc3dpcGVyLXNsaWRlLXZpc2libGUnLFxuICBzbGlkZUR1cGxpY2F0ZUNsYXNzOiAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScsXG4gIHNsaWRlTmV4dENsYXNzOiAnc3dpcGVyLXNsaWRlLW5leHQnLFxuICBzbGlkZUR1cGxpY2F0ZU5leHRDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtbmV4dCcsXG4gIHNsaWRlUHJldkNsYXNzOiAnc3dpcGVyLXNsaWRlLXByZXYnLFxuICBzbGlkZUR1cGxpY2F0ZVByZXZDbGFzczogJ3N3aXBlci1zbGlkZS1kdXBsaWNhdGUtcHJldicsXG4gIHdyYXBwZXJDbGFzczogJ3N3aXBlci13cmFwcGVyJyxcbiAgLy8gQ2FsbGJhY2tzXG4gIHJ1bkNhbGxiYWNrc09uSW5pdDogdHJ1ZSxcbiAgLy8gSW50ZXJuYWxzXG4gIF9lbWl0Q2xhc3NlczogZmFsc2Vcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb246IGZ1bmN0aW9uIG9uKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgbWV0aG9kID0gcHJpb3JpdHkgPyAndW5zaGlmdCcgOiAncHVzaCc7XG4gICAgZXZlbnRzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XVttZXRob2RdKGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBvbmNlOiBmdW5jdGlvbiBvbmNlKGV2ZW50cywgaGFuZGxlciwgcHJpb3JpdHkpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gc2VsZjtcblxuICAgIGZ1bmN0aW9uIG9uY2VIYW5kbGVyKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnRzLCBvbmNlSGFuZGxlcik7XG5cbiAgICAgIGlmIChvbmNlSGFuZGxlci5fX2VtaXR0ZXJQcm94eSkge1xuICAgICAgICBkZWxldGUgb25jZUhhbmRsZXIuX19lbWl0dGVyUHJveHk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH1cblxuICAgIG9uY2VIYW5kbGVyLl9fZW1pdHRlclByb3h5ID0gaGFuZGxlcjtcbiAgICByZXR1cm4gc2VsZi5vbihldmVudHMsIG9uY2VIYW5kbGVyLCBwcmlvcml0eSk7XG4gIH0sXG4gIG9uQW55OiBmdW5jdGlvbiBvbkFueShoYW5kbGVyLCBwcmlvcml0eSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHJldHVybiBzZWxmO1xuICAgIHZhciBtZXRob2QgPSBwcmlvcml0eSA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcblxuICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpIDwgMCkge1xuICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnNbbWV0aG9kXShoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZjtcbiAgfSxcbiAgb2ZmQW55OiBmdW5jdGlvbiBvZmZBbnkoaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzQW55TGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHNlbGYuZXZlbnRzQW55TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gb2ZmKGV2ZW50cywgaGFuZGxlcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICBldmVudHMuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICAgIHNlbGYuZXZlbnRzTGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudEhhbmRsZXIsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gaGFuZGxlciB8fCBldmVudEhhbmRsZXIuX19lbWl0dGVyUHJveHkgJiYgZXZlbnRIYW5kbGVyLl9fZW1pdHRlclByb3h5ID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgICBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxmO1xuICB9LFxuICBlbWl0OiBmdW5jdGlvbiBlbWl0KCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIXNlbGYuZXZlbnRzTGlzdGVuZXJzKSByZXR1cm4gc2VsZjtcbiAgICB2YXIgZXZlbnRzO1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBjb250ZXh0O1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGFyZ3NbMF0pKSB7XG4gICAgICBldmVudHMgPSBhcmdzWzBdO1xuICAgICAgZGF0YSA9IGFyZ3Muc2xpY2UoMSwgYXJncy5sZW5ndGgpO1xuICAgICAgY29udGV4dCA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50cyA9IGFyZ3NbMF0uZXZlbnRzO1xuICAgICAgZGF0YSA9IGFyZ3NbMF0uZGF0YTtcbiAgICAgIGNvbnRleHQgPSBhcmdzWzBdLmNvbnRleHQgfHwgc2VsZjtcbiAgICB9XG5cbiAgICBkYXRhLnVuc2hpZnQoY29udGV4dCk7XG4gICAgdmFyIGV2ZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShldmVudHMpID8gZXZlbnRzIDogZXZlbnRzLnNwbGl0KCcgJyk7XG4gICAgZXZlbnRzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChzZWxmLmV2ZW50c0FueUxpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0FueUxpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5ldmVudHNBbnlMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgZXZlbnRIYW5kbGVyLmFwcGx5KGNvbnRleHQsIFtldmVudF0uY29uY2F0KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmV2ZW50c0xpc3RlbmVycyAmJiBzZWxmLmV2ZW50c0xpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgICAgc2VsZi5ldmVudHNMaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgIGV2ZW50SGFuZGxlci5hcHBseShjb250ZXh0LCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCBvblRvdWNoU3RhcnQgZnJvbSAnLi9vblRvdWNoU3RhcnQnO1xuaW1wb3J0IG9uVG91Y2hNb3ZlIGZyb20gJy4vb25Ub3VjaE1vdmUnO1xuaW1wb3J0IG9uVG91Y2hFbmQgZnJvbSAnLi9vblRvdWNoRW5kJztcbmltcG9ydCBvblJlc2l6ZSBmcm9tICcuL29uUmVzaXplJztcbmltcG9ydCBvbkNsaWNrIGZyb20gJy4vb25DbGljayc7XG5pbXBvcnQgb25TY3JvbGwgZnJvbSAnLi9vblNjcm9sbCc7XG52YXIgZHVtbXlFdmVudEF0dGFjaGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGR1bW15RXZlbnRMaXN0ZW5lcigpIHt9XG5cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsXG4gICAgICBlbCA9IHN3aXBlci5lbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICBzd2lwZXIub25Ub3VjaFN0YXJ0ID0gb25Ub3VjaFN0YXJ0LmJpbmQoc3dpcGVyKTtcbiAgc3dpcGVyLm9uVG91Y2hNb3ZlID0gb25Ub3VjaE1vdmUuYmluZChzd2lwZXIpO1xuICBzd2lwZXIub25Ub3VjaEVuZCA9IG9uVG91Y2hFbmQuYmluZChzd2lwZXIpO1xuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci5vblNjcm9sbCA9IG9uU2Nyb2xsLmJpbmQoc3dpcGVyKTtcbiAgfVxuXG4gIHN3aXBlci5vbkNsaWNrID0gb25DbGljay5iaW5kKHN3aXBlcik7XG4gIHZhciBjYXB0dXJlID0gISFwYXJhbXMubmVzdGVkOyAvLyBUb3VjaCBFdmVudHNcblxuICBpZiAoIXN1cHBvcnQudG91Y2ggJiYgc3VwcG9ydC5wb2ludGVyRXZlbnRzKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgc3dpcGVyLm9uVG91Y2hTdGFydCwgZmFsc2UpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgc3dpcGVyLm9uVG91Y2hNb3ZlLCBjYXB0dXJlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoc3VwcG9ydC50b3VjaCkge1xuICAgICAgdmFyIHBhc3NpdmVMaXN0ZW5lciA9IHRvdWNoRXZlbnRzLnN0YXJ0ID09PSAndG91Y2hzdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyID8ge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgY2FwdHVyZTogY2FwdHVyZVxuICAgICAgfSA6IGNhcHR1cmUpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuY2FuY2VsLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkdW1teUV2ZW50QXR0YWNoZWQpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGR1bW15RXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGR1bW15RXZlbnRBdHRhY2hlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFkZXZpY2UuaW9zICYmICFkZXZpY2UuYW5kcm9pZCB8fCBwYXJhbXMuc2ltdWxhdGVUb3VjaCAmJiAhc3VwcG9ydC50b3VjaCAmJiBkZXZpY2UuaW9zKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gICAgfVxuICB9IC8vIFByZXZlbnQgTGlua3MgQ2xpY2tzXG5cblxuICBpZiAocGFyYW1zLnByZXZlbnRDbGlja3MgfHwgcGFyYW1zLnByZXZlbnRDbGlja3NQcm9wYWdhdGlvbikge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpcGVyLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgd3JhcHBlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN3aXBlci5vblNjcm9sbCk7XG4gIH0gLy8gUmVzaXplIGhhbmRsZXJcblxuXG4gIGlmIChwYXJhbXMudXBkYXRlT25XaW5kb3dSZXNpemUpIHtcbiAgICBzd2lwZXIub24oZGV2aWNlLmlvcyB8fCBkZXZpY2UuYW5kcm9pZCA/ICdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2Ugb2JzZXJ2ZXJVcGRhdGUnIDogJ3Jlc2l6ZSBvYnNlcnZlclVwZGF0ZScsIG9uUmVzaXplLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIub24oJ29ic2VydmVyVXBkYXRlJywgb25SZXNpemUsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFjaEV2ZW50cygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hFdmVudHMgPSBzd2lwZXIudG91Y2hFdmVudHMsXG4gICAgICBlbCA9IHN3aXBlci5lbCxcbiAgICAgIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBkZXZpY2UgPSBzd2lwZXIuZGV2aWNlLFxuICAgICAgc3VwcG9ydCA9IHN3aXBlci5zdXBwb3J0O1xuICB2YXIgY2FwdHVyZSA9ICEhcGFyYW1zLm5lc3RlZDsgLy8gVG91Y2ggRXZlbnRzXG5cbiAgaWYgKCFzdXBwb3J0LnRvdWNoICYmIHN1cHBvcnQucG9pbnRlckV2ZW50cykge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuc3RhcnQsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHN1cHBvcnQudG91Y2gpIHtcbiAgICAgIHZhciBwYXNzaXZlTGlzdGVuZXIgPSB0b3VjaEV2ZW50cy5zdGFydCA9PT0gJ29uVG91Y2hTdGFydCcgJiYgc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIGNhcHR1cmU6IGZhbHNlXG4gICAgICB9IDogZmFsc2U7XG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLnN0YXJ0LCBzd2lwZXIub25Ub3VjaFN0YXJ0LCBwYXNzaXZlTGlzdGVuZXIpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5tb3ZlLCBzd2lwZXIub25Ub3VjaE1vdmUsIGNhcHR1cmUpO1xuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHN3aXBlci5vblRvdWNoRW5kLCBwYXNzaXZlTGlzdGVuZXIpO1xuXG4gICAgICBpZiAodG91Y2hFdmVudHMuY2FuY2VsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuY2FuY2VsLCBzd2lwZXIub25Ub3VjaEVuZCwgcGFzc2l2ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocGFyYW1zLnNpbXVsYXRlVG91Y2ggJiYgIWRldmljZS5pb3MgJiYgIWRldmljZS5hbmRyb2lkIHx8IHBhcmFtcy5zaW11bGF0ZVRvdWNoICYmICFzdXBwb3J0LnRvdWNoICYmIGRldmljZS5pb3MpIHtcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHN3aXBlci5vblRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN3aXBlci5vblRvdWNoTW92ZSwgY2FwdHVyZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3dpcGVyLm9uVG91Y2hFbmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gLy8gUHJldmVudCBMaW5rcyBDbGlja3NcblxuXG4gIGlmIChwYXJhbXMucHJldmVudENsaWNrcyB8fCBwYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2lwZXIub25DbGljaywgdHJ1ZSk7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB3cmFwcGVyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3dpcGVyLm9uU2Nyb2xsKTtcbiAgfSAvLyBSZXNpemUgaGFuZGxlclxuXG5cbiAgc3dpcGVyLm9mZihkZXZpY2UuaW9zIHx8IGRldmljZS5hbmRyb2lkID8gJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBvYnNlcnZlclVwZGF0ZScgOiAncmVzaXplIG9ic2VydmVyVXBkYXRlJywgb25SZXNpemUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGF0dGFjaEV2ZW50czogYXR0YWNoRXZlbnRzLFxuICBkZXRhY2hFdmVudHM6IGRldGFjaEV2ZW50c1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIGlmICghc3dpcGVyLmVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoIXN3aXBlci5hbGxvd0NsaWNrKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrcykgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMucHJldmVudENsaWNrc1Byb3BhZ2F0aW9uICYmIHN3aXBlci5hbmltYXRpbmcpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBlbCA9IHN3aXBlci5lbDtcbiAgaWYgKGVsICYmIGVsLm9mZnNldFdpZHRoID09PSAwKSByZXR1cm47IC8vIEJyZWFrcG9pbnRzXG5cbiAgaWYgKHBhcmFtcy5icmVha3BvaW50cykge1xuICAgIHN3aXBlci5zZXRCcmVha3BvaW50KCk7XG4gIH0gLy8gU2F2ZSBsb2Nrc1xuXG5cbiAgdmFyIGFsbG93U2xpZGVOZXh0ID0gc3dpcGVyLmFsbG93U2xpZGVOZXh0LFxuICAgICAgYWxsb3dTbGlkZVByZXYgPSBzd2lwZXIuYWxsb3dTbGlkZVByZXYsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZDsgLy8gRGlzYWJsZSBsb2NrcyBvbiByZXNpemVcblxuICBzd2lwZXIuYWxsb3dTbGlkZU5leHQgPSB0cnVlO1xuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIudXBkYXRlU2xpZGVzKCk7XG4gIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG5cbiAgaWYgKChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nIHx8IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID4gMSkgJiYgc3dpcGVyLmlzRW5kICYmICFzd2lwZXIuaXNCZWdpbm5pbmcgJiYgIXN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIDEsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIGlmIChzd2lwZXIuYXV0b3BsYXkgJiYgc3dpcGVyLmF1dG9wbGF5LnJ1bm5pbmcgJiYgc3dpcGVyLmF1dG9wbGF5LnBhdXNlZCkge1xuICAgIHN3aXBlci5hdXRvcGxheS5ydW4oKTtcbiAgfSAvLyBSZXR1cm4gbG9ja3MgYWZ0ZXIgcmVzaXplXG5cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG5cbiAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzbmFwR3JpZCAhPT0gc3dpcGVyLnNuYXBHcmlkKSB7XG4gICAgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHdyYXBwZXJFbCA9IHN3aXBlci53cmFwcGVyRWwsXG4gICAgICBydGxUcmFuc2xhdGUgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcbiAgc3dpcGVyLnByZXZpb3VzVHJhbnNsYXRlID0gc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgaWYgKHJ0bFRyYW5zbGF0ZSkge1xuICAgICAgc3dpcGVyLnRyYW5zbGF0ZSA9IHdyYXBwZXJFbC5zY3JvbGxXaWR0aCAtIHdyYXBwZXJFbC5vZmZzZXRXaWR0aCAtIHdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIudHJhbnNsYXRlID0gLXdyYXBwZXJFbC5zY3JvbGxUb3A7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICBpZiAoc3dpcGVyLnRyYW5zbGF0ZSA9PT0gLTApIHN3aXBlci50cmFuc2xhdGUgPSAwO1xuICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHN3aXBlci50cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gIH1cblxuICBpZiAobmV3UHJvZ3Jlc3MgIT09IHN3aXBlci5wcm9ncmVzcykge1xuICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhydGxUcmFuc2xhdGUgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zbGF0ZScsIHN3aXBlci50cmFuc2xhdGUsIGZhbHNlKTtcbn0iLCJpbXBvcnQgeyBub3csIG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRhdGEgPSBzd2lwZXIudG91Y2hFdmVudHNEYXRhO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHRvdWNoZXMgPSBzd2lwZXIudG91Y2hlcyxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWwsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKGRhdGEuYWxsb3dUb3VjaENhbGxiYWNrcykge1xuICAgIHN3aXBlci5lbWl0KCd0b3VjaEVuZCcsIGUpO1xuICB9XG5cbiAgZGF0YS5hbGxvd1RvdWNoQ2FsbGJhY2tzID0gZmFsc2U7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLmlzTW92ZWQgJiYgcGFyYW1zLmdyYWJDdXJzb3IpIHtcbiAgICAgIHN3aXBlci5zZXRHcmFiQ3Vyc29yKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICBkYXRhLnN0YXJ0TW92aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9IC8vIFJldHVybiBHcmFiIEN1cnNvclxuXG5cbiAgaWYgKHBhcmFtcy5ncmFiQ3Vyc29yICYmIGRhdGEuaXNNb3ZlZCAmJiBkYXRhLmlzVG91Y2hlZCAmJiAoc3dpcGVyLmFsbG93U2xpZGVOZXh0ID09PSB0cnVlIHx8IHN3aXBlci5hbGxvd1NsaWRlUHJldiA9PT0gdHJ1ZSkpIHtcbiAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcihmYWxzZSk7XG4gIH0gLy8gVGltZSBkaWZmXG5cblxuICB2YXIgdG91Y2hFbmRUaW1lID0gbm93KCk7XG4gIHZhciB0aW1lRGlmZiA9IHRvdWNoRW5kVGltZSAtIGRhdGEudG91Y2hTdGFydFRpbWU7IC8vIFRhcCwgZG91YmxlVGFwLCBDbGlja1xuXG4gIGlmIChzd2lwZXIuYWxsb3dDbGljaykge1xuICAgIHN3aXBlci51cGRhdGVDbGlja2VkU2xpZGUoZSk7XG4gICAgc3dpcGVyLmVtaXQoJ3RhcCBjbGljaycsIGUpO1xuXG4gICAgaWYgKHRpbWVEaWZmIDwgMzAwICYmIHRvdWNoRW5kVGltZSAtIGRhdGEubGFzdENsaWNrVGltZSA8IDMwMCkge1xuICAgICAgc3dpcGVyLmVtaXQoJ2RvdWJsZVRhcCBkb3VibGVDbGljaycsIGUpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEubGFzdENsaWNrVGltZSA9IG5vdygpO1xuICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzd2lwZXIuZGVzdHJveWVkKSBzd2lwZXIuYWxsb3dDbGljayA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICghZGF0YS5pc1RvdWNoZWQgfHwgIWRhdGEuaXNNb3ZlZCB8fCAhc3dpcGVyLnN3aXBlRGlyZWN0aW9uIHx8IHRvdWNoZXMuZGlmZiA9PT0gMCB8fCBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPT09IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgIGRhdGEuaXNNb3ZlZCA9IGZhbHNlO1xuICAgIGRhdGEuc3RhcnRNb3ZpbmcgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgZGF0YS5zdGFydE1vdmluZyA9IGZhbHNlO1xuICB2YXIgY3VycmVudFBvcztcblxuICBpZiAocGFyYW1zLmZvbGxvd0Zpbmdlcikge1xuICAgIGN1cnJlbnRQb3MgPSBydGwgPyBzd2lwZXIudHJhbnNsYXRlIDogLXN3aXBlci50cmFuc2xhdGU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFBvcyA9IC1kYXRhLmN1cnJlbnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLmZyZWVNb2RlKSB7XG4gICAgaWYgKGN1cnJlbnRQb3MgPCAtc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50UG9zID4gLXN3aXBlci5tYXhUcmFuc2xhdGUoKSkge1xuICAgICAgaWYgKHN3aXBlci5zbGlkZXMubGVuZ3RoIDwgc25hcEdyaWQubGVuZ3RoKSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvKHNuYXBHcmlkLmxlbmd0aCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLnNsaWRlcy5sZW5ndGggLSAxKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSkge1xuICAgICAgaWYgKGRhdGEudmVsb2NpdGllcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBsYXN0TW92ZUV2ZW50ID0gZGF0YS52ZWxvY2l0aWVzLnBvcCgpO1xuICAgICAgICB2YXIgdmVsb2NpdHlFdmVudCA9IGRhdGEudmVsb2NpdGllcy5wb3AoKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gbGFzdE1vdmVFdmVudC5wb3NpdGlvbiAtIHZlbG9jaXR5RXZlbnQucG9zaXRpb247XG4gICAgICAgIHZhciB0aW1lID0gbGFzdE1vdmVFdmVudC50aW1lIC0gdmVsb2NpdHlFdmVudC50aW1lO1xuICAgICAgICBzd2lwZXIudmVsb2NpdHkgPSBkaXN0YW5jZSAvIHRpbWU7XG4gICAgICAgIHN3aXBlci52ZWxvY2l0eSAvPSAyO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhzd2lwZXIudmVsb2NpdHkpIDwgcGFyYW1zLmZyZWVNb2RlTWluaW11bVZlbG9jaXR5KSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfSAvLyB0aGlzIGltcGxpZXMgdGhhdCB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBhIGZpbmdlciB0aGVuIHJlbGVhc2VkLlxuICAgICAgICAvLyBUaGVyZSB3b3VsZCBiZSBubyBldmVudHMgd2l0aCBkaXN0YW5jZSB6ZXJvLCBzbyB0aGUgbGFzdCBldmVudCBpcyBzdGFsZS5cblxuXG4gICAgICAgIGlmICh0aW1lID4gMTUwIHx8IG5vdygpIC0gbGFzdE1vdmVFdmVudC50aW1lID4gMzAwKSB7XG4gICAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpcGVyLnZlbG9jaXR5ID0gMDtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnZlbG9jaXR5ICo9IHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtVmVsb2NpdHlSYXRpbztcbiAgICAgIGRhdGEudmVsb2NpdGllcy5sZW5ndGggPSAwO1xuICAgICAgdmFyIG1vbWVudHVtRHVyYXRpb24gPSAxMDAwICogcGFyYW1zLmZyZWVNb2RlTW9tZW50dW1SYXRpbztcbiAgICAgIHZhciBtb21lbnR1bURpc3RhbmNlID0gc3dpcGVyLnZlbG9jaXR5ICogbW9tZW50dW1EdXJhdGlvbjtcbiAgICAgIHZhciBuZXdQb3NpdGlvbiA9IHN3aXBlci50cmFuc2xhdGUgKyBtb21lbnR1bURpc3RhbmNlO1xuICAgICAgaWYgKHJ0bCkgbmV3UG9zaXRpb24gPSAtbmV3UG9zaXRpb247XG4gICAgICB2YXIgZG9Cb3VuY2UgPSBmYWxzZTtcbiAgICAgIHZhciBhZnRlckJvdW5jZVBvc2l0aW9uO1xuICAgICAgdmFyIGJvdW5jZUFtb3VudCA9IE1hdGguYWJzKHN3aXBlci52ZWxvY2l0eSkgKiAyMCAqIHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlUmF0aW87XG4gICAgICB2YXIgbmVlZHNMb29wRml4O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5mcmVlTW9kZU1vbWVudHVtQm91bmNlKSB7XG4gICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uICsgc3dpcGVyLm1heFRyYW5zbGF0ZSgpIDwgLWJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5tYXhUcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5ld1Bvc2l0aW9uID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSkge1xuICAgICAgICAgIGlmIChuZXdQb3NpdGlvbiAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSA+IGJvdW5jZUFtb3VudCkge1xuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBzd2lwZXIubWluVHJhbnNsYXRlKCkgKyBib3VuY2VBbW91bnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWZ0ZXJCb3VuY2VQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgICBkb0JvdW5jZSA9IHRydWU7XG4gICAgICAgICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdQb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMubG9vcCAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXMpIG5lZWRzTG9vcEZpeCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZVN0aWNreSkge1xuICAgICAgICB2YXIgbmV4dFNsaWRlO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc25hcEdyaWQubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICBpZiAoc25hcEdyaWRbal0gPiAtbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgIG5leHRTbGlkZSA9IGo7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc25hcEdyaWRbbmV4dFNsaWRlXSAtIG5ld1Bvc2l0aW9uKSA8IE1hdGguYWJzKHNuYXBHcmlkW25leHRTbGlkZSAtIDFdIC0gbmV3UG9zaXRpb24pIHx8IHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgbmV3UG9zaXRpb24gPSBzbmFwR3JpZFtuZXh0U2xpZGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1Bvc2l0aW9uID0gc25hcEdyaWRbbmV4dFNsaWRlIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3NpdGlvbiA9IC1uZXdQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRzTG9vcEZpeCkge1xuICAgICAgICBzd2lwZXIub25jZSgndHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gRml4IGR1cmF0aW9uXG5cblxuICAgICAgaWYgKHN3aXBlci52ZWxvY2l0eSAhPT0gMCkge1xuICAgICAgICBpZiAocnRsKSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKCgtbmV3UG9zaXRpb24gLSBzd2lwZXIudHJhbnNsYXRlKSAvIHN3aXBlci52ZWxvY2l0eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IE1hdGguYWJzKChuZXdQb3NpdGlvbiAtIHN3aXBlci50cmFuc2xhdGUpIC8gc3dpcGVyLnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVTdGlja3kpIHtcbiAgICAgICAgICAvLyBJZiBmcmVlTW9kZVN0aWNreSBpcyBhY3RpdmUgYW5kIHRoZSB1c2VyIGVuZHMgYSBzd2lwZSB3aXRoIGEgc2xvdy12ZWxvY2l0eVxuICAgICAgICAgIC8vIGV2ZW50LCB0aGVuIGR1cmF0aW9ucyBjYW4gYmUgMjArIHNlY29uZHMgdG8gc2xpZGUgb25lIChvciB6ZXJvISkgc2xpZGVzLlxuICAgICAgICAgIC8vIEl0J3MgZWFzeSB0byBzZWUgdGhpcyB3aGVuIHNpbXVsYXRpbmcgdG91Y2ggd2l0aCBtb3VzZSBldmVudHMuIFRvIGZpeCB0aGlzLFxuICAgICAgICAgIC8vIGxpbWl0IHNpbmdsZS1zbGlkZSBzd2lwZXMgdG8gdGhlIGRlZmF1bHQgc2xpZGUgZHVyYXRpb24uIFRoaXMgYWxzbyBoYXMgdGhlXG4gICAgICAgICAgLy8gbmljZSBzaWRlIGVmZmVjdCBvZiBtYXRjaGluZyBzbGlkZSBzcGVlZCBpZiB0aGUgdXNlciBzdG9wcGVkIG1vdmluZyBiZWZvcmVcbiAgICAgICAgICAvLyBsaWZ0aW5nIGZpbmdlciBvciBtb3VzZSB2cy4gbW92aW5nIHNsb3dseSBiZWZvcmUgbGlmdGluZyB0aGUgZmluZ2VyL21vdXNlLlxuICAgICAgICAgIC8vIEZvciBmYXN0ZXIgc3dpcGVzLCBhbHNvIGFwcGx5IGxpbWl0cyAoYWxiZWl0IGhpZ2hlciBvbmVzKS5cbiAgICAgICAgICB2YXIgbW92ZURpc3RhbmNlID0gTWF0aC5hYnMoKHJ0bCA/IC1uZXdQb3NpdGlvbiA6IG5ld1Bvc2l0aW9uKSAtIHN3aXBlci50cmFuc2xhdGUpO1xuICAgICAgICAgIHZhciBjdXJyZW50U2xpZGVTaXplID0gc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtzd2lwZXIuYWN0aXZlSW5kZXhdO1xuXG4gICAgICAgICAgaWYgKG1vdmVEaXN0YW5jZSA8IGN1cnJlbnRTbGlkZVNpemUpIHtcbiAgICAgICAgICAgIG1vbWVudHVtRHVyYXRpb24gPSBwYXJhbXMuc3BlZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChtb3ZlRGlzdGFuY2UgPCAyICogY3VycmVudFNsaWRlU2l6ZSkge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDEuNTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9tZW50dW1EdXJhdGlvbiA9IHBhcmFtcy5zcGVlZCAqIDIuNTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICAgIHN3aXBlci5zbGlkZVRvQ2xvc2VzdCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMuZnJlZU1vZGVNb21lbnR1bUJvdW5jZSAmJiBkb0JvdW5jZSkge1xuICAgICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoYWZ0ZXJCb3VuY2VQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuICAgICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgJHdyYXBwZXJFbC50cmFuc2l0aW9uRW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFkYXRhLmFsbG93TW9tZW50dW1Cb3VuY2UpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIuZW1pdCgnbW9tZW50dW1Cb3VuY2UnKTtcbiAgICAgICAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihwYXJhbXMuc3BlZWQpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpcGVyLnNldFRyYW5zbGF0ZShhZnRlckJvdW5jZVBvc2l0aW9uKTtcbiAgICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICghc3dpcGVyIHx8IHN3aXBlci5kZXN0cm95ZWQpIHJldHVybjtcbiAgICAgICAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25FbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc3dpcGVyLnZlbG9jaXR5KSB7XG4gICAgICAgIHN3aXBlci51cGRhdGVQcm9ncmVzcyhuZXdQb3NpdGlvbik7XG4gICAgICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKG1vbWVudHVtRHVyYXRpb24pO1xuICAgICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgc3dpcGVyLnRyYW5zaXRpb25TdGFydCh0cnVlLCBzd2lwZXIuc3dpcGVEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICghc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgICAgIHN3aXBlci5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbkVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuZW1pdCgnX2ZyZWVNb2RlTm9Nb21lbnR1bVJlbGVhc2UnKTtcbiAgICAgICAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1Bvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmZyZWVNb2RlU3RpY2t5KSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5mcmVlTW9kZSkge1xuICAgICAgc3dpcGVyLmVtaXQoJ19mcmVlTW9kZU5vTW9tZW50dW1SZWxlYXNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFwYXJhbXMuZnJlZU1vZGVNb21lbnR1bSB8fCB0aW1lRGlmZiA+PSBwYXJhbXMubG9uZ1N3aXBlc01zKSB7XG4gICAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MoKTtcbiAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0gLy8gRmluZCBjdXJyZW50IHNsaWRlXG5cblxuICB2YXIgc3RvcEluZGV4ID0gMDtcbiAgdmFyIGdyb3VwU2l6ZSA9IHN3aXBlci5zbGlkZXNTaXplc0dyaWRbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSBpIDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICB2YXIgX2luY3JlbWVudCA9IGkgPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwIC0gMSA/IDEgOiBwYXJhbXMuc2xpZGVzUGVyR3JvdXA7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIF9pbmNyZW1lbnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKGN1cnJlbnRQb3MgPj0gc2xpZGVzR3JpZFtpXSAmJiBjdXJyZW50UG9zIDwgc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0pIHtcbiAgICAgICAgc3RvcEluZGV4ID0gaTtcbiAgICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtpICsgX2luY3JlbWVudF0gLSBzbGlkZXNHcmlkW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFBvcyA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgZ3JvdXBTaXplID0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDFdIC0gc2xpZGVzR3JpZFtzbGlkZXNHcmlkLmxlbmd0aCAtIDJdO1xuICAgIH1cbiAgfSAvLyBGaW5kIGN1cnJlbnQgc2xpZGUgc2l6ZVxuXG5cbiAgdmFyIHJhdGlvID0gKGN1cnJlbnRQb3MgLSBzbGlkZXNHcmlkW3N0b3BJbmRleF0pIC8gZ3JvdXBTaXplO1xuICB2YXIgaW5jcmVtZW50ID0gc3RvcEluZGV4IDwgcGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCAtIDEgPyAxIDogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gIGlmICh0aW1lRGlmZiA+IHBhcmFtcy5sb25nU3dpcGVzTXMpIHtcbiAgICAvLyBMb25nIHRvdWNoZXNcbiAgICBpZiAoIXBhcmFtcy5sb25nU3dpcGVzKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgaWYgKHJhdGlvID49IHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgaWYgKHJhdGlvID4gMSAtIHBhcmFtcy5sb25nU3dpcGVzUmF0aW8pIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7ZWxzZSBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTaG9ydCBzd2lwZXNcbiAgICBpZiAoIXBhcmFtcy5zaG9ydFN3aXBlcykge1xuICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXNOYXZCdXR0b25UYXJnZXQgPSBzd2lwZXIubmF2aWdhdGlvbiAmJiAoZS50YXJnZXQgPT09IHN3aXBlci5uYXZpZ2F0aW9uLm5leHRFbCB8fCBlLnRhcmdldCA9PT0gc3dpcGVyLm5hdmlnYXRpb24ucHJldkVsKTtcblxuICAgIGlmICghaXNOYXZCdXR0b25UYXJnZXQpIHtcbiAgICAgIGlmIChzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzdG9wSW5kZXggKyBpbmNyZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ID09PSBzd2lwZXIubmF2aWdhdGlvbi5uZXh0RWwpIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCArIGluY3JlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXBlci5zbGlkZVRvKHN0b3BJbmRleCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIG5vdyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm47XG4gIHZhciBlID0gZXZlbnQ7XG4gIGlmIChlLm9yaWdpbmFsRXZlbnQpIGUgPSBlLm9yaWdpbmFsRXZlbnQ7XG5cbiAgaWYgKCFkYXRhLmlzVG91Y2hlZCkge1xuICAgIGlmIChkYXRhLnN0YXJ0TW92aW5nICYmIGRhdGEuaXNTY3JvbGxpbmcpIHtcbiAgICAgIHN3aXBlci5lbWl0KCd0b3VjaE1vdmVPcHBvc2l0ZScsIGUpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkYXRhLmlzVG91Y2hFdmVudCAmJiBlLnR5cGUgIT09ICd0b3VjaG1vdmUnKSByZXR1cm47XG4gIHZhciB0YXJnZXRUb3VjaCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgJiYgZS50YXJnZXRUb3VjaGVzICYmIChlLnRhcmdldFRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXSk7XG4gIHZhciBwYWdlWCA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWCA6IGUucGFnZVg7XG4gIHZhciBwYWdlWSA9IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyB0YXJnZXRUb3VjaC5wYWdlWSA6IGUucGFnZVk7XG5cbiAgaWYgKGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIpIHtcbiAgICB0b3VjaGVzLnN0YXJ0WCA9IHBhZ2VYO1xuICAgIHRvdWNoZXMuc3RhcnRZID0gcGFnZVk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dUb3VjaE1vdmUpIHtcbiAgICAvLyBpc01vdmVkID0gdHJ1ZTtcbiAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGRhdGEuaXNUb3VjaGVkKSB7XG4gICAgICBleHRlbmQodG91Y2hlcywge1xuICAgICAgICBzdGFydFg6IHBhZ2VYLFxuICAgICAgICBzdGFydFk6IHBhZ2VZLFxuICAgICAgICBjdXJyZW50WDogcGFnZVgsXG4gICAgICAgIGN1cnJlbnRZOiBwYWdlWVxuICAgICAgfSk7XG4gICAgICBkYXRhLnRvdWNoU3RhcnRUaW1lID0gbm93KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIHBhcmFtcy50b3VjaFJlbGVhc2VPbkVkZ2VzICYmICFwYXJhbXMubG9vcCkge1xuICAgIGlmIChzd2lwZXIuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICAvLyBWZXJ0aWNhbFxuICAgICAgaWYgKHBhZ2VZIDwgdG91Y2hlcy5zdGFydFkgJiYgc3dpcGVyLnRyYW5zbGF0ZSA8PSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgfHwgcGFnZVkgPiB0b3VjaGVzLnN0YXJ0WSAmJiBzd2lwZXIudHJhbnNsYXRlID49IHN3aXBlci5taW5UcmFuc2xhdGUoKSkge1xuICAgICAgICBkYXRhLmlzVG91Y2hlZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLmlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocGFnZVggPCB0b3VjaGVzLnN0YXJ0WCAmJiBzd2lwZXIudHJhbnNsYXRlIDw9IHN3aXBlci5tYXhUcmFuc2xhdGUoKSB8fCBwYWdlWCA+IHRvdWNoZXMuc3RhcnRYICYmIHN3aXBlci50cmFuc2xhdGUgPj0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGEuaXNUb3VjaEV2ZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgJChlLnRhcmdldCkuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHtcbiAgICAgIGRhdGEuaXNNb3ZlZCA9IHRydWU7XG4gICAgICBzd2lwZXIuYWxsb3dDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmFsbG93VG91Y2hDYWxsYmFja3MpIHtcbiAgICBzd2lwZXIuZW1pdCgndG91Y2hNb3ZlJywgZSk7XG4gIH1cblxuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm47XG4gIHRvdWNoZXMuY3VycmVudFggPSBwYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IHBhZ2VZO1xuICB2YXIgZGlmZlggPSB0b3VjaGVzLmN1cnJlbnRYIC0gdG91Y2hlcy5zdGFydFg7XG4gIHZhciBkaWZmWSA9IHRvdWNoZXMuY3VycmVudFkgLSB0b3VjaGVzLnN0YXJ0WTtcbiAgaWYgKHN3aXBlci5wYXJhbXMudGhyZXNob2xkICYmIE1hdGguc3FydChNYXRoLnBvdyhkaWZmWCwgMikgKyBNYXRoLnBvdyhkaWZmWSwgMikpIDwgc3dpcGVyLnBhcmFtcy50aHJlc2hvbGQpIHJldHVybjtcblxuICBpZiAodHlwZW9mIGRhdGEuaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIHRvdWNoQW5nbGU7XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpICYmIHRvdWNoZXMuY3VycmVudFkgPT09IHRvdWNoZXMuc3RhcnRZIHx8IHN3aXBlci5pc1ZlcnRpY2FsKCkgJiYgdG91Y2hlcy5jdXJyZW50WCA9PT0gdG91Y2hlcy5zdGFydFgpIHtcbiAgICAgIGRhdGEuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBpZiAoZGlmZlggKiBkaWZmWCArIGRpZmZZICogZGlmZlkgPj0gMjUpIHtcbiAgICAgICAgdG91Y2hBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgZGF0YS5pc1Njcm9sbGluZyA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHRvdWNoQW5nbGUgPiBwYXJhbXMudG91Y2hBbmdsZSA6IDkwIC0gdG91Y2hBbmdsZSA+IHBhcmFtcy50b3VjaEFuZ2xlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRhLmlzU2Nyb2xsaW5nKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3RvdWNoTW92ZU9wcG9zaXRlJywgZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEuc3RhcnRNb3ZpbmcgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHRvdWNoZXMuY3VycmVudFggIT09IHRvdWNoZXMuc3RhcnRYIHx8IHRvdWNoZXMuY3VycmVudFkgIT09IHRvdWNoZXMuc3RhcnRZKSB7XG4gICAgICBkYXRhLnN0YXJ0TW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0YS5pc1Njcm9sbGluZykge1xuICAgIGRhdGEuaXNUb3VjaGVkID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFkYXRhLnN0YXJ0TW92aW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSBmYWxzZTtcblxuICBpZiAoIXBhcmFtcy5jc3NNb2RlICYmIGUuY2FuY2VsYWJsZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uICYmICFwYXJhbXMubmVzdGVkKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGlmICghZGF0YS5pc01vdmVkKSB7XG4gICAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgIH1cblxuICAgIGRhdGEuc3RhcnRUcmFuc2xhdGUgPSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG5cbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwudHJpZ2dlcignd2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJyk7XG4gICAgfVxuXG4gICAgZGF0YS5hbGxvd01vbWVudHVtQm91bmNlID0gZmFsc2U7IC8vIEdyYWIgQ3Vyc29yXG5cbiAgICBpZiAocGFyYW1zLmdyYWJDdXJzb3IgJiYgKHN3aXBlci5hbGxvd1NsaWRlTmV4dCA9PT0gdHJ1ZSB8fCBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPT09IHRydWUpKSB7XG4gICAgICBzd2lwZXIuc2V0R3JhYkN1cnNvcih0cnVlKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVyRmlyc3RNb3ZlJywgZSk7XG4gIH1cblxuICBzd2lwZXIuZW1pdCgnc2xpZGVyTW92ZScsIGUpO1xuICBkYXRhLmlzTW92ZWQgPSB0cnVlO1xuICB2YXIgZGlmZiA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IGRpZmZYIDogZGlmZlk7XG4gIHRvdWNoZXMuZGlmZiA9IGRpZmY7XG4gIGRpZmYgKj0gcGFyYW1zLnRvdWNoUmF0aW87XG4gIGlmIChydGwpIGRpZmYgPSAtZGlmZjtcbiAgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID0gZGlmZiA+IDAgPyAncHJldicgOiAnbmV4dCc7XG4gIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRpZmYgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB2YXIgZGlzYWJsZVBhcmVudFN3aXBlciA9IHRydWU7XG4gIHZhciByZXNpc3RhbmNlUmF0aW8gPSBwYXJhbXMucmVzaXN0YW5jZVJhdGlvO1xuXG4gIGlmIChwYXJhbXMudG91Y2hSZWxlYXNlT25FZGdlcykge1xuICAgIHJlc2lzdGFuY2VSYXRpbyA9IDA7XG4gIH1cblxuICBpZiAoZGlmZiA+IDAgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgZGlzYWJsZVBhcmVudFN3aXBlciA9IGZhbHNlO1xuICAgIGlmIChwYXJhbXMucmVzaXN0YW5jZSkgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpIC0gMSArIE1hdGgucG93KC1zd2lwZXIubWluVHJhbnNsYXRlKCkgKyBkYXRhLnN0YXJ0VHJhbnNsYXRlICsgZGlmZiwgcmVzaXN0YW5jZVJhdGlvKTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCAmJiBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPCBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICBkaXNhYmxlUGFyZW50U3dpcGVyID0gZmFsc2U7XG4gICAgaWYgKHBhcmFtcy5yZXNpc3RhbmNlKSBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgKyAxIC0gTWF0aC5wb3coc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gZGF0YS5zdGFydFRyYW5zbGF0ZSAtIGRpZmYsIHJlc2lzdGFuY2VSYXRpbyk7XG4gIH1cblxuICBpZiAoZGlzYWJsZVBhcmVudFN3aXBlcikge1xuICAgIGUucHJldmVudGVkQnlOZXN0ZWRTd2lwZXIgPSB0cnVlO1xuICB9IC8vIERpcmVjdGlvbnMgbG9ja3NcblxuXG4gIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHN3aXBlci5zd2lwZURpcmVjdGlvbiA9PT0gJ25leHQnICYmIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA8IGRhdGEuc3RhcnRUcmFuc2xhdGUpIHtcbiAgICBkYXRhLmN1cnJlbnRUcmFuc2xhdGUgPSBkYXRhLnN0YXJ0VHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgc3dpcGVyLnN3aXBlRGlyZWN0aW9uID09PSAncHJldicgJiYgZGF0YS5jdXJyZW50VHJhbnNsYXRlID4gZGF0YS5zdGFydFRyYW5zbGF0ZSkge1xuICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gIH1cblxuICBpZiAoIXN3aXBlci5hbGxvd1NsaWRlUHJldiAmJiAhc3dpcGVyLmFsbG93U2xpZGVOZXh0KSB7XG4gICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgfSAvLyBUaHJlc2hvbGRcblxuXG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkge1xuICAgIGlmIChNYXRoLmFicyhkaWZmKSA+IHBhcmFtcy50aHJlc2hvbGQgfHwgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgIGlmICghZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUpIHtcbiAgICAgICAgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSB0cnVlO1xuICAgICAgICB0b3VjaGVzLnN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gICAgICAgIHRvdWNoZXMuc3RhcnRZID0gdG91Y2hlcy5jdXJyZW50WTtcbiAgICAgICAgZGF0YS5jdXJyZW50VHJhbnNsYXRlID0gZGF0YS5zdGFydFRyYW5zbGF0ZTtcbiAgICAgICAgdG91Y2hlcy5kaWZmID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gdG91Y2hlcy5jdXJyZW50WCAtIHRvdWNoZXMuc3RhcnRYIDogdG91Y2hlcy5jdXJyZW50WSAtIHRvdWNoZXMuc3RhcnRZO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEuY3VycmVudFRyYW5zbGF0ZSA9IGRhdGEuc3RhcnRUcmFuc2xhdGU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgaWYgKCFwYXJhbXMuZm9sbG93RmluZ2VyIHx8IHBhcmFtcy5jc3NNb2RlKSByZXR1cm47IC8vIFVwZGF0ZSBhY3RpdmUgaW5kZXggaW4gZnJlZSBtb2RlXG5cbiAgaWYgKHBhcmFtcy5mcmVlTW9kZSB8fCBwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZUFjdGl2ZUluZGV4KCk7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc0NsYXNzZXMoKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuZnJlZU1vZGUpIHtcbiAgICAvLyBWZWxvY2l0eVxuICAgIGlmIChkYXRhLnZlbG9jaXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICAgIHBvc2l0aW9uOiB0b3VjaGVzW3N3aXBlci5pc0hvcml6b250YWwoKSA/ICdzdGFydFgnIDogJ3N0YXJ0WSddLFxuICAgICAgICB0aW1lOiBkYXRhLnRvdWNoU3RhcnRUaW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhLnZlbG9jaXRpZXMucHVzaCh7XG4gICAgICBwb3NpdGlvbjogdG91Y2hlc1tzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnY3VycmVudFgnIDogJ2N1cnJlbnRZJ10sXG4gICAgICB0aW1lOiBub3coKVxuICAgIH0pO1xuICB9IC8vIFVwZGF0ZSBwcm9ncmVzc1xuXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7IC8vIFVwZGF0ZSB0cmFuc2xhdGVcblxuICBzd2lwZXIuc2V0VHJhbnNsYXRlKGRhdGEuY3VycmVudFRyYW5zbGF0ZSk7XG59IiwiaW1wb3J0IHsgZ2V0V2luZG93LCBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGV4dGVuZCwgbm93IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnOyAvLyBNb2RpZmllZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0NTIwNTU0L2N1c3RvbS1lbGVtZW50LWdldHJvb3Rub2RlLWNsb3Nlc3QtZnVuY3Rpb24tY3Jvc3NpbmctbXVsdGlwbGUtcGFyZW50LXNoYWRvd2RcblxuZnVuY3Rpb24gY2xvc2VzdEVsZW1lbnQoc2VsZWN0b3IsIGJhc2UpIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gX19jbG9zZXN0RnJvbShlbCkge1xuICAgIGlmICghZWwgfHwgZWwgPT09IGdldERvY3VtZW50KCkgfHwgZWwgPT09IGdldFdpbmRvdygpKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoZWwuYXNzaWduZWRTbG90KSBlbCA9IGVsLmFzc2lnbmVkU2xvdDtcbiAgICB2YXIgZm91bmQgPSBlbC5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZm91bmQgfHwgX19jbG9zZXN0RnJvbShlbC5nZXRSb290Tm9kZSgpLmhvc3QpO1xuICB9XG5cbiAgcmV0dXJuIF9fY2xvc2VzdEZyb20oYmFzZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9uVG91Y2hTdGFydChldmVudCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgZGF0YSA9IHN3aXBlci50b3VjaEV2ZW50c0RhdGE7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgdG91Y2hlcyA9IHN3aXBlci50b3VjaGVzLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybjtcblxuICBpZiAoc3dpcGVyLmFuaW1hdGluZyAmJiBwYXJhbXMucHJldmVudEludGVyYWN0aW9uT25UcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGUgPSBldmVudDtcbiAgaWYgKGUub3JpZ2luYWxFdmVudCkgZSA9IGUub3JpZ2luYWxFdmVudDtcbiAgdmFyICR0YXJnZXRFbCA9ICQoZS50YXJnZXQpO1xuXG4gIGlmIChwYXJhbXMudG91Y2hFdmVudHNUYXJnZXQgPT09ICd3cmFwcGVyJykge1xuICAgIGlmICghJHRhcmdldEVsLmNsb3Nlc3Qoc3dpcGVyLndyYXBwZXJFbCkubGVuZ3RoKSByZXR1cm47XG4gIH1cblxuICBkYXRhLmlzVG91Y2hFdmVudCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnO1xuICBpZiAoIWRhdGEuaXNUb3VjaEV2ZW50ICYmICd3aGljaCcgaW4gZSAmJiBlLndoaWNoID09PSAzKSByZXR1cm47XG4gIGlmICghZGF0YS5pc1RvdWNoRXZlbnQgJiYgJ2J1dHRvbicgaW4gZSAmJiBlLmJ1dHRvbiA+IDApIHJldHVybjtcbiAgaWYgKGRhdGEuaXNUb3VjaGVkICYmIGRhdGEuaXNNb3ZlZCkgcmV0dXJuOyAvLyBjaGFuZ2UgdGFyZ2V0IGVsIGZvciBzaGFkb3cgcm9vdCBjb21wb25lbnRcblxuICB2YXIgc3dpcGluZ0NsYXNzSGFzVmFsdWUgPSAhIXBhcmFtcy5ub1N3aXBpbmdDbGFzcyAmJiBwYXJhbXMubm9Td2lwaW5nQ2xhc3MgIT09ICcnO1xuXG4gIGlmIChzd2lwaW5nQ2xhc3NIYXNWYWx1ZSAmJiBlLnRhcmdldCAmJiBlLnRhcmdldC5zaGFkb3dSb290ICYmIGV2ZW50LnBhdGggJiYgZXZlbnQucGF0aFswXSkge1xuICAgICR0YXJnZXRFbCA9ICQoZXZlbnQucGF0aFswXSk7XG4gIH1cblxuICB2YXIgbm9Td2lwaW5nU2VsZWN0b3IgPSBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgPyBwYXJhbXMubm9Td2lwaW5nU2VsZWN0b3IgOiBcIi5cIiArIHBhcmFtcy5ub1N3aXBpbmdDbGFzcztcbiAgdmFyIGlzVGFyZ2V0U2hhZG93ID0gISEoZS50YXJnZXQgJiYgZS50YXJnZXQuc2hhZG93Um9vdCk7IC8vIHVzZSBjbG9zZXN0RWxlbWVudCBmb3Igc2hhZG93IHJvb3QgZWxlbWVudCB0byBnZXQgdGhlIGFjdHVhbCBjbG9zZXN0IGZvciBuZXN0ZWQgc2hhZG93IHJvb3QgZWxlbWVudFxuXG4gIGlmIChwYXJhbXMubm9Td2lwaW5nICYmIChpc1RhcmdldFNoYWRvdyA/IGNsb3Nlc3RFbGVtZW50KG5vU3dpcGluZ1NlbGVjdG9yLCBlLnRhcmdldCkgOiAkdGFyZ2V0RWwuY2xvc2VzdChub1N3aXBpbmdTZWxlY3RvcilbMF0pKSB7XG4gICAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc3dpcGVIYW5kbGVyKSB7XG4gICAgaWYgKCEkdGFyZ2V0RWwuY2xvc2VzdChwYXJhbXMuc3dpcGVIYW5kbGVyKVswXSkgcmV0dXJuO1xuICB9XG5cbiAgdG91Y2hlcy5jdXJyZW50WCA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYIDogZS5wYWdlWDtcbiAgdG91Y2hlcy5jdXJyZW50WSA9IGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnID8gZS50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZIDogZS5wYWdlWTtcbiAgdmFyIHN0YXJ0WCA9IHRvdWNoZXMuY3VycmVudFg7XG4gIHZhciBzdGFydFkgPSB0b3VjaGVzLmN1cnJlbnRZOyAvLyBEbyBOT1Qgc3RhcnQgaWYgaU9TIGVkZ2Ugc3dpcGUgaXMgZGV0ZWN0ZWQuIE90aGVyd2lzZSBpT1MgYXBwIGNhbm5vdCBzd2lwZS10by1nby1iYWNrIGFueW1vcmVcblxuICB2YXIgZWRnZVN3aXBlRGV0ZWN0aW9uID0gcGFyYW1zLmVkZ2VTd2lwZURldGVjdGlvbiB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlRGV0ZWN0aW9uO1xuICB2YXIgZWRnZVN3aXBlVGhyZXNob2xkID0gcGFyYW1zLmVkZ2VTd2lwZVRocmVzaG9sZCB8fCBwYXJhbXMuaU9TRWRnZVN3aXBlVGhyZXNob2xkO1xuXG4gIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gJiYgKHN0YXJ0WCA8PSBlZGdlU3dpcGVUaHJlc2hvbGQgfHwgc3RhcnRYID49IHdpbmRvdy5pbm5lcldpZHRoIC0gZWRnZVN3aXBlVGhyZXNob2xkKSkge1xuICAgIGlmIChlZGdlU3dpcGVEZXRlY3Rpb24gPT09ICdwcmV2ZW50Jykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGV4dGVuZChkYXRhLCB7XG4gICAgaXNUb3VjaGVkOiB0cnVlLFxuICAgIGlzTW92ZWQ6IGZhbHNlLFxuICAgIGFsbG93VG91Y2hDYWxsYmFja3M6IHRydWUsXG4gICAgaXNTY3JvbGxpbmc6IHVuZGVmaW5lZCxcbiAgICBzdGFydE1vdmluZzogdW5kZWZpbmVkXG4gIH0pO1xuICB0b3VjaGVzLnN0YXJ0WCA9IHN0YXJ0WDtcbiAgdG91Y2hlcy5zdGFydFkgPSBzdGFydFk7XG4gIGRhdGEudG91Y2hTdGFydFRpbWUgPSBub3coKTtcbiAgc3dpcGVyLmFsbG93Q2xpY2sgPSB0cnVlO1xuICBzd2lwZXIudXBkYXRlU2l6ZSgpO1xuICBzd2lwZXIuc3dpcGVEaXJlY3Rpb24gPSB1bmRlZmluZWQ7XG4gIGlmIChwYXJhbXMudGhyZXNob2xkID4gMCkgZGF0YS5hbGxvd1RocmVzaG9sZE1vdmUgPSBmYWxzZTtcblxuICBpZiAoZS50eXBlICE9PSAndG91Y2hzdGFydCcpIHtcbiAgICB2YXIgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuICAgIGlmICgkdGFyZ2V0RWwuaXMoZGF0YS5mb2N1c2FibGVFbGVtZW50cykpIHByZXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLmlzKGRhdGEuZm9jdXNhYmxlRWxlbWVudHMpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09ICR0YXJnZXRFbFswXSkge1xuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZFByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQgJiYgc3dpcGVyLmFsbG93VG91Y2hNb3ZlICYmIHBhcmFtcy50b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ7XG5cbiAgICBpZiAoKHBhcmFtcy50b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdCkgJiYgISR0YXJnZXRFbFswXS5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0b3VjaFN0YXJ0JywgZSk7XG59IiwiaW1wb3J0IHNldEdyYWJDdXJzb3IgZnJvbSAnLi9zZXRHcmFiQ3Vyc29yJztcbmltcG9ydCB1bnNldEdyYWJDdXJzb3IgZnJvbSAnLi91bnNldEdyYWJDdXJzb3InO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRHcmFiQ3Vyc29yOiBzZXRHcmFiQ3Vyc29yLFxuICB1bnNldEdyYWJDdXJzb3I6IHVuc2V0R3JhYkN1cnNvclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRHcmFiQ3Vyc29yKG1vdmluZykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8ICFzd2lwZXIucGFyYW1zLnNpbXVsYXRlVG91Y2ggfHwgc3dpcGVyLnBhcmFtcy53YXRjaE92ZXJmbG93ICYmIHN3aXBlci5pc0xvY2tlZCB8fCBzd2lwZXIucGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgdmFyIGVsID0gc3dpcGVyLmVsO1xuICBlbC5zdHlsZS5jdXJzb3IgPSAnbW92ZSc7XG4gIGVsLnN0eWxlLmN1cnNvciA9IG1vdmluZyA/ICctd2Via2l0LWdyYWJiaW5nJyA6ICctd2Via2l0LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnLW1vei1ncmFiYmluJyA6ICctbW96LWdyYWInO1xuICBlbC5zdHlsZS5jdXJzb3IgPSBtb3ZpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc2V0R3JhYkN1cnNvcigpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHN3aXBlci5zdXBwb3J0LnRvdWNoIHx8IHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuaXNMb2NrZWQgfHwgc3dpcGVyLnBhcmFtcy5jc3NNb2RlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3dpcGVyLmVsLnN0eWxlLmN1cnNvciA9ICcnO1xufSIsImltcG9ydCBsb2FkSW1hZ2UgZnJvbSAnLi9sb2FkSW1hZ2UnO1xuaW1wb3J0IHByZWxvYWRJbWFnZXMgZnJvbSAnLi9wcmVsb2FkSW1hZ2VzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZEltYWdlOiBsb2FkSW1hZ2UsXG4gIHByZWxvYWRJbWFnZXM6IHByZWxvYWRJbWFnZXNcbn07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgJCBmcm9tICcuLi8uLi8uLi91dGlscy9kb20nO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEltYWdlKGltYWdlRWwsIHNyYywgc3Jjc2V0LCBzaXplcywgY2hlY2tGb3JDb21wbGV0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgaW1hZ2U7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH1cblxuICB2YXIgaXNQaWN0dXJlID0gJChpbWFnZUVsKS5wYXJlbnQoJ3BpY3R1cmUnKVswXTtcblxuICBpZiAoIWlzUGljdHVyZSAmJiAoIWltYWdlRWwuY29tcGxldGUgfHwgIWNoZWNrRm9yQ29tcGxldGUpKSB7XG4gICAgaWYgKHNyYykge1xuICAgICAgaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKCk7XG4gICAgICBpbWFnZS5vbmxvYWQgPSBvblJlYWR5O1xuICAgICAgaW1hZ2Uub25lcnJvciA9IG9uUmVhZHk7XG5cbiAgICAgIGlmIChzaXplcykge1xuICAgICAgICBpbWFnZS5zaXplcyA9IHNpemVzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Jjc2V0KSB7XG4gICAgICAgIGltYWdlLnNyY3NldCA9IHNyY3NldDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNyYykge1xuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uUmVhZHkoKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaW1hZ2UgYWxyZWFkeSBsb2FkZWQuLi5cbiAgICBvblJlYWR5KCk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgc3dpcGVyLmltYWdlc1RvTG9hZCA9IHN3aXBlci4kZWwuZmluZCgnaW1nJyk7XG5cbiAgZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICBpZiAodHlwZW9mIHN3aXBlciA9PT0gJ3VuZGVmaW5lZCcgfHwgc3dpcGVyID09PSBudWxsIHx8ICFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkICE9PSB1bmRlZmluZWQpIHN3aXBlci5pbWFnZXNMb2FkZWQgKz0gMTtcblxuICAgIGlmIChzd2lwZXIuaW1hZ2VzTG9hZGVkID09PSBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudXBkYXRlT25JbWFnZXNSZWFkeSkgc3dpcGVyLnVwZGF0ZSgpO1xuICAgICAgc3dpcGVyLmVtaXQoJ2ltYWdlc1JlYWR5Jyk7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuaW1hZ2VzVG9Mb2FkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGltYWdlRWwgPSBzd2lwZXIuaW1hZ2VzVG9Mb2FkW2ldO1xuICAgIHN3aXBlci5sb2FkSW1hZ2UoaW1hZ2VFbCwgaW1hZ2VFbC5jdXJyZW50U3JjIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzcmMnKSwgaW1hZ2VFbC5zcmNzZXQgfHwgaW1hZ2VFbC5nZXRBdHRyaWJ1dGUoJ3NyY3NldCcpLCBpbWFnZUVsLnNpemVzIHx8IGltYWdlRWwuZ2V0QXR0cmlidXRlKCdzaXplcycpLCB0cnVlLCBvblJlYWR5KTtcbiAgfVxufSIsImltcG9ydCBsb29wQ3JlYXRlIGZyb20gJy4vbG9vcENyZWF0ZSc7XG5pbXBvcnQgbG9vcEZpeCBmcm9tICcuL2xvb3BGaXgnO1xuaW1wb3J0IGxvb3BEZXN0cm95IGZyb20gJy4vbG9vcERlc3Ryb3knO1xuZXhwb3J0IGRlZmF1bHQge1xuICBsb29wQ3JlYXRlOiBsb29wQ3JlYXRlLFxuICBsb29wRml4OiBsb29wRml4LFxuICBsb29wRGVzdHJveTogbG9vcERlc3Ryb3lcbn07IiwiaW1wb3J0IHsgZ2V0RG9jdW1lbnQgfSBmcm9tICdzc3Itd2luZG93JztcbmltcG9ydCAkIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29wQ3JlYXRlKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7IC8vIFJlbW92ZSBkdXBsaWNhdGVkIHNsaWRlc1xuXG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MpLnJlbW92ZSgpO1xuICB2YXIgc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3BGaWxsR3JvdXBXaXRoQmxhbmspIHtcbiAgICB2YXIgYmxhbmtTbGlkZXNOdW0gPSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgLSBzbGlkZXMubGVuZ3RoICUgcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuXG4gICAgaWYgKGJsYW5rU2xpZGVzTnVtICE9PSBwYXJhbXMuc2xpZGVzUGVyR3JvdXApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxhbmtTbGlkZXNOdW07IGkgKz0gMSkge1xuICAgICAgICB2YXIgYmxhbmtOb2RlID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlQ2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUJsYW5rQ2xhc3MpO1xuICAgICAgICAkd3JhcHBlckVsLmFwcGVuZChibGFua05vZGUpO1xuICAgICAgfVxuXG4gICAgICBzbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyVmlldyA9PT0gJ2F1dG8nICYmICFwYXJhbXMubG9vcGVkU2xpZGVzKSBwYXJhbXMubG9vcGVkU2xpZGVzID0gc2xpZGVzLmxlbmd0aDtcbiAgc3dpcGVyLmxvb3BlZFNsaWRlcyA9IE1hdGguY2VpbChwYXJzZUZsb2F0KHBhcmFtcy5sb29wZWRTbGlkZXMgfHwgcGFyYW1zLnNsaWRlc1BlclZpZXcsIDEwKSk7XG4gIHN3aXBlci5sb29wZWRTbGlkZXMgKz0gcGFyYW1zLmxvb3BBZGRpdGlvbmFsU2xpZGVzO1xuXG4gIGlmIChzd2lwZXIubG9vcGVkU2xpZGVzID4gc2xpZGVzLmxlbmd0aCkge1xuICAgIHN3aXBlci5sb29wZWRTbGlkZXMgPSBzbGlkZXMubGVuZ3RoO1xuICB9XG5cbiAgdmFyIHByZXBlbmRTbGlkZXMgPSBbXTtcbiAgdmFyIGFwcGVuZFNsaWRlcyA9IFtdO1xuICBzbGlkZXMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgdmFyIHNsaWRlID0gJChlbCk7XG5cbiAgICBpZiAoaW5kZXggPCBzd2lwZXIubG9vcGVkU2xpZGVzKSB7XG4gICAgICBhcHBlbmRTbGlkZXMucHVzaChlbCk7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgc2xpZGVzLmxlbmd0aCAmJiBpbmRleCA+PSBzbGlkZXMubGVuZ3RoIC0gc3dpcGVyLmxvb3BlZFNsaWRlcykge1xuICAgICAgcHJlcGVuZFNsaWRlcy5wdXNoKGVsKTtcbiAgICB9XG5cbiAgICBzbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcsIGluZGV4KTtcbiAgfSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFwcGVuZFNsaWRlcy5sZW5ndGg7IF9pICs9IDEpIHtcbiAgICAkd3JhcHBlckVsLmFwcGVuZCgkKGFwcGVuZFNsaWRlc1tfaV0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG5cbiAgZm9yICh2YXIgX2kyID0gcHJlcGVuZFNsaWRlcy5sZW5ndGggLSAxOyBfaTIgPj0gMDsgX2kyIC09IDEpIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoJChwcmVwZW5kU2xpZGVzW19pMl0uY2xvbmVOb2RlKHRydWUpKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9vcERlc3Ryb3koKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XG4gICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIiwuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiLlwiICsgcGFyYW1zLnNsaWRlQmxhbmtDbGFzcykucmVtb3ZlKCk7XG4gIHNsaWRlcy5yZW1vdmVBdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvb3BGaXgoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICBzd2lwZXIuZW1pdCgnYmVmb3JlTG9vcEZpeCcpO1xuICB2YXIgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgbG9vcGVkU2xpZGVzID0gc3dpcGVyLmxvb3BlZFNsaWRlcyxcbiAgICAgIGFsbG93U2xpZGVQcmV2ID0gc3dpcGVyLmFsbG93U2xpZGVQcmV2LFxuICAgICAgYWxsb3dTbGlkZU5leHQgPSBzd2lwZXIuYWxsb3dTbGlkZU5leHQsXG4gICAgICBzbmFwR3JpZCA9IHN3aXBlci5zbmFwR3JpZCxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGU7XG4gIHZhciBuZXdJbmRleDtcbiAgc3dpcGVyLmFsbG93U2xpZGVQcmV2ID0gdHJ1ZTtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gdHJ1ZTtcbiAgdmFyIHNuYXBUcmFuc2xhdGUgPSAtc25hcEdyaWRbYWN0aXZlSW5kZXhdO1xuICB2YXIgZGlmZiA9IHNuYXBUcmFuc2xhdGUgLSBzd2lwZXIuZ2V0VHJhbnNsYXRlKCk7IC8vIEZpeCBGb3IgTmVnYXRpdmUgT3ZlcnNsaWRpbmdcblxuICBpZiAoYWN0aXZlSW5kZXggPCBsb29wZWRTbGlkZXMpIHtcbiAgICBuZXdJbmRleCA9IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMgKiAzICsgYWN0aXZlSW5kZXg7XG4gICAgbmV3SW5kZXggKz0gbG9vcGVkU2xpZGVzO1xuICAgIHZhciBzbGlkZUNoYW5nZWQgPSBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgMCwgZmFsc2UsIHRydWUpO1xuXG4gICAgaWYgKHNsaWRlQ2hhbmdlZCAmJiBkaWZmICE9PSAwKSB7XG4gICAgICBzd2lwZXIuc2V0VHJhbnNsYXRlKChydGwgPyAtc3dpcGVyLnRyYW5zbGF0ZSA6IHN3aXBlci50cmFuc2xhdGUpIC0gZGlmZik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFjdGl2ZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSBsb29wZWRTbGlkZXMpIHtcbiAgICAvLyBGaXggRm9yIFBvc2l0aXZlIE92ZXJzbGlkaW5nXG4gICAgbmV3SW5kZXggPSAtc2xpZGVzLmxlbmd0aCArIGFjdGl2ZUluZGV4ICsgbG9vcGVkU2xpZGVzO1xuICAgIG5ld0luZGV4ICs9IGxvb3BlZFNsaWRlcztcblxuICAgIHZhciBfc2xpZGVDaGFuZ2VkID0gc3dpcGVyLnNsaWRlVG8obmV3SW5kZXgsIDAsIGZhbHNlLCB0cnVlKTtcblxuICAgIGlmIChfc2xpZGVDaGFuZ2VkICYmIGRpZmYgIT09IDApIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUoKHJ0bCA/IC1zd2lwZXIudHJhbnNsYXRlIDogc3dpcGVyLnRyYW5zbGF0ZSkgLSBkaWZmKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZXIuYWxsb3dTbGlkZVByZXYgPSBhbGxvd1NsaWRlUHJldjtcbiAgc3dpcGVyLmFsbG93U2xpZGVOZXh0ID0gYWxsb3dTbGlkZU5leHQ7XG4gIHN3aXBlci5lbWl0KCdsb29wRml4Jyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU2xpZGUoaW5kZXgsIHNsaWRlcykge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleDtcbiAgdmFyIGFjdGl2ZUluZGV4QnVmZmVyID0gYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgYWN0aXZlSW5kZXhCdWZmZXIgLT0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgICBzd2lwZXIuc2xpZGVzID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKTtcbiAgfVxuXG4gIHZhciBiYXNlTGVuZ3RoID0gc3dpcGVyLnNsaWRlcy5sZW5ndGg7XG5cbiAgaWYgKGluZGV4IDw9IDApIHtcbiAgICBzd2lwZXIucHJlcGVuZFNsaWRlKHNsaWRlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGJhc2VMZW5ndGgpIHtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoc2xpZGVzKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyAxIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBzbGlkZXNCdWZmZXIgPSBbXTtcblxuICBmb3IgKHZhciBpID0gYmFzZUxlbmd0aCAtIDE7IGkgPj0gaW5kZXg7IGkgLT0gMSkge1xuICAgIHZhciBjdXJyZW50U2xpZGUgPSBzd2lwZXIuc2xpZGVzLmVxKGkpO1xuICAgIGN1cnJlbnRTbGlkZS5yZW1vdmUoKTtcbiAgICBzbGlkZXNCdWZmZXIudW5zaGlmdChjdXJyZW50U2xpZGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBzbGlkZXMubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW19pXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW19pXSk7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleEJ1ZmZlciA+IGluZGV4ID8gYWN0aXZlSW5kZXhCdWZmZXIgKyBzbGlkZXMubGVuZ3RoIDogYWN0aXZlSW5kZXhCdWZmZXI7XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHNsaWRlc0J1ZmZlci5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzQnVmZmVyW19pMl0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BDcmVhdGUoKTtcbiAgfVxuXG4gIGlmICghKHBhcmFtcy5vYnNlcnZlciAmJiBzd2lwZXIuc3VwcG9ydC5vYnNlcnZlcikpIHtcbiAgICBzd2lwZXIudXBkYXRlKCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCArIHN3aXBlci5sb29wZWRTbGlkZXMsIDAsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhuZXdBY3RpdmVJbmRleCwgMCwgZmFsc2UpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kU2xpZGUoc2xpZGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBzd2lwZXIubG9vcERlc3Ryb3koKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2xpZGVzID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBzbGlkZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHNsaWRlc1tpXSkgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgJHdyYXBwZXJFbC5hcHBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG59IiwiaW1wb3J0IGFwcGVuZFNsaWRlIGZyb20gJy4vYXBwZW5kU2xpZGUnO1xuaW1wb3J0IHByZXBlbmRTbGlkZSBmcm9tICcuL3ByZXBlbmRTbGlkZSc7XG5pbXBvcnQgYWRkU2xpZGUgZnJvbSAnLi9hZGRTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlU2xpZGUgZnJvbSAnLi9yZW1vdmVTbGlkZSc7XG5pbXBvcnQgcmVtb3ZlQWxsU2xpZGVzIGZyb20gJy4vcmVtb3ZlQWxsU2xpZGVzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXBwZW5kU2xpZGU6IGFwcGVuZFNsaWRlLFxuICBwcmVwZW5kU2xpZGU6IHByZXBlbmRTbGlkZSxcbiAgYWRkU2xpZGU6IGFkZFNsaWRlLFxuICByZW1vdmVTbGlkZTogcmVtb3ZlU2xpZGUsXG4gIHJlbW92ZUFsbFNsaWRlczogcmVtb3ZlQWxsU2xpZGVzXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBlbmRTbGlkZShzbGlkZXMpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgYWN0aXZlSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXg7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLmxvb3BEZXN0cm95KCk7XG4gIH1cblxuICB2YXIgbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCArIDE7XG5cbiAgaWYgKHR5cGVvZiBzbGlkZXMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHNsaWRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc2xpZGVzW2ldKSAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzW2ldKTtcbiAgICB9XG5cbiAgICBuZXdBY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4ICsgc2xpZGVzLmxlbmd0aDtcbiAgfSBlbHNlIHtcbiAgICAkd3JhcHBlckVsLnByZXBlbmQoc2xpZGVzKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVBbGxTbGlkZXMoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgc2xpZGVzSW5kZXhlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3dpcGVyLnNsaWRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgfVxuXG4gIHN3aXBlci5yZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1vdmVTbGlkZShzbGlkZXNJbmRleGVzKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgYWN0aXZlSW5kZXhCdWZmZXIgPSBhY3RpdmVJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBhY3RpdmVJbmRleEJ1ZmZlciAtPSBzd2lwZXIubG9vcGVkU2xpZGVzO1xuICAgIHN3aXBlci5sb29wRGVzdHJveSgpO1xuICAgIHN3aXBlci5zbGlkZXMgPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB9XG5cbiAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXhCdWZmZXI7XG4gIHZhciBpbmRleFRvUmVtb3ZlO1xuXG4gIGlmICh0eXBlb2Ygc2xpZGVzSW5kZXhlcyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gc2xpZGVzSW5kZXhlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzSW5kZXhlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXNbaV07XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpbmRleFRvUmVtb3ZlXSkgc3dpcGVyLnNsaWRlcy5lcShpbmRleFRvUmVtb3ZlKS5yZW1vdmUoKTtcbiAgICAgIGlmIChpbmRleFRvUmVtb3ZlIDwgbmV3QWN0aXZlSW5kZXgpIG5ld0FjdGl2ZUluZGV4IC09IDE7XG4gICAgfVxuXG4gICAgbmV3QWN0aXZlSW5kZXggPSBNYXRoLm1heChuZXdBY3RpdmVJbmRleCwgMCk7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXhUb1JlbW92ZSA9IHNsaWRlc0luZGV4ZXM7XG4gICAgaWYgKHN3aXBlci5zbGlkZXNbaW5kZXhUb1JlbW92ZV0pIHN3aXBlci5zbGlkZXMuZXEoaW5kZXhUb1JlbW92ZSkucmVtb3ZlKCk7XG4gICAgaWYgKGluZGV4VG9SZW1vdmUgPCBuZXdBY3RpdmVJbmRleCkgbmV3QWN0aXZlSW5kZXggLT0gMTtcbiAgICBuZXdBY3RpdmVJbmRleCA9IE1hdGgubWF4KG5ld0FjdGl2ZUluZGV4LCAwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIHN3aXBlci5sb29wQ3JlYXRlKCk7XG4gIH1cblxuICBpZiAoIShwYXJhbXMub2JzZXJ2ZXIgJiYgc3dpcGVyLnN1cHBvcnQub2JzZXJ2ZXIpKSB7XG4gICAgc3dpcGVyLnVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXggKyBzd2lwZXIubG9vcGVkU2xpZGVzLCAwLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpcGVyLnNsaWRlVG8obmV3QWN0aXZlSW5kZXgsIDAsIGZhbHNlKTtcbiAgfVxufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXNlUGFyYW1zOiBmdW5jdGlvbiB1c2VQYXJhbXMoaW5zdGFuY2VQYXJhbXMpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdOyAvLyBFeHRlbmQgcGFyYW1zXG5cbiAgICAgIGlmIChtb2R1bGUucGFyYW1zKSB7XG4gICAgICAgIGV4dGVuZChpbnN0YW5jZVBhcmFtcywgbW9kdWxlLnBhcmFtcyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHVzZU1vZHVsZXM6IGZ1bmN0aW9uIHVzZU1vZHVsZXMobW9kdWxlc1BhcmFtcykge1xuICAgIGlmIChtb2R1bGVzUGFyYW1zID09PSB2b2lkIDApIHtcbiAgICAgIG1vZHVsZXNQYXJhbXMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgIGlmICghaW5zdGFuY2UubW9kdWxlcykgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGluc3RhbmNlLm1vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBpbnN0YW5jZS5tb2R1bGVzW21vZHVsZU5hbWVdO1xuICAgICAgdmFyIG1vZHVsZVBhcmFtcyA9IG1vZHVsZXNQYXJhbXNbbW9kdWxlTmFtZV0gfHwge307IC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcblxuICAgICAgaWYgKG1vZHVsZS5vbiAmJiBpbnN0YW5jZS5vbikge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2R1bGUub24pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUV2ZW50TmFtZSkge1xuICAgICAgICAgIGluc3RhbmNlLm9uKG1vZHVsZUV2ZW50TmFtZSwgbW9kdWxlLm9uW21vZHVsZUV2ZW50TmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gTW9kdWxlIGNyZWF0ZSBjYWxsYmFja1xuXG5cbiAgICAgIGlmIChtb2R1bGUuY3JlYXRlKSB7XG4gICAgICAgIG1vZHVsZS5jcmVhdGUuYmluZChpbnN0YW5jZSkobW9kdWxlUGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTsiLCJpbXBvcnQgc2xpZGVUbyBmcm9tICcuL3NsaWRlVG8nO1xuaW1wb3J0IHNsaWRlVG9Mb29wIGZyb20gJy4vc2xpZGVUb0xvb3AnO1xuaW1wb3J0IHNsaWRlTmV4dCBmcm9tICcuL3NsaWRlTmV4dCc7XG5pbXBvcnQgc2xpZGVQcmV2IGZyb20gJy4vc2xpZGVQcmV2JztcbmltcG9ydCBzbGlkZVJlc2V0IGZyb20gJy4vc2xpZGVSZXNldCc7XG5pbXBvcnQgc2xpZGVUb0Nsb3Nlc3QgZnJvbSAnLi9zbGlkZVRvQ2xvc2VzdCc7XG5pbXBvcnQgc2xpZGVUb0NsaWNrZWRTbGlkZSBmcm9tICcuL3NsaWRlVG9DbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICBzbGlkZVRvOiBzbGlkZVRvLFxuICBzbGlkZVRvTG9vcDogc2xpZGVUb0xvb3AsXG4gIHNsaWRlTmV4dDogc2xpZGVOZXh0LFxuICBzbGlkZVByZXY6IHNsaWRlUHJldixcbiAgc2xpZGVSZXNldDogc2xpZGVSZXNldCxcbiAgc2xpZGVUb0Nsb3Nlc3Q6IHNsaWRlVG9DbG9zZXN0LFxuICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBzbGlkZVRvQ2xpY2tlZFNsaWRlXG59OyIsIi8qIGVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVOZXh0KHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBhbmltYXRpbmcgPSBzd2lwZXIuYW5pbWF0aW5nLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuICBpZiAoIWVuYWJsZWQpIHJldHVybiBzd2lwZXI7XG4gIHZhciBpbmNyZW1lbnQgPSBzd2lwZXIuYWN0aXZlSW5kZXggPCBwYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwID8gMSA6IHBhcmFtcy5zbGlkZXNQZXJHcm91cDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoYW5pbWF0aW5nICYmIHBhcmFtcy5sb29wUHJldmVudHNTbGlkZSkgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXBlci5sb29wRml4KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG4gICAgc3dpcGVyLl9jbGllbnRMZWZ0ID0gc3dpcGVyLiR3cmFwcGVyRWxbMF0uY2xpZW50TGVmdDtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhzd2lwZXIuYWN0aXZlSW5kZXggKyBpbmNyZW1lbnQsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUHJldihzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCkge1xuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgYW5pbWF0aW5nID0gc3dpcGVyLmFuaW1hdGluZyxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgc2xpZGVzR3JpZCA9IHN3aXBlci5zbGlkZXNHcmlkLFxuICAgICAgcnRsVHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIGVuYWJsZWQgPSBzd2lwZXIuZW5hYmxlZDtcbiAgaWYgKCFlbmFibGVkKSByZXR1cm4gc3dpcGVyO1xuXG4gIGlmIChwYXJhbXMubG9vcCkge1xuICAgIGlmIChhbmltYXRpbmcgJiYgcGFyYW1zLmxvb3BQcmV2ZW50c1NsaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgc3dpcGVyLmxvb3BGaXgoKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbiAgICBzd2lwZXIuX2NsaWVudExlZnQgPSBzd2lwZXIuJHdyYXBwZXJFbFswXS5jbGllbnRMZWZ0O1xuICB9XG5cbiAgdmFyIHRyYW5zbGF0ZSA9IHJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBmdW5jdGlvbiBub3JtYWxpemUodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHJldHVybiAtTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKTtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih2YWwpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPSBub3JtYWxpemUodHJhbnNsYXRlKTtcbiAgdmFyIG5vcm1hbGl6ZWRTbmFwR3JpZCA9IHNuYXBHcmlkLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZSh2YWwpO1xuICB9KTtcbiAgdmFyIHByZXZTbmFwID0gc25hcEdyaWRbbm9ybWFsaXplZFNuYXBHcmlkLmluZGV4T2Yobm9ybWFsaXplZFRyYW5zbGF0ZSkgLSAxXTtcblxuICBpZiAodHlwZW9mIHByZXZTbmFwID09PSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuY3NzTW9kZSkge1xuICAgIHNuYXBHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmICghcHJldlNuYXAgJiYgbm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBzbmFwKSBwcmV2U25hcCA9IHNuYXA7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcHJldkluZGV4O1xuXG4gIGlmICh0eXBlb2YgcHJldlNuYXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcHJldkluZGV4ID0gc2xpZGVzR3JpZC5pbmRleE9mKHByZXZTbmFwKTtcbiAgICBpZiAocHJldkluZGV4IDwgMCkgcHJldkluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4IC0gMTtcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhwcmV2SW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKTtcbn0iLCIvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsaWRlUmVzZXQoc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpIHtcbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICByZXR1cm4gc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUbyhpbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwsIGluaXRpYWwpIHtcbiAgaWYgKGluZGV4ID09PSB2b2lkIDApIHtcbiAgICBpbmRleCA9IDA7XG4gIH1cblxuICBpZiAoc3BlZWQgPT09IHZvaWQgMCkge1xuICAgIHNwZWVkID0gdGhpcy5wYXJhbXMuc3BlZWQ7XG4gIH1cblxuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgJiYgdHlwZW9mIGluZGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSAnaW5kZXgnIGFyZ3VtZW50IGNhbm5vdCBoYXZlIHR5cGUgb3RoZXIgdGhhbiAnbnVtYmVyJyBvciAnc3RyaW5nJy4gW1wiICsgdHlwZW9mIGluZGV4ICsgXCJdIGdpdmVuLlwiKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaW5kZXggPT09ICdzdHJpbmcnKSB7XG4gICAgLyoqXG4gICAgICogVGhlIGBpbmRleGAgYXJndW1lbnQgY29udmVydGVkIGZyb20gYHN0cmluZ2AgdG8gYG51bWJlcmAuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgaW5kZXhBc051bWJlciA9IHBhcnNlSW50KGluZGV4LCAxMCk7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBgaW5kZXhgIGFyZ3VtZW50IGlzIGEgdmFsaWQgYG51bWJlcmBcbiAgICAgKiBhZnRlciBiZWluZyBjb252ZXJ0ZWQgZnJvbSB0aGUgYHN0cmluZ2AgdHlwZS5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICAgIHZhciBpc1ZhbGlkTnVtYmVyID0gaXNGaW5pdGUoaW5kZXhBc051bWJlcik7XG5cbiAgICBpZiAoIWlzVmFsaWROdW1iZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwYXNzZWQtaW4gJ2luZGV4JyAoc3RyaW5nKSBjb3VsZG4ndCBiZSBjb252ZXJ0ZWQgdG8gJ251bWJlcicuIFtcIiArIGluZGV4ICsgXCJdIGdpdmVuLlwiKTtcbiAgICB9IC8vIEtub3dpbmcgdGhhdCB0aGUgY29udmVydGVkIGBpbmRleGAgaXMgYSB2YWxpZCBudW1iZXIsXG4gICAgLy8gd2UgY2FuIHVwZGF0ZSB0aGUgb3JpZ2luYWwgYXJndW1lbnQncyB2YWx1ZS5cblxuXG4gICAgaW5kZXggPSBpbmRleEFzTnVtYmVyO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZUluZGV4ID0gaW5kZXg7XG4gIGlmIChzbGlkZUluZGV4IDwgMCkgc2xpZGVJbmRleCA9IDA7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgc25hcEdyaWQgPSBzd2lwZXIuc25hcEdyaWQsXG4gICAgICBzbGlkZXNHcmlkID0gc3dpcGVyLnNsaWRlc0dyaWQsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXgsXG4gICAgICBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsLFxuICAgICAgZW5hYmxlZCA9IHN3aXBlci5lbmFibGVkO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24gfHwgIWVuYWJsZWQgJiYgIWludGVybmFsICYmICFpbml0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNraXAgPSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgc2xpZGVJbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoc2xpZGVJbmRleCAtIHNraXApIC8gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmICgoYWN0aXZlSW5kZXggfHwgcGFyYW1zLmluaXRpYWxTbGlkZSB8fCAwKSA9PT0gKHByZXZpb3VzSW5kZXggfHwgMCkgJiYgcnVuQ2FsbGJhY2tzKSB7XG4gICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKTtcbiAgfVxuXG4gIHZhciB0cmFuc2xhdGUgPSAtc25hcEdyaWRbc25hcEluZGV4XTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKHRyYW5zbGF0ZSk7IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cbiAgaWYgKHBhcmFtcy5ub3JtYWxpemVTbGlkZUluZGV4KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZFRyYW5zbGF0ZSA9IC1NYXRoLmZsb29yKHRyYW5zbGF0ZSAqIDEwMCk7XG4gICAgICB2YXIgbm9ybWFsaXplZEdpcmQgPSBNYXRoLmZsb29yKHNsaWRlc0dyaWRbaV0gKiAxMDApO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRHcmlkTmV4dCA9IE1hdGguZmxvb3Ioc2xpZGVzR3JpZFtpICsgMV0gKiAxMDApO1xuXG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCAmJiBub3JtYWxpemVkVHJhbnNsYXRlIDwgbm9ybWFsaXplZEdyaWROZXh0IC0gKG5vcm1hbGl6ZWRHcmlkTmV4dCAtIG5vcm1hbGl6ZWRHaXJkKSAvIDIpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgfSBlbHNlIGlmIChub3JtYWxpemVkVHJhbnNsYXRlID49IG5vcm1hbGl6ZWRHaXJkICYmIG5vcm1hbGl6ZWRUcmFuc2xhdGUgPCBub3JtYWxpemVkR3JpZE5leHQpIHtcbiAgICAgICAgICBzbGlkZUluZGV4ID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobm9ybWFsaXplZFRyYW5zbGF0ZSA+PSBub3JtYWxpemVkR2lyZCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gRGlyZWN0aW9ucyBsb2Nrc1xuXG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCAmJiBzbGlkZUluZGV4ICE9PSBhY3RpdmVJbmRleCkge1xuICAgIGlmICghc3dpcGVyLmFsbG93U2xpZGVOZXh0ICYmIHRyYW5zbGF0ZSA8IHN3aXBlci50cmFuc2xhdGUgJiYgdHJhbnNsYXRlIDwgc3dpcGVyLm1pblRyYW5zbGF0ZSgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYWxsb3dTbGlkZVByZXYgJiYgdHJhbnNsYXRlID4gc3dpcGVyLnRyYW5zbGF0ZSAmJiB0cmFuc2xhdGUgPiBzd2lwZXIubWF4VHJhbnNsYXRlKCkpIHtcbiAgICAgIGlmICgoYWN0aXZlSW5kZXggfHwgMCkgIT09IHNsaWRlSW5kZXgpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGlyZWN0aW9uO1xuICBpZiAoc2xpZGVJbmRleCA+IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAnbmV4dCc7ZWxzZSBpZiAoc2xpZGVJbmRleCA8IGFjdGl2ZUluZGV4KSBkaXJlY3Rpb24gPSAncHJldic7ZWxzZSBkaXJlY3Rpb24gPSAncmVzZXQnOyAvLyBVcGRhdGUgSW5kZXhcblxuICBpZiAocnRsICYmIC10cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUgfHwgIXJ0bCAmJiB0cmFuc2xhdGUgPT09IHN3aXBlci50cmFuc2xhdGUpIHtcbiAgICBzd2lwZXIudXBkYXRlQWN0aXZlSW5kZXgoc2xpZGVJbmRleCk7IC8vIFVwZGF0ZSBIZWlnaHRcblxuICAgIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgc3dpcGVyLnVwZGF0ZUF1dG9IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuXG4gICAgaWYgKHBhcmFtcy5lZmZlY3QgIT09ICdzbGlkZScpIHtcbiAgICAgIHN3aXBlci5zZXRUcmFuc2xhdGUodHJhbnNsYXRlKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSAncmVzZXQnKSB7XG4gICAgICBzd2lwZXIudHJhbnNpdGlvblN0YXJ0KHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICB2YXIgaXNIID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpO1xuICAgIHZhciB0ID0gLXRyYW5zbGF0ZTtcblxuICAgIGlmIChydGwpIHtcbiAgICAgIHQgPSB3cmFwcGVyRWwuc2Nyb2xsV2lkdGggLSB3cmFwcGVyRWwub2Zmc2V0V2lkdGggLSB0O1xuICAgIH1cblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSB0LCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSB0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuICAgIHN3aXBlci50cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleChzbGlkZUluZGV4KTtcbiAgICBzd2lwZXIudXBkYXRlU2xpZGVzQ2xhc3NlcygpO1xuICAgIHN3aXBlci5lbWl0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnLCBzcGVlZCwgaW50ZXJuYWwpO1xuICAgIHN3aXBlci50cmFuc2l0aW9uU3RhcnQocnVuQ2FsbGJhY2tzLCBkaXJlY3Rpb24pO1xuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgc3dpcGVyLm9uU2xpZGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gdHJhbnNpdGlvbkVuZChlKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcbiAgICAgICAgICBzd2lwZXIudHJhbnNpdGlvbkVuZChydW5DYWxsYmFja3MsIGRpcmVjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzd2lwZXIub25TbGlkZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIHN3aXBlci5vblNsaWRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IG5leHRUaWNrIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0NsaWNrZWRTbGlkZSgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsO1xuICB2YXIgc2xpZGVzUGVyVmlldyA9IHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycgPyBzd2lwZXIuc2xpZGVzUGVyVmlld0R5bmFtaWMoKSA6IHBhcmFtcy5zbGlkZXNQZXJWaWV3O1xuICB2YXIgc2xpZGVUb0luZGV4ID0gc3dpcGVyLmNsaWNrZWRJbmRleDtcbiAgdmFyIHJlYWxJbmRleDtcblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICBpZiAoc3dpcGVyLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIHJlYWxJbmRleCA9IHBhcnNlSW50KCQoc3dpcGVyLmNsaWNrZWRTbGlkZSkuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgaWYgKHNsaWRlVG9JbmRleCA8IHN3aXBlci5sb29wZWRTbGlkZXMgLSBzbGlkZXNQZXJWaWV3IC8gMiB8fCBzbGlkZVRvSW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAtIHN3aXBlci5sb29wZWRTbGlkZXMgKyBzbGlkZXNQZXJWaWV3IC8gMikge1xuICAgICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgICBzbGlkZVRvSW5kZXggPSAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyByZWFsSW5kZXggKyBcIlxcXCJdOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVwiKS5lcSgwKS5pbmRleCgpO1xuICAgICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2xpZGVUb0luZGV4ID4gc3dpcGVyLnNsaWRlcy5sZW5ndGggLSBzbGlkZXNQZXJWaWV3KSB7XG4gICAgICBzd2lwZXIubG9vcEZpeCgpO1xuICAgICAgc2xpZGVUb0luZGV4ID0gJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXTpub3QoLlwiICsgcGFyYW1zLnNsaWRlRHVwbGljYXRlQ2xhc3MgKyBcIilcIikuZXEoMCkuaW5kZXgoKTtcbiAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVUb0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2xpZGVUbyhzbGlkZVRvSW5kZXgpO1xuICB9XG59IiwiLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiBcIm9mZlwiICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbGlkZVRvQ2xvc2VzdChzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCwgdGhyZXNob2xkKSB7XG4gIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7XG4gICAgc3BlZWQgPSB0aGlzLnBhcmFtcy5zcGVlZDtcbiAgfVxuXG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICBpZiAodGhyZXNob2xkID09PSB2b2lkIDApIHtcbiAgICB0aHJlc2hvbGQgPSAwLjU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4O1xuICB2YXIgc2tpcCA9IE1hdGgubWluKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXBTa2lwLCBpbmRleCk7XG4gIHZhciBzbmFwSW5kZXggPSBza2lwICsgTWF0aC5mbG9vcigoaW5kZXggLSBza2lwKSAvIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXApO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcblxuICBpZiAodHJhbnNsYXRlID49IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdKSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIG9uIG9yIGFmdGVyIHRoZSBjdXJyZW50IHNuYXAgaW5kZXgsIHNvIHRoZSBjaG9pY2VcbiAgICAvLyBpcyBiZXR3ZWVuIHRoZSBjdXJyZW50IGluZGV4IGFuZCB0aGUgb25lIGFmdGVyIGl0LlxuICAgIHZhciBjdXJyZW50U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXhdO1xuICAgIHZhciBuZXh0U25hcCA9IHN3aXBlci5zbmFwR3JpZFtzbmFwSW5kZXggKyAxXTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBjdXJyZW50U25hcCA+IChuZXh0U25hcCAtIGN1cnJlbnRTbmFwKSAqIHRocmVzaG9sZCkge1xuICAgICAgaW5kZXggKz0gc3dpcGVyLnBhcmFtcy5zbGlkZXNQZXJHcm91cDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGN1cnJlbnQgdHJhbnNsYXRlIGlzIGJlZm9yZSB0aGUgY3VycmVudCBzbmFwIGluZGV4LCBzbyB0aGUgY2hvaWNlXG4gICAgLy8gaXMgYmV0d2VlbiB0aGUgY3VycmVudCBpbmRleCBhbmQgdGhlIG9uZSBiZWZvcmUgaXQuXG4gICAgdmFyIHByZXZTbmFwID0gc3dpcGVyLnNuYXBHcmlkW3NuYXBJbmRleCAtIDFdO1xuICAgIHZhciBfY3VycmVudFNuYXAgPSBzd2lwZXIuc25hcEdyaWRbc25hcEluZGV4XTtcblxuICAgIGlmICh0cmFuc2xhdGUgLSBwcmV2U25hcCA8PSAoX2N1cnJlbnRTbmFwIC0gcHJldlNuYXApICogdGhyZXNob2xkKSB7XG4gICAgICBpbmRleCAtPSBzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gTWF0aC5tYXgoaW5kZXgsIDApO1xuICBpbmRleCA9IE1hdGgubWluKGluZGV4LCBzd2lwZXIuc2xpZGVzR3JpZC5sZW5ndGggLSAxKTtcbiAgcmV0dXJuIHN3aXBlci5zbGlkZVRvKGluZGV4LCBzcGVlZCwgcnVuQ2FsbGJhY2tzLCBpbnRlcm5hbCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xpZGVUb0xvb3AoaW5kZXgsIHNwZWVkLCBydW5DYWxsYmFja3MsIGludGVybmFsKSB7XG4gIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgaW5kZXggPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgbmV3SW5kZXggPSBpbmRleDtcblxuICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSB7XG4gICAgbmV3SW5kZXggKz0gc3dpcGVyLmxvb3BlZFNsaWRlcztcbiAgfVxuXG4gIHJldHVybiBzd2lwZXIuc2xpZGVUbyhuZXdJbmRleCwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgaW50ZXJuYWwpO1xufSIsImltcG9ydCBzZXRUcmFuc2l0aW9uIGZyb20gJy4vc2V0VHJhbnNpdGlvbic7XG5pbXBvcnQgdHJhbnNpdGlvblN0YXJ0IGZyb20gJy4vdHJhbnNpdGlvblN0YXJ0JztcbmltcG9ydCB0cmFuc2l0aW9uRW5kIGZyb20gJy4vdHJhbnNpdGlvbkVuZCc7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldFRyYW5zaXRpb246IHNldFRyYW5zaXRpb24sXG4gIHRyYW5zaXRpb25TdGFydDogdHJhbnNpdGlvblN0YXJ0LFxuICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24sIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBpZiAoIXN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgIHN3aXBlci4kd3JhcHBlckVsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3NldFRyYW5zaXRpb24nLCBkdXJhdGlvbiwgYnlDb250cm9sbGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKHJ1bkNhbGxiYWNrcywgZGlyZWN0aW9uKSB7XG4gIGlmIChydW5DYWxsYmFja3MgPT09IHZvaWQgMCkge1xuICAgIHJ1bkNhbGxiYWNrcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcHJldmlvdXNJbmRleCA9IHN3aXBlci5wcmV2aW91c0luZGV4LFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgc3dpcGVyLmFuaW1hdGluZyA9IGZhbHNlO1xuICBpZiAocGFyYW1zLmNzc01vZGUpIHJldHVybjtcbiAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gIHZhciBkaXIgPSBkaXJlY3Rpb247XG5cbiAgaWYgKCFkaXIpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXggPiBwcmV2aW91c0luZGV4KSBkaXIgPSAnbmV4dCc7ZWxzZSBpZiAoYWN0aXZlSW5kZXggPCBwcmV2aW91c0luZGV4KSBkaXIgPSAncHJldic7ZWxzZSBkaXIgPSAncmVzZXQnO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3RyYW5zaXRpb25FbmQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCcpO1xuXG4gICAgaWYgKGRpciA9PT0gJ25leHQnKSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVOZXh0VHJhbnNpdGlvbkVuZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zaXRpb25TdGFydChydW5DYWxsYmFja3MsIGRpcmVjdGlvbikge1xuICBpZiAocnVuQ2FsbGJhY2tzID09PSB2b2lkIDApIHtcbiAgICBydW5DYWxsYmFja3MgPSB0cnVlO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBhY3RpdmVJbmRleCA9IHN3aXBlci5hY3RpdmVJbmRleCxcbiAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICBwcmV2aW91c0luZGV4ID0gc3dpcGVyLnByZXZpb3VzSW5kZXg7XG4gIGlmIChwYXJhbXMuY3NzTW9kZSkgcmV0dXJuO1xuXG4gIGlmIChwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgIHN3aXBlci51cGRhdGVBdXRvSGVpZ2h0KCk7XG4gIH1cblxuICB2YXIgZGlyID0gZGlyZWN0aW9uO1xuXG4gIGlmICghZGlyKSB7XG4gICAgaWYgKGFjdGl2ZUluZGV4ID4gcHJldmlvdXNJbmRleCkgZGlyID0gJ25leHQnO2Vsc2UgaWYgKGFjdGl2ZUluZGV4IDwgcHJldmlvdXNJbmRleCkgZGlyID0gJ3ByZXYnO2Vsc2UgZGlyID0gJ3Jlc2V0JztcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uU3RhcnQnKTtcblxuICBpZiAocnVuQ2FsbGJhY2tzICYmIGFjdGl2ZUluZGV4ICE9PSBwcmV2aW91c0luZGV4KSB7XG4gICAgaWYgKGRpciA9PT0gJ3Jlc2V0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uU3RhcnQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnKTtcblxuICAgIGlmIChkaXIgPT09ICduZXh0Jykge1xuICAgICAgc3dpcGVyLmVtaXQoJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzd2lwZXIuZW1pdCgnc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgZ2V0VHJhbnNsYXRlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3dpcGVyVHJhbnNsYXRlKGF4aXMpIHtcbiAgaWYgKGF4aXMgPT09IHZvaWQgMCkge1xuICAgIGF4aXMgPSB0aGlzLmlzSG9yaXpvbnRhbCgpID8gJ3gnIDogJ3knO1xuICB9XG5cbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSxcbiAgICAgIHRyYW5zbGF0ZSA9IHN3aXBlci50cmFuc2xhdGUsXG4gICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG5cbiAgaWYgKHBhcmFtcy52aXJ0dWFsVHJhbnNsYXRlKSB7XG4gICAgcmV0dXJuIHJ0bCA/IC10cmFuc2xhdGUgOiB0cmFuc2xhdGU7XG4gIH1cblxuICBpZiAocGFyYW1zLmNzc01vZGUpIHtcbiAgICByZXR1cm4gdHJhbnNsYXRlO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRUcmFuc2xhdGUgPSBnZXRUcmFuc2xhdGUoJHdyYXBwZXJFbFswXSwgYXhpcyk7XG4gIGlmIChydGwpIGN1cnJlbnRUcmFuc2xhdGUgPSAtY3VycmVudFRyYW5zbGF0ZTtcbiAgcmV0dXJuIGN1cnJlbnRUcmFuc2xhdGUgfHwgMDtcbn0iLCJpbXBvcnQgZ2V0VHJhbnNsYXRlIGZyb20gJy4vZ2V0VHJhbnNsYXRlJztcbmltcG9ydCBzZXRUcmFuc2xhdGUgZnJvbSAnLi9zZXRUcmFuc2xhdGUnO1xuaW1wb3J0IG1pblRyYW5zbGF0ZSBmcm9tICcuL21pblRyYW5zbGF0ZSc7XG5pbXBvcnQgbWF4VHJhbnNsYXRlIGZyb20gJy4vbWF4VHJhbnNsYXRlJztcbmltcG9ydCB0cmFuc2xhdGVUbyBmcm9tICcuL3RyYW5zbGF0ZVRvJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0VHJhbnNsYXRlOiBnZXRUcmFuc2xhdGUsXG4gIHNldFRyYW5zbGF0ZTogc2V0VHJhbnNsYXRlLFxuICBtaW5UcmFuc2xhdGU6IG1pblRyYW5zbGF0ZSxcbiAgbWF4VHJhbnNsYXRlOiBtYXhUcmFuc2xhdGUsXG4gIHRyYW5zbGF0ZVRvOiB0cmFuc2xhdGVUb1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYXhUcmFuc2xhdGUoKSB7XG4gIHJldHVybiAtdGhpcy5zbmFwR3JpZFt0aGlzLnNuYXBHcmlkLmxlbmd0aCAtIDFdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pblRyYW5zbGF0ZSgpIHtcbiAgcmV0dXJuIC10aGlzLnNuYXBHcmlkWzBdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUsIGJ5Q29udHJvbGxlcikge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICBwYXJhbXMgPSBzd2lwZXIucGFyYW1zLFxuICAgICAgJHdyYXBwZXJFbCA9IHN3aXBlci4kd3JhcHBlckVsLFxuICAgICAgd3JhcHBlckVsID0gc3dpcGVyLndyYXBwZXJFbCxcbiAgICAgIHByb2dyZXNzID0gc3dpcGVyLnByb2dyZXNzO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgdmFyIHogPSAwO1xuXG4gIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICB4ID0gcnRsID8gLXRyYW5zbGF0ZSA6IHRyYW5zbGF0ZTtcbiAgfSBlbHNlIHtcbiAgICB5ID0gdHJhbnNsYXRlO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHtcbiAgICB4ID0gTWF0aC5mbG9vcih4KTtcbiAgICB5ID0gTWF0aC5mbG9vcih5KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY3NzTW9kZSkge1xuICAgIHdyYXBwZXJFbFtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAteCA6IC15O1xuICB9IGVsc2UgaWYgKCFwYXJhbXMudmlydHVhbFRyYW5zbGF0ZSkge1xuICAgICR3cmFwcGVyRWwudHJhbnNmb3JtKFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgXCIgKyB6ICsgXCJweClcIik7XG4gIH1cblxuICBzd2lwZXIucHJldmlvdXNUcmFuc2xhdGUgPSBzd2lwZXIudHJhbnNsYXRlO1xuICBzd2lwZXIudHJhbnNsYXRlID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8geCA6IHk7IC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIHByb2dyZXNzXG5cbiAgdmFyIG5ld1Byb2dyZXNzO1xuICB2YXIgdHJhbnNsYXRlc0RpZmYgPSBzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCk7XG5cbiAgaWYgKHRyYW5zbGF0ZXNEaWZmID09PSAwKSB7XG4gICAgbmV3UHJvZ3Jlc3MgPSAwO1xuICB9IGVsc2Uge1xuICAgIG5ld1Byb2dyZXNzID0gKHRyYW5zbGF0ZSAtIHN3aXBlci5taW5UcmFuc2xhdGUoKSkgLyB0cmFuc2xhdGVzRGlmZjtcbiAgfVxuXG4gIGlmIChuZXdQcm9ncmVzcyAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3ModHJhbnNsYXRlKTtcbiAgfVxuXG4gIHN3aXBlci5lbWl0KCdzZXRUcmFuc2xhdGUnLCBzd2lwZXIudHJhbnNsYXRlLCBieUNvbnRyb2xsZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRyYW5zbGF0ZVRvKHRyYW5zbGF0ZSwgc3BlZWQsIHJ1bkNhbGxiYWNrcywgdHJhbnNsYXRlQm91bmRzLCBpbnRlcm5hbCkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSAwO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSB2b2lkIDApIHtcbiAgICBzcGVlZCA9IHRoaXMucGFyYW1zLnNwZWVkO1xuICB9XG5cbiAgaWYgKHJ1bkNhbGxiYWNrcyA9PT0gdm9pZCAwKSB7XG4gICAgcnVuQ2FsbGJhY2tzID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0cmFuc2xhdGVCb3VuZHMgPT09IHZvaWQgMCkge1xuICAgIHRyYW5zbGF0ZUJvdW5kcyA9IHRydWU7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICB3cmFwcGVyRWwgPSBzd2lwZXIud3JhcHBlckVsO1xuXG4gIGlmIChzd2lwZXIuYW5pbWF0aW5nICYmIHBhcmFtcy5wcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbWluVHJhbnNsYXRlID0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgbWF4VHJhbnNsYXRlID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpO1xuICB2YXIgbmV3VHJhbnNsYXRlO1xuICBpZiAodHJhbnNsYXRlQm91bmRzICYmIHRyYW5zbGF0ZSA+IG1pblRyYW5zbGF0ZSkgbmV3VHJhbnNsYXRlID0gbWluVHJhbnNsYXRlO2Vsc2UgaWYgKHRyYW5zbGF0ZUJvdW5kcyAmJiB0cmFuc2xhdGUgPCBtYXhUcmFuc2xhdGUpIG5ld1RyYW5zbGF0ZSA9IG1heFRyYW5zbGF0ZTtlbHNlIG5ld1RyYW5zbGF0ZSA9IHRyYW5zbGF0ZTsgLy8gVXBkYXRlIHByb2dyZXNzXG5cbiAgc3dpcGVyLnVwZGF0ZVByb2dyZXNzKG5ld1RyYW5zbGF0ZSk7XG5cbiAgaWYgKHBhcmFtcy5jc3NNb2RlKSB7XG4gICAgdmFyIGlzSCA9IHN3aXBlci5pc0hvcml6b250YWwoKTtcblxuICAgIGlmIChzcGVlZCA9PT0gMCkge1xuICAgICAgd3JhcHBlckVsW2lzSCA/ICdzY3JvbGxMZWZ0JyA6ICdzY3JvbGxUb3AnXSA9IC1uZXdUcmFuc2xhdGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaWYgKHdyYXBwZXJFbC5zY3JvbGxUbykge1xuICAgICAgICB2YXIgX3dyYXBwZXJFbCRzY3JvbGxUbztcblxuICAgICAgICB3cmFwcGVyRWwuc2Nyb2xsVG8oKF93cmFwcGVyRWwkc2Nyb2xsVG8gPSB7fSwgX3dyYXBwZXJFbCRzY3JvbGxUb1tpc0ggPyAnbGVmdCcgOiAndG9wJ10gPSAtbmV3VHJhbnNsYXRlLCBfd3JhcHBlckVsJHNjcm9sbFRvLmJlaGF2aW9yID0gJ3Ntb290aCcsIF93cmFwcGVyRWwkc2Nyb2xsVG8pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyYXBwZXJFbFtpc0ggPyAnc2Nyb2xsTGVmdCcgOiAnc2Nyb2xsVG9wJ10gPSAtbmV3VHJhbnNsYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHNwZWVkID09PSAwKSB7XG4gICAgc3dpcGVyLnNldFRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvbkVuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2lwZXIuc2V0VHJhbnNpdGlvbihzcGVlZCk7XG4gICAgc3dpcGVyLnNldFRyYW5zbGF0ZShuZXdUcmFuc2xhdGUpO1xuXG4gICAgaWYgKHJ1bkNhbGxiYWNrcykge1xuICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVRyYW5zaXRpb25TdGFydCcsIHNwZWVkLCBpbnRlcm5hbCk7XG4gICAgICBzd2lwZXIuZW1pdCgndHJhbnNpdGlvblN0YXJ0Jyk7XG4gICAgfVxuXG4gICAgaWYgKCFzd2lwZXIuYW5pbWF0aW5nKSB7XG4gICAgICBzd2lwZXIuYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKCFzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKSB7XG4gICAgICAgIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kKGUpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLiR3cmFwcGVyRWxbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHN3aXBlci5vblRyYW5zbGF0ZVRvV3JhcHBlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIHN3aXBlci4kd3JhcHBlckVsWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICBzd2lwZXIub25UcmFuc2xhdGVUb1dyYXBwZXJUcmFuc2l0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgICBkZWxldGUgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZDtcblxuICAgICAgICAgIGlmIChydW5DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHN3aXBlci5lbWl0KCd0cmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgICBzd2lwZXIuJHdyYXBwZXJFbFswXS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgc3dpcGVyLm9uVHJhbnNsYXRlVG9XcmFwcGVyVHJhbnNpdGlvbkVuZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHVwZGF0ZVNpemUgZnJvbSAnLi91cGRhdGVTaXplJztcbmltcG9ydCB1cGRhdGVTbGlkZXMgZnJvbSAnLi91cGRhdGVTbGlkZXMnO1xuaW1wb3J0IHVwZGF0ZUF1dG9IZWlnaHQgZnJvbSAnLi91cGRhdGVBdXRvSGVpZ2h0JztcbmltcG9ydCB1cGRhdGVTbGlkZXNPZmZzZXQgZnJvbSAnLi91cGRhdGVTbGlkZXNPZmZzZXQnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc1Byb2dyZXNzIGZyb20gJy4vdXBkYXRlU2xpZGVzUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVByb2dyZXNzIGZyb20gJy4vdXBkYXRlUHJvZ3Jlc3MnO1xuaW1wb3J0IHVwZGF0ZVNsaWRlc0NsYXNzZXMgZnJvbSAnLi91cGRhdGVTbGlkZXNDbGFzc2VzJztcbmltcG9ydCB1cGRhdGVBY3RpdmVJbmRleCBmcm9tICcuL3VwZGF0ZUFjdGl2ZUluZGV4JztcbmltcG9ydCB1cGRhdGVDbGlja2VkU2xpZGUgZnJvbSAnLi91cGRhdGVDbGlja2VkU2xpZGUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGVTaXplOiB1cGRhdGVTaXplLFxuICB1cGRhdGVTbGlkZXM6IHVwZGF0ZVNsaWRlcyxcbiAgdXBkYXRlQXV0b0hlaWdodDogdXBkYXRlQXV0b0hlaWdodCxcbiAgdXBkYXRlU2xpZGVzT2Zmc2V0OiB1cGRhdGVTbGlkZXNPZmZzZXQsXG4gIHVwZGF0ZVNsaWRlc1Byb2dyZXNzOiB1cGRhdGVTbGlkZXNQcm9ncmVzcyxcbiAgdXBkYXRlUHJvZ3Jlc3M6IHVwZGF0ZVByb2dyZXNzLFxuICB1cGRhdGVTbGlkZXNDbGFzc2VzOiB1cGRhdGVTbGlkZXNDbGFzc2VzLFxuICB1cGRhdGVBY3RpdmVJbmRleDogdXBkYXRlQWN0aXZlSW5kZXgsXG4gIHVwZGF0ZUNsaWNrZWRTbGlkZTogdXBkYXRlQ2xpY2tlZFNsaWRlXG59OyIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgdHJhbnNsYXRlID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZSA/IHN3aXBlci50cmFuc2xhdGUgOiAtc3dpcGVyLnRyYW5zbGF0ZTtcbiAgdmFyIHNsaWRlc0dyaWQgPSBzd2lwZXIuc2xpZGVzR3JpZCxcbiAgICAgIHNuYXBHcmlkID0gc3dpcGVyLnNuYXBHcmlkLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgIHByZXZpb3VzSW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXgsXG4gICAgICBwcmV2aW91c1JlYWxJbmRleCA9IHN3aXBlci5yZWFsSW5kZXgsXG4gICAgICBwcmV2aW91c1NuYXBJbmRleCA9IHN3aXBlci5zbmFwSW5kZXg7XG4gIHZhciBhY3RpdmVJbmRleCA9IG5ld0FjdGl2ZUluZGV4O1xuICB2YXIgc25hcEluZGV4O1xuXG4gIGlmICh0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXNHcmlkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZW9mIHNsaWRlc0dyaWRbaSArIDFdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0gLSAoc2xpZGVzR3JpZFtpICsgMV0gLSBzbGlkZXNHcmlkW2ldKSAvIDIpIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNsYXRlID49IHNsaWRlc0dyaWRbaV0gJiYgdHJhbnNsYXRlIDwgc2xpZGVzR3JpZFtpICsgMV0pIHtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zbGF0ZSA+PSBzbGlkZXNHcmlkW2ldKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9IC8vIE5vcm1hbGl6ZSBzbGlkZUluZGV4XG5cblxuICAgIGlmIChwYXJhbXMubm9ybWFsaXplU2xpZGVJbmRleCkge1xuICAgICAgaWYgKGFjdGl2ZUluZGV4IDwgMCB8fCB0eXBlb2YgYWN0aXZlSW5kZXggPT09ICd1bmRlZmluZWQnKSBhY3RpdmVJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmluZGV4T2YodHJhbnNsYXRlKSA+PSAwKSB7XG4gICAgc25hcEluZGV4ID0gc25hcEdyaWQuaW5kZXhPZih0cmFuc2xhdGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBza2lwID0gTWF0aC5taW4ocGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgYWN0aXZlSW5kZXgpO1xuICAgIHNuYXBJbmRleCA9IHNraXAgKyBNYXRoLmZsb29yKChhY3RpdmVJbmRleCAtIHNraXApIC8gcGFyYW1zLnNsaWRlc1Blckdyb3VwKTtcbiAgfVxuXG4gIGlmIChzbmFwSW5kZXggPj0gc25hcEdyaWQubGVuZ3RoKSBzbmFwSW5kZXggPSBzbmFwR3JpZC5sZW5ndGggLSAxO1xuXG4gIGlmIChhY3RpdmVJbmRleCA9PT0gcHJldmlvdXNJbmRleCkge1xuICAgIGlmIChzbmFwSW5kZXggIT09IHByZXZpb3VzU25hcEluZGV4KSB7XG4gICAgICBzd2lwZXIuc25hcEluZGV4ID0gc25hcEluZGV4O1xuICAgICAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSAvLyBHZXQgcmVhbCBpbmRleFxuXG5cbiAgdmFyIHJlYWxJbmRleCA9IHBhcnNlSW50KHN3aXBlci5zbGlkZXMuZXEoYWN0aXZlSW5kZXgpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgfHwgYWN0aXZlSW5kZXgsIDEwKTtcbiAgZXh0ZW5kKHN3aXBlciwge1xuICAgIHNuYXBJbmRleDogc25hcEluZGV4LFxuICAgIHJlYWxJbmRleDogcmVhbEluZGV4LFxuICAgIHByZXZpb3VzSW5kZXg6IHByZXZpb3VzSW5kZXgsXG4gICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4XG4gIH0pO1xuICBzd2lwZXIuZW1pdCgnYWN0aXZlSW5kZXhDaGFuZ2UnKTtcbiAgc3dpcGVyLmVtaXQoJ3NuYXBJbmRleENoYW5nZScpO1xuXG4gIGlmIChwcmV2aW91c1JlYWxJbmRleCAhPT0gcmVhbEluZGV4KSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWxJbmRleENoYW5nZScpO1xuICB9XG5cbiAgaWYgKHN3aXBlci5pbml0aWFsaXplZCB8fCBzd2lwZXIucGFyYW1zLnJ1bkNhbGxiYWNrc09uSW5pdCkge1xuICAgIHN3aXBlci5lbWl0KCdzbGlkZUNoYW5nZScpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQXV0b0hlaWdodChzcGVlZCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIGFjdGl2ZVNsaWRlcyA9IFtdO1xuICB2YXIgaXNWaXJ0dWFsID0gc3dpcGVyLnZpcnR1YWwgJiYgc3dpcGVyLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHZhciBuZXdIZWlnaHQgPSAwO1xuICB2YXIgaTtcblxuICBpZiAodHlwZW9mIHNwZWVkID09PSAnbnVtYmVyJykge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHNwZWVkKTtcbiAgfSBlbHNlIGlmIChzcGVlZCA9PT0gdHJ1ZSkge1xuICAgIHN3aXBlci5zZXRUcmFuc2l0aW9uKHN3aXBlci5wYXJhbXMuc3BlZWQpO1xuICB9XG5cbiAgdmFyIGdldFNsaWRlQnlJbmRleCA9IGZ1bmN0aW9uIGdldFNsaWRlQnlJbmRleChpbmRleCkge1xuICAgIGlmIChpc1ZpcnR1YWwpIHtcbiAgICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSwgMTApID09PSBpbmRleDtcbiAgICAgIH0pWzBdO1xuICAgIH1cblxuICAgIHJldHVybiBzd2lwZXIuc2xpZGVzLmVxKGluZGV4KVswXTtcbiAgfTsgLy8gRmluZCBzbGlkZXMgY3VycmVudGx5IGluIHZpZXdcblxuXG4gIGlmIChzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgIT09ICdhdXRvJyAmJiBzd2lwZXIucGFyYW1zLnNsaWRlc1BlclZpZXcgPiAxKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLmVhY2goZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgTWF0aC5jZWlsKHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyVmlldyk7IGkgKz0gMSkge1xuICAgICAgICB2YXIgaW5kZXggPSBzd2lwZXIuYWN0aXZlSW5kZXggKyBpO1xuICAgICAgICBpZiAoaW5kZXggPiBzd2lwZXIuc2xpZGVzLmxlbmd0aCAmJiAhaXNWaXJ0dWFsKSBicmVhaztcbiAgICAgICAgYWN0aXZlU2xpZGVzLnB1c2goZ2V0U2xpZGVCeUluZGV4KGluZGV4KSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFjdGl2ZVNsaWRlcy5wdXNoKGdldFNsaWRlQnlJbmRleChzd2lwZXIuYWN0aXZlSW5kZXgpKTtcbiAgfSAvLyBGaW5kIG5ldyBoZWlnaHQgZnJvbSBoaWdoZXN0IHNsaWRlIGluIHZpZXdcblxuXG4gIGZvciAoaSA9IDA7IGkgPCBhY3RpdmVTbGlkZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodHlwZW9mIGFjdGl2ZVNsaWRlc1tpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBoZWlnaHQgPSBhY3RpdmVTbGlkZXNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3SGVpZ2h0ID0gaGVpZ2h0ID4gbmV3SGVpZ2h0ID8gaGVpZ2h0IDogbmV3SGVpZ2h0O1xuICAgIH1cbiAgfSAvLyBVcGRhdGUgSGVpZ2h0XG5cblxuICBpZiAobmV3SGVpZ2h0KSBzd2lwZXIuJHdyYXBwZXJFbC5jc3MoJ2hlaWdodCcsIG5ld0hlaWdodCArIFwicHhcIik7XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNsaWNrZWRTbGlkZShlKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHNsaWRlID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzKVswXTtcbiAgdmFyIHNsaWRlRm91bmQgPSBmYWxzZTtcbiAgdmFyIHNsaWRlSW5kZXg7XG5cbiAgaWYgKHNsaWRlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzd2lwZXIuc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3dpcGVyLnNsaWRlc1tpXSA9PT0gc2xpZGUpIHtcbiAgICAgICAgc2xpZGVGb3VuZCA9IHRydWU7XG4gICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2xpZGUgJiYgc2xpZGVGb3VuZCkge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSBzbGlkZTtcblxuICAgIGlmIChzd2lwZXIudmlydHVhbCAmJiBzd2lwZXIucGFyYW1zLnZpcnR1YWwuZW5hYmxlZCkge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHBhcnNlSW50KCQoc2xpZGUpLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JyksIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHN3aXBlci5jbGlja2VkU2xpZGUgPSB1bmRlZmluZWQ7XG4gICAgc3dpcGVyLmNsaWNrZWRJbmRleCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGFyYW1zLnNsaWRlVG9DbGlja2VkU2xpZGUgJiYgc3dpcGVyLmNsaWNrZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHN3aXBlci5jbGlja2VkSW5kZXggIT09IHN3aXBlci5hY3RpdmVJbmRleCkge1xuICAgIHN3aXBlci5zbGlkZVRvQ2xpY2tlZFNsaWRlKCk7XG4gIH1cbn0iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcyh0cmFuc2xhdGUpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2xhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG11bHRpcGxpZXIgPSBzd2lwZXIucnRsVHJhbnNsYXRlID8gLTEgOiAxOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICAgIHRyYW5zbGF0ZSA9IHN3aXBlciAmJiBzd2lwZXIudHJhbnNsYXRlICYmIHN3aXBlci50cmFuc2xhdGUgKiBtdWx0aXBsaWVyIHx8IDA7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyIHRyYW5zbGF0ZXNEaWZmID0gc3dpcGVyLm1heFRyYW5zbGF0ZSgpIC0gc3dpcGVyLm1pblRyYW5zbGF0ZSgpO1xuICB2YXIgcHJvZ3Jlc3MgPSBzd2lwZXIucHJvZ3Jlc3MsXG4gICAgICBpc0JlZ2lubmluZyA9IHN3aXBlci5pc0JlZ2lubmluZyxcbiAgICAgIGlzRW5kID0gc3dpcGVyLmlzRW5kO1xuICB2YXIgd2FzQmVnaW5uaW5nID0gaXNCZWdpbm5pbmc7XG4gIHZhciB3YXNFbmQgPSBpc0VuZDtcblxuICBpZiAodHJhbnNsYXRlc0RpZmYgPT09IDApIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgaXNCZWdpbm5pbmcgPSB0cnVlO1xuICAgIGlzRW5kID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9ncmVzcyA9ICh0cmFuc2xhdGUgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpIC8gdHJhbnNsYXRlc0RpZmY7XG4gICAgaXNCZWdpbm5pbmcgPSBwcm9ncmVzcyA8PSAwO1xuICAgIGlzRW5kID0gcHJvZ3Jlc3MgPj0gMTtcbiAgfVxuXG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICBwcm9ncmVzczogcHJvZ3Jlc3MsXG4gICAgaXNCZWdpbm5pbmc6IGlzQmVnaW5uaW5nLFxuICAgIGlzRW5kOiBpc0VuZFxuICB9KTtcbiAgaWYgKHBhcmFtcy53YXRjaFNsaWRlc1Byb2dyZXNzIHx8IHBhcmFtcy53YXRjaFNsaWRlc1Zpc2liaWxpdHkgfHwgcGFyYW1zLmNlbnRlcmVkU2xpZGVzICYmIHBhcmFtcy5hdXRvSGVpZ2h0KSBzd2lwZXIudXBkYXRlU2xpZGVzUHJvZ3Jlc3ModHJhbnNsYXRlKTtcblxuICBpZiAoaXNCZWdpbm5pbmcgJiYgIXdhc0JlZ2lubmluZykge1xuICAgIHN3aXBlci5lbWl0KCdyZWFjaEJlZ2lubmluZyB0b0VkZ2UnKTtcbiAgfVxuXG4gIGlmIChpc0VuZCAmJiAhd2FzRW5kKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3JlYWNoRW5kIHRvRWRnZScpO1xuICB9XG5cbiAgaWYgKHdhc0JlZ2lubmluZyAmJiAhaXNCZWdpbm5pbmcgfHwgd2FzRW5kICYmICFpc0VuZCkge1xuICAgIHN3aXBlci5lbWl0KCdmcm9tRWRnZScpO1xuICB9XG5cbiAgc3dpcGVyLmVtaXQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xufSIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XG4gIHZhciBzd2lwZXIgPSB0aGlzO1xuICB2YXIgd2lkdGg7XG4gIHZhciBoZWlnaHQ7XG4gIHZhciAkZWwgPSBzd2lwZXIuJGVsO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3dpcGVyLnBhcmFtcy53aWR0aCAhPT0gbnVsbCkge1xuICAgIHdpZHRoID0gc3dpcGVyLnBhcmFtcy53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB3aWR0aCA9ICRlbFswXS5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3dpcGVyLnBhcmFtcy5oZWlnaHQgIT09ICd1bmRlZmluZWQnICYmIHN3aXBlci5wYXJhbXMuaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgaGVpZ2h0ID0gc3dpcGVyLnBhcmFtcy5oZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgaGVpZ2h0ID0gJGVsWzBdLmNsaWVudEhlaWdodDtcbiAgfVxuXG4gIGlmICh3aWR0aCA9PT0gMCAmJiBzd2lwZXIuaXNIb3Jpem9udGFsKCkgfHwgaGVpZ2h0ID09PSAwICYmIHN3aXBlci5pc1ZlcnRpY2FsKCkpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gU3VidHJhY3QgcGFkZGluZ3NcblxuXG4gIHdpZHRoID0gd2lkdGggLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLWxlZnQnKSB8fCAwLCAxMCkgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXJpZ2h0JykgfHwgMCwgMTApO1xuICBoZWlnaHQgPSBoZWlnaHQgLSBwYXJzZUludCgkZWwuY3NzKCdwYWRkaW5nLXRvcCcpIHx8IDAsIDEwKSAtIHBhcnNlSW50KCRlbC5jc3MoJ3BhZGRpbmctYm90dG9tJykgfHwgMCwgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKHdpZHRoKSkgd2lkdGggPSAwO1xuICBpZiAoTnVtYmVyLmlzTmFOKGhlaWdodCkpIGhlaWdodCA9IDA7XG4gIGV4dGVuZChzd2lwZXIsIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgc2l6ZTogc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gd2lkdGggOiBoZWlnaHRcbiAgfSk7XG59IiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzKCkge1xuICB2YXIgc3dpcGVyID0gdGhpcztcblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25MYWJlbChwcm9wZXJ0eSkge1xuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgJ3dpZHRoJzogJ2hlaWdodCcsXG4gICAgICAnbWFyZ2luLXRvcCc6ICdtYXJnaW4tbGVmdCcsXG4gICAgICAnbWFyZ2luLWJvdHRvbSAnOiAnbWFyZ2luLXJpZ2h0JyxcbiAgICAgICdtYXJnaW4tbGVmdCc6ICdtYXJnaW4tdG9wJyxcbiAgICAgICdtYXJnaW4tcmlnaHQnOiAnbWFyZ2luLWJvdHRvbScsXG4gICAgICAncGFkZGluZy1sZWZ0JzogJ3BhZGRpbmctdG9wJyxcbiAgICAgICdwYWRkaW5nLXJpZ2h0JzogJ3BhZGRpbmctYm90dG9tJyxcbiAgICAgICdtYXJnaW5SaWdodCc6ICdtYXJnaW5Cb3R0b20nXG4gICAgfVtwcm9wZXJ0eV07XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKG5vZGUsIGxhYmVsKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobm9kZS5nZXRQcm9wZXJ0eVZhbHVlKGdldERpcmVjdGlvbkxhYmVsKGxhYmVsKSkgfHwgMCk7XG4gIH1cblxuICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcztcbiAgdmFyICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIHN3aXBlclNpemUgPSBzd2lwZXIuc2l6ZSxcbiAgICAgIHJ0bCA9IHN3aXBlci5ydGxUcmFuc2xhdGUsXG4gICAgICB3cm9uZ1JUTCA9IHN3aXBlci53cm9uZ1JUTDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHZhciBwcmV2aW91c1NsaWRlc0xlbmd0aCA9IGlzVmlydHVhbCA/IHN3aXBlci52aXJ0dWFsLnNsaWRlcy5sZW5ndGggOiBzd2lwZXIuc2xpZGVzLmxlbmd0aDtcbiAgdmFyIHNsaWRlcyA9ICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNsaWRlQ2xhc3MpO1xuICB2YXIgc2xpZGVzTGVuZ3RoID0gaXNWaXJ0dWFsID8gc3dpcGVyLnZpcnR1YWwuc2xpZGVzLmxlbmd0aCA6IHNsaWRlcy5sZW5ndGg7XG4gIHZhciBzbmFwR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzR3JpZCA9IFtdO1xuICB2YXIgc2xpZGVzU2l6ZXNHcmlkID0gW107XG4gIHZhciBvZmZzZXRCZWZvcmUgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QmVmb3JlO1xuXG4gIGlmICh0eXBlb2Ygb2Zmc2V0QmVmb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb2Zmc2V0QmVmb3JlID0gcGFyYW1zLnNsaWRlc09mZnNldEJlZm9yZS5jYWxsKHN3aXBlcik7XG4gIH1cblxuICB2YXIgb2Zmc2V0QWZ0ZXIgPSBwYXJhbXMuc2xpZGVzT2Zmc2V0QWZ0ZXI7XG5cbiAgaWYgKHR5cGVvZiBvZmZzZXRBZnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9mZnNldEFmdGVyID0gcGFyYW1zLnNsaWRlc09mZnNldEFmdGVyLmNhbGwoc3dpcGVyKTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoID0gc3dpcGVyLnNuYXBHcmlkLmxlbmd0aDtcbiAgdmFyIHByZXZpb3VzU2xpZGVzR3JpZExlbmd0aCA9IHN3aXBlci5zbGlkZXNHcmlkLmxlbmd0aDtcbiAgdmFyIHNwYWNlQmV0d2VlbiA9IHBhcmFtcy5zcGFjZUJldHdlZW47XG4gIHZhciBzbGlkZVBvc2l0aW9uID0gLW9mZnNldEJlZm9yZTtcbiAgdmFyIHByZXZTbGlkZVNpemUgPSAwO1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIGlmICh0eXBlb2Ygc3dpcGVyU2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIHNwYWNlQmV0d2VlbiA9PT0gJ3N0cmluZycgJiYgc3BhY2VCZXR3ZWVuLmluZGV4T2YoJyUnKSA+PSAwKSB7XG4gICAgc3BhY2VCZXR3ZWVuID0gcGFyc2VGbG9hdChzcGFjZUJldHdlZW4ucmVwbGFjZSgnJScsICcnKSkgLyAxMDAgKiBzd2lwZXJTaXplO1xuICB9XG5cbiAgc3dpcGVyLnZpcnR1YWxTaXplID0gLXNwYWNlQmV0d2VlbjsgLy8gcmVzZXQgbWFyZ2luc1xuXG4gIGlmIChydGwpIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpbkxlZnQ6ICcnLFxuICAgIG1hcmdpbkJvdHRvbTogJycsXG4gICAgbWFyZ2luVG9wOiAnJ1xuICB9KTtlbHNlIHNsaWRlcy5jc3Moe1xuICAgIG1hcmdpblJpZ2h0OiAnJyxcbiAgICBtYXJnaW5Cb3R0b206ICcnLFxuICAgIG1hcmdpblRvcDogJydcbiAgfSk7XG4gIHZhciBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzO1xuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIGlmIChNYXRoLmZsb29yKHNsaWRlc0xlbmd0aCAvIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pID09PSBzbGlkZXNMZW5ndGggLyBzd2lwZXIucGFyYW1zLnNsaWRlc1BlckNvbHVtbikge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IHNsaWRlc0xlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2xpZGVzTnVtYmVyRXZlblRvUm93cyA9IE1hdGguY2VpbChzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKSAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW47XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ICE9PSAnYXV0bycgJiYgcGFyYW1zLnNsaWRlc1BlckNvbHVtbkZpbGwgPT09ICdyb3cnKSB7XG4gICAgICBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzID0gTWF0aC5tYXgoc2xpZGVzTnVtYmVyRXZlblRvUm93cywgcGFyYW1zLnNsaWRlc1BlclZpZXcgKiBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcbiAgICB9XG4gIH0gLy8gQ2FsYyBzbGlkZXNcblxuXG4gIHZhciBzbGlkZVNpemU7XG4gIHZhciBzbGlkZXNQZXJDb2x1bW4gPSBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uO1xuICB2YXIgc2xpZGVzUGVyUm93ID0gc2xpZGVzTnVtYmVyRXZlblRvUm93cyAvIHNsaWRlc1BlckNvbHVtbjtcbiAgdmFyIG51bUZ1bGxDb2x1bW5zID0gTWF0aC5mbG9vcihzbGlkZXNMZW5ndGggLyBwYXJhbXMuc2xpZGVzUGVyQ29sdW1uKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWRlc0xlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVTaXplID0gMDtcbiAgICB2YXIgc2xpZGUgPSBzbGlkZXMuZXEoaSk7XG5cbiAgICBpZiAocGFyYW1zLnNsaWRlc1BlckNvbHVtbiA+IDEpIHtcbiAgICAgIC8vIFNldCBzbGlkZXMgb3JkZXJcbiAgICAgIHZhciBuZXdTbGlkZU9yZGVySW5kZXggPSB2b2lkIDA7XG4gICAgICB2YXIgY29sdW1uID0gdm9pZCAwO1xuICAgICAgdmFyIHJvdyA9IHZvaWQgMDtcblxuICAgICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJDb2x1bW5GaWxsID09PSAncm93JyAmJiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPiAxKSB7XG4gICAgICAgIHZhciBncm91cEluZGV4ID0gTWF0aC5mbG9vcihpIC8gKHBhcmFtcy5zbGlkZXNQZXJHcm91cCAqIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4pKTtcbiAgICAgICAgdmFyIHNsaWRlSW5kZXhJbkdyb3VwID0gaSAtIHBhcmFtcy5zbGlkZXNQZXJDb2x1bW4gKiBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgKiBncm91cEluZGV4O1xuICAgICAgICB2YXIgY29sdW1uc0luR3JvdXAgPSBncm91cEluZGV4ID09PSAwID8gcGFyYW1zLnNsaWRlc1Blckdyb3VwIDogTWF0aC5taW4oTWF0aC5jZWlsKChzbGlkZXNMZW5ndGggLSBncm91cEluZGV4ICogc2xpZGVzUGVyQ29sdW1uICogcGFyYW1zLnNsaWRlc1Blckdyb3VwKSAvIHNsaWRlc1BlckNvbHVtbiksIHBhcmFtcy5zbGlkZXNQZXJHcm91cCk7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3Ioc2xpZGVJbmRleEluR3JvdXAgLyBjb2x1bW5zSW5Hcm91cCk7XG4gICAgICAgIGNvbHVtbiA9IHNsaWRlSW5kZXhJbkdyb3VwIC0gcm93ICogY29sdW1uc0luR3JvdXAgKyBncm91cEluZGV4ICogcGFyYW1zLnNsaWRlc1Blckdyb3VwO1xuICAgICAgICBuZXdTbGlkZU9yZGVySW5kZXggPSBjb2x1bW4gKyByb3cgKiBzbGlkZXNOdW1iZXJFdmVuVG9Sb3dzIC8gc2xpZGVzUGVyQ29sdW1uO1xuICAgICAgICBzbGlkZS5jc3Moe1xuICAgICAgICAgICctd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbW96LWJveC1vcmRpbmFsLWdyb3VwJzogbmV3U2xpZGVPcmRlckluZGV4LFxuICAgICAgICAgICctbXMtZmxleC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICAnLXdlYmtpdC1vcmRlcic6IG5ld1NsaWRlT3JkZXJJbmRleCxcbiAgICAgICAgICBvcmRlcjogbmV3U2xpZGVPcmRlckluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uRmlsbCA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihpIC8gc2xpZGVzUGVyQ29sdW1uKTtcbiAgICAgICAgcm93ID0gaSAtIGNvbHVtbiAqIHNsaWRlc1BlckNvbHVtbjtcblxuICAgICAgICBpZiAoY29sdW1uID4gbnVtRnVsbENvbHVtbnMgfHwgY29sdW1uID09PSBudW1GdWxsQ29sdW1ucyAmJiByb3cgPT09IHNsaWRlc1BlckNvbHVtbiAtIDEpIHtcbiAgICAgICAgICByb3cgKz0gMTtcblxuICAgICAgICAgIGlmIChyb3cgPj0gc2xpZGVzUGVyQ29sdW1uKSB7XG4gICAgICAgICAgICByb3cgPSAwO1xuICAgICAgICAgICAgY29sdW1uICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKGkgLyBzbGlkZXNQZXJSb3cpO1xuICAgICAgICBjb2x1bW4gPSBpIC0gcm93ICogc2xpZGVzUGVyUm93O1xuICAgICAgfVxuXG4gICAgICBzbGlkZS5jc3MoZ2V0RGlyZWN0aW9uTGFiZWwoJ21hcmdpbi10b3AnKSwgcm93ICE9PSAwID8gcGFyYW1zLnNwYWNlQmV0d2VlbiAmJiBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiIDogJycpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgaWYgKHBhcmFtcy5zbGlkZXNQZXJWaWV3ID09PSAnYXV0bycpIHtcbiAgICAgIHZhciBzbGlkZVN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoc2xpZGVbMF0pO1xuICAgICAgdmFyIGN1cnJlbnRUcmFuc2Zvcm0gPSBzbGlkZVswXS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICB2YXIgY3VycmVudFdlYktpdFRyYW5zZm9ybSA9IHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybTtcblxuICAgICAgaWYgKGN1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgc2xpZGVbMF0uc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFdlYktpdFRyYW5zZm9ybSkge1xuICAgICAgICBzbGlkZVswXS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSB7XG4gICAgICAgIHNsaWRlU2l6ZSA9IHN3aXBlci5pc0hvcml6b250YWwoKSA/IHNsaWRlLm91dGVyV2lkdGgodHJ1ZSkgOiBzbGlkZS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB2YXIgd2lkdGggPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnd2lkdGgnKTtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSBnZXREaXJlY3Rpb25Qcm9wZXJ0eVZhbHVlKHNsaWRlU3R5bGVzLCAnbWFyZ2luLWxlZnQnKTtcbiAgICAgICAgdmFyIG1hcmdpblJpZ2h0ID0gZ2V0RGlyZWN0aW9uUHJvcGVydHlWYWx1ZShzbGlkZVN0eWxlcywgJ21hcmdpbi1yaWdodCcpO1xuICAgICAgICB2YXIgYm94U2l6aW5nID0gc2xpZGVTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnYm94LXNpemluZycpO1xuXG4gICAgICAgIGlmIChib3hTaXppbmcgJiYgYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIG1hcmdpbkxlZnQgKyBtYXJnaW5SaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3NsaWRlJCA9IHNsaWRlWzBdLFxuICAgICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9zbGlkZSQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgIG9mZnNldFdpZHRoID0gX3NsaWRlJC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBzbGlkZVNpemUgPSB3aWR0aCArIHBhZGRpbmdMZWZ0ICsgcGFkZGluZ1JpZ2h0ICsgbWFyZ2luTGVmdCArIG1hcmdpblJpZ2h0ICsgKG9mZnNldFdpZHRoIC0gY2xpZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLnRyYW5zZm9ybSA9IGN1cnJlbnRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50V2ViS2l0VHJhbnNmb3JtKSB7XG4gICAgICAgIHNsaWRlWzBdLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IGN1cnJlbnRXZWJLaXRUcmFuc2Zvcm07XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVNpemUgPSBNYXRoLmZsb29yKHNsaWRlU2l6ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNsaWRlU2l6ZSA9IChzd2lwZXJTaXplIC0gKHBhcmFtcy5zbGlkZXNQZXJWaWV3IC0gMSkgKiBzcGFjZUJldHdlZW4pIC8gcGFyYW1zLnNsaWRlc1BlclZpZXc7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVTaXplID0gTWF0aC5mbG9vcihzbGlkZVNpemUpO1xuXG4gICAgICBpZiAoc2xpZGVzW2ldKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZVtnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzbGlkZVNpemUgKyBcInB4XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNsaWRlc1tpXSkge1xuICAgICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlU2l6ZSA9IHNsaWRlU2l6ZTtcbiAgICB9XG5cbiAgICBzbGlkZXNTaXplc0dyaWQucHVzaChzbGlkZVNpemUpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgc2xpZGVQb3NpdGlvbiA9IHNsaWRlUG9zaXRpb24gKyBzbGlkZVNpemUgLyAyICsgcHJldlNsaWRlU2l6ZSAvIDIgKyBzcGFjZUJldHdlZW47XG4gICAgICBpZiAocHJldlNsaWRlU2l6ZSA9PT0gMCAmJiBpICE9PSAwKSBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiAtIHN3aXBlclNpemUgLyAyIC0gc3BhY2VCZXR3ZWVuO1xuICAgICAgaWYgKGkgPT09IDApIHNsaWRlUG9zaXRpb24gPSBzbGlkZVBvc2l0aW9uIC0gc3dpcGVyU2l6ZSAvIDIgLSBzcGFjZUJldHdlZW47XG4gICAgICBpZiAoTWF0aC5hYnMoc2xpZGVQb3NpdGlvbikgPCAxIC8gMTAwMCkgc2xpZGVQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAocGFyYW1zLnJvdW5kTGVuZ3Rocykgc2xpZGVQb3NpdGlvbiA9IE1hdGguZmxvb3Ioc2xpZGVQb3NpdGlvbik7XG4gICAgICBpZiAoaW5kZXggJSBwYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBzbGlkZVBvc2l0aW9uID0gTWF0aC5mbG9vcihzbGlkZVBvc2l0aW9uKTtcbiAgICAgIGlmICgoaW5kZXggLSBNYXRoLm1pbihzd2lwZXIucGFyYW1zLnNsaWRlc1Blckdyb3VwU2tpcCwgaW5kZXgpKSAlIHN3aXBlci5wYXJhbXMuc2xpZGVzUGVyR3JvdXAgPT09IDApIHNuYXBHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZXNHcmlkLnB1c2goc2xpZGVQb3NpdGlvbik7XG4gICAgICBzbGlkZVBvc2l0aW9uID0gc2xpZGVQb3NpdGlvbiArIHNsaWRlU2l6ZSArIHNwYWNlQmV0d2VlbjtcbiAgICB9XG5cbiAgICBzd2lwZXIudmlydHVhbFNpemUgKz0gc2xpZGVTaXplICsgc3BhY2VCZXR3ZWVuO1xuICAgIHByZXZTbGlkZVNpemUgPSBzbGlkZVNpemU7XG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIHN3aXBlci52aXJ0dWFsU2l6ZSA9IE1hdGgubWF4KHN3aXBlci52aXJ0dWFsU2l6ZSwgc3dpcGVyU2l6ZSkgKyBvZmZzZXRBZnRlcjtcbiAgdmFyIG5ld1NsaWRlc0dyaWQ7XG5cbiAgaWYgKHJ0bCAmJiB3cm9uZ1JUTCAmJiAocGFyYW1zLmVmZmVjdCA9PT0gJ3NsaWRlJyB8fCBwYXJhbXMuZWZmZWN0ID09PSAnY292ZXJmbG93JykpIHtcbiAgICAkd3JhcHBlckVsLmNzcyh7XG4gICAgICB3aWR0aDogc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIlxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5zZXRXcmFwcGVyU2l6ZSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3M7XG5cbiAgICAkd3JhcHBlckVsLmNzcygoXyR3cmFwcGVyRWwkY3NzID0ge30sIF8kd3JhcHBlckVsJGNzc1tnZXREaXJlY3Rpb25MYWJlbCgnd2lkdGgnKV0gPSBzd2lwZXIudmlydHVhbFNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuICsgXCJweFwiLCBfJHdyYXBwZXJFbCRjc3MpKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuc2xpZGVzUGVyQ29sdW1uID4gMSkge1xuICAgIHZhciBfJHdyYXBwZXJFbCRjc3MyO1xuXG4gICAgc3dpcGVyLnZpcnR1YWxTaXplID0gKHNsaWRlU2l6ZSArIHBhcmFtcy5zcGFjZUJldHdlZW4pICogc2xpZGVzTnVtYmVyRXZlblRvUm93cztcbiAgICBzd2lwZXIudmlydHVhbFNpemUgPSBNYXRoLmNlaWwoc3dpcGVyLnZpcnR1YWxTaXplIC8gcGFyYW1zLnNsaWRlc1BlckNvbHVtbikgLSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgICR3cmFwcGVyRWwuY3NzKChfJHdyYXBwZXJFbCRjc3MyID0ge30sIF8kd3JhcHBlckVsJGNzczJbZ2V0RGlyZWN0aW9uTGFiZWwoJ3dpZHRoJyldID0gc3dpcGVyLnZpcnR1YWxTaXplICsgcGFyYW1zLnNwYWNlQmV0d2VlbiArIFwicHhcIiwgXyR3cmFwcGVyRWwkY3NzMikpO1xuXG4gICAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcykge1xuICAgICAgbmV3U2xpZGVzR3JpZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgc25hcEdyaWQubGVuZ3RoOyBfaSArPSAxKSB7XG4gICAgICAgIHZhciBzbGlkZXNHcmlkSXRlbSA9IHNuYXBHcmlkW19pXTtcbiAgICAgICAgaWYgKHBhcmFtcy5yb3VuZExlbmd0aHMpIHNsaWRlc0dyaWRJdGVtID0gTWF0aC5mbG9vcihzbGlkZXNHcmlkSXRlbSk7XG4gICAgICAgIGlmIChzbmFwR3JpZFtfaV0gPCBzd2lwZXIudmlydHVhbFNpemUgKyBzbmFwR3JpZFswXSkgbmV3U2xpZGVzR3JpZC5wdXNoKHNsaWRlc0dyaWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuICAgIH1cbiAgfSAvLyBSZW1vdmUgbGFzdCBncmlkIGVsZW1lbnRzIGRlcGVuZGluZyBvbiB3aWR0aFxuXG5cbiAgaWYgKCFwYXJhbXMuY2VudGVyZWRTbGlkZXMpIHtcbiAgICBuZXdTbGlkZXNHcmlkID0gW107XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzbmFwR3JpZC5sZW5ndGg7IF9pMiArPSAxKSB7XG4gICAgICB2YXIgX3NsaWRlc0dyaWRJdGVtID0gc25hcEdyaWRbX2kyXTtcbiAgICAgIGlmIChwYXJhbXMucm91bmRMZW5ndGhzKSBfc2xpZGVzR3JpZEl0ZW0gPSBNYXRoLmZsb29yKF9zbGlkZXNHcmlkSXRlbSk7XG5cbiAgICAgIGlmIChzbmFwR3JpZFtfaTJdIDw9IHN3aXBlci52aXJ0dWFsU2l6ZSAtIHN3aXBlclNpemUpIHtcbiAgICAgICAgbmV3U2xpZGVzR3JpZC5wdXNoKF9zbGlkZXNHcmlkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc25hcEdyaWQgPSBuZXdTbGlkZXNHcmlkO1xuXG4gICAgaWYgKE1hdGguZmxvb3Ioc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSkgLSBNYXRoLmZsb29yKHNuYXBHcmlkW3NuYXBHcmlkLmxlbmd0aCAtIDFdKSA+IDEpIHtcbiAgICAgIHNuYXBHcmlkLnB1c2goc3dpcGVyLnZpcnR1YWxTaXplIC0gc3dpcGVyU2l6ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNuYXBHcmlkLmxlbmd0aCA9PT0gMCkgc25hcEdyaWQgPSBbMF07XG5cbiAgaWYgKHBhcmFtcy5zcGFjZUJldHdlZW4gIT09IDApIHtcbiAgICB2YXIgX3NsaWRlcyRmaWx0ZXIkY3NzO1xuXG4gICAgdmFyIGtleSA9IHN3aXBlci5pc0hvcml6b250YWwoKSAmJiBydGwgPyAnbWFyZ2luTGVmdCcgOiBnZXREaXJlY3Rpb25MYWJlbCgnbWFyZ2luUmlnaHQnKTtcbiAgICBzbGlkZXMuZmlsdGVyKGZ1bmN0aW9uIChfLCBzbGlkZUluZGV4KSB7XG4gICAgICBpZiAoIXBhcmFtcy5jc3NNb2RlKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHNsaWRlSW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSkuY3NzKChfc2xpZGVzJGZpbHRlciRjc3MgPSB7fSwgX3NsaWRlcyRmaWx0ZXIkY3NzW2tleV0gPSBzcGFjZUJldHdlZW4gKyBcInB4XCIsIF9zbGlkZXMkZmlsdGVyJGNzcykpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuY2VudGVyZWRTbGlkZXNCb3VuZHMpIHtcbiAgICB2YXIgYWxsU2xpZGVzU2l6ZSA9IDA7XG4gICAgc2xpZGVzU2l6ZXNHcmlkLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlU2l6ZVZhbHVlKSB7XG4gICAgICBhbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgYWxsU2xpZGVzU2l6ZSAtPSBwYXJhbXMuc3BhY2VCZXR3ZWVuO1xuICAgIHZhciBtYXhTbmFwID0gYWxsU2xpZGVzU2l6ZSAtIHN3aXBlclNpemU7XG4gICAgc25hcEdyaWQgPSBzbmFwR3JpZC5tYXAoZnVuY3Rpb24gKHNuYXApIHtcbiAgICAgIGlmIChzbmFwIDwgMCkgcmV0dXJuIC1vZmZzZXRCZWZvcmU7XG4gICAgICBpZiAoc25hcCA+IG1heFNuYXApIHJldHVybiBtYXhTbmFwICsgb2Zmc2V0QWZ0ZXI7XG4gICAgICByZXR1cm4gc25hcDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuY2VudGVySW5zdWZmaWNpZW50U2xpZGVzKSB7XG4gICAgdmFyIF9hbGxTbGlkZXNTaXplID0gMDtcbiAgICBzbGlkZXNTaXplc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGVTaXplVmFsdWUpIHtcbiAgICAgIF9hbGxTbGlkZXNTaXplICs9IHNsaWRlU2l6ZVZhbHVlICsgKHBhcmFtcy5zcGFjZUJldHdlZW4gPyBwYXJhbXMuc3BhY2VCZXR3ZWVuIDogMCk7XG4gICAgfSk7XG4gICAgX2FsbFNsaWRlc1NpemUgLT0gcGFyYW1zLnNwYWNlQmV0d2VlbjtcblxuICAgIGlmIChfYWxsU2xpZGVzU2l6ZSA8IHN3aXBlclNpemUpIHtcbiAgICAgIHZhciBhbGxTbGlkZXNPZmZzZXQgPSAoc3dpcGVyU2l6ZSAtIF9hbGxTbGlkZXNTaXplKSAvIDI7XG4gICAgICBzbmFwR3JpZC5mb3JFYWNoKGZ1bmN0aW9uIChzbmFwLCBzbmFwSW5kZXgpIHtcbiAgICAgICAgc25hcEdyaWRbc25hcEluZGV4XSA9IHNuYXAgLSBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICAgIHNsaWRlc0dyaWQuZm9yRWFjaChmdW5jdGlvbiAoc25hcCwgc25hcEluZGV4KSB7XG4gICAgICAgIHNsaWRlc0dyaWRbc25hcEluZGV4XSA9IHNuYXAgKyBhbGxTbGlkZXNPZmZzZXQ7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBleHRlbmQoc3dpcGVyLCB7XG4gICAgc2xpZGVzOiBzbGlkZXMsXG4gICAgc25hcEdyaWQ6IHNuYXBHcmlkLFxuICAgIHNsaWRlc0dyaWQ6IHNsaWRlc0dyaWQsXG4gICAgc2xpZGVzU2l6ZXNHcmlkOiBzbGlkZXNTaXplc0dyaWRcbiAgfSk7XG5cbiAgaWYgKHNsaWRlc0xlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNMZW5ndGgpIHtcbiAgICBzd2lwZXIuZW1pdCgnc2xpZGVzTGVuZ3RoQ2hhbmdlJyk7XG4gIH1cblxuICBpZiAoc25hcEdyaWQubGVuZ3RoICE9PSBwcmV2aW91c1NuYXBHcmlkTGVuZ3RoKSB7XG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdykgc3dpcGVyLmNoZWNrT3ZlcmZsb3coKTtcbiAgICBzd2lwZXIuZW1pdCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChzbGlkZXNHcmlkLmxlbmd0aCAhPT0gcHJldmlvdXNTbGlkZXNHcmlkTGVuZ3RoKSB7XG4gICAgc3dpcGVyLmVtaXQoJ3NsaWRlc0dyaWRMZW5ndGhDaGFuZ2UnKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNQcm9ncmVzcyB8fCBwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5KSB7XG4gICAgc3dpcGVyLnVwZGF0ZVNsaWRlc09mZnNldCgpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU2xpZGVzQ2xhc3NlcygpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcGFyYW1zID0gc3dpcGVyLnBhcmFtcyxcbiAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbCxcbiAgICAgIGFjdGl2ZUluZGV4ID0gc3dpcGVyLmFjdGl2ZUluZGV4LFxuICAgICAgcmVhbEluZGV4ID0gc3dpcGVyLnJlYWxJbmRleDtcbiAgdmFyIGlzVmlydHVhbCA9IHN3aXBlci52aXJ0dWFsICYmIHBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XG4gIHNsaWRlcy5yZW1vdmVDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyArIFwiIFwiICsgcGFyYW1zLnNsaWRlTmV4dENsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVQcmV2Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzICsgXCIgXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MgKyBcIiBcIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyk7XG4gIHZhciBhY3RpdmVTbGlkZTtcblxuICBpZiAoaXNWaXJ0dWFsKSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzd2lwZXIuJHdyYXBwZXJFbC5maW5kKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIltkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBhY3RpdmVJbmRleCArIFwiXFxcIl1cIik7XG4gIH0gZWxzZSB7XG4gICAgYWN0aXZlU2xpZGUgPSBzbGlkZXMuZXEoYWN0aXZlSW5kZXgpO1xuICB9IC8vIEFjdGl2ZSBjbGFzc2VzXG5cblxuICBhY3RpdmVTbGlkZS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVBY3RpdmVDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wKSB7XG4gICAgLy8gRHVwbGljYXRlIHRvIGFsbCBsb29wZWQgc2xpZGVzXG4gICAgaWYgKGFjdGl2ZVNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHJlYWxJbmRleCArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlQWN0aXZlQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgcmVhbEluZGV4ICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICB9IC8vIE5leHQgU2xpZGVcblxuXG4gIHZhciBuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0QWxsKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MpLmVxKDApLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG5cbiAgaWYgKHBhcmFtcy5sb29wICYmIG5leHRTbGlkZS5sZW5ndGggPT09IDApIHtcbiAgICBuZXh0U2xpZGUgPSBzbGlkZXMuZXEoMCk7XG4gICAgbmV4dFNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZU5leHRDbGFzcyk7XG4gIH0gLy8gUHJldiBTbGlkZVxuXG5cbiAgdmFyIHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXZBbGwoXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcykuZXEoMCkuYWRkQ2xhc3MocGFyYW1zLnNsaWRlUHJldkNsYXNzKTtcblxuICBpZiAocGFyYW1zLmxvb3AgJiYgcHJldlNsaWRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHByZXZTbGlkZSA9IHNsaWRlcy5lcSgtMSk7XG4gICAgcHJldlNsaWRlLmFkZENsYXNzKHBhcmFtcy5zbGlkZVByZXZDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmxvb3ApIHtcbiAgICAvLyBEdXBsaWNhdGUgdG8gYWxsIGxvb3BlZCBzbGlkZXNcbiAgICBpZiAobmV4dFNsaWRlLmhhc0NsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzKSkge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCI6bm90KC5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCIpW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIG5leHRTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVOZXh0Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkd3JhcHBlckVsLmNoaWxkcmVuKFwiLlwiICsgcGFyYW1zLnNsaWRlQ2xhc3MgKyBcIi5cIiArIHBhcmFtcy5zbGlkZUR1cGxpY2F0ZUNsYXNzICsgXCJbZGF0YS1zd2lwZXItc2xpZGUtaW5kZXg9XFxcIlwiICsgbmV4dFNsaWRlLmF0dHIoJ2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4JykgKyBcIlxcXCJdXCIpLmFkZENsYXNzKHBhcmFtcy5zbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZTbGlkZS5oYXNDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcykpIHtcbiAgICAgICR3cmFwcGVyRWwuY2hpbGRyZW4oXCIuXCIgKyBwYXJhbXMuc2xpZGVDbGFzcyArIFwiOm5vdCguXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiKVtkYXRhLXN3aXBlci1zbGlkZS1pbmRleD1cXFwiXCIgKyBwcmV2U2xpZGUuYXR0cignZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKSArIFwiXFxcIl1cIikuYWRkQ2xhc3MocGFyYW1zLnNsaWRlRHVwbGljYXRlUHJldkNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHdyYXBwZXJFbC5jaGlsZHJlbihcIi5cIiArIHBhcmFtcy5zbGlkZUNsYXNzICsgXCIuXCIgKyBwYXJhbXMuc2xpZGVEdXBsaWNhdGVDbGFzcyArIFwiW2RhdGEtc3dpcGVyLXNsaWRlLWluZGV4PVxcXCJcIiArIHByZXZTbGlkZS5hdHRyKCdkYXRhLXN3aXBlci1zbGlkZS1pbmRleCcpICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhwYXJhbXMuc2xpZGVEdXBsaWNhdGVQcmV2Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHN3aXBlci5lbWl0U2xpZGVzQ2xhc3NlcygpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc09mZnNldCgpIHtcbiAgdmFyIHN3aXBlciA9IHRoaXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc2xpZGVzW2ldLnN3aXBlclNsaWRlT2Zmc2V0ID0gc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gc2xpZGVzW2ldLm9mZnNldExlZnQgOiBzbGlkZXNbaV0ub2Zmc2V0VG9wO1xuICB9XG59IiwiaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVNsaWRlc1Byb2dyZXNzKHRyYW5zbGF0ZSkge1xuICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHtcbiAgICB0cmFuc2xhdGUgPSB0aGlzICYmIHRoaXMudHJhbnNsYXRlIHx8IDA7XG4gIH1cblxuICB2YXIgc3dpcGVyID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXM7XG4gIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzLFxuICAgICAgcnRsID0gc3dpcGVyLnJ0bFRyYW5zbGF0ZTtcbiAgaWYgKHNsaWRlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgaWYgKHR5cGVvZiBzbGlkZXNbMF0uc3dpcGVyU2xpZGVPZmZzZXQgPT09ICd1bmRlZmluZWQnKSBzd2lwZXIudXBkYXRlU2xpZGVzT2Zmc2V0KCk7XG4gIHZhciBvZmZzZXRDZW50ZXIgPSAtdHJhbnNsYXRlO1xuICBpZiAocnRsKSBvZmZzZXRDZW50ZXIgPSB0cmFuc2xhdGU7IC8vIFZpc2libGUgU2xpZGVzXG5cbiAgc2xpZGVzLnJlbW92ZUNsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gIHN3aXBlci52aXNpYmxlU2xpZGVzSW5kZXhlcyA9IFtdO1xuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHNsaWRlID0gc2xpZGVzW2ldO1xuICAgIHZhciBzbGlkZVByb2dyZXNzID0gKG9mZnNldENlbnRlciArIChwYXJhbXMuY2VudGVyZWRTbGlkZXMgPyBzd2lwZXIubWluVHJhbnNsYXRlKCkgOiAwKSAtIHNsaWRlLnN3aXBlclNsaWRlT2Zmc2V0KSAvIChzbGlkZS5zd2lwZXJTbGlkZVNpemUgKyBwYXJhbXMuc3BhY2VCZXR3ZWVuKTtcblxuICAgIGlmIChwYXJhbXMud2F0Y2hTbGlkZXNWaXNpYmlsaXR5IHx8IHBhcmFtcy5jZW50ZXJlZFNsaWRlcyAmJiBwYXJhbXMuYXV0b0hlaWdodCkge1xuICAgICAgdmFyIHNsaWRlQmVmb3JlID0gLShvZmZzZXRDZW50ZXIgLSBzbGlkZS5zd2lwZXJTbGlkZU9mZnNldCk7XG4gICAgICB2YXIgc2xpZGVBZnRlciA9IHNsaWRlQmVmb3JlICsgc3dpcGVyLnNsaWRlc1NpemVzR3JpZFtpXTtcbiAgICAgIHZhciBpc1Zpc2libGUgPSBzbGlkZUJlZm9yZSA+PSAwICYmIHNsaWRlQmVmb3JlIDwgc3dpcGVyLnNpemUgLSAxIHx8IHNsaWRlQWZ0ZXIgPiAxICYmIHNsaWRlQWZ0ZXIgPD0gc3dpcGVyLnNpemUgfHwgc2xpZGVCZWZvcmUgPD0gMCAmJiBzbGlkZUFmdGVyID49IHN3aXBlci5zaXplO1xuXG4gICAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIHN3aXBlci52aXNpYmxlU2xpZGVzLnB1c2goc2xpZGUpO1xuICAgICAgICBzd2lwZXIudmlzaWJsZVNsaWRlc0luZGV4ZXMucHVzaChpKTtcbiAgICAgICAgc2xpZGVzLmVxKGkpLmFkZENsYXNzKHBhcmFtcy5zbGlkZVZpc2libGVDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2xpZGUucHJvZ3Jlc3MgPSBydGwgPyAtc2xpZGVQcm9ncmVzcyA6IHNsaWRlUHJvZ3Jlc3M7XG4gIH1cblxuICBzd2lwZXIudmlzaWJsZVNsaWRlcyA9ICQoc3dpcGVyLnZpc2libGVTbGlkZXMpO1xufSIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAkIGZyb20gJy4uLy4uL3V0aWxzL2RvbSc7XG5pbXBvcnQgeyBleHRlbmQsIGJpbmRNb2R1bGVNZXRob2RzLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xudmFyIE5hdmlnYXRpb24gPSB7XG4gIHRvZ2dsZUVsOiBmdW5jdGlvbiB0b2dnbGVFbCgkZWwsIGRpc2FibGVkKSB7XG4gICAgJGVsW2Rpc2FibGVkID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyddKHRoaXMucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgaWYgKCRlbFswXSAmJiAkZWxbMF0udGFnTmFtZSA9PT0gJ0JVVFRPTicpICRlbFswXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9LFxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBVcGRhdGUgTmF2aWdhdGlvbiBCdXR0b25zXG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbjtcbiAgICB2YXIgdG9nZ2xlRWwgPSBzd2lwZXIubmF2aWdhdGlvbi50b2dnbGVFbDtcbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5sb29wKSByZXR1cm47XG4gICAgdmFyIF9zd2lwZXIkbmF2aWdhdGlvbiA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAkbmV4dEVsID0gX3N3aXBlciRuYXZpZ2F0aW9uLiRuZXh0RWwsXG4gICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24uJHByZXZFbDtcblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHN3aXBlci5pc0JlZ2lubmluZykge1xuICAgICAgICB0b2dnbGVFbCgkcHJldkVsLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUVsKCRwcmV2RWwsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgICAkcHJldkVsW3N3aXBlci5pc0xvY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXShwYXJhbXMubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChzd2lwZXIuaXNFbmQpIHtcbiAgICAgICAgdG9nZ2xlRWwoJG5leHRFbCwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVFbCgkbmV4dEVsLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLndhdGNoT3ZlcmZsb3cgJiYgc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgICAgJG5leHRFbFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10ocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvblByZXZDbGljazogZnVuY3Rpb24gb25QcmV2Q2xpY2soZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc3dpcGVyLmlzQmVnaW5uaW5nICYmICFzd2lwZXIucGFyYW1zLmxvb3ApIHJldHVybjtcbiAgICBzd2lwZXIuc2xpZGVQcmV2KCk7XG4gIH0sXG4gIG9uTmV4dENsaWNrOiBmdW5jdGlvbiBvbk5leHRDbGljayhlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzd2lwZXIuaXNFbmQgJiYgIXN3aXBlci5wYXJhbXMubG9vcCkgcmV0dXJuO1xuICAgIHN3aXBlci5zbGlkZU5leHQoKTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uO1xuICAgIHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbiA9IGNyZWF0ZUVsZW1lbnRJZk5vdERlZmluZWQoc3dpcGVyLiRlbCwgc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLCBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzLCB7XG4gICAgICBuZXh0RWw6ICdzd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgcHJldkVsOiAnc3dpcGVyLWJ1dHRvbi1wcmV2J1xuICAgIH0pO1xuICAgIGlmICghKHBhcmFtcy5uZXh0RWwgfHwgcGFyYW1zLnByZXZFbCkpIHJldHVybjtcbiAgICB2YXIgJG5leHRFbDtcbiAgICB2YXIgJHByZXZFbDtcblxuICAgIGlmIChwYXJhbXMubmV4dEVsKSB7XG4gICAgICAkbmV4dEVsID0gJChwYXJhbXMubmV4dEVsKTtcblxuICAgICAgaWYgKHN3aXBlci5wYXJhbXMudW5pcXVlTmF2RWxlbWVudHMgJiYgdHlwZW9mIHBhcmFtcy5uZXh0RWwgPT09ICdzdHJpbmcnICYmICRuZXh0RWwubGVuZ3RoID4gMSAmJiBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICRuZXh0RWwgPSBzd2lwZXIuJGVsLmZpbmQocGFyYW1zLm5leHRFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5wcmV2RWwpIHtcbiAgICAgICRwcmV2RWwgPSAkKHBhcmFtcy5wcmV2RWwpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy51bmlxdWVOYXZFbGVtZW50cyAmJiB0eXBlb2YgcGFyYW1zLnByZXZFbCA9PT0gJ3N0cmluZycgJiYgJHByZXZFbC5sZW5ndGggPiAxICYmIHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgJHByZXZFbCA9IHN3aXBlci4kZWwuZmluZChwYXJhbXMucHJldkVsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCA+IDApIHtcbiAgICAgICRuZXh0RWwub24oJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spO1xuICAgIH1cblxuICAgIGlmICgkcHJldkVsICYmICRwcmV2RWwubGVuZ3RoID4gMCkge1xuICAgICAgJHByZXZFbC5vbignY2xpY2snLCBzd2lwZXIubmF2aWdhdGlvbi5vblByZXZDbGljayk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHN3aXBlci5uYXZpZ2F0aW9uLCB7XG4gICAgICAkbmV4dEVsOiAkbmV4dEVsLFxuICAgICAgbmV4dEVsOiAkbmV4dEVsICYmICRuZXh0RWxbMF0sXG4gICAgICAkcHJldkVsOiAkcHJldkVsLFxuICAgICAgcHJldkVsOiAkcHJldkVsICYmICRwcmV2RWxbMF1cbiAgICB9KTtcblxuICAgIGlmICghc3dpcGVyLmVuYWJsZWQpIHtcbiAgICAgIGlmICgkbmV4dEVsKSAkbmV4dEVsLmFkZENsYXNzKHBhcmFtcy5sb2NrQ2xhc3MpO1xuICAgICAgaWYgKCRwcmV2RWwpICRwcmV2RWwuYWRkQ2xhc3MocGFyYW1zLmxvY2tDbGFzcyk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBfc3dpcGVyJG5hdmlnYXRpb24yID0gc3dpcGVyLm5hdmlnYXRpb24sXG4gICAgICAgICRuZXh0RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24yLiRuZXh0RWwsXG4gICAgICAgICRwcmV2RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24yLiRwcmV2RWw7XG5cbiAgICBpZiAoJG5leHRFbCAmJiAkbmV4dEVsLmxlbmd0aCkge1xuICAgICAgJG5leHRFbC5vZmYoJ2NsaWNrJywgc3dpcGVyLm5hdmlnYXRpb24ub25OZXh0Q2xpY2spO1xuICAgICAgJG5leHRFbC5yZW1vdmVDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uZGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCRwcmV2RWwgJiYgJHByZXZFbC5sZW5ndGgpIHtcbiAgICAgICRwcmV2RWwub2ZmKCdjbGljaycsIHN3aXBlci5uYXZpZ2F0aW9uLm9uUHJldkNsaWNrKTtcbiAgICAgICRwcmV2RWwucmVtb3ZlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ25hdmlnYXRpb24nLFxuICBwYXJhbXM6IHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IG51bGwsXG4gICAgICBwcmV2RWw6IG51bGwsXG4gICAgICBoaWRlT25DbGljazogZmFsc2UsXG4gICAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCcsXG4gICAgICBoaWRkZW5DbGFzczogJ3N3aXBlci1idXR0b24taGlkZGVuJyxcbiAgICAgIGxvY2tDbGFzczogJ3N3aXBlci1idXR0b24tbG9jaydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGJpbmRNb2R1bGVNZXRob2RzKHN3aXBlciwge1xuICAgICAgbmF2aWdhdGlvbjogX2V4dGVuZHMoe30sIE5hdmlnYXRpb24pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLmluaXQoKTtcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgdG9FZGdlOiBmdW5jdGlvbiB0b0VkZ2Uoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIubmF2aWdhdGlvbi51cGRhdGUoKTtcbiAgICB9LFxuICAgIGZyb21FZGdlOiBmdW5jdGlvbiBmcm9tRWRnZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLnVwZGF0ZSgpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5uYXZpZ2F0aW9uLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgICdlbmFibGUgZGlzYWJsZSc6IGZ1bmN0aW9uIGVuYWJsZURpc2FibGUoc3dpcGVyKSB7XG4gICAgICB2YXIgX3N3aXBlciRuYXZpZ2F0aW9uMyA9IHN3aXBlci5uYXZpZ2F0aW9uLFxuICAgICAgICAgICRuZXh0RWwgPSBfc3dpcGVyJG5hdmlnYXRpb24zLiRuZXh0RWwsXG4gICAgICAgICAgJHByZXZFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjMuJHByZXZFbDtcblxuICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgJG5leHRFbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubG9ja0NsYXNzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgJHByZXZFbFtzd2lwZXIuZW5hYmxlZCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXShzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24ubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsaWNrOiBmdW5jdGlvbiBjbGljayhzd2lwZXIsIGUpIHtcbiAgICAgIHZhciBfc3dpcGVyJG5hdmlnYXRpb240ID0gc3dpcGVyLm5hdmlnYXRpb24sXG4gICAgICAgICAgJG5leHRFbCA9IF9zd2lwZXIkbmF2aWdhdGlvbjQuJG5leHRFbCxcbiAgICAgICAgICAkcHJldkVsID0gX3N3aXBlciRuYXZpZ2F0aW9uNC4kcHJldkVsO1xuICAgICAgdmFyIHRhcmdldEVsID0gZS50YXJnZXQ7XG5cbiAgICAgIGlmIChzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZU9uQ2xpY2sgJiYgISQodGFyZ2V0RWwpLmlzKCRwcmV2RWwpICYmICEkKHRhcmdldEVsKS5pcygkbmV4dEVsKSkge1xuICAgICAgICBpZiAoc3dpcGVyLnBhZ2luYXRpb24gJiYgc3dpcGVyLnBhcmFtcy5wYWdpbmF0aW9uICYmIHN3aXBlci5wYXJhbXMucGFnaW5hdGlvbi5jbGlja2FibGUgJiYgKHN3aXBlci5wYWdpbmF0aW9uLmVsID09PSB0YXJnZXRFbCB8fCBzd2lwZXIucGFnaW5hdGlvbi5lbC5jb250YWlucyh0YXJnZXRFbCkpKSByZXR1cm47XG4gICAgICAgIHZhciBpc0hpZGRlbjtcblxuICAgICAgICBpZiAoJG5leHRFbCkge1xuICAgICAgICAgIGlzSGlkZGVuID0gJG5leHRFbC5oYXNDbGFzcyhzd2lwZXIucGFyYW1zLm5hdmlnYXRpb24uaGlkZGVuQ2xhc3MpO1xuICAgICAgICB9IGVsc2UgaWYgKCRwcmV2RWwpIHtcbiAgICAgICAgICBpc0hpZGRlbiA9ICRwcmV2RWwuaGFzQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0hpZGRlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uU2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN3aXBlci5lbWl0KCduYXZpZ2F0aW9uSGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRuZXh0RWwpIHtcbiAgICAgICAgICAkbmV4dEVsLnRvZ2dsZUNsYXNzKHN3aXBlci5wYXJhbXMubmF2aWdhdGlvbi5oaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZFbCkge1xuICAgICAgICAgICRwcmV2RWwudG9nZ2xlQ2xhc3Moc3dpcGVyLnBhcmFtcy5uYXZpZ2F0aW9uLmhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5pbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vdXRpbHMvZG9tJztcbmltcG9ydCB7IGV4dGVuZCwgbmV4dFRpY2ssIGJpbmRNb2R1bGVNZXRob2RzLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbHMnO1xudmFyIFNjcm9sbGJhciA9IHtcbiAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgaWYgKCFzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5lbCB8fCAhc3dpcGVyLnNjcm9sbGJhci5lbCkgcmV0dXJuO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlLFxuICAgICAgICBwcm9ncmVzcyA9IHN3aXBlci5wcm9ncmVzcztcbiAgICB2YXIgZHJhZ1NpemUgPSBzY3JvbGxiYXIuZHJhZ1NpemUsXG4gICAgICAgIHRyYWNrU2l6ZSA9IHNjcm9sbGJhci50cmFja1NpemUsXG4gICAgICAgICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbCxcbiAgICAgICAgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgdmFyIG5ld1NpemUgPSBkcmFnU2l6ZTtcbiAgICB2YXIgbmV3UG9zID0gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKSAqIHByb2dyZXNzO1xuXG4gICAgaWYgKHJ0bCkge1xuICAgICAgbmV3UG9zID0gLW5ld1BvcztcblxuICAgICAgaWYgKG5ld1BvcyA+IDApIHtcbiAgICAgICAgbmV3U2l6ZSA9IGRyYWdTaXplIC0gbmV3UG9zO1xuICAgICAgICBuZXdQb3MgPSAwO1xuICAgICAgfSBlbHNlIGlmICgtbmV3UG9zICsgZHJhZ1NpemUgPiB0cmFja1NpemUpIHtcbiAgICAgICAgbmV3U2l6ZSA9IHRyYWNrU2l6ZSArIG5ld1BvcztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5ld1BvcyA8IDApIHtcbiAgICAgIG5ld1NpemUgPSBkcmFnU2l6ZSArIG5ld1BvcztcbiAgICAgIG5ld1BvcyA9IDA7XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgKyBkcmFnU2l6ZSA+IHRyYWNrU2l6ZSkge1xuICAgICAgbmV3U2l6ZSA9IHRyYWNrU2l6ZSAtIG5ld1BvcztcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLmlzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAkZHJhZ0VsLnRyYW5zZm9ybShcInRyYW5zbGF0ZTNkKFwiICsgbmV3UG9zICsgXCJweCwgMCwgMClcIik7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLndpZHRoID0gbmV3U2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgJGRyYWdFbC50cmFuc2Zvcm0oXCJ0cmFuc2xhdGUzZCgwcHgsIFwiICsgbmV3UG9zICsgXCJweCwgMClcIik7XG4gICAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9IG5ld1NpemUgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci50aW1lb3V0KTtcbiAgICAgICRlbFswXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWxbMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sXG4gIHNldFRyYW5zaXRpb246IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24oZHVyYXRpb24pIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmVsIHx8ICFzd2lwZXIuc2Nyb2xsYmFyLmVsKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci4kZHJhZ0VsLnRyYW5zaXRpb24oZHVyYXRpb24pO1xuICB9LFxuICB1cGRhdGVTaXplOiBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwgfHwgIXN3aXBlci5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgc2Nyb2xsYmFyID0gc3dpcGVyLnNjcm9sbGJhcjtcbiAgICB2YXIgJGRyYWdFbCA9IHNjcm9sbGJhci4kZHJhZ0VsLFxuICAgICAgICAkZWwgPSBzY3JvbGxiYXIuJGVsO1xuICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSAnJztcbiAgICAkZHJhZ0VsWzBdLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHZhciB0cmFja1NpemUgPSBzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAkZWxbMF0ub2Zmc2V0V2lkdGggOiAkZWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciBkaXZpZGVyID0gc3dpcGVyLnNpemUgLyBzd2lwZXIudmlydHVhbFNpemU7XG4gICAgdmFyIG1vdmVEaXZpZGVyID0gZGl2aWRlciAqICh0cmFja1NpemUgLyBzd2lwZXIuc2l6ZSk7XG4gICAgdmFyIGRyYWdTaXplO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLmRyYWdTaXplID09PSAnYXV0bycpIHtcbiAgICAgIGRyYWdTaXplID0gdHJhY2tTaXplICogZGl2aWRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHJhZ1NpemUgPSBwYXJzZUludChzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnU2l6ZSwgMTApO1xuICAgIH1cblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgICRkcmFnRWxbMF0uc3R5bGUud2lkdGggPSBkcmFnU2l6ZSArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgJGRyYWdFbFswXS5zdHlsZS5oZWlnaHQgPSBkcmFnU2l6ZSArIFwicHhcIjtcbiAgICB9XG5cbiAgICBpZiAoZGl2aWRlciA+PSAxKSB7XG4gICAgICAkZWxbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsWzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuaGlkZSkge1xuICAgICAgJGVsWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIGV4dGVuZChzY3JvbGxiYXIsIHtcbiAgICAgIHRyYWNrU2l6ZTogdHJhY2tTaXplLFxuICAgICAgZGl2aWRlcjogZGl2aWRlcixcbiAgICAgIG1vdmVEaXZpZGVyOiBtb3ZlRGl2aWRlcixcbiAgICAgIGRyYWdTaXplOiBkcmFnU2l6ZVxuICAgIH0pO1xuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMud2F0Y2hPdmVyZmxvdyAmJiBzd2lwZXIuZW5hYmxlZCkge1xuICAgICAgc2Nyb2xsYmFyLiRlbFtzd2lwZXIuaXNMb2NrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0sXG4gIGdldFBvaW50ZXJQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9pbnRlclBvc2l0aW9uKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcblxuICAgIGlmIChzd2lwZXIuaXNIb3Jpem9udGFsKCkpIHtcbiAgICAgIHJldHVybiBlLnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBlLnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFg7XG4gICAgfVxuXG4gICAgcmV0dXJuIGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGUudHlwZSA9PT0gJ3RvdWNobW92ZScgPyBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcbiAgfSxcbiAgc2V0RHJhZ1Bvc2l0aW9uOiBmdW5jdGlvbiBzZXREcmFnUG9zaXRpb24oZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICBydGwgPSBzd2lwZXIucnRsVHJhbnNsYXRlO1xuICAgIHZhciAkZWwgPSBzY3JvbGxiYXIuJGVsLFxuICAgICAgICBkcmFnU2l6ZSA9IHNjcm9sbGJhci5kcmFnU2l6ZSxcbiAgICAgICAgdHJhY2tTaXplID0gc2Nyb2xsYmFyLnRyYWNrU2l6ZSxcbiAgICAgICAgZHJhZ1N0YXJ0UG9zID0gc2Nyb2xsYmFyLmRyYWdTdGFydFBvcztcbiAgICB2YXIgcG9zaXRpb25SYXRpbztcbiAgICBwb3NpdGlvblJhdGlvID0gKHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSAkZWwub2Zmc2V0KClbc3dpcGVyLmlzSG9yaXpvbnRhbCgpID8gJ2xlZnQnIDogJ3RvcCddIC0gKGRyYWdTdGFydFBvcyAhPT0gbnVsbCA/IGRyYWdTdGFydFBvcyA6IGRyYWdTaXplIC8gMikpIC8gKHRyYWNrU2l6ZSAtIGRyYWdTaXplKTtcbiAgICBwb3NpdGlvblJhdGlvID0gTWF0aC5tYXgoTWF0aC5taW4ocG9zaXRpb25SYXRpbywgMSksIDApO1xuXG4gICAgaWYgKHJ0bCkge1xuICAgICAgcG9zaXRpb25SYXRpbyA9IDEgLSBwb3NpdGlvblJhdGlvO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IHN3aXBlci5taW5UcmFuc2xhdGUoKSArIChzd2lwZXIubWF4VHJhbnNsYXRlKCkgLSBzd2lwZXIubWluVHJhbnNsYXRlKCkpICogcG9zaXRpb25SYXRpbztcbiAgICBzd2lwZXIudXBkYXRlUHJvZ3Jlc3MocG9zaXRpb24pO1xuICAgIHN3aXBlci5zZXRUcmFuc2xhdGUocG9zaXRpb24pO1xuICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xuICAgIHN3aXBlci51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XG4gIH0sXG4gIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydChlKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWwsXG4gICAgICAgICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICBzd2lwZXIuc2Nyb2xsYmFyLmlzVG91Y2hlZCA9IHRydWU7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kcmFnU3RhcnRQb3MgPSBlLnRhcmdldCA9PT0gJGRyYWdFbFswXSB8fCBlLnRhcmdldCA9PT0gJGRyYWdFbCA/IHNjcm9sbGJhci5nZXRQb2ludGVyUG9zaXRpb24oZSkgLSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtzd2lwZXIuaXNIb3Jpem9udGFsKCkgPyAnbGVmdCcgOiAndG9wJ10gOiBudWxsO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigxMDApO1xuICAgICRkcmFnRWwudHJhbnNpdGlvbigxMDApO1xuICAgIHNjcm9sbGJhci5zZXREcmFnUG9zaXRpb24oZSk7XG4gICAgY2xlYXJUaW1lb3V0KHN3aXBlci5zY3JvbGxiYXIuZHJhZ1RpbWVvdXQpO1xuICAgICRlbC50cmFuc2l0aW9uKDApO1xuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMSk7XG4gICAgfVxuXG4gICAgaWYgKHN3aXBlci5wYXJhbXMuY3NzTW9kZSkge1xuICAgICAgc3dpcGVyLiR3cmFwcGVyRWwuY3NzKCdzY3JvbGwtc25hcC10eXBlJywgJ25vbmUnKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ1N0YXJ0JywgZSk7XG4gIH0sXG4gIG9uRHJhZ01vdmU6IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZSkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkd3JhcHBlckVsID0gc3dpcGVyLiR3cmFwcGVyRWw7XG4gICAgdmFyICRlbCA9IHNjcm9sbGJhci4kZWwsXG4gICAgICAgICRkcmFnRWwgPSBzY3JvbGxiYXIuJGRyYWdFbDtcbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpIGUucHJldmVudERlZmF1bHQoKTtlbHNlIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICBzY3JvbGxiYXIuc2V0RHJhZ1Bvc2l0aW9uKGUpO1xuICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbigwKTtcbiAgICAkZWwudHJhbnNpdGlvbigwKTtcbiAgICAkZHJhZ0VsLnRyYW5zaXRpb24oMCk7XG4gICAgc3dpcGVyLmVtaXQoJ3Njcm9sbGJhckRyYWdNb3ZlJywgZSk7XG4gIH0sXG4gIG9uRHJhZ0VuZDogZnVuY3Rpb24gb25EcmFnRW5kKGUpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgcGFyYW1zID0gc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXI7XG4gICAgdmFyIHNjcm9sbGJhciA9IHN3aXBlci5zY3JvbGxiYXIsXG4gICAgICAgICR3cmFwcGVyRWwgPSBzd2lwZXIuJHdyYXBwZXJFbDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICBpZiAoIXN3aXBlci5zY3JvbGxiYXIuaXNUb3VjaGVkKSByZXR1cm47XG4gICAgc3dpcGVyLnNjcm9sbGJhci5pc1RvdWNoZWQgPSBmYWxzZTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLmNzc01vZGUpIHtcbiAgICAgIHN3aXBlci4kd3JhcHBlckVsLmNzcygnc2Nyb2xsLXNuYXAtdHlwZScsICcnKTtcbiAgICAgICR3cmFwcGVyRWwudHJhbnNpdGlvbignJyk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy5oaWRlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3dpcGVyLnNjcm9sbGJhci5kcmFnVGltZW91dCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRyYWdUaW1lb3V0ID0gbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAkZWwuY3NzKCdvcGFjaXR5JywgMCk7XG4gICAgICAgICRlbC50cmFuc2l0aW9uKDQwMCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBzd2lwZXIuZW1pdCgnc2Nyb2xsYmFyRHJhZ0VuZCcsIGUpO1xuXG4gICAgaWYgKHBhcmFtcy5zbmFwT25SZWxlYXNlKSB7XG4gICAgICBzd2lwZXIuc2xpZGVUb0Nsb3Nlc3QoKTtcbiAgICB9XG4gIH0sXG4gIGVuYWJsZURyYWdnYWJsZTogZnVuY3Rpb24gZW5hYmxlRHJhZ2dhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICB0b3VjaEV2ZW50c1RvdWNoID0gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnRzRGVza3RvcCA9IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICB2YXIgdGFyZ2V0ID0gJGVsWzBdO1xuICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIGlmICghc3VwcG9ydC50b3VjaCkge1xuICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICBkaXNhYmxlRHJhZ2dhYmxlOiBmdW5jdGlvbiBkaXNhYmxlRHJhZ2dhYmxlKCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIGlmICghc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZWwpIHJldHVybjtcbiAgICB2YXIgZG9jdW1lbnQgPSBnZXREb2N1bWVudCgpO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICB0b3VjaEV2ZW50c1RvdWNoID0gc3dpcGVyLnRvdWNoRXZlbnRzVG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnRzRGVza3RvcCA9IHN3aXBlci50b3VjaEV2ZW50c0Rlc2t0b3AsXG4gICAgICAgIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMsXG4gICAgICAgIHN1cHBvcnQgPSBzd2lwZXIuc3VwcG9ydDtcbiAgICB2YXIgJGVsID0gc2Nyb2xsYmFyLiRlbDtcbiAgICB2YXIgdGFyZ2V0ID0gJGVsWzBdO1xuICAgIHZhciBhY3RpdmVMaXN0ZW5lciA9IHN1cHBvcnQucGFzc2l2ZUxpc3RlbmVyICYmIHBhcmFtcy5wYXNzaXZlTGlzdGVuZXJzID8ge1xuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgICBjYXB0dXJlOiBmYWxzZVxuICAgIH0gOiBmYWxzZTtcbiAgICB2YXIgcGFzc2l2ZUxpc3RlbmVyID0gc3VwcG9ydC5wYXNzaXZlTGlzdGVuZXIgJiYgcGFyYW1zLnBhc3NpdmVMaXN0ZW5lcnMgPyB7XG4gICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgY2FwdHVyZTogZmFsc2VcbiAgICB9IDogZmFsc2U7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgIGlmICghc3VwcG9ydC50b3VjaCkge1xuICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLnN0YXJ0LCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ1N0YXJ0LCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzRGVza3RvcC5tb3ZlLCBzd2lwZXIuc2Nyb2xsYmFyLm9uRHJhZ01vdmUsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHNEZXNrdG9wLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2guc3RhcnQsIHN3aXBlci5zY3JvbGxiYXIub25EcmFnU3RhcnQsIGFjdGl2ZUxpc3RlbmVyKTtcbiAgICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzVG91Y2gubW92ZSwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdNb3ZlLCBhY3RpdmVMaXN0ZW5lcik7XG4gICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50c1RvdWNoLmVuZCwgc3dpcGVyLnNjcm9sbGJhci5vbkRyYWdFbmQsIHBhc3NpdmVMaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBzd2lwZXIgPSB0aGlzO1xuICAgIHZhciBzY3JvbGxiYXIgPSBzd2lwZXIuc2Nyb2xsYmFyLFxuICAgICAgICAkc3dpcGVyRWwgPSBzd2lwZXIuJGVsO1xuICAgIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyID0gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCgkc3dpcGVyRWwsIHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyLCBzd2lwZXIucGFyYW1zLmNyZWF0ZUVsZW1lbnRzLCB7XG4gICAgICBlbDogJ3N3aXBlci1zY3JvbGxiYXInXG4gICAgfSk7XG4gICAgdmFyIHBhcmFtcyA9IHN3aXBlci5wYXJhbXMuc2Nyb2xsYmFyO1xuICAgIGlmICghcGFyYW1zLmVsKSByZXR1cm47XG4gICAgdmFyICRlbCA9ICQocGFyYW1zLmVsKTtcblxuICAgIGlmIChzd2lwZXIucGFyYW1zLnVuaXF1ZU5hdkVsZW1lbnRzICYmIHR5cGVvZiBwYXJhbXMuZWwgPT09ICdzdHJpbmcnICYmICRlbC5sZW5ndGggPiAxICYmICRzd2lwZXJFbC5maW5kKHBhcmFtcy5lbCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAkZWwgPSAkc3dpcGVyRWwuZmluZChwYXJhbXMuZWwpO1xuICAgIH1cblxuICAgIHZhciAkZHJhZ0VsID0gJGVsLmZpbmQoXCIuXCIgKyBzd2lwZXIucGFyYW1zLnNjcm9sbGJhci5kcmFnQ2xhc3MpO1xuXG4gICAgaWYgKCRkcmFnRWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAkZHJhZ0VsID0gJChcIjxkaXYgY2xhc3M9XFxcIlwiICsgc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIuZHJhZ0NsYXNzICsgXCJcXFwiPjwvZGl2PlwiKTtcbiAgICAgICRlbC5hcHBlbmQoJGRyYWdFbCk7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHNjcm9sbGJhciwge1xuICAgICAgJGVsOiAkZWwsXG4gICAgICBlbDogJGVsWzBdLFxuICAgICAgJGRyYWdFbDogJGRyYWdFbCxcbiAgICAgIGRyYWdFbDogJGRyYWdFbFswXVxuICAgIH0pO1xuXG4gICAgaWYgKHBhcmFtcy5kcmFnZ2FibGUpIHtcbiAgICAgIHNjcm9sbGJhci5lbmFibGVEcmFnZ2FibGUoKTtcbiAgICB9XG5cbiAgICBpZiAoJGVsKSB7XG4gICAgICAkZWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICB9XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLnNjcm9sbGJhci5kaXNhYmxlRHJhZ2dhYmxlKCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdzY3JvbGxiYXInLFxuICBwYXJhbXM6IHtcbiAgICBzY3JvbGxiYXI6IHtcbiAgICAgIGVsOiBudWxsLFxuICAgICAgZHJhZ1NpemU6ICdhdXRvJyxcbiAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgIHNuYXBPblJlbGVhc2U6IHRydWUsXG4gICAgICBsb2NrQ2xhc3M6ICdzd2lwZXItc2Nyb2xsYmFyLWxvY2snLFxuICAgICAgZHJhZ0NsYXNzOiAnc3dpcGVyLXNjcm9sbGJhci1kcmFnJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgYmluZE1vZHVsZU1ldGhvZHMoc3dpcGVyLCB7XG4gICAgICBzY3JvbGxiYXI6IF9leHRlbmRzKHtcbiAgICAgICAgaXNUb3VjaGVkOiBmYWxzZSxcbiAgICAgICAgdGltZW91dDogbnVsbCxcbiAgICAgICAgZHJhZ1RpbWVvdXQ6IG51bGxcbiAgICAgIH0sIFNjcm9sbGJhcilcbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgc3dpcGVyLnNjcm9sbGJhci5pbml0KCk7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCk7XG4gICAgfSxcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgcmVzaXplOiBmdW5jdGlvbiByZXNpemUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnVwZGF0ZVNpemUoKTtcbiAgICB9LFxuICAgIG9ic2VydmVyVXBkYXRlOiBmdW5jdGlvbiBvYnNlcnZlclVwZGF0ZShzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5zY3JvbGxiYXIudXBkYXRlU2l6ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNsYXRlOiBmdW5jdGlvbiBzZXRUcmFuc2xhdGUoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zbGF0ZSgpO1xuICAgIH0sXG4gICAgc2V0VHJhbnNpdGlvbjogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbihzd2lwZXIsIGR1cmF0aW9uKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLnNldFRyYW5zaXRpb24oZHVyYXRpb24pO1xuICAgIH0sXG4gICAgJ2VuYWJsZSBkaXNhYmxlJzogZnVuY3Rpb24gZW5hYmxlRGlzYWJsZShzd2lwZXIpIHtcbiAgICAgIHZhciAkZWwgPSBzd2lwZXIuc2Nyb2xsYmFyLiRlbDtcblxuICAgICAgaWYgKCRlbCkge1xuICAgICAgICAkZWxbc3dpcGVyLmVuYWJsZWQgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oc3dpcGVyLnBhcmFtcy5zY3JvbGxiYXIubG9ja0NsYXNzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koc3dpcGVyKSB7XG4gICAgICBzd2lwZXIuc2Nyb2xsYmFyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgeyBiaW5kTW9kdWxlTWV0aG9kcyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcbnZhciBPYnNlcnZlciA9IHtcbiAgYXR0YWNoOiBmdW5jdGlvbiBhdHRhY2godGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICB2YXIgT2JzZXJ2ZXJGdW5jID0gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luZG93LldlYmtpdE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE9ic2VydmVyRnVuYyhmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAvLyBUaGUgb2JzZXJ2ZXJVcGRhdGUgZXZlbnQgc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgICAvLyBvbmNlIGRlc3BpdGUgdGhlIG51bWJlciBvZiBtdXRhdGlvbnMuICBBZGRpdGlvbmFsXG4gICAgICAvLyB0cmlnZ2VycyBhcmUgcmVkdW5kYW50IGFuZCBhcmUgdmVyeSBjb3N0bHlcbiAgICAgIGlmIChtdXRhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG9ic2VydmVyVXBkYXRlID0gZnVuY3Rpb24gb2JzZXJ2ZXJVcGRhdGUoKSB7XG4gICAgICAgIHN3aXBlci5lbWl0KCdvYnNlcnZlclVwZGF0ZScsIG11dGF0aW9uc1swXSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9ic2VydmVyVXBkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KG9ic2VydmVyVXBkYXRlLCAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgYXR0cmlidXRlczogdHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5hdHRyaWJ1dGVzLFxuICAgICAgY2hpbGRMaXN0OiB0eXBlb2Ygb3B0aW9ucy5jaGlsZExpc3QgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG9wdGlvbnMuY2hpbGRMaXN0LFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyRGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogb3B0aW9ucy5jaGFyYWN0ZXJEYXRhXG4gICAgfSk7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgfSxcbiAgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBpZiAoIXN3aXBlci5zdXBwb3J0Lm9ic2VydmVyIHx8ICFzd2lwZXIucGFyYW1zLm9ic2VydmVyKSByZXR1cm47XG5cbiAgICBpZiAoc3dpcGVyLnBhcmFtcy5vYnNlcnZlUGFyZW50cykge1xuICAgICAgdmFyIGNvbnRhaW5lclBhcmVudHMgPSBzd2lwZXIuJGVsLnBhcmVudHMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250YWluZXJQYXJlbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goY29udGFpbmVyUGFyZW50c1tpXSk7XG4gICAgICB9XG4gICAgfSAvLyBPYnNlcnZlIGNvbnRhaW5lclxuXG5cbiAgICBzd2lwZXIub2JzZXJ2ZXIuYXR0YWNoKHN3aXBlci4kZWxbMF0sIHtcbiAgICAgIGNoaWxkTGlzdDogc3dpcGVyLnBhcmFtcy5vYnNlcnZlU2xpZGVDaGlsZHJlblxuICAgIH0pOyAvLyBPYnNlcnZlIHdyYXBwZXJcblxuICAgIHN3aXBlci5vYnNlcnZlci5hdHRhY2goc3dpcGVyLiR3cmFwcGVyRWxbMF0sIHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlXG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgc3dpcGVyLm9ic2VydmVyLm9ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH0pO1xuICAgIHN3aXBlci5vYnNlcnZlci5vYnNlcnZlcnMgPSBbXTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29ic2VydmVyJyxcbiAgcGFyYW1zOiB7XG4gICAgb2JzZXJ2ZXI6IGZhbHNlLFxuICAgIG9ic2VydmVQYXJlbnRzOiBmYWxzZSxcbiAgICBvYnNlcnZlU2xpZGVDaGlsZHJlbjogZmFsc2VcbiAgfSxcbiAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIHN3aXBlciA9IHRoaXM7XG4gICAgYmluZE1vZHVsZU1ldGhvZHMoc3dpcGVyLCB7XG4gICAgICBvYnNlcnZlcjogX2V4dGVuZHMoe30sIE9ic2VydmVyLCB7XG4gICAgICAgIG9ic2VydmVyczogW11cbiAgICAgIH0pXG4gICAgfSk7XG4gIH0sXG4gIG9uOiB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vYnNlcnZlci5pbml0KCk7XG4gICAgfSxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KHN3aXBlcikge1xuICAgICAgc3dpcGVyLm9ic2VydmVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn07IiwiaW1wb3J0IHsgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbnZhciBzdXBwb3J0c1Jlc2l6ZU9ic2VydmVyID0gZnVuY3Rpb24gc3VwcG9ydHNSZXNpemVPYnNlcnZlcigpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5SZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdyZXNpemUnLFxuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgICB2YXIgc3dpcGVyID0gdGhpcztcbiAgICBleHRlbmQoc3dpcGVyLCB7XG4gICAgICByZXNpemU6IHtcbiAgICAgICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAgICAgIGNyZWF0ZU9ic2VydmVyOiBmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICAgICAgICBpZiAoIXN3aXBlciB8fCBzd2lwZXIuZGVzdHJveWVkIHx8ICFzd2lwZXIuaW5pdGlhbGl6ZWQpIHJldHVybjtcbiAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBzd2lwZXIud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ID0gc3dpcGVyLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBuZXdXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgICB2YXIgY29udGVudEJveFNpemUgPSBfcmVmLmNvbnRlbnRCb3hTaXplLFxuICAgICAgICAgICAgICAgICAgY29udGVudFJlY3QgPSBfcmVmLmNvbnRlbnRSZWN0LFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBzd2lwZXIuZWwpIHJldHVybjtcbiAgICAgICAgICAgICAgbmV3V2lkdGggPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LndpZHRoIDogKGNvbnRlbnRCb3hTaXplWzBdIHx8IGNvbnRlbnRCb3hTaXplKS5pbmxpbmVTaXplO1xuICAgICAgICAgICAgICBuZXdIZWlnaHQgPSBjb250ZW50UmVjdCA/IGNvbnRlbnRSZWN0LmhlaWdodCA6IChjb250ZW50Qm94U2l6ZVswXSB8fCBjb250ZW50Qm94U2l6ZSkuYmxvY2tTaXplO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChuZXdXaWR0aCAhPT0gd2lkdGggfHwgbmV3SGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgc3dpcGVyLnJlc2l6ZS5yZXNpemVIYW5kbGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3dpcGVyLnJlc2l6ZS5vYnNlcnZlci5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZU9ic2VydmVyOiBmdW5jdGlvbiByZW1vdmVPYnNlcnZlcigpIHtcbiAgICAgICAgICBpZiAoc3dpcGVyLnJlc2l6ZS5vYnNlcnZlciAmJiBzd2lwZXIucmVzaXplLm9ic2VydmVyLnVub2JzZXJ2ZSAmJiBzd2lwZXIuZWwpIHtcbiAgICAgICAgICAgIHN3aXBlci5yZXNpemUub2JzZXJ2ZXIudW5vYnNlcnZlKHN3aXBlci5lbCk7XG4gICAgICAgICAgICBzd2lwZXIucmVzaXplLm9ic2VydmVyID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ2JlZm9yZVJlc2l6ZScpO1xuICAgICAgICAgIHN3aXBlci5lbWl0KCdyZXNpemUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyOiBmdW5jdGlvbiBvcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKCFzd2lwZXIgfHwgc3dpcGVyLmRlc3Ryb3llZCB8fCAhc3dpcGVyLmluaXRpYWxpemVkKSByZXR1cm47XG4gICAgICAgICAgc3dpcGVyLmVtaXQoJ29yaWVudGF0aW9uY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgb246IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHN3aXBlcikge1xuICAgICAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gICAgICBpZiAoc3dpcGVyLnBhcmFtcy5yZXNpemVPYnNlcnZlciAmJiBzdXBwb3J0c1Jlc2l6ZU9ic2VydmVyKCkpIHtcbiAgICAgICAgc3dpcGVyLnJlc2l6ZS5jcmVhdGVPYnNlcnZlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIEVtaXQgcmVzaXplXG5cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHN3aXBlci5yZXNpemUucmVzaXplSGFuZGxlcik7IC8vIEVtaXQgb3JpZW50YXRpb25jaGFuZ2VcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveShzd2lwZXIpIHtcbiAgICAgIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgICAgIHN3aXBlci5yZXNpemUucmVtb3ZlT2JzZXJ2ZXIoKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzd2lwZXIucmVzaXplLnJlc2l6ZUhhbmRsZXIpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgc3dpcGVyLnJlc2l6ZS5vcmllbnRhdGlvbkNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxufTsiLCJpbXBvcnQgeyAkLCBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MsIGhhc0NsYXNzLCB0b2dnbGVDbGFzcywgYXR0ciwgcmVtb3ZlQXR0ciwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCBvbiwgb2ZmLCB0cmlnZ2VyLCB0cmFuc2l0aW9uRW5kLCBvdXRlcldpZHRoLCBvdXRlckhlaWdodCwgc3R5bGVzLCBvZmZzZXQsIGNzcywgZWFjaCwgaHRtbCwgdGV4dCwgaXMsIGluZGV4LCBlcSwgYXBwZW5kLCBwcmVwZW5kLCBuZXh0LCBuZXh0QWxsLCBwcmV2LCBwcmV2QWxsLCBwYXJlbnQsIHBhcmVudHMsIGNsb3Nlc3QsIGZpbmQsIGNoaWxkcmVuLCBmaWx0ZXIsIHJlbW92ZSB9IGZyb20gJ2RvbTcnO1xudmFyIE1ldGhvZHMgPSB7XG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgYXR0cjogYXR0cixcbiAgcmVtb3ZlQXR0cjogcmVtb3ZlQXR0cixcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIHRyaWdnZXI6IHRyaWdnZXIsXG4gIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQsXG4gIG91dGVyV2lkdGg6IG91dGVyV2lkdGgsXG4gIG91dGVySGVpZ2h0OiBvdXRlckhlaWdodCxcbiAgc3R5bGVzOiBzdHlsZXMsXG4gIG9mZnNldDogb2Zmc2V0LFxuICBjc3M6IGNzcyxcbiAgZWFjaDogZWFjaCxcbiAgaHRtbDogaHRtbCxcbiAgdGV4dDogdGV4dCxcbiAgaXM6IGlzLFxuICBpbmRleDogaW5kZXgsXG4gIGVxOiBlcSxcbiAgYXBwZW5kOiBhcHBlbmQsXG4gIHByZXBlbmQ6IHByZXBlbmQsXG4gIG5leHQ6IG5leHQsXG4gIG5leHRBbGw6IG5leHRBbGwsXG4gIHByZXY6IHByZXYsXG4gIHByZXZBbGw6IHByZXZBbGwsXG4gIHBhcmVudDogcGFyZW50LFxuICBwYXJlbnRzOiBwYXJlbnRzLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICBmaW5kOiBmaW5kLFxuICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gIGZpbHRlcjogZmlsdGVyLFxuICByZW1vdmU6IHJlbW92ZVxufTtcbk9iamVjdC5rZXlzKE1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZE5hbWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQuZm4sIG1ldGhvZE5hbWUsIHtcbiAgICB2YWx1ZTogTWV0aG9kc1ttZXRob2ROYW1lXSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KTtcbn0pO1xuZXhwb3J0IGRlZmF1bHQgJDsiLCJpbXBvcnQgeyBnZXRXaW5kb3cgfSBmcm9tICdzc3Itd2luZG93JztcbnZhciBicm93c2VyO1xuXG5mdW5jdGlvbiBjYWxjQnJvd3NlcigpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuXG4gIGZ1bmN0aW9uIGlzU2FmYXJpKCkge1xuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ3NhZmFyaScpID49IDAgJiYgdWEuaW5kZXhPZignY2hyb21lJykgPCAwICYmIHVhLmluZGV4T2YoJ2FuZHJvaWQnKSA8IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzRWRnZTogISF3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS9nKSxcbiAgICBpc1NhZmFyaTogaXNTYWZhcmkoKSxcbiAgICBpc1dlYlZpZXc6IC8oaVBob25lfGlQb2R8aVBhZCkuKkFwcGxlV2ViS2l0KD8hLipTYWZhcmkpL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QnJvd3NlcigpIHtcbiAgaWYgKCFicm93c2VyKSB7XG4gICAgYnJvd3NlciA9IGNhbGNCcm93c2VyKCk7XG4gIH1cblxuICByZXR1cm4gYnJvd3Nlcjtcbn1cblxuZXhwb3J0IHsgZ2V0QnJvd3NlciB9OyIsImltcG9ydCB7IGdldFdpbmRvdyB9IGZyb20gJ3Nzci13aW5kb3cnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydCB9IGZyb20gJy4vZ2V0LXN1cHBvcnQnO1xudmFyIGRldmljZTtcblxuZnVuY3Rpb24gY2FsY0RldmljZShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgdXNlckFnZW50ID0gX3JlZi51c2VyQWdlbnQ7XG5cbiAgdmFyIHN1cHBvcnQgPSBnZXRTdXBwb3J0KCk7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIHBsYXRmb3JtID0gd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybTtcbiAgdmFyIHVhID0gdXNlckFnZW50IHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgZGV2aWNlID0ge1xuICAgIGlvczogZmFsc2UsXG4gICAgYW5kcm9pZDogZmFsc2VcbiAgfTtcbiAgdmFyIHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgdmFyIHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xuICB2YXIgYW5kcm9pZCA9IHVhLm1hdGNoKC8oQW5kcm9pZCk7P1tcXHNcXC9dKyhbXFxkLl0rKT8vKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIHZhciBpcGFkID0gdWEubWF0Y2goLyhpUGFkKS4qT1NcXHMoW1xcZF9dKykvKTtcbiAgdmFyIGlwb2QgPSB1YS5tYXRjaCgvKGlQb2QpKC4qT1NcXHMoW1xcZF9dKykpPy8pO1xuICB2YXIgaXBob25lID0gIWlwYWQgJiYgdWEubWF0Y2goLyhpUGhvbmVcXHNPU3xpT1MpXFxzKFtcXGRfXSspLyk7XG4gIHZhciB3aW5kb3dzID0gcGxhdGZvcm0gPT09ICdXaW4zMic7XG4gIHZhciBtYWNvcyA9IHBsYXRmb3JtID09PSAnTWFjSW50ZWwnOyAvLyBpUGFkT3MgMTMgZml4XG5cbiAgdmFyIGlQYWRTY3JlZW5zID0gWycxMDI0eDEzNjYnLCAnMTM2NngxMDI0JywgJzgzNHgxMTk0JywgJzExOTR4ODM0JywgJzgzNHgxMTEyJywgJzExMTJ4ODM0JywgJzc2OHgxMDI0JywgJzEwMjR4NzY4JywgJzgyMHgxMTgwJywgJzExODB4ODIwJywgJzgxMHgxMDgwJywgJzEwODB4ODEwJ107XG5cbiAgaWYgKCFpcGFkICYmIG1hY29zICYmIHN1cHBvcnQudG91Y2ggJiYgaVBhZFNjcmVlbnMuaW5kZXhPZihzY3JlZW5XaWR0aCArIFwieFwiICsgc2NyZWVuSGVpZ2h0KSA+PSAwKSB7XG4gICAgaXBhZCA9IHVhLm1hdGNoKC8oVmVyc2lvbilcXC8oW1xcZC5dKykvKTtcbiAgICBpZiAoIWlwYWQpIGlwYWQgPSBbMCwgMSwgJzEzXzBfMCddO1xuICAgIG1hY29zID0gZmFsc2U7XG4gIH0gLy8gQW5kcm9pZFxuXG5cbiAgaWYgKGFuZHJvaWQgJiYgIXdpbmRvd3MpIHtcbiAgICBkZXZpY2Uub3MgPSAnYW5kcm9pZCc7XG4gICAgZGV2aWNlLmFuZHJvaWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGlwYWQgfHwgaXBob25lIHx8IGlwb2QpIHtcbiAgICBkZXZpY2Uub3MgPSAnaW9zJztcbiAgICBkZXZpY2UuaW9zID0gdHJ1ZTtcbiAgfSAvLyBFeHBvcnQgb2JqZWN0XG5cblxuICByZXR1cm4gZGV2aWNlO1xufVxuXG5mdW5jdGlvbiBnZXREZXZpY2Uob3ZlcnJpZGVzKSB7XG4gIGlmIChvdmVycmlkZXMgPT09IHZvaWQgMCkge1xuICAgIG92ZXJyaWRlcyA9IHt9O1xuICB9XG5cbiAgaWYgKCFkZXZpY2UpIHtcbiAgICBkZXZpY2UgPSBjYWxjRGV2aWNlKG92ZXJyaWRlcyk7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlO1xufVxuXG5leHBvcnQgeyBnZXREZXZpY2UgfTsiLCJpbXBvcnQgeyBnZXRXaW5kb3csIGdldERvY3VtZW50IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG52YXIgc3VwcG9ydDtcblxuZnVuY3Rpb24gY2FsY1N1cHBvcnQoKSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIGRvY3VtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbiAgcmV0dXJuIHtcbiAgICB0b3VjaDogISEoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpLFxuICAgIHBvaW50ZXJFdmVudHM6ICEhd2luZG93LlBvaW50ZXJFdmVudCAmJiAnbWF4VG91Y2hQb2ludHMnIGluIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+PSAwLFxuICAgIG9ic2VydmVyOiBmdW5jdGlvbiBjaGVja09ic2VydmVyKCkge1xuICAgICAgcmV0dXJuICdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgfHwgJ1dlYmtpdE11dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdztcbiAgICB9KCksXG4gICAgcGFzc2l2ZUxpc3RlbmVyOiBmdW5jdGlvbiBjaGVja1Bhc3NpdmVMaXN0ZW5lcigpIHtcbiAgICAgIHZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgc3VwcG9ydHNQYXNzaXZlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmVMaXN0ZW5lcicsIG51bGwsIG9wdHMpO1xuICAgICAgfSBjYXRjaCAoZSkgey8vIE5vIHN1cHBvcnRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZTtcbiAgICB9KCksXG4gICAgZ2VzdHVyZXM6IGZ1bmN0aW9uIGNoZWNrR2VzdHVyZXMoKSB7XG4gICAgICByZXR1cm4gJ29uZ2VzdHVyZXN0YXJ0JyBpbiB3aW5kb3c7XG4gICAgfSgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gIGlmICghc3VwcG9ydCkge1xuICAgIHN1cHBvcnQgPSBjYWxjU3VwcG9ydCgpO1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnQ7XG59XG5cbmV4cG9ydCB7IGdldFN1cHBvcnQgfTsiLCJpbXBvcnQgeyBnZXREb2N1bWVudCwgZ2V0V2luZG93IH0gZnJvbSAnc3NyLXdpbmRvdyc7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb3BzKG9iaikge1xuICB2YXIgb2JqZWN0ID0gb2JqO1xuICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHRyeSB7XG4gICAgICBvYmplY3Rba2V5XSA9IG51bGw7XG4gICAgfSBjYXRjaCAoZSkgey8vIG5vIGdldHRlciBmb3Igb2JqZWN0XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gc29tZXRoaW5nIGdvdCB3cm9uZ1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGNhbGxiYWNrLCBkZWxheSkge1xuICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgIGRlbGF5ID0gMDtcbiAgfVxuXG4gIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XG59XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIERhdGUubm93KCk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWwpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdygpO1xuICB2YXIgc3R5bGU7XG5cbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG4gIH1cblxuICBpZiAoIXN0eWxlICYmIGVsLmN1cnJlbnRTdHlsZSkge1xuICAgIHN0eWxlID0gZWwuY3VycmVudFN0eWxlO1xuICB9XG5cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZWwuc3R5bGU7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zbGF0ZShlbCwgYXhpcykge1xuICBpZiAoYXhpcyA9PT0gdm9pZCAwKSB7XG4gICAgYXhpcyA9ICd4JztcbiAgfVxuXG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coKTtcbiAgdmFyIG1hdHJpeDtcbiAgdmFyIGN1clRyYW5zZm9ybTtcbiAgdmFyIHRyYW5zZm9ybU1hdHJpeDtcbiAgdmFyIGN1clN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCk7XG5cbiAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICBjdXJUcmFuc2Zvcm0gPSBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUud2Via2l0VHJhbnNmb3JtO1xuXG4gICAgaWYgKGN1clRyYW5zZm9ybS5zcGxpdCgnLCcpLmxlbmd0aCA+IDYpIHtcbiAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgnLCcsICcuJyk7XG4gICAgICB9KS5qb2luKCcsICcpO1xuICAgIH0gLy8gU29tZSBvbGQgdmVyc2lvbnMgb2YgV2Via2l0IGNob2tlIHdoZW4gJ25vbmUnIGlzIHBhc3NlZDsgcGFzc1xuICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuXG5cbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBuZXcgd2luZG93LldlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2Zvcm1NYXRyaXggPSBjdXJTdHlsZS5Nb3pUcmFuc2Zvcm0gfHwgY3VyU3R5bGUuT1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5Nc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS5tc1RyYW5zZm9ybSB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICBtYXRyaXggPSB0cmFuc2Zvcm1NYXRyaXgudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgIC8vIExhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDE7IC8vIENyYXp5IElFMTAgTWF0cml4XG4gICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzEyXSk7IC8vIE5vcm1hbCBCcm93c2Vyc1xuICAgICAgZWxzZSBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs0XSk7XG4gIH1cblxuICBpZiAoYXhpcyA9PT0gJ3knKSB7XG4gICAgLy8gTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeCkgY3VyVHJhbnNmb3JtID0gdHJhbnNmb3JtTWF0cml4Lm00MjsgLy8gQ3JhenkgSUUxMCBNYXRyaXhcbiAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNikgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTNdKTsgLy8gTm9ybWFsIEJyb3dzZXJzXG4gICAgICBlbHNlIGN1clRyYW5zZm9ybSA9IHBhcnNlRmxvYXQobWF0cml4WzVdKTtcbiAgfVxuXG4gIHJldHVybiBjdXJUcmFuc2Zvcm0gfHwgMDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGwgJiYgby5jb25zdHJ1Y3RvciAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpID09PSAnT2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNOb2RlKG5vZGUpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gbm9kZSAmJiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSAxMSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgdmFyIHRvID0gT2JqZWN0KGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXSk7XG4gIHZhciBub0V4dGVuZCA9IFsnX19wcm90b19fJywgJ2NvbnN0cnVjdG9yJywgJ3Byb3RvdHlwZSddO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIG5leHRTb3VyY2UgPSBpIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IGkgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbaV07XG5cbiAgICBpZiAobmV4dFNvdXJjZSAhPT0gdW5kZWZpbmVkICYmIG5leHRTb3VyY2UgIT09IG51bGwgJiYgIWlzTm9kZShuZXh0U291cmNlKSkge1xuICAgICAgdmFyIGtleXNBcnJheSA9IE9iamVjdC5rZXlzKE9iamVjdChuZXh0U291cmNlKSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG5vRXh0ZW5kLmluZGV4T2Yoa2V5KSA8IDA7XG4gICAgICB9KTtcblxuICAgICAgZm9yICh2YXIgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDsgbmV4dEluZGV4IDwgbGVuOyBuZXh0SW5kZXggKz0gMSkge1xuICAgICAgICB2YXIgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG5cbiAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICBpZiAoaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICghaXNPYmplY3QodG9bbmV4dEtleV0pICYmIGlzT2JqZWN0KG5leHRTb3VyY2VbbmV4dEtleV0pKSB7XG4gICAgICAgICAgICB0b1tuZXh0S2V5XSA9IHt9O1xuXG4gICAgICAgICAgICBpZiAobmV4dFNvdXJjZVtuZXh0S2V5XS5fX3N3aXBlcl9fKSB7XG4gICAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4dGVuZCh0b1tuZXh0S2V5XSwgbmV4dFNvdXJjZVtuZXh0S2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbmZ1bmN0aW9uIGJpbmRNb2R1bGVNZXRob2RzKGluc3RhbmNlLCBvYmopIHtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICBPYmplY3Qua2V5cyhvYmpba2V5XSkuZm9yRWFjaChmdW5jdGlvbiAoc3ViS2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV1bc3ViS2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9ialtrZXldW3N1YktleV0gPSBvYmpba2V5XVtzdWJLZXldLmJpbmQoaW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtrZXldID0gb2JqW2tleV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VzVG9TZWxlY3RvcihjbGFzc2VzKSB7XG4gIGlmIChjbGFzc2VzID09PSB2b2lkIDApIHtcbiAgICBjbGFzc2VzID0gJyc7XG4gIH1cblxuICByZXR1cm4gXCIuXCIgKyBjbGFzc2VzLnRyaW0oKS5yZXBsYWNlKC8oW1xcLjohXFwvXSkvZywgJ1xcXFwkMScpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgLnJlcGxhY2UoLyAvZywgJy4nKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudElmTm90RGVmaW5lZCgkY29udGFpbmVyLCBwYXJhbXMsIGNyZWF0ZUVsZW1lbnRzLCBjaGVja1Byb3BzKSB7XG4gIHZhciBkb2N1bWVudCA9IGdldERvY3VtZW50KCk7XG5cbiAgaWYgKGNyZWF0ZUVsZW1lbnRzKSB7XG4gICAgT2JqZWN0LmtleXMoY2hlY2tQcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXBhcmFtc1trZXldICYmIHBhcmFtcy5hdXRvID09PSB0cnVlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2hlY2tQcm9wc1trZXldO1xuICAgICAgICAkY29udGFpbmVyLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgcGFyYW1zW2tleV0gPSBlbGVtZW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZXhwb3J0IHsgZGVsZXRlUHJvcHMsIG5leHRUaWNrLCBub3csIGdldFRyYW5zbGF0ZSwgaXNPYmplY3QsIGV4dGVuZCwgYmluZE1vZHVsZU1ldGhvZHMsIGdldENvbXB1dGVkU3R5bGUsIGNsYXNzZXNUb1NlbGVjdG9yLCBjcmVhdGVFbGVtZW50SWZOb3REZWZpbmVkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuaW1wb3J0IEhlcm9TbGlkZXIgZnJvbSAnLi4vbW9kdWxlcy9oZXJvLXNsaWRlci9fc2NyaXB0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3c3UgPSB7XHJcbiAgICB2ZXJ0aWNhbE5hdml0YXRpb246IG5ldyBXc3VuYXZpZ2F0aW9uU2l0ZSgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVWZXJ0aWNhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCgpLFxyXG4gICAgaGVhZGVyR2xvYmFsOiBuZXcgV3N1SGVhZGVyR2xvYmFsKCksXHJcbiAgICBhY2NvcmRpb246IG5ldyBXc3VBY2NvcmRpb24oKSxcclxuICAgIGNvbGxhcHNhYmxlOiBuZXcgV3N1Q29sbGFwc2FibGUoKSxcclxuICAgIG1lbnU6IG5ldyBXc3VNZW51KCksXHJcbiAgICBidXR0b246IG5ldyBXc3VCdXR0b24oKSxcclxuICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAvL3N1Ym1lbnVTbGlkZVZlcnRpY2FsOiBuZXcgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsKCksXHJcbiAgICB9LFxyXG4gICAgdmlkZW9GcmFtZTogbmV3IFdzdVZpZGVvRnJhbWUoKSxcclxuICAgIGhlcm9TbGlkZXI6IG5ldyBIZXJvU2xpZGVyKCksXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> 5830cc8 (Get swiper functional and test settings)
