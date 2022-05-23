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
/* harmony export */   "ariaUpdateElement": () => (/* binding */ ariaUpdateElement),
/* harmony export */   "ariaUpdate": () => (/* binding */ ariaUpdate)
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
/* harmony export */   "toggleAria": () => (/* binding */ toggleAria),
/* harmony export */   "toggleAriaExpandedOpen": () => (/* binding */ toggleAriaExpandedOpen),
/* harmony export */   "toggleAriaExpandedClose": () => (/* binding */ toggleAriaExpandedClose),
/* harmony export */   "toggleAnimating": () => (/* binding */ toggleAnimating),
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
/* harmony export */   "wsuSlideDown": () => (/* reexport safe */ _wsuSlideDown__WEBPACK_IMPORTED_MODULE_0__.default)
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
/* harmony export */   "wsuMenuExpandUp": () => (/* binding */ wsuMenuExpandUp),
/* harmony export */   "wsuMenuExpandToggle": () => (/* binding */ wsuMenuExpandToggle),
/* harmony export */   "wsuMenuExpandDown": () => (/* binding */ wsuMenuExpandDown)
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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




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
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__.default)('Close', eventElement);
          } else {
            this.open(navElement);
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__.default)('Open', eventElement);
          }
        }

        if (eventElement.classList.contains('wsu-menu--submenu-close')) {
          var _navElement = eventElement.parentElement.parentElement.closest('li');

          if (this.shouldClose(_navElement)) {
            this.close(_navElement);
            (0,_assets_js_updateAriaElement__WEBPACK_IMPORTED_MODULE_0__.default)('Close', eventElement);
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

/***/ "./src/components/tabs/_script.js":
/*!****************************************!*\
  !*** ./src/components/tabs/_script.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/partials/wsuPartials */ "./_assets/js/partials/wsuPartials.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var WsuTabs = /*#__PURE__*/function () {
  function WsuTabs() {
    var atts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, WsuTabs);

    this.timer = false;
    this.openClass = 'wsu-tabs--open';
    this.closedPanel = 'hidden';
    this.showMobile = 'show-mobile';
    this.init();
  }

  _createClass(WsuTabs, [{
    key: "init",
    value: function init() {
      this.tabIds();

      if (!this.checkMobile()) {
        this.bindEvents();
      } else {
        this.tabsDesktop();
      }
    }
  }, {
    key: "tabIds",
    value: function tabIds() {
      var wsuTabs = document.querySelectorAll(".wsu-tabs");

      if (wsuTabs.length > 0) {
        wsuTabs.forEach(function (tabs, index) {
          tabs.setAttribute("data-tab", "wsu-tabs-".concat(index));
        });
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      document.addEventListener('click', this.accordionClicks.bind(this), false);
      /*document.addEventListener(
        'keydown',
        this.keyDownEvents.bind( this ),
        false
      );*/
    }
  }, {
    key: "accordionClicks",
    value: function accordionClicks(event) {
      try {
        var eventElement = event.target;

        if (eventElement.classList.contains('wsu-accordion--toggle')) {
          var accordionElement = eventElement.closest('.wsu-tabs__panel-inner');
          var accordionContent = accordionElement.querySelector('.wsu-tabs__content');

          if ((0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaIsExpanded)(eventElement)) {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(eventElement, false);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideUp)(accordionContent, {});
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(accordionElement, this.openClass);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(accordionContent, this.closedPanel);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(accordionContent, 'show-mobile');
          } else {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(eventElement, true);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAnimateSlideDown)(accordionContent, {});
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(accordionElement, this.openClass);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(accordionContent, this.closedPanel);
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(accordionContent, 'show-mobile');
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(accordionContent, 'show-desktop');
          } //Tracking for desktop tabs with mobile clicks


          var wsuTabs = document.querySelectorAll(".wsu-tabs");
          var activeDesktop = eventElement.getAttribute("aria-controls");
          var parentTab = eventElement.closest('.wsu-tabs');

          if (wsuTabs.length > 0) {
            var desktopTabs = parentTab.querySelectorAll(".wsu-tabs__button-desktop");
            var panelContent = parentTab.querySelectorAll(".wsu-tabs__content");
            desktopTabs.forEach(function (tab) {
              if (tab.getAttribute("aria-controls") === activeDesktop) {
                tab.setAttribute("aria-selected", true);
              } else {
                tab.setAttribute("aria-selected", false);
              }
            });
            panelContent.forEach(function (panel) {
              if (panel.getAttribute("id") === activeDesktop) {
                (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(panel, "last-clicked");
                (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassAdd)(panel, 'show-desktop');
              } else {
                (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(panel, "last-clicked");
                (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuClassRemove)(panel, 'show-desktop');
              }
            });
          }
        }

        if (eventElement.classList.contains('wsu-tabs__button-desktop')) {
          this.tabsDesktop();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, {
    key: "tabsDesktop",
    value: function tabsDesktop() {
      var wsuTabs = document.querySelectorAll(".wsu-tabs");

      if (wsuTabs.length > 0) {
        wsuTabs.forEach(function (tabs) {
          var tabButtons = tabs.querySelectorAll(".wsu-tabs__button-desktop");
          var tabPanels = tabs.querySelectorAll(".wsu-tabs__content"); // Accordion buttons on mobile

          var accButtons = tabs.querySelectorAll(".wsu-accordion__title-button");

          if (tabButtons.length > 0) {
            var addListeners = function addListeners(index) {
              tabButtons[index].addEventListener('click', clickEventListener);
              tabButtons[index].addEventListener('keydown', keydownEventListener);
              tabButtons[index].addEventListener('keyup', keyupEventListener); //Needed??
              // Build an array with all tabs (<button>s) in it

              tabButtons[index].index = index;
            }; // When a tab is clicked, activateTab is fired to activate it


            var clickEventListener = function clickEventListener(eventElement) {
              var tab = eventElement.target;
              activateTab(tab, false);
            }; // Handle keydown on tabs


            var keydownEventListener = function keydownEventListener(eventElement) {
              var key = eventElement.keyCode;

              switch (key) {
                case keys.end:
                  eventElement.preventDefault(); // Activate last tab

                  activateTab(tabButtons[tabButtons.length - 1]);
                  break;

                case keys.home:
                  eventElement.preventDefault(); // Activate first tab

                  activateTab(tabButtons[0]);
                  break;

                case keys.up:
                case keys.down:
                  eventElement.preventDefault();
                  break;
              }
            }; // Handle keyup on tabs


            var keyupEventListener = function keyupEventListener(eventElement) {
              var key = eventElement.keyCode;

              switch (key) {
                case keys.left:
                case keys.right:
                  switchTabOnArrowPress(eventElement);
                  break;
              }
            };

            var activateTab = function activateTab(tab, setFocus) {
              setFocus = setFocus || true;
              deactivateTabs();
              activateAccordion();
              tab.setAttribute('aria-selected', 'true');
              var panelId = tab.getAttribute("aria-controls");
              var panel = document.getElementById(panelId);
              panel.classList.remove("hidden");
              var accTitle = panel.closest(".wsu-tabs__panel-inner");
              accTitle.classList.add("wsu-tabs--open");

              if (setFocus) {
                tab.focus();
              }
            }; // Deactivate all tabs and tab panels


            var deactivateTabs = function deactivateTabs() {
              tabButtons.forEach(function (tab) {
                tab.setAttribute("aria-selected", "false");
              });
              tabPanels.forEach(function (panel) {
                panel.classList.add("hidden");
                panel.classList.remove("show-mobile");
                panel.classList.remove("show-desktop");
                panel.classList.remove("last-clicked");
                var accTitle = panel.closest(".wsu-tabs__panel-inner");

                if (accTitle.classList.contains("wsu-tabs--open")) {
                  accTitle.classList.remove("wsu-tabs--open");
                }
              });
            }; // Activate mobile accordions


            var activateAccordion = function activateAccordion() {
              accButtons.forEach(function (accButton) {
                if (accButton.getAttribute("aria-expanded") === "false") {
                  accButton.setAttribute("aria-expanded", "true");
                } else {
                  accButton.setAttribute("aria-expanded", "false");
                }
              });
            }; // Either focus the next, previous, first, or last tab
            // depending on key pressed


            var switchTabOnArrowPress = function switchTabOnArrowPress(eventElement) {
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
            };

            var focusFirstTab = function focusFirstTab() {
              tabButtons[0].focus();
            };

            var focusLastTab = function focusLastTab() {
              tabButtons[tabButtons.length - 1].focus();
            };

            var checkTabFocus = function checkTabFocus(target) {
              var focused = document.activeElement;

              if (target === focused) {
                activateTab(target, false);
              }
            };

            var keys = {
              end: 35,
              home: 36,
              left: 37,
              up: 38,
              right: 39,
              down: 40
            };
            var direction = {
              37: -1,
              38: -1,
              39: 1,
              40: 1
            }; // Bind listeners

            for (var i = 0; i < tabButtons.length; ++i) {
              addListeners(i);
            }
          }
        });
      }
    }
  }, {
    key: "hidePanels",
    value: function hidePanels() {
      var tabContent = document.querySelectorAll(".wsu-tabs__content");

      for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.add("hidden");
      }
    }
  }, {
    key: "checkMobile",
    value: function checkMobile() {
      var tablist = document.querySelector(".wsu-tabs__tablist");
      var tablistDisplay = window.getComputedStyle(tablist);

      if (tablistDisplay.getPropertyValue('display') === "none") {
        this.hidePanels();
      } else {
        this.tabsDesktop();
      }
    }
  }]);

  return WsuTabs;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WsuTabs);

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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



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
/* harmony import */ var _components_tabs_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tabs/_script */ "./src/components/tabs/_script.js");
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
  tabs: new _components_tabs_script__WEBPACK_IMPORTED_MODULE_10__.default()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL3RhYnMvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiXSwibmFtZXMiOlsiYXJpYVVwZGF0ZSIsImFjdGlvbiIsInNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImhhc0F0dHJpYnV0ZSIsInJlZ2V4IiwiYWN0aW9uTGFiZWwiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcmlhVXBkYXRlRWxlbWVudCIsImVsZW1lbnRHZXQiLCJwYXJlbnQiLCJlbGVtZW50Q2xhc3MiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlbGVtZW50R2V0Q2xvc2VzdCIsInBhcmVudENsYXNzIiwiY2xvc2VzdCIsImVsZW1lbnRHZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJrZXlEb3duRXZlbnQiLCJwcm9wcyIsImRvbUV2ZW50Iiwia2V5IiwiaW5DbGFzcyIsImV2ZW50RWxlbWVudCIsInRhcmdldCIsImV2ZW50S2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInRvZ2dsZUFyaWEiLCJ3cmFwcGVyIiwidG9nZ2xlQnlDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UiLCJ0b2dnbGVBcmlhRXhwYW5kZWRPcGVuIiwiaXNBbmltYXRlZCIsImFjdGlvblByZWZpeCIsImFyaWFMYWJlbEVsZW1lbnQiLCJ0b2dnbGVIZWlnaHQiLCJ0b2dnbGVBbmltYXRpbmciLCJ0b2dnbGVMYWJlbCIsImFkZCIsInJlbW92ZSIsImFuaW1hdGVkRHVyYXRpb24iLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiY2hpbGRFbGVtZW50IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0b2dnbGVTaG91bGQiLCJjbGlja0NsYXNzIiwiY2hlY2tQYXJlbnQiLCJjaGVja1NpYmxpbmciLCJjaGVja0VtcHR5TGluayIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpc0V4cGFuZGVkIiwiZXhwYW5kZWRUZXh0IiwiY29sbGFwc2VkVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJSZWdFeHAiLCJpc0V4cGFuZGluZyIsImhlaWdodFBhZGRpbmciLCJjaGlsZEVsZW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ3c3VBbmltYXRlU2xpZGVEb3duIiwiYXJncyIsImR1cmF0aW9uIiwiZXh0cmEiLCJwYXJzZUludCIsIndzdUFuaW1hdGVTbGlkZVVwIiwiY2FsbGJhY2siLCJkZWxheVRpbWVyIiwid3N1QXJpYUV4cGFuZGVkIiwidmFsdWUiLCJ3c3VBcmlhSXNFeHBhbmRlZCIsIndzdUNsYXNzQWRkIiwid3N1Q2xhc3NSZW1vdmUiLCJ3c3VDbGFzc1RvZ2dsZSIsIndzdUdldEVsZW1lbnRIZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid3N1U2xpZGVEb3duIiwidGltaW5nIiwiYXJpYUVsZW1lbnQiLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsInVwZGF0ZUFyaWFFbGVtZW50Iiwid3N1TWVudUV4cGFuZFVwIiwibmF2SXRlbSIsInN1Yk1lbnUiLCJsYXN0RWxlbWVudENoaWxkIiwid3N1TWVudUV4cGFuZERvd24iLCJ3c3VNZW51RXhwYW5kVG9nZ2xlIiwic2hvdWxkRXhwYW5kIiwiV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIiwiYXR0cyIsImluaXQiLCJiaW5kRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrRXZlbnRzIiwiYmluZCIsImV2ZW50IiwibmF2RWxlbWVudCIsInNob3VsZENsb3NlIiwiZXJyb3IiLCJXc3VBY2NvcmRpb24iLCJvcGVuQ2xhc3MiLCJhY2NvcmRpb25FbGVtZW50IiwiYWNjb3JkaW9uQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJXc3VCdXR0b24iLCJ0b2dnbGVBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25DbGFzcyIsImxhYmVscyIsImFjdGl2ZUNsYXNzIiwiV3N1Q29sbGFwc2FibGUiLCJ3cmFwcGVyQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsInRvZ2dsZUNsYXNzIiwiY29udGVudENsYXNzIiwicHJldmVudERlZmF1bHQiLCJXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJrZXlEb3duRXZlbnRzIiwiY2xvc2UiLCJvcGVuIiwibmF2IiwiYm9keSIsIldzdVZpZGVvRnJhbWUiLCJiYXNzQ2xhc3MiLCJzZXRWaWRlb1NpemUiLCJ3aW5kb3ciLCJyZXNpemUiLCJwbGF5VmlkZW8iLCJ0b2dnbGVCYWNrZ3JvdW5kVmlkZW8iLCJwYXVzZUJhY2tncm91bmRWaWRlbyIsInZpZGVvV3JhcHBlciIsInZpZGVvIiwidmlkZW9TcmMiLCJkYXRhc2V0IiwicGxheSIsInBsYXllciIsIlZpbWVvIiwiUGxheWVyIiwicGF1c2UiLCJ2aWRlb3MiLCJBcnJheSIsImZyb20iLCJpc1dpZGVWaWRlbyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJXc3VNZW51IiwiY2xvc2VTaWJsaW5ncyIsIldzdVRhYnMiLCJjbG9zZWRQYW5lbCIsInNob3dNb2JpbGUiLCJ0YWJJZHMiLCJjaGVja01vYmlsZSIsInRhYnNEZXNrdG9wIiwid3N1VGFicyIsInRhYnMiLCJpbmRleCIsImFjY29yZGlvbkNsaWNrcyIsImFjdGl2ZURlc2t0b3AiLCJwYXJlbnRUYWIiLCJkZXNrdG9wVGFicyIsInBhbmVsQ29udGVudCIsInRhYiIsInBhbmVsIiwidGFiQnV0dG9ucyIsInRhYlBhbmVscyIsImFjY0J1dHRvbnMiLCJhZGRMaXN0ZW5lcnMiLCJjbGlja0V2ZW50TGlzdGVuZXIiLCJrZXlkb3duRXZlbnRMaXN0ZW5lciIsImtleXVwRXZlbnRMaXN0ZW5lciIsImFjdGl2YXRlVGFiIiwia2V5Q29kZSIsImtleXMiLCJlbmQiLCJob21lIiwidXAiLCJkb3duIiwibGVmdCIsInJpZ2h0Iiwic3dpdGNoVGFiT25BcnJvd1ByZXNzIiwic2V0Rm9jdXMiLCJkZWFjdGl2YXRlVGFicyIsImFjdGl2YXRlQWNjb3JkaW9uIiwicGFuZWxJZCIsImdldEVsZW1lbnRCeUlkIiwiYWNjVGl0bGUiLCJmb2N1cyIsImFjY0J1dHRvbiIsInByZXNzZWQiLCJjaGVja1RhYkZvY3VzIiwiZGlyZWN0aW9uIiwidW5kZWZpbmVkIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNGaXJzdFRhYiIsImZvY3VzZWQiLCJhY3RpdmVFbGVtZW50IiwidGFiQ29udGVudCIsInRhYmxpc3QiLCJ0YWJsaXN0RGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiaGlkZVBhbmVscyIsIldzdW5hdmlnYXRpb25TaXRlIiwiY2xvc2VDbGFzcyIsImFuaW1hdGluZ0NsYXNzIiwiYW5pbWF0aW9uVGltaW5nIiwiV3N1SGVhZGVyR2xvYmFsIiwiV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCIsIm15VGltZW91dCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsIndzdSIsInZlcnRpY2FsTmF2aXRhdGlvbiIsIm5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJoZWFkZXJHbG9iYWwiLCJhY2NvcmRpb24iLCJjb2xsYXBzYWJsZSIsIm1lbnUiLCJhbmltYXRpb25zIiwidmlkZW9GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBRUMsTUFBRixFQUFVQyxRQUFWLEVBQXdCO0FBRXZDLE1BQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEyQkgsUUFBM0IsQ0FBZDtBQUVBQyxTQUFPLENBQUNHLE9BQVIsQ0FDSSxVQUFFQyxPQUFGLEVBQVdDLENBQVgsRUFBa0I7QUFFZCxRQUFLRCxPQUFPLENBQUNFLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBTCxFQUE0QztBQUV4QyxVQUFJQyxLQUFLLEdBQUssVUFBVVQsTUFBWixHQUF1QixPQUF2QixHQUFpQyxRQUE3QztBQUVBLFVBQUlVLFdBQVcsR0FBSyxVQUFVVixNQUFaLEdBQXVCLE9BQXZCLEdBQWlDLE1BQW5EO0FBRUEsVUFBSVcsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBWixDQU53QyxDQVF4QztBQUVBOztBQUVBTixhQUFPLENBQUNPLFlBQVIsQ0FBc0IsWUFBdEIsRUFBb0NGLEtBQUssQ0FBQ0csT0FBTixDQUFlTCxLQUFmLEVBQXNCQyxXQUF0QixDQUFwQztBQUVIO0FBRUosR0FuQkw7QUFzQkgsQ0ExQkQ7O0FBNEJBLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRVQsT0FBRixFQUFXTixNQUFYLEVBQXVCO0FBRTdDLE1BQUtNLE9BQU8sQ0FBQ0UsWUFBUixDQUFzQixZQUF0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Q1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUksR0FBRyxHQUFHO0FBQ1JDLG9CQUFrQixFQUFFLElBQUlWLHdGQUFKLEVBRFo7QUFFUlcsd0JBQXNCLEVBQUUsSUFBSU4sNkVBQUosRUFGaEI7QUFHUk8sMEJBQXdCLEVBQUUsSUFBSW5HLDBGQUFKLEVBSGxCO0FBSVJvRyxjQUFZLEVBQUUsSUFBSVQseUVBQUosRUFKTjtBQUtSVSxXQUFTLEVBQUUsSUFBSXRILGlFQUFKLEVBTEg7QUFNUnVILGFBQVcsRUFBRSxJQUFJNUcsZ0ZBQUosRUFOTDtBQU9SNkcsTUFBSSxFQUFFLElBQUl6RSw0REFBSixFQVBFO0FBUVJ4QyxRQUFNLEVBQUUsSUFBSUYsOERBQUosRUFSQTtBQVNSb0gsWUFBVSxFQUFFLENBQ1I7QUFEUSxHQVRKO0FBWVJDLFlBQVUsRUFBRSxJQUFJbkcsZ0ZBQUosRUFaSjtBQWFSaUMsTUFBSSxFQUFFLElBQUlQLDZEQUFKO0FBYkUsQ0FBWixDIiwiZmlsZSI6ImJ1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcmlhVXBkYXRlID0gKCBhY3Rpb24sIHNlbGVjdG9yICkgPT4ge1xyXG5cclxuICAgIGxldCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goXHJcbiAgICAgICAgKCBlbGVtZW50LCBpICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGFjdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFyaWFVcGRhdGVFbGVtZW50ID0gKCBlbGVtZW50LCBhY3Rpb24gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCwgYXJpYVVwZGF0ZSB9OyIsImNvbnN0IGVsZW1lbnRHZXQgPSAoIHsgcGFyZW50ID0gZmFsc2UsIGVsZW1lbnRDbGFzcyA9IGZhbHNlIH0gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IHBhcmVudCA/IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggMCA8IGVsZW1lbnRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRDbG9zZXN0ID0gKCBlbGVtZW50LCBwYXJlbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoICcuJyArIHBhcmVudENsYXNzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRTaWJsaW5ncyA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXHJcblx0bGV0IHNpYmxpbmdzID0gW107XHJcblx0bGV0IHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcclxuXHR3aGlsZSAoIHNpYmxpbmcgKSB7XHJcblxyXG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbWVudCkge1xyXG5cclxuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QsIGVsZW1lbnRHZXRTaWJsaW5ncyB9IiwiY29uc3Qga2V5RG93bkV2ZW50ID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBkb21FdmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGtleSAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaW5DbGFzcyAgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggISBkb21FdmVudCB8fCAhIGtleSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRFbGVtZW50ID0gZG9tRXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGV2ZW50S2V5ICAgICA9IGRvbUV2ZW50LmtleTtcclxuXHJcbiAgICBpZiAoIGtleSA9PT0gZXZlbnRLZXkgJiYgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbkNsYXNzICYmIGV2ZW50RWxlbWVudC5jbG9zZXN0KCAnLicgKyBpbkNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93bkV2ZW50IH07IiwiY29uc3QgdG9nZ2xlQXJpYSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyID0gZmFsc2UsXHJcbiAgICAgICAgdG9nZ2xlQnlDbGFzcyA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlQnlDbGFzcyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIHRvZ2dsZUJ5Q2xhc3MgKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJiAnZmFsc2UnICE9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCB0cnVlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgdHJ1ZSApO1xyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgZmFsc2UgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFuaW1hdGluZyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZWREdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBhbmltYXRlQ2xhc3MgICAgID0gJ3dzdS1hbmltYXRpbmcnLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgICAgPSBmYWxzZSxcclxuICAgICAgICBjaGlsZEVsZW1lbnQgICAgID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBpc0FuaW1hdGVkICYmIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIGFuaW1hdGVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYW5pbWF0ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYW5pbWF0ZUhlaWdodCAmJiBjaGlsZEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZER1cmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFuaW1hdGVDbGFzcyApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG91bGQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV2ZW50RWxlbWVudCA9IGZhbHNlLCBcclxuICAgICAgICBjbGlja0NsYXNzID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tQYXJlbnQgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1NpYmxpbmcgPSBmYWxzZSxcclxuICAgICAgICBjaGVja0VtcHR5TGluayA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2xpY2tDbGFzcyAmJiBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrRW1wdHlMaW5rICYmIGV2ZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSAmJiAnIycgPT09IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tQYXJlbnQgJiYgZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrU2libGluZyAmJiBldmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUxhYmVsID0gKCBwcm9wcywgaXNFeHBhbmRlZCApID0+IHtcclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV4cGFuZGVkVGV4dCA9ICdDbG9zZScsIFxyXG4gICAgICAgIGNvbGxhcHNlZFRleHQgPSAnT3BlbicsIFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMgKTtcclxuXHJcblxyXG4gICAgaWYgKCBhcmlhTGFiZWxFbGVtZW50ICYmIGFyaWFMYWJlbEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgKSB7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGFyaWFMYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoIGlzRXhwYW5kZWQgKSA/IGV4cGFuZGVkVGV4dCA6IGNvbGxhcHNlZFRleHQ7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoIGV4cGFuZGVkVGV4dCArICd8JyArIGNvbGxhcHNlZFRleHQsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlZ2V4ICk7XHJcblxyXG4gICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbiApO1xyXG5cclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUhlaWdodCA9ICggcHJvcHMsIGlzRXhwYW5kaW5nICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCA9IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNoaWxkRWxlbWVudCAmJiBhbmltYXRlSGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRFbGVtZW50SGVpZ2h0ID0gKCBjaGlsZEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyApICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gY2hpbGRFbGVtZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoICEgaXNFeHBhbmRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UsIHRvZ2dsZUFuaW1hdGluZywgdG9nZ2xlU2hvdWxkIH07IiwiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgICAgIGNhbGxiYWNrID0gZmFsc2UsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuICAgIGxldCBkZWxheVRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xyXG5cclxuICAgIH0sIDE1ICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUFuaW1hdGVTbGlkZURvd24sIHdzdUFuaW1hdGVTbGlkZVVwIH07XHJcbiIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiXHJcbmNvbnN0IHdzdUdldEVsZW1lbnRIZWlnaHQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1U2xpZGVEb3duID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGVsZW1lbnQgPSBmYWxzZSwgLy8gRWxlbWVudCB0byBleHBhbmRcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsIC8vIEV4dHJhIGhpZWdodCBqdXN0IGluIGNhc2VcclxuICAgICAgICB0aW1pbmcgPSAxNTAsIC8vIGhvdyBsb25nIHdpbGwgdGhlIGFuaW1hdGlvbiBydW4gXHJcbiAgICAgICAgYXJpYUVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wc1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhcnRIZWlnaHQgPCAxMCApIHsgLy8gYXNzdW1lIGNsb3NlZFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGNzcyBkb2Vzbid0IHJlZ2lzdGVyIGl0LlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3N1U2xpZGVEb3duOyIsImNvbnN0IHVwZGF0ZUFyaWFFbGVtZW50ID0gKCBhY3Rpb24sIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVBcmlhRWxlbWVudDsiLCJjb25zdCB3c3VNZW51RXhwYW5kVXAgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvL3N1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZERvd24gPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9LCBcclxuICAgICAgICA1MDBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmRUb2dnbGUgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSAgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBzaG91bGRFeHBhbmQoIG5hdkl0ZW0gKSApIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdvcGVuJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kVXAoIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdjbG9zZSc7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3VsZEV4cGFuZCA9ICggbmF2SXRlbSApID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCAhIG5hdkl0ZW0uaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpIHx8ICdmYWxzZScgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdU1lbnVFeHBhbmRVcCwgd3N1TWVudUV4cGFuZFRvZ2dsZSwgd3N1TWVudUV4cGFuZERvd24gIH07IiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYW5pbWF0ZS0tc3VibWVudS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWw7IiwiaW1wb3J0IHtcclxuICAgIHdzdUFyaWFFeHBhbmRlZCxcclxuICAgIHdzdUFyaWFJc0V4cGFuZGVkLFxyXG4gICAgd3N1Q2xhc3NBZGQsXHJcbiAgICB3c3VDbGFzc1JlbW92ZSxcclxuICAgIHdzdUFuaW1hdGVTbGlkZURvd24sXHJcbiAgICB3c3VBbmltYXRlU2xpZGVVcCxcclxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcclxuXHJcbmNsYXNzIFdzdUFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS1hY2NvcmRpb24tLW9wZW4nO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkgeyBcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hY2NvcmRpb24tLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtYWNjb3JkaW9uX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFjY29yZGlvbjsgIiwiY2xhc3MgV3N1QnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmVCdXR0b24oIGV2ZW50LnRhcmdldCwgJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcsIFsnUGF1c2UnLCdQbGF5J10gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2dnbGVBY3RpdmVCdXR0b24oIGJ1dHRvbiwgYnV0dG9uQ2xhc3MsIGxhYmVscyApIHtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gYnV0dG9uQ2xhc3MgKyAnLS1hY3RpdmUnO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPyBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCBhY3RpdmVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMV0sIGxhYmVsc1swXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1swXSwgbGFiZWxzWzFdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUJ1dHRvbjsgICIsImltcG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVTaG91bGQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHt3c3VTbGlkZURvd259IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzJztcclxuXHJcbmNsYXNzIFdzdUNvbGxhcHNhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjb250ZW50Q2xhc3MnKSApID8gYXR0cy5jb250ZW50Q2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS1jb250ZW50JztcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyBcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0Q2xvc2VzdCggZXZlbnRFbGVtZW50LCB0aGlzLndyYXBwZXJDbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50R2V0ICggeyBwYXJlbnQ6IHdyYXBwZXIsIGVsZW1lbnRDbGFzczogdGhpcy5jb250ZW50Q2xhc3MgfSApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VTbGlkZURvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudDogd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VDb2xsYXBzYWJsZTsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIG5hdiApO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOyAiLCJjbGFzcyBXc3VWaWRlb0ZyYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmJhc3NDbGFzcyA9ICd3c3UtdmlkZW8tZnJhbWUnO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQncmVzaXplJywgXHJcblx0XHRcdCgpID0+IHsgdGhpcy5yZXNpemUoKSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wbGF5JyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnICkgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tdG9nZ2xlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlb1dyYXBwZXIuaGFzQXR0cmlidXRlKCdkYXRhLXBsYXknKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlkZW9TcmMgPSB2aWRlb1dyYXBwZXIuZGF0YXNldC5wbGF5O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyApO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCgnd3N1LXZpZGVvLWZyYW1lX192aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VCYWNrZ3JvdW5kVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggdGhpcy5iYXNzQ2xhc3MgKyAnX192aWRlby1iYWNrZ3JvdW5kJyApO1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW8ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTVSBWaWRlbyBGcmFtZTogVmlkZW8gTm90IEZvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvWzBdICk7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKSApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VmlkZW9TaXplKCkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW9zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKCB2aWRlb3MgKS5mb3JFYWNoKCAoIHZpZGVvICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKyAyNjAgKSAqIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAoIHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgLyAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKiAwLjU2MjUgKSA+IHZpZGVvV3JhcHBlci5vZmZzZXRIZWlnaHQgKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VWaWRlb0ZyYW1lOyAgIiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcbmltcG9ydCB7IGVsZW1lbnRHZXRTaWJsaW5ncyB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuXHJcbmNsYXNzIFdzdU1lbnUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdPcGVuJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtLXN1Ym1lbnUtY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsb3Nlc3QoJ2xpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuXHJcbiAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIC8vbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS11cCcgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzaWJsaW5ncyA9IGVsZW1lbnRHZXRTaWJsaW5ncyggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICBzaWJsaW5ncy5mb3JFYWNoKCBlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggZWxlbWVudCApICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICggbmF2RWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgJiYgJ3RydWUnID09IG5hdkVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU1lbnU7ICIsImltcG9ydCB7XG4gIHdzdUFyaWFFeHBhbmRlZCxcbiAgd3N1QXJpYUlzRXhwYW5kZWQsXG4gIHdzdUNsYXNzQWRkLFxuICB3c3VDbGFzc1JlbW92ZSxcbiAgd3N1QW5pbWF0ZVNsaWRlRG93bixcbiAgd3N1QW5pbWF0ZVNsaWRlVXAsXG59IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvd3N1UGFydGlhbHMnO1xuXG5jbGFzcyBXc3VUYWJzIHtcbiAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcblxuICAgIHRoaXMudGltZXIgPSBmYWxzZTtcbiAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtdGFicy0tb3Blbic7XG5cdFx0dGhpcy5jbG9zZWRQYW5lbCA9ICdoaWRkZW4nO1xuICAgIHRoaXMuc2hvd01vYmlsZSA9ICdzaG93LW1vYmlsZSc7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICB9XG5cbiAgaW5pdCgpIHtcblxuICAgIHRoaXMudGFiSWRzKCk7XG5cblx0XHRpZiAoICF0aGlzLmNoZWNrTW9iaWxlKCkgKSB7XG5cdFx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy50YWJzRGVza3RvcCgpO1xuXHRcdH1cblxuICB9XG5cbiAgdGFiSWRzKCkge1xuICAgIHZhciB3c3VUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic1wiKTtcblxuICAgIGlmICggd3N1VGFicy5sZW5ndGggPiAwICkge1xuICAgICAgd3N1VGFicy5mb3JFYWNoKCh0YWJzLCBpbmRleCkgPT4ge1xuICAgICAgICB0YWJzLnNldEF0dHJpYnV0ZShcImRhdGEtdGFiXCIsIGB3c3UtdGFicy0ke2luZGV4fWApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdHRoaXMuYWNjb3JkaW9uQ2xpY2tzLmJpbmQoIHRoaXMgKSxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblxuICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXG4gICAgICBmYWxzZVxuICAgICk7Ki9cblx0fVxuXG4gIGFjY29yZGlvbkNsaWNrcyAoIGV2ZW50ICkge1xuICAgIHRyeSB7XG5cdFx0XHRcdGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdFx0aWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFjY29yZGlvbi0tdG9nZ2xlJyApICkge1xuXG5cdFx0XHRcdFx0bGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS10YWJzX19wYW5lbC1pbm5lcicpO1xuXHRcdFx0XHRcdGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXRhYnNfX2NvbnRlbnQnKTtcblxuXHRcdFx0XHRcdGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xuICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIGZhbHNlICk7XG4gICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcbiAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xuICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIGFjY29yZGlvbkNvbnRlbnQsIHRoaXMuY2xvc2VkUGFuZWwgKTtcbiAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25Db250ZW50LCAnc2hvdy1tb2JpbGUnICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIHRydWUgKTtcblx0XHRcdFx0XHRcdHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XG5cdFx0XHRcdFx0XHR3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcblx0XHRcdFx0XHRcdHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25Db250ZW50LCB0aGlzLmNsb3NlZFBhbmVsICk7XG4gICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uQ29udGVudCwgJ3Nob3ctbW9iaWxlJyApO1xuICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkNvbnRlbnQsICdzaG93LWRlc2t0b3AnICk7XG5cdFx0XHRcdFx0fVxuXG4gICAgICAgICAgLy9UcmFja2luZyBmb3IgZGVza3RvcCB0YWJzIHdpdGggbW9iaWxlIGNsaWNrc1xuICAgICAgICAgIHZhciB3c3VUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic1wiKTtcbiAgICAgICAgICBsZXQgYWN0aXZlRGVza3RvcCA9IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xuICAgICAgICAgIGxldCBwYXJlbnRUYWIgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS10YWJzJyk7XG5cbiAgICAgICAgICBpZiAoIHdzdVRhYnMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGxldCBkZXNrdG9wVGFicyA9IHBhcmVudFRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzX19idXR0b24tZGVza3RvcFwiKTtcbiAgICAgICAgICAgIGxldCBwYW5lbENvbnRlbnQgPSBwYXJlbnRUYWIucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic19fY29udGVudFwiKTtcblxuICAgICAgICAgICAgZGVza3RvcFRhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgaWYgKCB0YWIuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSA9PT0gYWN0aXZlRGVza3RvcCApIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwYW5lbENvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihwYW5lbCkge1xuICAgICAgICAgICAgICBpZiAoIHBhbmVsLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhY3RpdmVEZXNrdG9wICkge1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBwYW5lbCwgXCJsYXN0LWNsaWNrZWRcIiApO1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBwYW5lbCwgJ3Nob3ctZGVza3RvcCcgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggcGFuZWwsIFwibGFzdC1jbGlja2VkXCIgKTtcbiAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggcGFuZWwsICdzaG93LWRlc2t0b3AnICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS10YWJzX19idXR0b24tZGVza3RvcCcgKSApIHtcblx0XHRcdFx0XHR0aGlzLnRhYnNEZXNrdG9wKCk7XG5cdFx0XHRcdH1cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblxuICB9XG5cbiAgdGFic0Rlc2t0b3AoKSB7XG4gICAgdmFyIHdzdVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzXCIpO1xuXG4gICAgaWYgKCB3c3VUYWJzLmxlbmd0aCA+IDAgKSB7XG4gICAgICB3c3VUYWJzLmZvckVhY2goKHRhYnMpID0+IHtcblxuICAgICAgICB2YXIgdGFiQnV0dG9ucyA9IHRhYnMucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic19fYnV0dG9uLWRlc2t0b3BcIik7XG4gICAgICAgIHZhciB0YWJQYW5lbHMgPSB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNfX2NvbnRlbnRcIik7XG5cbiAgICAgICAgLy8gQWNjb3JkaW9uIGJ1dHRvbnMgb24gbW9iaWxlXG4gICAgICAgIHZhciBhY2NCdXR0b25zID0gdGFicy5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS1hY2NvcmRpb25fX3RpdGxlLWJ1dHRvblwiKTtcblxuICAgICAgICBpZiAoIHRhYkJ1dHRvbnMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgICAgIGVuZDogMzUsXG4gICAgICAgICAgICBob21lOiAzNixcbiAgICAgICAgICAgIGxlZnQ6IDM3LFxuICAgICAgICAgICAgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LFxuICAgICAgICAgICAgZG93bjogNDAsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB7XG4gICAgICAgICAgICAzNzogLTEsXG4gICAgICAgICAgICAzODogLTEsXG4gICAgICAgICAgICAzOTogMSxcbiAgICAgICAgICAgIDQwOiAxLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBCaW5kIGxpc3RlbmVyc1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiQnV0dG9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycyhpbmRleCkge1xuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25FdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXBFdmVudExpc3RlbmVyKTsgLy9OZWVkZWQ/P1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBhcnJheSB3aXRoIGFsbCB0YWJzICg8YnV0dG9uPnMpIGluIGl0XG4gICAgICAgICAgICB0YWJCdXR0b25zW2luZGV4XS5pbmRleCA9IGluZGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gYSB0YWIgaXMgY2xpY2tlZCwgYWN0aXZhdGVUYWIgaXMgZmlyZWQgdG8gYWN0aXZhdGUgaXRcbiAgICAgICAgICBmdW5jdGlvbiBjbGlja0V2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFiID0gZXZlbnRFbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhYiwgZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBrZXlkb3duIG9uIHRhYnNcbiAgICAgICAgICBmdW5jdGlvbiBrZXlkb3duRXZlbnRMaXN0ZW5lcihldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgY2FzZSBrZXlzLmVuZDpcbiAgICAgICAgICAgICAgICBldmVudEVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvLyBBY3RpdmF0ZSBsYXN0IHRhYlxuICAgICAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhYkJ1dHRvbnNbdGFiQnV0dG9ucy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2Uga2V5cy5ob21lOlxuICAgICAgICAgICAgICAgIGV2ZW50RWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIEFjdGl2YXRlIGZpcnN0IHRhYlxuICAgICAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhYkJ1dHRvbnNbMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Uga2V5cy51cDpcbiAgICAgICAgICAgICAgICBjYXNlIGtleXMuZG93bjpcbiAgICAgICAgICAgICAgICAgIGV2ZW50RWxlbWVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGFuZGxlIGtleXVwIG9uIHRhYnNcbiAgICAgICAgICBmdW5jdGlvbiBrZXl1cEV2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnRFbGVtZW50LmtleUNvZGU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgIGNhc2Uga2V5cy5sZWZ0OlxuICAgICAgICAgICAgICBjYXNlIGtleXMucmlnaHQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoVGFiT25BcnJvd1ByZXNzKGV2ZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVUYWIodGFiLCBzZXRGb2N1cykge1xuICAgICAgICAgICAgc2V0Rm9jdXMgPSBzZXRGb2N1cyB8fCB0cnVlO1xuXG4gICAgICAgICAgICBkZWFjdGl2YXRlVGFicygpO1xuICAgICAgICAgICAgYWN0aXZhdGVBY2NvcmRpb24oKTtcblxuICAgICAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIHZhciBwYW5lbElkID0gdGFiLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XG4gICAgICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYW5lbElkKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgIHZhciBhY2NUaXRsZSA9IHBhbmVsLmNsb3Nlc3QoXCIud3N1LXRhYnNfX3BhbmVsLWlubmVyXCIpO1xuICAgICAgICAgICAgYWNjVGl0bGUuY2xhc3NMaXN0LmFkZChcIndzdS10YWJzLS1vcGVuXCIpO1xuXG4gICAgICAgICAgICBpZiAoc2V0Rm9jdXMpIHtcbiAgICAgICAgICAgICAgdGFiLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgdGFicyBhbmQgdGFiIHBhbmVsc1xuICAgICAgICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVUYWJzKCkge1xuICAgICAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhYlBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1vYmlsZVwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVza3RvcFwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtY2xpY2tlZFwiKTtcblxuICAgICAgICAgICAgICB2YXIgYWNjVGl0bGUgPSBwYW5lbC5jbG9zZXN0KFwiLndzdS10YWJzX19wYW5lbC1pbm5lclwiKTtcbiAgICAgICAgICAgICAgaWYgKCBhY2NUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3c3UtdGFicy0tb3BlblwiKSApIHtcbiAgICAgICAgICAgICAgICBhY2NUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwid3N1LXRhYnMtLW9wZW5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFjdGl2YXRlIG1vYmlsZSBhY2NvcmRpb25zXG4gICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVBY2NvcmRpb24oKSB7XG4gICAgICAgICAgICBhY2NCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYWNjQnV0dG9uKSB7XG4gICAgICAgICAgICAgIGlmICggYWNjQnV0dG9uLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIiApIHtcbiAgICAgICAgICAgICAgICBhY2NCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRWl0aGVyIGZvY3VzIHRoZSBuZXh0LCBwcmV2aW91cywgZmlyc3QsIG9yIGxhc3QgdGFiXG4gICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIGtleSBwcmVzc2VkXG4gICAgICAgICAgZnVuY3Rpb24gc3dpdGNoVGFiT25BcnJvd1ByZXNzKGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHByZXNzZWQgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhYkJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja1RhYkZvY3VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbltwcmVzc2VkXSkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnRFbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkJ1dHRvbnNbdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uW3ByZXNzZWRdXSkge1xuICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uc1t0YXJnZXQuaW5kZXggKyBkaXJlY3Rpb25bcHJlc3NlZF1dLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLmxlZnQgfHwgcHJlc3NlZCA9PT0ga2V5cy51cCkge1xuICAgICAgICAgICAgICAgICAgZm9jdXNMYXN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLnJpZ2h0IHx8IHByZXNzZWQgPT0ga2V5cy5kb3duKSB7XG4gICAgICAgICAgICAgICAgICBmb2N1c0ZpcnN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZm9jdXNGaXJzdFRhYigpIHtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnNbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBmb2N1c0xhc3RUYWIoKSB7XG4gICAgICAgICAgICB0YWJCdXR0b25zW3RhYkJ1dHRvbnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1RhYkZvY3VzKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBmb2N1c2VkKSB7XG4gICAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblx0aGlkZVBhbmVscygpIHtcbiAgICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNfX2NvbnRlbnRcIik7XG5cblx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCB0YWJDb250ZW50Lmxlbmd0aDsgaSsrICkge1xuXHRcdFx0dGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXHRcdH1cblx0fVxuXG4gIGNoZWNrTW9iaWxlKCkge1xuICAgIGxldCB0YWJsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53c3UtdGFic19fdGFibGlzdFwiKTtcblxuXHRcdGxldCB0YWJsaXN0RGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhYmxpc3QpO1xuXG4gICAgaWYgKCB0YWJsaXN0RGlzcGxheS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwibm9uZVwiICkge1xuXHRcdFx0dGhpcy5oaWRlUGFuZWxzKCk7XG4gICAgfSBlbHNlIHtcblx0XHRcdHRoaXMudGFic0Rlc2t0b3AoKTtcblx0XHR9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBXc3VUYWJzO1xuIiwiaW1wb3J0IHsgZWxlbWVudEdldCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlU2hvdWxkLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQgeyBrZXlEb3duRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cyc7XHJcblxyXG5jbGFzcyBXc3VuYXZpZ2F0aW9uU2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDbGFzcyAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2Nsb3NlQ2xhc3MnKSApID8gYXR0cy5jbG9zZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLWNsb3NlJztcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyAgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdvcGVuQ2xhc3MnKSApID8gYXR0cy5vcGVuQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tb3Blbic7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ2xhc3MgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGluZ0NsYXNzJykgKSA/IGF0dHMuYW5pbWF0aW5nQ2xhc3MgOiAnd3N1LWFuaW1hdGluZyc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmcgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW9uVGltaW5nJykgKSA/IGF0dHMuYW5pbWF0aW9uVGltaW5nIDogMzAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMuY2xvc2VDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgT3BlbiBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLm9wZW5DbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBUb2dnbGUgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCeUNsYXNzOiB0aGlzLmFjdGlvblByZWZpeCArICctLW9wZW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBldmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdW5hdmlnYXRpb25TaXRlOyBcclxuIiwiaW1wb3J0IHsgd3N1TWVudUV4cGFuZFRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3dzdU1lbnVFeHBhbmRcIjtcclxuaW1wb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1SGVhZGVyR2xvYmFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsIHdzdU1lbnVFeHBhbmRUb2dnbGUoIG5hdkVsZW1lbnQgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS1kb3duJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnb3BlbicgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdXAnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdjbG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUhlYWRlckdsb2JhbDsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgIGNvbnN0IG15VGltZW91dCA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyZXNpemUnKSk7XHJcbiAgICAgICAgICAgIH0sIDMwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdUJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL2J1dHRvbi9fc2NyaXB0JztcclxuaW1wb3J0IFdzdVRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy90YWJzL19zY3JpcHQnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdSA9IHtcclxuICAgIHZlcnRpY2FsTmF2aXRhdGlvbjogbmV3IFdzdW5hdmlnYXRpb25TaXRlKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOiBuZXcgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOiBuZXcgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsKCksXHJcbiAgICBoZWFkZXJHbG9iYWw6IG5ldyBXc3VIZWFkZXJHbG9iYWwoKSxcclxuICAgIGFjY29yZGlvbjogbmV3IFdzdUFjY29yZGlvbigpLFxyXG4gICAgY29sbGFwc2FibGU6IG5ldyBXc3VDb2xsYXBzYWJsZSgpLFxyXG4gICAgbWVudTogbmV3IFdzdU1lbnUoKSxcclxuICAgIGJ1dHRvbjogbmV3IFdzdUJ1dHRvbigpLFxyXG4gICAgYW5pbWF0aW9uczoge1xyXG4gICAgICAgIC8vc3VibWVudVNsaWRlVmVydGljYWw6IG5ldyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwoKSxcclxuICAgIH0sXHJcbiAgICB2aWRlb0ZyYW1lOiBuZXcgV3N1VmlkZW9GcmFtZSgpLFxyXG4gICAgdGFiczogbmV3IFdzdVRhYnMoKSxcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9