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

/***/ "./src/components/modal/_script.js":
/*!*****************************************!*\
  !*** ./src/components/modal/_script.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_ariaUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/ariaUpdate */ "./_assets/js/ariaUpdate.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var WsuModal = /*#__PURE__*/function () {
  function WsuModal() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuModal);

    this.timer = false;
    this.init();
  }

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
      } catch (error) {
        console.error(error);
      }
    }
  }, {
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

/***/ }),

/***/ "./src/components/search-bar/_script.js":
/*!**********************************************!*\
  !*** ./src/components/search-bar/_script.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var WsuSearchBar = /*#__PURE__*/function () {
  function WsuSearchBar() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuSearchBar);

    this.init();
  }

  _createClass(WsuSearchBar, [{
    key: "init",
    value: function init() {
      this.bindEvents();
      this.searchParam();
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
        console.log(eventElement);
        var radios = document.querySelectorAll('.wsu-search-bar__scope-option');

        if (eventElement.classList.contains('wsu-search-bar__radio') || eventElement.classList.contains('wsu-search-bar__scope-label')) {
          radios.forEach(function (radio) {
            radio.setAttribute('aria-checked', 'false');
            eventElement.closest('.wsu-search-bar__scope-option').setAttribute('aria-checked', 'true');
          });
          var div = eventElement.closest('.wsu-search-bar__scope-option');
          this.displayElements(div);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "searchParam",
    value: function searchParam() {
      //var siteUrl = window.location.hostname;
      var siteUrl = 'brand.wsu.edu'; //temporary

      var searchbox = document.getElementById('single-box');
      console.log(searchbox);
      searchbox.setAttribute('data-as_sitesearch', siteUrl);
    }
  }, {
    key: "displayElements",
    value: function displayElements(div) {
      console.log(div);
      var allBox = document.getElementsByClassName('wsu-search-bar--all')[0];
      var singleBox = document.getElementsByClassName('wsu-search-bar--single')[0];
      var allResults = document.getElementsByClassName('wsu-search-results--all')[0];
      var singleResults = document.getElementsByClassName('wsu-search-results--single')[0];

      if (div.getAttribute('id') === 'all') {
        allBox.setAttribute('aria-hidden', 'false');
        allResults.setAttribute('aria-hidden', 'false');
        singleBox.setAttribute('aria-hidden', 'true');
        singleResults.setAttribute('aria-hidden', 'true');
      } else {
        allBox.setAttribute('aria-hidden', 'true');
        allResults.setAttribute('aria-hidden', 'true');
        singleBox.setAttribute('aria-hidden', 'false');
        singleResults.setAttribute('aria-hidden', 'false');
      }
    }
  }]);

  return WsuSearchBar;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuSearchBar);

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
/* harmony import */ var _components_modal_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/modal/_script */ "./src/components/modal/_script.js");
/* harmony import */ var _components_search_bar_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/search-bar/_script */ "./src/components/search-bar/_script.js");
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
  wsuAnchorMenu: new _components_anchor_menu_script__WEBPACK_IMPORTED_MODULE_11__["default"](),
  modal: new _components_modal_script__WEBPACK_IMPORTED_MODULE_12__["default"](),
  searchBar: new _components_search_bar_script__WEBPACK_IMPORTED_MODULE_13__["default"]()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEI7QUFHUkksRUFBQUEsd0JBQXdCLEVBQUUsSUFBSXBGLDZGQUFKLEVBSGxCO0FBSVJxRixFQUFBQSxZQUFZLEVBQUUsSUFBSU4sNEVBQUosRUFKTjtBQUtSTyxFQUFBQSxTQUFTLEVBQUUsSUFBSTVILG9FQUFKLEVBTEg7QUFNUjZILEVBQUFBLFdBQVcsRUFBRSxJQUFJN0YsbUZBQUosRUFOTDtBQU9SOEYsRUFBQUEsSUFBSSxFQUFFLElBQUk3RCwrREFBSixFQVBFO0FBUVJyQyxFQUFBQSxNQUFNLEVBQUUsSUFBSUYsaUVBQUosRUFSQTtBQVNScUcsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFEUSxHQVRKO0FBWVJDLEVBQUFBLFVBQVUsRUFBRSxJQUFJcEYsbUZBQUosRUFaSjtBQWFScUYsRUFBQUEsU0FBUyxFQUFFLElBQUk1QixzRUFBSixFQWJIO0FBY1I2QixFQUFBQSxhQUFhLEVBQUUsSUFBSTdILHVFQUFKLEVBZFA7QUFlUm1FLEVBQUFBLEtBQUssRUFBRSxJQUFJTCxpRUFBSixFQWZDO0FBZ0JSZ0UsRUFBQUEsU0FBUyxFQUFFLElBQUkxQyxzRUFBSjtBQWhCSCxDQUFaLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYW5jaG9yLW1lbnUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9idXR0b24vX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfdmlkZW8tZnJhbWUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9tZW51L19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYmFyL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvc3RpY2t5LWJveC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcmlhVXBkYXRlID0gKCBhY3Rpb24sIHNlbGVjdG9yICkgPT4ge1xyXG5cclxuICAgIGxldCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goXHJcbiAgICAgICAgKCBlbGVtZW50LCBpICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGFjdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFyaWFVcGRhdGVFbGVtZW50ID0gKCBlbGVtZW50LCBhY3Rpb24gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCwgYXJpYVVwZGF0ZSB9OyIsImNvbnN0IGVsZW1lbnRHZXQgPSAoIHsgcGFyZW50ID0gZmFsc2UsIGVsZW1lbnRDbGFzcyA9IGZhbHNlIH0gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IHBhcmVudCA/IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggMCA8IGVsZW1lbnRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRDbG9zZXN0ID0gKCBlbGVtZW50LCBwYXJlbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoICcuJyArIHBhcmVudENsYXNzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRTaWJsaW5ncyA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXHJcblx0bGV0IHNpYmxpbmdzID0gW107XHJcblx0bGV0IHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcclxuXHR3aGlsZSAoIHNpYmxpbmcgKSB7XHJcblxyXG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbWVudCkge1xyXG5cclxuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QsIGVsZW1lbnRHZXRTaWJsaW5ncyB9IiwiY29uc3Qga2V5RG93bkV2ZW50ID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBkb21FdmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGtleSAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaW5DbGFzcyAgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggISBkb21FdmVudCB8fCAhIGtleSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRFbGVtZW50ID0gZG9tRXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGV2ZW50S2V5ICAgICA9IGRvbUV2ZW50LmtleTtcclxuXHJcbiAgICBpZiAoIGtleSA9PT0gZXZlbnRLZXkgJiYgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbkNsYXNzICYmIGV2ZW50RWxlbWVudC5jbG9zZXN0KCAnLicgKyBpbkNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93bkV2ZW50IH07IiwiY29uc3QgdG9nZ2xlQXJpYSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyID0gZmFsc2UsXHJcbiAgICAgICAgdG9nZ2xlQnlDbGFzcyA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlQnlDbGFzcyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIHRvZ2dsZUJ5Q2xhc3MgKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJiAnZmFsc2UnICE9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCB0cnVlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgdHJ1ZSApO1xyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgZmFsc2UgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFuaW1hdGluZyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZWREdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBhbmltYXRlQ2xhc3MgICAgID0gJ3dzdS1hbmltYXRpbmcnLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgICAgPSBmYWxzZSxcclxuICAgICAgICBjaGlsZEVsZW1lbnQgICAgID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBpc0FuaW1hdGVkICYmIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIGFuaW1hdGVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYW5pbWF0ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYW5pbWF0ZUhlaWdodCAmJiBjaGlsZEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZER1cmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFuaW1hdGVDbGFzcyApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG91bGQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV2ZW50RWxlbWVudCA9IGZhbHNlLCBcclxuICAgICAgICBjbGlja0NsYXNzID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tQYXJlbnQgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1NpYmxpbmcgPSBmYWxzZSxcclxuICAgICAgICBjaGVja0VtcHR5TGluayA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2xpY2tDbGFzcyAmJiBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrRW1wdHlMaW5rICYmIGV2ZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSAmJiAnIycgPT09IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tQYXJlbnQgJiYgZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrU2libGluZyAmJiBldmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUxhYmVsID0gKCBwcm9wcywgaXNFeHBhbmRlZCApID0+IHtcclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV4cGFuZGVkVGV4dCA9ICdDbG9zZScsIFxyXG4gICAgICAgIGNvbGxhcHNlZFRleHQgPSAnT3BlbicsIFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMgKTtcclxuXHJcblxyXG4gICAgaWYgKCBhcmlhTGFiZWxFbGVtZW50ICYmIGFyaWFMYWJlbEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgKSB7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGFyaWFMYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoIGlzRXhwYW5kZWQgKSA/IGV4cGFuZGVkVGV4dCA6IGNvbGxhcHNlZFRleHQ7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoIGV4cGFuZGVkVGV4dCArICd8JyArIGNvbGxhcHNlZFRleHQsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlZ2V4ICk7XHJcblxyXG4gICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbiApO1xyXG5cclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUhlaWdodCA9ICggcHJvcHMsIGlzRXhwYW5kaW5nICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCA9IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNoaWxkRWxlbWVudCAmJiBhbmltYXRlSGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRFbGVtZW50SGVpZ2h0ID0gKCBjaGlsZEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyApICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gY2hpbGRFbGVtZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoICEgaXNFeHBhbmRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UsIHRvZ2dsZUFuaW1hdGluZywgdG9nZ2xlU2hvdWxkIH07IiwiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTsiLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsIlxyXG5jb25zdCB3c3VHZXRFbGVtZW50SGVpZ2h0ID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdVNsaWRlRG93biA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBlbGVtZW50ID0gZmFsc2UsIC8vIEVsZW1lbnQgdG8gZXhwYW5kXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLCAvLyBFeHRyYSBoaWVnaHQganVzdCBpbiBjYXNlXHJcbiAgICAgICAgdGltaW5nID0gMTUwLCAvLyBob3cgbG9uZyB3aWxsIHRoZSBhbmltYXRpb24gcnVuIFxyXG4gICAgICAgIGFyaWFFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXJ0SGVpZ2h0IDwgMTAgKSB7IC8vIGFzc3VtZSBjbG9zZWRcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBjc3MgZG9lc24ndCByZWdpc3RlciBpdC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdzdVNsaWRlRG93bjsiLCJjb25zdCB1cGRhdGVBcmlhRWxlbWVudCA9ICggYWN0aW9uLCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQXJpYUVsZW1lbnQ7IiwiY29uc3Qgd3N1TWVudUV4cGFuZFVwID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLy9zdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmREb3duID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgNTAwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kVG9nZ2xlID0gKCBuYXZJdGVtLCBhcmdzID0ge30gICkgPT4ge1xyXG5cclxuICAgIGlmICggc2hvdWxkRXhwYW5kKCBuYXZJdGVtICkgKSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnb3Blbic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZFVwKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnY2xvc2UnO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG91bGRFeHBhbmQgPSAoIG5hdkl0ZW0gKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggISBuYXZJdGVtLmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSB8fCAnZmFsc2UnID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VNZW51RXhwYW5kVXAsIHdzdU1lbnVFeHBhbmRUb2dnbGUsIHdzdU1lbnVFeHBhbmREb3duICB9OyIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFuaW1hdGUtLXN1Ym1lbnUtdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsOyIsImltcG9ydCB7XHJcbiAgICB3c3VBcmlhRXhwYW5kZWQsXHJcbiAgICB3c3VBcmlhSXNFeHBhbmRlZCxcclxuICAgIHdzdUNsYXNzQWRkLFxyXG4gICAgd3N1Q2xhc3NSZW1vdmUsXHJcbiAgICB3c3VBbmltYXRlU2xpZGVEb3duLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlVXAsXHJcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XHJcblxyXG5jbGFzcyBXc3VBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtYWNjb3JkaW9uLS1vcGVuJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHsgXHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWFjY29yZGlvbl9fY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlVXAoIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVEb3duKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBY2NvcmRpb247ICIsImNsYXNzIFdzdUFuY2hvck1lbnUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9ICcud3N1LWFuY2hvci1tZW51JztcclxuXHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSAwLjYwO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEVsZW1lbnRzKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBmb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHRoaXMuc2VsZWN0b3IgKyAnOm5vdCgud3N1LWluaXRpYWxpemVkKScgKTtcclxuXHJcbiAgICAgICAgaWYgKCAwIDwgZm91bmQubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgZm91bmQuZm9yRWFjaCggKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucHVzaCggZWxlbWVudCApO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1pbml0aWFsaXplZCcpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXHJcbiAgICAgICAgICAgICAgICAnc2Nyb2xsJywgKCBldmVudCApID0+IHsgdGhpcy51cGRhdGVNZW51cygpIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcclxuICAgICAgICAgICAgICAgICdyZXNpemUnLCAoIGV2ZW50ICkgPT4geyB0aGlzLnVwZGF0ZU1lbnVzKCkgfSwgZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVNZW51cygpXHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBpc0FjdGl2ZSggYW5jaG9yICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGFuY2hvciApO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgd0hlaWdodCA9ICggd2luZG93LmlubmVySGVpZ2h0ICogdGhpcy5idWZmZXIgKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbEhlaWdodCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICAoIGVsSGVpZ2h0IDwgd0hlaWdodCApID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1lbnVzKCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0gQXJyYXkuZnJvbSggZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGNoaWxkcmVuLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aXZlQ2hpbGQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA1MCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5rID0gY2hpbGQucXVlcnlTZWxlY3RvcignYScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBsaW5rICYmIGxpbmsuaGFzQXR0cmlidXRlKCdocmVmJykgKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmNob3IgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNBY3RpdmUoIGFuY2hvciApICYmICEgYWN0aXZlQ2hpbGQgKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDaGlsZCA9IGNoaWxkO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9hY3RpdmVDaGlsZCA9IGNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ3dzdS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhY3RpdmVDaGlsZCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hpbGQuY2xhc3NMaXN0LmFkZCgnd3N1LWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnd3N1LWFjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICk7XHJcblxyXG4gICAgICAgICAgICAvKmxldCBjaGlsZCA9IGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoIDEgPiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LXN0aWNreS1ib3gtLXN0dWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXN0aWNreS1ib3gtLXN0dWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUud2lkdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmNob3JNZW51OyAiLCJjbGFzcyBXc3VCdXR0b24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZUJ1dHRvbiggZXZlbnQudGFyZ2V0LCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJywgWydQYXVzZScsJ1BsYXknXSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvZ2dsZUFjdGl2ZUJ1dHRvbiggYnV0dG9uLCBidXR0b25DbGFzcywgbGFiZWxzICkge1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSBidXR0b25DbGFzcyArICctLWFjdGl2ZSc7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA/IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoIGFjdGl2ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1sxXSwgbGFiZWxzWzBdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzBdLCBsYWJlbHNbMV0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QnV0dG9uOyAgIiwiaW1wb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcbmltcG9ydCB7IHRvZ2dsZVNob3VsZCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQge3dzdVNsaWRlRG93bn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy91dGlsaXRpZXMnO1xyXG5cclxuY2xhc3MgV3N1Q29sbGFwc2FibGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMud3JhcHBlckNsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3dyYXBwZXJDbGFzcycpICkgPyBhdHRzLndyYXBwZXJDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3RvZ2dsZUNsYXNzJykgKSA/IGF0dHMudG9nZ2xlQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuY29udGVudENsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2NvbnRlbnRDbGFzcycpICkgPyBhdHRzLmNvbnRlbnRDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLWNvbnRlbnQnO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IFxyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXRDbG9zZXN0KCBldmVudEVsZW1lbnQsIHRoaXMud3JhcHBlckNsYXNzICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRHZXQgKCB7IHBhcmVudDogd3JhcHBlciwgZWxlbWVudENsYXNzOiB0aGlzLmNvbnRlbnRDbGFzcyB9IClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdVNsaWRlRG93bihcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50OiB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUNvbGxhcHNhYmxlOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggbmF2ICk7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw7ICIsImNsYXNzIFdzdVZpZGVvRnJhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzc0NsYXNzID0gJ3dzdS12aWRlby1mcmFtZSc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdyZXNpemUnLCBcclxuXHRcdFx0KCkgPT4geyB0aGlzLnJlc2l6ZSgpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXBsYXknICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcgKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi10b2dnbGUtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5VmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvV3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGxheScpICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2aWRlb1NyYyA9IHZpZGVvV3JhcHBlci5kYXRhc2V0LnBsYXk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZGVvU3JjICk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvJyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUJhY2tncm91bmRWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlbyApO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCB0aGlzLmJhc3NDbGFzcyArICdfX3ZpZGVvLWJhY2tncm91bmQnICk7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlby5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1NVIFZpZGVvIEZyYW1lOiBWaWRlbyBOb3QgRm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW9bMF0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRWaWRlb1NpemUoKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlb3MubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oIHZpZGVvcyApLmZvckVhY2goICggdmlkZW8gKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IHZpZGVvLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCArIDI2MCApICogMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICggdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCAvIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCAqIDAuNTYyNSApID4gdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdVZpZGVvRnJhbWU7ICAiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZWxlbWVudEdldFNpYmxpbmdzIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1TWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ09wZW4nLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tc3VibWVudS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG5cclxuICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9uYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZWxlbWVudEdldFNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIHNpYmxpbmdzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBlbGVtZW50ICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBlbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCBuYXZFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSAmJiAndHJ1ZScgPT0gbmF2RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TWVudTsgIiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjtcblxuY2xhc3MgV3N1TW9kYWwge1xuXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcblxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQna2V5ZG93bicsXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHR9XG5cbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XG5cblx0XHR0cnkge1xuXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1vcGVuJyApICkge1xuXHRcdFx0XHR2YXIgbW9kYWxJZCA9IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLW9wZW4nICk7XG5cdFx0XHRcdHRoaXMub3BlbiggZXZlbnRFbGVtZW50LCBtb2RhbElkICk7XG5cdFx0XHRcdHRoaXMuZm9jdXNGaXJzdCggbW9kYWxJZCApO1xuXG5cdFx0XHRcdGlmICggISBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAncmV0dXJuLWZvY3VzJyApICkge1xuXHRcdFx0XHRcdHRoaXMucmV0dXJuRm9jdXMoIGV2ZW50RWxlbWVudCApO1xuXHRcdFx0XHR9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbW9kYWxfX292ZXJsYXknICkgfHwgZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW1vZGFsX19jbG9zZScgKSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcbiAgICAgICAgICAgIH1cblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cblx0fVxuXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XG5cbiAgICAgICAgdHJ5IHtcblxuXHRcdFx0dmFyIG1vZGFsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3UtbW9kYWwnKTtcblxuXHRcdFx0bW9kYWxMaXN0LmZvckVhY2goIChtb2RhbCkgPT4ge1xuXG5cdFx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnRXNjYXBlJyApIHtcblx0XHRcdFx0XHR0aGlzLmNsb3NlKCBldmVudC50YXJnZXQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmb2N1c2FibGVFbHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoLndzdS1tb2RhbF9fb3ZlcmxheSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyk7XG5cdFx0XHRcdHZhciBmaXJzdEVsID0gZm9jdXNhYmxlRWxzWzBdO1xuXHRcdFx0XHR2YXIgbGFzdEVsID0gZm9jdXNhYmxlRWxzW2ZvY3VzYWJsZUVscy5sZW5ndGggLSAxXTtcblx0XHRcdFx0dmFyIHRhYktleUNvZGUgPSA5O1xuXG5cdFx0XHRcdGlmICggZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXlDb2RlID09PSB0YWJLZXlDb2RlICkge1xuXHRcdFx0XHRcdGlmICggZXZlbnQuc2hpZnRLZXkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0RWwgKSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RFbC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RFbCApIHtcblx0XHRcdFx0XHRcdFx0Zmlyc3RFbC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cbiAgICB9XG5cbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSwgbW9kYWxJZCApIHtcblxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbW9kYWxJZCApIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmICggISBtb2RhbCApIHJldHVybjtcblxuXHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1tb2RhbC0taGlkZGVuJyk7XG5cbiAgICB9XG5cbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XG5cbiAgICAgICAgbGV0IHRhcmdldE1vZGFsID0gZXZlbnRFbGVtZW50LmNsb3Nlc3QoJy53c3UtbW9kYWwnKSB8fCBmYWxzZTtcblx0XHRsZXQgZm9jdXNFbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZXR1cm4tZm9jdXMnKVswXSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoICEgdGFyZ2V0TW9kYWwgKSByZXR1cm47XG5cblx0XHR0YXJnZXRNb2RhbC5jbGFzc0xpc3QuYWRkKCd3c3UtbW9kYWwtLWhpZGRlbicpO1xuXG5cdFx0Zm9jdXNFbHMuZm9jdXMoKTtcblxuICAgICAgICBjb25zdCBteVRpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XG4gICAgICAgICAgICB9LCAzMDBcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGZvY3VzRmlyc3QoIG1vZGFsSWQgKSB7XG5cbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG1vZGFsSWQgKSB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoICEgbW9kYWwgKSBmYWxzZTtcblxuXHRcdHZhciBmb2N1c2FibGVFbHMgPSBtb2RhbC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoLndzdS1tb2RhbF9fb3ZlcmxheSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInRleHRcIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KFtkaXNhYmxlZF0pLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pJyk7XG5cdFx0dmFyIGZpcnN0RWwgPSBmb2N1c2FibGVFbHNbMF07XG5cdFx0Zmlyc3RFbC5mb2N1cygpO1xuXG4gICAgfVxuXG5cdHJldHVybkZvY3VzKCBldmVudEVsZW1lbnQgKSB7XG5cblx0XHR2YXIgbW9kYWxUcmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXR1cm4tZm9jdXMnKTtcblxuXHRcdG1vZGFsVHJpZ2dlcnMuZm9yRWFjaCggKHRyaWdnZXIpID0+IHtcblx0XHRcdHRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgncmV0dXJuLWZvY3VzJyk7XG5cdFx0fSk7XG5cblx0XHRldmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3JldHVybi1mb2N1cycgKTtcblxuXHR9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV3N1TW9kYWw7XG4iLCJjbGFzcyBXc3VTZWFyY2hCYXIge1xuXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoUGFyYW0oKTtcblxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcblx0XHRcdFx0ZmFsc2Vcblx0XHRcdCk7XG5cdFx0fVxuXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xuXG5cdFx0dHJ5IHtcblxuXHRcdFx0bGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50RWxlbWVudCk7XG5cblx0XHRcdHZhciByYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXNlYXJjaC1iYXJfX3Njb3BlLW9wdGlvbicpO1xuXG5cdFx0XHRpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1zZWFyY2gtYmFyX19yYWRpbycpIHx8IGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1zZWFyY2gtYmFyX19zY29wZS1sYWJlbCcpICkge1xuXHRcdFx0XHRyYWRpb3MuZm9yRWFjaCgoIHJhZGlvICkgPT4ge1xuXG5cdFx0XHRcdFx0cmFkaW8uc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCAnZmFsc2UnKTtcblxuXHRcdFx0XHRcdGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LXNlYXJjaC1iYXJfX3Njb3BlLW9wdGlvbicpLnNldEF0dHJpYnV0ZSgnYXJpYS1jaGVja2VkJywgJ3RydWUnKTtcblx0XHRcdFx0fSk7XG5cbiAgICAgICAgdmFyIGRpdiA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LXNlYXJjaC1iYXJfX3Njb3BlLW9wdGlvbicpO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheUVsZW1lbnRzKCBkaXYgKTtcbiAgICAgIH1cblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcblx0XHR9XG5cblx0fVxuXG4gIHNlYXJjaFBhcmFtKCkge1xuICAgIC8vdmFyIHNpdGVVcmwgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgdmFyIHNpdGVVcmwgPSAnYnJhbmQud3N1LmVkdSc7IC8vdGVtcG9yYXJ5XG4gICAgdmFyIHNlYXJjaGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW5nbGUtYm94Jyk7XG4gICAgY29uc29sZS5sb2coc2VhcmNoYm94KTtcblxuICAgIHNlYXJjaGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXNfc2l0ZXNlYXJjaCcsIHNpdGVVcmwpO1xuICB9XG5cbiAgZGlzcGxheUVsZW1lbnRzKCBkaXYgKSB7XG4gICAgY29uc29sZS5sb2coZGl2KTtcbiAgICB2YXIgYWxsQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXNlYXJjaC1iYXItLWFsbCcpWzBdO1xuICAgIHZhciBzaW5nbGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3Utc2VhcmNoLWJhci0tc2luZ2xlJylbMF07XG5cbiAgICB2YXIgYWxsUmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1zZWFyY2gtcmVzdWx0cy0tYWxsJylbMF07XG4gICAgdmFyIHNpbmdsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3Utc2VhcmNoLXJlc3VsdHMtLXNpbmdsZScpWzBdO1xuXG4gICAgaWYgKCBkaXYuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnYWxsJyApIHtcbiAgICAgIGFsbEJveC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgICBhbGxSZXN1bHRzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgc2luZ2xlQm94LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgc2luZ2xlUmVzdWx0cy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBhbGxCb3guc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgICBhbGxSZXN1bHRzLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICBzaW5nbGVCb3guc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgICAgc2luZ2xlUmVzdWx0cy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV3N1U2VhcmNoQmFyO1xuIiwiXHJcblxyXG5jbGFzcyBXc3VTdGlja3lCb3gge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYm94ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5ib3hTZWxlY3RvciA9ICcud3N1LXN0aWNreS1ib3gnO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBsZXQgZm91bmRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHRoaXMuYm94U2VsZWN0b3IgKyAnOm5vdCgud3N1LWluaXRpYWxpemVkKScgKTtcclxuXHJcbiAgICAgICAgaWYgKCAwIDwgZm91bmRCb3hlcy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBmb3VuZEJveGVzLmZvckVhY2goICggYm94ICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYm94ZXMucHVzaCggYm94ICk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKCd3c3UtaW5pdGlhbGl6ZWQnKTtcclxuICAgIFxyXG4gICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG4gICAgICAgICAgICAgICAgJ3Njcm9sbCcsICggZXZlbnQgKSA9PiB7IHRoaXMuc3RpY2tCb3hlcygpIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcclxuICAgICAgICAgICAgICAgICdyZXNpemUnLCAoIGV2ZW50ICkgPT4geyB0aGlzLnN0aWNrQm94ZXMoKSB9LCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0aWNrQm94ZXMoIGZhbHNlICk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBzdGlja0JveGVzKCBpc0V2ZW50ID0gdHJ1ZSApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpc0V2ZW50ICkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRBY3RpdmVDbGFzcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYm94ZXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCAxID4gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1zdGlja3ktYm94LS1zdHVjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1zdGlja3ktYm94LS1zdHVjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYWRkQWN0aXZlQ2xhc3MoKSB7XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dCggdGhpcy50aW1lciApO1xyXG5cclxuICAgICAgICB0aGlzLmJveGVzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hY3RpdmUnKTtcclxuICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlQ2xhc3MoKTtcclxuICAgICAgICB9LCAyMDAwICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCkge1xyXG4gICAgICAgIHRoaXMuYm94ZXMuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFjdGl2ZScpO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdVN0aWNreUJveDsgIiwiaW1wb3J0IHsgZWxlbWVudEdldCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlU2hvdWxkLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQgeyBrZXlEb3duRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cyc7XHJcblxyXG5jbGFzcyBXc3VuYXZpZ2F0aW9uU2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDbGFzcyAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2Nsb3NlQ2xhc3MnKSApID8gYXR0cy5jbG9zZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLWNsb3NlJztcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyAgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdvcGVuQ2xhc3MnKSApID8gYXR0cy5vcGVuQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tb3Blbic7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ2xhc3MgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGluZ0NsYXNzJykgKSA/IGF0dHMuYW5pbWF0aW5nQ2xhc3MgOiAnd3N1LWFuaW1hdGluZyc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmcgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW9uVGltaW5nJykgKSA/IGF0dHMuYW5pbWF0aW9uVGltaW5nIDogMzAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMuY2xvc2VDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgT3BlbiBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLm9wZW5DbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBUb2dnbGUgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCeUNsYXNzOiB0aGlzLmFjdGlvblByZWZpeCArICctLW9wZW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBldmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdW5hdmlnYXRpb25TaXRlOyBcclxuIiwiaW1wb3J0IHsgd3N1TWVudUV4cGFuZFRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3dzdU1lbnVFeHBhbmRcIjtcclxuaW1wb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1SGVhZGVyR2xvYmFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsIHdzdU1lbnVFeHBhbmRUb2dnbGUoIG5hdkVsZW1lbnQgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS1kb3duJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnb3BlbicgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdXAnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdjbG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUhlYWRlckdsb2JhbDsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG15VGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIDMwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuaW1wb3J0IFdzdVN0aWNreUJveCBmcm9tICcuLi9jb21wb25lbnRzL3N0aWNreS1ib3gvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VBbmNob3JNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvYW5jaG9yLW1lbnUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1U2VhcmNoQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoLWJhci9fc2NyaXB0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3c3UgPSB7XHJcbiAgICB2ZXJ0aWNhbE5hdml0YXRpb246IG5ldyBXc3VuYXZpZ2F0aW9uU2l0ZSgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVWZXJ0aWNhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCgpLFxyXG4gICAgaGVhZGVyR2xvYmFsOiBuZXcgV3N1SGVhZGVyR2xvYmFsKCksXHJcbiAgICBhY2NvcmRpb246IG5ldyBXc3VBY2NvcmRpb24oKSxcclxuICAgIGNvbGxhcHNhYmxlOiBuZXcgV3N1Q29sbGFwc2FibGUoKSxcclxuICAgIG1lbnU6IG5ldyBXc3VNZW51KCksXHJcbiAgICBidXR0b246IG5ldyBXc3VCdXR0b24oKSxcclxuICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAvL3N1Ym1lbnVTbGlkZVZlcnRpY2FsOiBuZXcgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsKCksXHJcbiAgICB9LFxyXG4gICAgdmlkZW9GcmFtZTogbmV3IFdzdVZpZGVvRnJhbWUoKSxcclxuICAgIHN0aWNreUJveDogbmV3IFdzdVN0aWNreUJveCgpLFxyXG4gICAgd3N1QW5jaG9yTWVudTogbmV3IFdzdUFuY2hvck1lbnUoKSxcclxuICAgIG1vZGFsOiBuZXcgV3N1TW9kYWwoKSxcclxuICAgIHNlYXJjaEJhcjogbmV3IFdzdVNlYXJjaEJhcigpLFxyXG59XHJcbiJdLCJuYW1lcyI6WyJhcmlhVXBkYXRlIiwiYWN0aW9uIiwic2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpIiwiaGFzQXR0cmlidXRlIiwicmVnZXgiLCJhY3Rpb25MYWJlbCIsImxhYmVsIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImFyaWFVcGRhdGVFbGVtZW50IiwiZWxlbWVudEdldCIsInBhcmVudCIsImVsZW1lbnRDbGFzcyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImVsZW1lbnRHZXRDbG9zZXN0IiwicGFyZW50Q2xhc3MiLCJjbG9zZXN0IiwiZWxlbWVudEdldFNpYmxpbmdzIiwic2libGluZ3MiLCJzaWJsaW5nIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImtleURvd25FdmVudCIsInByb3BzIiwiZG9tRXZlbnQiLCJrZXkiLCJpbkNsYXNzIiwiZXZlbnRFbGVtZW50IiwidGFyZ2V0IiwiZXZlbnRLZXkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwidG9nZ2xlQXJpYSIsIndyYXBwZXIiLCJ0b2dnbGVCeUNsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSIsInRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4iLCJpc0FuaW1hdGVkIiwiYWN0aW9uUHJlZml4IiwiYXJpYUxhYmVsRWxlbWVudCIsInRvZ2dsZUhlaWdodCIsInRvZ2dsZUFuaW1hdGluZyIsInRvZ2dsZUxhYmVsIiwiYWRkIiwicmVtb3ZlIiwiYW5pbWF0ZWREdXJhdGlvbiIsImFuaW1hdGVDbGFzcyIsImFuaW1hdGVIZWlnaHQiLCJjaGlsZEVsZW1lbnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm1heEhlaWdodCIsInRvZ2dsZVNob3VsZCIsImNsaWNrQ2xhc3MiLCJjaGVja1BhcmVudCIsImNoZWNrU2libGluZyIsImNoZWNrRW1wdHlMaW5rIiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzRXhwYW5kZWQiLCJleHBhbmRlZFRleHQiLCJjb2xsYXBzZWRUZXh0IiwiY29uc29sZSIsImxvZyIsIlJlZ0V4cCIsImlzRXhwYW5kaW5nIiwiaGVpZ2h0UGFkZGluZyIsImNoaWxkRWxlbWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIndzdUFuaW1hdGVTbGlkZURvd24iLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInBhcnNlSW50Iiwid3N1QW5pbWF0ZVNsaWRlVXAiLCJjYWxsYmFjayIsImRlbGF5VGltZXIiLCJ3c3VBcmlhRXhwYW5kZWQiLCJ2YWx1ZSIsIndzdUFyaWFJc0V4cGFuZGVkIiwid3N1Q2xhc3NBZGQiLCJ3c3VDbGFzc1JlbW92ZSIsIndzdUNsYXNzVG9nZ2xlIiwid3N1R2V0RWxlbWVudEhlaWdodCIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3c3VTbGlkZURvd24iLCJ0aW1pbmciLCJhcmlhRWxlbWVudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwidXBkYXRlQXJpYUVsZW1lbnQiLCJ3c3VNZW51RXhwYW5kVXAiLCJuYXZJdGVtIiwic3ViTWVudSIsImxhc3RFbGVtZW50Q2hpbGQiLCJ3c3VNZW51RXhwYW5kRG93biIsIndzdU1lbnVFeHBhbmRUb2dnbGUiLCJzaG91bGRFeHBhbmQiLCJXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwiLCJhdHRzIiwiaW5pdCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudHMiLCJiaW5kIiwiZXZlbnQiLCJuYXZFbGVtZW50Iiwic2hvdWxkQ2xvc2UiLCJlcnJvciIsIldzdUFjY29yZGlvbiIsIm9wZW5DbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJhY2NvcmRpb25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsIldzdUFuY2hvck1lbnUiLCJidWZmZXIiLCJpbml0RWxlbWVudHMiLCJmb3VuZCIsIndpbmRvdyIsInVwZGF0ZU1lbnVzIiwiYW5jaG9yIiwid0hlaWdodCIsImlubmVySGVpZ2h0IiwiZWxIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjaGlsZHJlbiIsIkFycmF5IiwiZnJvbSIsImFjdGl2ZUNoaWxkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY2hpbGQiLCJsaW5rIiwiaXNBY3RpdmUiLCJXc3VCdXR0b24iLCJ0b2dnbGVBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25DbGFzcyIsImxhYmVscyIsImFjdGl2ZUNsYXNzIiwiV3N1Q29sbGFwc2FibGUiLCJ3cmFwcGVyQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsInRvZ2dsZUNsYXNzIiwiY29udGVudENsYXNzIiwicHJldmVudERlZmF1bHQiLCJXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJrZXlEb3duRXZlbnRzIiwiY2xvc2UiLCJvcGVuIiwibmF2IiwiYm9keSIsIldzdVZpZGVvRnJhbWUiLCJiYXNzQ2xhc3MiLCJzZXRWaWRlb1NpemUiLCJyZXNpemUiLCJwbGF5VmlkZW8iLCJ0b2dnbGVCYWNrZ3JvdW5kVmlkZW8iLCJwYXVzZUJhY2tncm91bmRWaWRlbyIsInZpZGVvV3JhcHBlciIsInZpZGVvIiwidmlkZW9TcmMiLCJkYXRhc2V0IiwicGxheSIsInBsYXllciIsIlZpbWVvIiwiUGxheWVyIiwicGF1c2UiLCJ2aWRlb3MiLCJpc1dpZGVWaWRlbyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJXc3VNZW51IiwiY2xvc2VTaWJsaW5ncyIsIldzdU1vZGFsIiwibW9kYWxJZCIsImZvY3VzRmlyc3QiLCJyZXR1cm5Gb2N1cyIsIm1vZGFsTGlzdCIsIm1vZGFsIiwiZm9jdXNhYmxlRWxzIiwiZmlyc3RFbCIsImxhc3RFbCIsInRhYktleUNvZGUiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJhY3RpdmVFbGVtZW50IiwiZm9jdXMiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldE1vZGFsIiwiZm9jdXNFbHMiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJtb2RhbFRyaWdnZXJzIiwidHJpZ2dlciIsIldzdVNlYXJjaEJhciIsInNlYXJjaFBhcmFtIiwicmFkaW9zIiwicmFkaW8iLCJkaXYiLCJkaXNwbGF5RWxlbWVudHMiLCJzaXRlVXJsIiwic2VhcmNoYm94IiwiYWxsQm94Iiwic2luZ2xlQm94IiwiYWxsUmVzdWx0cyIsInNpbmdsZVJlc3VsdHMiLCJXc3VTdGlja3lCb3giLCJib3hlcyIsImJveFNlbGVjdG9yIiwiaW5pdGlhbGl6ZSIsImZvdW5kQm94ZXMiLCJib3giLCJzdGlja0JveGVzIiwiaXNFdmVudCIsImFkZEFjdGl2ZUNsYXNzIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJjbGVhclRpbWVvdXQiLCJyZW1vdmVBY3RpdmVDbGFzcyIsIldzdW5hdmlnYXRpb25TaXRlIiwiY2xvc2VDbGFzcyIsImFuaW1hdGluZ0NsYXNzIiwiYW5pbWF0aW9uVGltaW5nIiwiV3N1SGVhZGVyR2xvYmFsIiwiV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCIsIndzdSIsInZlcnRpY2FsTmF2aXRhdGlvbiIsIm5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJoZWFkZXJHbG9iYWwiLCJhY2NvcmRpb24iLCJjb2xsYXBzYWJsZSIsIm1lbnUiLCJhbmltYXRpb25zIiwidmlkZW9GcmFtZSIsInN0aWNreUJveCIsIndzdUFuY2hvck1lbnUiLCJzZWFyY2hCYXIiXSwic291cmNlUm9vdCI6IiJ9