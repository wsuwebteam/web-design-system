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

<<<<<<< HEAD
/***/ "./src/components/sticky-box/_script.js":
/*!**********************************************!*\
  !*** ./src/components/sticky-box/_script.js ***!
  \**********************************************/
=======
/***/ "./src/components/modal/_script.js":
/*!*****************************************!*\
  !*** ./src/components/modal/_script.js ***!
  \*****************************************/
>>>>>>> c782fd8 (Enhancement | Feedback edits)
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
<<<<<<< HEAD
=======
/* harmony import */ var _assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/ariaUpdate */ "./_assets/js/ariaUpdate.js");
>>>>>>> c782fd8 (Enhancement | Feedback edits)
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

<<<<<<< HEAD
var WsuStickyBox = /*#__PURE__*/function () {
  function WsuStickyBox() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuStickyBox);

    this.boxes = [];
    this.boxSelector = '.wsu-sticky-box';
=======


var WsuModal = /*#__PURE__*/function () {
  function WsuModal() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuModal);

>>>>>>> c782fd8 (Enhancement | Feedback edits)
    this.timer = false;
    this.init();
  }

<<<<<<< HEAD
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
=======
  _createClass(WsuModal, [{
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
        var eventElement = event.target; // Open Action

        if (eventElement.getAttribute('data-open')) {
          var modalId = eventElement.getAttribute('data-open');
          this.open(eventElement, modalId);
          this.focusFirst(modalId);

          if (!eventElement.classList.contains('return-focus')) {
            this.returnFocus(eventElement);
          }
        } // Close Action


        if (eventElement.classList.contains('wsu-modal__overlay') || eventElement.classList.contains('wsu-modal__close')) {
          this.close(eventElement);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "keyDownEvents",
    value: function keyDownEvents(event) {
      var _this = this;

      try {
        var modalList = document.querySelectorAll('.wsu-modal');
        modalList.forEach(function (modal) {
          if (event.key === 'Escape') {
            _this.close(event.target);
          }

          var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]):not(.wsu-modal__overlay), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
          var firstEl = focusableEls[0];
          var lastEl = focusableEls[focusableEls.length - 1];
          var tabKeyCode = 9;

          if (event.key === 'Tab' || event.keyCode === tabKeyCode) {
            if (event.shiftKey) {
              if (document.activeElement === firstEl) {
                lastEl.focus();
                event.preventDefault();
              }
            } else {
              if (document.activeElement === lastEl) {
                firstEl.focus();
                event.preventDefault();
              }
            }
          }
        });
>>>>>>> c782fd8 (Enhancement | Feedback edits)
      } catch (error) {
        console.error(error);
      }
    }
  }, {
<<<<<<< HEAD
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
=======
    key: "open",
    value: function open() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var modalId = arguments.length > 1 ? arguments[1] : undefined;
      var modal = document.getElementById(modalId) || false;
      if (!modal) return;
      modal.classList.remove('wsu-modal--hidden');
    }
  }, {
    key: "close",
    value: function close() {
      var eventElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var targetModal = eventElement.closest('.wsu-modal') || false;
      var focusEls = document.getElementsByClassName('return-focus')[0] || false;
      if (!targetModal) return;
      targetModal.classList.add('wsu-modal--hidden');
      focusEls.focus();
      var myTimeout = setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }
  }, {
    key: "focusFirst",
    value: function focusFirst(modalId) {
      var modal = document.getElementById(modalId) || false;
      if (!modal) false;
      var focusableEls = modal.querySelectorAll('a[href]:not([disabled]), button:not([disabled]):not(.wsu-modal__overlay), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
      var firstEl = focusableEls[0];
      firstEl.focus();
    }
  }, {
    key: "returnFocus",
    value: function returnFocus(eventElement) {
      var modalTriggers = document.querySelectorAll('.return-focus');
      modalTriggers.forEach(function (trigger) {
        trigger.classList.remove('return-focus');
      });
      eventElement.classList.add('return-focus');
    }
  }]);

  return WsuModal;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuModal);
>>>>>>> c782fd8 (Enhancement | Feedback edits)

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
<<<<<<< HEAD
/* harmony import */ var _components_sticky_box_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sticky-box/_script */ "./src/components/sticky-box/_script.js");
/* harmony import */ var _components_anchor_menu_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/anchor-menu/_script */ "./src/components/anchor-menu/_script.js");
/* harmony import */ var _modules_modal_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/modal/_script */ "./src/modules/modal/_script.js");
=======
/* harmony import */ var _components_modal_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/modal/_script */ "./src/components/modal/_script.js");
>>>>>>> c782fd8 (Enhancement | Feedback edits)
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
<<<<<<< HEAD
  stickyBox: new _components_sticky_box_script__WEBPACK_IMPORTED_MODULE_10__["default"](),
  wsuAnchorMenu: new _components_anchor_menu_script__WEBPACK_IMPORTED_MODULE_11__["default"]()
  modal: new _modules_modal_script__WEBPACK_IMPORTED_MODULE_10__["default"]()
=======
  modal: new _components_modal_script__WEBPACK_IMPORTED_MODULE_10__["default"]()
