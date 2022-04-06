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
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__["default"]()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVlSQyxFQUFBQSxVQUFVLEVBQUUsSUFBSTVDLG1GQUFKO0FBWkosQ0FBWixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VBcmlhLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVNsaWRlRG93bi5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX25hdmlnYXRpb24taG9yaXpvbnRhbC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL21lbnUvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJpYVVwZGF0ZSA9ICggYWN0aW9uLCBzZWxlY3RvciApID0+IHtcclxuXHJcbiAgICBsZXQgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKFxyXG4gICAgICAgICggZWxlbWVudCwgaSApID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydChhY3Rpb25MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCggbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5jb25zdCBhcmlhVXBkYXRlRWxlbWVudCA9ICggZWxlbWVudCwgYWN0aW9uICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQsIGFyaWFVcGRhdGUgfTsiLCJjb25zdCBlbGVtZW50R2V0ID0gKCB7IHBhcmVudCA9IGZhbHNlLCBlbGVtZW50Q2xhc3MgPSBmYWxzZSB9ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudENsYXNzICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBwYXJlbnQgPyBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICkgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIDAgPCBlbGVtZW50cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBlbGVtZW50R2V0Q2xvc2VzdCA9ICggZWxlbWVudCwgcGFyZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCAnLicgKyBwYXJlbnRDbGFzcyApO1xyXG4gICAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBlbGVtZW50R2V0U2libGluZ3MgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgLy8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xyXG5cdGxldCBzaWJsaW5ncyA9IFtdO1xyXG5cdGxldCBzaWJsaW5nID0gZWxlbWVudC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XHJcblx0d2hpbGUgKCBzaWJsaW5nICkge1xyXG5cclxuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiBzaWJsaW5ncztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0LCBlbGVtZW50R2V0U2libGluZ3MgfSIsImNvbnN0IGtleURvd25FdmVudCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZG9tRXZlbnQgPSBmYWxzZSxcclxuICAgICAgICBrZXkgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGluQ2xhc3MgID0gZmFsc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoICEgZG9tRXZlbnQgfHwgISBrZXkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV2ZW50RWxlbWVudCA9IGRvbUV2ZW50LnRhcmdldDtcclxuICAgIGxldCBldmVudEtleSAgICAgPSBkb21FdmVudC5rZXk7XHJcblxyXG4gICAgaWYgKCBrZXkgPT09IGV2ZW50S2V5ICYmIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5DbGFzcyAmJiBldmVudEVsZW1lbnQuY2xvc2VzdCggJy4nICsgaW5DbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGtleURvd25FdmVudCB9OyIsImNvbnN0IHRvZ2dsZUFyaWEgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciA9IGZhbHNlLFxyXG4gICAgICAgIHRvZ2dsZUJ5Q2xhc3MgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHRvZ2dsZUJ5Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCB0b2dnbGVCeUNsYXNzICkgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgJiYgJ2ZhbHNlJyAhPSB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgdHJ1ZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIHRydWUgKTtcclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIGZhbHNlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBbmltYXRpbmcgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVkRHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgYW5pbWF0ZUNsYXNzICAgICA9ICd3c3UtYW5pbWF0aW5nJyxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ICAgID0gZmFsc2UsXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ICAgICA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggaXNBbmltYXRlZCAmJiB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCBhbmltYXRlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFuaW1hdGVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFuaW1hdGVIZWlnaHQgJiYgY2hpbGRFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWREdXJhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhbmltYXRlQ2xhc3MgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlU2hvdWxkID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBldmVudEVsZW1lbnQgPSBmYWxzZSwgXHJcbiAgICAgICAgY2xpY2tDbGFzcyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrUGFyZW50ID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTaWJsaW5nID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tFbXB0eUxpbmsgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNsaWNrQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja0VtcHR5TGluayAmJiBldmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdocmVmJykgJiYgJyMnID09PSBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrUGFyZW50ICYmIGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1NpYmxpbmcgJiYgZXZlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVMYWJlbCA9ICggcHJvcHMsIGlzRXhwYW5kZWQgKSA9PiB7XHJcbiAgICBsZXQgeyBcclxuICAgICAgICBleHBhbmRlZFRleHQgPSAnQ2xvc2UnLCBcclxuICAgICAgICBjb2xsYXBzZWRUZXh0ID0gJ09wZW4nLCBcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc29sZS5sb2coIHByb3BzICk7XHJcblxyXG5cclxuICAgIGlmICggYXJpYUxhYmVsRWxlbWVudCAmJiBhcmlhTGFiZWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICkge1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBhcmlhTGFiZWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uID0gKCBpc0V4cGFuZGVkICkgPyBleHBhbmRlZFRleHQgOiBjb2xsYXBzZWRUZXh0O1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCBleHBhbmRlZFRleHQgKyAnfCcgKyBjb2xsYXBzZWRUZXh0LCBcImdcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZWdleCApO1xyXG5cclxuICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb24gKTtcclxuXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVIZWlnaHQgPSAoIHByb3BzLCBpc0V4cGFuZGluZyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgPSBmYWxzZSxcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjaGlsZEVsZW1lbnQgJiYgYW5pbWF0ZUhlaWdodCApIHtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkRWxlbWVudEhlaWdodCA9ICggY2hpbGRFbGVtZW50LnNjcm9sbEhlaWdodCArIGhlaWdodFBhZGRpbmcgKSArIFwicHhcIjtcclxuXHJcbiAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGNoaWxkRWxlbWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCAhIGlzRXhwYW5kaW5nICkge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHRvZ2dsZUFyaWEsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlLCB0b2dnbGVBbmltYXRpbmcsIHRvZ2dsZVNob3VsZCB9OyIsImV4cG9ydCB7ZGVmYXVsdCBhcyB3c3VTbGlkZURvd24gfSBmcm9tICcuL3dzdVNsaWRlRG93bic7IiwiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTsiLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsIlxyXG5jb25zdCB3c3VHZXRFbGVtZW50SGVpZ2h0ID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdVNsaWRlRG93biA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBlbGVtZW50ID0gZmFsc2UsIC8vIEVsZW1lbnQgdG8gZXhwYW5kXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLCAvLyBFeHRyYSBoaWVnaHQganVzdCBpbiBjYXNlXHJcbiAgICAgICAgdGltaW5nID0gMTUwLCAvLyBob3cgbG9uZyB3aWxsIHRoZSBhbmltYXRpb24gcnVuIFxyXG4gICAgICAgIGFyaWFFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXJ0SGVpZ2h0IDwgMTAgKSB7IC8vIGFzc3VtZSBjbG9zZWRcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBjc3MgZG9lc24ndCByZWdpc3RlciBpdC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdzdVNsaWRlRG93bjsiLCJjb25zdCB1cGRhdGVBcmlhRWxlbWVudCA9ICggYWN0aW9uLCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQXJpYUVsZW1lbnQ7IiwiY29uc3Qgd3N1TWVudUV4cGFuZFVwID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLy9zdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmREb3duID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgNTAwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kVG9nZ2xlID0gKCBuYXZJdGVtLCBhcmdzID0ge30gICkgPT4ge1xyXG5cclxuICAgIGlmICggc2hvdWxkRXhwYW5kKCBuYXZJdGVtICkgKSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnb3Blbic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZFVwKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnY2xvc2UnO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG91bGRFeHBhbmQgPSAoIG5hdkl0ZW0gKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggISBuYXZJdGVtLmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSB8fCAnZmFsc2UnID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VNZW51RXhwYW5kVXAsIHdzdU1lbnVFeHBhbmRUb2dnbGUsIHdzdU1lbnVFeHBhbmREb3duICB9OyIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFuaW1hdGUtLXN1Ym1lbnUtdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsOyIsImltcG9ydCB7XHJcbiAgICB3c3VBcmlhRXhwYW5kZWQsXHJcbiAgICB3c3VBcmlhSXNFeHBhbmRlZCxcclxuICAgIHdzdUNsYXNzQWRkLFxyXG4gICAgd3N1Q2xhc3NSZW1vdmUsXHJcbiAgICB3c3VBbmltYXRlU2xpZGVEb3duLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlVXAsXHJcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XHJcblxyXG5jbGFzcyBXc3VBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtYWNjb3JkaW9uLS1vcGVuJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHsgXHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWFjY29yZGlvbl9fY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlVXAoIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVEb3duKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBY2NvcmRpb247ICIsImNsYXNzIFdzdUJ1dHRvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlQnV0dG9uKCBldmVudC50YXJnZXQsICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnLCBbJ1BhdXNlJywnUGxheSddIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlQWN0aXZlQnV0dG9uKCBidXR0b24sIGJ1dHRvbkNsYXNzLCBsYWJlbHMgKSB7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGJ1dHRvbkNsYXNzICsgJy0tYWN0aXZlJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID8gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggYWN0aXZlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzFdLCBsYWJlbHNbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMF0sIGxhYmVsc1sxXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VCdXR0b247ICAiLCJpbXBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlU2hvdWxkIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7d3N1U2xpZGVEb3dufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3V0aWxpdGllcyc7XHJcblxyXG5jbGFzcyBXc3VDb2xsYXBzYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY29udGVudENsYXNzJykgKSA/IGF0dHMuY29udGVudENsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgXHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBDbG9zZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldENsb3Nlc3QoIGV2ZW50RWxlbWVudCwgdGhpcy53cmFwcGVyQ2xhc3MgKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudEdldCAoIHsgcGFyZW50OiB3cmFwcGVyLCBlbGVtZW50Q2xhc3M6IHRoaXMuY29udGVudENsYXNzIH0gKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1U2xpZGVEb3duKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQ6IHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1Q29sbGFwc2FibGU7IiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBuYXYgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24taG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDsgIiwiY2xhc3MgV3N1VmlkZW9GcmFtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNzQ2xhc3MgPSAnd3N1LXZpZGVvLWZyYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J3Jlc2l6ZScsIFxyXG5cdFx0XHQoKSA9PiB7IHRoaXMucmVzaXplKCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tcGxheScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyApIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXRvZ2dsZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW9XcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGF5JykgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZpZGVvU3JjID0gdmlkZW9XcmFwcGVyLmRhdGFzZXQucGxheTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMgKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJhY2tncm91bmRWaWRlbyggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIHRoaXMuYmFzc0NsYXNzICsgJ19fdmlkZW8tYmFja2dyb3VuZCcgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXU1UgVmlkZW8gRnJhbWU6IFZpZGVvIE5vdCBGb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlb1swXSApO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJykgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFZpZGVvU2l6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbSggdmlkZW9zICkuZm9yRWFjaCggKCB2aWRlbyApID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gdmlkZW8ucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICsgMjYwICkgKiAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgPiB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1VmlkZW9GcmFtZTsgICIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBlbGVtZW50R2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnT3BlbicsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS1zdWJtZW51LWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcblxyXG4gICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL25hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc2libGluZ3MgPSBlbGVtZW50R2V0U2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIGVsZW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5hdkVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICYmICd0cnVlJyA9PSBuYXZFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VNZW51OyAiLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbXlUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgMzAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHdzdURyb3Bkb3duTW9kYWwgZnJvbSBcIi4uL2VsZW1lbnRzL2Ryb3Bkb3duLW1vZGFsL19kcm9wZG93bi1tb2RhbFwiO1xyXG5pbXBvcnQgV3N1bmF2aWdhdGlvblNpdGUgZnJvbSAnLi4vbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlJztcclxuaW1wb3J0IFdzdUhlYWRlckdsb2JhbCBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXItZ2xvYmFsL19oZWFkZXItZ2xvYmFsXCI7XHJcbmltcG9ydCBXc3VBY2NvcmRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdUNvbGxhcHNhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHRcIjtcclxuaW1wb3J0IFdzdU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIGZyb20gXCIuLi9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwgZnJvbSAnLi4vYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VWaWRlb0ZyYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdSA9IHtcclxuICAgIHZlcnRpY2FsTmF2aXRhdGlvbjogbmV3IFdzdW5hdmlnYXRpb25TaXRlKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOiBuZXcgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOiBuZXcgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsKCksXHJcbiAgICBoZWFkZXJHbG9iYWw6IG5ldyBXc3VIZWFkZXJHbG9iYWwoKSxcclxuICAgIGFjY29yZGlvbjogbmV3IFdzdUFjY29yZGlvbigpLFxyXG4gICAgY29sbGFwc2FibGU6IG5ldyBXc3VDb2xsYXBzYWJsZSgpLFxyXG4gICAgbWVudTogbmV3IFdzdU1lbnUoKSxcclxuICAgIGJ1dHRvbjogbmV3IFdzdUJ1dHRvbigpLFxyXG4gICAgYW5pbWF0aW9uczoge1xyXG4gICAgICAgIC8vc3VibWVudVNsaWRlVmVydGljYWw6IG5ldyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwoKSxcclxuICAgIH0sXHJcbiAgICB2aWRlb0ZyYW1lOiBuZXcgV3N1VmlkZW9GcmFtZSgpLFxyXG5cclxufSAiXSwibmFtZXMiOlsiYXJpYVVwZGF0ZSIsImFjdGlvbiIsInNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImhhc0F0dHJpYnV0ZSIsInJlZ2V4IiwiYWN0aW9uTGFiZWwiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcmlhVXBkYXRlRWxlbWVudCIsImVsZW1lbnRHZXQiLCJwYXJlbnQiLCJlbGVtZW50Q2xhc3MiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlbGVtZW50R2V0Q2xvc2VzdCIsInBhcmVudENsYXNzIiwiY2xvc2VzdCIsImVsZW1lbnRHZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJrZXlEb3duRXZlbnQiLCJwcm9wcyIsImRvbUV2ZW50Iiwia2V5IiwiaW5DbGFzcyIsImV2ZW50RWxlbWVudCIsInRhcmdldCIsImV2ZW50S2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInRvZ2dsZUFyaWEiLCJ3cmFwcGVyIiwidG9nZ2xlQnlDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UiLCJ0b2dnbGVBcmlhRXhwYW5kZWRPcGVuIiwiaXNBbmltYXRlZCIsImFjdGlvblByZWZpeCIsImFyaWFMYWJlbEVsZW1lbnQiLCJ0b2dnbGVIZWlnaHQiLCJ0b2dnbGVBbmltYXRpbmciLCJ0b2dnbGVMYWJlbCIsImFkZCIsInJlbW92ZSIsImFuaW1hdGVkRHVyYXRpb24iLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiY2hpbGRFbGVtZW50IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0b2dnbGVTaG91bGQiLCJjbGlja0NsYXNzIiwiY2hlY2tQYXJlbnQiLCJjaGVja1NpYmxpbmciLCJjaGVja0VtcHR5TGluayIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpc0V4cGFuZGVkIiwiZXhwYW5kZWRUZXh0IiwiY29sbGFwc2VkVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJSZWdFeHAiLCJpc0V4cGFuZGluZyIsImhlaWdodFBhZGRpbmciLCJjaGlsZEVsZW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJkZWZhdWx0Iiwid3N1U2xpZGVEb3duIiwid3N1QW5pbWF0ZVNsaWRlRG93biIsImFyZ3MiLCJkdXJhdGlvbiIsImV4dHJhIiwicGFyc2VJbnQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJ3c3VDbGFzc0FkZCIsIndzdUNsYXNzUmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJ3c3VHZXRFbGVtZW50SGVpZ2h0IiwiZGlzcGxheSIsImhlaWdodCIsInRpbWluZyIsImFyaWFFbGVtZW50Iiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJ1cGRhdGVBcmlhRWxlbWVudCIsIndzdU1lbnVFeHBhbmRVcCIsIm5hdkl0ZW0iLCJzdWJNZW51IiwibGFzdEVsZW1lbnRDaGlsZCIsIndzdU1lbnVFeHBhbmREb3duIiwid3N1TWVudUV4cGFuZFRvZ2dsZSIsInNob3VsZEV4cGFuZCIsIldzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCIsImF0dHMiLCJpbml0IiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50cyIsImJpbmQiLCJldmVudCIsIm5hdkVsZW1lbnQiLCJzaG91bGRDbG9zZSIsImVycm9yIiwiV3N1QWNjb3JkaW9uIiwib3BlbkNsYXNzIiwiYWNjb3JkaW9uRWxlbWVudCIsImFjY29yZGlvbkNvbnRlbnQiLCJxdWVyeVNlbGVjdG9yIiwiV3N1QnV0dG9uIiwidG9nZ2xlQWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uQ2xhc3MiLCJsYWJlbHMiLCJhY3RpdmVDbGFzcyIsIldzdUNvbGxhcHNhYmxlIiwid3JhcHBlckNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJ0b2dnbGVDbGFzcyIsImNvbnRlbnRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwia2V5RG93bkV2ZW50cyIsImNsb3NlIiwib3BlbiIsIm5hdiIsImJvZHkiLCJXc3VWaWRlb0ZyYW1lIiwiYmFzc0NsYXNzIiwic2V0VmlkZW9TaXplIiwid2luZG93IiwicmVzaXplIiwicGxheVZpZGVvIiwidG9nZ2xlQmFja2dyb3VuZFZpZGVvIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlbyIsInZpZGVvU3JjIiwiZGF0YXNldCIsInBsYXkiLCJwbGF5ZXIiLCJWaW1lbyIsIlBsYXllciIsInBhdXNlIiwidmlkZW9zIiwiQXJyYXkiLCJmcm9tIiwiaXNXaWRlVmlkZW8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiV3N1TWVudSIsImNsb3NlU2libGluZ3MiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9