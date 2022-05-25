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
      document.addEventListener('keydown', this.accKeyEvents.bind(this), false);
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
    } // Arrow keys (up/down) navigation on mobile only

  }, {
    key: "accKeyEvents",
    value: function accKeyEvents() {
      var wsuTabs = document.querySelectorAll(".wsu-tabs");

      if (wsuTabs.length > 0) {
        wsuTabs.forEach(function (accTab) {
          var accButtons = accTab.querySelectorAll(".wsu-accordion__title-button");
          var keys = {
            end: 35,
            home: 36,
            up: 38,
            down: 40
          };
          var direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
          }; // Bind listeners

          for (var i = 0; i < accButtons.length; ++i) {
            addListeners(i);
          }

          function addListeners(index) {
            accButtons[index].addEventListener('keydown', keydownEventListener);
            accButtons[index].addEventListener('keyup', keyupEventListener); // Build an array with all tabs (<button>s) in it

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
              tabButtons[index].addEventListener('keyup', keyupEventListener); // Build an array with all tabs (<button>s) in it

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
                  eventElement.preventDefault();
                  activateTab(tabButtons[tabButtons.length - 1]);
                  break;

                case keys.home:
                  eventElement.preventDefault();
                  activateTab(tabButtons[0]);
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
              panel.classList.add("show-desktop");
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
    key: "checkMobile",
    value: function checkMobile() {
      var tablist = document.querySelector(".wsu-tabs__tablist");
      var tablistDisplay = window.getComputedStyle(tablist);

      if (!tablistDisplay.getPropertyValue('display') === "none") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL3RhYnMvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiXSwibmFtZXMiOlsiYXJpYVVwZGF0ZSIsImFjdGlvbiIsInNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImhhc0F0dHJpYnV0ZSIsInJlZ2V4IiwiYWN0aW9uTGFiZWwiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcmlhVXBkYXRlRWxlbWVudCIsImVsZW1lbnRHZXQiLCJwYXJlbnQiLCJlbGVtZW50Q2xhc3MiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlbGVtZW50R2V0Q2xvc2VzdCIsInBhcmVudENsYXNzIiwiY2xvc2VzdCIsImVsZW1lbnRHZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJrZXlEb3duRXZlbnQiLCJwcm9wcyIsImRvbUV2ZW50Iiwia2V5IiwiaW5DbGFzcyIsImV2ZW50RWxlbWVudCIsInRhcmdldCIsImV2ZW50S2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInRvZ2dsZUFyaWEiLCJ3cmFwcGVyIiwidG9nZ2xlQnlDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UiLCJ0b2dnbGVBcmlhRXhwYW5kZWRPcGVuIiwiaXNBbmltYXRlZCIsImFjdGlvblByZWZpeCIsImFyaWFMYWJlbEVsZW1lbnQiLCJ0b2dnbGVIZWlnaHQiLCJ0b2dnbGVBbmltYXRpbmciLCJ0b2dnbGVMYWJlbCIsImFkZCIsInJlbW92ZSIsImFuaW1hdGVkRHVyYXRpb24iLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiY2hpbGRFbGVtZW50IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0b2dnbGVTaG91bGQiLCJjbGlja0NsYXNzIiwiY2hlY2tQYXJlbnQiLCJjaGVja1NpYmxpbmciLCJjaGVja0VtcHR5TGluayIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpc0V4cGFuZGVkIiwiZXhwYW5kZWRUZXh0IiwiY29sbGFwc2VkVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJSZWdFeHAiLCJpc0V4cGFuZGluZyIsImhlaWdodFBhZGRpbmciLCJjaGlsZEVsZW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ3c3VBbmltYXRlU2xpZGVEb3duIiwiYXJncyIsImR1cmF0aW9uIiwiZXh0cmEiLCJwYXJzZUludCIsIndzdUFuaW1hdGVTbGlkZVVwIiwiY2FsbGJhY2siLCJkZWxheVRpbWVyIiwid3N1QXJpYUV4cGFuZGVkIiwidmFsdWUiLCJ3c3VBcmlhSXNFeHBhbmRlZCIsIndzdUNsYXNzQWRkIiwid3N1Q2xhc3NSZW1vdmUiLCJ3c3VDbGFzc1RvZ2dsZSIsIndzdUdldEVsZW1lbnRIZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid3N1U2xpZGVEb3duIiwidGltaW5nIiwiYXJpYUVsZW1lbnQiLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsInVwZGF0ZUFyaWFFbGVtZW50Iiwid3N1TWVudUV4cGFuZFVwIiwibmF2SXRlbSIsInN1Yk1lbnUiLCJsYXN0RWxlbWVudENoaWxkIiwid3N1TWVudUV4cGFuZERvd24iLCJ3c3VNZW51RXhwYW5kVG9nZ2xlIiwic2hvdWxkRXhwYW5kIiwiV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIiwiYXR0cyIsImluaXQiLCJiaW5kRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrRXZlbnRzIiwiYmluZCIsImV2ZW50IiwibmF2RWxlbWVudCIsInNob3VsZENsb3NlIiwiZXJyb3IiLCJXc3VBY2NvcmRpb24iLCJvcGVuQ2xhc3MiLCJhY2NvcmRpb25FbGVtZW50IiwiYWNjb3JkaW9uQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJXc3VCdXR0b24iLCJ0b2dnbGVBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25DbGFzcyIsImxhYmVscyIsImFjdGl2ZUNsYXNzIiwiV3N1Q29sbGFwc2FibGUiLCJ3cmFwcGVyQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsInRvZ2dsZUNsYXNzIiwiY29udGVudENsYXNzIiwicHJldmVudERlZmF1bHQiLCJXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJrZXlEb3duRXZlbnRzIiwiY2xvc2UiLCJvcGVuIiwibmF2IiwiYm9keSIsIldzdVZpZGVvRnJhbWUiLCJiYXNzQ2xhc3MiLCJzZXRWaWRlb1NpemUiLCJ3aW5kb3ciLCJyZXNpemUiLCJwbGF5VmlkZW8iLCJ0b2dnbGVCYWNrZ3JvdW5kVmlkZW8iLCJwYXVzZUJhY2tncm91bmRWaWRlbyIsInZpZGVvV3JhcHBlciIsInZpZGVvIiwidmlkZW9TcmMiLCJkYXRhc2V0IiwicGxheSIsInBsYXllciIsIlZpbWVvIiwiUGxheWVyIiwicGF1c2UiLCJ2aWRlb3MiLCJBcnJheSIsImZyb20iLCJpc1dpZGVWaWRlbyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJXc3VNZW51IiwiY2xvc2VTaWJsaW5ncyIsIldzdVRhYnMiLCJjbG9zZWRQYW5lbCIsInNob3dNb2JpbGUiLCJ0YWJJZHMiLCJjaGVja01vYmlsZSIsInRhYnNEZXNrdG9wIiwid3N1VGFicyIsInRhYnMiLCJpbmRleCIsImFjY29yZGlvbkNsaWNrcyIsImFjY0tleUV2ZW50cyIsImFjdGl2ZURlc2t0b3AiLCJwYXJlbnRUYWIiLCJkZXNrdG9wVGFicyIsInBhbmVsQ29udGVudCIsInRhYiIsInBhbmVsIiwiYWNjVGFiIiwiYWNjQnV0dG9ucyIsImtleXMiLCJlbmQiLCJob21lIiwidXAiLCJkb3duIiwiZGlyZWN0aW9uIiwiYWRkTGlzdGVuZXJzIiwia2V5ZG93bkV2ZW50TGlzdGVuZXIiLCJrZXl1cEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwic3dpdGNoVGFiT25BcnJvd1ByZXNzIiwicHJlc3NlZCIsInVuZGVmaW5lZCIsImZvY3VzIiwibGVmdCIsInJpZ2h0IiwidGFiQnV0dG9ucyIsInRhYlBhbmVscyIsImNsaWNrRXZlbnRMaXN0ZW5lciIsImFjdGl2YXRlVGFiIiwic2V0Rm9jdXMiLCJkZWFjdGl2YXRlVGFicyIsImFjdGl2YXRlQWNjb3JkaW9uIiwicGFuZWxJZCIsImdldEVsZW1lbnRCeUlkIiwiYWNjVGl0bGUiLCJhY2NCdXR0b24iLCJjaGVja1RhYkZvY3VzIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNGaXJzdFRhYiIsImZvY3VzZWQiLCJhY3RpdmVFbGVtZW50IiwidGFibGlzdCIsInRhYmxpc3REaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLE1BQUYsRUFBVUMsUUFBVixFQUF3QjtBQUV2QyxNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkJILFFBQTNCLENBQWQ7QUFFQUMsU0FBTyxDQUFDRyxPQUFSLENBQ0ksVUFBRUMsT0FBRixFQUFXQyxDQUFYLEVBQWtCO0FBRWQsUUFBS0QsT0FBTyxDQUFDRSxZQUFSLENBQXNCLFlBQXRCLENBQUwsRUFBNEM7QUFFeEMsVUFBSUMsS0FBSyxHQUFLLFVBQVVULE1BQVosR0FBdUIsT0FBdkIsR0FBaUMsUUFBN0M7QUFFQSxVQUFJVSxXQUFXLEdBQUssVUFBVVYsTUFBWixHQUF1QixPQUF2QixHQUFpQyxNQUFuRDtBQUVBLFVBQUlXLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXNCLFlBQXRCLENBQVosQ0FOd0MsQ0FReEM7QUFFQTs7QUFFQU4sYUFBTyxDQUFDTyxZQUFSLENBQXNCLFlBQXRCLEVBQW9DRixLQUFLLENBQUNHLE9BQU4sQ0FBZUwsS0FBZixFQUFzQkMsV0FBdEIsQ0FBcEM7QUFFSDtBQUVKLEdBbkJMO0FBc0JILENBMUJEOztBQTRCQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUVULE9BQUYsRUFBV04sTUFBWCxFQUF1QjtBQUU3QyxNQUFLTSxPQUFPLENBQUNFLFlBQVIsQ0FBc0IsWUFBdEIs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1JLEdBQUcsR0FBRztBQUNSQyxvQkFBa0IsRUFBRSxJQUFJVix3RkFBSixFQURaO0FBRVJXLHdCQUFzQixFQUFFLElBQUlOLDZFQUFKLEVBRmhCO0FBR1JPLDBCQUF3QixFQUFFLElBQUluRywwRkFBSixFQUhsQjtBQUlSb0csY0FBWSxFQUFFLElBQUlULHlFQUFKLEVBSk47QUFLUlUsV0FBUyxFQUFFLElBQUl0SCxpRUFBSixFQUxIO0FBTVJ1SCxhQUFXLEVBQUUsSUFBSTVHLGdGQUFKLEVBTkw7QUFPUjZHLE1BQUksRUFBRSxJQUFJekUsNERBQUosRUFQRTtBQVFSeEMsUUFBTSxFQUFFLElBQUlGLDhEQUFKLEVBUkE7QUFTUm9ILFlBQVUsRUFBRSxDQUNSO0FBRFEsR0FUSjtBQVlSQyxZQUFVLEVBQUUsSUFBSW5HLGdGQUFKLEVBWko7QUFhUmlDLE1BQUksRUFBRSxJQUFJUCw2REFBSjtBQWJFLENBQVosQyIsImZpbGUiOiJidW5kbGVzL3dzdS1kZXNpZ24tc3lzdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJpYVVwZGF0ZSA9ICggYWN0aW9uLCBzZWxlY3RvciApID0+IHtcclxuXHJcbiAgICBsZXQgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XHJcblxyXG4gICAgdG9nZ2xlcy5mb3JFYWNoKFxyXG4gICAgICAgICggZWxlbWVudCwgaSApID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWdleCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydChhY3Rpb25MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9hbGVydCggbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5jb25zdCBhcmlhVXBkYXRlRWxlbWVudCA9ICggZWxlbWVudCwgYWN0aW9uICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgYXJpYVVwZGF0ZUVsZW1lbnQsIGFyaWFVcGRhdGUgfTsiLCJjb25zdCBlbGVtZW50R2V0ID0gKCB7IHBhcmVudCA9IGZhbHNlLCBlbGVtZW50Q2xhc3MgPSBmYWxzZSB9ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudENsYXNzICkge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBwYXJlbnQgPyBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICkgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIDAgPCBlbGVtZW50cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHNbMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICB9IFxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBlbGVtZW50R2V0Q2xvc2VzdCA9ICggZWxlbWVudCwgcGFyZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5jbG9zZXN0KCAnLicgKyBwYXJlbnRDbGFzcyApO1xyXG4gICAgICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBlbGVtZW50R2V0U2libGluZ3MgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgLy8gU2V0dXAgc2libGluZ3MgYXJyYXkgYW5kIGdldCB0aGUgZmlyc3Qgc2libGluZ1xyXG5cdGxldCBzaWJsaW5ncyA9IFtdO1xyXG5cdGxldCBzaWJsaW5nID0gZWxlbWVudC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XHJcblxyXG5cdC8vIExvb3AgdGhyb3VnaCBlYWNoIHNpYmxpbmcgYW5kIHB1c2ggdG8gdGhlIGFycmF5XHJcblx0d2hpbGUgKCBzaWJsaW5nICkge1xyXG5cclxuXHRcdGlmIChzaWJsaW5nLm5vZGVUeXBlID09PSAxICYmIHNpYmxpbmcgIT09IGVsZW1lbnQpIHtcclxuXHJcblx0XHRcdHNpYmxpbmdzLnB1c2goc2libGluZyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNpYmxpbmcgPSBzaWJsaW5nLm5leHRTaWJsaW5nO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiBzaWJsaW5ncztcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0LCBlbGVtZW50R2V0U2libGluZ3MgfSIsImNvbnN0IGtleURvd25FdmVudCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZG9tRXZlbnQgPSBmYWxzZSxcclxuICAgICAgICBrZXkgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGluQ2xhc3MgID0gZmFsc2VcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoICEgZG9tRXZlbnQgfHwgISBrZXkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGV2ZW50RWxlbWVudCA9IGRvbUV2ZW50LnRhcmdldDtcclxuICAgIGxldCBldmVudEtleSAgICAgPSBkb21FdmVudC5rZXk7XHJcblxyXG4gICAgaWYgKCBrZXkgPT09IGV2ZW50S2V5ICYmIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgKSB7XHJcblxyXG4gICAgICAgIGlmICggaW5DbGFzcyAmJiBldmVudEVsZW1lbnQuY2xvc2VzdCggJy4nICsgaW5DbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGtleURvd25FdmVudCB9OyIsImNvbnN0IHRvZ2dsZUFyaWEgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciA9IGZhbHNlLFxyXG4gICAgICAgIHRvZ2dsZUJ5Q2xhc3MgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHRvZ2dsZUJ5Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCB0b2dnbGVCeUNsYXNzICkgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgJiYgJ2ZhbHNlJyAhPSB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgdHJ1ZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIHRydWUgKTtcclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIGZhbHNlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG5cclxuICAgICAgICB0b2dnbGVMYWJlbCggcHJvcHMsIGZhbHNlICk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLWNsb3NlZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1vcGVubmVkJyApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBbmltYXRpbmcgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVkRHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgYW5pbWF0ZUNsYXNzICAgICA9ICd3c3UtYW5pbWF0aW5nJyxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ICAgID0gZmFsc2UsXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ICAgICA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggaXNBbmltYXRlZCAmJiB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoIHdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCBhbmltYXRlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFuaW1hdGVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGFuaW1hdGVIZWlnaHQgJiYgY2hpbGRFbGVtZW50ICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWREdXJhdGlvblxyXG4gICAgICAgICAgICApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICBcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhbmltYXRlQ2xhc3MgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlU2hvdWxkID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBldmVudEVsZW1lbnQgPSBmYWxzZSwgXHJcbiAgICAgICAgY2xpY2tDbGFzcyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrUGFyZW50ID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tTaWJsaW5nID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tFbXB0eUxpbmsgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNsaWNrQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja0VtcHR5TGluayAmJiBldmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdocmVmJykgJiYgJyMnID09PSBldmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrUGFyZW50ICYmIGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1NpYmxpbmcgJiYgZXZlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVMYWJlbCA9ICggcHJvcHMsIGlzRXhwYW5kZWQgKSA9PiB7XHJcbiAgICBsZXQgeyBcclxuICAgICAgICBleHBhbmRlZFRleHQgPSAnQ2xvc2UnLCBcclxuICAgICAgICBjb2xsYXBzZWRUZXh0ID0gJ09wZW4nLCBcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgY29uc29sZS5sb2coIHByb3BzICk7XHJcblxyXG5cclxuICAgIGlmICggYXJpYUxhYmVsRWxlbWVudCAmJiBhcmlhTGFiZWxFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpICkge1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBhcmlhTGFiZWxFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uID0gKCBpc0V4cGFuZGVkICkgPyBleHBhbmRlZFRleHQgOiBjb2xsYXBzZWRUZXh0O1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCBleHBhbmRlZFRleHQgKyAnfCcgKyBjb2xsYXBzZWRUZXh0LCBcImdcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZWdleCApO1xyXG5cclxuICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb24gKTtcclxuXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCB0b2dnbGVIZWlnaHQgPSAoIHByb3BzLCBpc0V4cGFuZGluZyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgPSBmYWxzZSxcclxuICAgICAgICBoZWlnaHRQYWRkaW5nID0gMjAsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjaGlsZEVsZW1lbnQgJiYgYW5pbWF0ZUhlaWdodCApIHtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkRWxlbWVudEhlaWdodCA9ICggY2hpbGRFbGVtZW50LnNjcm9sbEhlaWdodCArIGhlaWdodFBhZGRpbmcgKSArIFwicHhcIjtcclxuXHJcbiAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGNoaWxkRWxlbWVudEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCAhIGlzRXhwYW5kaW5nICkge1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAyNVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHRvZ2dsZUFyaWEsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlLCB0b2dnbGVBbmltYXRpbmcsIHRvZ2dsZVNob3VsZCB9OyIsImNvbnN0IHdzdUFuaW1hdGVTbGlkZURvd24gPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9O1xyXG4iLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsIlxyXG5jb25zdCB3c3VHZXRFbGVtZW50SGVpZ2h0ID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdVNsaWRlRG93biA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBlbGVtZW50ID0gZmFsc2UsIC8vIEVsZW1lbnQgdG8gZXhwYW5kXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLCAvLyBFeHRyYSBoaWVnaHQganVzdCBpbiBjYXNlXHJcbiAgICAgICAgdGltaW5nID0gMTUwLCAvLyBob3cgbG9uZyB3aWxsIHRoZSBhbmltYXRpb24gcnVuIFxyXG4gICAgICAgIGFyaWFFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXJ0SGVpZ2h0IDwgMTAgKSB7IC8vIGFzc3VtZSBjbG9zZWRcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBjc3MgZG9lc24ndCByZWdpc3RlciBpdC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdzdVNsaWRlRG93bjsiLCJjb25zdCB1cGRhdGVBcmlhRWxlbWVudCA9ICggYWN0aW9uLCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQXJpYUVsZW1lbnQ7IiwiY29uc3Qgd3N1TWVudUV4cGFuZFVwID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLy9zdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmREb3duID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgNTAwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kVG9nZ2xlID0gKCBuYXZJdGVtLCBhcmdzID0ge30gICkgPT4ge1xyXG5cclxuICAgIGlmICggc2hvdWxkRXhwYW5kKCBuYXZJdGVtICkgKSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnb3Blbic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZFVwKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnY2xvc2UnO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG91bGRFeHBhbmQgPSAoIG5hdkl0ZW0gKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggISBuYXZJdGVtLmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSB8fCAnZmFsc2UnID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VNZW51RXhwYW5kVXAsIHdzdU1lbnVFeHBhbmRUb2dnbGUsIHdzdU1lbnVFeHBhbmREb3duICB9OyIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFuaW1hdGUtLXN1Ym1lbnUtdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsOyIsImltcG9ydCB7XHJcbiAgICB3c3VBcmlhRXhwYW5kZWQsXHJcbiAgICB3c3VBcmlhSXNFeHBhbmRlZCxcclxuICAgIHdzdUNsYXNzQWRkLFxyXG4gICAgd3N1Q2xhc3NSZW1vdmUsXHJcbiAgICB3c3VBbmltYXRlU2xpZGVEb3duLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlVXAsXHJcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XHJcblxyXG5jbGFzcyBXc3VBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtYWNjb3JkaW9uLS1vcGVuJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHsgXHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWFjY29yZGlvbl9fY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlVXAoIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVEb3duKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBY2NvcmRpb247ICIsImNsYXNzIFdzdUJ1dHRvbiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG4gICAgXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQWN0aXZlQnV0dG9uKCBldmVudC50YXJnZXQsICd3c3UtYnV0dG9uLXBhdXNlLWJhY2tncm91bmQnLCBbJ1BhdXNlJywnUGxheSddIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdG9nZ2xlQWN0aXZlQnV0dG9uKCBidXR0b24sIGJ1dHRvbkNsYXNzLCBsYWJlbHMgKSB7XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVDbGFzcyA9IGJ1dHRvbkNsYXNzICsgJy0tYWN0aXZlJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYnV0dG9uLmhhc0F0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpID8gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyggYWN0aXZlQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCBhY3RpdmVDbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBsYWJlbCApIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzFdLCBsYWJlbHNbMF0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICAgXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCBsYWJlbHNbMF0sIGxhYmVsc1sxXSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwgKTtcclxuICAgICAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VCdXR0b247ICAiLCJpbXBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgdG9nZ2xlU2hvdWxkIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7d3N1U2xpZGVEb3dufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3V0aWxpdGllcyc7XHJcblxyXG5jbGFzcyBXc3VDb2xsYXBzYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy53cmFwcGVyQ2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnd3JhcHBlckNsYXNzJykgKSA/IGF0dHMud3JhcHBlckNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy50b2dnbGVDbGFzcyAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAndG9nZ2xlQ2xhc3MnKSApID8gYXR0cy50b2dnbGVDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Q2xhc3MgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY29udGVudENsYXNzJykgKSA/IGF0dHMuY29udGVudENsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tY29udGVudCc7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1jb2xsYXBzYWJsZSc7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHsgXHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBDbG9zZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldENsb3Nlc3QoIGV2ZW50RWxlbWVudCwgdGhpcy53cmFwcGVyQ2xhc3MgKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudEdldCAoIHsgcGFyZW50OiB3cmFwcGVyLCBlbGVtZW50Q2xhc3M6IHRoaXMuY29udGVudENsYXNzIH0gKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1U2xpZGVEb3duKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQ6IHdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1Q29sbGFwc2FibGU7IiwiaW1wb3J0IHsgYXJpYVVwZGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBPcGVuIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGtleURvd25FdmVudCggeyBkb21FdmVudDogZXZlbnQsIGtleTonRXNjYXBlJywgaW5DbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6ICAgICAgICAgIGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICksXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uUHJlZml4OiAgICAgdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUxhYmVsRWxlbWVudDogZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS10b2dnbGUnIH0gKSwgIFxyXG4gICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBuYXYgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24taG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDsgIiwiY2xhc3MgV3N1VmlkZW9GcmFtZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy5iYXNzQ2xhc3MgPSAnd3N1LXZpZGVvLWZyYW1lJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0KCBldmVudCApID0+IHsgdGhpcy5jbGlja0V2ZW50cyggZXZlbnQpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J3Jlc2l6ZScsIFxyXG5cdFx0XHQoKSA9PiB7IHRoaXMucmVzaXplKCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXZpZGVvLWZyYW1lLS1hY3Rpb24tcGxheScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlWaWRlbyggZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyApIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJhY2tncm91bmRWaWRlbyggZXZlbnQudGFyZ2V0ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXRvZ2dsZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW9XcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGF5JykgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZpZGVvU3JjID0gdmlkZW9XcmFwcGVyLmRhdGFzZXQucGxheTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMgKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUJhY2tncm91bmRWaWRlbyggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvID0gdmlkZW9XcmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIHRoaXMuYmFzc0NsYXNzICsgJ19fdmlkZW8tYmFja2dyb3VuZCcgKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXU1UgVmlkZW8gRnJhbWU6IFZpZGVvIE5vdCBGb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlb1swXSApO1xyXG5cclxuICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJykgKSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFZpZGVvU2l6ZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHZpZGVvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICBpZiAoIHZpZGVvcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgQXJyYXkuZnJvbSggdmlkZW9zICkuZm9yRWFjaCggKCB2aWRlbyApID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9XcmFwcGVyID0gdmlkZW8ucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuaXNXaWRlVmlkZW8oIHZpZGVvV3JhcHBlciApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS5oZWlnaHQgPSAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICsgMjYwICkgKiAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgPiB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1VmlkZW9GcmFtZTsgICIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBlbGVtZW50R2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnT3BlbicsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS1zdWJtZW51LWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcblxyXG4gICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL25hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc2libGluZ3MgPSBlbGVtZW50R2V0U2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIGVsZW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5hdkVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICYmICd0cnVlJyA9PSBuYXZFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VNZW51OyAiLCJpbXBvcnQge1xuICB3c3VBcmlhRXhwYW5kZWQsXG4gIHdzdUFyaWFJc0V4cGFuZGVkLFxuICB3c3VDbGFzc0FkZCxcbiAgd3N1Q2xhc3NSZW1vdmUsXG4gIHdzdUFuaW1hdGVTbGlkZURvd24sXG4gIHdzdUFuaW1hdGVTbGlkZVVwLFxufSBmcm9tICcuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzJztcblxuY2xhc3MgV3N1VGFicyB7XG4gIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XG5cbiAgICB0aGlzLnRpbWVyID0gZmFsc2U7XG4gICAgdGhpcy5vcGVuQ2xhc3MgPSAnd3N1LXRhYnMtLW9wZW4nO1xuXHRcdHRoaXMuY2xvc2VkUGFuZWwgPSAnaGlkZGVuJztcbiAgICB0aGlzLnNob3dNb2JpbGUgPSAnc2hvdy1tb2JpbGUnO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgfVxuXG4gIGluaXQoKSB7XG5cbiAgICB0aGlzLnRhYklkcygpO1xuXG5cdFx0aWYgKCAhdGhpcy5jaGVja01vYmlsZSgpICkge1xuXHRcdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudGFic0Rlc2t0b3AoKTtcblx0XHR9XG5cbiAgfVxuXG4gIHRhYklkcygpIHtcbiAgICB2YXIgd3N1VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNcIik7XG5cbiAgICBpZiAoIHdzdVRhYnMubGVuZ3RoID4gMCApIHtcbiAgICAgIHdzdVRhYnMuZm9yRWFjaCgodGFicywgaW5kZXgpID0+IHtcbiAgICAgICAgdGFicy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhYlwiLCBgd3N1LXRhYnMtJHtpbmRleH1gKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbGljaycsXG5cdFx0XHR0aGlzLmFjY29yZGlvbkNsaWNrcy5iaW5kKCB0aGlzICksXG5cdFx0XHRmYWxzZVxuXHRcdCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2tleWRvd24nLFxuICAgICAgdGhpcy5hY2NLZXlFdmVudHMuYmluZCggdGhpcyApLFxuICAgICAgZmFsc2VcbiAgICApO1xuXHR9XG5cbiAgYWNjb3JkaW9uQ2xpY2tzICggZXZlbnQgKSB7XG4gICAgdHJ5IHtcblx0XHRcdFx0bGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0XHRpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XG5cblx0XHRcdFx0XHRsZXQgYWNjb3JkaW9uRWxlbWVudCA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LXRhYnNfX3BhbmVsLWlubmVyJyk7XG5cdFx0XHRcdFx0bGV0IGFjY29yZGlvbkNvbnRlbnQgPSBhY2NvcmRpb25FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtdGFic19fY29udGVudCcpO1xuXG5cdFx0XHRcdFx0aWYgKCB3c3VBcmlhSXNFeHBhbmRlZCggZXZlbnRFbGVtZW50ICkgKSB7XG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZVVwKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xuICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XG4gICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uQ29udGVudCwgdGhpcy5jbG9zZWRQYW5lbCApO1xuICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkNvbnRlbnQsICdzaG93LW1vYmlsZScgKTtcblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xuXHRcdFx0XHRcdFx0d3N1QW5pbWF0ZVNsaWRlRG93biggYWNjb3JkaW9uQ29udGVudCwge30gKTtcblx0XHRcdFx0XHRcdHdzdUNsYXNzQWRkKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xuXHRcdFx0XHRcdFx0d3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkNvbnRlbnQsIHRoaXMuY2xvc2VkUGFuZWwgKTtcbiAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBhY2NvcmRpb25Db250ZW50LCAnc2hvdy1tb2JpbGUnICk7XG4gICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggYWNjb3JkaW9uQ29udGVudCwgJ3Nob3ctZGVza3RvcCcgKTtcblx0XHRcdFx0XHR9XG5cbiAgICAgICAgICAvL1RyYWNraW5nIGZvciBkZXNrdG9wIHRhYnMgd2l0aCBtb2JpbGUgY2xpY2tzXG4gICAgICAgICAgdmFyIHdzdVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzXCIpO1xuICAgICAgICAgIGxldCBhY3RpdmVEZXNrdG9wID0gZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XG4gICAgICAgICAgbGV0IHBhcmVudFRhYiA9IGV2ZW50RWxlbWVudC5jbG9zZXN0KCcud3N1LXRhYnMnKTtcblxuICAgICAgICAgIGlmICggd3N1VGFicy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgbGV0IGRlc2t0b3BUYWJzID0gcGFyZW50VGFiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNfX2J1dHRvbi1kZXNrdG9wXCIpO1xuICAgICAgICAgICAgbGV0IHBhbmVsQ29udGVudCA9IHBhcmVudFRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzX19jb250ZW50XCIpO1xuXG4gICAgICAgICAgICBkZXNrdG9wVGFicy5mb3JFYWNoKGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICBpZiAoIHRhYi5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpID09PSBhY3RpdmVEZXNrdG9wICkge1xuICAgICAgICAgICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXNlbGVjdGVkXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHBhbmVsQ29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICAgIGlmICggcGFuZWwuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IGFjdGl2ZURlc2t0b3AgKSB7XG4gICAgICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIHBhbmVsLCBcImxhc3QtY2xpY2tlZFwiICk7XG4gICAgICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIHBhbmVsLCAnc2hvdy1kZXNrdG9wJyApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBwYW5lbCwgXCJsYXN0LWNsaWNrZWRcIiApO1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBwYW5lbCwgJ3Nob3ctZGVza3RvcCcgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LXRhYnNfX2J1dHRvbi1kZXNrdG9wJyApICkge1xuXHRcdFx0XHRcdHRoaXMudGFic0Rlc2t0b3AoKTtcblx0XHRcdFx0fVxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cdFx0fVxuXG4gIH1cblxuICAvLyBBcnJvdyBrZXlzICh1cC9kb3duKSBuYXZpZ2F0aW9uIG9uIG1vYmlsZSBvbmx5XG4gIGFjY0tleUV2ZW50cygpIHtcbiAgICB2YXIgd3N1VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNcIik7XG5cbiAgICBpZiAoIHdzdVRhYnMubGVuZ3RoID4gMCApIHtcbiAgICAgIHdzdVRhYnMuZm9yRWFjaCgoYWNjVGFiKSA9PiB7XG4gICAgICAgIHZhciBhY2NCdXR0b25zID0gYWNjVGFiLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LWFjY29yZGlvbl9fdGl0bGUtYnV0dG9uXCIpO1xuXG4gICAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAgIGVuZDogMzUsXG4gICAgICAgICAgaG9tZTogMzYsXG4gICAgICAgICAgdXA6IDM4LFxuICAgICAgICAgIGRvd246IDQwLFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSB7XG4gICAgICAgICAgMzc6IC0xLFxuICAgICAgICAgIDM4OiAtMSxcbiAgICAgICAgICAzOTogMSxcbiAgICAgICAgICA0MDogMSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCaW5kIGxpc3RlbmVyc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjY0J1dHRvbnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBhZGRMaXN0ZW5lcnMoaSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoaW5kZXgpIHtcbiAgICAgICAgICBhY2NCdXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGFjY0J1dHRvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXBFdmVudExpc3RlbmVyKTtcblxuICAgICAgICAgIC8vIEJ1aWxkIGFuIGFycmF5IHdpdGggYWxsIHRhYnMgKDxidXR0b24+cykgaW4gaXRcbiAgICAgICAgICBhY2NCdXR0b25zW2luZGV4XS5pbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24ga2V5ZG93bkV2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIGtleSA9IGV2ZW50RWxlbWVudC5rZXlDb2RlO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2Uga2V5cy51cDpcbiAgICAgICAgICAgIGNhc2Uga2V5cy5kb3duOlxuICAgICAgICAgICAgICBldmVudEVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24ga2V5dXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgICAgdmFyIGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSBrZXlzLnVwOlxuICAgICAgICAgICAgY2FzZSBrZXlzLmRvd246XG4gICAgICAgICAgICAgIHN3aXRjaFRhYk9uQXJyb3dQcmVzcyhldmVudCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN3aXRjaFRhYk9uQXJyb3dQcmVzcyhldmVudCkge1xuICAgICAgICAgIHZhciBwcmVzc2VkID0gZXZlbnQua2V5Q29kZTtcblxuICAgICAgICAgIGlmIChkaXJlY3Rpb25bcHJlc3NlZF0pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGFjY0J1dHRvbnNbdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uW3ByZXNzZWRdXSkge1xuICAgICAgICAgICAgICAgIGFjY0J1dHRvbnNbdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uW3ByZXNzZWRdXS5mb2N1cygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZXNzZWQgPT09IGtleXMubGVmdCB8fCBwcmVzc2VkID09PSBrZXlzLnVwKSB7XG4gICAgICAgICAgICAgICAgYWNjQnV0dG9uc1thY2NCdXR0b25zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlc3NlZCA9PT0ga2V5cy5yaWdodCB8fCBwcmVzc2VkID09IGtleXMuZG93bikge1xuICAgICAgICAgICAgICAgIGFjY0J1dHRvbnNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH1cblxuICB0YWJzRGVza3RvcCgpIHtcbiAgICB2YXIgd3N1VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNcIik7XG5cbiAgICBpZiAoIHdzdVRhYnMubGVuZ3RoID4gMCApIHtcbiAgICAgIHdzdVRhYnMuZm9yRWFjaCgodGFicykgPT4ge1xuXG4gICAgICAgIHZhciB0YWJCdXR0b25zID0gdGFicy5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzX19idXR0b24tZGVza3RvcFwiKTtcbiAgICAgICAgdmFyIHRhYlBhbmVscyA9IHRhYnMucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic19fY29udGVudFwiKTtcblxuICAgICAgICAvLyBBY2NvcmRpb24gYnV0dG9ucyBvbiBtb2JpbGVcbiAgICAgICAgdmFyIGFjY0J1dHRvbnMgPSB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LWFjY29yZGlvbl9fdGl0bGUtYnV0dG9uXCIpO1xuXG4gICAgICAgIGlmICggdGFiQnV0dG9ucy5sZW5ndGggPiAwICkge1xuICAgICAgICAgIHZhciBrZXlzID0ge1xuICAgICAgICAgICAgZW5kOiAzNSxcbiAgICAgICAgICAgIGhvbWU6IDM2LFxuICAgICAgICAgICAgbGVmdDogMzcsXG4gICAgICAgICAgICB1cDogMzgsXG4gICAgICAgICAgICByaWdodDogMzksXG4gICAgICAgICAgICBkb3duOiA0MCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHtcbiAgICAgICAgICAgIDM3OiAtMSxcbiAgICAgICAgICAgIDM4OiAtMSxcbiAgICAgICAgICAgIDM5OiAxLFxuICAgICAgICAgICAgNDA6IDEsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIEJpbmQgbGlzdGVuZXJzXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJCdXR0b25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcnMoaSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGluZGV4KSB7XG4gICAgICAgICAgICB0YWJCdXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0YWJCdXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXl1cEV2ZW50TGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBhbiBhcnJheSB3aXRoIGFsbCB0YWJzICg8YnV0dG9uPnMpIGluIGl0XG4gICAgICAgICAgICB0YWJCdXR0b25zW2luZGV4XS5pbmRleCA9IGluZGV4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFdoZW4gYSB0YWIgaXMgY2xpY2tlZCwgYWN0aXZhdGVUYWIgaXMgZmlyZWQgdG8gYWN0aXZhdGUgaXRcbiAgICAgICAgICBmdW5jdGlvbiBjbGlja0V2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgdGFiID0gZXZlbnRFbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhYiwgZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhhbmRsZSBrZXlkb3duIG9uIHRhYnNcbiAgICAgICAgICBmdW5jdGlvbiBrZXlkb3duRXZlbnRMaXN0ZW5lcihldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgY2FzZSBrZXlzLmVuZDpcbiAgICAgICAgICAgICAgICBldmVudEVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVRhYih0YWJCdXR0b25zW3RhYkJ1dHRvbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIGtleXMuaG9tZTpcbiAgICAgICAgICAgICAgICBldmVudEVsZW1lbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVRhYih0YWJCdXR0b25zWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIYW5kbGUga2V5dXAgb24gdGFic1xuICAgICAgICAgIGZ1bmN0aW9uIGtleXVwRXZlbnRMaXN0ZW5lcihldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgY2FzZSBrZXlzLmxlZnQ6XG4gICAgICAgICAgICAgIGNhc2Uga2V5cy5yaWdodDpcbiAgICAgICAgICAgICAgICBzd2l0Y2hUYWJPbkFycm93UHJlc3MoZXZlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZVRhYih0YWIsIHNldEZvY3VzKSB7XG4gICAgICAgICAgICBzZXRGb2N1cyA9IHNldEZvY3VzIHx8IHRydWU7XG5cbiAgICAgICAgICAgIGRlYWN0aXZhdGVUYWJzKCk7XG4gICAgICAgICAgICBhY3RpdmF0ZUFjY29yZGlvbigpO1xuXG4gICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcblxuICAgICAgICAgICAgdmFyIHBhbmVsSWQgPSB0YWIuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKTtcbiAgICAgICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhbmVsSWQpO1xuICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzaG93LWRlc2t0b3BcIik7XG5cbiAgICAgICAgICAgIHZhciBhY2NUaXRsZSA9IHBhbmVsLmNsb3Nlc3QoXCIud3N1LXRhYnNfX3BhbmVsLWlubmVyXCIpO1xuICAgICAgICAgICAgYWNjVGl0bGUuY2xhc3NMaXN0LmFkZChcIndzdS10YWJzLS1vcGVuXCIpO1xuXG4gICAgICAgICAgICBpZiAoc2V0Rm9jdXMpIHtcbiAgICAgICAgICAgICAgdGFiLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgdGFicyBhbmQgdGFiIHBhbmVsc1xuICAgICAgICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVUYWJzKCkge1xuICAgICAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhYlBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1vYmlsZVwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVza3RvcFwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtY2xpY2tlZFwiKTtcblxuICAgICAgICAgICAgICB2YXIgYWNjVGl0bGUgPSBwYW5lbC5jbG9zZXN0KFwiLndzdS10YWJzX19wYW5lbC1pbm5lclwiKTtcbiAgICAgICAgICAgICAgaWYgKCBhY2NUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3c3UtdGFicy0tb3BlblwiKSApIHtcbiAgICAgICAgICAgICAgICBhY2NUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwid3N1LXRhYnMtLW9wZW5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFjdGl2YXRlIG1vYmlsZSBhY2NvcmRpb25zXG4gICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVBY2NvcmRpb24oKSB7XG4gICAgICAgICAgICBhY2NCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYWNjQnV0dG9uKSB7XG4gICAgICAgICAgICAgIGlmICggYWNjQnV0dG9uLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIiApIHtcbiAgICAgICAgICAgICAgICBhY2NCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRWl0aGVyIGZvY3VzIHRoZSBuZXh0LCBwcmV2aW91cywgZmlyc3QsIG9yIGxhc3QgdGFiXG4gICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIGtleSBwcmVzc2VkXG4gICAgICAgICAgZnVuY3Rpb24gc3dpdGNoVGFiT25BcnJvd1ByZXNzKGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHByZXNzZWQgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhYkJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja1RhYkZvY3VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbltwcmVzc2VkXSkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnRFbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkJ1dHRvbnNbdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uW3ByZXNzZWRdXSkge1xuICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uc1t0YXJnZXQuaW5kZXggKyBkaXJlY3Rpb25bcHJlc3NlZF1dLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLmxlZnQgfHwgcHJlc3NlZCA9PT0ga2V5cy51cCkge1xuICAgICAgICAgICAgICAgICAgZm9jdXNMYXN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLnJpZ2h0IHx8IHByZXNzZWQgPT0ga2V5cy5kb3duKSB7XG4gICAgICAgICAgICAgICAgICBmb2N1c0ZpcnN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZm9jdXNGaXJzdFRhYigpIHtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnNbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBmb2N1c0xhc3RUYWIoKSB7XG4gICAgICAgICAgICB0YWJCdXR0b25zW3RhYkJ1dHRvbnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1RhYkZvY3VzKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBmb2N1c2VkKSB7XG4gICAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNb2JpbGUoKSB7XG4gICAgbGV0IHRhYmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndzdS10YWJzX190YWJsaXN0XCIpO1xuXG5cdFx0bGV0IHRhYmxpc3REaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFibGlzdCk7XG5cbiAgICBpZiAoICF0YWJsaXN0RGlzcGxheS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwibm9uZVwiICkge1xuXHRcdFx0dGhpcy50YWJzRGVza3RvcCgpO1xuXHRcdH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdzdVRhYnM7XG4iLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbXlUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgMzAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHdzdURyb3Bkb3duTW9kYWwgZnJvbSBcIi4uL2VsZW1lbnRzL2Ryb3Bkb3duLW1vZGFsL19kcm9wZG93bi1tb2RhbFwiO1xyXG5pbXBvcnQgV3N1bmF2aWdhdGlvblNpdGUgZnJvbSAnLi4vbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlJztcclxuaW1wb3J0IFdzdUhlYWRlckdsb2JhbCBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXItZ2xvYmFsL19oZWFkZXItZ2xvYmFsXCI7XHJcbmltcG9ydCBXc3VBY2NvcmRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdUNvbGxhcHNhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHRcIjtcclxuaW1wb3J0IFdzdU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIGZyb20gXCIuLi9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwgZnJvbSAnLi4vYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VWaWRlb0ZyYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VGFicyBmcm9tICcuLi9jb21wb25lbnRzL3RhYnMvX3NjcmlwdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1ID0ge1xyXG4gICAgdmVydGljYWxOYXZpdGF0aW9uOiBuZXcgV3N1bmF2aWdhdGlvblNpdGUoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlVmVydGljYWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwoKSxcclxuICAgIGhlYWRlckdsb2JhbDogbmV3IFdzdUhlYWRlckdsb2JhbCgpLFxyXG4gICAgYWNjb3JkaW9uOiBuZXcgV3N1QWNjb3JkaW9uKCksXHJcbiAgICBjb2xsYXBzYWJsZTogbmV3IFdzdUNvbGxhcHNhYmxlKCksXHJcbiAgICBtZW51OiBuZXcgV3N1TWVudSgpLFxyXG4gICAgYnV0dG9uOiBuZXcgV3N1QnV0dG9uKCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcbiAgICB0YWJzOiBuZXcgV3N1VGFicygpLFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=