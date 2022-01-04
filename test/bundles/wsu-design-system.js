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
            video.style.height = videoWrapper.offsetWidth * 0.5625 + 'px';
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
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__.default()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJhcmlhVXBkYXRlIiwiYWN0aW9uIiwic2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpIiwiaGFzQXR0cmlidXRlIiwicmVnZXgiLCJhY3Rpb25MYWJlbCIsImxhYmVsIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImFyaWFVcGRhdGVFbGVtZW50IiwiZWxlbWVudEdldCIsInBhcmVudCIsImVsZW1lbnRDbGFzcyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImVsZW1lbnRHZXRDbG9zZXN0IiwicGFyZW50Q2xhc3MiLCJjbG9zZXN0IiwiZWxlbWVudEdldFNpYmxpbmdzIiwic2libGluZ3MiLCJzaWJsaW5nIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImtleURvd25FdmVudCIsInByb3BzIiwiZG9tRXZlbnQiLCJrZXkiLCJpbkNsYXNzIiwiZXZlbnRFbGVtZW50IiwidGFyZ2V0IiwiZXZlbnRLZXkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwidG9nZ2xlQXJpYSIsIndyYXBwZXIiLCJ0b2dnbGVCeUNsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSIsInRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4iLCJpc0FuaW1hdGVkIiwiYWN0aW9uUHJlZml4IiwiYXJpYUxhYmVsRWxlbWVudCIsInRvZ2dsZUhlaWdodCIsInRvZ2dsZUFuaW1hdGluZyIsInRvZ2dsZUxhYmVsIiwiYWRkIiwicmVtb3ZlIiwiYW5pbWF0ZWREdXJhdGlvbiIsImFuaW1hdGVDbGFzcyIsImFuaW1hdGVIZWlnaHQiLCJjaGlsZEVsZW1lbnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm1heEhlaWdodCIsInRvZ2dsZVNob3VsZCIsImNsaWNrQ2xhc3MiLCJjaGVja1BhcmVudCIsImNoZWNrU2libGluZyIsImNoZWNrRW1wdHlMaW5rIiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzRXhwYW5kZWQiLCJleHBhbmRlZFRleHQiLCJjb2xsYXBzZWRUZXh0IiwiY29uc29sZSIsImxvZyIsIlJlZ0V4cCIsImlzRXhwYW5kaW5nIiwiaGVpZ2h0UGFkZGluZyIsImNoaWxkRWxlbWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIndzdUFuaW1hdGVTbGlkZURvd24iLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInBhcnNlSW50Iiwid3N1QW5pbWF0ZVNsaWRlVXAiLCJjYWxsYmFjayIsImRlbGF5VGltZXIiLCJ3c3VBcmlhRXhwYW5kZWQiLCJ2YWx1ZSIsIndzdUFyaWFJc0V4cGFuZGVkIiwid3N1Q2xhc3NBZGQiLCJ3c3VDbGFzc1JlbW92ZSIsIndzdUNsYXNzVG9nZ2xlIiwid3N1R2V0RWxlbWVudEhlaWdodCIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3c3VTbGlkZURvd24iLCJ0aW1pbmciLCJhcmlhRWxlbWVudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwidXBkYXRlQXJpYUVsZW1lbnQiLCJ3c3VNZW51RXhwYW5kVXAiLCJuYXZJdGVtIiwic3ViTWVudSIsImxhc3RFbGVtZW50Q2hpbGQiLCJ3c3VNZW51RXhwYW5kRG93biIsIndzdU1lbnVFeHBhbmRUb2dnbGUiLCJzaG91bGRFeHBhbmQiLCJXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwiLCJhdHRzIiwiaW5pdCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudHMiLCJiaW5kIiwiZXZlbnQiLCJuYXZFbGVtZW50Iiwic2hvdWxkQ2xvc2UiLCJlcnJvciIsIldzdUFjY29yZGlvbiIsIm9wZW5DbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJhY2NvcmRpb25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsIldzdUJ1dHRvbiIsInRvZ2dsZUFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvbkNsYXNzIiwibGFiZWxzIiwiYWN0aXZlQ2xhc3MiLCJXc3VDb2xsYXBzYWJsZSIsIndyYXBwZXJDbGFzcyIsImhhc093blByb3BlcnR5IiwidG9nZ2xlQ2xhc3MiLCJjb250ZW50Q2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsIldzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCIsImtleURvd25FdmVudHMiLCJjbG9zZSIsIm9wZW4iLCJuYXYiLCJib2R5IiwiV3N1VmlkZW9GcmFtZSIsImJhc3NDbGFzcyIsInNldFZpZGVvU2l6ZSIsIndpbmRvdyIsInJlc2l6ZSIsInBsYXlWaWRlbyIsInRvZ2dsZUJhY2tncm91bmRWaWRlbyIsInBhdXNlQmFja2dyb3VuZFZpZGVvIiwidmlkZW9XcmFwcGVyIiwidmlkZW8iLCJ2aWRlb1NyYyIsImRhdGFzZXQiLCJwbGF5IiwicGxheWVyIiwiVmltZW8iLCJQbGF5ZXIiLCJwYXVzZSIsInZpZGVvcyIsIkFycmF5IiwiZnJvbSIsImlzV2lkZVZpZGVvIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIldzdU1lbnUiLCJjbG9zZVNpYmxpbmdzIiwiV3N1bmF2aWdhdGlvblNpdGUiLCJjbG9zZUNsYXNzIiwiYW5pbWF0aW5nQ2xhc3MiLCJhbmltYXRpb25UaW1pbmciLCJXc3VIZWFkZXJHbG9iYWwiLCJXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwid3N1IiwidmVydGljYWxOYXZpdGF0aW9uIiwibmF2aWdhdGlvblNpdGVWZXJ0aWNhbCIsIm5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCIsImhlYWRlckdsb2JhbCIsImFjY29yZGlvbiIsImNvbGxhcHNhYmxlIiwibWVudSIsImFuaW1hdGlvbnMiLCJ2aWRlb0ZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFFQyxNQUFGLEVBQVVDLFFBQVYsRUFBd0I7QUFFdkMsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTJCSCxRQUEzQixDQUFkO0FBRUFDLFNBQU8sQ0FBQ0csT0FBUixDQUNJLFVBQUVDLE9BQUYsRUFBV0MsQ0FBWCxFQUFrQjtBQUVkLFFBQUtELE9BQU8sQ0FBQ0UsWUFBUixDQUFzQixZQUF0QixDQUFMLEVBQTRDO0FBRXhDLFVBQUlDLEtBQUssR0FBSyxVQUFVVCxNQUFaLEdBQXVCLE9BQXZCLEdBQWlDLFFBQTdDO0FBRUEsVUFBSVUsV0FBVyxHQUFLLFVBQVVWLE1BQVosR0FBdUIsT0FBdkIsR0FBaUMsTUFBbkQ7QUFFQSxVQUFJVyxLQUFLLEdBQUdMLE9BQU8sQ0FBQ00sWUFBUixDQUFzQixZQUF0QixDQUFaLENBTndDLENBUXhDO0FBRUE7O0FBRUFOLGFBQU8sQ0FBQ08sWUFBUixDQUFzQixZQUF0QixFQUFvQ0YsS0FBSyxDQUFDRyxPQUFOLENBQWVMLEtBQWYsRUFBc0JDLFdBQXRCLENBQXBDO0FBRUg7QUFFSixHQW5CTDtBQXNCSCxDQTFCRDs7QUE0QkEsSUFBTUssaUJBQWlCLEdBQUcs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V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1DLEdBQUcsR0FBRztBQUNSQyxvQkFBa0IsRUFBRSxJQUFJUCx3RkFBSixFQURaO0FBRVJRLHdCQUFzQixFQUFFLElBQUlILDZFQUFKLEVBRmhCO0FBR1JJLDBCQUF3QixFQUFFLElBQUl6QywwRkFBSixFQUhsQjtBQUlSMEMsY0FBWSxFQUFFLElBQUlOLHlFQUFKLEVBSk47QUFLUk8sV0FBUyxFQUFFLElBQUk1RCxpRUFBSixFQUxIO0FBTVI2RCxhQUFXLEVBQUUsSUFBSWxELGdGQUFKLEVBTkw7QUFPUm1ELE1BQUksRUFBRSxJQUFJZiw0REFBSixFQVBFO0FBUVJ4QyxRQUFNLEVBQUUsSUFBSUYsOERBQUosRUFSQTtBQVNSMEQsWUFBVSxFQUFFLENBQ1I7QUFEUSxHQVRKO0FBWVJDLFlBQVUsRUFBRSxJQUFJekMsZ0ZBQUo7QUFaSixDQUFaLEMiLCJmaWxlIjoiYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyaWFVcGRhdGUgPSAoIGFjdGlvbiwgc2VsZWN0b3IgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaChcclxuICAgICAgICAoIGVsZW1lbnQsIGkgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoYWN0aW9uTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY29uc3QgYXJpYVVwZGF0ZUVsZW1lbnQgPSAoIGVsZW1lbnQsIGFjdGlvbiApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFyaWFVcGRhdGVFbGVtZW50LCBhcmlhVXBkYXRlIH07IiwiY29uc3QgZWxlbWVudEdldCA9ICggeyBwYXJlbnQgPSBmYWxzZSwgZWxlbWVudENsYXNzID0gZmFsc2UgfSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnRDbGFzcyApIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gcGFyZW50ID8gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAwIDwgZWxlbWVudHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZWxlbWVudEdldENsb3Nlc3QgPSAoIGVsZW1lbnQsIHBhcmVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCggJy4nICsgcGFyZW50Q2xhc3MgKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZWxlbWVudEdldFNpYmxpbmdzID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcclxuXHRsZXQgc2libGluZ3MgPSBbXTtcclxuXHRsZXQgc2libGluZyA9IGVsZW1lbnQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxyXG5cdHdoaWxlICggc2libGluZyApIHtcclxuXHJcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtZW50KSB7XHJcblxyXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2libGluZ3M7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCwgZWxlbWVudEdldFNpYmxpbmdzIH0iLCJjb25zdCBrZXlEb3duRXZlbnQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGRvbUV2ZW50ID0gZmFsc2UsXHJcbiAgICAgICAga2V5ICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpbkNsYXNzICA9IGZhbHNlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCAhIGRvbUV2ZW50IHx8ICEga2V5ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudEVsZW1lbnQgPSBkb21FdmVudC50YXJnZXQ7XHJcbiAgICBsZXQgZXZlbnRLZXkgICAgID0gZG9tRXZlbnQua2V5O1xyXG5cclxuICAgIGlmICgga2V5ID09PSBldmVudEtleSAmJiBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGluQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsb3Nlc3QoICcuJyArIGluQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBrZXlEb3duRXZlbnQgfTsiLCJjb25zdCB0b2dnbGVBcmlhID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgPSBmYWxzZSxcclxuICAgICAgICB0b2dnbGVCeUNsYXNzID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGVCeUNsYXNzICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggdG9nZ2xlQnlDbGFzcyApICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmICdmYWxzZScgIT0gd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIHRydWUgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCB0cnVlICk7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyx0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCBmYWxzZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQW5pbWF0aW5nID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlZER1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGFuaW1hdGVDbGFzcyAgICAgPSAnd3N1LWFuaW1hdGluZycsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCAgICA9IGZhbHNlLFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCAgICAgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGlzQW5pbWF0ZWQgJiYgd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggYW5pbWF0ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhbmltYXRlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhbmltYXRlSGVpZ2h0ICYmIGNoaWxkRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkRHVyYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYW5pbWF0ZUNsYXNzICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVNob3VsZCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXZlbnRFbGVtZW50ID0gZmFsc2UsIFxyXG4gICAgICAgIGNsaWNrQ2xhc3MgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1BhcmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrU2libGluZyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrRW1wdHlMaW5rID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjbGlja0NsYXNzICYmIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tFbXB0eUxpbmsgJiYgZXZlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICYmICcjJyA9PT0gZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1BhcmVudCAmJiBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tTaWJsaW5nICYmIGV2ZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlTGFiZWwgPSAoIHByb3BzLCBpc0V4cGFuZGVkICkgPT4ge1xyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXhwYW5kZWRUZXh0ID0gJ0Nsb3NlJywgXHJcbiAgICAgICAgY29sbGFwc2VkVGV4dCA9ICdPcGVuJywgXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBwcm9wcyApO1xyXG5cclxuXHJcbiAgICBpZiAoIGFyaWFMYWJlbEVsZW1lbnQgJiYgYXJpYUxhYmVsRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSApIHtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYXJpYUxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICggaXNFeHBhbmRlZCApID8gZXhwYW5kZWRUZXh0IDogY29sbGFwc2VkVGV4dDtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggZXhwYW5kZWRUZXh0ICsgJ3wnICsgY29sbGFwc2VkVGV4dCwgXCJnXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggcmVnZXggKTtcclxuXHJcbiAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uICk7XHJcblxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlSGVpZ2h0ID0gKCBwcm9wcywgaXNFeHBhbmRpbmcgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBcclxuICAgICAgICBjaGlsZEVsZW1lbnQgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ID0gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2hpbGRFbGVtZW50ICYmIGFuaW1hdGVIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRIZWlnaHQgPSAoIGNoaWxkRWxlbWVudC5zY3JvbGxIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZEVsZW1lbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggISBpc0V4cGFuZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSwgdG9nZ2xlQW5pbWF0aW5nLCB0b2dnbGVTaG91bGQgfTsiLCJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9OyIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiXHJcbmNvbnN0IHdzdUdldEVsZW1lbnRIZWlnaHQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICBsZXQgaGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1U2xpZGVEb3duID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGVsZW1lbnQgPSBmYWxzZSwgLy8gRWxlbWVudCB0byBleHBhbmRcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsIC8vIEV4dHJhIGhpZWdodCBqdXN0IGluIGNhc2VcclxuICAgICAgICB0aW1pbmcgPSAxNTAsIC8vIGhvdyBsb25nIHdpbGwgdGhlIGFuaW1hdGlvbiBydW4gXHJcbiAgICAgICAgYXJpYUVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wc1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggc3RhcnRIZWlnaHQgPCAxMCApIHsgLy8gYXNzdW1lIGNsb3NlZFxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGNzcyBkb2Vzbid0IHJlZ2lzdGVyIGl0LlxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3N1U2xpZGVEb3duOyIsImNvbnN0IHVwZGF0ZUFyaWFFbGVtZW50ID0gKCBhY3Rpb24sIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVBcmlhRWxlbWVudDsiLCJjb25zdCB3c3VNZW51RXhwYW5kVXAgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvL3N1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgLyogSWYgdGhpcyBoYXBwZW5zIHRvbyBxdWlja2x5IGl0IGRvZXNuJ3Qgd29yaz8gKi9cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZERvd24gPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSApID0+IHtcclxuXHJcbiAgICBsZXQgc3ViTWVudSA9IG5hdkl0ZW0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICB9LCBcclxuICAgICAgICA1MDBcclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmRUb2dnbGUgPSAoIG5hdkl0ZW0sIGFyZ3MgPSB7fSAgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBzaG91bGRFeHBhbmQoIG5hdkl0ZW0gKSApIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdvcGVuJztcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kVXAoIG5hdkl0ZW0sIGFyZ3MgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICdjbG9zZSc7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNob3VsZEV4cGFuZCA9ICggbmF2SXRlbSApID0+IHtcclxuXHJcbiAgICByZXR1cm4gKCAhIG5hdkl0ZW0uaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpIHx8ICdmYWxzZScgPT0gbmF2SXRlbS5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdU1lbnVFeHBhbmRVcCwgd3N1TWVudUV4cGFuZFRvZ2dsZSwgd3N1TWVudUV4cGFuZERvd24gIH07IiwiaW1wb3J0IHVwZGF0ZUFyaWFFbGVtZW50IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3VwZGF0ZUFyaWFFbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYW5pbWF0ZS0tc3VibWVudS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWw7IiwiaW1wb3J0IHtcclxuICAgIHdzdUFyaWFFeHBhbmRlZCxcclxuICAgIHdzdUFyaWFJc0V4cGFuZGVkLFxyXG4gICAgd3N1Q2xhc3NBZGQsXHJcbiAgICB3c3VDbGFzc1JlbW92ZSxcclxuICAgIHdzdUFuaW1hdGVTbGlkZURvd24sXHJcbiAgICB3c3VBbmltYXRlU2xpZGVVcCxcclxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcclxuXHJcbmNsYXNzIFdzdUFjY29yZGlvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS1hY2NvcmRpb24tLW9wZW4nO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkgeyBcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hY2NvcmRpb24tLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LWFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtYWNjb3JkaW9uX19jb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCBmYWxzZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCggZXZlbnRFbGVtZW50LCB0cnVlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFjY29yZGlvbjsgIiwiY2xhc3MgV3N1QnV0dG9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBY3RpdmVCdXR0b24oIGV2ZW50LnRhcmdldCwgJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcsIFsnUGF1c2UnLCdQbGF5J10gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB0b2dnbGVBY3RpdmVCdXR0b24oIGJ1dHRvbiwgYnV0dG9uQ2xhc3MsIGxhYmVscyApIHtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNsYXNzID0gYnV0dG9uQ2xhc3MgKyAnLS1hY3RpdmUnO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgPyBidXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCBidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCBhY3RpdmVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMV0sIGxhYmVsc1swXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1swXSwgbGFiZWxzWzFdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUJ1dHRvbjsgICIsImltcG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVTaG91bGQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHt3c3VTbGlkZURvd259IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzJztcclxuXHJcbmNsYXNzIFdzdUNvbGxhcHNhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjb250ZW50Q2xhc3MnKSApID8gYXR0cy5jb250ZW50Q2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS1jb250ZW50JztcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyBcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0Q2xvc2VzdCggZXZlbnRFbGVtZW50LCB0aGlzLndyYXBwZXJDbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50R2V0ICggeyBwYXJlbnQ6IHdyYXBwZXIsIGVsZW1lbnRDbGFzczogdGhpcy5jb250ZW50Q2xhc3MgfSApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VTbGlkZURvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudDogd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VDb2xsYXBzYWJsZTsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIG5hdiApO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOyAiLCJjbGFzcyBXc3VWaWRlb0ZyYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmJhc3NDbGFzcyA9ICd3c3UtdmlkZW8tZnJhbWUnO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQncmVzaXplJywgXHJcblx0XHRcdCgpID0+IHsgdGhpcy5yZXNpemUoKSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wbGF5JyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnICkgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tdG9nZ2xlLWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcGxheVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlb1dyYXBwZXIuaGFzQXR0cmlidXRlKCdkYXRhLXBsYXknKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgdmlkZW9TcmMgPSB2aWRlb1dyYXBwZXIuZGF0YXNldC5wbGF5O1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uc2V0QXR0cmlidXRlKCdzcmMnLCB2aWRlb1NyYyApO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LmFkZCgnd3N1LXZpZGVvLWZyYW1lX192aWRlbycpO1xyXG5cclxuICAgICAgICAgICAgdmlkZW8uY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VCYWNrZ3JvdW5kVmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvLmxlbmd0aCApIHtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvID0gdmlkZW9bMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW8gKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQmFja2dyb3VuZFZpZGVvKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggdGhpcy5iYXNzQ2xhc3MgKyAnX192aWRlby1iYWNrZ3JvdW5kJyApO1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW8ubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dTVSBWaWRlbyBGcmFtZTogVmlkZW8gTm90IEZvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvWzBdICk7XHJcblxyXG4gICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKSApIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0VmlkZW9TaXplKCkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW9zLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBBcnJheS5mcm9tKCB2aWRlb3MgKS5mb3JFYWNoKCAoIHZpZGVvICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSB2aWRlby5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5pc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICggdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCAvIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCAqIDAuNTYyNSApID4gdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdVZpZGVvRnJhbWU7ICAiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZWxlbWVudEdldFNpYmxpbmdzIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1TWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ09wZW4nLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tc3VibWVudS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG5cclxuICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9uYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZWxlbWVudEdldFNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIHNpYmxpbmdzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBlbGVtZW50ICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBlbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCBuYXZFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSAmJiAndHJ1ZScgPT0gbmF2RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TWVudTsgIiwiaW1wb3J0IHsgZWxlbWVudEdldCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlU2hvdWxkLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQgeyBrZXlEb3duRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2V2ZW50cyc7XHJcblxyXG5jbGFzcyBXc3VuYXZpZ2F0aW9uU2l0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMuY2xvc2VDbGFzcyAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2Nsb3NlQ2xhc3MnKSApID8gYXR0cy5jbG9zZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLWNsb3NlJztcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyAgICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdvcGVuQ2xhc3MnKSApID8gYXR0cy5vcGVuQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tb3Blbic7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW5nQ2xhc3MgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FuaW1hdGluZ0NsYXNzJykgKSA/IGF0dHMuYW5pbWF0aW5nQ2xhc3MgOiAnd3N1LWFuaW1hdGluZyc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25UaW1pbmcgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW9uVGltaW5nJykgKSA/IGF0dHMuYW5pbWF0aW9uVGltaW5nIDogMzAwO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlJztcclxuICAgICAgICB0aGlzLnRpbWVyICAgICAgICAgICAgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMuY2xvc2VDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogd3JhcHBlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgT3BlbiBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLm9wZW5DbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBUb2dnbGUgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVBcmlhKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVCeUNsYXNzOiB0aGlzLmFjdGlvblByZWZpeCArICctLW9wZW5uZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBldmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdW5hdmlnYXRpb25TaXRlOyBcclxuIiwiaW1wb3J0IHsgd3N1TWVudUV4cGFuZFRvZ2dsZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3dzdU1lbnVFeHBhbmRcIjtcclxuaW1wb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1SGVhZGVyR2xvYmFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsIHdzdU1lbnVFeHBhbmRUb2dnbGUoIG5hdkVsZW1lbnQgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS1kb3duJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZFbGVtZW50ICk7XHJcbiAgICAgICAgICAgICAgICBhcmlhVXBkYXRlRWxlbWVudCggZXZlbnRFbGVtZW50LCAnb3BlbicgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LWV4cGFuZC0tdXAnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdjbG9zZScgKTtcclxuXHJcbiAgICAgICAgICAgIH1cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUhlYWRlckdsb2JhbDsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWw7ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgd3N1RHJvcGRvd25Nb2RhbCBmcm9tIFwiLi4vZWxlbWVudHMvZHJvcGRvd24tbW9kYWwvX2Ryb3Bkb3duLW1vZGFsXCI7XHJcbmltcG9ydCBXc3VuYXZpZ2F0aW9uU2l0ZSBmcm9tICcuLi9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUnO1xyXG5pbXBvcnQgV3N1SGVhZGVyR2xvYmFsIGZyb20gXCIuLi9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWxcIjtcclxuaW1wb3J0IFdzdUFjY29yZGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hY2NvcmRpb24vX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1Q29sbGFwc2FibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZW51L19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwgZnJvbSBcIi4uL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCBmcm9tICcuLi9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX25hdmlnYXRpb24taG9yaXpvbnRhbC9fc2NyaXB0JztcclxuaW1wb3J0IFdzdVZpZGVvRnJhbWUgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfdmlkZW8tZnJhbWUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vX3NjcmlwdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1ID0ge1xyXG4gICAgdmVydGljYWxOYXZpdGF0aW9uOiBuZXcgV3N1bmF2aWdhdGlvblNpdGUoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlVmVydGljYWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwoKSxcclxuICAgIGhlYWRlckdsb2JhbDogbmV3IFdzdUhlYWRlckdsb2JhbCgpLFxyXG4gICAgYWNjb3JkaW9uOiBuZXcgV3N1QWNjb3JkaW9uKCksXHJcbiAgICBjb2xsYXBzYWJsZTogbmV3IFdzdUNvbGxhcHNhYmxlKCksXHJcbiAgICBtZW51OiBuZXcgV3N1TWVudSgpLFxyXG4gICAgYnV0dG9uOiBuZXcgV3N1QnV0dG9uKCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcblxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=