>>>>>>> c782fd8 (Enhancement | Feedback edits)
};
})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1DLEdBQUcsR0FBRztBQUNSQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUFJN0IsMkZBQUosRUFEWjtBQUVSOEIsRUFBQUEsc0JBQXNCLEVBQUUsSUFBSUgsZ0ZBQUosRUFGaEI7QUFHUkksRUFBQUEsd0JBQXdCLEVBQUUsSUFBSS9ELDZGQUFKLEVBSGxCO0FBSVJnRSxFQUFBQSxZQUFZLEVBQUUsSUFBSTVCLDRFQUFKLEVBSk47QUFLUjZCLEVBQUFBLFNBQVMsRUFBRSxJQUFJbEYsb0VBQUosRUFMSDtBQU1SbUYsRUFBQUEsV0FBVyxFQUFFLElBQUl4RSxtRkFBSixFQU5MO0FBT1J5RSxFQUFBQSxJQUFJLEVBQUUsSUFBSXJDLCtEQUFKLEVBUEU7QUFRUnhDLEVBQUFBLE1BQU0sRUFBRSxJQUFJRixpRUFBSixFQVJBO0FBU1JnRixFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBVEo7QUFZUkMsRUFBQUEsVUFBVSxFQUFFLElBQUkvRCxtRkFBSixFQVpKO0FBYVJvQyxFQUFBQSxLQUFLLEVBQUUsSUFBSUwsOERBQUo7QUFiQyxDQUFaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9tb2RhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9idW5kbGVzL3dzdS1kZXNpZ24tc3lzdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyaWFVcGRhdGUgPSAoIGFjdGlvbiwgc2VsZWN0b3IgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaChcclxuICAgICAgICAoIGVsZW1lbnQsIGkgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoYWN0aW9uTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY29uc3QgYXJpYVVwZGF0ZUVsZW1lbnQgPSAoIGVsZW1lbnQsIGFjdGlvbiApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFyaWFVcGRhdGVFbGVtZW50LCBhcmlhVXBkYXRlIH07IiwiY29uc3QgZWxlbWVudEdldCA9ICggeyBwYXJlbnQgPSBmYWxzZSwgZWxlbWVudENsYXNzID0gZmFsc2UgfSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnRDbGFzcyApIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gcGFyZW50ID8gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAwIDwgZWxlbWVudHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZWxlbWVudEdldENsb3Nlc3QgPSAoIGVsZW1lbnQsIHBhcmVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCggJy4nICsgcGFyZW50Q2xhc3MgKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZWxlbWVudEdldFNpYmxpbmdzID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcclxuXHRsZXQgc2libGluZ3MgPSBbXTtcclxuXHRsZXQgc2libGluZyA9IGVsZW1lbnQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxyXG5cdHdoaWxlICggc2libGluZyApIHtcclxuXHJcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtZW50KSB7XHJcblxyXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2libGluZ3M7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCwgZWxlbWVudEdldFNpYmxpbmdzIH0iLCJjb25zdCBrZXlEb3duRXZlbnQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGRvbUV2ZW50ID0gZmFsc2UsXHJcbiAgICAgICAga2V5ICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpbkNsYXNzICA9IGZhbHNlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCAhIGRvbUV2ZW50IHx8ICEga2V5ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudEVsZW1lbnQgPSBkb21FdmVudC50YXJnZXQ7XHJcbiAgICBsZXQgZXZlbnRLZXkgICAgID0gZG9tRXZlbnQua2V5O1xyXG5cclxuICAgIGlmICgga2V5ID09PSBldmVudEtleSAmJiBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGluQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsb3Nlc3QoICcuJyArIGluQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBrZXlEb3duRXZlbnQgfTsiLCJjb25zdCB0b2dnbGVBcmlhID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgPSBmYWxzZSxcclxuICAgICAgICB0b2dnbGVCeUNsYXNzID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGVCeUNsYXNzICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggdG9nZ2xlQnlDbGFzcyApICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmICdmYWxzZScgIT0gd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIHRydWUgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCB0cnVlICk7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyx0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCBmYWxzZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQW5pbWF0aW5nID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlZER1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGFuaW1hdGVDbGFzcyAgICAgPSAnd3N1LWFuaW1hdGluZycsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCAgICA9IGZhbHNlLFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCAgICAgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGlzQW5pbWF0ZWQgJiYgd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggYW5pbWF0ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhbmltYXRlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhbmltYXRlSGVpZ2h0ICYmIGNoaWxkRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkRHVyYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYW5pbWF0ZUNsYXNzICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVNob3VsZCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXZlbnRFbGVtZW50ID0gZmFsc2UsIFxyXG4gICAgICAgIGNsaWNrQ2xhc3MgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1BhcmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrU2libGluZyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrRW1wdHlMaW5rID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjbGlja0NsYXNzICYmIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tFbXB0eUxpbmsgJiYgZXZlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICYmICcjJyA9PT0gZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1BhcmVudCAmJiBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tTaWJsaW5nICYmIGV2ZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlTGFiZWwgPSAoIHByb3BzLCBpc0V4cGFuZGVkICkgPT4ge1xyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXhwYW5kZWRUZXh0ID0gJ0Nsb3NlJywgXHJcbiAgICAgICAgY29sbGFwc2VkVGV4dCA9ICdPcGVuJywgXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBwcm9wcyApO1xyXG5cclxuXHJcbiAgICBpZiAoIGFyaWFMYWJlbEVsZW1lbnQgJiYgYXJpYUxhYmVsRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSApIHtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYXJpYUxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICggaXNFeHBhbmRlZCApID8gZXhwYW5kZWRUZXh0IDogY29sbGFwc2VkVGV4dDtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggZXhwYW5kZWRUZXh0ICsgJ3wnICsgY29sbGFwc2VkVGV4dCwgXCJnXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggcmVnZXggKTtcclxuXHJcbiAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uICk7XHJcblxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlSGVpZ2h0ID0gKCBwcm9wcywgaXNFeHBhbmRpbmcgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBcclxuICAgICAgICBjaGlsZEVsZW1lbnQgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ID0gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2hpbGRFbGVtZW50ICYmIGFuaW1hdGVIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRIZWlnaHQgPSAoIGNoaWxkRWxlbWVudC5zY3JvbGxIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZEVsZW1lbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggISBpc0V4cGFuZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSwgdG9nZ2xlQW5pbWF0aW5nLCB0b2dnbGVTaG91bGQgfTsiLCJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9OyIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiXHJcbmNvbnN0IHdzdUdldEVsZW1lbnRIZWlnaHQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1U2xpZGVEb3duID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGVsZW1lbnQgPSBmYWxzZSwgLy8gRWxlbWVudCB0byBleHBhbmRcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsIC8vIEV4dHJhIGhpZWdodCBqdXN0IGluIGNhc2VcclxuICAgICAgICB0aW1pbmcgPSAxNTAsIC8vIGhvdyBsb25nIHdpbGwgdGhlIGFuaW1hdGlvbiBydW4gXHJcbiAgICAgICAgYXJpYUVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wc1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhcnRIZWlnaHQgPCAxMCApIHsgLy8gYXNzdW1lIGNsb3NlZFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGNzcyBkb2Vzbid0IHJlZ2lzdGVyIGl0LlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3N1U2xpZGVEb3duOyIsImNvbnN0IHVwZGF0ZUFyaWFFbGVtZW50ID0gKCBhY3Rpb24sIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVBcmlhRWxlbWVudDsiLCJjb25zdCB3c3VNZW51RXhwYW5kVXAgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvL3N1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZERvd24gPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9LCBcclxuICAgICAgICA1MDBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmRUb2dnbGUgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSAgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBzaG91bGRFeHBhbmQoIG5hdkl0ZW0gKSApIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdvcGVuJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kVXAoIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdjbG9zZSc7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3VsZEV4cGFuZCA9ICggbmF2SXRlbSApID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCAhIG5hdkl0ZW0uaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpIHx8ICdmYWxzZScgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdU1lbnVFeHBhbmRVcCwgd3N1TWVudUV4cGFuZFRvZ2dsZSwgd3N1TWVudUV4cGFuZERvd24gIH07IiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYW5pbWF0ZS0tc3VibWVudS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWw7IiwiaW1wb3J0IHtcclxuICAgIHdzdUFyaWFFeHBhbmRlZCxcclxuICAgIHdzdUFyaWFJc0V4cGFuZGVkLFxyXG4gICAgd3N1Q2xhc3NBZGQsXHJcbiAgICB3c3VDbGFzc1JlbW92ZSxcclxuICAgIHdzdUFuaW1hdGVTbGlkZURvd24sXHJcbiAgICB3c3VBbmltYXRlU2xpZGVVcCxcclxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcclxuXHJcbmNsYXNzIFdzdUFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS1hY2NvcmRpb24tLW9wZW4nO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkgeyBcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hY2NvcmRpb24tLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtYWNjb3JkaW9uX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFjY29yZGlvbjsgIiwiY2xhc3MgV3N1QnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmVCdXR0b24oIGV2ZW50LnRhcmdldCwgJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcsIFsnUGF1c2UnLCdQbGF5J10gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2dnbGVBY3RpdmVCdXR0b24oIGJ1dHRvbiwgYnV0dG9uQ2xhc3MsIGxhYmVscyApIHtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gYnV0dG9uQ2xhc3MgKyAnLS1hY3RpdmUnO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPyBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCBhY3RpdmVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMV0sIGxhYmVsc1swXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1swXSwgbGFiZWxzWzFdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUJ1dHRvbjsgICIsImltcG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVTaG91bGQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHt3c3VTbGlkZURvd259IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzJztcclxuXHJcbmNsYXNzIFdzdUNvbGxhcHNhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjb250ZW50Q2xhc3MnKSApID8gYXR0cy5jb250ZW50Q2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS1jb250ZW50JztcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyBcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0Q2xvc2VzdCggZXZlbnRFbGVtZW50LCB0aGlzLndyYXBwZXJDbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50R2V0ICggeyBwYXJlbnQ6IHdyYXBwZXIsIGVsZW1lbnRDbGFzczogdGhpcy5jb250ZW50Q2xhc3MgfSApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VTbGlkZURvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudDogd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VDb2xsYXBzYWJsZTsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIG5hdiApO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOyAiLCJjbGFzcyBXc3VWaWRlb0ZyYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmJhc3NDbGFzcyA9ICd3c3UtdmlkZW8tZnJhbWUnO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQncmVzaXplJywgXHJcblx0XHRcdCgpID0+IHsgdGhpcy5yZXNpemUoKSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wbGF5JyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnICkgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tdG9nZ2xlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlb1dyYXBwZXIuaGFzQXR0cmlidXRlKCdkYXRhLXBsYXknKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlkZW9TcmMgPSB2aWRlb1dyYXBwZXIuZGF0YXNldC5wbGF5O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyApO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCgnd3N1LXZpZGVvLWZyYW1lX192aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VCYWNrZ3JvdW5kVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggdGhpcy5iYXNzQ2xhc3MgKyAnX192aWRlby1iYWNrZ3JvdW5kJyApO1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW8ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTVSBWaWRlbyBGcmFtZTogVmlkZW8gTm90IEZvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvWzBdICk7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKSApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VmlkZW9TaXplKCkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW9zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKCB2aWRlb3MgKS5mb3JFYWNoKCAoIHZpZGVvICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKyAyNjAgKSAqIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAoIHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgLyAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKiAwLjU2MjUgKSA+IHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VWaWRlb0ZyYW1lOyAgIiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcbmltcG9ydCB7IGVsZW1lbnRHZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuXHJcbmNsYXNzIFdzdU1lbnUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdPcGVuJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXN1Ym1lbnUtY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuXHJcbiAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzaWJsaW5ncyA9IGVsZW1lbnRHZXRTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBzaWJsaW5ncy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggZWxlbWVudCApICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggbmF2RWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgJiYgJ3RydWUnID09IG5hdkVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU1lbnU7ICIsImltcG9ydCB7IGVsZW1lbnRHZXQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcbmltcG9ydCB7IHRvZ2dsZUFyaWEsIHRvZ2dsZVNob3VsZCwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHsga2V5RG93bkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9ldmVudHMnO1xyXG5cclxuY2xhc3MgV3N1bmF2aWdhdGlvblNpdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMud3JhcHBlckNsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3dyYXBwZXJDbGFzcycpICkgPyBhdHRzLndyYXBwZXJDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLmNsb3NlQ2xhc3MgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjbG9zZUNsYXNzJykgKSA/IGF0dHMuY2xvc2VDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1jbG9zZSc7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2xhc3MgICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnb3BlbkNsYXNzJykgKSA/IGF0dHMub3BlbkNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLW9wZW4nO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3RvZ2dsZUNsYXNzJykgKSA/IGF0dHMudG9nZ2xlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmFuaW1hdGluZ0NsYXNzICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpbmdDbGFzcycpICkgPyBhdHRzLmFuaW1hdGluZ0NsYXNzIDogJ3dzdS1hbmltYXRpbmcnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltaW5nICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGlvblRpbWluZycpICkgPyBhdHRzLmFuaW1hdGlvblRpbWluZyA6IDMwMDtcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBDbG9zZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLmNsb3NlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIE9wZW4gTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5vcGVuQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgVG9nZ2xlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQXJpYSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQnlDbGFzczogdGhpcy5hY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZXZlbnRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VuYXZpZ2F0aW9uU2l0ZTsgXHJcbiIsImltcG9ydCB7IHdzdU1lbnVFeHBhbmRUb2dnbGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kXCI7XHJcbmltcG9ydCB7IGFyaWFVcGRhdGVFbGVtZW50IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdUhlYWRlckdsb2JhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCB3c3VNZW51RXhwYW5kVG9nZ2xlKCBuYXZFbGVtZW50ICkgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tZG93bicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ29wZW4nICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLXVwJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnY2xvc2UnICk7XHJcblxyXG4gICAgICAgICAgICB9XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VIZWFkZXJHbG9iYWw7IiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjtcblxuY2xhc3MgV3N1TW9kYWwge1xuXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcblxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQna2V5ZG93bicsXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHR9XG5cbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XG5cblx0XHR0cnkge1xuXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1vcGVuJyApICkge1xuXHRcdFx0XHR2YXIgbW9kYWxJZCA9IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLW9wZW4nICk7XG5cdFx0XHRcdHRoaXMub3BlbiggZXZlbnRFbGVtZW50LCBtb2RhbElkICk7XG5cdFx0XHRcdHRoaXMuZm9jdXNGaXJzdCggbW9kYWxJZCApO1xuXG5cdFx0XHRcdGlmICggISBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAncmV0dXJuLWZvY3VzJyApICkge1xuXHRcdFx0XHRcdHRoaXMucmV0dXJuRm9jdXMoIGV2ZW50RWxlbWVudCApO1xuXHRcdFx0XHR9XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW1vZGFsX19vdmVybGF5JyApIHx8IGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1tb2RhbF9fY2xvc2UnICkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XG5cbiAgICAgICAgICAgIH1cblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cblx0fVxuXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XG5cbiAgICAgICAgdHJ5IHtcblxuXHRcdFx0dmFyIG1vZGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3UtbW9kYWwnKTtcblxuXHRcdFx0bW9kYWxMaXN0LmZvckVhY2goIChtb2RhbCkgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnRXNjYXBlJyApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnRXNjYXBlIHByZXNzZWQnKTtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCBldmVudC50YXJnZXQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmb2N1c2FibGVFbHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoLndzdS1tb2RhbF9fb3ZlcmxheSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyk7XG5cdFx0XHRcdHZhciBmaXJzdEVsID0gZm9jdXNhYmxlRWxzWzBdO1xuXHRcdFx0XHR2YXIgbGFzdEVsID0gZm9jdXNhYmxlRWxzW2ZvY3VzYWJsZUVscy5sZW5ndGggLSAxXTtcblx0XHRcdFx0dmFyIHRhYktleUNvZGUgPSA5O1xuXG5cdFx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXlDb2RlID09PSB0YWJLZXlDb2RlICkge1xuXHRcdFx0XHRcdGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWwgKSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RFbC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbCApIHtcblx0XHRcdFx0XHRcdFx0Zmlyc3RFbC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cbiAgICB9XG5cbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSwgbW9kYWxJZCApIHtcblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbW9kYWxJZCApIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmICggISBtb2RhbCApIHJldHVybjtcblxuXHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1tb2RhbC0taGlkZGVuJyk7XG5cbiAgICB9XG5cbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XG5cbiAgICAgICAgbGV0IHRhcmdldE1vZGFsID0gZXZlbnRFbGVtZW50LmNsb3Nlc3QoJy53c3UtbW9kYWwnKSB8fCBmYWxzZTtcblx0XHRsZXQgZm9jdXNFbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXR1cm4tZm9jdXMnKVswXSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoICEgdGFyZ2V0TW9kYWwgKSByZXR1cm47XG5cblx0XHR0YXJnZXRNb2RhbC5jbGFzc0xpc3QuYWRkKCd3c3UtbW9kYWwtLWhpZGRlbicpO1xuXG5cdFx0Zm9jdXNFbHMuZm9jdXMoKTtcblxuICAgICAgICBjb25zdCBteVRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgICAgICAgICB9LCAzMDBcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGZvY3VzRmlyc3QoIG1vZGFsSWQgKSB7XG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG1vZGFsSWQgKSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoICEgbW9kYWwgKSBmYWxzZTtcblxuICAgICAgICB2YXIgZm9jdXNhYmxlRWxzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KC53c3UtbW9kYWxfX292ZXJsYXkpJyk7XG5cdFx0dmFyIGZpcnN0RWwgPSBmb2N1c2FibGVFbHNbMF07XG5cdFx0Zmlyc3RFbC5mb2N1cygpO1xuXG4gICAgfVxuXG5cdHJldHVybkZvY3VzKCBldmVudEVsZW1lbnQgKSB7XG5cblx0XHR2YXIgbW9kYWxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXR1cm4tZm9jdXMnKTtcblxuXHRcdG1vZGFsVHJpZ2dlcnMuZm9yRWFjaCggKHRyaWdnZXIpID0+IHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgncmV0dXJuLWZvY3VzJyk7XG5cdFx0fSk7XG5cblx0XHRldmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3JldHVybi1mb2N1cycgKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV3N1TW9kYWw7XG4iLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG15VGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIDMwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU1vZGFsIGZyb20gJy4uL21vZHVsZXMvbW9kYWwvX3NjcmlwdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1ID0ge1xyXG4gICAgdmVydGljYWxOYXZpdGF0aW9uOiBuZXcgV3N1bmF2aWdhdGlvblNpdGUoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlVmVydGljYWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwoKSxcclxuICAgIGhlYWRlckdsb2JhbDogbmV3IFdzdUhlYWRlckdsb2JhbCgpLFxyXG4gICAgYWNjb3JkaW9uOiBuZXcgV3N1QWNjb3JkaW9uKCksXHJcbiAgICBjb2xsYXBzYWJsZTogbmV3IFdzdUNvbGxhcHNhYmxlKCksXHJcbiAgICBtZW51OiBuZXcgV3N1TWVudSgpLFxyXG4gICAgYnV0dG9uOiBuZXcgV3N1QnV0dG9uKCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcbiAgICBtb2RhbDogbmV3IFdzdU1vZGFsKCksXHJcbn1cclxuIl0sIm5hbWVzIjpbImFyaWFVcGRhdGUiLCJhY3Rpb24iLCJzZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJoYXNBdHRyaWJ1dGUiLCJyZWdleCIsImFjdGlvbkxhYmVsIiwibGFiZWwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXJpYVVwZGF0ZUVsZW1lbnQiLCJlbGVtZW50R2V0IiwicGFyZW50IiwiZWxlbWVudENsYXNzIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwiZWxlbWVudEdldENsb3Nlc3QiLCJwYXJlbnRDbGFzcyIsImNsb3Nlc3QiLCJlbGVtZW50R2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInNpYmxpbmciLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwia2V5RG93bkV2ZW50IiwicHJvcHMiLCJkb21FdmVudCIsImtleSIsImluQ2xhc3MiLCJldmVudEVsZW1lbnQiLCJ0YXJnZXQiLCJldmVudEtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJ0b2dnbGVBcmlhIiwid3JhcHBlciIsInRvZ2dsZUJ5Q2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIiwidG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiIsImlzQW5pbWF0ZWQiLCJhY3Rpb25QcmVmaXgiLCJhcmlhTGFiZWxFbGVtZW50IiwidG9nZ2xlSGVpZ2h0IiwidG9nZ2xlQW5pbWF0aW5nIiwidG9nZ2xlTGFiZWwiLCJhZGQiLCJyZW1vdmUiLCJhbmltYXRlZER1cmF0aW9uIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZUhlaWdodCIsImNoaWxkRWxlbWVudCIsInRpbWVyIiwic2V0VGltZW91dCIsInN0eWxlIiwibWF4SGVpZ2h0IiwidG9nZ2xlU2hvdWxkIiwiY2xpY2tDbGFzcyIsImNoZWNrUGFyZW50IiwiY2hlY2tTaWJsaW5nIiwiY2hlY2tFbXB0eUxpbmsiLCJwYXJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaXNFeHBhbmRlZCIsImV4cGFuZGVkVGV4dCIsImNvbGxhcHNlZFRleHQiLCJjb25zb2xlIiwibG9nIiwiUmVnRXhwIiwiaXNFeHBhbmRpbmciLCJoZWlnaHRQYWRkaW5nIiwiY2hpbGRFbGVtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwid3N1QW5pbWF0ZVNsaWRlRG93biIsImFyZ3MiLCJkdXJhdGlvbiIsImV4dHJhIiwicGFyc2VJbnQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJ3c3VDbGFzc0FkZCIsIndzdUNsYXNzUmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJ3c3VHZXRFbGVtZW50SGVpZ2h0IiwiZGlzcGxheSIsImhlaWdodCIsIndzdVNsaWRlRG93biIsInRpbWluZyIsImFyaWFFbGVtZW50Iiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJ1cGRhdGVBcmlhRWxlbWVudCIsIndzdU1lbnVFeHBhbmRVcCIsIm5hdkl0ZW0iLCJzdWJNZW51IiwibGFzdEVsZW1lbnRDaGlsZCIsIndzdU1lbnVFeHBhbmREb3duIiwid3N1TWVudUV4cGFuZFRvZ2dsZSIsInNob3VsZEV4cGFuZCIsIldzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCIsImF0dHMiLCJpbml0IiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50cyIsImJpbmQiLCJldmVudCIsIm5hdkVsZW1lbnQiLCJzaG91bGRDbG9zZSIsImVycm9yIiwiV3N1QWNjb3JkaW9uIiwib3BlbkNsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImFjY29yZGlvbkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiV3N1QnV0dG9uIiwidG9nZ2xlQWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uQ2xhc3MiLCJsYWJlbHMiLCJhY3RpdmVDbGFzcyIsIldzdUNvbGxhcHNhYmxlIiwid3JhcHBlckNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJ0b2dnbGVDbGFzcyIsImNvbnRlbnRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwia2V5RG93bkV2ZW50cyIsImNsb3NlIiwib3BlbiIsIm5hdiIsImJvZHkiLCJXc3VWaWRlb0ZyYW1lIiwiYmFzc0NsYXNzIiwic2V0VmlkZW9TaXplIiwid2luZG93IiwicmVzaXplIiwicGxheVZpZGVvIiwidG9nZ2xlQmFja2dyb3VuZFZpZGVvIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlbyIsInZpZGVvU3JjIiwiZGF0YXNldCIsInBsYXkiLCJwbGF5ZXIiLCJWaW1lbyIsIlBsYXllciIsInBhdXNlIiwidmlkZW9zIiwiQXJyYXkiLCJmcm9tIiwiaXNXaWRlVmlkZW8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiV3N1TWVudSIsImNsb3NlU2libGluZ3MiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU1vZGFsIiwibW9kYWxJZCIsImZvY3VzRmlyc3QiLCJyZXR1cm5Gb2N1cyIsIm1vZGFsTGlzdCIsIm1vZGFsIiwiZm9jdXNhYmxlRWxzIiwiZmlyc3RFbCIsImxhc3RFbCIsInRhYktleUNvZGUiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldE1vZGFsIiwiZm9jdXNFbHMiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJtb2RhbFRyaWdnZXJzIiwidHJpZ2dlciIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQyxHQUFHLEdBQUc7QUFDUkMsRUFBQUEsa0JBQWtCLEVBQUUsSUFBSVAsMkZBQUosRUFEWjtBQUVSUSxFQUFBQSxzQkFBc0IsRUFBRSxJQUFJSCxnRkFBSixFQUZoQjtBQUdSSSxFQUFBQSx3QkFBd0IsRUFBRSxJQUFJL0QsNkZBQUosRUFIbEI7QUFJUmdFLEVBQUFBLFlBQVksRUFBRSxJQUFJTiw0RUFBSixFQUpOO0FBS1JPLEVBQUFBLFNBQVMsRUFBRSxJQUFJbEYsb0VBQUosRUFMSDtBQU1SbUYsRUFBQUEsV0FBVyxFQUFFLElBQUl4RSxtRkFBSixFQU5MO0FBT1J5RSxFQUFBQSxJQUFJLEVBQUUsSUFBSXJDLCtEQUFKLEVBUEU7QUFRUnhDLEVBQUFBLE1BQU0sRUFBRSxJQUFJRixpRUFBSixFQVJBO0FBU1JnRixFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBVEo7QUFZUkMsRUFBQUEsVUFBVSxFQUFFLElBQUkvRCxtRkFBSixFQVpKO0FBYVIrQixFQUFBQSxLQUFLLEVBQUUsSUFBSUwsaUVBQUo7QUFiQyxDQUFaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL21vZGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9oZWFkZXItZ2xvYmFsL19oZWFkZXItZ2xvYmFsLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9idW5kbGVzL3dzdS1kZXNpZ24tc3lzdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyaWFVcGRhdGUgPSAoIGFjdGlvbiwgc2VsZWN0b3IgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaChcclxuICAgICAgICAoIGVsZW1lbnQsIGkgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoYWN0aW9uTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY29uc3QgYXJpYVVwZGF0ZUVsZW1lbnQgPSAoIGVsZW1lbnQsIGFjdGlvbiApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFyaWFVcGRhdGVFbGVtZW50LCBhcmlhVXBkYXRlIH07IiwiY29uc3QgZWxlbWVudEdldCA9ICggeyBwYXJlbnQgPSBmYWxzZSwgZWxlbWVudENsYXNzID0gZmFsc2UgfSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnRDbGFzcyApIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gcGFyZW50ID8gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAwIDwgZWxlbWVudHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZWxlbWVudEdldENsb3Nlc3QgPSAoIGVsZW1lbnQsIHBhcmVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCggJy4nICsgcGFyZW50Q2xhc3MgKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZWxlbWVudEdldFNpYmxpbmdzID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcclxuXHRsZXQgc2libGluZ3MgPSBbXTtcclxuXHRsZXQgc2libGluZyA9IGVsZW1lbnQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxyXG5cdHdoaWxlICggc2libGluZyApIHtcclxuXHJcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtZW50KSB7XHJcblxyXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2libGluZ3M7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCwgZWxlbWVudEdldFNpYmxpbmdzIH0iLCJjb25zdCBrZXlEb3duRXZlbnQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGRvbUV2ZW50ID0gZmFsc2UsXHJcbiAgICAgICAga2V5ICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpbkNsYXNzICA9IGZhbHNlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCAhIGRvbUV2ZW50IHx8ICEga2V5ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudEVsZW1lbnQgPSBkb21FdmVudC50YXJnZXQ7XHJcbiAgICBsZXQgZXZlbnRLZXkgICAgID0gZG9tRXZlbnQua2V5O1xyXG5cclxuICAgIGlmICgga2V5ID09PSBldmVudEtleSAmJiBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGluQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsb3Nlc3QoICcuJyArIGluQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBrZXlEb3duRXZlbnQgfTsiLCJjb25zdCB0b2dnbGVBcmlhID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgPSBmYWxzZSxcclxuICAgICAgICB0b2dnbGVCeUNsYXNzID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGVCeUNsYXNzICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggdG9nZ2xlQnlDbGFzcyApICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmICdmYWxzZScgIT0gd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIHRydWUgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCB0cnVlICk7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyx0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCBmYWxzZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQW5pbWF0aW5nID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlZER1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGFuaW1hdGVDbGFzcyAgICAgPSAnd3N1LWFuaW1hdGluZycsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCAgICA9IGZhbHNlLFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCAgICAgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGlzQW5pbWF0ZWQgJiYgd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggYW5pbWF0ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhbmltYXRlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhbmltYXRlSGVpZ2h0ICYmIGNoaWxkRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkRHVyYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYW5pbWF0ZUNsYXNzICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVNob3VsZCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXZlbnRFbGVtZW50ID0gZmFsc2UsIFxyXG4gICAgICAgIGNsaWNrQ2xhc3MgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1BhcmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrU2libGluZyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrRW1wdHlMaW5rID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjbGlja0NsYXNzICYmIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tFbXB0eUxpbmsgJiYgZXZlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICYmICcjJyA9PT0gZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1BhcmVudCAmJiBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tTaWJsaW5nICYmIGV2ZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlTGFiZWwgPSAoIHByb3BzLCBpc0V4cGFuZGVkICkgPT4ge1xyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXhwYW5kZWRUZXh0ID0gJ0Nsb3NlJywgXHJcbiAgICAgICAgY29sbGFwc2VkVGV4dCA9ICdPcGVuJywgXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBwcm9wcyApO1xyXG5cclxuXHJcbiAgICBpZiAoIGFyaWFMYWJlbEVsZW1lbnQgJiYgYXJpYUxhYmVsRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSApIHtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYXJpYUxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICggaXNFeHBhbmRlZCApID8gZXhwYW5kZWRUZXh0IDogY29sbGFwc2VkVGV4dDtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggZXhwYW5kZWRUZXh0ICsgJ3wnICsgY29sbGFwc2VkVGV4dCwgXCJnXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggcmVnZXggKTtcclxuXHJcbiAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uICk7XHJcblxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlSGVpZ2h0ID0gKCBwcm9wcywgaXNFeHBhbmRpbmcgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBcclxuICAgICAgICBjaGlsZEVsZW1lbnQgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ID0gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2hpbGRFbGVtZW50ICYmIGFuaW1hdGVIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRIZWlnaHQgPSAoIGNoaWxkRWxlbWVudC5zY3JvbGxIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZEVsZW1lbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggISBpc0V4cGFuZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSwgdG9nZ2xlQW5pbWF0aW5nLCB0b2dnbGVTaG91bGQgfTsiLCJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9OyIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiXHJcbmNvbnN0IHdzdUdldEVsZW1lbnRIZWlnaHQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1U2xpZGVEb3duID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGVsZW1lbnQgPSBmYWxzZSwgLy8gRWxlbWVudCB0byBleHBhbmRcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsIC8vIEV4dHJhIGhpZWdodCBqdXN0IGluIGNhc2VcclxuICAgICAgICB0aW1pbmcgPSAxNTAsIC8vIGhvdyBsb25nIHdpbGwgdGhlIGFuaW1hdGlvbiBydW4gXHJcbiAgICAgICAgYXJpYUVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wc1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhcnRIZWlnaHQgPCAxMCApIHsgLy8gYXNzdW1lIGNsb3NlZFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGNzcyBkb2Vzbid0IHJlZ2lzdGVyIGl0LlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3N1U2xpZGVEb3duOyIsImNvbnN0IHVwZGF0ZUFyaWFFbGVtZW50ID0gKCBhY3Rpb24sIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVBcmlhRWxlbWVudDsiLCJjb25zdCB3c3VNZW51RXhwYW5kVXAgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvL3N1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZERvd24gPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9LCBcclxuICAgICAgICA1MDBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmRUb2dnbGUgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSAgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBzaG91bGRFeHBhbmQoIG5hdkl0ZW0gKSApIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdvcGVuJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kVXAoIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdjbG9zZSc7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3VsZEV4cGFuZCA9ICggbmF2SXRlbSApID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCAhIG5hdkl0ZW0uaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpIHx8ICdmYWxzZScgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdU1lbnVFeHBhbmRVcCwgd3N1TWVudUV4cGFuZFRvZ2dsZSwgd3N1TWVudUV4cGFuZERvd24gIH07IiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYW5pbWF0ZS0tc3VibWVudS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWw7IiwiaW1wb3J0IHtcclxuICAgIHdzdUFyaWFFeHBhbmRlZCxcclxuICAgIHdzdUFyaWFJc0V4cGFuZGVkLFxyXG4gICAgd3N1Q2xhc3NBZGQsXHJcbiAgICB3c3VDbGFzc1JlbW92ZSxcclxuICAgIHdzdUFuaW1hdGVTbGlkZURvd24sXHJcbiAgICB3c3VBbmltYXRlU2xpZGVVcCxcclxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcclxuXHJcbmNsYXNzIFdzdUFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS1hY2NvcmRpb24tLW9wZW4nO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkgeyBcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hY2NvcmRpb24tLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtYWNjb3JkaW9uX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFjY29yZGlvbjsgIiwiY2xhc3MgV3N1QnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmVCdXR0b24oIGV2ZW50LnRhcmdldCwgJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcsIFsnUGF1c2UnLCdQbGF5J10gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2dnbGVBY3RpdmVCdXR0b24oIGJ1dHRvbiwgYnV0dG9uQ2xhc3MsIGxhYmVscyApIHtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gYnV0dG9uQ2xhc3MgKyAnLS1hY3RpdmUnO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPyBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCBhY3RpdmVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMV0sIGxhYmVsc1swXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1swXSwgbGFiZWxzWzFdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUJ1dHRvbjsgICIsImltcG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVTaG91bGQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHt3c3VTbGlkZURvd259IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzJztcclxuXHJcbmNsYXNzIFdzdUNvbGxhcHNhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjb250ZW50Q2xhc3MnKSApID8gYXR0cy5jb250ZW50Q2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS1jb250ZW50JztcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyBcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0Q2xvc2VzdCggZXZlbnRFbGVtZW50LCB0aGlzLndyYXBwZXJDbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50R2V0ICggeyBwYXJlbnQ6IHdyYXBwZXIsIGVsZW1lbnRDbGFzczogdGhpcy5jb250ZW50Q2xhc3MgfSApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VTbGlkZURvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudDogd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VDb2xsYXBzYWJsZTsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIG5hdiApO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOyAiLCJjbGFzcyBXc3VWaWRlb0ZyYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmJhc3NDbGFzcyA9ICd3c3UtdmlkZW8tZnJhbWUnO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQncmVzaXplJywgXHJcblx0XHRcdCgpID0+IHsgdGhpcy5yZXNpemUoKSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wbGF5JyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnICkgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tdG9nZ2xlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlb1dyYXBwZXIuaGFzQXR0cmlidXRlKCdkYXRhLXBsYXknKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlkZW9TcmMgPSB2aWRlb1dyYXBwZXIuZGF0YXNldC5wbGF5O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyApO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCgnd3N1LXZpZGVvLWZyYW1lX192aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VCYWNrZ3JvdW5kVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggdGhpcy5iYXNzQ2xhc3MgKyAnX192aWRlby1iYWNrZ3JvdW5kJyApO1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW8ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTVSBWaWRlbyBGcmFtZTogVmlkZW8gTm90IEZvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvWzBdICk7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKSApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VmlkZW9TaXplKCkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW9zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKCB2aWRlb3MgKS5mb3JFYWNoKCAoIHZpZGVvICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKyAyNjAgKSAqIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAoIHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgLyAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKiAwLjU2MjUgKSA+IHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VWaWRlb0ZyYW1lOyAgIiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcbmltcG9ydCB7IGVsZW1lbnRHZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuXHJcbmNsYXNzIFdzdU1lbnUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdPcGVuJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXN1Ym1lbnUtY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuXHJcbiAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzaWJsaW5ncyA9IGVsZW1lbnRHZXRTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBzaWJsaW5ncy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggZWxlbWVudCApICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggbmF2RWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgJiYgJ3RydWUnID09IG5hdkVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU1lbnU7ICIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7XG5cbmNsYXNzIFdzdU1vZGFsIHtcblxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XG5cbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbGljaycsXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2tleWRvd24nLFxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0fVxuXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xuXG5cdFx0dHJ5IHtcblxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgLy8gT3BlbiBBY3Rpb25cbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtb3BlbicgKSApIHtcblx0XHRcdFx0dmFyIG1vZGFsSWQgPSBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1vcGVuJyApO1xuXHRcdFx0XHR0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCwgbW9kYWxJZCApO1xuXHRcdFx0XHR0aGlzLmZvY3VzRmlyc3QoIG1vZGFsSWQgKTtcblxuXHRcdFx0XHRpZiAoICEgZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3JldHVybi1mb2N1cycgKSApIHtcblx0XHRcdFx0XHR0aGlzLnJldHVybkZvY3VzKCBldmVudEVsZW1lbnQgKTtcblx0XHRcdFx0fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW1vZGFsX19vdmVybGF5JyApIHx8IGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1tb2RhbF9fY2xvc2UnICkgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XG4gICAgICAgICAgICB9XG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXG5cdH1cblxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xuXG4gICAgICAgIHRyeSB7XG5cblx0XHRcdHZhciBtb2RhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LW1vZGFsJyk7XG5cblx0XHRcdG1vZGFsTGlzdC5mb3JFYWNoKCAobW9kYWwpID0+IHtcblxuXHRcdFx0XHRpZiAoIGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgKSB7XG5cdFx0XHRcdFx0dGhpcy5jbG9zZSggZXZlbnQudGFyZ2V0ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZm9jdXNhYmxlRWxzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KC53c3UtbW9kYWxfX292ZXJsYXkpLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKScpO1xuXHRcdFx0XHR2YXIgZmlyc3RFbCA9IGZvY3VzYWJsZUVsc1swXTtcblx0XHRcdFx0dmFyIGxhc3RFbCA9IGZvY3VzYWJsZUVsc1tmb2N1c2FibGVFbHMubGVuZ3RoIC0gMV07XG5cdFx0XHRcdHZhciB0YWJLZXlDb2RlID0gOTtcblxuXHRcdFx0XHRpZiAoIGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5Q29kZSA9PT0gdGFiS2V5Q29kZSApIHtcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnNoaWZ0S2V5ICkge1xuXHRcdFx0XHRcdFx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEVsICkge1xuXHRcdFx0XHRcdFx0XHRsYXN0RWwuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKCBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0RWwgKSB7XG5cdFx0XHRcdFx0XHRcdGZpcnN0RWwuZm9jdXMoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXG4gICAgfVxuXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UsIG1vZGFsSWQgKSB7XG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG1vZGFsSWQgKSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoICEgbW9kYWwgKSByZXR1cm47XG5cblx0XHRtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbW9kYWwtLWhpZGRlbicpO1xuXG4gICAgfVxuXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xuXG4gICAgICAgIGxldCB0YXJnZXRNb2RhbCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LW1vZGFsJykgfHwgZmFsc2U7XG5cdFx0bGV0IGZvY3VzRWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmV0dXJuLWZvY3VzJylbMF0gfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKCAhIHRhcmdldE1vZGFsICkgcmV0dXJuO1xuXG5cdFx0dGFyZ2V0TW9kYWwuY2xhc3NMaXN0LmFkZCgnd3N1LW1vZGFsLS1oaWRkZW4nKTtcblxuXHRcdGZvY3VzRWxzLmZvY3VzKCk7XG5cbiAgICAgICAgY29uc3QgbXlUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xuICAgICAgICAgICAgfSwgMzAwXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBmb2N1c0ZpcnN0KCBtb2RhbElkICkge1xuXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtb2RhbElkICkgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKCAhIG1vZGFsICkgZmFsc2U7XG5cblx0XHR2YXIgZm9jdXNhYmxlRWxzID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6bm90KC53c3UtbW9kYWxfX292ZXJsYXkpLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKScpO1xuXHRcdHZhciBmaXJzdEVsID0gZm9jdXNhYmxlRWxzWzBdO1xuXHRcdGZpcnN0RWwuZm9jdXMoKTtcblxuICAgIH1cblxuXHRyZXR1cm5Gb2N1cyggZXZlbnRFbGVtZW50ICkge1xuXG5cdFx0dmFyIG1vZGFsVHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmV0dXJuLWZvY3VzJyk7XG5cblx0XHRtb2RhbFRyaWdnZXJzLmZvckVhY2goICh0cmlnZ2VyKSA9PiB7XG5cdFx0XHR0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3JldHVybi1mb2N1cycpO1xuXHRcdH0pO1xuXG5cdFx0ZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoICdyZXR1cm4tZm9jdXMnICk7XG5cblx0fVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdzdU1vZGFsO1xuIiwiaW1wb3J0IHsgZWxlbWVudEdldCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlU2hvdWxkLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQgeyBrZXlEb3duRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cyc7XHJcblxyXG5jbGFzcyBXc3VuYXZpZ2F0aW9uU2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDbGFzcyAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2Nsb3NlQ2xhc3MnKSApID8gYXR0cy5jbG9zZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLWNsb3NlJztcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyAgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdvcGVuQ2xhc3MnKSApID8gYXR0cy5vcGVuQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tb3Blbic7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ2xhc3MgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGluZ0NsYXNzJykgKSA/IGF0dHMuYW5pbWF0aW5nQ2xhc3MgOiAnd3N1LWFuaW1hdGluZyc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmcgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW9uVGltaW5nJykgKSA/IGF0dHMuYW5pbWF0aW9uVGltaW5nIDogMzAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMuY2xvc2VDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgT3BlbiBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLm9wZW5DbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBUb2dnbGUgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCeUNsYXNzOiB0aGlzLmFjdGlvblByZWZpeCArICctLW9wZW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBldmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdW5hdmlnYXRpb25TaXRlOyBcclxuIiwiaW1wb3J0IHsgd3N1TWVudUV4cGFuZFRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3dzdU1lbnVFeHBhbmRcIjtcclxuaW1wb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1SGVhZGVyR2xvYmFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsIHdzdU1lbnVFeHBhbmRUb2dnbGUoIG5hdkVsZW1lbnQgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS1kb3duJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnb3BlbicgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdXAnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdjbG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUhlYWRlckdsb2JhbDsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG15VGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIDMwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwvX3NjcmlwdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1ID0ge1xyXG4gICAgdmVydGljYWxOYXZpdGF0aW9uOiBuZXcgV3N1bmF2aWdhdGlvblNpdGUoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlVmVydGljYWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwoKSxcclxuICAgIGhlYWRlckdsb2JhbDogbmV3IFdzdUhlYWRlckdsb2JhbCgpLFxyXG4gICAgYWNjb3JkaW9uOiBuZXcgV3N1QWNjb3JkaW9uKCksXHJcbiAgICBjb2xsYXBzYWJsZTogbmV3IFdzdUNvbGxhcHNhYmxlKCksXHJcbiAgICBtZW51OiBuZXcgV3N1TWVudSgpLFxyXG4gICAgYnV0dG9uOiBuZXcgV3N1QnV0dG9uKCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcbiAgICBtb2RhbDogbmV3IFdzdU1vZGFsKCksXHJcbn1cclxuIl0sIm5hbWVzIjpbImFyaWFVcGRhdGUiLCJhY3Rpb24iLCJzZWxlY3RvciIsInRvZ2dsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJoYXNBdHRyaWJ1dGUiLCJyZWdleCIsImFjdGlvbkxhYmVsIiwibGFiZWwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwiYXJpYVVwZGF0ZUVsZW1lbnQiLCJlbGVtZW50R2V0IiwicGFyZW50IiwiZWxlbWVudENsYXNzIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwiZWxlbWVudEdldENsb3Nlc3QiLCJwYXJlbnRDbGFzcyIsImNsb3Nlc3QiLCJlbGVtZW50R2V0U2libGluZ3MiLCJzaWJsaW5ncyIsInNpYmxpbmciLCJwYXJlbnROb2RlIiwiZmlyc3RDaGlsZCIsIm5vZGVUeXBlIiwicHVzaCIsIm5leHRTaWJsaW5nIiwia2V5RG93bkV2ZW50IiwicHJvcHMiLCJkb21FdmVudCIsImtleSIsImluQ2xhc3MiLCJldmVudEVsZW1lbnQiLCJ0YXJnZXQiLCJldmVudEtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJ0b2dnbGVBcmlhIiwid3JhcHBlciIsInRvZ2dsZUJ5Q2xhc3MiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIiwidG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiIsImlzQW5pbWF0ZWQiLCJhY3Rpb25QcmVmaXgiLCJhcmlhTGFiZWxFbGVtZW50IiwidG9nZ2xlSGVpZ2h0IiwidG9nZ2xlQW5pbWF0aW5nIiwidG9nZ2xlTGFiZWwiLCJhZGQiLCJyZW1vdmUiLCJhbmltYXRlZER1cmF0aW9uIiwiYW5pbWF0ZUNsYXNzIiwiYW5pbWF0ZUhlaWdodCIsImNoaWxkRWxlbWVudCIsInRpbWVyIiwic2V0VGltZW91dCIsInN0eWxlIiwibWF4SGVpZ2h0IiwidG9nZ2xlU2hvdWxkIiwiY2xpY2tDbGFzcyIsImNoZWNrUGFyZW50IiwiY2hlY2tTaWJsaW5nIiwiY2hlY2tFbXB0eUxpbmsiLCJwYXJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaXNFeHBhbmRlZCIsImV4cGFuZGVkVGV4dCIsImNvbGxhcHNlZFRleHQiLCJjb25zb2xlIiwibG9nIiwiUmVnRXhwIiwiaXNFeHBhbmRpbmciLCJoZWlnaHRQYWRkaW5nIiwiY2hpbGRFbGVtZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Iiwid3N1QW5pbWF0ZVNsaWRlRG93biIsImFyZ3MiLCJkdXJhdGlvbiIsImV4dHJhIiwicGFyc2VJbnQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJ3c3VDbGFzc0FkZCIsIndzdUNsYXNzUmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJ3c3VHZXRFbGVtZW50SGVpZ2h0IiwiZGlzcGxheSIsImhlaWdodCIsIndzdVNsaWRlRG93biIsInRpbWluZyIsImFyaWFFbGVtZW50Iiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJ1cGRhdGVBcmlhRWxlbWVudCIsIndzdU1lbnVFeHBhbmRVcCIsIm5hdkl0ZW0iLCJzdWJNZW51IiwibGFzdEVsZW1lbnRDaGlsZCIsIndzdU1lbnVFeHBhbmREb3duIiwid3N1TWVudUV4cGFuZFRvZ2dsZSIsInNob3VsZEV4cGFuZCIsIldzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCIsImF0dHMiLCJpbml0IiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50cyIsImJpbmQiLCJldmVudCIsIm5hdkVsZW1lbnQiLCJzaG91bGRDbG9zZSIsImVycm9yIiwiV3N1QWNjb3JkaW9uIiwib3BlbkNsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImFjY29yZGlvbkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiV3N1QnV0dG9uIiwidG9nZ2xlQWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uQ2xhc3MiLCJsYWJlbHMiLCJhY3RpdmVDbGFzcyIsIldzdUNvbGxhcHNhYmxlIiwid3JhcHBlckNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJ0b2dnbGVDbGFzcyIsImNvbnRlbnRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwia2V5RG93bkV2ZW50cyIsImNsb3NlIiwib3BlbiIsIm5hdiIsImJvZHkiLCJXc3VWaWRlb0ZyYW1lIiwiYmFzc0NsYXNzIiwic2V0VmlkZW9TaXplIiwid2luZG93IiwicmVzaXplIiwicGxheVZpZGVvIiwidG9nZ2xlQmFja2dyb3VuZFZpZGVvIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlbyIsInZpZGVvU3JjIiwiZGF0YXNldCIsInBsYXkiLCJwbGF5ZXIiLCJWaW1lbyIsIlBsYXllciIsInBhdXNlIiwidmlkZW9zIiwiQXJyYXkiLCJmcm9tIiwiaXNXaWRlVmlkZW8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiV3N1TWVudSIsImNsb3NlU2libGluZ3MiLCJXc3VNb2RhbCIsIm1vZGFsSWQiLCJmb2N1c0ZpcnN0IiwicmV0dXJuRm9jdXMiLCJtb2RhbExpc3QiLCJtb2RhbCIsImZvY3VzYWJsZUVscyIsImZpcnN0RWwiLCJsYXN0RWwiLCJ0YWJLZXlDb2RlIiwia2V5Q29kZSIsInNoaWZ0S2V5IiwiYWN0aXZlRWxlbWVudCIsImZvY3VzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXJnZXRNb2RhbCIsImZvY3VzRWxzIiwibXlUaW1lb3V0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwibW9kYWxUcmlnZ2VycyIsInRyaWdnZXIiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> c782fd8 (Enhancement | Feedback edits)
