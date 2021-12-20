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

        if (event.target.classList.contains('wsu-video-frame--action-pause-background')) {
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
//import wsuDropdownModal from "../elements/dropdown-modal/_dropdown-modal";









var wsu = {
  verticalNavitation: new _modules_deprecated_navigation_site_navigation_site__WEBPACK_IMPORTED_MODULE_0__.default(),
  navigationSiteVertical: new _modules_navigation_site_vertical_script__WEBPACK_IMPORTED_MODULE_5__.default(),
  navigationSiteHorizontal: new _components_experimental_navigation_horizontal_script__WEBPACK_IMPORTED_MODULE_7__.default(),
  headerGlobal: new _modules_header_global_header_global__WEBPACK_IMPORTED_MODULE_1__.default(),
  accordion: new _components_accordion_script__WEBPACK_IMPORTED_MODULE_2__.default(),
  collapsable: new _components_experimental_collapsable_script__WEBPACK_IMPORTED_MODULE_3__.default(),
  menu: new _components_menu_script__WEBPACK_IMPORTED_MODULE_4__.default(),
  animations: {//submenuSlideVertical: new WsuAnimateSubmenuSlideVertical(),
  },
  videoFrame: new _components_experimental_video_frame_script__WEBPACK_IMPORTED_MODULE_8__.default()
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1U2xpZGVEb3duLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvdXBkYXRlQXJpYUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy93c3VNZW51RXhwYW5kLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9hbmltYXRpb25zL3NsaWRlL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX2NvbGxhcHNhYmxlL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpbWVudGFsX3ZpZGVvLWZyYW1lL19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2NvbXBvbmVudHMvbWVudS9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL2RlcHJlY2F0ZWRfbmF2aWdhdGlvbi1zaXRlL19uYXZpZ2F0aW9uLXNpdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy93c3UtZGVzaWduLXN5c3RlbS5qcyJdLCJuYW1lcyI6WyJhcmlhVXBkYXRlIiwiYWN0aW9uIiwic2VsZWN0b3IiLCJ0b2dnbGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpIiwiaGFzQXR0cmlidXRlIiwicmVnZXgiLCJhY3Rpb25MYWJlbCIsImxhYmVsIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVwbGFjZSIsImFyaWFVcGRhdGVFbGVtZW50IiwiZWxlbWVudEdldCIsInBhcmVudCIsImVsZW1lbnRDbGFzcyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImxlbmd0aCIsImVsZW1lbnRHZXRDbG9zZXN0IiwicGFyZW50Q2xhc3MiLCJjbG9zZXN0IiwiZWxlbWVudEdldFNpYmxpbmdzIiwic2libGluZ3MiLCJzaWJsaW5nIiwicGFyZW50Tm9kZSIsImZpcnN0Q2hpbGQiLCJub2RlVHlwZSIsInB1c2giLCJuZXh0U2libGluZyIsImtleURvd25FdmVudCIsInByb3BzIiwiZG9tRXZlbnQiLCJrZXkiLCJpbkNsYXNzIiwiZXZlbnRFbGVtZW50IiwidGFyZ2V0IiwiZXZlbnRLZXkiLCJFbGVtZW50IiwicHJvdG90eXBlIiwidG9nZ2xlQXJpYSIsIndyYXBwZXIiLCJ0b2dnbGVCeUNsYXNzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSIsInRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4iLCJpc0FuaW1hdGVkIiwiYWN0aW9uUHJlZml4IiwiYXJpYUxhYmVsRWxlbWVudCIsInRvZ2dsZUhlaWdodCIsInRvZ2dsZUFuaW1hdGluZyIsInRvZ2dsZUxhYmVsIiwiYWRkIiwicmVtb3ZlIiwiYW5pbWF0ZWREdXJhdGlvbiIsImFuaW1hdGVDbGFzcyIsImFuaW1hdGVIZWlnaHQiLCJjaGlsZEVsZW1lbnQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJzdHlsZSIsIm1heEhlaWdodCIsInRvZ2dsZVNob3VsZCIsImNsaWNrQ2xhc3MiLCJjaGVja1BhcmVudCIsImNoZWNrU2libGluZyIsImNoZWNrRW1wdHlMaW5rIiwicGFyZW50RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzRXhwYW5kZWQiLCJleHBhbmRlZFRleHQiLCJjb2xsYXBzZWRUZXh0IiwiY29uc29sZSIsImxvZyIsIlJlZ0V4cCIsImlzRXhwYW5kaW5nIiwiaGVpZ2h0UGFkZGluZyIsImNoaWxkRWxlbWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsIndzdUFuaW1hdGVTbGlkZURvd24iLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInBhcnNlSW50Iiwid3N1QW5pbWF0ZVNsaWRlVXAiLCJjYWxsYmFjayIsImRlbGF5VGltZXIiLCJ3c3VBcmlhRXhwYW5kZWQiLCJ2YWx1ZSIsIndzdUFyaWFJc0V4cGFuZGVkIiwid3N1Q2xhc3NBZGQiLCJ3c3VDbGFzc1JlbW92ZSIsIndzdUNsYXNzVG9nZ2xlIiwid3N1R2V0RWxlbWVudEhlaWdodCIsImRpc3BsYXkiLCJoZWlnaHQiLCJ3c3VTbGlkZURvd24iLCJ0aW1pbmciLCJhcmlhRWxlbWVudCIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwidXBkYXRlQXJpYUVsZW1lbnQiLCJ3c3VNZW51RXhwYW5kVXAiLCJuYXZJdGVtIiwic3ViTWVudSIsImxhc3RFbGVtZW50Q2hpbGQiLCJ3c3VNZW51RXhwYW5kRG93biIsIndzdU1lbnVFeHBhbmRUb2dnbGUiLCJzaG91bGRFeHBhbmQiLCJXc3VBbmltYXRlU3VibWVudVNsaWRlVmVydGljYWwiLCJhdHRzIiwiaW5pdCIsImJpbmRFdmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tFdmVudHMiLCJiaW5kIiwiZXZlbnQiLCJuYXZFbGVtZW50Iiwic2hvdWxkQ2xvc2UiLCJlcnJvciIsIldzdUFjY29yZGlvbiIsIm9wZW5DbGFzcyIsImFjY29yZGlvbkVsZW1lbnQiLCJhY2NvcmRpb25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsIldzdUNvbGxhcHNhYmxlIiwid3JhcHBlckNsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJ0b2dnbGVDbGFzcyIsImNvbnRlbnRDbGFzcyIsInByZXZlbnREZWZhdWx0IiwiV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwia2V5RG93bkV2ZW50cyIsImNsb3NlIiwib3BlbiIsIm5hdiIsImJvZHkiLCJXc3VWaWRlb0ZyYW1lIiwic2V0VmlkZW9TaXplIiwid2luZG93IiwicmVzaXplIiwicGxheVZpZGVvIiwicGF1c2VCYWNrZ3JvdW5kVmlkZW8iLCJ2aWRlb1dyYXBwZXIiLCJ2aWRlbyIsInZpZGVvU3JjIiwiZGF0YXNldCIsInBsYXkiLCJwbGF5ZXIiLCJWaW1lbyIsIlBsYXllciIsInBhdXNlIiwidmlkZW9zIiwiQXJyYXkiLCJmcm9tIiwiaXNXaWRlVmlkZW8iLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwiV3N1TWVudSIsImNsb3NlU2libGluZ3MiLCJXc3VuYXZpZ2F0aW9uU2l0ZSIsImNsb3NlQ2xhc3MiLCJhbmltYXRpbmdDbGFzcyIsImFuaW1hdGlvblRpbWluZyIsIldzdUhlYWRlckdsb2JhbCIsIldzdU5hdmlnYXRpb25TaXRlVmVydGljYWwiLCJ3c3UiLCJ2ZXJ0aWNhbE5hdml0YXRpb24iLCJuYXZpZ2F0aW9uU2l0ZVZlcnRpY2FsIiwibmF2aWdhdGlvblNpdGVIb3Jpem9udGFsIiwiaGVhZGVyR2xvYmFsIiwiYWNjb3JkaW9uIiwiY29sbGFwc2FibGUiLCJtZW51IiwiYW5pbWF0aW9ucyIsInZpZGVvRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUVDLE1BQUYsRUFBVUMsUUFBVixFQUF3QjtBQUV2QyxNQUFJQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMkJILFFBQTNCLENBQWQ7QUFFQUMsU0FBTyxDQUFDRyxPQUFSLENBQ0ksVUFBRUMsT0FBRixFQUFXQyxDQUFYLEVBQWtCO0FBRWQsUUFBS0QsT0FBTyxDQUFDRSxZQUFSLENBQXNCLFlBQXRCLENBQUwsRUFBNEM7QUFFeEMsVUFBSUMsS0FBSyxHQUFLLFVBQVVULE1BQVosR0FBdUIsT0FBdkIsR0FBaUMsUUFBN0M7QUFFQSxVQUFJVSxXQUFXLEdBQUssVUFBVVYsTUFBWixHQUF1QixPQUF2QixHQUFpQyxNQUFuRDtBQUVBLFVBQUlXLEtBQUssR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXNCLFlBQXRCLENBQVosQ0FOd0MsQ0FReEM7QUFFQTs7QUFFQU4sYUFBTyxDQUFDTyxZQUFSLENBQXNCLFlBQXRCLEVBQW9DRixLQUFLLENBQUNHLE9BQU4sQ0FBZUwsS0FBZixFQUFzQkMsV0FBdEIsQ0FBcEM7QUFFSDtBQUVKLEdBbkJMO0FBc0JILENBMUJEOztBQTRCQSxJQUFNSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUVULE9BQUYsRUFBV04sTUFBWCxFQUF1QjtBQUU3QyxNQUFLTSxPQUFPLENBQUNFLFlBQVIsQ0FBc0IsWUFBdEIsQ0FBTCxFQUE0QztBQUV4QyxRQUFJQyxLQUFLLEdBQUssVUFBVVQsTUFBWixHQUF1QixPQUF2QixHQUFpQyxRQUE3QztBQUVBLFFBQUlVLFdBQVcsR0FBSyxVQUFVVixNQUFaLEdBQXVCLE9BQXZCLEdB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eEIsQ0FBaUMsdUNBQWpDLENBQUYsSUFBaUYsS0FBeEY7QUFFSDs7Ozs7O0FBSUwsaUVBQWUySCx5QkFBZixFOzs7Ozs7VUM1SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsSUFBTUMsR0FBRyxHQUFHO0FBQ1JDLG9CQUFrQixFQUFFLElBQUlQLHdGQUFKLEVBRFo7QUFFUlEsd0JBQXNCLEVBQUUsSUFBSUgsNkVBQUosRUFGaEI7QUFHUkksMEJBQXdCLEVBQUUsSUFBSXZDLDBGQUFKLEVBSGxCO0FBSVJ3QyxjQUFZLEVBQUUsSUFBSU4seUVBQUosRUFKTjtBQUtSTyxXQUFTLEVBQUUsSUFBSXBELGlFQUFKLEVBTEg7QUFNUnFELGFBQVcsRUFBRSxJQUFJaEQsZ0ZBQUosRUFOTDtBQU9SaUQsTUFBSSxFQUFFLElBQUlmLDREQUFKLEVBUEU7QUFRUmdCLFlBQVUsRUFBRSxDQUNSO0FBRFEsR0FSSjtBQVdSQyxZQUFVLEVBQUUsSUFBSXZDLGdGQUFKO0FBWEosQ0FBWixDIiwiZmlsZSI6ImJ1bmRsZXMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcmlhVXBkYXRlID0gKCBhY3Rpb24sIHNlbGVjdG9yICkgPT4ge1xyXG5cclxuICAgIGxldCB0b2dnbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKTtcclxuXHJcbiAgICB0b2dnbGVzLmZvckVhY2goXHJcbiAgICAgICAgKCBlbGVtZW50LCBpICkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlZ2V4ID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAvT3Blbi9pIDogL0Nsb3NlL2k7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KGFjdGlvbkxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCBsYWJlbC5yZXBsYWNlKCByZWdleCwgYWN0aW9uTGFiZWwgKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFyaWFVcGRhdGVFbGVtZW50ID0gKCBlbGVtZW50LCBhY3Rpb24gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICkgKSB7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9ICggJ29wZW4nID09IGFjdGlvbiApID8gL09wZW4vaSA6IC9DbG9zZS9pO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uTGFiZWwgPSAoICdvcGVuJyA9PSBhY3Rpb24gKSA/ICdDbG9zZScgOiAnT3Blbic7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcgKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbkxhYmVsICkgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCwgYXJpYVVwZGF0ZSB9OyIsImNvbnN0IGVsZW1lbnRHZXQgPSAoIHsgcGFyZW50ID0gZmFsc2UsIGVsZW1lbnRDbGFzcyA9IGZhbHNlIH0gKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Q2xhc3MgKSB7XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IHBhcmVudCA/IHBhcmVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBlbGVtZW50Q2xhc3MgKSA6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGVsZW1lbnRDbGFzcyApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICggMCA8IGVsZW1lbnRzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH0gXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRDbG9zZXN0ID0gKCBlbGVtZW50LCBwYXJlbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3QoICcuJyArIHBhcmVudENsYXNzICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGVsZW1lbnRHZXRTaWJsaW5ncyA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICAvLyBTZXR1cCBzaWJsaW5ncyBhcnJheSBhbmQgZ2V0IHRoZSBmaXJzdCBzaWJsaW5nXHJcblx0bGV0IHNpYmxpbmdzID0gW107XHJcblx0bGV0IHNpYmxpbmcgPSBlbGVtZW50LnBhcmVudE5vZGUuZmlyc3RDaGlsZDtcclxuXHJcblx0Ly8gTG9vcCB0aHJvdWdoIGVhY2ggc2libGluZyBhbmQgcHVzaCB0byB0aGUgYXJyYXlcclxuXHR3aGlsZSAoIHNpYmxpbmcgKSB7XHJcblxyXG5cdFx0aWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbWVudCkge1xyXG5cclxuXHRcdFx0c2libGluZ3MucHVzaChzaWJsaW5nKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2libGluZyA9IHNpYmxpbmcubmV4dFNpYmxpbmc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNpYmxpbmdzO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZWxlbWVudEdldCwgZWxlbWVudEdldENsb3Nlc3QsIGVsZW1lbnRHZXRTaWJsaW5ncyB9IiwiY29uc3Qga2V5RG93bkV2ZW50ID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQgeyBcclxuICAgICAgICBkb21FdmVudCA9IGZhbHNlLFxyXG4gICAgICAgIGtleSAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgaW5DbGFzcyAgPSBmYWxzZVxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggISBkb21FdmVudCB8fCAhIGtleSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXZlbnRFbGVtZW50ID0gZG9tRXZlbnQudGFyZ2V0O1xyXG4gICAgbGV0IGV2ZW50S2V5ICAgICA9IGRvbUV2ZW50LmtleTtcclxuXHJcbiAgICBpZiAoIGtleSA9PT0gZXZlbnRLZXkgJiYgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcclxuXHJcbiAgICAgICAgaWYgKCBpbkNsYXNzICYmIGV2ZW50RWxlbWVudC5jbG9zZXN0KCAnLicgKyBpbkNsYXNzICkgKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgfSBcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsga2V5RG93bkV2ZW50IH07IiwiY29uc3QgdG9nZ2xlQXJpYSA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyID0gZmFsc2UsXHJcbiAgICAgICAgdG9nZ2xlQnlDbGFzcyA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIC8vIElmIGVsZW1lbnQgZXhpc3RzXHJcbiAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggdG9nZ2xlQnlDbGFzcyApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIHRvZ2dsZUJ5Q2xhc3MgKSApIHtcclxuXHRcdFx0XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggcHJvcHMgKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuKCBwcm9wcyApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggd3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSAmJiAnZmFsc2UnICE9IHdyYXBwZXIuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHByb3BzICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiggcHJvcHMgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVBcmlhRXhwYW5kZWRPcGVuID0gKCBwcm9wcyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIHdyYXBwZXIgICAgICAgICAgPSBmYWxzZSxcclxuICAgICAgICBpc0FuaW1hdGVkICAgICAgID0gdHJ1ZSxcclxuICAgICAgICBhY3Rpb25QcmVmaXggICAgID0gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsRWxlbWVudCA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuXHJcbiAgICAvLyBJZiBlbGVtZW50IGV4aXN0c1xyXG4gICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICB0b2dnbGVIZWlnaHQoIHByb3BzLCB0cnVlICk7XHJcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW5nKCBwcm9wcyApO1xyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgdHJ1ZSApO1xyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmICggYWN0aW9uUHJlZml4ICkge1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgd3JhcHBlciAgICAgICAgICA9IGZhbHNlLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFjdGlvblByZWZpeCAgICAgPSBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgLy8gSWYgZWxlbWVudCBleGlzdHNcclxuICAgIGlmICggd3JhcHBlciApIHtcclxuXHJcbiAgICAgICAgdG9nZ2xlSGVpZ2h0KCBwcm9wcywgZmFsc2UgKTtcclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcblxyXG4gICAgICAgIHRvZ2dsZUxhYmVsKCBwcm9wcywgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgaWYgKCBhY3Rpb25QcmVmaXggKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCggYWN0aW9uUHJlZml4ICsgJy0tY2xvc2VkJyApO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGFjdGlvblByZWZpeCArICctLW9wZW5uZWQnICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7IFxyXG5cclxuICAgICAgICB0b2dnbGVBbmltYXRpbmcoIHByb3BzICk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHRvZ2dsZUFuaW1hdGluZyA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICB3cmFwcGVyICAgICAgICAgID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZWREdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBhbmltYXRlQ2xhc3MgICAgID0gJ3dzdS1hbmltYXRpbmcnLFxyXG4gICAgICAgIGlzQW5pbWF0ZWQgICAgICAgPSB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGVIZWlnaHQgICAgPSBmYWxzZSxcclxuICAgICAgICBjaGlsZEVsZW1lbnQgICAgID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHM7XHJcblxyXG4gICAgaWYgKCBpc0FuaW1hdGVkICYmIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGlmICggd3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoIGFuaW1hdGVDbGFzcyApICkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggYW5pbWF0ZUNsYXNzICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggYW5pbWF0ZUhlaWdodCAmJiBjaGlsZEVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZER1cmF0aW9uXHJcbiAgICAgICAgICAgICk7XHJcbiAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRpbWVyO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGFuaW1hdGVDbGFzcyApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB0b2dnbGVTaG91bGQgPSAoIHByb3BzICkgPT4ge1xyXG5cclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV2ZW50RWxlbWVudCA9IGZhbHNlLCBcclxuICAgICAgICBjbGlja0NsYXNzID0gZmFsc2UsXHJcbiAgICAgICAgY2hlY2tQYXJlbnQgPSBmYWxzZSxcclxuICAgICAgICBjaGVja1NpYmxpbmcgPSBmYWxzZSxcclxuICAgICAgICBjaGVja0VtcHR5TGluayA9IGZhbHNlLFxyXG4gICAgfSA9IHByb3BzO1xyXG5cclxuICAgIGlmICggY2xpY2tDbGFzcyAmJiBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrRW1wdHlMaW5rICYmIGV2ZW50RWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2hyZWYnKSAmJiAnIycgPT09IGV2ZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgfSBlbHNlIGlmICggY2hlY2tQYXJlbnQgJiYgZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBjbGlja0NsYXNzICkgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoIGNoZWNrU2libGluZyAmJiBldmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyggY2xpY2tDbGFzcyApICkge1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUxhYmVsID0gKCBwcm9wcywgaXNFeHBhbmRlZCApID0+IHtcclxuICAgIGxldCB7IFxyXG4gICAgICAgIGV4cGFuZGVkVGV4dCA9ICdDbG9zZScsIFxyXG4gICAgICAgIGNvbGxhcHNlZFRleHQgPSAnT3BlbicsIFxyXG4gICAgICAgIGFyaWFMYWJlbEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zb2xlLmxvZyggcHJvcHMgKTtcclxuXHJcblxyXG4gICAgaWYgKCBhcmlhTGFiZWxFbGVtZW50ICYmIGFyaWFMYWJlbEVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgKSB7XHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IGFyaWFMYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24gPSAoIGlzRXhwYW5kZWQgKSA/IGV4cGFuZGVkVGV4dCA6IGNvbGxhcHNlZFRleHQ7XHJcblxyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoIGV4cGFuZGVkVGV4dCArICd8JyArIGNvbGxhcHNlZFRleHQsIFwiZ1wiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlZ2V4ICk7XHJcblxyXG4gICAgICAgIGxhYmVsID0gbGFiZWwucmVwbGFjZSggcmVnZXgsIGFjdGlvbiApO1xyXG5cclxuICAgICAgICBhcmlhTGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCBsYWJlbCApO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHRvZ2dsZUhlaWdodCA9ICggcHJvcHMsIGlzRXhwYW5kaW5nICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hpbGRFbGVtZW50ID0gZmFsc2UsXHJcbiAgICAgICAgYW5pbWF0ZUhlaWdodCA9IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodFBhZGRpbmcgPSAyMCxcclxuICAgIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIGNoaWxkRWxlbWVudCAmJiBhbmltYXRlSGVpZ2h0ICkge1xyXG5cclxuICAgICAgICBsZXQgY2hpbGRFbGVtZW50SGVpZ2h0ID0gKCBjaGlsZEVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyApICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjaGlsZEVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gY2hpbGRFbGVtZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoICEgaXNFeHBhbmRpbmcgKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIDI1XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgdG9nZ2xlQXJpYSwgdG9nZ2xlQXJpYUV4cGFuZGVkT3BlbiwgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UsIHRvZ2dsZUFuaW1hdGluZywgdG9nZ2xlU2hvdWxkIH07IiwiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTsiLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsIlxyXG5jb25zdCB3c3VHZXRFbGVtZW50SGVpZ2h0ID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudCApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IHdzdVNsaWRlRG93biA9ICggcHJvcHMgKSA9PiB7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBlbGVtZW50ID0gZmFsc2UsIC8vIEVsZW1lbnQgdG8gZXhwYW5kXHJcbiAgICAgICAgaGVpZ2h0UGFkZGluZyA9IDIwLCAvLyBFeHRyYSBoaWVnaHQganVzdCBpbiBjYXNlXHJcbiAgICAgICAgdGltaW5nID0gMTUwLCAvLyBob3cgbG9uZyB3aWxsIHRoZSBhbmltYXRpb24gcnVuIFxyXG4gICAgICAgIGFyaWFFbGVtZW50ID0gZmFsc2UsXHJcbiAgICB9ID0gcHJvcHNcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdGFydEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoIHN0YXJ0SGVpZ2h0IDwgMTAgKSB7IC8vIGFzc3VtZSBjbG9zZWRcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3N1LWFuaW1hdGluZycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVuZEhlaWdodCA9IHdzdUdldEVsZW1lbnRIZWlnaHQoIGVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbmRIZWlnaHQgKyBoZWlnaHRQYWRkaW5nICsgJ3B4JyApO1xyXG5cclxuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBhcmlhRWxlbWVudCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtYW5pbWF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgfSwgdGltaW5nICk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dzdS1hbmltYXRpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbmRIZWlnaHQgPSB3c3VHZXRFbGVtZW50SGVpZ2h0KCBlbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZW5kSGVpZ2h0ICsgaGVpZ2h0UGFkZGluZyArICdweCcgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBjc3MgZG9lc24ndCByZWdpc3RlciBpdC5cclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAgMjVcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggYXJpYUVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApOyBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1hbmltYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB9LCB0aW1pbmcgKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdzdVNsaWRlRG93bjsiLCJjb25zdCB1cGRhdGVBcmlhRWxlbWVudCA9ICggYWN0aW9uLCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJyApICkge1xyXG5cclxuICAgICAgICBsZXQgcmVnZXggPSAoICdPcGVuJyA9PSBhY3Rpb24gKSA/IC9PcGVuL2kgOiAvQ2xvc2UvaTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbkxhYmVsID0gKCAnT3BlbicgPT0gYWN0aW9uICkgPyAnQ2xvc2UnIDogJ09wZW4nO1xyXG5cclxuICAgICAgICBsZXQgbGFiZWwgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnICk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1sYWJlbCcsIGxhYmVsLnJlcGxhY2UoIHJlZ2V4LCBhY3Rpb25MYWJlbCApICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQXJpYUVsZW1lbnQ7IiwiY29uc3Qgd3N1TWVudUV4cGFuZFVwID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgLy9zdWJNZW51LnN0eWxlLm1heEhlaWdodCA9IDA7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZJdGVtLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgMTVcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdU1lbnVFeHBhbmREb3duID0gKCBuYXZJdGVtLCBhcmdzID0ge30gKSA9PiB7XHJcblxyXG4gICAgbGV0IHN1Yk1lbnUgPSBuYXZJdGVtLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAoICggc3ViTWVudS5zY3JvbGxIZWlnaHQgKyAyMCApICsgJ3B4JyApO1xyXG5cclxuICAgIG5hdkl0ZW0uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgbWF4IGhlaWdodCBhZnRlciBhbmltYXRpb25cclxuICAgIGxldCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgNTAwXHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCB3c3VNZW51RXhwYW5kVG9nZ2xlID0gKCBuYXZJdGVtLCBhcmdzID0ge30gICkgPT4ge1xyXG5cclxuICAgIGlmICggc2hvdWxkRXhwYW5kKCBuYXZJdGVtICkgKSB7XHJcblxyXG4gICAgICAgIHdzdU1lbnVFeHBhbmREb3duKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnb3Blbic7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgd3N1TWVudUV4cGFuZFVwKCBuYXZJdGVtLCBhcmdzICk7XHJcblxyXG4gICAgICAgIHJldHVybiAnY2xvc2UnO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5jb25zdCBzaG91bGRFeHBhbmQgPSAoIG5hdkl0ZW0gKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuICggISBuYXZJdGVtLmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSB8fCAnZmFsc2UnID09IG5hdkl0ZW0uZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkgfHwgZmFsc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VNZW51RXhwYW5kVXAsIHdzdU1lbnVFeHBhbmRUb2dnbGUsIHdzdU1lbnVFeHBhbmREb3duICB9OyIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5cclxuY2xhc3MgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIC8qZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7Ki9cclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LWFuaW1hdGUtLXN1Ym1lbnUtdG9nZ2xlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsOyIsImltcG9ydCB7XHJcbiAgICB3c3VBcmlhRXhwYW5kZWQsXHJcbiAgICB3c3VBcmlhSXNFeHBhbmRlZCxcclxuICAgIHdzdUNsYXNzQWRkLFxyXG4gICAgd3N1Q2xhc3NSZW1vdmUsXHJcbiAgICB3c3VBbmltYXRlU2xpZGVEb3duLFxyXG4gICAgd3N1QW5pbWF0ZVNsaWRlVXAsXHJcbn0gZnJvbSAnLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscyc7XHJcblxyXG5jbGFzcyBXc3VBY2NvcmRpb24ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9wZW5DbGFzcyA9ICd3c3UtYWNjb3JkaW9uLS1vcGVuJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQnY2xpY2snLCBcclxuXHRcdFx0dGhpcy5jbGlja0V2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cclxuICAgICAgICAvKmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpOyovXHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHsgXHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtYWNjb3JkaW9uLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvbkVsZW1lbnQgPSBldmVudEVsZW1lbnQuY2xvc2VzdCgnLndzdS1hY2NvcmRpb24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhY2NvcmRpb25Db250ZW50ID0gYWNjb3JkaW9uRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWFjY29yZGlvbl9fY29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggd3N1QXJpYUlzRXhwYW5kZWQoIGV2ZW50RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgZmFsc2UgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd3N1QW5pbWF0ZVNsaWRlVXAoIGFjY29yZGlvbkNvbnRlbnQsIHt9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdzdUNsYXNzUmVtb3ZlKCBhY2NvcmRpb25FbGVtZW50LCB0aGlzLm9wZW5DbGFzcyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQoIGV2ZW50RWxlbWVudCwgdHJ1ZSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VBbmltYXRlU2xpZGVEb3duKCBhY2NvcmRpb25Db250ZW50LCB7fSApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VDbGFzc0FkZCggYWNjb3JkaW9uRWxlbWVudCwgdGhpcy5vcGVuQ2xhc3MgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VBY2NvcmRpb247ICIsImltcG9ydCB7IGVsZW1lbnRHZXQsIGVsZW1lbnRHZXRDbG9zZXN0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVTaG91bGQgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy90b2dnbGVcIjtcclxuaW1wb3J0IHt3c3VTbGlkZURvd259IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdXRpbGl0aWVzJztcclxuXHJcbmNsYXNzIFdzdUNvbGxhcHNhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1jb2xsYXBzYWJsZS0tdG9nZ2xlJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdjb250ZW50Q2xhc3MnKSApID8gYXR0cy5jb250ZW50Q2xhc3MgOiAnd3N1LWNvbGxhcHNhYmxlLS1jb250ZW50JztcclxuICAgICAgICB0aGlzLmFjdGlvblByZWZpeCAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhY3Rpb25QcmVmaXgnKSApID8gYXR0cy5hY3Rpb25QcmVmaXggOiAnd3N1LWNvbGxhcHNhYmxlJztcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkgeyBcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIENsb3NlIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMudG9nZ2xlQ2xhc3MsIGNoZWNrUGFyZW50OiB0cnVlIH0pICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSBlbGVtZW50R2V0Q2xvc2VzdCggZXZlbnRFbGVtZW50LCB0aGlzLndyYXBwZXJDbGFzcyApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50R2V0ICggeyBwYXJlbnQ6IHdyYXBwZXIsIGVsZW1lbnRDbGFzczogdGhpcy5jb250ZW50Q2xhc3MgfSApXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB3cmFwcGVyICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3c3VTbGlkZURvd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhRWxlbWVudDogd3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VDb2xsYXBzYWJsZTsiLCJpbXBvcnQgeyBhcmlhVXBkYXRlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvYXJpYVVwZGF0ZVwiOyBcclxuXHJcbmNsYXNzIFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFVcGRhdGUoICdDbG9zZScsICcud3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS10b2dnbGUnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYVVwZGF0ZSggJ09wZW4nLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1vcGVuJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDbG9zZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiggZXZlbnRFbGVtZW50ID0gZmFsc2UgKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coIG5hdiApO1xyXG5cclxuICAgICAgICBpZiAoICEgbmF2ICkgcmV0dXJuO1xyXG5cclxuICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIGV2ZW50RWxlbWVudCA9IGZhbHNlICkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSByZXR1cm47XHJcblxyXG4gICAgICAgIG5hdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS1ob3Jpem9udGFsLS1pcy1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3UtbmF2aWdhdGlvbi1zaXRlLWhvcml6b250YWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0tdG9nZ2xlJyApOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoKSB7XHJcblxyXG4gICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtbmF2aWdhdGlvbi1ob3Jpem9udGFsJylbMF0gfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICggISBuYXYgKSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuICggZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtaG9yaXpvbnRhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVIb3Jpem9udGFsOyAiLCJjbGFzcyBXc3VWaWRlb0ZyYW1lIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLnNldFZpZGVvU2l6ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHQoIGV2ZW50ICkgPT4geyB0aGlzLmNsaWNrRXZlbnRzKCBldmVudCkgfSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0XHQncmVzaXplJywgXHJcblx0XHRcdCgpID0+IHsgdGhpcy5yZXNpemUoKSB9LFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRWaWRlb1NpemUoKTtcclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wbGF5JyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtdmlkZW8tZnJhbWUtLWFjdGlvbi1wYXVzZS1iYWNrZ3JvdW5kJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VCYWNrZ3JvdW5kVmlkZW8oIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICk7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBsYXlWaWRlbyggdmlkZW9XcmFwcGVyICkge1xyXG5cclxuICAgICAgICBpZiAoICEgdmlkZW9XcmFwcGVyLmhhc0F0dHJpYnV0ZSgnZGF0YS1wbGF5JykgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZpZGVvU3JjID0gdmlkZW9XcmFwcGVyLmRhdGFzZXQucGxheTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZSgnc3JjJywgdmlkZW9TcmMgKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8nKTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS12aWRlby1mcmFtZV9fdmlkZW8tYmFja2dyb3VuZCcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlQmFja2dyb3VuZFZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlbyA9IHZpZGVvV3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlby5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICB2aWRlbyA9IHZpZGVvWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoIHZpZGVvICk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRWaWRlb1NpemUoKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWRlb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3c3UtdmlkZW8tZnJhbWVfX3ZpZGVvLWJhY2tncm91bmQnKTtcclxuXHJcbiAgICAgICAgaWYgKCB2aWRlb3MubGVuZ3RoID4gMCApIHtcclxuXHJcbiAgICAgICAgICAgIEFycmF5LmZyb20oIHZpZGVvcyApLmZvckVhY2goICggdmlkZW8gKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvV3JhcHBlciA9IHZpZGVvLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0V2lkdGggKiAwLjU2MjUgKSArICdweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW8uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnN0eWxlLndpZHRoID0gKCB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0IC8gMC41NjI1ICkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzV2lkZVZpZGVvKCB2aWRlb1dyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoICggdmlkZW9XcmFwcGVyLm9mZnNldFdpZHRoICogMC41NjI1ICkgPiB2aWRlb1dyYXBwZXIub2Zmc2V0SGVpZ2h0ICk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1VmlkZW9GcmFtZTsgICIsImltcG9ydCB1cGRhdGVBcmlhRWxlbWVudCBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy91cGRhdGVBcmlhRWxlbWVudFwiO1xyXG5pbXBvcnQgeyBlbGVtZW50R2V0U2libGluZ3MgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy9lbGVtZW50XCI7XHJcblxyXG5jbGFzcyBXc3VNZW51IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2tleWRvd24nLCBcclxuXHRcdFx0dGhpcy5rZXlEb3duRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuICAgIGNsaWNrRXZlbnRzKCBldmVudCApIHtcclxuXHRcdFxyXG5cdFx0dHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBldmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUb2dnbGUgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggbmF2RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVBcmlhRWxlbWVudCggJ0Nsb3NlJywgZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnT3BlbicsIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3dzdS1tZW51LS1zdWJtZW51LWNsb3NlJyApICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuYXZFbGVtZW50ID0gZXZlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5zaG91bGRDbG9zZSggbmF2RWxlbWVudCApICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCBuYXZFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFyaWFFbGVtZW50KCAnQ2xvc2UnLCBldmVudEVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICB0aGlzLmNsb3NlU2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBuYXZFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gKCAoIHN1Yk1lbnUuc2Nyb2xsSGVpZ2h0ICsgMjAgKSArICdweCcgKTtcclxuXHJcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QuYWRkKCAnd3N1LWFuaW1hdGUtLXNsaWRlLWRvd24nICk7XHJcblxyXG4gICAgICAgIG5hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHRydWUgKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIG1heCBoZWlnaHQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc3ViTWVudS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnJlbW92ZSggJ3dzdS1hbmltYXRlLS1zbGlkZS1kb3duJyApO1xyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgNTAwXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIGxldCBzdWJNZW51ID0gbmF2RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgICAgICBzdWJNZW51LnN0eWxlLm1heEhlaWdodCA9ICggKCBzdWJNZW51LnNjcm9sbEhlaWdodCArIDIwICkgKyAncHgnICk7XHJcblxyXG4gICAgICAgIC8qIElmIHRoaXMgaGFwcGVucyB0b28gcXVpY2tseSBpdCBkb2Vzbid0IHdvcms/ICovXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvL25hdkVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIGZhbHNlICk7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5hZGQoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2RWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgZmFsc2UgKTtcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIDE1XHJcbiAgICAgICAgKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBtYXggaGVpZ2h0IGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoICd3c3UtYW5pbWF0ZS0tc2xpZGUtdXAnICk7XHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICA1MDBcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNpYmxpbmdzKCBuYXZFbGVtZW50ICkge1xyXG5cclxuICAgICAgICBsZXQgc2libGluZ3MgPSBlbGVtZW50R2V0U2libGluZ3MoIG5hdkVsZW1lbnQgKTtcclxuXHJcbiAgICAgICAgc2libGluZ3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc2hvdWxkQ2xvc2UoIGVsZW1lbnQgKSApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGVsZW1lbnQgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdWxkQ2xvc2UoIG5hdkVsZW1lbnQgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoIG5hdkVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICYmICd0cnVlJyA9PSBuYXZFbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHx8IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXc3VNZW51OyAiLCJpbXBvcnQgeyBlbGVtZW50R2V0IH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZWxlbWVudFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVBcmlhLCB0b2dnbGVTaG91bGQsIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4sIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvdG9nZ2xlXCI7XHJcbmltcG9ydCB7IGtleURvd25FdmVudCB9IGZyb20gJy4uLy4uLy4uL19hc3NldHMvanMvcGFydGlhbHMvZXZlbnRzJztcclxuXHJcbmNsYXNzIFdzdW5hdmlnYXRpb25TaXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggYXR0cyA9IHt9ICkge1xyXG5cclxuICAgICAgICB0aGlzLndyYXBwZXJDbGFzcyAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd3cmFwcGVyQ2xhc3MnKSApID8gYXR0cy53cmFwcGVyQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZSc7XHJcbiAgICAgICAgdGhpcy5jbG9zZUNsYXNzICAgICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnY2xvc2VDbGFzcycpICkgPyBhdHRzLmNsb3NlQ2xhc3MgOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tY2xvc2UnO1xyXG4gICAgICAgIHRoaXMub3BlbkNsYXNzICAgICAgICA9ICggYXR0cy5oYXNPd25Qcm9wZXJ0eSggJ29wZW5DbGFzcycpICkgPyBhdHRzLm9wZW5DbGFzcyA6ICd3c3UtbmF2aWdhdGlvbi1zaXRlLS1vcGVuJztcclxuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzICAgICAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICd0b2dnbGVDbGFzcycpICkgPyBhdHRzLnRvZ2dsZUNsYXNzIDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZSc7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpbmdDbGFzcyAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYW5pbWF0aW5nQ2xhc3MnKSApID8gYXR0cy5hbmltYXRpbmdDbGFzcyA6ICd3c3UtYW5pbWF0aW5nJztcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZyAgPSAoIGF0dHMuaGFzT3duUHJvcGVydHkoICdhbmltYXRpb25UaW1pbmcnKSApID8gYXR0cy5hbmltYXRpb25UaW1pbmcgOiAzMDA7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25QcmVmaXggICAgID0gKCBhdHRzLmhhc093blByb3BlcnR5KCAnYWN0aW9uUHJlZml4JykgKSA/IGF0dHMuYWN0aW9uUHJlZml4IDogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUnO1xyXG4gICAgICAgIHRoaXMudGltZXIgICAgICAgICAgICA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgQ2xvc2UgTmF2aWdhdGlvblxyXG4gICAgICAgICAgICBpZiAoIHRvZ2dsZVNob3VsZCggeyBldmVudEVsZW1lbnQ6IGV2ZW50RWxlbWVudCwgY2xpY2tDbGFzczogdGhpcy5jbG9zZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZENsb3NlKCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiB3cmFwcGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6IHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBPcGVuIE5hdmlnYXRpb25cclxuICAgICAgICAgICAgaWYgKCB0b2dnbGVTaG91bGQoIHsgZXZlbnRFbGVtZW50OiBldmVudEVsZW1lbnQsIGNsaWNrQ2xhc3M6IHRoaXMub3BlbkNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWFFeHBhbmRlZE9wZW4oIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgfSApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIFRvZ2dsZSBOYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgIGlmICggdG9nZ2xlU2hvdWxkKCB7IGV2ZW50RWxlbWVudDogZXZlbnRFbGVtZW50LCBjbGlja0NsYXNzOiB0aGlzLnRvZ2dsZUNsYXNzLCBjaGVja1BhcmVudDogdHJ1ZSB9KSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHdyYXBwZXIgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFyaWEoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXI6IHdyYXBwZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUJ5Q2xhc3M6IHRoaXMuYWN0aW9uUHJlZml4ICsgJy0tb3Blbm5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogdGhpcy5hY3Rpb25QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGV2ZW50RWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcbiAgICBrZXlEb3duRXZlbnRzKCBldmVudCApIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGlmICgga2V5RG93bkV2ZW50KCB7IGRvbUV2ZW50OiBldmVudCwga2V5OidFc2NhcGUnLCBpbkNsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyB9ICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlQXJpYUV4cGFuZGVkQ2xvc2UoIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlcjogICAgICAgICAgZWxlbWVudEdldCggeyBlbGVtZW50Q2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25QcmVmaXg6ICAgICB0aGlzLmFjdGlvblByZWZpeCxcclxuICAgICAgICAgICAgICAgICAgICBhcmlhTGFiZWxFbGVtZW50OiBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtLXRvZ2dsZScgfSApLCAgXHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0ICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1bmF2aWdhdGlvblNpdGU7IFxyXG4iLCJpbXBvcnQgeyB3c3VNZW51RXhwYW5kVG9nZ2xlIH0gZnJvbSBcIi4uLy4uLy4uL19hc3NldHMvanMvd3N1TWVudUV4cGFuZFwiO1xyXG5pbXBvcnQgeyBhcmlhVXBkYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL2FyaWFVcGRhdGVcIjsgXHJcblxyXG5jbGFzcyBXc3VIZWFkZXJHbG9iYWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBhdHRzID0ge30gKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciAgICAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdFx0J2NsaWNrJywgXHJcblx0XHRcdHRoaXMuY2xpY2tFdmVudHMuYmluZCggdGhpcyApLFxyXG5cdFx0XHRmYWxzZVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG4gICAgY2xpY2tFdmVudHMoIGV2ZW50ICkge1xyXG5cdFx0XHJcblx0XHR0cnkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGV2ZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgbGV0IG5hdkVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZ2dsZSBBY3Rpb25cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgd3N1TWVudUV4cGFuZFRvZ2dsZSggbmF2RWxlbWVudCApICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbWVudS1leHBhbmQtLWRvd24nICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd3N1TWVudUV4cGFuZERvd24oIG5hdkVsZW1lbnQgKTtcclxuICAgICAgICAgICAgICAgIGFyaWFVcGRhdGVFbGVtZW50KCBldmVudEVsZW1lbnQsICdvcGVuJyApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBldmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3N1LW1lbnUtZXhwYW5kLS11cCcgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3c3VNZW51RXhwYW5kRG93biggbmF2RWxlbWVudCApO1xyXG4gICAgICAgICAgICAgICAgYXJpYVVwZGF0ZUVsZW1lbnQoIGV2ZW50RWxlbWVudCwgJ2Nsb3NlJyApO1xyXG5cclxuICAgICAgICAgICAgfVx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1SGVhZGVyR2xvYmFsOyIsImltcG9ydCB7IGFyaWFVcGRhdGUgfSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9hcmlhVXBkYXRlXCI7IFxyXG5cclxuY2xhc3MgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIGF0dHMgPSB7fSApIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsIFxyXG5cdFx0XHR0aGlzLmNsaWNrRXZlbnRzLmJpbmQoIHRoaXMgKSxcclxuXHRcdFx0ZmFsc2VcclxuXHRcdCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdrZXlkb3duJywgXHJcblx0XHRcdHRoaXMua2V5RG93bkV2ZW50cy5iaW5kKCB0aGlzICksXHJcblx0XHRcdGZhbHNlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbiAgICBjbGlja0V2ZW50cyggZXZlbnQgKSB7XHJcblx0XHRcclxuXHRcdHRyeSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXZlbnRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgICAgICAgLy8gVG9nZ2xlIEFjdGlvblxyXG4gICAgICAgICAgICBpZiAoIGV2ZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd3c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLnNob3VsZENsb3NlKCkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhcmlhVXBkYXRlKCAnT3BlbicsICcud3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tdG9nZ2xlJyApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tb3BlbicgKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oIGV2ZW50RWxlbWVudCApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ2xvc2UgQWN0aW9uXHJcbiAgICAgICAgICAgIGlmICggZXZlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0tY2xvc2UnICkgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSggZXZlbnRFbGVtZW50ICk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblx0XHRcdFxyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdCAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cclxuICAgIGtleURvd25FdmVudHMoIGV2ZW50ICkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBrZXlEb3duRXZlbnQoIHsgZG9tRXZlbnQ6IGV2ZW50LCBrZXk6J0VzY2FwZScsIGluQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzIH0gKSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVBcmlhRXhwYW5kZWRDbG9zZSggeyBcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyOiAgICAgICAgICBlbGVtZW50R2V0KCB7IGVsZW1lbnRDbGFzczogdGhpcy53cmFwcGVyQ2xhc3MgfSApLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblByZWZpeDogICAgIHRoaXMuYWN0aW9uUHJlZml4LFxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWFMYWJlbEVsZW1lbnQ6IGVsZW1lbnRHZXQoIHsgZWxlbWVudENsYXNzOiAnd3N1LW5hdmlnYXRpb24tc2l0ZS0tdG9nZ2xlJyB9ICksICBcclxuICAgICAgICAgICAgICAgIH0gKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHQgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB0cnVlICk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtY2xvc2VkJyk7XHJcblxyXG4gICAgICAgIGFyaWFVcGRhdGUoICdPcGVuJywgJy53c3UtbmF2aWdhdGlvbi1zaXRlLXZlcnRpY2FsLS10b2dnbGUnICk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCBldmVudEVsZW1lbnQgPSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIHJldHVybjtcclxuXHJcbiAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSApO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLW9wZW4nKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLWlzLWNsb3NlZCcpO1xyXG5cclxuICAgICAgICBhcmlhVXBkYXRlKCAnQ2xvc2UnLCAnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwtLXRvZ2dsZScgKTsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENsb3NlKCkge1xyXG5cclxuICAgICAgICBsZXQgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnLndzdS1uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwnKVswXSB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCAhIG5hdiApIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gKCBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnd3N1LW5hdmlnYXRpb24tc2l0ZS12ZXJ0aWNhbC0taXMtb3BlbicpICkgfHwgZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbDsgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCB3c3VEcm9wZG93bk1vZGFsIGZyb20gXCIuLi9lbGVtZW50cy9kcm9wZG93bi1tb2RhbC9fZHJvcGRvd24tbW9kYWxcIjtcclxuaW1wb3J0IFdzdW5hdmlnYXRpb25TaXRlIGZyb20gJy4uL21vZHVsZXMvZGVwcmVjYXRlZF9uYXZpZ2F0aW9uLXNpdGUvX25hdmlnYXRpb24tc2l0ZSc7XHJcbmltcG9ydCBXc3VIZWFkZXJHbG9iYWwgZnJvbSBcIi4uL21vZHVsZXMvaGVhZGVyLWdsb2JhbC9faGVhZGVyLWdsb2JhbFwiO1xyXG5pbXBvcnQgV3N1QWNjb3JkaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2FjY29yZGlvbi9fc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VDb2xsYXBzYWJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfY29sbGFwc2FibGUvc2NyaXB0XCI7XHJcbmltcG9ydCBXc3VNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnUvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1TmF2aWdhdGlvblNpdGVWZXJ0aWNhbCBmcm9tIFwiLi4vbW9kdWxlcy9uYXZpZ2F0aW9uLXNpdGUtdmVydGljYWwvX3NjcmlwdFwiO1xyXG5pbXBvcnQgV3N1QW5pbWF0ZVN1Ym1lbnVTbGlkZVZlcnRpY2FsIGZyb20gJy4uL2FuaW1hdGlvbnMvc2xpZGUvX3NjcmlwdCc7XHJcbmltcG9ydCBXc3VOYXZpZ2F0aW9uU2l0ZUhvcml6b250YWwgZnJvbSAnLi4vY29tcG9uZW50cy9leHBlcmltZW50YWxfbmF2aWdhdGlvbi1ob3Jpem9udGFsL19zY3JpcHQnO1xyXG5pbXBvcnQgV3N1VmlkZW9GcmFtZSBmcm9tICcuLi9jb21wb25lbnRzL2V4cGVyaW1lbnRhbF92aWRlby1mcmFtZS9fc2NyaXB0JztcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB3c3UgPSB7XHJcbiAgICB2ZXJ0aWNhbE5hdml0YXRpb246IG5ldyBXc3VuYXZpZ2F0aW9uU2l0ZSgpLFxyXG4gICAgbmF2aWdhdGlvblNpdGVWZXJ0aWNhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlVmVydGljYWwoKSxcclxuICAgIG5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbDogbmV3IFdzdU5hdmlnYXRpb25TaXRlSG9yaXpvbnRhbCgpLFxyXG4gICAgaGVhZGVyR2xvYmFsOiBuZXcgV3N1SGVhZGVyR2xvYmFsKCksXHJcbiAgICBhY2NvcmRpb246IG5ldyBXc3VBY2NvcmRpb24oKSxcclxuICAgIGNvbGxhcHNhYmxlOiBuZXcgV3N1Q29sbGFwc2FibGUoKSxcclxuICAgIG1lbnU6IG5ldyBXc3VNZW51KCksXHJcbiAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgLy9zdWJtZW51U2xpZGVWZXJ0aWNhbDogbmV3IFdzdUFuaW1hdGVTdWJtZW51U2xpZGVWZXJ0aWNhbCgpLFxyXG4gICAgfSxcclxuICAgIHZpZGVvRnJhbWU6IG5ldyBXc3VWaWRlb0ZyYW1lKCksXHJcblxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=