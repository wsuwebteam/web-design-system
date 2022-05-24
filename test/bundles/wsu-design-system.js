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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9jb21wb25lbnRzL3RhYnMvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2hlYWRlci1nbG9iYWwvX2hlYWRlci1nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiXSwibmFtZXMiOlsiYXJpYVVwZGF0ZSIsImFjdGlvbiIsInNlbGVjdG9yIiwidG9nZ2xlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiaSIsImhhc0F0dHJpYnV0ZSIsInJlZ2V4IiwiYWN0aW9uTGFiZWwiLCJsYWJlbCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlcGxhY2UiLCJhcmlhVXBkYXRlRWxlbWVudCIsImVsZW1lbnRHZXQiLCJwYXJlbnQiLCJlbGVtZW50Q2xhc3MiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlbGVtZW50R2V0Q2xvc2VzdCIsInBhcmVudENsYXNzIiwiY2xvc2VzdCIsImVsZW1lbnRHZXRTaWJsaW5ncyIsInNpYmxpbmdzIiwic2libGluZyIsInBhcmVudE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJwdXNoIiwibmV4dFNpYmxpbmciLCJrZXlEb3duRXZlbnQiLCJwcm9wcyIsImRvbUV2ZW50Iiwia2V5IiwiaW5DbGFzcyIsImV2ZW50RWxlbWVudCIsInRhcmdldCIsImV2ZW50S2V5IiwiRWxlbWVudCIsInByb3RvdHlwZSIsInRvZ2dsZUFyaWEiLCJ3cmFwcGVyIiwidG9nZ2xlQnlDbGFzcyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UiLCJ0b2dnbGVBcmlhRXhwYW5kZWRPcGVuIiwiaXNBbmltYXRlZCIsImFjdGlvblByZWZpeCIsImFyaWFMYWJlbEVsZW1lbnQiLCJ0b2dnbGVIZWlnaHQiLCJ0b2dnbGVBbmltYXRpbmciLCJ0b2dnbGVMYWJlbCIsImFkZCIsInJlbW92ZSIsImFuaW1hdGVkRHVyYXRpb24iLCJhbmltYXRlQ2xhc3MiLCJhbmltYXRlSGVpZ2h0IiwiY2hpbGRFbGVtZW50IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ0b2dnbGVTaG91bGQiLCJjbGlja0NsYXNzIiwiY2hlY2tQYXJlbnQiLCJjaGVja1NpYmxpbmciLCJjaGVja0VtcHR5TGluayIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpc0V4cGFuZGVkIiwiZXhwYW5kZWRUZXh0IiwiY29sbGFwc2VkVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJSZWdFeHAiLCJpc0V4cGFuZGluZyIsImhlaWdodFBhZGRpbmciLCJjaGlsZEVsZW1lbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ3c3VBbmltYXRlU2xpZGVEb3duIiwiYXJncyIsImR1cmF0aW9uIiwiZXh0cmEiLCJwYXJzZUludCIsIndzdUFuaW1hdGVTbGlkZVVwIiwiY2FsbGJhY2siLCJkZWxheVRpbWVyIiwid3N1QXJpYUV4cGFuZGVkIiwidmFsdWUiLCJ3c3VBcmlhSXNFeHBhbmRlZCIsIndzdUNsYXNzQWRkIiwid3N1Q2xhc3NSZW1vdmUiLCJ3c3VDbGFzc1RvZ2dsZSIsIndzdUdldEVsZW1lbnRIZWlnaHQiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid3N1U2xpZGVEb3duIiwidGltaW5nIiwiYXJpYUVsZW1lbnQiLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsInVwZGF0ZUFyaWFFbGVtZW50Iiwid3N1TWVudUV4cGFuZFVwIiwibmF2SXRlbSIsInN1Yk1lbnUiLCJsYXN0RWxlbWVudENoaWxkIiwid3N1TWVudUV4cGFuZERvd24iLCJ3c3VNZW51RXhwYW5kVG9nZ2xlIiwic2hvdWxkRXhwYW5kIiwiV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIiwiYXR0cyIsImluaXQiLCJiaW5kRXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrRXZlbnRzIiwiYmluZCIsImV2ZW50IiwibmF2RWxlbWVudCIsInNob3VsZENsb3NlIiwiZXJyb3IiLCJXc3VBY2NvcmRpb24iLCJvcGVuQ2xhc3MiLCJhY2NvcmRpb25FbGVtZW50IiwiYWNjb3JkaW9uQ29udGVudCIsInF1ZXJ5U2VsZWN0b3IiLCJXc3VCdXR0b24iLCJ0b2dnbGVBY3RpdmVCdXR0b24iLCJidXR0b24iLCJidXR0b25DbGFzcyIsImxhYmVscyIsImFjdGl2ZUNsYXNzIiwiV3N1Q29sbGFwc2FibGUiLCJ3cmFwcGVyQ2xhc3MiLCJoYXNPd25Qcm9wZXJ0eSIsInRvZ2dsZUNsYXNzIiwiY29udGVudENsYXNzIiwicHJldmVudERlZmF1bHQiLCJXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwiLCJrZXlEb3duRXZlbnRzIiwiY2xvc2UiLCJvcGVuIiwibmF2IiwiYm9keSIsIldzdVZpZGVvRnJhbWUiLCJiYXNzQ2xhc3MiLCJzZXRWaWRlb1NpemUiLCJ3aW5kb3ciLCJyZXNpemUiLCJwbGF5VmlkZW8iLCJ0b2dnbGVCYWNrZ3JvdW5kVmlkZW8iLCJwYXVzZUJhY2tncm91bmRWaWRlbyIsInZpZGVvV3JhcHBlciIsInZpZGVvIiwidmlkZW9TcmMiLCJkYXRhc2V0IiwicGxheSIsInBsYXllciIsIlZpbWVvIiwiUGxheWVyIiwicGF1c2UiLCJ2aWRlb3MiLCJBcnJheSIsImZyb20iLCJpc1dpZGVWaWRlbyIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJXc3VNZW51IiwiY2xvc2VTaWJsaW5ncyIsIldzdVRhYnMiLCJjbG9zZWRQYW5lbCIsInNob3dNb2JpbGUiLCJ0YWJJZHMiLCJjaGVja01vYmlsZSIsInRhYnNEZXNrdG9wIiwid3N1VGFicyIsInRhYnMiLCJpbmRleCIsImFjY29yZGlvbkNsaWNrcyIsImFjY0tleUV2ZW50cyIsImFjdGl2ZURlc2t0b3AiLCJwYXJlbnRUYWIiLCJkZXNrdG9wVGFicyIsInBhbmVsQ29udGVudCIsInRhYiIsInBhbmVsIiwiYWNjVGFiIiwiYWNjQnV0dG9ucyIsImtleXMiLCJlbmQiLCJob21lIiwidXAiLCJkb3duIiwiZGlyZWN0aW9uIiwiYWRkTGlzdGVuZXJzIiwia2V5ZG93bkV2ZW50TGlzdGVuZXIiLCJrZXl1cEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwic3dpdGNoVGFiT25BcnJvd1ByZXNzIiwicHJlc3NlZCIsInVuZGVmaW5lZCIsImZvY3VzIiwibGVmdCIsInJpZ2h0IiwidGFiQnV0dG9ucyIsInRhYlBhbmVscyIsImNsaWNrRXZlbnRMaXN0ZW5lciIsImFjdGl2YXRlVGFiIiwic2V0Rm9jdXMiLCJkZWFjdGl2YXRlVGFicyIsImFjdGl2YXRlQWNjb3JkaW9uIiwicGFuZWxJZCIsImdldEVsZW1lbnRCeUlkIiwiYWNjVGl0bGUiLCJhY2NCdXR0b24iLCJjaGVja1RhYkZvY3VzIiwiZm9jdXNMYXN0VGFiIiwiZm9jdXNGaXJzdFRhYiIsImZvY3VzZWQiLCJhY3RpdmVFbGVtZW50IiwidGFibGlzdCIsInRhYmxpc3REaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJteVRpbWVvdXQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLE1BQUYsRUFBVUMsUUFBVixFQUF3QjtBQUV2QyxNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkJILFFBQTNCLENBQWQ7QUFFQUMsU0FBTyxDQUFDRyxPQUFSLENBQ0ksVUFBRUMsT0FBRixFQUFXQyxDQUFYLEVBQWtCO0FBRWQsUUFBS0QsT0FBTyxDQUFDRSxZQUFSLENBQXNCLFlBQXRCLENBQUwsRUFBNEM7QUFFeEMsVUFBSUMsS0FBSyxHQUFLLFVBQVVULE1BQVosR0FBdUIsT0FBdkIsR0FBaUMsUUFBN0M7QUFFQSxVQUFJVSxXQUFXLEdBQUssVUFBVVYsTUFBWixHQUF1QixPQUF2QixHQUFpQyxNQUFuRDtBQUVBLFVBQUlXLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXNCLFlBQXRCLENBQVosQ0FOd0MsQ0FReEM7QUFFQTs7QUFFQU4sYUFBTyxDQUFDTyxZQUFSLENBQXNCLFlBQXRCLEVBQW9DRixLQUFLLENBQUNHLE9BQU4sQ0FBZUwsS0FBZixFQUFzQkMsV0FBdEIsQ0FBcEM7QUFFSDtBQUVKLEdBbkJMO0FBc0JILENBMUJEOztBQTRCQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUVULE9BQUYsRUFBV04sTUFBWCxFQUF1QjtBQUU3QyxNQUFLTSxPQUFPLENBQUNFLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBTCxFQUE0QztBQUV4QyxRQUFJQyxLQUFLLEdBQUssVUFBVVQsTUFBWixHQUF1QixPQUF2QixHQUFpQyxRQUE3QztBQUVBLFFBQUlVLFdBQVcsR0FBSyxVQUFVVixNQUFaLEdBQXVCLE9BQXZCLEdBQWlDLE1BQW5EO0FBRUEsUUFBSVcsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBWjtBQUVBTixXQUFPLENBQUNPLFlBQVIsQ0FBc0IsWUFBdEIsRUFBb0NGLEtBQUssQ0FBQ0csT0FBTixDQUFlTCxLQUFmLEVBQXNCQyxXQUF0QixDQUFwQztBQUVIO0FBRUosQ0FkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdEO0FBQUEseUJBQTVDQyxNQUE0QztBQUFBLE1BQTVDQSxNQUE0Qyw0QkFBbkMsS0FBbUM7QUFBQSwrQkFBNUJDLFlBQTRCO0FBQUEsTUFBNUJBLFlBQTRCLGtDQUFiLEtBQWE7O0FBRS9ELE1BQUtBLFlBQUwsRUFBb0I7QUFFaEIsUUFBSUMsUUFBUSxHQUFHRixNQUFNLEdBQUdBLE1BQU0sQ0FBQ0csc0JBQVAsQ0FBK0JGLFlBQS9CLENBQUgsR0FBbURmLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWlDRixZQUFqQyxDQUF4RTs7QUFFQSxRQUFLLElBQUlDLFFBQVEsQ0FBQ0UsTUFBbEIsRUFBMkI7QUFFdkIsYUFBT0YsUUFBUSxDQUFDLENBQUQsQ0FBZjtBQUVILEtBSkQsTUFJTztBQUVILGFBQU8sS0FBUDtBQUVIO0FBRUo7O0FBRUQsU0FBTyxLQUFQO0FBRUgsQ0FwQkQ7O0FBdUJBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRWhCLE9BQUYsRUFBV2lCLFdBQVgsRUFBNEI7QUFFbEQsTUFBS2pCLE9BQUwsRUFBZTtBQUVYLFdBQU9BLE9BQU8sQ0FBQ2tCLE9BQVIsQ0FBaUIsTUFBTUQsV0FBdkIsQ0FBUDtBQUVILEdBSkQsTUFJTztBQUVILFdBQU8sS0FBUDtBQUVIO0FBRUosQ0FaRDs7QUFjQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUVuQixPQUFGLEVBQWU7QUFFdEM7QUFDSCxNQUFJb0IsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxPQUFPLEdBQUdyQixPQUFPLENBQUNzQixVQUFSLENBQW1CQyxVQUFqQyxDQUp5QyxDQU16Qzs7QUFDQSxTQUFRRixPQUFSLEVBQWtCO0FBRWpCLFFBQUlBLE9BQU8sQ0FBQ0csUUFBUixLQUFxQixDQUFyQixJQUEwQkgsT0FBTyxLQUFLckIsT0FBMUMsRUFBbUQ7QUFFbERvQixjQUFRLENBQUNLLElBQVQsQ0FBY0osT0FBZDtBQUVBOztBQUVEQSxXQUFPLEdBQUdBLE9BQU8sQ0FBQ0ssV0FBbEI7QUFFQTs7QUFFRCxTQUFPTixRQUFQO0FBRUEsQ0FyQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0EsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBRUMsS0FBRixFQUFhO0FBRTlCLHdCQUlJQSxLQUpKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLGdDQUNlLEtBRGY7QUFBQSxtQkFJSUQsS0FKSixDQUVJRSxHQUZKO0FBQUEsTUFFSUEsR0FGSiwyQkFFZSxLQUZmO0FBQUEsdUJBSUlGLEtBSkosQ0FHSUcsT0FISjtBQUFBLE1BR0lBLE9BSEosK0JBR2UsS0FIZjs7QUFNQSxNQUFLLENBQUVGLFFBQUYsSUFBYyxDQUFFQyxHQUFyQixFQUEyQjtBQUV2QixXQUFPLEtBQVA7QUFFSDs7QUFFRCxNQUFJRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0ksTUFBNUI7QUFDQSxNQUFJQyxRQUFRLEdBQU9MLFFBQVEsQ0FBQ0MsR0FBNUI7O0FBRUEsTUFBS0EsR0FBRyxLQUFLSSxRQUFSLElBQW9CQyxPQUFPLENBQUNDLFNBQVIsQ0FBa0JsQixPQUEzQyxFQUFxRDtBQUVqRCxRQUFLYSxPQUFPLElBQUlDLFlBQVksQ0FBQ2QsT0FBYixDQUFzQixNQUFNYSxPQUE1QixDQUFoQixFQUF3RDtBQUVwRCxhQUFPLElBQVA7QUFFSDtBQUVKLEdBUkQsTUFRTztBQUVILFdBQU8sS0FBUDtBQUVIO0FBRUosQ0EvQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBRVQsS0FBRixFQUFhO0FBRTVCLHVCQUdJQSxLQUhKLENBQ0lVLE9BREo7QUFBQSxNQUNJQSxPQURKLCtCQUNjLEtBRGQ7QUFBQSw2QkFHSVYsS0FISixDQUVJVyxhQUZKO0FBQUEsTUFFSUEsYUFGSixxQ0FFb0IsS0FGcEIsd0JBRjRCLENBTzVCOztBQUNBLE1BQUtELE9BQUwsRUFBZTtBQUVYLFFBQUtDLGFBQUwsRUFBcUI7QUFFakIsVUFBS0QsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxRQUFsQixDQUE0QkYsYUFBNUIsQ0FBTCxFQUFtRDtBQUUvQ0csK0JBQXVCLENBQUVkLEtBQUYsQ0FBdkI7QUFFSCxPQUpELE1BSU87QUFFSGUsOEJBQXNCLENBQUVmLEtBQUYsQ0FBdEI7QUFFSDtBQUVKLEtBWkQsTUFZTztBQUVILFVBQUtVLE9BQU8sQ0FBQ2hDLFlBQVIsQ0FBcUIsZUFBckIsS0FBeUMsV0FBV2dDLE9BQU8sQ0FBQ2hDLFlBQVIsQ0FBcUIsZUFBckIsQ0FBekQsRUFBaUc7QUFFN0ZvQywrQkFBdUIsQ0FBRWQsS0FBRixDQUF2QjtBQUVILE9BSkQsTUFJTztBQUVIZSw4QkFBc0IsQ0FBRWYsS0FBRixDQUF0QjtBQUVIO0FBRUo7QUFFSjtBQUVKLENBdENEOztBQXdDQSxJQUFNZSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUVmLEtBQUYsRUFBYTtBQUV4Qyx3QkFLSUEsS0FMSixDQUNJVSxPQURKO0FBQUEsTUFDSUEsT0FESixnQ0FDdUIsS0FEdkI7QUFBQSwwQkFLSVYsS0FMSixDQUVJZ0IsVUFGSjtBQUFBLE1BRUlBLFVBRkosa0NBRXVCLElBRnZCO0FBQUEsNEJBS0loQixLQUxKLENBR0lpQixZQUhKO0FBQUEsTUFHSUEsWUFISixvQ0FHdUIsS0FIdkI7QUFBQSw4QkFLSWpCLEtBTEosQ0FJSWtCLGdCQUpKO0FBQUEsTUFJSUEsZ0JBSkosc0NBSXVCLEtBSnZCLHlCQUZ3QyxDQVV4Qzs7QUFDQSxNQUFLUixPQUFMLEVBQWU7QUFFWFMsZ0JBQVksQ0FBRW5CLEtBQUYsRUFBUyxJQUFULENBQVo7QUFDQW9CLG1CQUFlLENBQUVwQixLQUFGLENBQWY7QUFDQXFCLGVBQVcsQ0FBRXJCLEtBQUYsRUFBUyxJQUFULENBQVg7QUFFQVUsV0FBTyxDQUFDL0IsWUFBUixDQUFxQixlQUFyQixFQUFxQyxJQUFyQzs7QUFFQSxRQUFLc0MsWUFBTCxFQUFvQjtBQUNoQlAsYUFBTyxDQUFDRSxTQUFSLENBQWtCVSxHQUFsQixDQUF1QkwsWUFBWSxHQUFHLFdBQXRDO0FBQ0FQLGFBQU8sQ0FBQ0UsU0FBUixDQUFrQlcsTUFBbEIsQ0FBMEJOLFlBQVksR0FBRyxVQUF6QztBQUNIOztBQUVERyxtQkFBZSxDQUFFcEIsS0FBRixDQUFmO0FBRUg7QUFFSixDQTVCRDs7QUE4QkEsSUFBTWMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFFZCxLQUFGLEVBQWE7QUFFekMsd0JBS0lBLEtBTEosQ0FDSVUsT0FESjtBQUFBLE1BQ0lBLE9BREosZ0NBQ3VCLEtBRHZCO0FBQUEsMkJBS0lWLEtBTEosQ0FFSWdCLFVBRko7QUFBQSxNQUVJQSxVQUZKLG1DQUV1QixJQUZ2QjtBQUFBLDZCQUtJaEIsS0FMSixDQUdJaUIsWUFISjtBQUFBLE1BR0lBLFlBSEoscUNBR3VCLEtBSHZCO0FBQUEsK0JBS0lqQixLQUxKLENBSUlrQixnQkFKSjtBQUFBLE1BSUlBLGdCQUpKLHVDQUl1QixLQUp2QiwwQkFGeUMsQ0FTekM7O0FBQ0EsTUFBS1IsT0FBTCxFQUFlO0FBRVhTLGdCQUFZLENBQUVuQixLQUFGLEVBQVMsS0FBVCxDQUFaO0FBQ0FvQixtQkFBZSxDQUFFcEIsS0FBRixDQUFmO0FBRUFxQixlQUFXLENBQUVyQixLQUFGLEVBQVMsS0FBVCxDQUFYOztBQUVBLFFBQUtpQixZQUFMLEVBQW9CO0FBQ2hCUCxhQUFPLENBQUNFLFNBQVIsQ0FBa0JVLEdBQWxCLENBQXVCTCxZQUFZLEdBQUcsVUFBdEM7QUFDQVAsYUFBTyxDQUFDRSxTQUFSLENBQWtCVyxNQUFsQixDQUEwQk4sWUFBWSxHQUFHLFdBQXpDO0FBQ0g7O0FBRURQLFdBQU8sQ0FBQy9CLFlBQVIsQ0FBcUIsZUFBckIsRUFBc0MsS0FBdEM7QUFFQXlDLG1CQUFlLENBQUVwQixLQUFGLENBQWY7QUFHSDtBQUVKLENBN0JEOztBQStCQSxJQUFNb0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFFcEIsS0FBRixFQUFhO0FBRWpDLHdCQU9JQSxLQVBKLENBQ0lVLE9BREo7QUFBQSxNQUNJQSxPQURKLGdDQUN1QixLQUR2QjtBQUFBLDhCQU9JVixLQVBKLENBRUl3QixnQkFGSjtBQUFBLE1BRUlBLGdCQUZKLHNDQUV1QixHQUZ2QjtBQUFBLDRCQU9JeEIsS0FQSixDQUdJeUIsWUFISjtBQUFBLE1BR0lBLFlBSEosb0NBR3VCLGVBSHZCO0FBQUEsMkJBT0l6QixLQVBKLENBSUlnQixVQUpKO0FBQUEsTUFJSUEsVUFKSixtQ0FJdUIsSUFKdkI7QUFBQSw2QkFPSWhCLEtBUEosQ0FLSTBCLGFBTEo7QUFBQSxNQUtJQSxhQUxKLHFDQUt1QixLQUx2QjtBQUFBLDRCQU9JMUIsS0FQSixDQU1JMkIsWUFOSjtBQUFBLE1BTUlBLFlBTkosb0NBTXVCLEtBTnZCOztBQVNBLE1BQUtYLFVBQVUsSUFBSU4sT0FBbkIsRUFBNkI7QUFFekIsUUFBS0EsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxRQUFsQixDQUE0QlksWUFBNUIsQ0FBTCxFQUFrRDtBQUU5QyxVQUFJRyxLQUFLLEdBQUdDLFVBQVUsQ0FDbEIsWUFBVztBQUNQbkIsZUFBTyxDQUFDRSxTQUFSLENBQWtCVyxNQUFsQixDQUEwQkUsWUFBMUI7O0FBRUEsWUFBS0MsYUFBYSxJQUFJQyxZQUF0QixFQUFxQztBQUVqQ0Esc0JBQVksQ0FBQ0csS0FBYixDQUFtQkMsU0FBbkIsR0FBK0IsRUFBL0I7QUFFSDtBQUVKLE9BVmlCLEVBV2xCUCxnQkFYa0IsQ0FBdEI7QUFjQSxhQUFPSSxLQUFQO0FBRUgsS0FsQkQsTUFrQk87QUFFSGxCLGFBQU8sQ0FBQ0UsU0FBUixDQUFrQlUsR0FBbEIsQ0FBdUJHLFlBQXZCO0FBRUEsYUFBTyxLQUFQO0FBRUg7QUFFSjtBQUVKLENBekNEOztBQTJDQSxJQUFNTyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFFaEMsS0FBRixFQUFhO0FBRTlCLDRCQU1JQSxLQU5KLENBQ0lJLFlBREo7QUFBQSxNQUNJQSxZQURKLG9DQUNtQixLQURuQjtBQUFBLDBCQU1JSixLQU5KLENBRUlpQyxVQUZKO0FBQUEsTUFFSUEsVUFGSixrQ0FFaUIsS0FGakI7QUFBQSwyQkFNSWpDLEtBTkosQ0FHSWtDLFdBSEo7QUFBQSxNQUdJQSxXQUhKLG1DQUdrQixLQUhsQjtBQUFBLDRCQU1JbEMsS0FOSixDQUlJbUMsWUFKSjtBQUFBLE1BSUlBLFlBSkosb0NBSW1CLEtBSm5CO0FBQUEsOEJBTUluQyxLQU5KLENBS0lvQyxjQUxKO0FBQUEsTUFLSUEsY0FMSixzQ0FLcUIsS0FMckI7O0FBUUEsTUFBS0gsVUFBVSxJQUFJN0IsWUFBWSxDQUFDUSxTQUFiLENBQXVCQyxRQUF2QixDQUFpQ29CLFVBQWpDLENBQW5CLEVBQW1FO0FBRS9ELFdBQU8sSUFBUDtBQUVILEdBSkQsTUFJTyxJQUFLRyxjQUFjLElBQUloQyxZQUFZLENBQUM5QixZQUFiLENBQTBCLE1BQTFCLENBQWxCLElBQXVELFFBQVE4QixZQUFZLENBQUMxQixZQUFiLENBQTBCLE1BQTFCLENBQXBFLEVBQXdHO0FBRTNHLFdBQU8sSUFBUDtBQUVILEdBSk0sTUFJQSxJQUFLd0QsV0FBVyxJQUFJOUIsWUFBWSxDQUFDaUMsYUFBYixDQUEyQnpCLFNBQTNCLENBQXFDQyxRQUFyQyxDQUErQ29CLFVBQS9DLENBQXBCLEVBQWtGO0FBRXJGLFdBQU8sSUFBUDtBQUVILEdBSk0sTUFJQSxJQUFLRSxZQUFZLElBQUkvQixZQUFZLENBQUNrQyxrQkFBYixDQUFnQzFCLFNBQWhDLENBQTBDQyxRQUExQyxDQUFvRG9CLFVBQXBELENBQXJCLEVBQXdGO0FBRTNGLFdBQU8sSUFBUDtBQUVIOztBQUVELFNBQU8sS0FBUDtBQUVILENBOUJEOztBQWlDQSxJQUFNWixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFFckIsS0FBRixFQUFTdUMsVUFBVCxFQUF5QjtBQUN6Qyw0QkFJSXZDLEtBSkosQ0FDSXdDLFlBREo7QUFBQSxNQUNJQSxZQURKLG9DQUNtQixPQURuQjtBQUFBLDZCQUlJeEMsS0FKSixDQUVJeUMsYUFGSjtBQUFBLE1BRUlBLGFBRkoscUNBRW9CLE1BRnBCO0FBQUEsK0JBSUl6QyxLQUpKLENBR0lrQixnQkFISjtBQUFBLE1BR0lBLGdCQUhKLHVDQUd1QixLQUh2QjtBQU1Bd0IsU0FBTyxDQUFDQyxHQUFSLENBQWEzQyxLQUFiOztBQUdBLE1BQUtrQixnQkFBZ0IsSUFBSUEsZ0JBQWdCLENBQUM1QyxZQUFqQixDQUE4QixZQUE5QixDQUF6QixFQUF1RTtBQUVuRSxRQUFJRyxLQUFLLEdBQUd5QyxnQkFBZ0IsQ0FBQ3hDLFlBQWpCLENBQThCLFlBQTlCLENBQVo7QUFFQSxRQUFJWixNQUFNLEdBQUt5RSxVQUFGLEdBQWlCQyxZQUFqQixHQUFnQ0MsYUFBN0M7QUFFQSxRQUFJbEUsS0FBSyxHQUFHLElBQUlxRSxNQUFKLENBQVlKLFlBQVksR0FBRyxHQUFmLEdBQXFCQyxhQUFqQyxFQUFnRCxHQUFoRCxDQUFaO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhcEUsS0FBYjtBQUVBRSxTQUFLLEdBQUdBLEtBQUssQ0FBQ0csT0FBTixDQUFlTCxLQUFmLEVBQXNCVCxNQUF0QixDQUFSO0FBRUFvRCxvQkFBZ0IsQ0FBQ3ZDLFlBQWpCLENBQStCLFlBQS9CLEVBQTZDRixLQUE3QztBQUVIO0FBQ0osQ0F6QkQ7O0FBNEJBLElBQU0wQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFFbkIsS0FBRixFQUFTNkMsV0FBVCxFQUEwQjtBQUUzQyw2QkFLSTdDLEtBTEosQ0FFSTJCLFlBRko7QUFBQSxNQUVJQSxZQUZKLHFDQUVtQixLQUZuQjtBQUFBLDhCQUtJM0IsS0FMSixDQUdJMEIsYUFISjtBQUFBLE1BR0lBLGFBSEosc0NBR29CLEtBSHBCO0FBQUEsNkJBS0kxQixLQUxKLENBSUk4QyxhQUpKO0FBQUEsTUFJSUEsYUFKSixxQ0FJb0IsRUFKcEI7O0FBT0EsTUFBS25CLFlBQVksSUFBSUQsYUFBckIsRUFBcUM7QUFFakMsUUFBSXFCLGtCQUFrQixHQUFLcEIsWUFBWSxDQUFDcUIsWUFBYixHQUE0QkYsYUFBOUIsR0FBZ0QsSUFBekU7QUFFQW5CLGdCQUFZLENBQUNHLEtBQWIsQ0FBbUJDLFNBQW5CLEdBQStCZ0Isa0JBQS9COztBQUVBLFFBQUssQ0FBRUYsV0FBUCxFQUFxQjtBQUVqQmhCLGdCQUFVLENBQ04sWUFBVztBQUNQRixvQkFBWSxDQUFDRyxLQUFiLENBQW1CQyxTQUFuQixHQUErQixDQUEvQjtBQUNILE9BSEssRUFJTixFQUpNLENBQVY7QUFPSDtBQUVKO0FBRUosQ0E1QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN01BLElBQU1rQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUU3RSxPQUFGLEVBQVc4RSxJQUFYLEVBQXFCO0FBQzdDLHVCQUdJQSxJQUhKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLCtCQUNlLEdBRGY7QUFBQSxvQkFHSUQsSUFISixDQUVJRSxLQUZKO0FBQUEsTUFFSUEsS0FGSiw0QkFFWSxJQUZaO0FBS0EsTUFBSXhCLEtBQUssR0FBRyxLQUFaO0FBRUF4RCxTQUFPLENBQUMwRCxLQUFSLENBQWNDLFNBQWQsR0FBNEIzRCxPQUFPLENBQUM0RSxZQUFSLEdBQXVCSyxRQUFRLENBQUNELEtBQUQsQ0FBL0IsR0FBeUMsSUFBckU7QUFFQXhCLE9BQUssR0FBR0MsVUFBVSxDQUFFLFlBQU07QUFFdEJ6RCxXQUFPLENBQUMwRCxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFFSCxHQUppQixFQUlmb0IsUUFKZSxDQUFsQjtBQU1ILENBaEJEOztBQWtCQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUVsRixPQUFGLEVBQVc4RSxJQUFYLEVBQXFCO0FBQzNDLHdCQUlJQSxJQUpKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLGdDQUNlLEdBRGY7QUFBQSxxQkFJSUQsSUFKSixDQUVJRSxLQUZKO0FBQUEsTUFFSUEsS0FGSiw2QkFFWSxJQUZaO0FBQUEsdUJBSUlGLElBSkosQ0FHSUssUUFISjtBQUFBLE1BR0lBLFFBSEosK0JBR2UsS0FIZjtBQU1BLE1BQUkzQixLQUFLLEdBQUcsS0FBWjtBQUNBLE1BQUk0QixVQUFVLEdBQUcsS0FBakI7QUFFQXBGLFNBQU8sQ0FBQzBELEtBQVIsQ0FBY0MsU0FBZCxHQUE0QjNELE9BQU8sQ0FBQzRFLFlBQVIsR0FBdUJLLFFBQVEsQ0FBQ0QsS0FBRCxDQUEvQixHQUF5QyxJQUFyRTtBQUVBSSxZQUFVLEdBQUczQixVQUFVLENBQUUsWUFBTTtBQUUzQnpELFdBQU8sQ0FBQzBELEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixHQUExQjtBQUVILEdBSnNCLEVBSXBCLEVBSm9CLENBQXZCO0FBTUFILE9BQUssR0FBR0MsVUFBVSxDQUFFLFlBQU07QUFFdEJ6RCxXQUFPLENBQUMwRCxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFFSCxHQUppQixFQUlmb0IsUUFKZSxDQUFsQjtBQU1ILENBeEJEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQSxJQUFNTSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUVyRixPQUFGLEVBQVdzRixLQUFYLEVBQXNCO0FBRTFDLE1BQUt0RixPQUFPLENBQUNFLFlBQVIsQ0FBc0IsZUFBdEIsQ0FBTCxFQUE4QztBQUUxQ0YsV0FBTyxDQUFDTyxZQUFSLENBQXNCLGVBQXRCLEVBQXVDK0UsS0FBdkM7QUFFSDtBQUVKLENBUkQ7O0FBVUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFFdkYsT0FBRixFQUFlO0FBRXJDLE1BQUtBLE9BQU8sQ0FBQ0UsWUFBUixDQUFzQixlQUF0QixDQUFMLEVBQThDO0FBRTFDLFdBQVEsVUFBVUYsT0FBTyxDQUFDTSxZQUFSLENBQXNCLGVBQXRCLENBQWxCO0FBRUgsR0FKRCxNQUlPO0FBRUgsV0FBTyxLQUFQO0FBRUg7QUFFSixDQVpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNa0YsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBRXhGLE9BQUYsRUFBV1ksWUFBWCxFQUE2QjtBQUU3Q1osU0FBTyxDQUFDd0MsU0FBUixDQUFrQlUsR0FBbEIsQ0FBdUJ0QyxZQUF2QjtBQUVILENBSkQ7O0FBTUEsSUFBTTZFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRXpGLE9BQUYsRUFBV1ksWUFBWCxFQUE2QjtBQUVoRFosU0FBTyxDQUFDd0MsU0FBUixDQUFrQlcsTUFBbEIsQ0FBMEJ2QyxZQUExQjtBQUVILENBSkQ7O0FBTUEsSUFBTThFLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBRTFGLE9BQUYsRUFBV1ksWUFBWCxFQUE2QixDQUduRCxDQUhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQSxJQUFNK0UsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFM0YsT0FBRixFQUFlO0FBRXZDLE1BQUtBLE9BQUwsRUFBZTtBQUVYQSxXQUFPLENBQUMwRCxLQUFSLENBQWNrQyxPQUFkLEdBQXdCLE9BQXhCO0FBRUEsUUFBSUMsTUFBTSxHQUFHN0YsT0FBTyxDQUFDNEUsWUFBckI7QUFFQTVFLFdBQU8sQ0FBQzBELEtBQVIsQ0FBY2tDLE9BQWQsR0FBd0IsRUFBeEI7QUFFQSxXQUFPQyxNQUFQO0FBRUg7O0FBRUQsU0FBTyxDQUFQO0FBRUgsQ0FoQkQ7O0FBb0JBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUVsRSxLQUFGLEVBQWE7QUFFOUIsTUFBSTRCLEtBQUssR0FBRyxLQUFaO0FBRUEsdUJBS0k1QixLQUxKLENBQ0k1QixPQURKO0FBQUEsTUFDSUEsT0FESiwrQkFDYyxLQURkO0FBQUEsNkJBS0k0QixLQUxKLENBRUk4QyxhQUZKO0FBQUEsTUFFSUEsYUFGSixxQ0FFb0IsRUFGcEI7QUFBQSxzQkFLSTlDLEtBTEosQ0FHSW1FLE1BSEo7QUFBQSxNQUdJQSxNQUhKLDhCQUdhLEdBSGI7QUFBQSwyQkFLSW5FLEtBTEosQ0FJSW9FLFdBSko7QUFBQSxNQUlJQSxXQUpKLG1DQUlrQixLQUpsQjs7QUFPQSxNQUFLaEcsT0FBTCxFQUFlO0FBRVgsUUFBSWlHLFdBQVcsR0FBR2pHLE9BQU8sQ0FBQzRFLFlBQTFCOztBQUVBLFFBQUtxQixXQUFXLEdBQUcsRUFBbkIsRUFBd0I7QUFBRTtBQUV0QmpHLGFBQU8sQ0FBQ3dDLFNBQVIsQ0FBa0JVLEdBQWxCLENBQXNCLGVBQXRCO0FBRUEsVUFBSWdELFNBQVMsR0FBR1AsbUJBQW1CLENBQUUzRixPQUFGLENBQW5DO0FBRUFBLGFBQU8sQ0FBQzBELEtBQVIsQ0FBY0MsU0FBZCxHQUE0QnVDLFNBQVMsR0FBR3hCLGFBQVosR0FBNEIsSUFBeEQ7QUFFQWxCLFdBQUssR0FBR0MsVUFBVSxDQUFFLFlBQU07QUFFdEIsWUFBS3VDLFdBQUwsRUFBbUI7QUFDZkEscUJBQVcsQ0FBQ3pGLFlBQVosQ0FBeUIsZUFBekIsRUFBMEMsTUFBMUM7QUFDSDs7QUFFRFAsZUFBTyxDQUFDd0MsU0FBUixDQUFrQlcsTUFBbEIsQ0FBeUIsZUFBekI7QUFDQW5ELGVBQU8sQ0FBQzBELEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixFQUExQjtBQUVILE9BVGlCLEVBU2ZvQyxNQVRlLENBQWxCO0FBV0gsS0FuQkQsTUFtQk87QUFFSC9GLGFBQU8sQ0FBQ3dDLFNBQVIsQ0FBa0JVLEdBQWxCLENBQXNCLGVBQXRCOztBQUVBLFVBQUlnRCxVQUFTLEdBQUdQLG1CQUFtQixDQUFFM0YsT0FBRixDQUFuQzs7QUFFQUEsYUFBTyxDQUFDMEQsS0FBUixDQUFjQyxTQUFkLEdBQTRCdUMsVUFBUyxHQUFHeEIsYUFBWixHQUE0QixJQUF4RCxDQU5HLENBUUg7O0FBQ0FqQixnQkFBVSxDQUNOLFlBQVc7QUFDUHpELGVBQU8sQ0FBQzBELEtBQVIsQ0FBY0MsU0FBZCxHQUEwQixDQUExQjtBQUNILE9BSEssRUFJTixFQUpNLENBQVY7QUFPQUgsV0FBSyxHQUFHQyxVQUFVLENBQUUsWUFBTTtBQUV0QixZQUFLdUMsV0FBTCxFQUFtQjtBQUNmQSxxQkFBVyxDQUFDekYsWUFBWixDQUF5QixlQUF6QixFQUEwQyxPQUExQztBQUNIOztBQUVEUCxlQUFPLENBQUN3QyxTQUFSLENBQWtCVyxNQUFsQixDQUF5QixlQUF6QjtBQUNBbkQsZUFBTyxDQUFDMEQsS0FBUixDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBRUgsT0FUaUIsRUFTZm9DLE1BVGUsQ0FBbEI7QUFXSDtBQUVKO0FBRUosQ0FqRUQ7O0FBbUVBLGlFQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEZBLElBQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRXpHLE1BQUYsRUFBVU0sT0FBVixFQUF1QjtBQUU3QyxNQUFLQSxPQUFPLENBQUNFLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBTCxFQUE0QztBQUV4QyxRQUFJQyxLQUFLLEdBQUssVUFBVVQsTUFBWixHQUF1QixPQUF2QixHQUFpQyxRQUE3QztBQUVBLFFBQUlVLFdBQVcsR0FBSyxVQUFVVixNQUFaLEdBQXVCLE9BQXZCLEdBQWlDLE1BQW5EO0FBRUEsUUFBSVcsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBWjtBQUVBTixXQUFPLENBQUNPLFlBQVIsQ0FBc0IsWUFBdEIsRUFBb0NGLEtBQUssQ0FBQ0csT0FBTixDQUFlTCxLQUFmLEVBQXNCQyxXQUF0QixDQUFwQztBQUVIO0FBRUosQ0FkRDs7QUFnQkEsaUVBQWUrRixpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBRUMsT0FBRixFQUEwQjtBQUFBLE1BQWZ2QixJQUFlLHVFQUFSLEVBQVE7QUFFOUMsTUFBSXdCLE9BQU8sR0FBR0QsT0FBTyxDQUFDRSxnQkFBdEI7QUFFSUQsU0FBTyxDQUFDNUMsS0FBUixDQUFjQyxTQUFkLEdBQThCMkMsT0FBTyxDQUFDMUIsWUFBUixHQUF1QixFQUF6QixHQUFnQyxJQUE1RCxDQUowQyxDQU0xQzs7QUFFQTs7QUFDQW5CLFlBQVUsQ0FDTixZQUFXO0FBQ1A0QyxXQUFPLENBQUM5RixZQUFSLENBQXNCLGVBQXRCLEVBQXVDLEtBQXZDO0FBQ0gsR0FISyxFQUlOLEVBSk0sQ0FBVixDQVQwQyxDQWlCMUM7O0FBQ0EsTUFBSWlELEtBQUssR0FBR0MsVUFBVSxDQUNsQixZQUFXO0FBQ1A2QyxXQUFPLENBQUM1QyxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFDSCxHQUhpQixFQUlsQixHQUprQixDQUF0QjtBQU9QLENBekJEOztBQTJCQSxJQUFNNkMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFFSCxPQUFGLEVBQTBCO0FBQUEsTUFBZnZCLElBQWUsdUVBQVIsRUFBUTtBQUVoRCxNQUFJd0IsT0FBTyxHQUFHRCxPQUFPLENBQUNFLGdCQUF0QjtBQUVBRCxTQUFPLENBQUM1QyxLQUFSLENBQWNDLFNBQWQsR0FBOEIyQyxPQUFPLENBQUMxQixZQUFSLEdBQXVCLEVBQXpCLEdBQWdDLElBQTVEO0FBRUF5QixTQUFPLENBQUM5RixZQUFSLENBQXNCLGVBQXRCLEVBQXVDLElBQXZDLEVBTmdELENBUWhEOztBQUNBLE1BQUlpRCxLQUFLLEdBQUdDLFVBQVUsQ0FDbEIsWUFBVztBQUNQNkMsV0FBTyxDQUFDNUMsS0FBUixDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0gsR0FIaUIsRUFJbEIsR0FKa0IsQ0FBdEI7QUFNSCxDQWZEOztBQWlCQSxJQUFNOEMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFSixPQUFGLEVBQTJCO0FBQUEsTUFBaEJ2QixJQUFnQix1RUFBVCxFQUFTOztBQUVuRCxNQUFLNEIsWUFBWSxDQUFFTCxPQUFGLENBQWpCLEVBQStCO0FBRTNCRyxxQkFBaUIsQ0FBRUgsT0FBRixFQUFXdkIsSUFBWCxDQUFqQjtBQUVBLFdBQU8sTUFBUDtBQUVILEdBTkQsTUFNTztBQUVIc0IsbUJBQWUsQ0FBRUMsT0FBRixFQUFXdkIsSUFBWCxDQUFmO0FBRUEsV0FBTyxPQUFQO0FBRUg7QUFFSixDQWhCRDs7QUFtQkEsSUFBTTRCLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUVMLE9BQUYsRUFBZTtBQUVoQyxTQUFTLENBQUVBLE9BQU8sQ0FBQ25HLFlBQVIsQ0FBc0IsZUFBdEIsQ0FBRixJQUE0QyxXQUFXbUcsT0FBTyxDQUFDL0YsWUFBUixDQUFzQixlQUF0QixDQUF6RCxJQUFxRyxLQUE1RztBQUVILENBSkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBOztJQUVNcUcsOEI7QUFFRiw0Q0FBeUI7QUFBQSxRQUFaQyxJQUFZLHVFQUFMLEVBQUs7O0FBQUE7O0FBRXJCLFNBQUtwRCxLQUFMLEdBQWEsS0FBYjtBQUVBLFNBQUtxRCxJQUFMO0FBRUg7Ozs7V0FFRCxnQkFBTztBQUVILFdBQUtDLFVBQUw7QUFFSDs7O1dBRUQsc0JBQWE7QUFDZmpILGNBQVEsQ0FBQ2tILGdCQUFULENBQ0MsT0FERCxFQUVDLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXVCLElBQXZCLENBRkQsRUFHQyxLQUhEO0FBTU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNFOzs7V0FFRSxxQkFBYUMsS0FBYixFQUFxQjtBQUV2QixVQUFJO0FBRU0sWUFBSWxGLFlBQVksR0FBR2tGLEtBQUssQ0FBQ2pGLE1BQXpCO0FBQ0EsWUFBSWtGLFVBQVUsR0FBR0QsS0FBSyxDQUFDakYsTUFBTixDQUFhZ0MsYUFBOUIsQ0FITixDQUtNOztBQUNBLFlBQUtqQyxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLDZCQUFqQyxDQUFMLEVBQXdFO0FBRXBFLGNBQUssS0FBSzJFLFdBQUwsQ0FBa0JELFVBQWxCLENBQUwsRUFBc0MsQ0FFckMsQ0FGRCxNQUVPLENBRU47QUFFSjtBQUVWLE9BaEJELENBZ0JFLE9BQU9FLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRDs7Ozs7O0FBSUYsaUVBQWVWLDhCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTs7SUFTTVcsWTtBQUVGLDBCQUF5QjtBQUFBLFFBQVpWLElBQVksdUVBQUwsRUFBSzs7QUFBQTs7QUFFckIsU0FBS3BELEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSytELFNBQUwsR0FBaUIscUJBQWpCO0FBRUEsU0FBS1YsSUFBTDtBQUVIOzs7O1dBRUQsZ0JBQU87QUFFSCxXQUFLQyxVQUFMO0FBRUg7OztXQUVELHNCQUFhO0FBQ2ZqSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNDLE9BREQsRUFFQyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUF1QixJQUF2QixDQUZELEVBR0MsS0FIRDtBQU1NO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDRTs7O1dBRUUscUJBQWFDLEtBQWIsRUFBcUI7QUFFdkIsVUFBSTtBQUVNLFlBQUlsRixZQUFZLEdBQUdrRixLQUFLLENBQUNqRixNQUF6QixDQUZOLENBSU07O0FBQ0EsWUFBS0QsWUFBWSxDQUFDUSxTQUFiLENBQXVCQyxRQUF2QixDQUFpQyx1QkFBakMsQ0FBTCxFQUFrRTtBQUU5RCxjQUFJK0UsZ0JBQWdCLEdBQUd4RixZQUFZLENBQUNkLE9BQWIsQ0FBcUIsZ0JBQXJCLENBQXZCO0FBQ0EsY0FBSXVHLGdCQUFnQixHQUFHRCxnQkFBZ0IsQ0FBQ0UsYUFBakIsQ0FBK0IseUJBQS9CLENBQXZCOztBQUVBLGNBQUtuQyxrRkFBaUIsQ0FBRXZELFlBQUYsQ0FBdEIsRUFBeUM7QUFFckNxRCw0RkFBZSxDQUFFckQsWUFBRixFQUFnQixLQUFoQixDQUFmO0FBRUFrRCw4RkFBaUIsQ0FBRXVDLGdCQUFGLEVBQW9CLEVBQXBCLENBQWpCO0FBRUFoQywyRkFBYyxDQUFFK0IsZ0JBQUYsRUFBb0IsS0FBS0QsU0FBekIsQ0FBZDtBQUVILFdBUkQsTUFRTztBQUVIbEMsNEZBQWUsQ0FBRXJELFlBQUYsRUFBZ0IsSUFBaEIsQ0FBZjtBQUVBNkMsZ0dBQW1CLENBQUU0QyxnQkFBRixFQUFvQixFQUFwQixDQUFuQjtBQUVBakMsd0ZBQVcsQ0FBRWdDLGdCQUFGLEVBQW9CLEtBQUtELFNBQXpCLENBQVg7QUFFSDtBQUVKO0FBRVYsT0E5QkQsQ0E4QkUsT0FBT0YsS0FBUCxFQUFjO0FBQ2QvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUVEOzs7Ozs7QUFJRixpRUFBZUMsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hGTUssUztBQUVGLHVCQUF5QjtBQUFBLFFBQVpmLElBQVksdUVBQUwsRUFBSzs7QUFBQTs7QUFFckIsU0FBS0MsSUFBTDtBQUVIOzs7O1dBRUQsZ0JBQU87QUFFSCxXQUFLQyxVQUFMO0FBRUg7OztXQUVELHNCQUFhO0FBQUE7O0FBQ2ZqSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNDLE9BREQsRUFFQyxVQUFFRyxLQUFGLEVBQWE7QUFBRSxhQUFJLENBQUNGLFdBQUwsQ0FBa0JFLEtBQWxCO0FBQTBCLE9BRjFDLEVBR0MsS0FIRDtBQU1BOzs7V0FJRSxxQkFBYUEsS0FBYixFQUFxQjtBQUVqQixVQUFJO0FBRUEsWUFBS0EsS0FBSyxDQUFDakYsTUFBTixDQUFhTyxTQUFiLENBQXVCQyxRQUF2QixDQUFpQyw2QkFBakMsQ0FBTCxFQUF3RTtBQUVwRSxlQUFLbUYsa0JBQUwsQ0FBeUJWLEtBQUssQ0FBQ2pGLE1BQS9CLEVBQXVDLDZCQUF2QyxFQUFzRSxDQUFDLE9BQUQsRUFBUyxNQUFULENBQXRFO0FBQ0g7QUFFVixPQVBLLENBT0osT0FBT29GLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRTs7O1dBR0QsNEJBQW9CUSxNQUFwQixFQUE0QkMsV0FBNUIsRUFBeUNDLE1BQXpDLEVBQWtEO0FBRTlDLFVBQUlDLFdBQVcsR0FBR0YsV0FBVyxHQUFHLFVBQWhDO0FBRUEsVUFBSXpILEtBQUssR0FBR3dILE1BQU0sQ0FBQzNILFlBQVAsQ0FBb0IsWUFBcEIsSUFBb0MySCxNQUFNLENBQUN2SCxZQUFQLENBQW9CLFlBQXBCLENBQXBDLEdBQXdFLEtBQXBGOztBQUVBLFVBQUt1SCxNQUFNLENBQUNyRixTQUFQLENBQWlCQyxRQUFqQixDQUEyQnVGLFdBQTNCLENBQUwsRUFBZ0Q7QUFFNUNILGNBQU0sQ0FBQ3JGLFNBQVAsQ0FBaUJXLE1BQWpCLENBQXlCNkUsV0FBekI7O0FBRUEsWUFBSzNILEtBQUwsRUFBYTtBQUNUQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ0csT0FBTixDQUFldUgsTUFBTSxDQUFDLENBQUQsQ0FBckIsRUFBMEJBLE1BQU0sQ0FBQyxDQUFELENBQWhDLENBQVI7QUFFQUYsZ0JBQU0sQ0FBQ3RILFlBQVAsQ0FBcUIsWUFBckIsRUFBbUNGLEtBQW5DO0FBQ0g7QUFFSixPQVZELE1BVU87QUFFSHdILGNBQU0sQ0FBQ3JGLFNBQVAsQ0FBaUJVLEdBQWpCLENBQXNCOEUsV0FBdEI7O0FBRUEsWUFBSzNILEtBQUwsRUFBYTtBQUVUQSxlQUFLLEdBQUdBLEtBQUssQ0FBQ0csT0FBTixDQUFldUgsTUFBTSxDQUFDLENBQUQsQ0FBckIsRUFBMEJBLE1BQU0sQ0FBQyxDQUFELENBQWhDLENBQVI7QUFFQUYsZ0JBQU0sQ0FBQ3RILFlBQVAsQ0FBcUIsWUFBckIsRUFBbUNGLEtBQW5DO0FBQ0g7QUFFSjtBQUdKOzs7Ozs7QUFLTCxpRUFBZXNILFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBOztJQUVNTSxjO0FBRUYsNEJBQXlCO0FBQUEsUUFBWnJCLElBQVksdUVBQUwsRUFBSzs7QUFBQTs7QUFFckIsU0FBS3NCLFlBQUwsR0FBMEJ0QixJQUFJLENBQUN1QixjQUFMLENBQXFCLGNBQXJCLENBQUYsR0FBMkN2QixJQUFJLENBQUNzQixZQUFoRCxHQUErRCxpQkFBdkY7QUFDQSxTQUFLRSxXQUFMLEdBQTBCeEIsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixhQUFyQixDQUFGLEdBQTBDdkIsSUFBSSxDQUFDd0IsV0FBL0MsR0FBNkQseUJBQXJGO0FBQ0EsU0FBS0MsWUFBTCxHQUEwQnpCLElBQUksQ0FBQ3VCLGNBQUwsQ0FBcUIsY0FBckIsQ0FBRixHQUEyQ3ZCLElBQUksQ0FBQ3lCLFlBQWhELEdBQStELDBCQUF2RjtBQUNBLFNBQUt4RixZQUFMLEdBQTBCK0QsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixjQUFyQixDQUFGLEdBQTJDdkIsSUFBSSxDQUFDL0QsWUFBaEQsR0FBK0QsaUJBQXZGO0FBQ0EsU0FBS2dFLElBQUw7QUFFSDs7OztXQUVELGdCQUFPO0FBRUgsV0FBS0MsVUFBTDtBQUVIOzs7V0FFRCxzQkFBYTtBQUNmakgsY0FBUSxDQUFDa0gsZ0JBQVQsQ0FDQyxPQURELEVBRUMsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBdUIsSUFBdkIsQ0FGRCxFQUdDLEtBSEQ7QUFNQTs7O1dBR0UscUJBQWFDLEtBQWIsRUFBcUI7QUFFdkIsVUFBSTtBQUVNLFlBQUlsRixZQUFZLEdBQUdrRixLQUFLLENBQUNqRixNQUF6QixDQUZOLENBSU07O0FBQ0EsWUFBSzJCLHdFQUFZLENBQUU7QUFBRTVCLHNCQUFZLEVBQUVBLFlBQWhCO0FBQThCNkIsb0JBQVUsRUFBRSxLQUFLdUUsV0FBL0M7QUFBNER0RSxxQkFBVyxFQUFFO0FBQXpFLFNBQUYsQ0FBakIsRUFBc0c7QUFFbEdvRCxlQUFLLENBQUNvQixjQUFOO0FBRUEsY0FBSWhHLE9BQU8sR0FBR3RCLDhFQUFpQixDQUFFZ0IsWUFBRixFQUFnQixLQUFLa0csWUFBckIsQ0FBL0I7QUFDQSxjQUFJbEksT0FBTyxHQUFHVSx1RUFBVSxDQUFHO0FBQUVDLGtCQUFNLEVBQUUyQixPQUFWO0FBQW1CMUIsd0JBQVksRUFBRSxLQUFLeUg7QUFBdEMsV0FBSCxDQUF4Qjs7QUFFQSxjQUFLL0YsT0FBTCxFQUFlO0FBRVh3RCx1RkFBWSxDQUNSO0FBQ0k5RixxQkFBTyxFQUFFQSxPQURiO0FBRUlnRyx5QkFBVyxFQUFFMUQ7QUFGakIsYUFEUSxDQUFaO0FBTUg7QUFFSjtBQUVWLE9BeEJELENBd0JFLE9BQU8rRSxLQUFQLEVBQWM7QUFDZC9DLGVBQU8sQ0FBQytDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBRUQ7Ozs7OztBQU1GLGlFQUFlWSxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFQTs7SUFFTU0sMkI7QUFFRix5Q0FBeUI7QUFBQSxRQUFaM0IsSUFBWSx1RUFBTCxFQUFLOztBQUFBOztBQUVyQixTQUFLcEQsS0FBTCxHQUFhLEtBQWI7QUFFQSxTQUFLcUQsSUFBTDtBQUVIOzs7O1dBRUQsZ0JBQU87QUFFSCxXQUFLQyxVQUFMO0FBRUg7OztXQUVELHNCQUFhO0FBQ2ZqSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNDLE9BREQsRUFFQyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUF1QixJQUF2QixDQUZELEVBR0MsS0FIRDtBQU1NcEgsY0FBUSxDQUFDa0gsZ0JBQVQsQ0FDTCxTQURLLEVBRUwsS0FBS3lCLGFBQUwsQ0FBbUJ2QixJQUFuQixDQUF5QixJQUF6QixDQUZLLEVBR0wsS0FISztBQUtOOzs7V0FFRSxxQkFBYUMsS0FBYixFQUFxQjtBQUV2QixVQUFJO0FBRU0sWUFBSWxGLFlBQVksR0FBR2tGLEtBQUssQ0FBQ2pGLE1BQXpCLENBRk4sQ0FJTTs7QUFDQSxZQUFLRCxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLHdDQUFqQyxDQUFMLEVBQW1GO0FBRS9FLGNBQUssS0FBSzJFLFdBQUwsRUFBTCxFQUEwQjtBQUV0QixpQkFBS3FCLEtBQUwsQ0FBWXpHLFlBQVo7QUFFQXZDLDZFQUFVLENBQUUsT0FBRixFQUFXLHlDQUFYLENBQVY7QUFFSCxXQU5ELE1BTU87QUFFSCxpQkFBS2lKLElBQUwsQ0FBVzFHLFlBQVg7QUFFQXZDLDZFQUFVLENBQUUsTUFBRixFQUFVLHlDQUFWLENBQVY7QUFFSDtBQUVKLFNBckJQLENBdUJNOzs7QUFDQSxZQUFLdUMsWUFBWSxDQUFDUSxTQUFiLENBQXVCQyxRQUF2QixDQUFnQyxzQ0FBaEMsQ0FBTCxFQUFnRjtBQUU1RSxlQUFLaUcsSUFBTCxDQUFXMUcsWUFBWDtBQUVILFNBNUJQLENBOEJNOzs7QUFDQSxZQUFLQSxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWdDLHVDQUFoQyxDQUFMLEVBQWlGO0FBRTdFLGVBQUtnRyxLQUFMLENBQVl6RyxZQUFaO0FBRUg7QUFFVixPQXJDRCxDQXFDRSxPQUFPcUYsS0FBUCxFQUFjO0FBQ2QvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUVEOzs7V0FHRSx1QkFBZUgsS0FBZixFQUF1QjtBQUVuQixVQUFJO0FBRUEsWUFBS3ZGLFlBQVksQ0FBRTtBQUFFRSxrQkFBUSxFQUFFcUYsS0FBWjtBQUFtQnBGLGFBQUcsRUFBQyxRQUF2QjtBQUFpQ0MsaUJBQU8sRUFBRSxLQUFLbUc7QUFBL0MsU0FBRixDQUFqQixFQUFxRjtBQUVqRnhGLGlDQUF1QixDQUFFO0FBQ3JCSixtQkFBTyxFQUFXNUIsVUFBVSxDQUFFO0FBQUVFLDBCQUFZLEVBQUUsS0FBS3NIO0FBQXJCLGFBQUYsQ0FEUDtBQUVyQnJGLHdCQUFZLEVBQU0sS0FBS0EsWUFGRjtBQUdyQkMsNEJBQWdCLEVBQUVwQyxVQUFVLENBQUU7QUFBRUUsMEJBQVksRUFBRTtBQUFoQixhQUFGO0FBSFAsV0FBRixDQUF2QjtBQU1IO0FBRVYsT0FaSyxDQVlKLE9BQU95RyxLQUFQLEVBQWM7QUFDZC9DLGVBQU8sQ0FBQytDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBRUU7OztXQUVELGdCQUE2QjtBQUFBLFVBQXZCckYsWUFBdUIsdUVBQVIsS0FBUTtBQUV6QixVQUFJMkcsR0FBRyxHQUFHOUksUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsZ0NBQWhDLEVBQWtFLENBQWxFLEtBQXdFLEtBQWxGO0FBRUF3RCxhQUFPLENBQUNDLEdBQVIsQ0FBYW9FLEdBQWI7QUFFQSxVQUFLLENBQUVBLEdBQVAsRUFBYTtBQUViQSxTQUFHLENBQUNwSSxZQUFKLENBQWtCLGVBQWxCLEVBQW1DLElBQW5DO0FBRUFWLGNBQVEsQ0FBQytJLElBQVQsQ0FBY3BHLFNBQWQsQ0FBd0JVLEdBQXhCLENBQTRCLHlDQUE1QjtBQUNBckQsY0FBUSxDQUFDK0ksSUFBVCxDQUFjcEcsU0FBZCxDQUF3QlcsTUFBeEIsQ0FBK0IsMkNBQS9CO0FBRUExRCx1RUFBVSxDQUFFLE1BQUYsRUFBVSx5Q0FBVixDQUFWO0FBRUg7OztXQUVELGlCQUE4QjtBQUFBLFVBQXZCdUMsWUFBdUIsdUVBQVIsS0FBUTtBQUUxQixVQUFJMkcsR0FBRyxHQUFHOUksUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsZ0NBQWhDLEVBQWtFLENBQWxFLEtBQXdFLEtBQWxGO0FBRUEsVUFBSyxDQUFFNkgsR0FBUCxFQUFhO0FBRWJBLFNBQUcsQ0FBQ3BJLFlBQUosQ0FBa0IsZUFBbEIsRUFBbUMsS0FBbkM7QUFFQVYsY0FBUSxDQUFDK0ksSUFBVCxDQUFjcEcsU0FBZCxDQUF3QlcsTUFBeEIsQ0FBK0IseUNBQS9CO0FBQ0F0RCxjQUFRLENBQUMrSSxJQUFULENBQWNwRyxTQUFkLENBQXdCVSxHQUF4QixDQUE0QiwyQ0FBNUI7QUFFQXpELHVFQUFVLENBQUUsT0FBRixFQUFXLHlDQUFYLENBQVY7QUFFSDs7O1dBRUQsdUJBQWM7QUFFVixVQUFJa0osR0FBRyxHQUFHOUksUUFBUSxDQUFDaUIsc0JBQVQsQ0FBZ0MsMkJBQWhDLEVBQTZELENBQTdELEtBQW1FLEtBQTdFO0FBRUEsVUFBSyxDQUFFNkgsR0FBUCxFQUFhO0FBRWIsYUFBUzlJLFFBQVEsQ0FBQytJLElBQVQsQ0FBY3BHLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDLHlDQUFqQyxDQUFGLElBQW1GLEtBQTFGO0FBRUg7Ozs7OztBQUlMLGlFQUFlOEYsMkJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM5SU1NLGE7QUFFRiwyQkFBeUI7QUFBQSxRQUFaakMsSUFBWSx1RUFBTCxFQUFLOztBQUFBOztBQUVyQixTQUFLa0MsU0FBTCxHQUFpQixpQkFBakI7QUFFQSxTQUFLakMsSUFBTDtBQUVIOzs7O1dBRUQsZ0JBQU87QUFFSCxXQUFLa0MsWUFBTDtBQUVBLFdBQUtqQyxVQUFMO0FBRUg7OztXQUVELHNCQUFhO0FBQUE7O0FBQ2ZqSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNDLE9BREQsRUFFQyxVQUFFRyxLQUFGLEVBQWE7QUFBRSxhQUFJLENBQUNGLFdBQUwsQ0FBa0JFLEtBQWxCO0FBQTBCLE9BRjFDLEVBR0MsS0FIRDtBQU1NOEIsWUFBTSxDQUFDakMsZ0JBQVAsQ0FDTCxRQURLLEVBRUwsWUFBTTtBQUFFLGFBQUksQ0FBQ2tDLE1BQUw7QUFBZSxPQUZsQixFQUdMLEtBSEs7QUFLTjs7O1dBRUUsa0JBQVM7QUFFWCxVQUFJO0FBRU0sYUFBS0YsWUFBTDtBQUVULE9BSkQsQ0FJRSxPQUFPMUIsS0FBUCxFQUFjO0FBQ2QvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUVEOzs7V0FFRSxxQkFBYUgsS0FBYixFQUFxQjtBQUVqQixVQUFJO0FBRUEsWUFBS0EsS0FBSyxDQUFDakYsTUFBTixDQUFhTyxTQUFiLENBQXVCQyxRQUF2QixDQUFpQyw4QkFBakMsQ0FBTCxFQUF5RTtBQUVyRSxlQUFLeUcsU0FBTCxDQUFnQmhDLEtBQUssQ0FBQ2pGLE1BQU4sQ0FBYWdDLGFBQTdCO0FBQ0g7O0FBRUQsWUFBS2lELEtBQUssQ0FBQ2pGLE1BQU4sQ0FBYU8sU0FBYixDQUF1QkMsUUFBdkIsQ0FBaUMsS0FBS3FHLFNBQUwsR0FBaUIsMkJBQWxELEtBQW1GNUIsS0FBSyxDQUFDakYsTUFBTixDQUFhTyxTQUFiLENBQXVCQyxRQUF2QixDQUFpQyxLQUFLcUcsU0FBTCxHQUFpQiwwQkFBbEQsQ0FBeEYsRUFBeUs7QUFFckssZUFBS0sscUJBQUwsQ0FBNEJqQyxLQUFLLENBQUNqRixNQUFsQztBQUNIOztBQUVELFlBQUtpRixLQUFLLENBQUNqRixNQUFOLENBQWFPLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLDJDQUFqQyxDQUFMLEVBQXNGO0FBRWxGLGVBQUsyRyxvQkFBTCxDQUEyQmxDLEtBQUssQ0FBQ2pGLE1BQU4sQ0FBYWdDLGFBQXhDO0FBQ0g7QUFFVixPQWpCSyxDQWlCSixPQUFPb0QsS0FBUCxFQUFjO0FBQ2QvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUVFOzs7V0FHRCxtQkFBV2dDLFlBQVgsRUFBMEI7QUFFdEIsVUFBSyxDQUFFQSxZQUFZLENBQUNuSixZQUFiLENBQTBCLFdBQTFCLENBQVAsRUFBZ0Q7QUFDNUMsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsVUFBSW9KLEtBQUssR0FBR0QsWUFBWSxDQUFDdkksc0JBQWIsQ0FBb0MsbUNBQXBDLENBQVo7O0FBRUEsVUFBS3dJLEtBQUssQ0FBQ3ZJLE1BQVgsRUFBb0I7QUFFaEJ1SSxhQUFLLEdBQUdBLEtBQUssQ0FBQyxDQUFELENBQWI7QUFFQSxZQUFJQyxRQUFRLEdBQUdGLFlBQVksQ0FBQ0csT0FBYixDQUFxQkMsSUFBcEM7QUFFQUgsYUFBSyxDQUFDL0ksWUFBTixDQUFtQixLQUFuQixFQUEwQmdKLFFBQTFCO0FBRUFELGFBQUssQ0FBQzlHLFNBQU4sQ0FBZ0JVLEdBQWhCLENBQW9CLHdCQUFwQjtBQUVBb0csYUFBSyxDQUFDOUcsU0FBTixDQUFnQlcsTUFBaEIsQ0FBdUIsbUNBQXZCO0FBRUg7QUFFSjs7O1dBRUQsOEJBQXNCa0csWUFBdEIsRUFBcUM7QUFFakMsVUFBSUMsS0FBSyxHQUFHRCxZQUFZLENBQUN2SSxzQkFBYixDQUFvQyxtQ0FBcEMsQ0FBWjs7QUFFQSxVQUFLd0ksS0FBSyxDQUFDdkksTUFBWCxFQUFvQjtBQUVoQnVJLGFBQUssR0FBR0EsS0FBSyxDQUFDLENBQUQsQ0FBYjtBQUVBLFlBQUlJLE1BQU0sR0FBRyxJQUFJQyxLQUFLLENBQUNDLE1BQVYsQ0FBa0JOLEtBQWxCLENBQWI7QUFFQUksY0FBTSxDQUFDRyxLQUFQO0FBRUg7QUFDSjs7O1dBRUQsK0JBQXVCN0osT0FBdkIsRUFBaUM7QUFFN0IsVUFBSXFKLFlBQVksR0FBR3JKLE9BQU8sQ0FBQ2lFLGFBQTNCO0FBRUEsVUFBSXFGLEtBQUssR0FBR0QsWUFBWSxDQUFDdkksc0JBQWIsQ0FBcUMsS0FBS2dJLFNBQUwsR0FBaUIsb0JBQXRELENBQVo7O0FBRUEsVUFBSyxDQUFFUSxLQUFLLENBQUN2SSxNQUFiLEVBQXNCO0FBRWxCdUQsZUFBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7QUFFQTtBQUVIOztBQUVELFVBQUltRixNQUFNLEdBQUcsSUFBSUMsS0FBSyxDQUFDQyxNQUFWLENBQWtCTixLQUFLLENBQUMsQ0FBRCxDQUF2QixDQUFiOztBQUVBLFVBQUt0SixPQUFPLENBQUN3QyxTQUFSLENBQWtCQyxRQUFsQixDQUE0QixLQUFLcUcsU0FBTCxHQUFpQiwyQkFBN0MsQ0FBTCxFQUFpRjtBQUU3RTlJLGVBQU8sQ0FBQ3dDLFNBQVIsQ0FBa0JXLE1BQWxCLENBQTBCLEtBQUsyRixTQUFMLEdBQWlCLDJCQUEzQztBQUVBOUksZUFBTyxDQUFDd0MsU0FBUixDQUFrQlUsR0FBbEIsQ0FBdUIsS0FBSzRGLFNBQUwsR0FBaUIsMEJBQXhDO0FBRUFZLGNBQU0sQ0FBQ0csS0FBUDtBQUVILE9BUkQsTUFRTztBQUVIN0osZUFBTyxDQUFDd0MsU0FBUixDQUFrQlUsR0FBbEIsQ0FBdUIsS0FBSzRGLFNBQUwsR0FBaUIsMkJBQXhDO0FBRUE5SSxlQUFPLENBQUN3QyxTQUFSLENBQWtCVyxNQUFsQixDQUEwQixLQUFLMkYsU0FBTCxHQUFpQiwwQkFBM0M7QUFFQVksY0FBTSxDQUFDRCxJQUFQO0FBRUg7QUFFSjs7O1dBR0Qsd0JBQWU7QUFBQTs7QUFFWCxVQUFJSyxNQUFNLEdBQUdqSyxRQUFRLENBQUNpQixzQkFBVCxDQUFnQyxtQ0FBaEMsQ0FBYjs7QUFFQSxVQUFLZ0osTUFBTSxDQUFDL0ksTUFBUCxHQUFnQixDQUFyQixFQUF5QjtBQUVyQmdKLGFBQUssQ0FBQ0MsSUFBTixDQUFZRixNQUFaLEVBQXFCL0osT0FBckIsQ0FBOEIsVUFBRXVKLEtBQUYsRUFBYTtBQUV2QyxjQUFJRCxZQUFZLEdBQUdDLEtBQUssQ0FBQ3JGLGFBQXpCOztBQUVBLGNBQUssTUFBSSxDQUFDZ0csV0FBTCxDQUFrQlosWUFBbEIsQ0FBTCxFQUF3QztBQUVwQ0MsaUJBQUssQ0FBQzVGLEtBQU4sQ0FBWXdHLEtBQVosR0FBb0IsTUFBcEI7QUFDQVosaUJBQUssQ0FBQzVGLEtBQU4sQ0FBWW1DLE1BQVosR0FBdUIsQ0FBRXdELFlBQVksQ0FBQ2MsV0FBYixHQUEyQixHQUE3QixJQUFxQyxNQUF2QyxHQUFrRCxJQUF2RTtBQUVILFdBTEQsTUFLTztBQUVIYixpQkFBSyxDQUFDNUYsS0FBTixDQUFZbUMsTUFBWixHQUFxQixNQUFyQjtBQUNBeUQsaUJBQUssQ0FBQzVGLEtBQU4sQ0FBWXdHLEtBQVosR0FBc0JiLFlBQVksQ0FBQ2UsWUFBYixHQUE0QixNQUE5QixHQUF5QyxJQUE3RDtBQUVIO0FBRUosU0FoQkQ7QUFrQkg7QUFFSjs7O1dBRUQscUJBQWFmLFlBQWIsRUFBNEI7QUFFeEIsYUFBV0EsWUFBWSxDQUFDYyxXQUFiLEdBQTJCLE1BQTdCLEdBQXdDZCxZQUFZLENBQUNlLFlBQTlEO0FBRUg7OztXQUdELHVCQUFlbEQsS0FBZixFQUF1QjtBQUVuQixVQUFJLENBSVQsQ0FKSyxDQUlKLE9BQU9HLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRTs7Ozs7O0FBVUwsaUVBQWV3QixhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TUE7QUFDQTs7SUFFTXdCLE87QUFFRixxQkFBeUI7QUFBQSxRQUFaekQsSUFBWSx1RUFBTCxFQUFLOztBQUFBOztBQUVyQixTQUFLcEQsS0FBTCxHQUFhLEtBQWI7QUFFQSxTQUFLcUQsSUFBTDtBQUVIOzs7O1dBRUQsZ0JBQU87QUFFSCxXQUFLQyxVQUFMO0FBRUg7OztXQUVELHNCQUFhO0FBQ2ZqSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNDLE9BREQsRUFFQyxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUF1QixJQUF2QixDQUZELEVBR0MsS0FIRDtBQU1NcEgsY0FBUSxDQUFDa0gsZ0JBQVQsQ0FDTCxTQURLLEVBRUwsS0FBS3lCLGFBQUwsQ0FBbUJ2QixJQUFuQixDQUF5QixJQUF6QixDQUZLLEVBR0wsS0FISztBQUtOOzs7V0FFRSxxQkFBYUMsS0FBYixFQUFxQjtBQUV2QixVQUFJO0FBRU0sWUFBSWxGLFlBQVksR0FBR2tGLEtBQUssQ0FBQ2pGLE1BQXpCLENBRk4sQ0FJTTs7QUFDQSxZQUFLRCxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLGtCQUFqQyxDQUFMLEVBQTZEO0FBRXpELGNBQUkwRSxVQUFVLEdBQUdELEtBQUssQ0FBQ2pGLE1BQU4sQ0FBYWdDLGFBQTlCOztBQUVBLGNBQUssS0FBS21ELFdBQUwsQ0FBa0JELFVBQWxCLENBQUwsRUFBc0M7QUFFbEMsaUJBQUtzQixLQUFMLENBQVl0QixVQUFaO0FBRUFoQixpRkFBaUIsQ0FBRSxPQUFGLEVBQVduRSxZQUFYLENBQWpCO0FBRUgsV0FORCxNQU1PO0FBRUgsaUJBQUswRyxJQUFMLENBQVd2QixVQUFYO0FBRUFoQixpRkFBaUIsQ0FBRSxNQUFGLEVBQVVuRSxZQUFWLENBQWpCO0FBRUg7QUFFSjs7QUFFRCxZQUFLQSxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLHlCQUFqQyxDQUFMLEVBQW9FO0FBRWhFLGNBQUkwRSxXQUFVLEdBQUduRixZQUFZLENBQUNpQyxhQUFiLENBQTJCQSxhQUEzQixDQUF5Qy9DLE9BQXpDLENBQWlELElBQWpELENBQWpCOztBQUVBLGNBQUssS0FBS2tHLFdBQUwsQ0FBa0JELFdBQWxCLENBQUwsRUFBc0M7QUFFbEMsaUJBQUtzQixLQUFMLENBQVl0QixXQUFaO0FBRUFoQixpRkFBaUIsQ0FBRSxPQUFGLEVBQVduRSxZQUFYLENBQWpCO0FBRUg7QUFFSjtBQUVWLE9BdkNELENBdUNFLE9BQU9xRixLQUFQLEVBQWM7QUFDZC9DLGVBQU8sQ0FBQytDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBRUQ7OztXQUdFLHVCQUFlSCxLQUFmLEVBQXVCO0FBRW5CLFVBQUk7QUFFQSxZQUFLdkYsWUFBWSxDQUFFO0FBQUVFLGtCQUFRLEVBQUVxRixLQUFaO0FBQW1CcEYsYUFBRyxFQUFDLFFBQXZCO0FBQWlDQyxpQkFBTyxFQUFFLEtBQUttRztBQUEvQyxTQUFGLENBQWpCLEVBQXFGO0FBRWpGeEYsaUNBQXVCLENBQUU7QUFDckJKLG1CQUFPLEVBQVc1QixVQUFVLENBQUU7QUFBRUUsMEJBQVksRUFBRSxLQUFLc0g7QUFBckIsYUFBRixDQURQO0FBRXJCckYsd0JBQVksRUFBTSxLQUFLQSxZQUZGO0FBR3JCQyw0QkFBZ0IsRUFBRXBDLFVBQVUsQ0FBRTtBQUFFRSwwQkFBWSxFQUFFO0FBQWhCLGFBQUY7QUFIUCxXQUFGLENBQXZCO0FBTUg7QUFFVixPQVpLLENBWUosT0FBT3lHLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRTs7O1dBRUQsY0FBTUYsVUFBTixFQUFtQjtBQUVmLFdBQUttRCxhQUFMLENBQW9CbkQsVUFBcEI7QUFFQSxVQUFJYixPQUFPLEdBQUdhLFVBQVUsQ0FBQ1osZ0JBQXpCO0FBRUFELGFBQU8sQ0FBQzVDLEtBQVIsQ0FBY0MsU0FBZCxHQUE4QjJDLE9BQU8sQ0FBQzFCLFlBQVIsR0FBdUIsRUFBekIsR0FBZ0MsSUFBNUQ7QUFFQTBCLGFBQU8sQ0FBQzlELFNBQVIsQ0FBa0JVLEdBQWxCLENBQXVCLHlCQUF2QjtBQUVBaUUsZ0JBQVUsQ0FBQzVHLFlBQVgsQ0FBeUIsZUFBekIsRUFBMEMsSUFBMUMsRUFWZSxDQVlmOztBQUNBLFdBQUtpRCxLQUFMLEdBQWFDLFVBQVUsQ0FDbkIsWUFBVztBQUNQNkMsZUFBTyxDQUFDNUMsS0FBUixDQUFjQyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0EyQyxlQUFPLENBQUM5RCxTQUFSLENBQWtCVyxNQUFsQixDQUEwQix5QkFBMUI7QUFDSCxPQUprQixFQUtuQixHQUxtQixDQUF2QjtBQVFIOzs7V0FFRCxlQUFPZ0UsVUFBUCxFQUFvQjtBQUVoQixVQUFJYixPQUFPLEdBQUdhLFVBQVUsQ0FBQ1osZ0JBQXpCO0FBRUFELGFBQU8sQ0FBQzVDLEtBQVIsQ0FBY0MsU0FBZCxHQUE4QjJDLE9BQU8sQ0FBQzFCLFlBQVIsR0FBdUIsRUFBekIsR0FBZ0MsSUFBNUQ7QUFFQTs7QUFDQW5CLGdCQUFVLENBQ04sWUFBVztBQUNQO0FBQ0E2QyxlQUFPLENBQUM5RCxTQUFSLENBQWtCVSxHQUFsQixDQUF1Qix1QkFBdkI7QUFFQWlFLGtCQUFVLENBQUM1RyxZQUFYLENBQXlCLGVBQXpCLEVBQTBDLEtBQTFDO0FBQ0gsT0FOSyxFQU9OLEVBUE0sQ0FBVixDQVBnQixDQWtCaEI7O0FBQ0EsV0FBS2lELEtBQUwsR0FBYUMsVUFBVSxDQUNuQixZQUFXO0FBQ1A2QyxlQUFPLENBQUM1QyxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFDQTJDLGVBQU8sQ0FBQzlELFNBQVIsQ0FBa0JXLE1BQWxCLENBQTBCLHVCQUExQjtBQUNILE9BSmtCLEVBS25CLEdBTG1CLENBQXZCO0FBUUg7OztXQUVELHVCQUFlZ0UsVUFBZixFQUE0QjtBQUFBOztBQUV4QixVQUFJL0YsUUFBUSxHQUFHRCwrRUFBa0IsQ0FBRWdHLFVBQUYsQ0FBakM7QUFFQS9GLGNBQVEsQ0FBQ3JCLE9BQVQsQ0FBa0IsVUFBQUMsT0FBTyxFQUFJO0FBRXpCLFlBQUssS0FBSSxDQUFDb0gsV0FBTCxDQUFrQnBILE9BQWxCLENBQUwsRUFBbUM7QUFDL0IsZUFBSSxDQUFDeUksS0FBTCxDQUFZekksT0FBWjtBQUNIO0FBQ0osT0FMRDtBQU9IOzs7V0FFRCxxQkFBYW1ILFVBQWIsRUFBMEI7QUFFdEIsYUFBU0EsVUFBVSxDQUFDakgsWUFBWCxDQUF5QixlQUF6QixLQUE2QyxVQUFVaUgsVUFBVSxDQUFDN0csWUFBWCxDQUF5QixlQUF6QixDQUF6RCxJQUF3RyxLQUEvRztBQUVIOzs7Ozs7QUFLTCxpRUFBZStKLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBOztJQVNNRSxPO0FBQ0oscUJBQXlCO0FBQUEsUUFBWjNELElBQVksdUVBQUwsRUFBSzs7QUFBQTs7QUFFdkIsU0FBS3BELEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBSytELFNBQUwsR0FBaUIsZ0JBQWpCO0FBQ0YsU0FBS2lELFdBQUwsR0FBbUIsUUFBbkI7QUFDRSxTQUFLQyxVQUFMLEdBQWtCLGFBQWxCO0FBRUEsU0FBSzVELElBQUw7QUFFRDs7OztXQUVELGdCQUFPO0FBRUwsV0FBSzZELE1BQUw7O0FBRUYsVUFBSyxDQUFDLEtBQUtDLFdBQUwsRUFBTixFQUEyQjtBQUMxQixhQUFLN0QsVUFBTDtBQUNBLE9BRkQsTUFFTztBQUNOLGFBQUs4RCxXQUFMO0FBQ0E7QUFFQTs7O1dBRUQsa0JBQVM7QUFDUCxVQUFJQyxPQUFPLEdBQUdoTCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQWQ7O0FBRUEsVUFBSytLLE9BQU8sQ0FBQzlKLE1BQVIsR0FBaUIsQ0FBdEIsRUFBMEI7QUFDeEI4SixlQUFPLENBQUM5SyxPQUFSLENBQWdCLFVBQUMrSyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDL0JELGNBQUksQ0FBQ3ZLLFlBQUwsQ0FBa0IsVUFBbEIscUJBQTBDd0ssS0FBMUM7QUFDRCxTQUZEO0FBR0Q7QUFDRjs7O1dBRUQsc0JBQWE7QUFDYmxMLGNBQVEsQ0FBQ2tILGdCQUFULENBQ0MsT0FERCxFQUVDLEtBQUtpRSxlQUFMLENBQXFCL0QsSUFBckIsQ0FBMkIsSUFBM0IsQ0FGRCxFQUdDLEtBSEQ7QUFNRXBILGNBQVEsQ0FBQ2tILGdCQUFULENBQ0UsU0FERixFQUVFLEtBQUtrRSxZQUFMLENBQWtCaEUsSUFBbEIsQ0FBd0IsSUFBeEIsQ0FGRixFQUdFLEtBSEY7QUFLRjs7O1dBRUEseUJBQWtCQyxLQUFsQixFQUEwQjtBQUN4QixVQUFJO0FBQ0osWUFBSWxGLFlBQVksR0FBR2tGLEtBQUssQ0FBQ2pGLE1BQXpCOztBQUVBLFlBQUtELFlBQVksQ0FBQ1EsU0FBYixDQUF1QkMsUUFBdkIsQ0FBaUMsdUJBQWpDLENBQUwsRUFBa0U7QUFFakUsY0FBSStFLGdCQUFnQixHQUFHeEYsWUFBWSxDQUFDZCxPQUFiLENBQXFCLHdCQUFyQixDQUF2QjtBQUNBLGNBQUl1RyxnQkFBZ0IsR0FBR0QsZ0JBQWdCLENBQUNFLGFBQWpCLENBQStCLG9CQUEvQixDQUF2Qjs7QUFFQSxjQUFLbkMsa0ZBQWlCLENBQUV2RCxZQUFGLENBQXRCLEVBQXlDO0FBQ2xDcUQsNEZBQWUsQ0FBRXJELFlBQUYsRUFBZ0IsS0FBaEIsQ0FBZjtBQUNBa0QsOEZBQWlCLENBQUV1QyxnQkFBRixFQUFvQixFQUFwQixDQUFqQjtBQUNBaEMsMkZBQWMsQ0FBRStCLGdCQUFGLEVBQW9CLEtBQUtELFNBQXpCLENBQWQ7QUFDQS9CLHdGQUFXLENBQUVpQyxnQkFBRixFQUFvQixLQUFLK0MsV0FBekIsQ0FBWDtBQUNBL0UsMkZBQWMsQ0FBRWdDLGdCQUFGLEVBQW9CLGFBQXBCLENBQWQ7QUFFTixXQVBELE1BT087QUFDTnBDLDRGQUFlLENBQUVyRCxZQUFGLEVBQWdCLElBQWhCLENBQWY7QUFDQTZDLGdHQUFtQixDQUFFNEMsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBbkI7QUFDQWpDLHdGQUFXLENBQUVnQyxnQkFBRixFQUFvQixLQUFLRCxTQUF6QixDQUFYO0FBQ0E5QiwyRkFBYyxDQUFFZ0MsZ0JBQUYsRUFBb0IsS0FBSytDLFdBQXpCLENBQWQ7QUFDTWhGLHdGQUFXLENBQUVpQyxnQkFBRixFQUFvQixhQUFwQixDQUFYO0FBQ0FoQywyRkFBYyxDQUFFZ0MsZ0JBQUYsRUFBb0IsY0FBcEIsQ0FBZDtBQUNOLFdBbkJnRSxDQXFCNUQ7OztBQUNBLGNBQUlvRCxPQUFPLEdBQUdoTCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQWQ7QUFDQSxjQUFJb0wsYUFBYSxHQUFHbEosWUFBWSxDQUFDMUIsWUFBYixDQUEwQixlQUExQixDQUFwQjtBQUNBLGNBQUk2SyxTQUFTLEdBQUduSixZQUFZLENBQUNkLE9BQWIsQ0FBcUIsV0FBckIsQ0FBaEI7O0FBRUEsY0FBSzJKLE9BQU8sQ0FBQzlKLE1BQVIsR0FBaUIsQ0FBdEIsRUFBMEI7QUFDeEIsZ0JBQUlxSyxXQUFXLEdBQUdELFNBQVMsQ0FBQ3JMLGdCQUFWLENBQTJCLDJCQUEzQixDQUFsQjtBQUNBLGdCQUFJdUwsWUFBWSxHQUFHRixTQUFTLENBQUNyTCxnQkFBVixDQUEyQixvQkFBM0IsQ0FBbkI7QUFFQXNMLHVCQUFXLENBQUNyTCxPQUFaLENBQW9CLFVBQVN1TCxHQUFULEVBQWM7QUFDaEMsa0JBQUtBLEdBQUcsQ0FBQ2hMLFlBQUosQ0FBaUIsZUFBakIsTUFBc0M0SyxhQUEzQyxFQUEyRDtBQUN6REksbUJBQUcsQ0FBQy9LLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsSUFBbEM7QUFDRCxlQUZELE1BRU87QUFDTCtLLG1CQUFHLENBQUMvSyxZQUFKLENBQWlCLGVBQWpCLEVBQWtDLEtBQWxDO0FBQ0Q7QUFDRixhQU5EO0FBUUE4Syx3QkFBWSxDQUFDdEwsT0FBYixDQUFxQixVQUFTd0wsS0FBVCxFQUFnQjtBQUNuQyxrQkFBS0EsS0FBSyxDQUFDakwsWUFBTixDQUFtQixJQUFuQixNQUE2QjRLLGFBQWxDLEVBQWtEO0FBQ2hEMUYsNEZBQVcsQ0FBRStGLEtBQUYsRUFBUyxjQUFULENBQVg7QUFDQS9GLDRGQUFXLENBQUUrRixLQUFGLEVBQVMsY0FBVCxDQUFYO0FBQ0QsZUFIRCxNQUdPO0FBQ0w5RiwrRkFBYyxDQUFFOEYsS0FBRixFQUFTLGNBQVQsQ0FBZDtBQUNBOUYsK0ZBQWMsQ0FBRThGLEtBQUYsRUFBUyxjQUFULENBQWQ7QUFDRDtBQUNGLGFBUkQ7QUFTRDtBQUNOOztBQUVELFlBQUt2SixZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLDBCQUFqQyxDQUFMLEVBQXFFO0FBQ3BFLGVBQUttSSxXQUFMO0FBQ0E7QUFHQSxPQTFERCxDQTBERSxPQUFPdkQsS0FBUCxFQUFjO0FBQ2hCL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFQSxLLENBRUQ7Ozs7V0FDQSx3QkFBZTtBQUNiLFVBQUl3RCxPQUFPLEdBQUdoTCxRQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLENBQWQ7O0FBRUEsVUFBSytLLE9BQU8sQ0FBQzlKLE1BQVIsR0FBaUIsQ0FBdEIsRUFBMEI7QUFDeEI4SixlQUFPLENBQUM5SyxPQUFSLENBQWdCLFVBQUN5TCxNQUFELEVBQVk7QUFDMUIsY0FBSUMsVUFBVSxHQUFHRCxNQUFNLENBQUMxTCxnQkFBUCxDQUF3Qiw4QkFBeEIsQ0FBakI7QUFFQSxjQUFJNEwsSUFBSSxHQUFHO0FBQ1RDLGVBQUcsRUFBRSxFQURJO0FBRVRDLGdCQUFJLEVBQUUsRUFGRztBQUdUQyxjQUFFLEVBQUUsRUFISztBQUlUQyxnQkFBSSxFQUFFO0FBSkcsV0FBWDtBQU9BLGNBQUlDLFNBQVMsR0FBRztBQUNkLGdCQUFJLENBQUMsQ0FEUztBQUVkLGdCQUFJLENBQUMsQ0FGUztBQUdkLGdCQUFJLENBSFU7QUFJZCxnQkFBSTtBQUpVLFdBQWhCLENBVjBCLENBaUIxQjs7QUFDQSxlQUFLLElBQUk5TCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0wsVUFBVSxDQUFDMUssTUFBL0IsRUFBdUMsRUFBRWQsQ0FBekMsRUFBNEM7QUFDMUMrTCx3QkFBWSxDQUFDL0wsQ0FBRCxDQUFaO0FBQ0Q7O0FBRUQsbUJBQVMrTCxZQUFULENBQXNCakIsS0FBdEIsRUFBNkI7QUFDM0JVLHNCQUFVLENBQUNWLEtBQUQsQ0FBVixDQUFrQmhFLGdCQUFsQixDQUFtQyxTQUFuQyxFQUE4Q2tGLG9CQUE5QztBQUNBUixzQkFBVSxDQUFDVixLQUFELENBQVYsQ0FBa0JoRSxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNENtRixrQkFBNUMsRUFGMkIsQ0FJM0I7O0FBQ0FULHNCQUFVLENBQUNWLEtBQUQsQ0FBVixDQUFrQkEsS0FBbEIsR0FBMEJBLEtBQTFCO0FBQ0Q7O0FBRUQsbUJBQVNrQixvQkFBVCxDQUE4QmpLLFlBQTlCLEVBQTRDO0FBQzFDLGdCQUFJRixHQUFHLEdBQUdFLFlBQVksQ0FBQ21LLE9BQXZCOztBQUVBLG9CQUFRckssR0FBUjtBQUNFLG1CQUFLNEosSUFBSSxDQUFDRyxFQUFWO0FBQ0EsbUJBQUtILElBQUksQ0FBQ0ksSUFBVjtBQUNFOUosNEJBQVksQ0FBQ3NHLGNBQWI7QUFDQTtBQUpKO0FBTUQ7O0FBRUQsbUJBQVM0RCxrQkFBVCxDQUE0QmhGLEtBQTVCLEVBQW1DO0FBQ2pDLGdCQUFJcEYsR0FBRyxHQUFHb0YsS0FBSyxDQUFDaUYsT0FBaEI7O0FBRUEsb0JBQVFySyxHQUFSO0FBQ0UsbUJBQUs0SixJQUFJLENBQUNHLEVBQVY7QUFDQSxtQkFBS0gsSUFBSSxDQUFDSSxJQUFWO0FBQ0VNLHFDQUFxQixDQUFDbEYsS0FBRCxDQUFyQjtBQUNBO0FBSko7QUFNRDs7QUFFRCxtQkFBU2tGLHFCQUFULENBQStCbEYsS0FBL0IsRUFBc0M7QUFDcEMsZ0JBQUltRixPQUFPLEdBQUduRixLQUFLLENBQUNpRixPQUFwQjs7QUFFQSxnQkFBSUosU0FBUyxDQUFDTSxPQUFELENBQWIsRUFBd0I7QUFDdEIsa0JBQUlwSyxNQUFNLEdBQUdpRixLQUFLLENBQUNqRixNQUFuQjs7QUFDQSxrQkFBSUEsTUFBTSxDQUFDOEksS0FBUCxLQUFpQnVCLFNBQXJCLEVBQWdDO0FBQzlCLG9CQUFJYixVQUFVLENBQUN4SixNQUFNLENBQUM4SSxLQUFQLEdBQWVnQixTQUFTLENBQUNNLE9BQUQsQ0FBekIsQ0FBZCxFQUFtRDtBQUNqRFosNEJBQVUsQ0FBQ3hKLE1BQU0sQ0FBQzhJLEtBQVAsR0FBZWdCLFNBQVMsQ0FBQ00sT0FBRCxDQUF6QixDQUFWLENBQThDRSxLQUE5QztBQUNELGlCQUZELE1BRU8sSUFBSUYsT0FBTyxLQUFLWCxJQUFJLENBQUNjLElBQWpCLElBQXlCSCxPQUFPLEtBQUtYLElBQUksQ0FBQ0csRUFBOUMsRUFBa0Q7QUFDdkRKLDRCQUFVLENBQUNBLFVBQVUsQ0FBQzFLLE1BQVgsR0FBb0IsQ0FBckIsQ0FBVixDQUFrQ3dMLEtBQWxDO0FBQ0QsaUJBRk0sTUFFQSxJQUFJRixPQUFPLEtBQUtYLElBQUksQ0FBQ2UsS0FBakIsSUFBMEJKLE9BQU8sSUFBSVgsSUFBSSxDQUFDSSxJQUE5QyxFQUFvRDtBQUN6REwsNEJBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY2MsS0FBZDtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsU0FwRUQ7QUFzRUQ7QUFDRjs7O1dBRUQsdUJBQWM7QUFDWixVQUFJMUIsT0FBTyxHQUFHaEwsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixDQUFkOztBQUVBLFVBQUsrSyxPQUFPLENBQUM5SixNQUFSLEdBQWlCLENBQXRCLEVBQTBCO0FBQ3hCOEosZUFBTyxDQUFDOUssT0FBUixDQUFnQixVQUFDK0ssSUFBRCxFQUFVO0FBRXhCLGNBQUk0QixVQUFVLEdBQUc1QixJQUFJLENBQUNoTCxnQkFBTCxDQUFzQiwyQkFBdEIsQ0FBakI7QUFDQSxjQUFJNk0sU0FBUyxHQUFHN0IsSUFBSSxDQUFDaEwsZ0JBQUwsQ0FBc0Isb0JBQXRCLENBQWhCLENBSHdCLENBS3hCOztBQUNBLGNBQUkyTCxVQUFVLEdBQUdYLElBQUksQ0FBQ2hMLGdCQUFMLENBQXNCLDhCQUF0QixDQUFqQjs7QUFFQSxjQUFLNE0sVUFBVSxDQUFDM0wsTUFBWCxHQUFvQixDQUF6QixFQUE2QjtBQUFBLGdCQXNCbEJpTCxZQXRCa0IsR0FzQjNCLFNBQVNBLFlBQVQsQ0FBc0JqQixLQUF0QixFQUE2QjtBQUMzQjJCLHdCQUFVLENBQUMzQixLQUFELENBQVYsQ0FBa0JoRSxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEM2RixrQkFBNUM7QUFDQUYsd0JBQVUsQ0FBQzNCLEtBQUQsQ0FBVixDQUFrQmhFLGdCQUFsQixDQUFtQyxTQUFuQyxFQUE4Q2tGLG9CQUE5QztBQUNBUyx3QkFBVSxDQUFDM0IsS0FBRCxDQUFWLENBQWtCaEUsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDbUYsa0JBQTVDLEVBSDJCLENBSzNCOztBQUNBUSx3QkFBVSxDQUFDM0IsS0FBRCxDQUFWLENBQWtCQSxLQUFsQixHQUEwQkEsS0FBMUI7QUFDRCxhQTdCMEIsRUErQjNCOzs7QUEvQjJCLGdCQWdDbEI2QixrQkFoQ2tCLEdBZ0MzQixTQUFTQSxrQkFBVCxDQUE0QjVLLFlBQTVCLEVBQTBDO0FBQ3hDLGtCQUFJc0osR0FBRyxHQUFHdEosWUFBWSxDQUFDQyxNQUF2QjtBQUNBNEsseUJBQVcsQ0FBQ3ZCLEdBQUQsRUFBTSxLQUFOLENBQVg7QUFDRCxhQW5DMEIsRUFxQzNCOzs7QUFyQzJCLGdCQXNDbEJXLG9CQXRDa0IsR0FzQzNCLFNBQVNBLG9CQUFULENBQThCakssWUFBOUIsRUFBNEM7QUFDMUMsa0JBQUlGLEdBQUcsR0FBR0UsWUFBWSxDQUFDbUssT0FBdkI7O0FBRUEsc0JBQVFySyxHQUFSO0FBQ0UscUJBQUs0SixJQUFJLENBQUNDLEdBQVY7QUFDRTNKLDhCQUFZLENBQUNzRyxjQUFiO0FBQ0F1RSw2QkFBVyxDQUFDSCxVQUFVLENBQUNBLFVBQVUsQ0FBQzNMLE1BQVgsR0FBb0IsQ0FBckIsQ0FBWCxDQUFYO0FBQ0E7O0FBQ0YscUJBQUsySyxJQUFJLENBQUNFLElBQVY7QUFDRTVKLDhCQUFZLENBQUNzRyxjQUFiO0FBQ0F1RSw2QkFBVyxDQUFDSCxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQVg7QUFDQTtBQVJKO0FBVUQsYUFuRDBCLEVBcUQzQjs7O0FBckQyQixnQkFzRGxCUixrQkF0RGtCLEdBc0QzQixTQUFTQSxrQkFBVCxDQUE0QmxLLFlBQTVCLEVBQTBDO0FBQ3hDLGtCQUFJRixHQUFHLEdBQUdFLFlBQVksQ0FBQ21LLE9BQXZCOztBQUVBLHNCQUFRckssR0FBUjtBQUNFLHFCQUFLNEosSUFBSSxDQUFDYyxJQUFWO0FBQ0EscUJBQUtkLElBQUksQ0FBQ2UsS0FBVjtBQUNFTCx1Q0FBcUIsQ0FBQ3BLLFlBQUQsQ0FBckI7QUFDQTtBQUpKO0FBTUQsYUEvRDBCOztBQUFBLGdCQWlFbEI2SyxXQWpFa0IsR0FpRTNCLFNBQVNBLFdBQVQsQ0FBcUJ2QixHQUFyQixFQUEwQndCLFFBQTFCLEVBQW9DO0FBQ2xDQSxzQkFBUSxHQUFHQSxRQUFRLElBQUksSUFBdkI7QUFFQUMsNEJBQWM7QUFDZEMsK0JBQWlCO0FBRWpCMUIsaUJBQUcsQ0FBQy9LLFlBQUosQ0FBaUIsZUFBakIsRUFBa0MsTUFBbEM7QUFFQSxrQkFBSTBNLE9BQU8sR0FBRzNCLEdBQUcsQ0FBQ2hMLFlBQUosQ0FBaUIsZUFBakIsQ0FBZDtBQUNBLGtCQUFJaUwsS0FBSyxHQUFHMUwsUUFBUSxDQUFDcU4sY0FBVCxDQUF3QkQsT0FBeEIsQ0FBWjtBQUNBMUIsbUJBQUssQ0FBQy9JLFNBQU4sQ0FBZ0JXLE1BQWhCLENBQXVCLFFBQXZCO0FBRUEsa0JBQUlnSyxRQUFRLEdBQUc1QixLQUFLLENBQUNySyxPQUFOLENBQWMsd0JBQWQsQ0FBZjtBQUNBaU0sc0JBQVEsQ0FBQzNLLFNBQVQsQ0FBbUJVLEdBQW5CLENBQXVCLGdCQUF2Qjs7QUFFQSxrQkFBSTRKLFFBQUosRUFBYztBQUNaeEIsbUJBQUcsQ0FBQ2lCLEtBQUo7QUFDRDtBQUNGLGFBbkYwQixFQXFGM0I7OztBQXJGMkIsZ0JBc0ZsQlEsY0F0RmtCLEdBc0YzQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hCTCx3QkFBVSxDQUFDM00sT0FBWCxDQUFtQixVQUFTdUwsR0FBVCxFQUFjO0FBQy9CQSxtQkFBRyxDQUFDL0ssWUFBSixDQUFpQixlQUFqQixFQUFrQyxPQUFsQztBQUNELGVBRkQ7QUFJQW9NLHVCQUFTLENBQUM1TSxPQUFWLENBQWtCLFVBQVN3TCxLQUFULEVBQWdCO0FBQ2hDQSxxQkFBSyxDQUFDL0ksU0FBTixDQUFnQlUsR0FBaEIsQ0FBb0IsUUFBcEI7QUFDQXFJLHFCQUFLLENBQUMvSSxTQUFOLENBQWdCVyxNQUFoQixDQUF1QixhQUF2QjtBQUNBb0kscUJBQUssQ0FBQy9JLFNBQU4sQ0FBZ0JXLE1BQWhCLENBQXVCLGNBQXZCO0FBQ0FvSSxxQkFBSyxDQUFDL0ksU0FBTixDQUFnQlcsTUFBaEIsQ0FBdUIsY0FBdkI7QUFFQSxvQkFBSWdLLFFBQVEsR0FBRzVCLEtBQUssQ0FBQ3JLLE9BQU4sQ0FBYyx3QkFBZCxDQUFmOztBQUNBLG9CQUFLaU0sUUFBUSxDQUFDM0ssU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsZ0JBQTVCLENBQUwsRUFBcUQ7QUFDbkQwSywwQkFBUSxDQUFDM0ssU0FBVCxDQUFtQlcsTUFBbkIsQ0FBMEIsZ0JBQTFCO0FBQ0Q7QUFDRixlQVZEO0FBV0QsYUF0RzBCLEVBd0czQjs7O0FBeEcyQixnQkF5R2xCNkosaUJBekdrQixHQXlHM0IsU0FBU0EsaUJBQVQsR0FBNkI7QUFDM0J2Qix3QkFBVSxDQUFDMUwsT0FBWCxDQUFtQixVQUFTcU4sU0FBVCxFQUFvQjtBQUNyQyxvQkFBS0EsU0FBUyxDQUFDOU0sWUFBVixDQUF1QixlQUF2QixNQUE0QyxPQUFqRCxFQUEyRDtBQUN6RDhNLDJCQUFTLENBQUM3TSxZQUFWLENBQXVCLGVBQXZCLEVBQXdDLE1BQXhDO0FBQ0QsaUJBRkQsTUFFTztBQUNMNk0sMkJBQVMsQ0FBQzdNLFlBQVYsQ0FBdUIsZUFBdkIsRUFBd0MsT0FBeEM7QUFDRDtBQUNGLGVBTkQ7QUFPRCxhQWpIMEIsRUFtSDNCO0FBQ0E7OztBQXBIMkIsZ0JBcUhsQjZMLHFCQXJIa0IsR0FxSDNCLFNBQVNBLHFCQUFULENBQStCcEssWUFBL0IsRUFBNkM7QUFDM0Msa0JBQUlxSyxPQUFPLEdBQUdySyxZQUFZLENBQUNtSyxPQUEzQjs7QUFFQSxtQkFBSyxJQUFJbE0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lNLFVBQVUsQ0FBQzNMLE1BQS9CLEVBQXVDZCxDQUFDLEVBQXhDLEVBQTRDO0FBQzFDeU0sMEJBQVUsQ0FBQ3pNLENBQUQsQ0FBVixDQUFjOEcsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NzRyxhQUF4QztBQUNEOztBQUVELGtCQUFJdEIsU0FBUyxDQUFDTSxPQUFELENBQWIsRUFBd0I7QUFDdEIsb0JBQUlwSyxNQUFNLEdBQUdELFlBQVksQ0FBQ0MsTUFBMUI7O0FBQ0Esb0JBQUlBLE1BQU0sQ0FBQzhJLEtBQVAsS0FBaUJ1QixTQUFyQixFQUFnQztBQUM5QixzQkFBSUksVUFBVSxDQUFDekssTUFBTSxDQUFDOEksS0FBUCxHQUFlZ0IsU0FBUyxDQUFDTSxPQUFELENBQXpCLENBQWQsRUFBbUQ7QUFDakRLLDhCQUFVLENBQUN6SyxNQUFNLENBQUM4SSxLQUFQLEdBQWVnQixTQUFTLENBQUNNLE9BQUQsQ0FBekIsQ0FBVixDQUE4Q0UsS0FBOUM7QUFDRCxtQkFGRCxNQUVPLElBQUlGLE9BQU8sS0FBS1gsSUFBSSxDQUFDYyxJQUFqQixJQUF5QkgsT0FBTyxLQUFLWCxJQUFJLENBQUNHLEVBQTlDLEVBQWtEO0FBQ3ZEeUIsZ0NBQVk7QUFDYixtQkFGTSxNQUVBLElBQUlqQixPQUFPLEtBQUtYLElBQUksQ0FBQ2UsS0FBakIsSUFBMEJKLE9BQU8sSUFBSVgsSUFBSSxDQUFDSSxJQUE5QyxFQUFvRDtBQUN6RHlCLGlDQUFhO0FBQ2Q7QUFDRjtBQUNGO0FBQ0YsYUF4STBCOztBQUFBLGdCQTBJbEJBLGFBMUlrQixHQTBJM0IsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QmIsd0JBQVUsQ0FBQyxDQUFELENBQVYsQ0FBY0gsS0FBZDtBQUNELGFBNUkwQjs7QUFBQSxnQkE4SWxCZSxZQTlJa0IsR0E4STNCLFNBQVNBLFlBQVQsR0FBd0I7QUFDdEJaLHdCQUFVLENBQUNBLFVBQVUsQ0FBQzNMLE1BQVgsR0FBb0IsQ0FBckIsQ0FBVixDQUFrQ3dMLEtBQWxDO0FBQ0QsYUFoSjBCOztBQUFBLGdCQWtKbEJjLGFBbEprQixHQWtKM0IsU0FBU0EsYUFBVCxDQUF1QnBMLE1BQXZCLEVBQStCO0FBQzdCLGtCQUFJdUwsT0FBTyxHQUFHM04sUUFBUSxDQUFDNE4sYUFBdkI7O0FBRUEsa0JBQUl4TCxNQUFNLEtBQUt1TCxPQUFmLEVBQXdCO0FBQ3RCWCwyQkFBVyxDQUFDNUssTUFBRCxFQUFTLEtBQVQsQ0FBWDtBQUNEO0FBQ0YsYUF4SjBCOztBQUMzQixnQkFBSXlKLElBQUksR0FBRztBQUNUQyxpQkFBRyxFQUFFLEVBREk7QUFFVEMsa0JBQUksRUFBRSxFQUZHO0FBR1RZLGtCQUFJLEVBQUUsRUFIRztBQUlUWCxnQkFBRSxFQUFFLEVBSks7QUFLVFksbUJBQUssRUFBRSxFQUxFO0FBTVRYLGtCQUFJLEVBQUU7QUFORyxhQUFYO0FBU0EsZ0JBQUlDLFNBQVMsR0FBRztBQUNkLGtCQUFJLENBQUMsQ0FEUztBQUVkLGtCQUFJLENBQUMsQ0FGUztBQUdkLGtCQUFJLENBSFU7QUFJZCxrQkFBSTtBQUpVLGFBQWhCLENBVjJCLENBaUIzQjs7QUFDQSxpQkFBSyxJQUFJOUwsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3lNLFVBQVUsQ0FBQzNMLE1BQS9CLEVBQXVDLEVBQUVkLENBQXpDLEVBQTRDO0FBQzFDK0wsMEJBQVksQ0FBQy9MLENBQUQsQ0FBWjtBQUNEO0FBcUlGO0FBQ0YsU0FsS0Q7QUFtS0Q7QUFDRjs7O1dBRUQsdUJBQWM7QUFDWixVQUFJeU4sT0FBTyxHQUFHN04sUUFBUSxDQUFDNkgsYUFBVCxDQUF1QixvQkFBdkIsQ0FBZDtBQUVGLFVBQUlpRyxjQUFjLEdBQUczRSxNQUFNLENBQUM0RSxnQkFBUCxDQUF3QkYsT0FBeEIsQ0FBckI7O0FBRUUsVUFBSyxDQUFDQyxjQUFjLENBQUNFLGdCQUFmLENBQWdDLFNBQWhDLENBQUQsS0FBZ0QsTUFBckQsRUFBOEQ7QUFDL0QsYUFBS2pELFdBQUw7QUFDQTtBQUNBOzs7Ozs7QUFJSCxpRUFBZUwsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlYQTtBQUNBO0FBQ0E7O0lBRU11RCxpQjtBQUVGLCtCQUF5QjtBQUFBLFFBQVpsSCxJQUFZLHVFQUFMLEVBQUs7O0FBQUE7O0FBRXJCLFNBQUtzQixZQUFMLEdBQTBCdEIsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixjQUFyQixDQUFGLEdBQTJDdkIsSUFBSSxDQUFDc0IsWUFBaEQsR0FBK0QscUJBQXZGO0FBQ0EsU0FBSzZGLFVBQUwsR0FBMEJuSCxJQUFJLENBQUN1QixjQUFMLENBQXFCLFlBQXJCLENBQUYsR0FBeUN2QixJQUFJLENBQUNtSCxVQUE5QyxHQUEyRCw0QkFBbkY7QUFDQSxTQUFLeEcsU0FBTCxHQUEwQlgsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixXQUFyQixDQUFGLEdBQXdDdkIsSUFBSSxDQUFDVyxTQUE3QyxHQUF5RCwyQkFBakY7QUFDQSxTQUFLYSxXQUFMLEdBQTBCeEIsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixhQUFyQixDQUFGLEdBQTBDdkIsSUFBSSxDQUFDd0IsV0FBL0MsR0FBNkQsNkJBQXJGO0FBQ0EsU0FBSzRGLGNBQUwsR0FBMEJwSCxJQUFJLENBQUN1QixjQUFMLENBQXFCLGdCQUFyQixDQUFGLEdBQTZDdkIsSUFBSSxDQUFDb0gsY0FBbEQsR0FBbUUsZUFBM0Y7QUFDQSxTQUFLQyxlQUFMLEdBQTBCckgsSUFBSSxDQUFDdUIsY0FBTCxDQUFxQixpQkFBckIsQ0FBRixHQUE4Q3ZCLElBQUksQ0FBQ3FILGVBQW5ELEdBQXFFLEdBQTdGO0FBQ0EsU0FBS3BMLFlBQUwsR0FBMEIrRCxJQUFJLENBQUN1QixjQUFMLENBQXFCLGNBQXJCLENBQUYsR0FBMkN2QixJQUFJLENBQUMvRCxZQUFoRCxHQUErRCxxQkFBdkY7QUFDQSxTQUFLVyxLQUFMLEdBQXdCLEtBQXhCO0FBRUEsU0FBS3FELElBQUw7QUFFSDs7OztXQUVELGdCQUFPO0FBRUgsV0FBS0MsVUFBTDtBQUVIOzs7V0FFRCxzQkFBYTtBQUNmakgsY0FBUSxDQUFDa0gsZ0JBQVQsQ0FDQyxPQURELEVBRUMsS0FBS0MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBdUIsSUFBdkIsQ0FGRCxFQUdDLEtBSEQ7QUFNTXBILGNBQVEsQ0FBQ2tILGdCQUFULENBQ0wsU0FESyxFQUVMLEtBQUt5QixhQUFMLENBQW1CdkIsSUFBbkIsQ0FBeUIsSUFBekIsQ0FGSyxFQUdMLEtBSEs7QUFLTjs7O1dBRUUscUJBQWFDLEtBQWIsRUFBcUI7QUFFdkIsVUFBSTtBQUVNLFlBQUlsRixZQUFZLEdBQUdrRixLQUFLLENBQUNqRixNQUF6QixDQUZOLENBSU07O0FBQ0EsWUFBSzJCLHdFQUFZLENBQUU7QUFBRTVCLHNCQUFZLEVBQUVBLFlBQWhCO0FBQThCNkIsb0JBQVUsRUFBRSxLQUFLa0ssVUFBL0M7QUFBMkRqSyxxQkFBVyxFQUFFO0FBQXhFLFNBQUYsQ0FBakIsRUFBcUc7QUFFakdvRCxlQUFLLENBQUNvQixjQUFOO0FBRUEsY0FBSWhHLE9BQU8sR0FBRzVCLHVFQUFVLENBQUU7QUFBRUUsd0JBQVksRUFBRSxLQUFLc0g7QUFBckIsV0FBRixDQUF4Qjs7QUFFQSxjQUFLNUYsT0FBTCxFQUFlO0FBRVhJLCtGQUF1QixDQUFFO0FBQ3JCSixxQkFBTyxFQUFFQSxPQURZO0FBRXJCTywwQkFBWSxFQUFFLEtBQUtBO0FBRkUsYUFBRixDQUF2QjtBQUtIO0FBRUosU0FwQlAsQ0FzQk07OztBQUNBLFlBQUtlLHdFQUFZLENBQUU7QUFBRTVCLHNCQUFZLEVBQUVBLFlBQWhCO0FBQThCNkIsb0JBQVUsRUFBRSxLQUFLMEQsU0FBL0M7QUFBMER6RCxxQkFBVyxFQUFFO0FBQXZFLFNBQUYsQ0FBakIsRUFBb0c7QUFFaEdvRCxlQUFLLENBQUNvQixjQUFOOztBQUVBLGNBQUloRyxRQUFPLEdBQUc1Qix1RUFBVSxDQUFFO0FBQUVFLHdCQUFZLEVBQUUsS0FBS3NIO0FBQXJCLFdBQUYsQ0FBeEI7O0FBRUEsY0FBSzVGLFFBQUwsRUFBZTtBQUVYSyw4RkFBc0IsQ0FBRTtBQUNwQkwscUJBQU8sRUFBRUEsUUFEVztBQUVwQk8sMEJBQVksRUFBRSxLQUFLQTtBQUZDLGFBQUYsQ0FBdEI7QUFLSDtBQUVKLFNBdENQLENBd0NNOzs7QUFDQSxZQUFLZSx3RUFBWSxDQUFFO0FBQUU1QixzQkFBWSxFQUFFQSxZQUFoQjtBQUE4QjZCLG9CQUFVLEVBQUUsS0FBS3VFLFdBQS9DO0FBQTREdEUscUJBQVcsRUFBRTtBQUF6RSxTQUFGLENBQWpCLEVBQXNHO0FBRWxHb0QsZUFBSyxDQUFDb0IsY0FBTjs7QUFFQSxjQUFJaEcsU0FBTyxHQUFHNUIsdUVBQVUsQ0FBRTtBQUFFRSx3QkFBWSxFQUFFLEtBQUtzSDtBQUFyQixXQUFGLENBQXhCOztBQUVBLGNBQUs1RixTQUFMLEVBQWU7QUFFWEQsa0ZBQVUsQ0FBRTtBQUNSQyxxQkFBTyxFQUFFQSxTQUREO0FBRVJDLDJCQUFhLEVBQUUsS0FBS00sWUFBTCxHQUFvQixXQUYzQjtBQUdSQSwwQkFBWSxFQUFFLEtBQUtBLFlBSFg7QUFJUkMsOEJBQWdCLEVBQUVkO0FBSlYsYUFBRixDQUFWO0FBT0g7QUFFSjtBQUVWLE9BNURELENBNERFLE9BQU9xRixLQUFQLEVBQWM7QUFDZC9DLGVBQU8sQ0FBQytDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBRUQ7OztXQUdFLHVCQUFlSCxLQUFmLEVBQXVCO0FBRW5CLFVBQUk7QUFFQSxZQUFLdkYsd0VBQVksQ0FBRTtBQUFFRSxrQkFBUSxFQUFFcUYsS0FBWjtBQUFtQnBGLGFBQUcsRUFBQyxRQUF2QjtBQUFpQ0MsaUJBQU8sRUFBRSxLQUFLbUc7QUFBL0MsU0FBRixDQUFqQixFQUFxRjtBQUVqRnhGLDZGQUF1QixDQUFFO0FBQ3JCSixtQkFBTyxFQUFXNUIsdUVBQVUsQ0FBRTtBQUFFRSwwQkFBWSxFQUFFLEtBQUtzSDtBQUFyQixhQUFGLENBRFA7QUFFckJyRix3QkFBWSxFQUFNLEtBQUtBLFlBRkY7QUFHckJDLDRCQUFnQixFQUFFcEMsdUVBQVUsQ0FBRTtBQUFFRSwwQkFBWSxFQUFFO0FBQWhCLGFBQUY7QUFIUCxXQUFGLENBQXZCO0FBTUg7QUFFVixPQVpLLENBWUosT0FBT3lHLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRTs7Ozs7O0FBS0wsaUVBQWV5RyxpQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ0E7O0lBRU1JLGU7QUFFRiw2QkFBeUI7QUFBQSxRQUFadEgsSUFBWSx1RUFBTCxFQUFLOztBQUFBOztBQUNyQixTQUFLcEQsS0FBTCxHQUF3QixLQUF4QjtBQUNBLFNBQUtxRCxJQUFMO0FBQ0g7Ozs7V0FFRCxnQkFBTztBQUVILFdBQUtDLFVBQUw7QUFFSDs7O1dBRUQsc0JBQWE7QUFDZmpILGNBQVEsQ0FBQ2tILGdCQUFULENBQ0MsT0FERCxFQUVDLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXVCLElBQXZCLENBRkQsRUFHQyxLQUhEO0FBS0E7OztXQUVFLHFCQUFhQyxLQUFiLEVBQXFCO0FBRXZCLFVBQUk7QUFFTSxZQUFJbEYsWUFBWSxHQUFHa0YsS0FBSyxDQUFDakYsTUFBekI7QUFDQSxZQUFJa0YsVUFBVSxHQUFHRCxLQUFLLENBQUNqRixNQUFOLENBQWFnQyxhQUE5QixDQUhOLENBS007O0FBQ0EsWUFBS2pDLFlBQVksQ0FBQ1EsU0FBYixDQUF1QkMsUUFBdkIsQ0FBaUMseUJBQWpDLENBQUwsRUFBb0U7QUFFaEVoQyxrRkFBaUIsQ0FBRXVCLFlBQUYsRUFBZ0J5RSw2RUFBbUIsQ0FBRVUsVUFBRixDQUFuQyxDQUFqQjtBQUVIOztBQUVELFlBQUtuRixZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWlDLHVCQUFqQyxDQUFMLEVBQWtFO0FBRTlEK0QsMkJBQWlCLENBQUVXLFVBQUYsQ0FBakI7QUFDQTFHLGtGQUFpQixDQUFFdUIsWUFBRixFQUFnQixNQUFoQixDQUFqQjtBQUVIOztBQUVELFlBQUtBLFlBQVksQ0FBQ1EsU0FBYixDQUF1QkMsUUFBdkIsQ0FBaUMscUJBQWpDLENBQUwsRUFBZ0U7QUFFNUQrRCwyQkFBaUIsQ0FBRVcsVUFBRixDQUFqQjtBQUNBMUcsa0ZBQWlCLENBQUV1QixZQUFGLEVBQWdCLE9BQWhCLENBQWpCO0FBRUg7QUFFVixPQTFCRCxDQTBCRSxPQUFPcUYsS0FBUCxFQUFjO0FBQ2QvQyxlQUFPLENBQUMrQyxLQUFSLENBQWNBLEtBQWQ7QUFDRDtBQUVEOzs7Ozs7QUFNRixpRUFBZTZHLGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBOztJQUVNQyx5QjtBQUVGLHVDQUF5QjtBQUFBLFFBQVp2SCxJQUFZLHVFQUFMLEVBQUs7O0FBQUE7O0FBRXJCLFNBQUtwRCxLQUFMLEdBQWEsS0FBYjtBQUVBLFNBQUtxRCxJQUFMO0FBRUg7Ozs7V0FFRCxnQkFBTztBQUVILFdBQUtDLFVBQUw7QUFFSDs7O1dBRUQsc0JBQWE7QUFDZmpILGNBQVEsQ0FBQ2tILGdCQUFULENBQ0MsT0FERCxFQUVDLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXVCLElBQXZCLENBRkQsRUFHQyxLQUhEO0FBTU1wSCxjQUFRLENBQUNrSCxnQkFBVCxDQUNMLFNBREssRUFFTCxLQUFLeUIsYUFBTCxDQUFtQnZCLElBQW5CLENBQXlCLElBQXpCLENBRkssRUFHTCxLQUhLO0FBS047OztXQUVFLHFCQUFhQyxLQUFiLEVBQXFCO0FBRXZCLFVBQUk7QUFFTSxZQUFJbEYsWUFBWSxHQUFHa0YsS0FBSyxDQUFDakYsTUFBekIsQ0FGTixDQUlNOztBQUNBLFlBQUtELFlBQVksQ0FBQ1EsU0FBYixDQUF1QkMsUUFBdkIsQ0FBaUMsc0NBQWpDLENBQUwsRUFBaUY7QUFFN0UsY0FBSyxLQUFLMkUsV0FBTCxFQUFMLEVBQTBCO0FBRXRCLGlCQUFLcUIsS0FBTCxDQUFZekcsWUFBWjtBQUVBdkMsNkVBQVUsQ0FBRSxPQUFGLEVBQVcsdUNBQVgsQ0FBVjtBQUVILFdBTkQsTUFNTztBQUVILGlCQUFLaUosSUFBTCxDQUFXMUcsWUFBWDtBQUVBdkMsNkVBQVUsQ0FBRSxNQUFGLEVBQVUsdUNBQVYsQ0FBVjtBQUVIO0FBRUosU0FyQlAsQ0F1Qk07OztBQUNBLFlBQUt1QyxZQUFZLENBQUNRLFNBQWIsQ0FBdUJDLFFBQXZCLENBQWdDLG9DQUFoQyxDQUFMLEVBQThFO0FBRTFFLGVBQUtpRyxJQUFMLENBQVcxRyxZQUFYO0FBRUgsU0E1QlAsQ0E4Qk07OztBQUNBLFlBQUtBLFlBQVksQ0FBQ1EsU0FBYixDQUF1QkMsUUFBdkIsQ0FBZ0MscUNBQWhDLENBQUwsRUFBK0U7QUFFM0UsZUFBS2dHLEtBQUwsQ0FBWXpHLFlBQVo7QUFFSDtBQUVWLE9BckNELENBcUNFLE9BQU9xRixLQUFQLEVBQWM7QUFDZC9DLGVBQU8sQ0FBQytDLEtBQVIsQ0FBY0EsS0FBZDtBQUNEO0FBRUQ7OztXQUdFLHVCQUFlSCxLQUFmLEVBQXVCO0FBRW5CLFVBQUk7QUFFQSxZQUFLdkYsWUFBWSxDQUFFO0FBQUVFLGtCQUFRLEVBQUVxRixLQUFaO0FBQW1CcEYsYUFBRyxFQUFDLFFBQXZCO0FBQWlDQyxpQkFBTyxFQUFFLEtBQUttRztBQUEvQyxTQUFGLENBQWpCLEVBQXFGO0FBRWpGeEYsaUNBQXVCLENBQUU7QUFDckJKLG1CQUFPLEVBQVc1QixVQUFVLENBQUU7QUFBRUUsMEJBQVksRUFBRSxLQUFLc0g7QUFBckIsYUFBRixDQURQO0FBRXJCckYsd0JBQVksRUFBTSxLQUFLQSxZQUZGO0FBR3JCQyw0QkFBZ0IsRUFBRXBDLFVBQVUsQ0FBRTtBQUFFRSwwQkFBWSxFQUFFO0FBQWhCLGFBQUY7QUFIUCxXQUFGLENBQXZCO0FBTUg7QUFFVixPQVpLLENBWUosT0FBT3lHLEtBQVAsRUFBYztBQUNkL0MsZUFBTyxDQUFDK0MsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFFRTs7O1dBRUQsZ0JBQTZCO0FBQUEsVUFBdkJyRixZQUF1Qix1RUFBUixLQUFRO0FBRXpCLFVBQUkyRyxHQUFHLEdBQUc5SSxRQUFRLENBQUNpQixzQkFBVCxDQUFnQyw4QkFBaEMsRUFBZ0UsQ0FBaEUsS0FBc0UsS0FBaEY7QUFFQSxVQUFLLENBQUU2SCxHQUFQLEVBQWE7QUFFYkEsU0FBRyxDQUFDcEksWUFBSixDQUFrQixlQUFsQixFQUFtQyxJQUFuQztBQUVBVixjQUFRLENBQUMrSSxJQUFULENBQWNwRyxTQUFkLENBQXdCVSxHQUF4QixDQUE0Qix1Q0FBNUI7QUFDQXJELGNBQVEsQ0FBQytJLElBQVQsQ0FBY3BHLFNBQWQsQ0FBd0JXLE1BQXhCLENBQStCLHlDQUEvQjtBQUVBMUQsdUVBQVUsQ0FBRSxNQUFGLEVBQVUsdUNBQVYsQ0FBVjtBQUVIOzs7V0FFRCxpQkFBOEI7QUFBQSxVQUF2QnVDLFlBQXVCLHVFQUFSLEtBQVE7QUFFMUIsVUFBSTJHLEdBQUcsR0FBRzlJLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDLDhCQUFoQyxFQUFnRSxDQUFoRSxLQUFzRSxLQUFoRjtBQUVBLFVBQUssQ0FBRTZILEdBQVAsRUFBYTtBQUViQSxTQUFHLENBQUNwSSxZQUFKLENBQWtCLGVBQWxCLEVBQW1DLEtBQW5DO0FBRUFWLGNBQVEsQ0FBQytJLElBQVQsQ0FBY3BHLFNBQWQsQ0FBd0JXLE1BQXhCLENBQStCLHVDQUEvQjtBQUNBdEQsY0FBUSxDQUFDK0ksSUFBVCxDQUFjcEcsU0FBZCxDQUF3QlUsR0FBeEIsQ0FBNEIseUNBQTVCO0FBRUF6RCx1RUFBVSxDQUFFLE9BQUYsRUFBVyx1Q0FBWCxDQUFWO0FBRUEsVUFBTTJPLFNBQVMsR0FBRzNLLFVBQVUsQ0FDeEIsWUFBVztBQUNQdUYsY0FBTSxDQUFDcUYsYUFBUCxDQUFxQixJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFyQjtBQUNILE9BSHVCLEVBR3JCLEdBSHFCLENBQTVCO0FBTUg7OztXQUVELHVCQUFjO0FBRVYsVUFBSTNGLEdBQUcsR0FBRzlJLFFBQVEsQ0FBQ2lCLHNCQUFULENBQWdDLCtCQUFoQyxFQUFpRSxDQUFqRSxLQUF1RSxLQUFqRjtBQUVBLFVBQUssQ0FBRTZILEdBQVAsRUFBYTtBQUViLGFBQVM5SSxRQUFRLENBQUMrSSxJQUFULENBQWNwRyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyx1Q0FBakMsQ0FBRixJQUFpRixLQUF4RjtBQUVIOzs7Ozs7QUFJTCxpRUFBZTBMLHlCQUFmLEU7Ozs7OztVQ2xKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNSSxHQUFHLEdBQUc7QUFDUkMsb0JBQWtCLEVBQUUsSUFBSVYsd0ZBQUosRUFEWjtBQUVSVyx3QkFBc0IsRUFBRSxJQUFJTiw2RUFBSixFQUZoQjtBQUdSTywwQkFBd0IsRUFBRSxJQUFJbkcsMEZBQUosRUFIbEI7QUFJUm9HLGNBQVksRUFBRSxJQUFJVCx5RUFBSixFQUpOO0FBS1JVLFdBQVMsRUFBRSxJQUFJdEgsaUVBQUosRUFMSDtBQU1SdUgsYUFBVyxFQUFFLElBQUk1RyxnRkFBSixFQU5MO0FBT1I2RyxNQUFJLEVBQUUsSUFBSXpFLDREQUFKLEVBUEU7QUFRUnhDLFFBQU0sRUFBRSxJQUFJRiw4REFBSixFQVJBO0FBU1JvSCxZQUFVLEVBQUUsQ0FDUjtBQURRLEdBVEo7QUFZUkMsWUFBVSxFQUFFLElBQUluRyxnRkFBSixFQVpKO0FBYVJpQyxNQUFJLEVBQUUsSUFBSVAsNkRBQUo7QUFiRSxDQUFaLEMiLCJmaWxlIjoiYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFyaWFVcGRhdGUgPSAoIGFjdGlvbiwgc2VsZWN0b3IgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRvZ2dsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaChcclxuICAgICAgICAoIGVsZW1lbnQsIGkgKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoYWN0aW9uTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vYWxlcnQoIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuY29uc3QgYXJpYVVwZGF0ZUVsZW1lbnQgPSAoIGVsZW1lbnQsIGFjdGlvbiApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnb3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFyaWFVcGRhdGVFbGVtZW50LCBhcmlhVXBkYXRlIH07IiwiY29uc3QgZWxlbWVudEdldCA9ICggeyBwYXJlbnQgPSBmYWxzZSwgZWxlbWVudENsYXNzID0gZmFsc2UgfSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnRDbGFzcyApIHtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRzID0gcGFyZW50ID8gcGFyZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApIDogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggZWxlbWVudENsYXNzICk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCAwIDwgZWxlbWVudHMubGVuZ3RoICkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgZWxlbWVudEdldENsb3Nlc3QgPSAoIGVsZW1lbnQsIHBhcmVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdCggJy4nICsgcGFyZW50Q2xhc3MgKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZWxlbWVudEdldFNpYmxpbmdzID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIC8vIFNldHVwIHNpYmxpbmdzIGFycmF5IGFuZCBnZXQgdGhlIGZpcnN0IHNpYmxpbmdcclxuXHRsZXQgc2libGluZ3MgPSBbXTtcclxuXHRsZXQgc2libGluZyA9IGVsZW1lbnQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xyXG5cclxuXHQvLyBMb29wIHRocm91Z2ggZWFjaCBzaWJsaW5nIGFuZCBwdXNoIHRvIHRoZSBhcnJheVxyXG5cdHdoaWxlICggc2libGluZyApIHtcclxuXHJcblx0XHRpZiAoc2libGluZy5ub2RlVHlwZSA9PT0gMSAmJiBzaWJsaW5nICE9PSBlbGVtZW50KSB7XHJcblxyXG5cdFx0XHRzaWJsaW5ncy5wdXNoKHNpYmxpbmcpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRzaWJsaW5nID0gc2libGluZy5uZXh0U2libGluZztcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2libGluZ3M7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBlbGVtZW50R2V0LCBlbGVtZW50R2V0Q2xvc2VzdCwgZWxlbWVudEdldFNpYmxpbmdzIH0iLCJjb25zdCBrZXlEb3duRXZlbnQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGRvbUV2ZW50ID0gZmFsc2UsXHJcbiAgICAgICAga2V5ICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpbkNsYXNzICA9IGZhbHNlXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCAhIGRvbUV2ZW50IHx8ICEga2V5ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBldmVudEVsZW1lbnQgPSBkb21FdmVudC50YXJnZXQ7XHJcbiAgICBsZXQgZXZlbnRLZXkgICAgID0gZG9tRXZlbnQua2V5O1xyXG5cclxuICAgIGlmICgga2V5ID09PSBldmVudEtleSAmJiBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xyXG5cclxuICAgICAgICBpZiAoIGluQ2xhc3MgJiYgZXZlbnRFbGVtZW50LmNsb3Nlc3QoICcuJyArIGluQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICB9IFxyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBrZXlEb3duRXZlbnQgfTsiLCJjb25zdCB0b2dnbGVBcmlhID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgPSBmYWxzZSxcclxuICAgICAgICB0b2dnbGVCeUNsYXNzID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB0b2dnbGVCeUNsYXNzICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggdG9nZ2xlQnlDbGFzcyApICkge1xyXG5cdFx0XHRcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCBwcm9wcyApOyBcclxuICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHByb3BzICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3cmFwcGVyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpICYmICdmYWxzZScgIT0gd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHRvZ2dsZUhlaWdodCggcHJvcHMsIHRydWUgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCB0cnVlICk7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyx0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYWN0aW9uUHJlZml4ICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCBmYWxzZSApO1xyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlTGFiZWwoIHByb3BzLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBpZiAoIGFjdGlvblByZWZpeCApIHtcclxuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCBhY3Rpb25QcmVmaXggKyAnLS1jbG9zZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIHRvZ2dsZUFuaW1hdGluZyggcHJvcHMgKTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQW5pbWF0aW5nID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlZER1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGFuaW1hdGVDbGFzcyAgICAgPSAnd3N1LWFuaW1hdGluZycsXHJcbiAgICAgICAgaXNBbmltYXRlZCAgICAgICA9IHRydWUsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCAgICA9IGZhbHNlLFxyXG4gICAgICAgIGNoaWxkRWxlbWVudCAgICAgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGlzQW5pbWF0ZWQgJiYgd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCB3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggYW5pbWF0ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBhbmltYXRlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBhbmltYXRlSGVpZ2h0ICYmIGNoaWxkRWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkRHVyYXRpb25cclxuICAgICAgICAgICAgKTtcclxuICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgXHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYW5pbWF0ZUNsYXNzICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZVNob3VsZCA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXZlbnRFbGVtZW50ID0gZmFsc2UsIFxyXG4gICAgICAgIGNsaWNrQ2xhc3MgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1BhcmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrU2libGluZyA9IGZhbHNlLFxyXG4gICAgICAgIGNoZWNrRW1wdHlMaW5rID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBjbGlja0NsYXNzICYmIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tFbXB0eUxpbmsgJiYgZXZlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnaHJlZicpICYmICcjJyA9PT0gZXZlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKCBjaGVja1BhcmVudCAmJiBldmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGNsaWNrQ2xhc3MgKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tTaWJsaW5nICYmIGV2ZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcblxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlTGFiZWwgPSAoIHByb3BzLCBpc0V4cGFuZGVkICkgPT4ge1xyXG4gICAgbGV0IHsgXHJcbiAgICAgICAgZXhwYW5kZWRUZXh0ID0gJ0Nsb3NlJywgXHJcbiAgICAgICAgY29sbGFwc2VkVGV4dCA9ICdPcGVuJywgXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCBwcm9wcyApO1xyXG5cclxuXHJcbiAgICBpZiAoIGFyaWFMYWJlbEVsZW1lbnQgJiYgYXJpYUxhYmVsRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSApIHtcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gYXJpYUxhYmVsRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbiA9ICggaXNFeHBhbmRlZCApID8gZXhwYW5kZWRUZXh0IDogY29sbGFwc2VkVGV4dDtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCggZXhwYW5kZWRUZXh0ICsgJ3wnICsgY29sbGFwc2VkVGV4dCwgXCJnXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggcmVnZXggKTtcclxuXHJcbiAgICAgICAgbGFiZWwgPSBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uICk7XHJcblxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgdG9nZ2xlSGVpZ2h0ID0gKCBwcm9wcywgaXNFeHBhbmRpbmcgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBcclxuICAgICAgICBjaGlsZEVsZW1lbnQgPSBmYWxzZSxcclxuICAgICAgICBhbmltYXRlSGVpZ2h0ID0gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2hpbGRFbGVtZW50ICYmIGFuaW1hdGVIZWlnaHQgKSB7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZEVsZW1lbnRIZWlnaHQgPSAoIGNoaWxkRWxlbWVudC5zY3JvbGxIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICkgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNoaWxkRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZEVsZW1lbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmICggISBpc0V4cGFuZGluZyApIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuLCB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSwgdG9nZ2xlQW5pbWF0aW5nLCB0b2dnbGVTaG91bGQgfTsiLCJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFuaW1hdGVTbGlkZVVwID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTtcclxuIiwiY29uc3Qgd3N1QXJpYUV4cGFuZGVkID0gKCBlbGVtZW50LCB2YWx1ZSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB2YWx1ZSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFyaWFJc0V4cGFuZGVkID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoJ3RydWUnID09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHsgd3N1QXJpYUV4cGFuZGVkLCB3c3VBcmlhSXNFeHBhbmRlZCB9IiwiY29uc3Qgd3N1Q2xhc3NBZGQgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NSZW1vdmUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NUb2dnbGUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VDbGFzc0FkZCwgd3N1Q2xhc3NSZW1vdmUsIHdzdUNsYXNzVG9nZ2xlIH0iLCJleHBvcnQge3dzdUFuaW1hdGVTbGlkZURvd24gYXMgd3N1QW5pbWF0ZVNsaWRlRG93biB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlVXAgYXMgd3N1QW5pbWF0ZVNsaWRlVXAgfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFyaWFFeHBhbmRlZCBhcyB3c3VBcmlhRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUFyaWFJc0V4cGFuZGVkIGFzIHdzdUFyaWFJc0V4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VDbGFzc0FkZCBhcyB3c3VDbGFzc0FkZCB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzUmVtb3ZlIGFzIHdzdUNsYXNzUmVtb3ZlIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NUb2dnbGUgYXMgd3N1Q2xhc3NUb2dnbGUgfSBmcm9tICcuL3dzdUNsYXNzJzsiLCJcclxuY29uc3Qgd3N1R2V0RWxlbWVudEhlaWdodCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAwO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5jb25zdCB3c3VTbGlkZURvd24gPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZWxlbWVudCA9IGZhbHNlLCAvLyBFbGVtZW50IHRvIGV4cGFuZFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCwgLy8gRXh0cmEgaGllZ2h0IGp1c3QgaW4gY2FzZVxyXG4gICAgICAgIHRpbWluZyA9IDE1MCwgLy8gaG93IGxvbmcgd2lsbCB0aGUgYW5pbWF0aW9uIHJ1biBcclxuICAgICAgICBhcmlhRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzXHJcblxyXG4gICAgaWYgKCBlbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKCBzdGFydEhlaWdodCA8IDEwICkgeyAvLyBhc3N1bWUgY2xvc2VkXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnICk7IFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWFuaW1hdGluZycpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgIH0sIHRpbWluZyApO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd3c3UtYW5pbWF0aW5nJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZW5kSGVpZ2h0ID0gd3N1R2V0RWxlbWVudEhlaWdodCggZWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVuZEhlaWdodCArIGhlaWdodFBhZGRpbmcgKyAncHgnICk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgY3NzIGRvZXNuJ3QgcmVnaXN0ZXIgaXQuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyaWFFbGVtZW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3c3VTbGlkZURvd247IiwiY29uc3QgdXBkYXRlQXJpYUVsZW1lbnQgPSAoIGFjdGlvbiwgZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKSApIHtcclxuXHJcbiAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb25MYWJlbCA9ICggJ09wZW4nID09IGFjdGlvbiApID8gJ0Nsb3NlJyA6ICdPcGVuJztcclxuXHJcbiAgICAgICAgbGV0IGxhYmVsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApO1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUFyaWFFbGVtZW50OyIsImNvbnN0IHdzdU1lbnVFeHBhbmRVcCA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICkgPT4ge1xyXG5cclxuICAgIGxldCBzdWJNZW51ID0gbmF2SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8vc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAwO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbmF2SXRlbS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kRG93biA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICkgPT4ge1xyXG5cclxuICAgIGxldCBzdWJNZW51ID0gbmF2SXRlbS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIDUwMFxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgd3N1TWVudUV4cGFuZFRvZ2dsZSA9ICggbmF2SXRlbSwgYXJncyA9IHt9ICApID0+IHtcclxuXHJcbiAgICBpZiAoIHNob3VsZEV4cGFuZCggbmF2SXRlbSApICkge1xyXG5cclxuICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2SXRlbSwgYXJncyApO1xyXG5cclxuICAgICAgICByZXR1cm4gJ29wZW4nO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmRVcCggbmF2SXRlbSwgYXJncyApO1xyXG5cclxuICAgICAgICByZXR1cm4gJ2Nsb3NlJztcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuY29uc3Qgc2hvdWxkRXhwYW5kID0gKCBuYXZJdGVtICkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoICEgbmF2SXRlbS5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgfHwgJ2ZhbHNlJyA9PSBuYXZJdGVtLmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1TWVudUV4cGFuZFVwLCB3c3VNZW51RXhwYW5kVG9nZ2xlLCB3c3VNZW51RXhwYW5kRG93biAgfTsiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuXHJcbmNsYXNzIFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1hbmltYXRlLS1zdWJtZW51LXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbDsiLCJpbXBvcnQge1xyXG4gICAgd3N1QXJpYUV4cGFuZGVkLFxyXG4gICAgd3N1QXJpYUlzRXhwYW5kZWQsXHJcbiAgICB3c3VDbGFzc0FkZCxcclxuICAgIHdzdUNsYXNzUmVtb3ZlLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlRG93bixcclxuICAgIHdzdUFuaW1hdGVTbGlkZVVwLFxyXG59IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvd3N1UGFydGlhbHMnO1xyXG5cclxuY2xhc3MgV3N1QWNjb3JkaW9uIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vcGVuQ2xhc3MgPSAnd3N1LWFjY29yZGlvbi0tb3Blbic7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgLypkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQna2V5ZG93bicsIFxyXG5cdFx0XHR0aGlzLmtleURvd25FdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTsqL1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7IFxyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFjY29yZGlvbi0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25FbGVtZW50ID0gZXZlbnRFbGVtZW50LmNsb3Nlc3QoJy53c3UtYWNjb3JkaW9uJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWNjb3JkaW9uQ29udGVudCA9IGFjY29yZGlvbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1hY2NvcmRpb25fX2NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdzdUFyaWFJc0V4cGFuZGVkKCBldmVudEVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIGZhbHNlICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUFuaW1hdGVTbGlkZVVwKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIHRydWUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlRG93biggYWNjb3JkaW9uQ29udGVudCwge30gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIGFjY29yZGlvbkVsZW1lbnQsIHRoaXMub3BlbkNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QWNjb3JkaW9uOyAiLCJjbGFzcyBXc3VCdXR0b24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1idXR0b24tcGF1c2UtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFjdGl2ZUJ1dHRvbiggZXZlbnQudGFyZ2V0LCAnd3N1LWJ1dHRvbi1wYXVzZS1iYWNrZ3JvdW5kJywgWydQYXVzZScsJ1BsYXknXSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHRvZ2dsZUFjdGl2ZUJ1dHRvbiggYnV0dG9uLCBidXR0b25DbGFzcywgbGFiZWxzICkge1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlQ2xhc3MgPSBidXR0b25DbGFzcyArICctLWFjdGl2ZSc7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA/IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoIGFjdGl2ZUNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSggYWN0aXZlQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggbGFiZWwgKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGxhYmVsLnJlcGxhY2UoIGxhYmVsc1sxXSwgbGFiZWxzWzBdICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoIGFjdGl2ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGxhYmVsICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggbGFiZWxzWzBdLCBsYWJlbHNbMV0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsICk7XHJcbiAgICAgICAgICAgIH0gICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QnV0dG9uOyAgIiwiaW1wb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcbmltcG9ydCB7IHRvZ2dsZVNob3VsZCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3RvZ2dsZVwiO1xyXG5pbXBvcnQge3dzdVNsaWRlRG93bn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy91dGlsaXRpZXMnO1xyXG5cclxuY2xhc3MgV3N1Q29sbGFwc2FibGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMud3JhcHBlckNsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3dyYXBwZXJDbGFzcycpICkgPyBhdHRzLndyYXBwZXJDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ2xhc3MgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ3RvZ2dsZUNsYXNzJykgKSA/IGF0dHMudG9nZ2xlQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS10b2dnbGUnO1xyXG4gICAgICAgIHRoaXMuY29udGVudENsYXNzICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2NvbnRlbnRDbGFzcycpICkgPyBhdHRzLmNvbnRlbnRDbGFzcyA6ICd3c3UtY29sbGFwc2FibGUtLWNvbnRlbnQnO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uUHJlZml4ICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ2FjdGlvblByZWZpeCcpICkgPyBhdHRzLmFjdGlvblByZWZpeCA6ICd3c3UtY29sbGFwc2FibGUnO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7IFxyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcblx0fVxyXG5cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy50b2dnbGVDbGFzcywgY2hlY2tQYXJlbnQ6IHRydWUgfSkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IGVsZW1lbnRHZXRDbG9zZXN0KCBldmVudEVsZW1lbnQsIHRoaXMud3JhcHBlckNsYXNzICk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRHZXQgKCB7IHBhcmVudDogd3JhcHBlciwgZWxlbWVudENsYXNzOiB0aGlzLmNvbnRlbnRDbGFzcyB9IClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdVNsaWRlRG93bihcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFFbGVtZW50OiB3cmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdUNvbGxhcHNhYmxlOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSgpICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ0Nsb3NlJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLW9wZW4nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENsb3NlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyggbmF2ICk7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdHJ1ZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1jbG9zZWQnKTtcclxuXHJcbiAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApOyBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRDbG9zZSgpIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw7ICIsImNsYXNzIFdzdVZpZGVvRnJhbWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmFzc0NsYXNzID0gJ3dzdS12aWRlby1mcmFtZSc7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmlkZW9TaXplKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdCggZXZlbnQgKSA9PiB7IHRoaXMuY2xpY2tFdmVudHMoIGV2ZW50KSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdyZXNpemUnLCBcclxuXHRcdFx0KCkgPT4geyB0aGlzLnJlc2l6ZSgpIH0sXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS12aWRlby1mcmFtZS0tYWN0aW9uLXBsYXknICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5VmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcgKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wbGF5LWJhY2tncm91bmQnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi10b2dnbGUtYmFja2dyb3VuZCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQmFja2dyb3VuZFZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwbGF5VmlkZW8oIHZpZGVvV3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgaWYgKCAhIHZpZGVvV3JhcHBlci5oYXNBdHRyaWJ1dGUoJ2RhdGEtcGxheScpICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2aWRlb1NyYyA9IHZpZGVvV3JhcHBlci5kYXRhc2V0LnBsYXk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZGVvU3JjICk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QuYWRkKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvJyk7XHJcblxyXG4gICAgICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUJhY2tncm91bmRWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBsZXQgdmlkZW8gPSB2aWRlb1dyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LXZpZGVvLWZyYW1lX192aWRlby1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgIGlmICggdmlkZW8ubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgdmlkZW8gPSB2aWRlb1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKCB2aWRlbyApO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVCYWNrZ3JvdW5kVmlkZW8oIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb1dyYXBwZXIgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCB0aGlzLmJhc3NDbGFzcyArICdfX3ZpZGVvLWJhY2tncm91bmQnICk7XHJcblxyXG4gICAgICAgIGlmICggISB2aWRlby5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnV1NVIFZpZGVvIEZyYW1lOiBWaWRlbyBOb3QgRm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllciggdmlkZW9bMF0gKTtcclxuXHJcbiAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGF1c2UtYmFja2dyb3VuZCcpICkge1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCB0aGlzLmJhc3NDbGFzcyArICctLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBsYXktYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHRoaXMuYmFzc0NsYXNzICsgJy0tYWN0aW9uLXBhdXNlLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggdGhpcy5iYXNzQ2xhc3MgKyAnLS1hY3Rpb24tcGxheS1iYWNrZ3JvdW5kJyk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRWaWRlb1NpemUoKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlb3MubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oIHZpZGVvcyApLmZvckVhY2goICggdmlkZW8gKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IHZpZGVvLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCArIDI2MCApICogMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgICAgICAgICB2aWRlby5zdHlsZS53aWR0aCA9ICggdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCAvIDAuNTYyNSApICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc1dpZGVWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCAoIHZpZGVvV3JhcHBlci5vZmZzZXRXaWR0aCAqIDAuNTYyNSApID4gdmlkZW9XcmFwcGVyLm9mZnNldEhlaWdodCApO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAga2V5RG93bkV2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdzdVZpZGVvRnJhbWU7ICAiLCJpbXBvcnQgdXBkYXRlQXJpYUVsZW1lbnQgZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnRcIjtcclxuaW1wb3J0IHsgZWxlbWVudEdldFNpYmxpbmdzIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1TWVudSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQXJpYUVsZW1lbnQoICdDbG9zZScsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbiggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ09wZW4nLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS0tc3VibWVudS1jbG9zZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2RWxlbWVudCA9IGV2ZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xvc2VzdCgnbGknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG5cclxuICAgICAgICBuYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtZG93bicgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc3ViTWVudSA9IG5hdkVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAvKiBJZiB0aGlzIGhhcHBlbnMgdG9vIHF1aWNrbHkgaXQgZG9lc24ndCB3b3JrPyAqL1xyXG4gICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9uYXZFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAxNVxyXG4gICAgICAgICk7XHJcblxyXG5cclxuICAgICAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QucmVtb3ZlKCAnd3N1LWFuaW1hdGUtLXNsaWRlLXVwJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTaWJsaW5ncyggbmF2RWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgbGV0IHNpYmxpbmdzID0gZWxlbWVudEdldFNpYmxpbmdzKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgIHNpYmxpbmdzLmZvckVhY2goIGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCBlbGVtZW50ICkgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBlbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCBuYXZFbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSAmJiAndHJ1ZScgPT0gbmF2RWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TWVudTsgIiwiaW1wb3J0IHtcbiAgd3N1QXJpYUV4cGFuZGVkLFxuICB3c3VBcmlhSXNFeHBhbmRlZCxcbiAgd3N1Q2xhc3NBZGQsXG4gIHdzdUNsYXNzUmVtb3ZlLFxuICB3c3VBbmltYXRlU2xpZGVEb3duLFxuICB3c3VBbmltYXRlU2xpZGVVcCxcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XG5cbmNsYXNzIFdzdVRhYnMge1xuICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xuXG4gICAgdGhpcy50aW1lciA9IGZhbHNlO1xuICAgIHRoaXMub3BlbkNsYXNzID0gJ3dzdS10YWJzLS1vcGVuJztcblx0XHR0aGlzLmNsb3NlZFBhbmVsID0gJ2hpZGRlbic7XG4gICAgdGhpcy5zaG93TW9iaWxlID0gJ3Nob3ctbW9iaWxlJztcblxuICAgIHRoaXMuaW5pdCgpO1xuXG4gIH1cblxuICBpbml0KCkge1xuXG4gICAgdGhpcy50YWJJZHMoKTtcblxuXHRcdGlmICggIXRoaXMuY2hlY2tNb2JpbGUoKSApIHtcblx0XHRcdHRoaXMuYmluZEV2ZW50cygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRhYnNEZXNrdG9wKCk7XG5cdFx0fVxuXG4gIH1cblxuICB0YWJJZHMoKSB7XG4gICAgdmFyIHdzdVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzXCIpO1xuXG4gICAgaWYgKCB3c3VUYWJzLmxlbmd0aCA+IDAgKSB7XG4gICAgICB3c3VUYWJzLmZvckVhY2goKHRhYnMsIGluZGV4KSA9PiB7XG4gICAgICAgIHRhYnMuc2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIiwgYHdzdS10YWJzLSR7aW5kZXh9YCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0dGhpcy5hY2NvcmRpb25DbGlja3MuYmluZCggdGhpcyApLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdrZXlkb3duJyxcbiAgICAgIHRoaXMuYWNjS2V5RXZlbnRzLmJpbmQoIHRoaXMgKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblx0fVxuXG4gIGFjY29yZGlvbkNsaWNrcyAoIGV2ZW50ICkge1xuICAgIHRyeSB7XG5cdFx0XHRcdGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cblx0XHRcdFx0aWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFjY29yZGlvbi0tdG9nZ2xlJyApICkge1xuXG5cdFx0XHRcdFx0bGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS10YWJzX19wYW5lbC1pbm5lcicpO1xuXHRcdFx0XHRcdGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXRhYnNfX2NvbnRlbnQnKTtcblxuXHRcdFx0XHRcdGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xuICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIGZhbHNlICk7XG4gICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVVcCggYWNjb3JkaW9uQ29udGVudCwge30gKTtcbiAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xuICAgICAgICAgICAgd3N1Q2xhc3NBZGQoIGFjY29yZGlvbkNvbnRlbnQsIHRoaXMuY2xvc2VkUGFuZWwgKTtcbiAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25Db250ZW50LCAnc2hvdy1tb2JpbGUnICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0d3N1QXJpYUV4cGFuZGVkKCBldmVudEVsZW1lbnQsIHRydWUgKTtcblx0XHRcdFx0XHRcdHdzdUFuaW1hdGVTbGlkZURvd24oIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XG5cdFx0XHRcdFx0XHR3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcblx0XHRcdFx0XHRcdHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25Db250ZW50LCB0aGlzLmNsb3NlZFBhbmVsICk7XG4gICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uQ29udGVudCwgJ3Nob3ctbW9iaWxlJyApO1xuICAgICAgICAgICAgd3N1Q2xhc3NSZW1vdmUoIGFjY29yZGlvbkNvbnRlbnQsICdzaG93LWRlc2t0b3AnICk7XG5cdFx0XHRcdFx0fVxuXG4gICAgICAgICAgLy9UcmFja2luZyBmb3IgZGVza3RvcCB0YWJzIHdpdGggbW9iaWxlIGNsaWNrc1xuICAgICAgICAgIHZhciB3c3VUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic1wiKTtcbiAgICAgICAgICBsZXQgYWN0aXZlRGVza3RvcCA9IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIpO1xuICAgICAgICAgIGxldCBwYXJlbnRUYWIgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS10YWJzJyk7XG5cbiAgICAgICAgICBpZiAoIHdzdVRhYnMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGxldCBkZXNrdG9wVGFicyA9IHBhcmVudFRhYi5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzX19idXR0b24tZGVza3RvcFwiKTtcbiAgICAgICAgICAgIGxldCBwYW5lbENvbnRlbnQgPSBwYXJlbnRUYWIucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic19fY29udGVudFwiKTtcblxuICAgICAgICAgICAgZGVza3RvcFRhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIpIHtcbiAgICAgICAgICAgICAgaWYgKCB0YWIuZ2V0QXR0cmlidXRlKFwiYXJpYS1jb250cm9sc1wiKSA9PT0gYWN0aXZlRGVza3RvcCApIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwYW5lbENvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihwYW5lbCkge1xuICAgICAgICAgICAgICBpZiAoIHBhbmVsLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhY3RpdmVEZXNrdG9wICkge1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBwYW5lbCwgXCJsYXN0LWNsaWNrZWRcIiApO1xuICAgICAgICAgICAgICAgIHdzdUNsYXNzQWRkKCBwYW5lbCwgJ3Nob3ctZGVza3RvcCcgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggcGFuZWwsIFwibGFzdC1jbGlja2VkXCIgKTtcbiAgICAgICAgICAgICAgICB3c3VDbGFzc1JlbW92ZSggcGFuZWwsICdzaG93LWRlc2t0b3AnICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS10YWJzX19idXR0b24tZGVza3RvcCcgKSApIHtcblx0XHRcdFx0XHR0aGlzLnRhYnNEZXNrdG9wKCk7XG5cdFx0XHRcdH1cblxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHRcdH1cblxuICB9XG5cbiAgLy8gQXJyb3cga2V5cyAodXAvZG93bikgbmF2aWdhdGlvbiBvbiBtb2JpbGUgb25seVxuICBhY2NLZXlFdmVudHMoKSB7XG4gICAgdmFyIHdzdVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzXCIpO1xuXG4gICAgaWYgKCB3c3VUYWJzLmxlbmd0aCA+IDAgKSB7XG4gICAgICB3c3VUYWJzLmZvckVhY2goKGFjY1RhYikgPT4ge1xuICAgICAgICB2YXIgYWNjQnV0dG9ucyA9IGFjY1RhYi5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS1hY2NvcmRpb25fX3RpdGxlLWJ1dHRvblwiKTtcblxuICAgICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgICBlbmQ6IDM1LFxuICAgICAgICAgIGhvbWU6IDM2LFxuICAgICAgICAgIHVwOiAzOCxcbiAgICAgICAgICBkb3duOiA0MCxcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZGlyZWN0aW9uID0ge1xuICAgICAgICAgIDM3OiAtMSxcbiAgICAgICAgICAzODogLTEsXG4gICAgICAgICAgMzk6IDEsXG4gICAgICAgICAgNDA6IDEsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQmluZCBsaXN0ZW5lcnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2NCdXR0b25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXJzKGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXJzKGluZGV4KSB7XG4gICAgICAgICAgYWNjQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25FdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBhY2NCdXR0b25zW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleXVwRXZlbnRMaXN0ZW5lcik7XG5cbiAgICAgICAgICAvLyBCdWlsZCBhbiBhcnJheSB3aXRoIGFsbCB0YWJzICg8YnV0dG9uPnMpIGluIGl0XG4gICAgICAgICAgYWNjQnV0dG9uc1tpbmRleF0uaW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGtleWRvd25FdmVudExpc3RlbmVyKGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgIHZhciBrZXkgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlIGtleXMudXA6XG4gICAgICAgICAgICBjYXNlIGtleXMuZG93bjpcbiAgICAgICAgICAgICAgZXZlbnRFbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGtleXVwRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgICAgICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2Uga2V5cy51cDpcbiAgICAgICAgICAgIGNhc2Uga2V5cy5kb3duOlxuICAgICAgICAgICAgICBzd2l0Y2hUYWJPbkFycm93UHJlc3MoZXZlbnQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzd2l0Y2hUYWJPbkFycm93UHJlc3MoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgcHJlc3NlZCA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgICBpZiAoZGlyZWN0aW9uW3ByZXNzZWRdKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHRhcmdldC5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChhY2NCdXR0b25zW3RhcmdldC5pbmRleCArIGRpcmVjdGlvbltwcmVzc2VkXV0pIHtcbiAgICAgICAgICAgICAgICBhY2NCdXR0b25zW3RhcmdldC5pbmRleCArIGRpcmVjdGlvbltwcmVzc2VkXV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLmxlZnQgfHwgcHJlc3NlZCA9PT0ga2V5cy51cCkge1xuICAgICAgICAgICAgICAgIGFjY0J1dHRvbnNbYWNjQnV0dG9ucy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZXNzZWQgPT09IGtleXMucmlnaHQgfHwgcHJlc3NlZCA9PSBrZXlzLmRvd24pIHtcbiAgICAgICAgICAgICAgICBhY2NCdXR0b25zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgdGFic0Rlc2t0b3AoKSB7XG4gICAgdmFyIHdzdVRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS10YWJzXCIpO1xuXG4gICAgaWYgKCB3c3VUYWJzLmxlbmd0aCA+IDAgKSB7XG4gICAgICB3c3VUYWJzLmZvckVhY2goKHRhYnMpID0+IHtcblxuICAgICAgICB2YXIgdGFiQnV0dG9ucyA9IHRhYnMucXVlcnlTZWxlY3RvckFsbChcIi53c3UtdGFic19fYnV0dG9uLWRlc2t0b3BcIik7XG4gICAgICAgIHZhciB0YWJQYW5lbHMgPSB0YWJzLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXRhYnNfX2NvbnRlbnRcIik7XG5cbiAgICAgICAgLy8gQWNjb3JkaW9uIGJ1dHRvbnMgb24gbW9iaWxlXG4gICAgICAgIHZhciBhY2NCdXR0b25zID0gdGFicy5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS1hY2NvcmRpb25fX3RpdGxlLWJ1dHRvblwiKTtcblxuICAgICAgICBpZiAoIHRhYkJ1dHRvbnMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICB2YXIga2V5cyA9IHtcbiAgICAgICAgICAgIGVuZDogMzUsXG4gICAgICAgICAgICBob21lOiAzNixcbiAgICAgICAgICAgIGxlZnQ6IDM3LFxuICAgICAgICAgICAgdXA6IDM4LFxuICAgICAgICAgICAgcmlnaHQ6IDM5LFxuICAgICAgICAgICAgZG93bjogNDAsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSB7XG4gICAgICAgICAgICAzNzogLTEsXG4gICAgICAgICAgICAzODogLTEsXG4gICAgICAgICAgICAzOTogMSxcbiAgICAgICAgICAgIDQwOiAxLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBCaW5kIGxpc3RlbmVyc1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiQnV0dG9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKGkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVycyhpbmRleCkge1xuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25FdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5dXBFdmVudExpc3RlbmVyKTtcblxuICAgICAgICAgICAgLy8gQnVpbGQgYW4gYXJyYXkgd2l0aCBhbGwgdGFicyAoPGJ1dHRvbj5zKSBpbiBpdFxuICAgICAgICAgICAgdGFiQnV0dG9uc1tpbmRleF0uaW5kZXggPSBpbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIGEgdGFiIGlzIGNsaWNrZWQsIGFjdGl2YXRlVGFiIGlzIGZpcmVkIHRvIGFjdGl2YXRlIGl0XG4gICAgICAgICAgZnVuY3Rpb24gY2xpY2tFdmVudExpc3RlbmVyKGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHRhYiA9IGV2ZW50RWxlbWVudC50YXJnZXQ7XG4gICAgICAgICAgICBhY3RpdmF0ZVRhYih0YWIsIGZhbHNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIYW5kbGUga2V5ZG93biBvbiB0YWJzXG4gICAgICAgICAgZnVuY3Rpb24ga2V5ZG93bkV2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnRFbGVtZW50LmtleUNvZGU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgIGNhc2Uga2V5cy5lbmQ6XG4gICAgICAgICAgICAgICAgZXZlbnRFbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGVUYWIodGFiQnV0dG9uc1t0YWJCdXR0b25zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBrZXlzLmhvbWU6XG4gICAgICAgICAgICAgICAgZXZlbnRFbGVtZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYWN0aXZhdGVUYWIodGFiQnV0dG9uc1swXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGFuZGxlIGtleXVwIG9uIHRhYnNcbiAgICAgICAgICBmdW5jdGlvbiBrZXl1cEV2ZW50TGlzdGVuZXIoZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gZXZlbnRFbGVtZW50LmtleUNvZGU7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgIGNhc2Uga2V5cy5sZWZ0OlxuICAgICAgICAgICAgICBjYXNlIGtleXMucmlnaHQ6XG4gICAgICAgICAgICAgICAgc3dpdGNoVGFiT25BcnJvd1ByZXNzKGV2ZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVUYWIodGFiLCBzZXRGb2N1cykge1xuICAgICAgICAgICAgc2V0Rm9jdXMgPSBzZXRGb2N1cyB8fCB0cnVlO1xuXG4gICAgICAgICAgICBkZWFjdGl2YXRlVGFicygpO1xuICAgICAgICAgICAgYWN0aXZhdGVBY2NvcmRpb24oKTtcblxuICAgICAgICAgICAgdGFiLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG5cbiAgICAgICAgICAgIHZhciBwYW5lbElkID0gdGFiLmdldEF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XG4gICAgICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYW5lbElkKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgICAgIHZhciBhY2NUaXRsZSA9IHBhbmVsLmNsb3Nlc3QoXCIud3N1LXRhYnNfX3BhbmVsLWlubmVyXCIpO1xuICAgICAgICAgICAgYWNjVGl0bGUuY2xhc3NMaXN0LmFkZChcIndzdS10YWJzLS1vcGVuXCIpO1xuXG4gICAgICAgICAgICBpZiAoc2V0Rm9jdXMpIHtcbiAgICAgICAgICAgICAgdGFiLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVhY3RpdmF0ZSBhbGwgdGFicyBhbmQgdGFiIHBhbmVsc1xuICAgICAgICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVUYWJzKCkge1xuICAgICAgICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKHRhYikge1xuICAgICAgICAgICAgICB0YWIuc2V0QXR0cmlidXRlKFwiYXJpYS1zZWxlY3RlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhYlBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW1vYmlsZVwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZGVza3RvcFwiKTtcbiAgICAgICAgICAgICAgcGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtY2xpY2tlZFwiKTtcblxuICAgICAgICAgICAgICB2YXIgYWNjVGl0bGUgPSBwYW5lbC5jbG9zZXN0KFwiLndzdS10YWJzX19wYW5lbC1pbm5lclwiKTtcbiAgICAgICAgICAgICAgaWYgKCBhY2NUaXRsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3c3UtdGFicy0tb3BlblwiKSApIHtcbiAgICAgICAgICAgICAgICBhY2NUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKFwid3N1LXRhYnMtLW9wZW5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFjdGl2YXRlIG1vYmlsZSBhY2NvcmRpb25zXG4gICAgICAgICAgZnVuY3Rpb24gYWN0aXZhdGVBY2NvcmRpb24oKSB7XG4gICAgICAgICAgICBhY2NCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oYWNjQnV0dG9uKSB7XG4gICAgICAgICAgICAgIGlmICggYWNjQnV0dG9uLmdldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIikgPT09IFwiZmFsc2VcIiApIHtcbiAgICAgICAgICAgICAgICBhY2NCdXR0b24uc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRWl0aGVyIGZvY3VzIHRoZSBuZXh0LCBwcmV2aW91cywgZmlyc3QsIG9yIGxhc3QgdGFiXG4gICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIGtleSBwcmVzc2VkXG4gICAgICAgICAgZnVuY3Rpb24gc3dpdGNoVGFiT25BcnJvd1ByZXNzKGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIHByZXNzZWQgPSBldmVudEVsZW1lbnQua2V5Q29kZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJCdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhYkJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjaGVja1RhYkZvY3VzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbltwcmVzc2VkXSkge1xuICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnRFbGVtZW50LnRhcmdldDtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldC5pbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkJ1dHRvbnNbdGFyZ2V0LmluZGV4ICsgZGlyZWN0aW9uW3ByZXNzZWRdXSkge1xuICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uc1t0YXJnZXQuaW5kZXggKyBkaXJlY3Rpb25bcHJlc3NlZF1dLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLmxlZnQgfHwgcHJlc3NlZCA9PT0ga2V5cy51cCkge1xuICAgICAgICAgICAgICAgICAgZm9jdXNMYXN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVzc2VkID09PSBrZXlzLnJpZ2h0IHx8IHByZXNzZWQgPT0ga2V5cy5kb3duKSB7XG4gICAgICAgICAgICAgICAgICBmb2N1c0ZpcnN0VGFiKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZnVuY3Rpb24gZm9jdXNGaXJzdFRhYigpIHtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnNbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBmb2N1c0xhc3RUYWIoKSB7XG4gICAgICAgICAgICB0YWJCdXR0b25zW3RhYkJ1dHRvbnMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmdW5jdGlvbiBjaGVja1RhYkZvY3VzKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIGZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBmb2N1c2VkKSB7XG4gICAgICAgICAgICAgIGFjdGl2YXRlVGFiKHRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tNb2JpbGUoKSB7XG4gICAgbGV0IHRhYmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndzdS10YWJzX190YWJsaXN0XCIpO1xuXG5cdFx0bGV0IHRhYmxpc3REaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFibGlzdCk7XG5cbiAgICBpZiAoICF0YWJsaXN0RGlzcGxheS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09IFwibm9uZVwiICkge1xuXHRcdFx0dGhpcy50YWJzRGVza3RvcCgpO1xuXHRcdH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdzdVRhYnM7XG4iLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbXlUaW1lb3V0ID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgICAgICAgICAgfSwgMzAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbCcpWzBdIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiAoIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS1pcy1vcGVuJykgKSB8fCBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsOyAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0IHdzdURyb3Bkb3duTW9kYWwgZnJvbSBcIi4uL2VsZW1lbnRzL2Ryb3Bkb3duLW1vZGFsL19kcm9wZG93bi1tb2RhbFwiO1xyXG5pbXBvcnQgV3N1bmF2aWdhdGlvblNpdGUgZnJvbSAnLi4vbW9kdWxlcy9kZXByZWNhdGVkX25hdmlnYXRpb24tc2l0ZS9fbmF2aWdhdGlvbi1zaXRlJztcclxuaW1wb3J0IFdzdUhlYWRlckdsb2JhbCBmcm9tIFwiLi4vbW9kdWxlcy9oZWFkZXItZ2xvYmFsL19oZWFkZXItZ2xvYmFsXCI7XHJcbmltcG9ydCBXc3VBY2NvcmRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHRcIjtcclxuaW1wb3J0IFdzdUNvbGxhcHNhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9jb2xsYXBzYWJsZS9zY3JpcHRcIjtcclxuaW1wb3J0IFdzdU1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIGZyb20gXCIuLi9tb2R1bGVzL25hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwgZnJvbSAnLi4vYW5pbWF0aW9ucy9zbGlkZS9fc2NyaXB0JztcclxuaW1wb3J0IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF9uYXZpZ2F0aW9uLWhvcml6b250YWwvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VWaWRlb0ZyYW1lIGZyb20gJy4uL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VGFicyBmcm9tICcuLi9jb21wb25lbnRzL3RhYnMvX3NjcmlwdCc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3Qgd3N1ID0ge1xyXG4gICAgdmVydGljYWxOYXZpdGF0aW9uOiBuZXcgV3N1bmF2aWdhdGlvblNpdGUoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlVmVydGljYWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsKCksXHJcbiAgICBuYXZpZ2F0aW9uU2l0ZUhvcml6b250YWw6IG5ldyBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwoKSxcclxuICAgIGhlYWRlckdsb2JhbDogbmV3IFdzdUhlYWRlckdsb2JhbCgpLFxyXG4gICAgYWNjb3JkaW9uOiBuZXcgV3N1QWNjb3JkaW9uKCksXHJcbiAgICBjb2xsYXBzYWJsZTogbmV3IFdzdUNvbGxhcHNhYmxlKCksXHJcbiAgICBtZW51OiBuZXcgV3N1TWVudSgpLFxyXG4gICAgYnV0dG9uOiBuZXcgV3N1QnV0dG9uKCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcbiAgICB0YWJzOiBuZXcgV3N1VGFicygpLFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=