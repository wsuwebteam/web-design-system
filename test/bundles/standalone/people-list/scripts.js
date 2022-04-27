/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/modules/people-list/_script.js":
/*!********************************************!*\
  !*** ./src/modules/people-list/_script.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var _assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_assets/js/partials/wsuPartials */ "./_assets/js/partials/wsuPartials.js");



var PeopleList = function PeopleList(el) {
  var apiEndpoint = "http://wsuwp.local" + "/wp-json/peopleapi/v1/people?";
  var queryAttributes = ["count", "page", "nid", "classification", "university-category", "university-location", "university-organization", "photo-size", "profile-order"];
  var filterAttributeMap = {
    location: "university_location",
    organization: "university_organization",
    classification: "classification",
    tag: "tag",
    category: "category"
  };
  var searcher = new fuse_js__WEBPACK_IMPORTED_MODULE_1__["default"]([], {
    shouldSort: true,
    minMatchCharLength: 3,
    threshold: 0.3,
    keys: [{
      name: "name",
      weight: 3
    }, "title", "nid", "email", "phone"]
  });
  var componentId = el.dataset.componentId;
  var displayFields = el.dataset.displayFields.split(",");
  var onlyShowSelectedTermValues = el.dataset.onlyShowSelectedTermValues;
  var excludedTerms = el.dataset.excludeTermValues.split(",").filter(function (r) {
    return r !== "";
  });
  var includedTerms = el.dataset.includeTermValues.split(",").filter(function (r) {
    return r !== "";
  });
  var activeFilters = [];
  var selectedFiltersList = [];
  var allPeopleString = "";
  var people;
  var peopleContainer;
  var peopleElements;
  var filtersContainer;
  var filterToggles;
  var searchInput;

  function getPersonHTML(person) {
    return "<div class=\"wsu-card wsu-card-person wsu-image-frame--ratio-square wsu-card--outline-shadow js-people-list__person\" data-nid=\"".concat(person.nid, "\">\n        ").concat(displayFields.includes("photo") ? "\n            <div class=\"wsu-image-frame wsu-card__person-image wsu-people-list__person-image".concat(person.photo ? " has-photo" : "", "\">\n                ").concat(person.photo ? "\n                    <img src=\"".concat(person.photo, "\"\n                        ").concat(person.photo_srcset ? "srcset=\"".concat(person.photo_srcset, "\"") : "", "\n                        ").concat(person.photo_srcset ? "sizes=\"(min-width: 768px) 33.3vw, 100vw\"" : "", " loading=\"lazy\">") : "", "\n            </div>") : "", "\n\n        <div class=\"wsu-card__content\">\n            ").concat(displayFields.includes("name") ? "<".concat(el.dataset.headingtag, " class=\"wsu-card__person-name\">").concat(person.name, "</").concat(el.dataset.headingtag, ">") : "", "\n            \n            ").concat(displayFields.includes("title") && Array.isArray(person.title) ? person.title.map(function (t) {
      return "<div class=\"wsu-card__person-title\">".concat(t, "</div>");
    }).join("") : "", "\n            \n            ").concat(displayFields.includes("email") && person.email ? "\n                <div class=\"wsu-meta-email wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Email Address</span>\n                    <a href=\"mailto:".concat(person.email, "\">").concat(person.email, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("office") && person.office ? "\n                <div class=\"wsu-meta-location wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Location</span>\n                    <a href=\"#\">".concat(person.office, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("phone") && person.phone ? "\n                <div class=\"wsu-meta-phone wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Phone</span>\n                    <a href=\"tel:".concat(person.phone, "\">").concat(person.phone, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("website") && person.website ? "\n                <div class=\"wsu-meta-website wsu-meta--icon-crimson\">\n                    <a href=\"".concat(person.website, "\">").concat(el.dataset.websiteLinkText, "</a>\n                </div>") : "", "\n        </div>\n    </div>");
  }

  function shouldIncludeTermValue(slug) {
    if (onlyShowSelectedTermValues === "true" && includedTerms.length > 0) {
      return includedTerms.includes(slug);
    } else if (onlyShowSelectedTermValues === "false" && excludedTerms.length > 0) {
      return !excludedTerms.includes(slug);
    }

    return true;
  }

  function createSelectFilterHTML(filter, people) {
    var options = []; // set filter options

    people.forEach(function (person) {
      var filterOptions = person[filterAttributeMap[filter]];

      if (filterOptions && filterOptions.length > 0) {
        if (!activeFilters.includes(filter)) {
          activeFilters.push(filter);
        }

        filterOptions.forEach(function (v) {
          if (shouldIncludeTermValue(v.slug) && options.findIndex(function (o) {
            return o.slug === v.slug;
          }) === -1) {
            options.push(v);
          }
        });
      }
    }); // sort options alphabetically

    options.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    }); // class="wsu-screen-reader-only"

    return options.length > 0 ? "<div class=\"wsu-people-list__select-filter\">\n            <button type=\"button\" class=\"wsu-button wsu-people-list__filter-toggle\" aria-expanded=\"false\" aria-controls=\"".concat(componentId, "__content\">").concat(el.dataset[filter + "FilterLabel"], "</button>\n            <div id=\"").concat(componentId, "__content\" class=\"wsu-people-list__select-list-container\" aria-labelledby=\"").concat(componentId, "__title\">\n                <ul class=\"wsu-people-list__select-list\">\n                    ").concat(options.map(function (o) {
      return "<li class=\"wsu-people-list__select-list-item\">\n                        <label class=\"wsu-people-list__fitler-label\">\n                            <input class=\"wsu-people-list__fitler-checkbox\" type=\"checkbox\" name=\"".concat(filter, "[]\" value=\"").concat(o.slug, "\" />\n                            ").concat(o.name, "                    \n                        </label>\n                    </li>");
    }).join(""), "\n                </ul>\n            </div>\n        </div>") : "";
  }

  function createPeopleFilters(filtersString, people) {
    var content = "";
    var filters = filtersString.split(",");
    var nonSearchFilters = filters.filter(function (f) {
      return f && f !== "search";
    }); // setup filters container

    var filtersContainer = document.createElement("form");
    filtersContainer.className = "wsu-people-list__filters-container"; // create non-search filters

    nonSearchFilters.forEach(function (filter) {
      var selectFilter = createSelectFilterHTML(filter, people);
      content += selectFilter;
    }); // create search filter

    if (filters.includes("search")) {
      content += "\n        <div class=\"wsu-people-list__search-filter\">\n            <input class=\"wsu-people-list__search-input\" type=\"text\" placeholder=\"".concat(el.dataset.searchFilterLabel, "\"/>\n        </div>");
    }

    content += "\n      <div class=\"wsu-people-list__selected-filters-container\">\n        <ul class=\"wsu-people-list__selected-filters-list\">\n        </ul>\n      </div>\n    "; // write filters to container

    filtersContainer.innerHTML = content;
    return filtersContainer;
  }

  function populatePeopleContainer(people, peopleContainer) {
    var peopleHTML = "";
    people.forEach(function (p) {
      peopleHTML += getPersonHTML(p);
    });
    peopleContainer.innerHTML = peopleHTML;
  }

  function createPeopleContainer() {
    var container = document.createElement("div");
    container.className = "wsu-card-wrapper wsu-card-wrapper--per-row-".concat(el.dataset.columns, " js-people-list");
    return container;
  }

  function updatePeopleList(people) {
    var i = 0; // show and sort people by filters

    people.forEach(function (person) {
      var personElement = Array.from(peopleElements).find(function (p) {
        return p.dataset.nid === person.nid;
      });

      if (personElement) {
        personElement.style.display = null;
        personElement.style.order = i;
        i++;
      }
    }); // hide people not found in filtering

    var peopleToHide = Array.from(peopleElements).filter(function (personElement) {
      return people.findIndex(function (p) {
        return p.nid === personElement.dataset.nid;
      }) === -1;
    });
    peopleToHide.forEach(function (personElement) {
      personElement.style.display = "none";
      personElement.style.order = null;
    });
    people.length === 0 ? el.classList.add("has-no-results") : el.classList.remove("has-no-results");
  }

  function updateSelectedFilters(selectedFilterInputs) {
    var content = "";
    selectedFilterInputs.forEach(function (input) {
      content += "\n        <li class=\"wsu-people-list__selected-filters-list-item\">\n          <button class=\"wsu-people-list__selected-filter-toggle\" type=\"button\" \n            data-filter-list=\"".concat(input.name.replace("[]", ""), "\" \n            data-value=\"").concat(input.value, "\">\n            ").concat(input.nextSibling.textContent.trim(), "\n          </button>\n        </li>\n      ");
    });
    selectedFiltersList.innerHTML = content;
  }

  function processPeopleFilters() {
    var selectedFilterInputs = [];
    var filteredPeople = JSON.parse(allPeopleString);
    activeFilters.forEach(function (f) {
      var checkboxInputs = filtersContainer.elements["".concat(f, "[]")];

      if (!checkboxInputs) {
        return;
      }

      var selectedInputs = Array.from(checkboxInputs).filter(function (f) {
        return f.checked;
      });

      if (selectedInputs.length > 0) {
        selectedFilterInputs = selectedFilterInputs.concat(selectedInputs);
        var selectedValues = selectedInputs.map(function (s) {
          return s.value;
        });
        filteredPeople = filteredPeople.filter(function (person) {
          var personsValues = person[filterAttributeMap[f]];
          return selectedValues.some(function (v) {
            return !(personsValues.findIndex(function (o) {
              return v === o.slug;
            }) === -1);
          });
        });
      }
    });

    if (searchInput && searchInput.value !== "" && searchInput.value.length >= 3) {
      searcher.setCollection(filteredPeople);
      var results = searcher.search(searchInput.value);
      filteredPeople = results.map(function (r) {
        return r.item;
      });
    }

    updateSelectedFilters(selectedFilterInputs);
    updatePeopleList(filteredPeople);
  }

  function bindEvents(el) {
    var _searchInput;

    filtersContainer = el.querySelector(".wsu-people-list__filters-container");
    filterToggles = el.querySelectorAll(".wsu-people-list__filter-toggle");
    searchInput = el.querySelector(".wsu-people-list__search-input");
    selectedFiltersList = el.querySelector(".wsu-people-list__selected-filters-list");
    peopleContainer = el.querySelector(".wsu-people-list__filters-container");
    peopleElements = el.querySelectorAll(".js-people-list__person"); // filter on select option change

    filtersContainer.addEventListener("change", function (e) {
      if (e.target !== searchInput) {
        processPeopleFilters();
      }
    }); // filter on search

    (_searchInput = searchInput) === null || _searchInput === void 0 ? void 0 : _searchInput.addEventListener("input", function (e) {
      processPeopleFilters(); // should consider debouncing?
    }); // remove selected filter on toggle click

    selectedFiltersList.addEventListener("click", function (e) {
      var toggle = e.target.closest(".wsu-people-list__selected-filter-toggle");

      if (toggle) {
        var input = filtersContainer.querySelector("input[name^=\"".concat(toggle.dataset.filterList, "\"][value=\"").concat(toggle.dataset.value, "\"]"));

        if (input) {
          input.checked = false;
          processPeopleFilters();
        }
      }
    }); // toggling select filters

    document.addEventListener("click", function (e) {
      var clickedFiltersContainer = e.target.closest(".wsu-people-list__filters-container");
      var toggle = e.target.closest(".wsu-people-list__filter-toggle");
      var insideSelectFilter = e.target.closest(".wsu-people-list__select-filter") !== null; // handle clicks inside clicked filtersContainer

      if (clickedFiltersContainer === filtersContainer) {
        if (toggle) {
          // close other open menus
          filterToggles.forEach(function (t) {
            if (t !== toggle) {
              (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(t, false);
            }
          });
          (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(toggle, !(0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaIsExpanded)(toggle)); // close all menus in filterContainer if click was not in a toggle or select menu
        } else if (!insideSelectFilter) {
          filterToggles.forEach(function (t) {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(t, false);
          });
        }
      } // close all if click was outside current filtersContainer


      if (clickedFiltersContainer === null || clickedFiltersContainer !== filtersContainer) {
        filterToggles.forEach(function (t) {
          (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_0__.wsuAriaExpanded)(t, false);
        });
      }
    }, false);
  }

  function generateHTML(people) {
    var content = ""; // create filters

    var filtersContainer = createPeopleFilters(el.dataset.filters, people);
    content += filtersContainer.outerHTML; // create people list

    var peopleContainer = createPeopleContainer();
    populatePeopleContainer(people, peopleContainer);
    content += peopleContainer.outerHTML; // write html to dom

    el.innerHTML = content;
  }

  function getPeople() {
    // build request
    var params = queryAttributes.reduce(function (acc, curr, idx) {
      var attrValue = el.getAttribute("data-" + curr);

      if (attrValue) {
        acc.push(curr + "=" + attrValue);
      }

      return acc;
    }, []).join("&"); // make request

    return fetch(apiEndpoint + params).then(function (response) {
      return response.json();
    })["catch"](function (error) {
      console.error(error);
    });
  }

  function init() {
    getPeople().then(function (data) {
      allPeopleString = data;
      people = JSON.parse(data);
      generateHTML(people);
      setTimeout(function () {
        bindEvents(el);
      }, 0);
    });
  }

  init();
};

document.querySelectorAll(".wsu-people-list").forEach(function (el) {
  new PeopleList(el);
});

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fuse)
/* harmony export */ });
/**
 * Fuse.js v6.5.3 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2021 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function isArray(value) {
  return !Array.isArray
    ? getTag(value) === '[object Array]'
    : Array.isArray(value)
}

// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value
  }
  let result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toString(value) {
  return value == null ? '' : baseToString(value)
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}

// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) == '[object Boolean]')
  )
}

function isObject(value) {
  return typeof value === 'object'
}

// Checks if `value` is object-like.
function isObjectLike(value) {
  return isObject(value) && value !== null
}

function isDefined(value) {
  return value !== undefined && value !== null
}

function isBlank(value) {
  return !value.trim().length
}

// Gets the `toStringTag` of `value`.
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
function getTag(value) {
  return value == null
    ? value === undefined
      ? '[object Undefined]'
      : '[object Null]'
    : Object.prototype.toString.call(value)
}

const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';

const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";

const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) =>
  `Invalid value for key ${key}`;

const PATTERN_LENGTH_TOO_LARGE = (max) =>
  `Pattern length exceeds max of ${max}.`;

const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;

const INVALID_KEY_WEIGHT_VALUE = (key) =>
  `Property 'weight' in key '${key}' must be a positive integer`;

const hasOwn = Object.prototype.hasOwnProperty;

class KeyStore {
  constructor(keys) {
    this._keys = [];
    this._keyMap = {};

    let totalWeight = 0;

    keys.forEach((key) => {
      let obj = createKey(key);

      totalWeight += obj.weight;

      this._keys.push(obj);
      this._keyMap[obj.id] = obj;

      totalWeight += obj.weight;
    });

    // Normalize weights so that their sum is equal to 1
    this._keys.forEach((key) => {
      key.weight /= totalWeight;
    });
  }
  get(keyId) {
    return this._keyMap[keyId]
  }
  keys() {
    return this._keys
  }
  toJSON() {
    return JSON.stringify(this._keys)
  }
}

function createKey(key) {
  let path = null;
  let id = null;
  let src = null;
  let weight = 1;

  if (isString(key) || isArray(key)) {
    src = key;
    path = createKeyPath(key);
    id = createKeyId(key);
  } else {
    if (!hasOwn.call(key, 'name')) {
      throw new Error(MISSING_KEY_PROPERTY('name'))
    }

    const name = key.name;
    src = name;

    if (hasOwn.call(key, 'weight')) {
      weight = key.weight;

      if (weight <= 0) {
        throw new Error(INVALID_KEY_WEIGHT_VALUE(name))
      }
    }

    path = createKeyPath(name);
    id = createKeyId(name);
  }

  return { path, id, weight, src }
}

function createKeyPath(key) {
  return isArray(key) ? key : key.split('.')
}

function createKeyId(key) {
  return isArray(key) ? key.join('.') : key
}

function get(obj, path) {
  let list = [];
  let arr = false;

  const deepGet = (obj, path, index) => {
    if (!isDefined(obj)) {
      return
    }
    if (!path[index]) {
      // If there's no path left, we've arrived at the object we care about.
      list.push(obj);
    } else {
      let key = path[index];

      const value = obj[key];

      if (!isDefined(value)) {
        return
      }

      // If we're at the last value in the path, and if it's a string/number/bool,
      // add it to the list
      if (
        index === path.length - 1 &&
        (isString(value) || isNumber(value) || isBoolean(value))
      ) {
        list.push(toString(value));
      } else if (isArray(value)) {
        arr = true;
        // Search each item in the array.
        for (let i = 0, len = value.length; i < len; i += 1) {
          deepGet(value[i], path, index + 1);
        }
      } else if (path.length) {
        // An object. Recurse further.
        deepGet(value, path, index + 1);
      }
    }
  };

  // Backwards compatibility (since path used to be a string)
  deepGet(obj, isString(path) ? path.split('.') : path, 0);

  return arr ? list : list[0]
}

const MatchOptions = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: false,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: false,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
};

const BasicOptions = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: false,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: false,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: true,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (a, b) =>
    a.score === b.score ? (a.idx < b.idx ? -1 : 1) : a.score < b.score ? -1 : 1
};

const FuzzyOptions = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
};

const AdvancedOptions = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: false,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: get,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: false,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: false,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};

var Config = {
  ...BasicOptions,
  ...MatchOptions,
  ...FuzzyOptions,
  ...AdvancedOptions
};

const SPACE = /[^ ]+/g;

// Field-length norm: the shorter the field, the higher the weight.
// Set to 3 decimals to reduce index size.
function norm(weight = 1, mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      // Default function is 1/sqrt(x), weight makes that variable
      const norm = 1 / Math.pow(numTokens, 0.5 * weight);

      // In place of `toFixed(mantissa)`, for faster computation
      const n = parseFloat(Math.round(norm * m) / m);

      cache.set(numTokens, n);

      return n
    },
    clear() {
      cache.clear();
    }
  }
}

class FuseIndex {
  constructor({
    getFn = Config.getFn,
    fieldNormWeight = Config.fieldNormWeight
  } = {}) {
    this.norm = norm(fieldNormWeight, 3);
    this.getFn = getFn;
    this.isCreated = false;

    this.setIndexRecords();
  }
  setSources(docs = []) {
    this.docs = docs;
  }
  setIndexRecords(records = []) {
    this.records = records;
  }
  setKeys(keys = []) {
    this.keys = keys;
    this._keysMap = {};
    keys.forEach((key, idx) => {
      this._keysMap[key.id] = idx;
    });
  }
  create() {
    if (this.isCreated || !this.docs.length) {
      return
    }

    this.isCreated = true;

    // List is Array<String>
    if (isString(this.docs[0])) {
      this.docs.forEach((doc, docIndex) => {
        this._addString(doc, docIndex);
      });
    } else {
      // List is Array<Object>
      this.docs.forEach((doc, docIndex) => {
        this._addObject(doc, docIndex);
      });
    }

    this.norm.clear();
  }
  // Adds a doc to the end of the index
  add(doc) {
    const idx = this.size();

    if (isString(doc)) {
      this._addString(doc, idx);
    } else {
      this._addObject(doc, idx);
    }
  }
  // Removes the doc at the specified index of the index
  removeAt(idx) {
    this.records.splice(idx, 1);

    // Change ref index of every subsquent doc
    for (let i = idx, len = this.size(); i < len; i += 1) {
      this.records[i].i -= 1;
    }
  }
  getValueForItemAtKeyId(item, keyId) {
    return item[this._keysMap[keyId]]
  }
  size() {
    return this.records.length
  }
  _addString(doc, docIndex) {
    if (!isDefined(doc) || isBlank(doc)) {
      return
    }

    let record = {
      v: doc,
      i: docIndex,
      n: this.norm.get(doc)
    };

    this.records.push(record);
  }
  _addObject(doc, docIndex) {
    let record = { i: docIndex, $: {} };

    // Iterate over every key (i.e, path), and fetch the value at that key
    this.keys.forEach((key, keyIndex) => {
      // console.log(key)
      let value = this.getFn(doc, key.path);

      if (!isDefined(value)) {
        return
      }

      if (isArray(value)) {
        let subRecords = [];
        const stack = [{ nestedArrIndex: -1, value }];

        while (stack.length) {
          const { nestedArrIndex, value } = stack.pop();

          if (!isDefined(value)) {
            continue
          }

          if (isString(value) && !isBlank(value)) {
            let subRecord = {
              v: value,
              i: nestedArrIndex,
              n: this.norm.get(value)
            };

            subRecords.push(subRecord);
          } else if (isArray(value)) {
            value.forEach((item, k) => {
              stack.push({
                nestedArrIndex: k,
                value: item
              });
            });
          } else ;
        }
        record.$[keyIndex] = subRecords;
      } else if (!isBlank(value)) {
        let subRecord = {
          v: value,
          n: this.norm.get(value)
        };

        record.$[keyIndex] = subRecord;
      }
    });

    this.records.push(record);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    }
  }
}

function createIndex(
  keys,
  docs,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(
  data,
  { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}
) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn, fieldNormWeight });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore$1(
  pattern,
  {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  const accuracy = errors / pattern.length;

  if (ignoreLocation) {
    return accuracy
  }

  const proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy
  }

  return accuracy + proximity / distance
}

function convertMaskToIndices(
  matchmask = [],
  minMatchCharLength = Config.minMatchCharLength
) {
  let indices = [];
  let start = -1;
  let end = -1;
  let i = 0;

  for (let len = matchmask.length; i < len; i += 1) {
    let match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        indices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    indices.push([start, i - 1]);
  }

  return indices
}

// Machine word size
const MAX_BITS = 32;

function search(
  text,
  pattern,
  patternAlphabet,
  {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}
) {
  if (pattern.length > MAX_BITS) {
    throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS))
  }

  const patternLen = pattern.length;
  // Set starting location at beginning text and initialize the alphabet.
  const textLen = text.length;
  // Handle the case when location > text.length
  const expectedLocation = Math.max(0, Math.min(location, textLen));
  // Highest score beyond which we give up.
  let currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  let bestLocation = expectedLocation;

  // Performance: only computer matches when the minMatchCharLength > 1
  // OR if `includeMatches` is true.
  const computeMatches = minMatchCharLength > 1 || includeMatches;
  // A mask of the matches, used for building the indices
  const matchMask = computeMatches ? Array(textLen) : [];

  let index;

  // Get all exact matches, here for speed up
  while ((index = text.indexOf(pattern, bestLocation)) > -1) {
    let score = computeScore$1(pattern, {
      currentLocation: index,
      expectedLocation,
      distance,
      ignoreLocation
    });

    currentThreshold = Math.min(score, currentThreshold);
    bestLocation = index + patternLen;

    if (computeMatches) {
      let i = 0;
      while (i < patternLen) {
        matchMask[index + i] = 1;
        i += 1;
      }
    }
  }

  // Reset the best location
  bestLocation = -1;

  let lastBitArr = [];
  let finalScore = 1;
  let binMax = patternLen + textLen;

  const mask = 1 << (patternLen - 1);

  for (let i = 0; i < patternLen; i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    let binMin = 0;
    let binMid = binMax;

    while (binMin < binMid) {
      const score = computeScore$1(pattern, {
        errors: i,
        currentLocation: expectedLocation + binMid,
        expectedLocation,
        distance,
        ignoreLocation
      });

      if (score <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    let start = Math.max(1, expectedLocation - binMid + 1);
    let finish = findAllMatches
      ? textLen
      : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    let bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << i) - 1;

    for (let j = finish; j >= start; j -= 1) {
      let currentLocation = j - 1;
      let charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (computeMatches) {
        // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
        matchMask[currentLocation] = +!!charMatch;
      }

      // First pass: exact match
      bitArr[j] = ((bitArr[j + 1] << 1) | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (i) {
        bitArr[j] |=
          ((lastBitArr[j + 1] | lastBitArr[j]) << 1) | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = computeScore$1(pattern, {
          errors: i,
          currentLocation,
          expectedLocation,
          distance,
          ignoreLocation
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    const score = computeScore$1(pattern, {
      errors: i + 1,
      currentLocation: expectedLocation,
      expectedLocation,
      distance,
      ignoreLocation
    });

    if (score > currentThreshold) {
      break
    }

    lastBitArr = bitArr;
  }

  const result = {
    isMatch: bestLocation >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(0.001, finalScore)
  };

  if (computeMatches) {
    const indices = convertMaskToIndices(matchMask, minMatchCharLength);
    if (!indices.length) {
      result.isMatch = false;
    } else if (includeMatches) {
      result.indices = indices;
    }
  }

  return result
}

function createPatternAlphabet(pattern) {
  let mask = {};

  for (let i = 0, len = pattern.length; i < len; i += 1) {
    const char = pattern.charAt(i);
    mask[char] = (mask[char] || 0) | (1 << (len - i - 1));
  }

  return mask
}

class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();

    this.chunks = [];

    if (!this.pattern.length) {
      return
    }

    const addChunk = (pattern, startIndex) => {
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern),
        startIndex
      });
    };

    const len = this.pattern.length;

    if (len > MAX_BITS) {
      let i = 0;
      const remainder = len % MAX_BITS;
      const end = len - remainder;

      while (i < end) {
        addChunk(this.pattern.substr(i, MAX_BITS), i);
        i += MAX_BITS;
      }

      if (remainder) {
        const startIndex = len - MAX_BITS;
        addChunk(this.pattern.substr(startIndex), startIndex);
      }
    } else {
      addChunk(this.pattern, 0);
    }
  }

  searchIn(text) {
    const { isCaseSensitive, includeMatches } = this.options;

    if (!isCaseSensitive) {
      text = text.toLowerCase();
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      };

      if (includeMatches) {
        result.indices = [[0, text.length - 1]];
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;

    let allIndices = [];
    let totalScore = 0;
    let hasMatches = false;

    this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
      const { isMatch, score, indices } = search(text, pattern, alphabet, {
        location: location + startIndex,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });

      if (isMatch) {
        hasMatches = true;
      }

      totalScore += score;

      if (isMatch && indices) {
        allIndices = [...allIndices, ...indices];
      }
    });

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    };

    if (hasMatches && includeMatches) {
      result.indices = allIndices;
    }

    return result
  }
}

class BaseMatch {
  constructor(pattern) {
    this.pattern = pattern;
  }
  static isMultiMatch(pattern) {
    return getMatch(pattern, this.multiRegex)
  }
  static isSingleMatch(pattern) {
    return getMatch(pattern, this.singleRegex)
  }
  search(/*text*/) {}
}

function getMatch(pattern, exp) {
  const matches = pattern.match(exp);
  return matches ? matches[1] : null
}

// Token: 'file

class ExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'exact'
  }
  static get multiRegex() {
    return /^="(.*)"$/
  }
  static get singleRegex() {
    return /^=(.*)$/
  }
  search(text) {
    const isMatch = text === this.pattern;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !fire

class InverseExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"$/
  }
  static get singleRegex() {
    return /^!(.*)$/
  }
  search(text) {
    const index = text.indexOf(this.pattern);
    const isMatch = index === -1;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: ^file

class PrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'prefix-exact'
  }
  static get multiRegex() {
    return /^\^"(.*)"$/
  }
  static get singleRegex() {
    return /^\^(.*)$/
  }
  search(text) {
    const isMatch = text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    }
  }
}

// Token: !^fire

class InversePrefixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-prefix-exact'
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/
  }
  static get singleRegex() {
    return /^!\^(.*)$/
  }
  search(text) {
    const isMatch = !text.startsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

// Token: .file$

class SuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'suffix-exact'
  }
  static get multiRegex() {
    return /^"(.*)"\$$/
  }
  static get singleRegex() {
    return /^(.*)\$$/
  }
  search(text) {
    const isMatch = text.endsWith(this.pattern);

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [text.length - this.pattern.length, text.length - 1]
    }
  }
}

// Token: !.file$

class InverseSuffixExactMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'inverse-suffix-exact'
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/
  }
  static get singleRegex() {
    return /^!(.*)\$$/
  }
  search(text) {
    const isMatch = !text.endsWith(this.pattern);
    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices: [0, text.length - 1]
    }
  }
}

class FuzzyMatch extends BaseMatch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}
  ) {
    super(pattern);
    this._bitapSearch = new BitapSearch(pattern, {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive,
      ignoreLocation
    });
  }
  static get type() {
    return 'fuzzy'
  }
  static get multiRegex() {
    return /^"(.*)"$/
  }
  static get singleRegex() {
    return /^(.*)$/
  }
  search(text) {
    return this._bitapSearch.searchIn(text)
  }
}

// Token: 'file

class IncludeMatch extends BaseMatch {
  constructor(pattern) {
    super(pattern);
  }
  static get type() {
    return 'include'
  }
  static get multiRegex() {
    return /^'"(.*)"$/
  }
  static get singleRegex() {
    return /^'(.*)$/
  }
  search(text) {
    let location = 0;
    let index;

    const indices = [];
    const patternLen = this.pattern.length;

    // Get all exact matches
    while ((index = text.indexOf(this.pattern, location)) > -1) {
      location = index + patternLen;
      indices.push([index, location - 1]);
    }

    const isMatch = !!indices.length;

    return {
      isMatch,
      score: isMatch ? 0 : 1,
      indices
    }
  }
}

// ❗Order is important. DO NOT CHANGE.
const searchers = [
  ExactMatch,
  IncludeMatch,
  PrefixExactMatch,
  InversePrefixExactMatch,
  InverseSuffixExactMatch,
  SuffixExactMatch,
  InverseExactMatch,
  FuzzyMatch
];

const searchersLen = searchers.length;

// Regex to split by spaces, but keep anything in quotes together
const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
const OR_TOKEN = '|';

// Return a 2D array representation of the query, for simpler parsing.
// Example:
// "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
function parseQuery(pattern, options = {}) {
  return pattern.split(OR_TOKEN).map((item) => {
    let query = item
      .trim()
      .split(SPACE_RE)
      .filter((item) => item && !!item.trim());

    let results = [];
    for (let i = 0, len = query.length; i < len; i += 1) {
      const queryItem = query[i];

      // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
      let found = false;
      let idx = -1;
      while (!found && ++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isMultiMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          found = true;
        }
      }

      if (found) {
        continue
      }

      // 2. Handle single query matches (i.e, once that are *not* quoted)
      idx = -1;
      while (++idx < searchersLen) {
        const searcher = searchers[idx];
        let token = searcher.isSingleMatch(queryItem);
        if (token) {
          results.push(new searcher(token, options));
          break
        }
      }
    }

    return results
  })
}

// These extended matchers can return an array of matches, as opposed
// to a singl match
const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);

/**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */
class ExtendedSearch {
  constructor(
    pattern,
    {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}
  ) {
    this.query = null;
    this.options = {
      isCaseSensitive,
      includeMatches,
      minMatchCharLength,
      findAllMatches,
      ignoreLocation,
      location,
      threshold,
      distance
    };

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
    this.query = parseQuery(this.pattern, this.options);
  }

  static condition(_, options) {
    return options.useExtendedSearch
  }

  searchIn(text) {
    const query = this.query;

    if (!query) {
      return {
        isMatch: false,
        score: 1
      }
    }

    const { includeMatches, isCaseSensitive } = this.options;

    text = isCaseSensitive ? text : text.toLowerCase();

    let numMatches = 0;
    let allIndices = [];
    let totalScore = 0;

    // ORs
    for (let i = 0, qLen = query.length; i < qLen; i += 1) {
      const searchers = query[i];

      // Reset indices
      allIndices.length = 0;
      numMatches = 0;

      // ANDs
      for (let j = 0, pLen = searchers.length; j < pLen; j += 1) {
        const searcher = searchers[j];
        const { isMatch, indices, score } = searcher.search(text);

        if (isMatch) {
          numMatches += 1;
          totalScore += score;
          if (includeMatches) {
            const type = searcher.constructor.type;
            if (MultiMatchSet.has(type)) {
              allIndices = [...allIndices, ...indices];
            } else {
              allIndices.push(indices);
            }
          }
        } else {
          totalScore = 0;
          numMatches = 0;
          allIndices.length = 0;
          break
        }
      }

      // OR condition, so if TRUE, return
      if (numMatches) {
        let result = {
          isMatch: true,
          score: totalScore / numMatches
        };

        if (includeMatches) {
          result.indices = allIndices;
        }

        return result
      }
    }

    // Nothing was matched
    return {
      isMatch: false,
      score: 1
    }
  }
}

const registeredSearchers = [];

function register(...args) {
  registeredSearchers.push(...args);
}

function createSearcher(pattern, options) {
  for (let i = 0, len = registeredSearchers.length; i < len; i += 1) {
    let searcherClass = registeredSearchers[i];
    if (searcherClass.condition(pattern, options)) {
      return new searcherClass(pattern, options)
    }
  }

  return new BitapSearch(pattern, options)
}

const LogicalOperator = {
  AND: '$and',
  OR: '$or'
};

const KeyType = {
  PATH: '$path',
  PATTERN: '$val'
};

const isExpression = (query) =>
  !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);

const isPath = (query) => !!query[KeyType.PATH];

const isLeaf = (query) =>
  !isArray(query) && isObject(query) && !isExpression(query);

const convertToExplicit = (query) => ({
  [LogicalOperator.AND]: Object.keys(query).map((key) => ({
    [key]: query[key]
  }))
});

// When `auto` is `true`, the parse function will infer and initialize and add
// the appropriate `Searcher` instance
function parse(query, options, { auto = true } = {}) {
  const next = (query) => {
    let keys = Object.keys(query);

    const isQueryPath = isPath(query);

    if (!isQueryPath && keys.length > 1 && !isExpression(query)) {
      return next(convertToExplicit(query))
    }

    if (isLeaf(query)) {
      const key = isQueryPath ? query[KeyType.PATH] : keys[0];

      const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];

      if (!isString(pattern)) {
        throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key))
      }

      const obj = {
        keyId: createKeyId(key),
        pattern
      };

      if (auto) {
        obj.searcher = createSearcher(pattern, options);
      }

      return obj
    }

    let node = {
      children: [],
      operator: keys[0]
    };

    keys.forEach((key) => {
      const value = query[key];

      if (isArray(value)) {
        value.forEach((item) => {
          node.children.push(next(item));
        });
      }
    });

    return node
  };

  if (!isExpression(query)) {
    query = convertToExplicit(query);
  }

  return next(query)
}

// Practical scoring function
function computeScore(
  results,
  { ignoreFieldNorm = Config.ignoreFieldNorm }
) {
  results.forEach((result) => {
    let totalScore = 1;

    result.matches.forEach(({ key, norm, score }) => {
      const weight = key ? key.weight : null;

      totalScore *= Math.pow(
        score === 0 && weight ? Number.EPSILON : score,
        (weight || 1) * (ignoreFieldNorm ? 1 : norm)
      );
    });

    result.score = totalScore;
  });
}

function transformMatches(result, data) {
  const matches = result.matches;
  data.matches = [];

  if (!isDefined(matches)) {
    return
  }

  matches.forEach((match) => {
    if (!isDefined(match.indices) || !match.indices.length) {
      return
    }

    const { indices, value } = match;

    let obj = {
      indices,
      value
    };

    if (match.key) {
      obj.key = match.key.src;
    }

    if (match.idx > -1) {
      obj.refIndex = match.idx;
    }

    data.matches.push(obj);
  });
}

function transformScore(result, data) {
  data.score = result.score;
}

function format(
  results,
  docs,
  {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}
) {
  const transformers = [];

  if (includeMatches) transformers.push(transformMatches);
  if (includeScore) transformers.push(transformScore);

  return results.map((result) => {
    const { idx } = result;

    const data = {
      item: docs[idx],
      refIndex: idx
    };

    if (transformers.length) {
      transformers.forEach((transformer) => {
        transformer(result, data);
      });
    }

    return data
  })
}

class Fuse {
  constructor(docs, options = {}, index) {
    this.options = { ...Config, ...options };

    if (
      this.options.useExtendedSearch &&
      !true
    ) {}

    this._keyStore = new KeyStore(this.options.keys);

    this.setCollection(docs, index);
  }

  setCollection(docs, index) {
    this._docs = docs;

    if (index && !(index instanceof FuseIndex)) {
      throw new Error(INCORRECT_INDEX_TYPE)
    }

    this._myIndex =
      index ||
      createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn,
        fieldNormWeight: this.options.fieldNormWeight
      });
  }

  add(doc) {
    if (!isDefined(doc)) {
      return
    }

    this._docs.push(doc);
    this._myIndex.add(doc);
  }

  remove(predicate = (/* doc, idx */) => false) {
    const results = [];

    for (let i = 0, len = this._docs.length; i < len; i += 1) {
      const doc = this._docs[i];
      if (predicate(doc, i)) {
        this.removeAt(i);
        i -= 1;
        len -= 1;

        results.push(doc);
      }
    }

    return results
  }

  removeAt(idx) {
    this._docs.splice(idx, 1);
    this._myIndex.removeAt(idx);
  }

  getIndex() {
    return this._myIndex
  }

  search(query, { limit = -1 } = {}) {
    const {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;

    let results = isString(query)
      ? isString(this._docs[0])
        ? this._searchStringList(query)
        : this._searchObjectList(query)
      : this._searchLogical(query);

    computeScore(results, { ignoreFieldNorm });

    if (shouldSort) {
      results.sort(sortFn);
    }

    if (isNumber(limit) && limit > -1) {
      results = results.slice(0, limit);
    }

    return format(results, this._docs, {
      includeMatches,
      includeScore
    })
  }

  _searchStringList(query) {
    const searcher = createSearcher(query, this.options);
    const { records } = this._myIndex;
    const results = [];

    // Iterate over every string in the index
    records.forEach(({ v: text, i: idx, n: norm }) => {
      if (!isDefined(text)) {
        return
      }

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        results.push({
          item: text,
          idx,
          matches: [{ score, value: text, norm, indices }]
        });
      }
    });

    return results
  }

  _searchLogical(query) {

    const expression = parse(query, this.options);

    const evaluate = (node, item, idx) => {
      if (!node.children) {
        const { keyId, searcher } = node;

        const matches = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(item, keyId),
          searcher
        });

        if (matches && matches.length) {
          return [
            {
              idx,
              item,
              matches
            }
          ]
        }

        return []
      }

      const res = [];
      for (let i = 0, len = node.children.length; i < len; i += 1) {
        const child = node.children[i];
        const result = evaluate(child, item, idx);
        if (result.length) {
          res.push(...result);
        } else if (node.operator === LogicalOperator.AND) {
          return []
        }
      }
      return res
    };

    const records = this._myIndex.records;
    const resultMap = {};
    const results = [];

    records.forEach(({ $: item, i: idx }) => {
      if (isDefined(item)) {
        let expResults = evaluate(expression, item, idx);

        if (expResults.length) {
          // Dedupe when adding
          if (!resultMap[idx]) {
            resultMap[idx] = { idx, item, matches: [] };
            results.push(resultMap[idx]);
          }
          expResults.forEach(({ matches }) => {
            resultMap[idx].matches.push(...matches);
          });
        }
      }
    });

    return results
  }

  _searchObjectList(query) {
    const searcher = createSearcher(query, this.options);
    const { keys, records } = this._myIndex;
    const results = [];

    // List is Array<Object>
    records.forEach(({ $: item, i: idx }) => {
      if (!isDefined(item)) {
        return
      }

      let matches = [];

      // Iterate over every key (i.e, path), and fetch the value at that key
      keys.forEach((key, keyIndex) => {
        matches.push(
          ...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          })
        );
      });

      if (matches.length) {
        results.push({
          idx,
          item,
          matches
        });
      }
    });

    return results
  }
  _findMatches({ key, value, searcher }) {
    if (!isDefined(value)) {
      return []
    }

    let matches = [];

    if (isArray(value)) {
      value.forEach(({ v: text, i: idx, n: norm }) => {
        if (!isDefined(text)) {
          return
        }

        const { isMatch, score, indices } = searcher.searchIn(text);

        if (isMatch) {
          matches.push({
            score,
            key,
            value: text,
            idx,
            norm,
            indices
          });
        }
      });
    } else {
      const { v: text, n: norm } = value;

      const { isMatch, score, indices } = searcher.searchIn(text);

      if (isMatch) {
        matches.push({ score, key, value: text, norm, indices });
      }
    }

    return matches
  }
}

Fuse.version = '6.5.3';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
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
/*!*******************************************************!*\
  !*** ./src/bundles/standalone/people-list/scripts.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_people_list_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/people-list/_script */ "./src/modules/people-list/_script.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9zdGFuZGFsb25lL3Blb3BsZS1saXN0L3NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFQyxPQUFGLEVBQVdDLElBQVgsRUFBcUI7QUFFN0MsdUJBR0lBLElBSEosQ0FDSUMsUUFESjtBQUFBLE1BQ0lBLFFBREosK0JBQ2UsR0FEZjtBQUFBLG9CQUdJRCxJQUhKLENBRUlFLEtBRko7QUFBQSxNQUVJQSxLQUZKLDRCQUVZLElBRlo7QUFLQSxNQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUVBSixFQUFBQSxPQUFPLENBQUNLLEtBQVIsQ0FBY0MsU0FBZCxHQUE0Qk4sT0FBTyxDQUFDTyxZQUFSLEdBQXVCQyxRQUFRLENBQUNMLEtBQUQsQ0FBL0IsR0FBeUMsSUFBckU7QUFFQUMsRUFBQUEsS0FBSyxHQUFHSyxVQUFVLENBQUUsWUFBTTtBQUV0QlQsSUFBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFFSCxHQUppQixFQUlmSixRQUplLENBQWxCO0FBTUgsQ0FqQkQ7O0FBbUJBLElBQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRVYsT0FBRixFQUFXQyxJQUFYLEVBQXFCO0FBRTNDLHdCQUlJQSxJQUpKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLGdDQUNlLEdBRGY7QUFBQSxxQkFJSUQsSUFKSixDQUVJRSxLQUZKO0FBQUEsTUFFSUEsS0FGSiw2QkFFWSxJQUZaO0FBQUEsdUJBSUlGLElBSkosQ0FHSVUsUUFISjtBQUFBLE1BR0lBLFFBSEosK0JBR2UsS0FIZjtBQU1BLE1BQUlQLEtBQUssR0FBRyxLQUFaO0FBQ0EsTUFBSVEsVUFBVSxHQUFHLEtBQWpCO0FBRUFaLEVBQUFBLE9BQU8sQ0FBQ0ssS0FBUixDQUFjQyxTQUFkLEdBQTRCTixPQUFPLENBQUNPLFlBQVIsR0FBdUJDLFFBQVEsQ0FBQ0wsS0FBRCxDQUEv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QUFELEVBQVE7QUFDNUQsTUFBSUQsVUFBSixDQUFlQyxFQUFmO0FBQ0QsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7QUN0ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTJCLElBQUk7O0FBRS9CO0FBQ0EsbUNBQW1DLElBQUk7O0FBRXZDLGtEQUFrRCxNQUFNOztBQUV4RDtBQUNBLCtCQUErQixJQUFJOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsNENBQTRDLFNBQVM7QUFDckQ7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxrQ0FBa0M7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrQkFBK0I7QUFDMUQsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFF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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VBbmltYXRlLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QXJpYS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUNsYXNzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1UGFydGlhbHMuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL21vZHVsZXMvcGVvcGxlLWxpc3QvX3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvZnVzZS5qcy9kaXN0L2Z1c2UuZXNtLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9idW5kbGVzL3N0YW5kYWxvbmUvcGVvcGxlLWxpc3Qvc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3c3VBbmltYXRlU2xpZGVEb3duID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBbmltYXRlU2xpZGVVcCA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxyXG4gICAgfSA9IGFyZ3M7XHJcblxyXG4gICAgbGV0IHRpbWVyID0gZmFsc2U7XHJcbiAgICBsZXQgZGVsYXlUaW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICBkZWxheVRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcclxuXHJcbiAgICB9LCAxNSApO1xyXG5cclxuICAgIHRpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xyXG5cclxuICAgICAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICcnO1xyXG5cclxuICAgIH0sIGR1cmF0aW9uICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VBbmltYXRlU2xpZGVEb3duLCB3c3VBbmltYXRlU2xpZGVVcCB9OyIsImNvbnN0IHdzdUFyaWFFeHBhbmRlZCA9ICggZWxlbWVudCwgdmFsdWUgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgdmFsdWUgKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VBcmlhSXNFeHBhbmRlZCA9ICggZWxlbWVudCApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICByZXR1cm4gKCd0cnVlJyA9PSBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7IHdzdUFyaWFFeHBhbmRlZCwgd3N1QXJpYUlzRXhwYW5kZWQgfSIsImNvbnN0IHdzdUNsYXNzQWRkID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzUmVtb3ZlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCBlbGVtZW50Q2xhc3MgKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUNsYXNzVG9nZ2xlID0gKCBlbGVtZW50LCBlbGVtZW50Q2xhc3MgKSA9PiB7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1Q2xhc3NBZGQsIHdzdUNsYXNzUmVtb3ZlLCB3c3VDbGFzc1RvZ2dsZSB9IiwiZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVEb3duIGFzIHdzdUFuaW1hdGVTbGlkZURvd24gfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFuaW1hdGVTbGlkZVVwIGFzIHdzdUFuaW1hdGVTbGlkZVVwIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBcmlhRXhwYW5kZWQgYXMgd3N1QXJpYUV4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VBcmlhSXNFeHBhbmRlZCBhcyB3c3VBcmlhSXNFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NBZGQgYXMgd3N1Q2xhc3NBZGQgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1JlbW92ZSBhcyB3c3VDbGFzc1JlbW92ZSB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzVG9nZ2xlIGFzIHdzdUNsYXNzVG9nZ2xlIH0gZnJvbSAnLi93c3VDbGFzcyc7IiwiaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcbmltcG9ydCB7XG4gIHdzdUFyaWFFeHBhbmRlZCxcbiAgd3N1QXJpYUlzRXhwYW5kZWQsXG59IGZyb20gXCIuLi8uLi8uLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzXCI7XG5cbmNvbnN0IFBlb3BsZUxpc3QgPSBmdW5jdGlvbiAoZWwpIHtcbiAgY29uc3QgYXBpRW5kcG9pbnQgPSBQRU9QTEVfQVBJX0JBU0VfVVJMICsgXCIvd3AtanNvbi9wZW9wbGVhcGkvdjEvcGVvcGxlP1wiO1xuICBjb25zdCBxdWVyeUF0dHJpYnV0ZXMgPSBbXG4gICAgXCJjb3VudFwiLFxuICAgIFwicGFnZVwiLFxuICAgIFwibmlkXCIsXG4gICAgXCJjbGFzc2lmaWNhdGlvblwiLFxuICAgIFwidW5pdmVyc2l0eS1jYXRlZ29yeVwiLFxuICAgIFwidW5pdmVyc2l0eS1sb2NhdGlvblwiLFxuICAgIFwidW5pdmVyc2l0eS1vcmdhbml6YXRpb25cIixcbiAgICBcInBob3RvLXNpemVcIixcbiAgICBcInByb2ZpbGUtb3JkZXJcIixcbiAgXTtcbiAgY29uc3QgZmlsdGVyQXR0cmlidXRlTWFwID0ge1xuICAgIGxvY2F0aW9uOiBcInVuaXZlcnNpdHlfbG9jYXRpb25cIixcbiAgICBvcmdhbml6YXRpb246IFwidW5pdmVyc2l0eV9vcmdhbml6YXRpb25cIixcbiAgICBjbGFzc2lmaWNhdGlvbjogXCJjbGFzc2lmaWNhdGlvblwiLFxuICAgIHRhZzogXCJ0YWdcIixcbiAgICBjYXRlZ29yeTogXCJjYXRlZ29yeVwiLFxuICB9O1xuICBjb25zdCBzZWFyY2hlciA9IG5ldyBGdXNlKFtdLCB7XG4gICAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDMsXG4gICAgdGhyZXNob2xkOiAwLjMsXG4gICAga2V5czogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgfSxcbiAgICAgIFwidGl0bGVcIixcbiAgICAgIFwibmlkXCIsXG4gICAgICBcImVtYWlsXCIsXG4gICAgICBcInBob25lXCIsXG4gICAgXSxcbiAgfSk7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gZWwuZGF0YXNldC5jb21wb25lbnRJZDtcbiAgY29uc3QgZGlzcGxheUZpZWxkcyA9IGVsLmRhdGFzZXQuZGlzcGxheUZpZWxkcy5zcGxpdChcIixcIik7XG4gIGNvbnN0IG9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzID0gZWwuZGF0YXNldC5vbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcztcbiAgY29uc3QgZXhjbHVkZWRUZXJtcyA9IGVsLmRhdGFzZXQuZXhjbHVkZVRlcm1WYWx1ZXNcbiAgICAuc3BsaXQoXCIsXCIpXG4gICAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XG4gIGNvbnN0IGluY2x1ZGVkVGVybXMgPSBlbC5kYXRhc2V0LmluY2x1ZGVUZXJtVmFsdWVzXG4gICAgLnNwbGl0KFwiLFwiKVxuICAgIC5maWx0ZXIoKHIpID0+IHIgIT09IFwiXCIpO1xuICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gW107XG4gIGxldCBzZWxlY3RlZEZpbHRlcnNMaXN0ID0gW107XG4gIGxldCBhbGxQZW9wbGVTdHJpbmcgPSBcIlwiO1xuICBsZXQgcGVvcGxlO1xuICBsZXQgcGVvcGxlQ29udGFpbmVyO1xuICBsZXQgcGVvcGxlRWxlbWVudHM7XG4gIGxldCBmaWx0ZXJzQ29udGFpbmVyO1xuICBsZXQgZmlsdGVyVG9nZ2xlcztcbiAgbGV0IHNlYXJjaElucHV0O1xuXG4gIGZ1bmN0aW9uIGdldFBlcnNvbkhUTUwocGVyc29uKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwid3N1LWNhcmQgd3N1LWNhcmQtcGVyc29uIHdzdS1pbWFnZS1mcmFtZS0tcmF0aW8tc3F1YXJlIHdzdS1jYXJkLS1vdXRsaW5lLXNoYWRvdyBqcy1wZW9wbGUtbGlzdF9fcGVyc29uXCIgZGF0YS1uaWQ9XCIke1xuICAgICAgcGVyc29uLm5pZFxuICAgIH1cIj5cbiAgICAgICAgJHtcbiAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwicGhvdG9cIilcbiAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1pbWFnZS1mcmFtZSB3c3UtY2FyZF9fcGVyc29uLWltYWdlIHdzdS1wZW9wbGUtbGlzdF9fcGVyc29uLWltYWdlJHtcbiAgICAgICAgICAgICAgcGVyc29uLnBob3RvID8gXCIgaGFzLXBob3RvXCIgOiBcIlwiXG4gICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgIHBlcnNvbi5waG90b1xuICAgICAgICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BlcnNvbi5waG90b31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uLnBob3RvX3NyY3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHNyY3NldD1cIiR7cGVyc29uLnBob3RvX3NyY3NldH1cImBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbi5waG90b19zcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBzaXplcz1cIihtaW4td2lkdGg6IDc2OHB4KSAzMy4zdncsIDEwMHZ3XCJgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGxvYWRpbmc9XCJsYXp5XCI+YFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtY2FyZF9fY29udGVudFwiPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIm5hbWVcIilcbiAgICAgICAgICAgICAgICA/IGA8JHtlbC5kYXRhc2V0LmhlYWRpbmd0YWd9IGNsYXNzPVwid3N1LWNhcmRfX3BlcnNvbi1uYW1lXCI+JHtwZXJzb24ubmFtZX08LyR7ZWwuZGF0YXNldC5oZWFkaW5ndGFnfT5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJ0aXRsZVwiKSAmJiBBcnJheS5pc0FycmF5KHBlcnNvbi50aXRsZSlcbiAgICAgICAgICAgICAgICA/IHBlcnNvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICh0KSA9PiBgPGRpdiBjbGFzcz1cIndzdS1jYXJkX19wZXJzb24tdGl0bGVcIj4ke3R9PC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJlbWFpbFwiKSAmJiBwZXJzb24uZW1haWxcbiAgICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtZW1haWwgd3N1LW1ldGEtLWljb24tY3JpbXNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndzdS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5FbWFpbCBBZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiR7cGVyc29uLmVtYWlsfVwiPiR7cGVyc29uLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJvZmZpY2VcIikgJiYgcGVyc29uLm9mZmljZVxuICAgICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtbWV0YS1sb2NhdGlvbiB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiR7cGVyc29uLm9mZmljZX08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwicGhvbmVcIikgJiYgcGVyc29uLnBob25lXG4gICAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1tZXRhLXBob25lIHdzdS1tZXRhLS1pY29uLWNyaW1zb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3c3Utc2NyZWVuLXJlYWRlci1vbmx5XCI+UGhvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6JHtwZXJzb24ucGhvbmV9XCI+JHtwZXJzb24ucGhvbmV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIndlYnNpdGVcIikgJiYgcGVyc29uLndlYnNpdGVcbiAgICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtd2Vic2l0ZSB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3BlcnNvbi53ZWJzaXRlfVwiPiR7ZWwuZGF0YXNldC53ZWJzaXRlTGlua1RleHR9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGVUZXJtVmFsdWUoc2x1Zykge1xuICAgIGlmIChvbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcyA9PT0gXCJ0cnVlXCIgJiYgaW5jbHVkZWRUZXJtcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gaW5jbHVkZWRUZXJtcy5pbmNsdWRlcyhzbHVnKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgb25seVNob3dTZWxlY3RlZFRlcm1WYWx1ZXMgPT09IFwiZmFsc2VcIiAmJlxuICAgICAgZXhjbHVkZWRUZXJtcy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gIWV4Y2x1ZGVkVGVybXMuaW5jbHVkZXMoc2x1Zyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RGaWx0ZXJIVE1MKGZpbHRlciwgcGVvcGxlKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbXTtcblxuICAgIC8vIHNldCBmaWx0ZXIgb3B0aW9uc1xuICAgIHBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcbiAgICAgIGNvbnN0IGZpbHRlck9wdGlvbnMgPSBwZXJzb25bZmlsdGVyQXR0cmlidXRlTWFwW2ZpbHRlcl1dO1xuXG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucyAmJiBmaWx0ZXJPcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaWYgKCFhY3RpdmVGaWx0ZXJzLmluY2x1ZGVzKGZpbHRlcikpIHtcbiAgICAgICAgICBhY3RpdmVGaWx0ZXJzLnB1c2goZmlsdGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbHRlck9wdGlvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHNob3VsZEluY2x1ZGVUZXJtVmFsdWUodi5zbHVnKSAmJlxuICAgICAgICAgICAgb3B0aW9ucy5maW5kSW5kZXgoKG8pID0+IG8uc2x1ZyA9PT0gdi5zbHVnKSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gc29ydCBvcHRpb25zIGFscGhhYmV0aWNhbGx5XG4gICAgb3B0aW9ucy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgeCA9IGEubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHkgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiB4IDwgeSA/IC0xIDogeCA+IHkgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIC8vIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiXG4gICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgPyBgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWZpbHRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ3c3UtYnV0dG9uIHdzdS1wZW9wbGUtbGlzdF9fZmlsdGVyLXRvZ2dsZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiPiR7XG4gICAgICAgICAgZWwuZGF0YXNldFtmaWx0ZXIgKyBcIkZpbHRlckxhYmVsXCJdXG4gICAgICAgIH08L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1jb250YWluZXJcIiBhcmlhLWxhYmVsbGVkYnk9XCIke2NvbXBvbmVudElkfV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7b3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAobykgPT4gYDxsaSBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19maXRsZXItbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX2ZpdGxlci1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlcn1bXVwiIHZhbHVlPVwiJHtvLnNsdWd9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke28ubmFtZX0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5gXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlRmlsdGVycyhmaWx0ZXJzU3RyaW5nLCBwZW9wbGUpIHtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG4gICAgY29uc3QgZmlsdGVycyA9IGZpbHRlcnNTdHJpbmcuc3BsaXQoXCIsXCIpO1xuICAgIGNvbnN0IG5vblNlYXJjaEZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcigoZikgPT4gZiAmJiBmICE9PSBcInNlYXJjaFwiKTtcblxuICAgIC8vIHNldHVwIGZpbHRlcnMgY29udGFpbmVyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJ3c3UtcGVvcGxlLWxpc3RfX2ZpbHRlcnMtY29udGFpbmVyXCI7XG5cbiAgICAvLyBjcmVhdGUgbm9uLXNlYXJjaCBmaWx0ZXJzXG4gICAgbm9uU2VhcmNoRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdEZpbHRlciA9IGNyZWF0ZVNlbGVjdEZpbHRlckhUTUwoZmlsdGVyLCBwZW9wbGUpO1xuICAgICAgY29udGVudCArPSBzZWxlY3RGaWx0ZXI7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgc2VhcmNoIGZpbHRlclxuICAgIGlmIChmaWx0ZXJzLmluY2x1ZGVzKFwic2VhcmNoXCIpKSB7XG4gICAgICBjb250ZW50ICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWZpbHRlclwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWFyY2gtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtlbC5kYXRhc2V0LnNlYXJjaEZpbHRlckxhYmVsfVwiLz5cbiAgICAgICAgPC9kaXY+YDtcbiAgICB9XG5cbiAgICBjb250ZW50ICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdGVkLWZpbHRlcnMtY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLy8gd3JpdGUgZmlsdGVycyB0byBjb250YWluZXJcbiAgICBmaWx0ZXJzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZmlsdGVyc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUGVvcGxlQ29udGFpbmVyKHBlb3BsZSwgcGVvcGxlQ29udGFpbmVyKSB7XG4gICAgbGV0IHBlb3BsZUhUTUwgPSBcIlwiO1xuXG4gICAgcGVvcGxlLmZvckVhY2goKHApID0+IHtcbiAgICAgIHBlb3BsZUhUTUwgKz0gZ2V0UGVyc29uSFRNTChwKTtcbiAgICB9KTtcblxuICAgIHBlb3BsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBwZW9wbGVIVE1MO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGB3c3UtY2FyZC13cmFwcGVyIHdzdS1jYXJkLXdyYXBwZXItLXBlci1yb3ctJHtlbC5kYXRhc2V0LmNvbHVtbnN9IGpzLXBlb3BsZS1saXN0YDtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQZW9wbGVMaXN0KHBlb3BsZSkge1xuICAgIGxldCBpID0gMDtcblxuICAgIC8vIHNob3cgYW5kIHNvcnQgcGVvcGxlIGJ5IGZpbHRlcnNcbiAgICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICBjb25zdCBwZXJzb25FbGVtZW50ID0gQXJyYXkuZnJvbShwZW9wbGVFbGVtZW50cykuZmluZChcbiAgICAgICAgKHApID0+IHAuZGF0YXNldC5uaWQgPT09IHBlcnNvbi5uaWRcbiAgICAgICk7XG5cbiAgICAgIGlmIChwZXJzb25FbGVtZW50KSB7XG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUub3JkZXIgPSBpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBoaWRlIHBlb3BsZSBub3QgZm91bmQgaW4gZmlsdGVyaW5nXG4gICAgY29uc3QgcGVvcGxlVG9IaWRlID0gQXJyYXkuZnJvbShwZW9wbGVFbGVtZW50cykuZmlsdGVyKChwZXJzb25FbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwZW9wbGUuZmluZEluZGV4KChwKSA9PiBwLm5pZCA9PT0gcGVyc29uRWxlbWVudC5kYXRhc2V0Lm5pZCkgPT09IC0xXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcGVvcGxlVG9IaWRlLmZvckVhY2goKHBlcnNvbkVsZW1lbnQpID0+IHtcbiAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBwZW9wbGUubGVuZ3RoID09PSAwXG4gICAgICA/IGVsLmNsYXNzTGlzdC5hZGQoXCJoYXMtbm8tcmVzdWx0c1wiKVxuICAgICAgOiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLW5vLXJlc3VsdHNcIik7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJJbnB1dHMpIHtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG5cbiAgICBzZWxlY3RlZEZpbHRlcklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgY29udGVudCArPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0LWl0ZW1cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXItdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgZGF0YS1maWx0ZXItbGlzdD1cIiR7aW5wdXQubmFtZS5yZXBsYWNlKFwiW11cIiwgXCJcIil9XCIgXG4gICAgICAgICAgICBkYXRhLXZhbHVlPVwiJHtpbnB1dC52YWx1ZX1cIj5cbiAgICAgICAgICAgICR7aW5wdXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkRmlsdGVyc0xpc3QuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCkge1xuICAgIGxldCBzZWxlY3RlZEZpbHRlcklucHV0cyA9IFtdO1xuICAgIGxldCBmaWx0ZXJlZFBlb3BsZSA9IEpTT04ucGFyc2UoYWxsUGVvcGxlU3RyaW5nKTtcblxuICAgIGFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3QgY2hlY2tib3hJbnB1dHMgPSBmaWx0ZXJzQ29udGFpbmVyLmVsZW1lbnRzW2Ake2Z9W11gXTtcblxuICAgICAgaWYgKCFjaGVja2JveElucHV0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkSW5wdXRzID0gQXJyYXkuZnJvbShjaGVja2JveElucHV0cykuZmlsdGVyKFxuICAgICAgICAoZikgPT4gZi5jaGVja2VkXG4gICAgICApO1xuXG4gICAgICBpZiAoc2VsZWN0ZWRJbnB1dHMubGVuZ3RoID4gMCkge1xuICAgICAgICBzZWxlY3RlZEZpbHRlcklucHV0cyA9IHNlbGVjdGVkRmlsdGVySW5wdXRzLmNvbmNhdChzZWxlY3RlZElucHV0cyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzID0gc2VsZWN0ZWRJbnB1dHMubWFwKChzKSA9PiBzLnZhbHVlKTtcblxuICAgICAgICBmaWx0ZXJlZFBlb3BsZSA9IGZpbHRlcmVkUGVvcGxlLmZpbHRlcigocGVyc29uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcGVyc29uc1ZhbHVlcyA9IHBlcnNvbltmaWx0ZXJBdHRyaWJ1dGVNYXBbZl1dO1xuXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkVmFsdWVzLnNvbWUoKHYpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhKHBlcnNvbnNWYWx1ZXMuZmluZEluZGV4KChvKSA9PiB2ID09PSBvLnNsdWcpID09PSAtMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgc2VhcmNoSW5wdXQgJiZcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gICAgICBzZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPj0gM1xuICAgICkge1xuICAgICAgc2VhcmNoZXIuc2V0Q29sbGVjdGlvbihmaWx0ZXJlZFBlb3BsZSk7XG4gICAgICBjb25zdCByZXN1bHRzID0gc2VhcmNoZXIuc2VhcmNoKHNlYXJjaElucHV0LnZhbHVlKTtcblxuICAgICAgZmlsdGVyZWRQZW9wbGUgPSByZXN1bHRzLm1hcCgocikgPT4gci5pdGVtKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJJbnB1dHMpO1xuICAgIHVwZGF0ZVBlb3BsZUxpc3QoZmlsdGVyZWRQZW9wbGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZEV2ZW50cyhlbCkge1xuICAgIGZpbHRlcnNDb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIik7XG4gICAgZmlsdGVyVG9nZ2xlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXItdG9nZ2xlXCIpO1xuICAgIHNlYXJjaElucHV0ID0gZWwucXVlcnlTZWxlY3RvcihcIi53c3UtcGVvcGxlLWxpc3RfX3NlYXJjaC1pbnB1dFwiKTtcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0ID0gZWwucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0XCJcbiAgICApO1xuICAgIHBlb3BsZUNvbnRhaW5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXJzLWNvbnRhaW5lclwiKTtcbiAgICBwZW9wbGVFbGVtZW50cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcGVvcGxlLWxpc3RfX3BlcnNvblwiKTtcblxuICAgIC8vIGZpbHRlciBvbiBzZWxlY3Qgb3B0aW9uIGNoYW5nZVxuICAgIGZpbHRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ICE9PSBzZWFyY2hJbnB1dCkge1xuICAgICAgICBwcm9jZXNzUGVvcGxlRmlsdGVycygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZmlsdGVyIG9uIHNlYXJjaFxuICAgIHNlYXJjaElucHV0Py5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCk7IC8vIHNob3VsZCBjb25zaWRlciBkZWJvdW5jaW5nP1xuICAgIH0pO1xuXG4gICAgLy8gcmVtb3ZlIHNlbGVjdGVkIGZpbHRlciBvbiB0b2dnbGUgY2xpY2tcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgdG9nZ2xlID0gZS50YXJnZXQuY2xvc2VzdChcbiAgICAgICAgXCIud3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXItdG9nZ2xlXCJcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBmaWx0ZXJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYGlucHV0W25hbWVePVwiJHt0b2dnbGUuZGF0YXNldC5maWx0ZXJMaXN0fVwiXVt2YWx1ZT1cIiR7dG9nZ2xlLmRhdGFzZXQudmFsdWV9XCJdYFxuICAgICAgICApO1xuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgcHJvY2Vzc1Blb3BsZUZpbHRlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xpbmcgc2VsZWN0IGZpbHRlcnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZEZpbHRlcnNDb250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KFxuICAgICAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBlLnRhcmdldC5jbG9zZXN0KFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVyLXRvZ2dsZVwiKTtcbiAgICAgICAgY29uc3QgaW5zaWRlU2VsZWN0RmlsdGVyID1cbiAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWZpbHRlclwiKSAhPT0gbnVsbDtcblxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tzIGluc2lkZSBjbGlja2VkIGZpbHRlcnNDb250YWluZXJcbiAgICAgICAgaWYgKGNsaWNrZWRGaWx0ZXJzQ29udGFpbmVyID09PSBmaWx0ZXJzQ29udGFpbmVyKSB7XG4gICAgICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICAgICAgLy8gY2xvc2Ugb3RoZXIgb3BlbiBtZW51c1xuICAgICAgICAgICAgZmlsdGVyVG9nZ2xlcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0ICE9PSB0b2dnbGUpIHtcbiAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKHRvZ2dsZSwgIXdzdUFyaWFJc0V4cGFuZGVkKHRvZ2dsZSkpO1xuXG4gICAgICAgICAgICAvLyBjbG9zZSBhbGwgbWVudXMgaW4gZmlsdGVyQ29udGFpbmVyIGlmIGNsaWNrIHdhcyBub3QgaW4gYSB0b2dnbGUgb3Igc2VsZWN0IG1lbnVcbiAgICAgICAgICB9IGVsc2UgaWYgKCFpbnNpZGVTZWxlY3RGaWx0ZXIpIHtcbiAgICAgICAgICAgIGZpbHRlclRvZ2dsZXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xvc2UgYWxsIGlmIGNsaWNrIHdhcyBvdXRzaWRlIGN1cnJlbnQgZmlsdGVyc0NvbnRhaW5lclxuICAgICAgICBpZiAoXG4gICAgICAgICAgY2xpY2tlZEZpbHRlcnNDb250YWluZXIgPT09IG51bGwgfHxcbiAgICAgICAgICBjbGlja2VkRmlsdGVyc0NvbnRhaW5lciAhPT0gZmlsdGVyc0NvbnRhaW5lclxuICAgICAgICApIHtcbiAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCh0LCBmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUhUTUwocGVvcGxlKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBcIlwiO1xuXG4gICAgLy8gY3JlYXRlIGZpbHRlcnNcbiAgICBjb25zdCBmaWx0ZXJzQ29udGFpbmVyID0gY3JlYXRlUGVvcGxlRmlsdGVycyhlbC5kYXRhc2V0LmZpbHRlcnMsIHBlb3BsZSk7XG4gICAgY29udGVudCArPSBmaWx0ZXJzQ29udGFpbmVyLm91dGVySFRNTDtcblxuICAgIC8vIGNyZWF0ZSBwZW9wbGUgbGlzdFxuICAgIGNvbnN0IHBlb3BsZUNvbnRhaW5lciA9IGNyZWF0ZVBlb3BsZUNvbnRhaW5lcigpO1xuICAgIHBvcHVsYXRlUGVvcGxlQ29udGFpbmVyKHBlb3BsZSwgcGVvcGxlQ29udGFpbmVyKTtcbiAgICBjb250ZW50ICs9IHBlb3BsZUNvbnRhaW5lci5vdXRlckhUTUw7XG5cbiAgICAvLyB3cml0ZSBodG1sIHRvIGRvbVxuICAgIGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQZW9wbGUoKSB7XG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5QXR0cmlidXRlc1xuICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyLCBpZHgpIHtcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGN1cnIpO1xuXG4gICAgICAgIGlmIChhdHRyVmFsdWUpIHtcbiAgICAgICAgICBhY2MucHVzaChjdXJyICsgXCI9XCIgKyBhdHRyVmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKVxuICAgICAgLmpvaW4oXCImXCIpO1xuXG4gICAgLy8gbWFrZSByZXF1ZXN0XG4gICAgcmV0dXJuIGZldGNoKGFwaUVuZHBvaW50ICsgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGdldFBlb3BsZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGFsbFBlb3BsZVN0cmluZyA9IGRhdGE7XG4gICAgICBwZW9wbGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gICAgICBnZW5lcmF0ZUhUTUwocGVvcGxlKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJpbmRFdmVudHMoZWwpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0KCk7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLndzdS1wZW9wbGUtbGlzdFwiKS5mb3JFYWNoKChlbCkgPT4ge1xuICBuZXcgUGVvcGxlTGlzdChlbCk7XG59KTtcbiIsIi8qKlxuICogRnVzZS5qcyB2Ni41LjMgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDIxIEtpcm8gUmlzayAoaHR0cDovL2tpcm8ubWUpXG4gKiBBbGwgUmlnaHRzIFJlc2VydmVkLiBBcGFjaGUgU29mdHdhcmUgTGljZW5zZSAyLjBcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheVxuICAgID8gZ2V0VGFnKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWx1ZSlcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzXG5jb25zdCBJTkZJTklUWSA9IDEgLyAwO1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBsZXQgcmVzdWx0ID0gdmFsdWUgKyAnJztcbiAgcmV0dXJuIHJlc3VsdCA9PSAnMCcgJiYgMSAvIHZhbHVlID09IC1JTkZJTklUWSA/ICctMCcgOiByZXN1bHRcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbn1cblxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci9pc0Jvb2xlYW4uanNcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlID09PSB0cnVlIHx8XG4gICAgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBCb29sZWFuXScpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuLy8gQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNCbGFuayh2YWx1ZSkge1xuICByZXR1cm4gIXZhbHVlLnRyaW0oKS5sZW5ndGhcbn1cblxuLy8gR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuLy8gQWRhcHRlZCBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iL21hc3Rlci8uaW50ZXJuYWwvZ2V0VGFnLmpzXG5mdW5jdGlvbiBnZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGxcbiAgICA/IHZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgID8gJ1tvYmplY3QgVW5kZWZpbmVkXSdcbiAgICAgIDogJ1tvYmplY3QgTnVsbF0nXG4gICAgOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpXG59XG5cbmNvbnN0IEVYVEVOREVEX1NFQVJDSF9VTkFWQUlMQUJMRSA9ICdFeHRlbmRlZCBzZWFyY2ggaXMgbm90IGF2YWlsYWJsZSc7XG5cbmNvbnN0IElOQ09SUkVDVF9JTkRFWF9UWVBFID0gXCJJbmNvcnJlY3QgJ2luZGV4JyB0eXBlXCI7XG5cbmNvbnN0IExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWSA9IChrZXkpID0+XG4gIGBJbnZhbGlkIHZhbHVlIGZvciBrZXkgJHtrZXl9YDtcblxuY29uc3QgUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFID0gKG1heCkgPT5cbiAgYFBhdHRlcm4gbGVuZ3RoIGV4Y2VlZHMgbWF4IG9mICR7bWF4fS5gO1xuXG5jb25zdCBNSVNTSU5HX0tFWV9QUk9QRVJUWSA9IChuYW1lKSA9PiBgTWlzc2luZyAke25hbWV9IHByb3BlcnR5IGluIGtleWA7XG5cbmNvbnN0IElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRSA9IChrZXkpID0+XG4gIGBQcm9wZXJ0eSAnd2VpZ2h0JyBpbiBrZXkgJyR7a2V5fScgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJgO1xuXG5jb25zdCBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5jbGFzcyBLZXlTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKGtleXMpIHtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fa2V5TWFwID0ge307XG5cbiAgICBsZXQgdG90YWxXZWlnaHQgPSAwO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBvYmogPSBjcmVhdGVLZXkoa2V5KTtcblxuICAgICAgdG90YWxXZWlnaHQgKz0gb2JqLndlaWdodDtcblxuICAgICAgdGhpcy5fa2V5cy5wdXNoKG9iaik7XG4gICAgICB0aGlzLl9rZXlNYXBbb2JqLmlkXSA9IG9iajtcblxuICAgICAgdG90YWxXZWlnaHQgKz0gb2JqLndlaWdodDtcbiAgICB9KTtcblxuICAgIC8vIE5vcm1hbGl6ZSB3ZWlnaHRzIHNvIHRoYXQgdGhlaXIgc3VtIGlzIGVxdWFsIHRvIDFcbiAgICB0aGlzLl9rZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAga2V5LndlaWdodCAvPSB0b3RhbFdlaWdodDtcbiAgICB9KTtcbiAgfVxuICBnZXQoa2V5SWQpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5TWFwW2tleUlkXVxuICB9XG4gIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleXNcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2tleXMpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICBsZXQgcGF0aCA9IG51bGw7XG4gIGxldCBpZCA9IG51bGw7XG4gIGxldCBzcmMgPSBudWxsO1xuICBsZXQgd2VpZ2h0ID0gMTtcblxuICBpZiAoaXNTdHJpbmcoa2V5KSB8fCBpc0FycmF5KGtleSkpIHtcbiAgICBzcmMgPSBrZXk7XG4gICAgcGF0aCA9IGNyZWF0ZUtleVBhdGgoa2V5KTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKGtleSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFoYXNPd24uY2FsbChrZXksICduYW1lJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNSVNTSU5HX0tFWV9QUk9QRVJUWSgnbmFtZScpKVxuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBrZXkubmFtZTtcbiAgICBzcmMgPSBuYW1lO1xuXG4gICAgaWYgKGhhc093bi5jYWxsKGtleSwgJ3dlaWdodCcpKSB7XG4gICAgICB3ZWlnaHQgPSBrZXkud2VpZ2h0O1xuXG4gICAgICBpZiAod2VpZ2h0IDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfS0VZX1dFSUdIVF9WQUxVRShuYW1lKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChuYW1lKTtcbiAgICBpZCA9IGNyZWF0ZUtleUlkKG5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGF0aCwgaWQsIHdlaWdodCwgc3JjIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5UGF0aChrZXkpIHtcbiAgcmV0dXJuIGlzQXJyYXkoa2V5KSA/IGtleSA6IGtleS5zcGxpdCgnLicpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleUlkKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5LmpvaW4oJy4nKSA6IGtleVxufVxuXG5mdW5jdGlvbiBnZXQob2JqLCBwYXRoKSB7XG4gIGxldCBsaXN0ID0gW107XG4gIGxldCBhcnIgPSBmYWxzZTtcblxuICBjb25zdCBkZWVwR2V0ID0gKG9iaiwgcGF0aCwgaW5kZXgpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChvYmopKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFwYXRoW2luZGV4XSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBwYXRoIGxlZnQsIHdlJ3ZlIGFycml2ZWQgYXQgdGhlIG9iamVjdCB3ZSBjYXJlIGFib3V0LlxuICAgICAgbGlzdC5wdXNoKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBrZXkgPSBwYXRoW2luZGV4XTtcblxuICAgICAgY29uc3QgdmFsdWUgPSBvYmpba2V5XTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgbGFzdCB2YWx1ZSBpbiB0aGUgcGF0aCwgYW5kIGlmIGl0J3MgYSBzdHJpbmcvbnVtYmVyL2Jvb2wsXG4gICAgICAvLyBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICAgIGlmIChcbiAgICAgICAgaW5kZXggPT09IHBhdGgubGVuZ3RoIC0gMSAmJlxuICAgICAgICAoaXNTdHJpbmcodmFsdWUpIHx8IGlzTnVtYmVyKHZhbHVlKSB8fCBpc0Jvb2xlYW4odmFsdWUpKVxuICAgICAgKSB7XG4gICAgICAgIGxpc3QucHVzaCh0b1N0cmluZyh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBhcnIgPSB0cnVlO1xuICAgICAgICAvLyBTZWFyY2ggZWFjaCBpdGVtIGluIHRoZSBhcnJheS5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgZGVlcEdldCh2YWx1ZVtpXSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmxlbmd0aCkge1xuICAgICAgICAvLyBBbiBvYmplY3QuIFJlY3Vyc2UgZnVydGhlci5cbiAgICAgICAgZGVlcEdldCh2YWx1ZSwgcGF0aCwgaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNpbmNlIHBhdGggdXNlZCB0byBiZSBhIHN0cmluZylcbiAgZGVlcEdldChvYmosIGlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogcGF0aCwgMCk7XG5cbiAgcmV0dXJuIGFyciA/IGxpc3QgOiBsaXN0WzBdXG59XG5cbmNvbnN0IE1hdGNoT3B0aW9ucyA9IHtcbiAgLy8gV2hldGhlciB0aGUgbWF0Y2hlcyBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdCBzZXQuIFdoZW4gYHRydWVgLCBlYWNoIHJlY29yZCBpbiB0aGUgcmVzdWx0XG4gIC8vIHNldCB3aWxsIGluY2x1ZGUgdGhlIGluZGljZXMgb2YgdGhlIG1hdGNoZWQgY2hhcmFjdGVycy5cbiAgLy8gVGhlc2UgY2FuIGNvbnNlcXVlbnRseSBiZSB1c2VkIGZvciBoaWdobGlnaHRpbmcgcHVycG9zZXMuXG4gIGluY2x1ZGVNYXRjaGVzOiBmYWxzZSxcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBtYXRjaGluZyBmdW5jdGlvbiB3aWxsIGNvbnRpbnVlIHRvIHRoZSBlbmQgb2YgYSBzZWFyY2ggcGF0dGVybiBldmVuIGlmXG4gIC8vIGEgcGVyZmVjdCBtYXRjaCBoYXMgYWxyZWFkeSBiZWVuIGxvY2F0ZWQgaW4gdGhlIHN0cmluZy5cbiAgZmluZEFsbE1hdGNoZXM6IGZhbHNlLFxuICAvLyBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgbXVzdCBiZSBtYXRjaGVkIGJlZm9yZSBhIHJlc3VsdCBpcyBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxXG59O1xuXG5jb25zdCBCYXNpY09wdGlvbnMgPSB7XG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgYWxnb3JpdGhtIGNvbnRpbnVlcyBzZWFyY2hpbmcgdG8gdGhlIGVuZCBvZiB0aGUgaW5wdXQgZXZlbiBpZiBhIHBlcmZlY3RcbiAgLy8gbWF0Y2ggaXMgZm91bmQgYmVmb3JlIHRoZSBlbmQgb2YgdGhlIHNhbWUgaW5wdXQuXG4gIGlzQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIC8vIFdoZW4gdHJ1ZSwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgaW5jbHVkZVNjb3JlOiBmYWxzZSxcbiAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZC4gVGhpcyBhbHNvIHN1cHBvcnRzIG5lc3RlZCBwcm9wZXJ0aWVzLlxuICBrZXlzOiBbXSxcbiAgLy8gV2hldGhlciB0byBzb3J0IHRoZSByZXN1bHQgbGlzdCwgYnkgc2NvcmVcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgLy8gRGVmYXVsdCBzb3J0IGZ1bmN0aW9uOiBzb3J0IGJ5IGFzY2VuZGluZyBzY29yZSwgYXNjZW5kaW5nIGluZGV4XG4gIHNvcnRGbjogKGEsIGIpID0+XG4gICAgYS5zY29yZSA9PT0gYi5zY29yZSA/IChhLmlkeCA8IGIuaWR4ID8gLTEgOiAxKSA6IGEuc2NvcmUgPCBiLnNjb3JlID8gLTEgOiAxXG59O1xuXG5jb25zdCBGdXp6eU9wdGlvbnMgPSB7XG4gIC8vIEFwcHJveGltYXRlbHkgd2hlcmUgaW4gdGhlIHRleHQgaXMgdGhlIHBhdHRlcm4gZXhwZWN0ZWQgdG8gYmUgZm91bmQ/XG4gIGxvY2F0aW9uOiAwLFxuICAvLyBBdCB3aGF0IHBvaW50IGRvZXMgdGhlIG1hdGNoIGFsZ29yaXRobSBnaXZlIHVwLiBBIHRocmVzaG9sZCBvZiAnMC4wJyByZXF1aXJlcyBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gKG9mIGJvdGggbGV0dGVycyBhbmQgbG9jYXRpb24pLCBhIHRocmVzaG9sZCBvZiAnMS4wJyB3b3VsZCBtYXRjaCBhbnl0aGluZy5cbiAgdGhyZXNob2xkOiAwLjYsXG4gIC8vIERldGVybWluZXMgaG93IGNsb3NlIHRoZSBtYXRjaCBtdXN0IGJlIHRvIHRoZSBmdXp6eSBsb2NhdGlvbiAoc3BlY2lmaWVkIGFib3ZlKS5cbiAgLy8gQW4gZXhhY3QgbGV0dGVyIG1hdGNoIHdoaWNoIGlzICdkaXN0YW5jZScgY2hhcmFjdGVycyBhd2F5IGZyb20gdGhlIGZ1enp5IGxvY2F0aW9uXG4gIC8vIHdvdWxkIHNjb3JlIGFzIGEgY29tcGxldGUgbWlzbWF0Y2guIEEgZGlzdGFuY2Ugb2YgJzAnIHJlcXVpcmVzIHRoZSBtYXRjaCBiZSBhdFxuICAvLyB0aGUgZXhhY3QgbG9jYXRpb24gc3BlY2lmaWVkLCBhIHRocmVzaG9sZCBvZiAnMTAwMCcgd291bGQgcmVxdWlyZSBhIHBlcmZlY3QgbWF0Y2hcbiAgLy8gdG8gYmUgd2l0aGluIDgwMCBjaGFyYWN0ZXJzIG9mIHRoZSBmdXp6eSBsb2NhdGlvbiB0byBiZSBmb3VuZCB1c2luZyBhIDAuOCB0aHJlc2hvbGQuXG4gIGRpc3RhbmNlOiAxMDBcbn07XG5cbmNvbnN0IEFkdmFuY2VkT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIGl0IGVuYWJsZXMgdGhlIHVzZSBvZiB1bml4LWxpa2Ugc2VhcmNoIGNvbW1hbmRzXG4gIHVzZUV4dGVuZGVkU2VhcmNoOiBmYWxzZSxcbiAgLy8gVGhlIGdldCBmdW5jdGlvbiB0byB1c2Ugd2hlbiBmZXRjaGluZyBhbiBvYmplY3QncyBwcm9wZXJ0aWVzLlxuICAvLyBUaGUgZGVmYXVsdCB3aWxsIHNlYXJjaCBuZXN0ZWQgcGF0aHMgKmllIGZvby5iYXIuYmF6KlxuICBnZXRGbjogZ2V0LFxuICAvLyBXaGVuIGB0cnVlYCwgc2VhcmNoIHdpbGwgaWdub3JlIGBsb2NhdGlvbmAgYW5kIGBkaXN0YW5jZWAsIHNvIGl0IHdvbid0IG1hdHRlclxuICAvLyB3aGVyZSBpbiB0aGUgc3RyaW5nIHRoZSBwYXR0ZXJuIGFwcGVhcnMuXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmdXp6aW5lc3Mtc2NvcmVcbiAgaWdub3JlTG9jYXRpb246IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIGNhbGN1bGF0aW9uIGZvciB0aGUgcmVsZXZhbmNlIHNjb3JlICh1c2VkIGZvciBzb3J0aW5nKSB3aWxsXG4gIC8vIGlnbm9yZSB0aGUgZmllbGQtbGVuZ3RoIG5vcm0uXG4gIC8vIE1vcmUgaW5mbzogaHR0cHM6Ly9mdXNlanMuaW8vY29uY2VwdHMvc2NvcmluZy10aGVvcnkuaHRtbCNmaWVsZC1sZW5ndGgtbm9ybVxuICBpZ25vcmVGaWVsZE5vcm06IGZhbHNlLFxuICAvLyBUaGUgd2VpZ2h0IHRvIGRldGVybWluZSBob3cgbXVjaCBmaWVsZCBsZW5ndGggbm9ybSBlZmZlY3RzIHNjb3JpbmcuXG4gIGZpZWxkTm9ybVdlaWdodDogMVxufTtcblxudmFyIENvbmZpZyA9IHtcbiAgLi4uQmFzaWNPcHRpb25zLFxuICAuLi5NYXRjaE9wdGlvbnMsXG4gIC4uLkZ1enp5T3B0aW9ucyxcbiAgLi4uQWR2YW5jZWRPcHRpb25zXG59O1xuXG5jb25zdCBTUEFDRSA9IC9bXiBdKy9nO1xuXG4vLyBGaWVsZC1sZW5ndGggbm9ybTogdGhlIHNob3J0ZXIgdGhlIGZpZWxkLCB0aGUgaGlnaGVyIHRoZSB3ZWlnaHQuXG4vLyBTZXQgdG8gMyBkZWNpbWFscyB0byByZWR1Y2UgaW5kZXggc2l6ZS5cbmZ1bmN0aW9uIG5vcm0od2VpZ2h0ID0gMSwgbWFudGlzc2EgPSAzKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuICBjb25zdCBtID0gTWF0aC5wb3coMTAsIG1hbnRpc3NhKTtcblxuICByZXR1cm4ge1xuICAgIGdldCh2YWx1ZSkge1xuICAgICAgY29uc3QgbnVtVG9rZW5zID0gdmFsdWUubWF0Y2goU1BBQ0UpLmxlbmd0aDtcblxuICAgICAgaWYgKGNhY2hlLmhhcyhudW1Ub2tlbnMpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQobnVtVG9rZW5zKVxuICAgICAgfVxuXG4gICAgICAvLyBEZWZhdWx0IGZ1bmN0aW9uIGlzIDEvc3FydCh4KSwgd2VpZ2h0IG1ha2VzIHRoYXQgdmFyaWFibGVcbiAgICAgIGNvbnN0IG5vcm0gPSAxIC8gTWF0aC5wb3cobnVtVG9rZW5zLCAwLjUgKiB3ZWlnaHQpO1xuXG4gICAgICAvLyBJbiBwbGFjZSBvZiBgdG9GaXhlZChtYW50aXNzYSlgLCBmb3IgZmFzdGVyIGNvbXB1dGF0aW9uXG4gICAgICBjb25zdCBuID0gcGFyc2VGbG9hdChNYXRoLnJvdW5kKG5vcm0gKiBtKSAvIG0pO1xuXG4gICAgICBjYWNoZS5zZXQobnVtVG9rZW5zLCBuKTtcblxuICAgICAgcmV0dXJuIG5cbiAgICB9LFxuICAgIGNsZWFyKCkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnVzZUluZGV4IHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGdldEZuID0gQ29uZmlnLmdldEZuLFxuICAgIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHRcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5ub3JtID0gbm9ybShmaWVsZE5vcm1XZWlnaHQsIDMpO1xuICAgIHRoaXMuZ2V0Rm4gPSBnZXRGbjtcbiAgICB0aGlzLmlzQ3JlYXRlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRJbmRleFJlY29yZHMoKTtcbiAgfVxuICBzZXRTb3VyY2VzKGRvY3MgPSBbXSkge1xuICAgIHRoaXMuZG9jcyA9IGRvY3M7XG4gIH1cbiAgc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMgPSBbXSkge1xuICAgIHRoaXMucmVjb3JkcyA9IHJlY29yZHM7XG4gIH1cbiAgc2V0S2V5cyhrZXlzID0gW10pIHtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMuX2tleXNNYXAgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLl9rZXlzTWFwW2tleS5pZF0gPSBpZHg7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlKCkge1xuICAgIGlmICh0aGlzLmlzQ3JlYXRlZCB8fCAhdGhpcy5kb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pc0NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxTdHJpbmc+XG4gICAgaWYgKGlzU3RyaW5nKHRoaXMuZG9jc1swXSkpIHtcbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMaXN0IGlzIEFycmF5PE9iamVjdD5cbiAgICAgIHRoaXMuZG9jcy5mb3JFYWNoKChkb2MsIGRvY0luZGV4KSA9PiB7XG4gICAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMubm9ybS5jbGVhcigpO1xuICB9XG4gIC8vIEFkZHMgYSBkb2MgdG8gdGhlIGVuZCBvZiB0aGUgaW5kZXhcbiAgYWRkKGRvYykge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuc2l6ZSgpO1xuXG4gICAgaWYgKGlzU3RyaW5nKGRvYykpIHtcbiAgICAgIHRoaXMuX2FkZFN0cmluZyhkb2MsIGlkeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FkZE9iamVjdChkb2MsIGlkeCk7XG4gICAgfVxuICB9XG4gIC8vIFJlbW92ZXMgdGhlIGRvYyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IG9mIHRoZSBpbmRleFxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLnJlY29yZHMuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAvLyBDaGFuZ2UgcmVmIGluZGV4IG9mIGV2ZXJ5IHN1YnNxdWVudCBkb2NcbiAgICBmb3IgKGxldCBpID0gaWR4LCBsZW4gPSB0aGlzLnNpemUoKTsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB0aGlzLnJlY29yZHNbaV0uaSAtPSAxO1xuICAgIH1cbiAgfVxuICBnZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSB7XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5fa2V5c01hcFtrZXlJZF1dXG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRzLmxlbmd0aFxuICB9XG4gIF9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCkge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykgfHwgaXNCbGFuayhkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgcmVjb3JkID0ge1xuICAgICAgdjogZG9jLFxuICAgICAgaTogZG9jSW5kZXgsXG4gICAgICBuOiB0aGlzLm5vcm0uZ2V0KGRvYylcbiAgICB9O1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICBfYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpIHtcbiAgICBsZXQgcmVjb3JkID0geyBpOiBkb2NJbmRleCwgJDoge30gfTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICB0aGlzLmtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coa2V5KVxuICAgICAgbGV0IHZhbHVlID0gdGhpcy5nZXRGbihkb2MsIGtleS5wYXRoKTtcblxuICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHN1YlJlY29yZHMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RhY2sgPSBbeyBuZXN0ZWRBcnJJbmRleDogLTEsIHZhbHVlIH1dO1xuXG4gICAgICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCB7IG5lc3RlZEFyckluZGV4LCB2YWx1ZSB9ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgICAgICBpOiBuZXN0ZWRBcnJJbmRleCxcbiAgICAgICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlJlY29yZHMucHVzaChzdWJSZWNvcmQpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0sIGspID0+IHtcbiAgICAgICAgICAgICAgc3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgICAgbmVzdGVkQXJySW5kZXg6IGssXG4gICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgO1xuICAgICAgICB9XG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZHM7XG4gICAgICB9IGVsc2UgaWYgKCFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleXM6IHRoaXMua2V5cyxcbiAgICAgIHJlY29yZHM6IHRoaXMucmVjb3Jkc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChcbiAga2V5cyxcbiAgZG9jcyxcbiAgeyBnZXRGbiA9IENvbmZpZy5nZXRGbiwgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodCB9ID0ge31cbikge1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzLm1hcChjcmVhdGVLZXkpKTtcbiAgbXlJbmRleC5zZXRTb3VyY2VzKGRvY3MpO1xuICBteUluZGV4LmNyZWF0ZSgpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBwYXJzZUluZGV4KFxuICBkYXRhLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IHsga2V5cywgcmVjb3JkcyB9ID0gZGF0YTtcbiAgY29uc3QgbXlJbmRleCA9IG5ldyBGdXNlSW5kZXgoeyBnZXRGbiwgZmllbGROb3JtV2VpZ2h0IH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cyk7XG4gIG15SW5kZXguc2V0SW5kZXhSZWNvcmRzKHJlY29yZHMpO1xuICByZXR1cm4gbXlJbmRleFxufVxuXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUkMShcbiAgcGF0dGVybixcbiAge1xuICAgIGVycm9ycyA9IDAsXG4gICAgY3VycmVudExvY2F0aW9uID0gMCxcbiAgICBleHBlY3RlZExvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGlmIChpZ25vcmVMb2NhdGlvbikge1xuICAgIHJldHVybiBhY2N1cmFjeVxuICB9XG5cbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gY29udmVydE1hc2tUb0luZGljZXMoXG4gIG1hdGNobWFzayA9IFtdLFxuICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoXG4pIHtcbiAgbGV0IGluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gaW5kaWNlc1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuZnVuY3Rpb24gc2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFKE1BWF9CSVRTKSlcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gZXhwZWN0ZWRMb2NhdGlvbjtcblxuICAvLyBQZXJmb3JtYW5jZTogb25seSBjb21wdXRlciBtYXRjaGVzIHdoZW4gdGhlIG1pbk1hdGNoQ2hhckxlbmd0aCA+IDFcbiAgLy8gT1IgaWYgYGluY2x1ZGVNYXRjaGVzYCBpcyB0cnVlLlxuICBjb25zdCBjb21wdXRlTWF0Y2hlcyA9IG1pbk1hdGNoQ2hhckxlbmd0aCA+IDEgfHwgaW5jbHVkZU1hdGNoZXM7XG4gIC8vIEEgbWFzayBvZiB0aGUgbWF0Y2hlcywgdXNlZCBmb3IgYnVpbGRpbmcgdGhlIGluZGljZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gY29tcHV0ZU1hdGNoZXMgPyBBcnJheSh0ZXh0TGVuKSA6IFtdO1xuXG4gIGxldCBpbmRleDtcblxuICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG4gIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgYmVzdExvY2F0aW9uKSkgPiAtMSkge1xuICAgIGxldCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogaW5kZXgsXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgY3VycmVudFRocmVzaG9sZCA9IE1hdGgubWluKHNjb3JlLCBjdXJyZW50VGhyZXNob2xkKTtcbiAgICBiZXN0TG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG5cbiAgICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgcGF0dGVybkxlbikge1xuICAgICAgICBtYXRjaE1hc2tbaW5kZXggKyBpXSA9IDE7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXNldCB0aGUgYmVzdCBsb2NhdGlvblxuICBiZXN0TG9jYXRpb24gPSAtMTtcblxuICBsZXQgbGFzdEJpdEFyciA9IFtdO1xuICBsZXQgZmluYWxTY29yZSA9IDE7XG4gIGxldCBiaW5NYXggPSBwYXR0ZXJuTGVuICsgdGV4dExlbjtcblxuICBjb25zdCBtYXNrID0gMSA8PCAocGF0dGVybkxlbiAtIDEpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybkxlbjsgaSArPSAxKSB7XG4gICAgLy8gU2NhbiBmb3IgdGhlIGJlc3QgbWF0Y2g7IGVhY2ggaXRlcmF0aW9uIGFsbG93cyBmb3Igb25lIG1vcmUgZXJyb3IuXG4gICAgLy8gUnVuIGEgYmluYXJ5IHNlYXJjaCB0byBkZXRlcm1pbmUgaG93IGZhciBmcm9tIHRoZSBtYXRjaCBsb2NhdGlvbiB3ZSBjYW4gc3RyYXlcbiAgICAvLyBhdCB0aGlzIGVycm9yIGxldmVsLlxuICAgIGxldCBiaW5NaW4gPSAwO1xuICAgIGxldCBiaW5NaWQgPSBiaW5NYXg7XG5cbiAgICB3aGlsZSAoYmluTWluIDwgYmluTWlkKSB7XG4gICAgICBjb25zdCBzY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgZXJyb3JzOiBpLFxuICAgICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgIGJpbk1pbiA9IGJpbk1pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpbk1heCA9IGJpbk1pZDtcbiAgICAgIH1cblxuICAgICAgYmluTWlkID0gTWF0aC5mbG9vcigoYmluTWF4IC0gYmluTWluKSAvIDIgKyBiaW5NaW4pO1xuICAgIH1cblxuICAgIC8vIFVzZSB0aGUgcmVzdWx0IGZyb20gdGhpcyBpdGVyYXRpb24gYXMgdGhlIG1heGltdW0gZm9yIHRoZSBuZXh0LlxuICAgIGJpbk1heCA9IGJpbk1pZDtcblxuICAgIGxldCBzdGFydCA9IE1hdGgubWF4KDEsIGV4cGVjdGVkTG9jYXRpb24gLSBiaW5NaWQgKyAxKTtcbiAgICBsZXQgZmluaXNoID0gZmluZEFsbE1hdGNoZXNcbiAgICAgID8gdGV4dExlblxuICAgICAgOiBNYXRoLm1pbihleHBlY3RlZExvY2F0aW9uICsgYmluTWlkLCB0ZXh0TGVuKSArIHBhdHRlcm5MZW47XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBiaXQgYXJyYXlcbiAgICBsZXQgYml0QXJyID0gQXJyYXkoZmluaXNoICsgMik7XG5cbiAgICBiaXRBcnJbZmluaXNoICsgMV0gPSAoMSA8PCBpKSAtIDE7XG5cbiAgICBmb3IgKGxldCBqID0gZmluaXNoOyBqID49IHN0YXJ0OyBqIC09IDEpIHtcbiAgICAgIGxldCBjdXJyZW50TG9jYXRpb24gPSBqIC0gMTtcbiAgICAgIGxldCBjaGFyTWF0Y2ggPSBwYXR0ZXJuQWxwaGFiZXRbdGV4dC5jaGFyQXQoY3VycmVudExvY2F0aW9uKV07XG5cbiAgICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgICAvLyBTcGVlZCB1cDogcXVpY2sgYm9vbCB0byBpbnQgY29udmVyc2lvbiAoaS5lLCBgY2hhck1hdGNoID8gMSA6IDBgKVxuICAgICAgICBtYXRjaE1hc2tbY3VycmVudExvY2F0aW9uXSA9ICshIWNoYXJNYXRjaDtcbiAgICAgIH1cblxuICAgICAgLy8gRmlyc3QgcGFzczogZXhhY3QgbWF0Y2hcbiAgICAgIGJpdEFycltqXSA9ICgoYml0QXJyW2ogKyAxXSA8PCAxKSB8IDEpICYgY2hhck1hdGNoO1xuXG4gICAgICAvLyBTdWJzZXF1ZW50IHBhc3NlczogZnV6enkgbWF0Y2hcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGJpdEFycltqXSB8PVxuICAgICAgICAgICgobGFzdEJpdEFycltqICsgMV0gfCBsYXN0Qml0QXJyW2pdKSA8PCAxKSB8IDEgfCBsYXN0Qml0QXJyW2ogKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdEFycltqXSAmIG1hc2spIHtcbiAgICAgICAgZmluYWxTY29yZSA9IGNvbXB1dGVTY29yZSQxKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgZXJyb3JzOiBpICsgMSxcbiAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoc2NvcmUgPiBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGxhc3RCaXRBcnIgPSBiaXRBcnI7XG4gIH1cblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgaXNNYXRjaDogYmVzdExvY2F0aW9uID49IDAsXG4gICAgLy8gQ291bnQgZXhhY3QgbWF0Y2hlcyAodGhvc2Ugd2l0aCBhIHNjb3JlIG9mIDApIHRvIGJlIFwiYWxtb3N0XCIgZXhhY3RcbiAgICBzY29yZTogTWF0aC5tYXgoMC4wMDEsIGZpbmFsU2NvcmUpXG4gIH07XG5cbiAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgY29uc3QgaW5kaWNlcyA9IGNvbnZlcnRNYXNrVG9JbmRpY2VzKG1hdGNoTWFzaywgbWluTWF0Y2hDaGFyTGVuZ3RoKTtcbiAgICBpZiAoIWluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaXNNYXRjaCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gaW5kaWNlcztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSB7XG4gIGxldCBtYXNrID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHBhdHRlcm4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBjb25zdCBjaGFyID0gcGF0dGVybi5jaGFyQXQoaSk7XG4gICAgbWFza1tjaGFyXSA9IChtYXNrW2NoYXJdIHx8IDApIHwgKDEgPDwgKGxlbiAtIGkgLSAxKSk7XG4gIH1cblxuICByZXR1cm4gbWFza1xufVxuXG5jbGFzcyBCaXRhcFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmNodW5rcyA9IFtdO1xuXG4gICAgaWYgKCF0aGlzLnBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhZGRDaHVuayA9IChwYXR0ZXJuLCBzdGFydEluZGV4KSA9PiB7XG4gICAgICB0aGlzLmNodW5rcy5wdXNoKHtcbiAgICAgICAgcGF0dGVybixcbiAgICAgICAgYWxwaGFiZXQ6IGNyZWF0ZVBhdHRlcm5BbHBoYWJldChwYXR0ZXJuKSxcbiAgICAgICAgc3RhcnRJbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICBpZiAobGVuID4gTUFYX0JJVFMpIHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGNvbnN0IHJlbWFpbmRlciA9IGxlbiAlIE1BWF9CSVRTO1xuICAgICAgY29uc3QgZW5kID0gbGVuIC0gcmVtYWluZGVyO1xuXG4gICAgICB3aGlsZSAoaSA8IGVuZCkge1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKGksIE1BWF9CSVRTKSwgaSk7XG4gICAgICAgIGkgKz0gTUFYX0JJVFM7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZW1haW5kZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGxlbiAtIE1BWF9CSVRTO1xuICAgICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4uc3Vic3RyKHN0YXJ0SW5kZXgpLCBzdGFydEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLCAwKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgeyBpc0Nhc2VTZW5zaXRpdmUsIGluY2x1ZGVNYXRjaGVzIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBpZiAoIWlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBFeGFjdCBtYXRjaFxuICAgIGlmICh0aGlzLnBhdHRlcm4gPT09IHRleHQpIHtcbiAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgIHNjb3JlOiAwXG4gICAgICB9O1xuXG4gICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgcmVzdWx0LmluZGljZXMgPSBbWzAsIHRleHQubGVuZ3RoIC0gMV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlLCB1c2UgQml0YXAgYWxnb3JpdGhtXG4gICAgY29uc3Qge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgbGV0IGhhc01hdGNoZXMgPSBmYWxzZTtcblxuICAgIHRoaXMuY2h1bmtzLmZvckVhY2goKHsgcGF0dGVybiwgYWxwaGFiZXQsIHN0YXJ0SW5kZXggfSkgPT4ge1xuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoKHRleHQsIHBhdHRlcm4sIGFscGhhYmV0LCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbiArIHN0YXJ0SW5kZXgsXG4gICAgICAgIGRpc3RhbmNlLFxuICAgICAgICB0aHJlc2hvbGQsXG4gICAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIGhhc01hdGNoZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuXG4gICAgICBpZiAoaXNNYXRjaCAmJiBpbmRpY2VzKSB7XG4gICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgaXNNYXRjaDogaGFzTWF0Y2hlcyxcbiAgICAgIHNjb3JlOiBoYXNNYXRjaGVzID8gdG90YWxTY29yZSAvIHRoaXMuY2h1bmtzLmxlbmd0aCA6IDFcbiAgICB9O1xuXG4gICAgaWYgKGhhc01hdGNoZXMgJiYgaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuY2xhc3MgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHRoaXMucGF0dGVybiA9IHBhdHRlcm47XG4gIH1cbiAgc3RhdGljIGlzTXVsdGlNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMubXVsdGlSZWdleClcbiAgfVxuICBzdGF0aWMgaXNTaW5nbGVNYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGdldE1hdGNoKHBhdHRlcm4sIHRoaXMuc2luZ2xlUmVnZXgpXG4gIH1cbiAgc2VhcmNoKC8qdGV4dCovKSB7fVxufVxuXG5mdW5jdGlvbiBnZXRNYXRjaChwYXR0ZXJuLCBleHApIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHBhdHRlcm4ubWF0Y2goZXhwKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBtYXRjaGVzWzFdIDogbnVsbFxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdleGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj0oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0ID09PSB0aGlzLnBhdHRlcm47XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhZmlyZVxuXG5jbGFzcyBJbnZlcnNlRXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuKTtcbiAgICBjb25zdCBpc01hdGNoID0gaW5kZXggPT09IC0xO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IF5maWxlXG5cbmNsYXNzIFByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL15cXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFeZmlyZVxuXG5jbGFzcyBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF4oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogLmZpbGUkXG5cbmNsYXNzIFN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSB0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbdGV4dC5sZW5ndGggLSB0aGlzLnBhdHRlcm4ubGVuZ3RoLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhLmZpbGUkXG5cbmNsYXNzIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2Utc3VmZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eISguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LmVuZHNXaXRoKHRoaXMucGF0dGVybik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgRnV6enlNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICAgIH0gPSB7fVxuICApIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgICB0aGlzLl9iaXRhcFNlYXJjaCA9IG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZnV6enknXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMuX2JpdGFwU2VhcmNoLnNlYXJjaEluKHRleHQpXG4gIH1cbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEluY2x1ZGVNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbmNsdWRlJ1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14nXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJyguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgbGV0IGxvY2F0aW9uID0gMDtcbiAgICBsZXQgaW5kZXg7XG5cbiAgICBjb25zdCBpbmRpY2VzID0gW107XG4gICAgY29uc3QgcGF0dGVybkxlbiA9IHRoaXMucGF0dGVybi5sZW5ndGg7XG5cbiAgICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXNcbiAgICB3aGlsZSAoKGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybiwgbG9jYXRpb24pKSA+IC0xKSB7XG4gICAgICBsb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcbiAgICAgIGluZGljZXMucHVzaChbaW5kZXgsIGxvY2F0aW9uIC0gMV0pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWF0Y2ggPSAhIWluZGljZXMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlc1xuICAgIH1cbiAgfVxufVxuXG4vLyDinZdPcmRlciBpcyBpbXBvcnRhbnQuIERPIE5PVCBDSEFOR0UuXG5jb25zdCBzZWFyY2hlcnMgPSBbXG4gIEV4YWN0TWF0Y2gsXG4gIEluY2x1ZGVNYXRjaCxcbiAgUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VTdWZmaXhFeGFjdE1hdGNoLFxuICBTdWZmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlRXhhY3RNYXRjaCxcbiAgRnV6enlNYXRjaFxuXTtcblxuY29uc3Qgc2VhcmNoZXJzTGVuID0gc2VhcmNoZXJzLmxlbmd0aDtcblxuLy8gUmVnZXggdG8gc3BsaXQgYnkgc3BhY2VzLCBidXQga2VlcCBhbnl0aGluZyBpbiBxdW90ZXMgdG9nZXRoZXJcbmNvbnN0IFNQQUNFX1JFID0gLyArKD89KFteXFxcIl0qXFxcIlteXFxcIl0qXFxcIikqW15cXFwiXSokKS87XG5jb25zdCBPUl9UT0tFTiA9ICd8JztcblxuLy8gUmV0dXJuIGEgMkQgYXJyYXkgcmVwcmVzZW50YXRpb24gb2YgdGhlIHF1ZXJ5LCBmb3Igc2ltcGxlciBwYXJzaW5nLlxuLy8gRXhhbXBsZTpcbi8vIFwiXmNvcmUgZ28kIHwgcmIkIHwgcHkkIHh5JFwiID0+IFtbXCJeY29yZVwiLCBcImdvJFwiXSwgW1wicmIkXCJdLCBbXCJweSRcIiwgXCJ4eSRcIl1dXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5KHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gcGF0dGVybi5zcGxpdChPUl9UT0tFTikubWFwKChpdGVtKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gaXRlbVxuICAgICAgLnRyaW0oKVxuICAgICAgLnNwbGl0KFNQQUNFX1JFKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAmJiAhIWl0ZW0udHJpbSgpKTtcblxuICAgIGxldCByZXN1bHRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBxdWVyeUl0ZW0gPSBxdWVyeVtpXTtcblxuICAgICAgLy8gMS4gSGFuZGxlIG11bHRpcGxlIHF1ZXJ5IG1hdGNoIChpLmUsIG9uY2UgdGhhdCBhcmUgcXVvdGVkLCBsaWtlIGBcImhlbGxvIHdvcmxkXCJgKVxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoIWZvdW5kICYmICsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzTXVsdGlNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyAyLiBIYW5kbGUgc2luZ2xlIHF1ZXJ5IG1hdGNoZXMgKGkuZSwgb25jZSB0aGF0IGFyZSAqbm90KiBxdW90ZWQpXG4gICAgICBpZHggPSAtMTtcbiAgICAgIHdoaWxlICgrK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc1NpbmdsZU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfSlcbn1cblxuLy8gVGhlc2UgZXh0ZW5kZWQgbWF0Y2hlcnMgY2FuIHJldHVybiBhbiBhcnJheSBvZiBtYXRjaGVzLCBhcyBvcHBvc2VkXG4vLyB0byBhIHNpbmdsIG1hdGNoXG5jb25zdCBNdWx0aU1hdGNoU2V0ID0gbmV3IFNldChbRnV6enlNYXRjaC50eXBlLCBJbmNsdWRlTWF0Y2gudHlwZV0pO1xuXG4vKipcbiAqIENvbW1hbmQtbGlrZSBzZWFyY2hpbmdcbiAqID09PT09PT09PT09PT09PT09PT09PT1cbiAqXG4gKiBHaXZlbiBtdWx0aXBsZSBzZWFyY2ggdGVybXMgZGVsaW1pdGVkIGJ5IHNwYWNlcy5lLmcuIGBeanNjcmlwdCAucHl0aG9uJCBydWJ5ICFqYXZhYCxcbiAqIHNlYXJjaCBpbiBhIGdpdmVuIHRleHQuXG4gKlxuICogU2VhcmNoIHN5bnRheDpcbiAqXG4gKiB8IFRva2VuICAgICAgIHwgTWF0Y2ggdHlwZSAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IC0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8XG4gKiB8IGBqc2NyaXB0YCAgIHwgZnV6enktbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGZ1enp5IG1hdGNoIGBqc2NyaXB0YCAgICAgICB8XG4gKiB8IGA9c2NoZW1lYCAgIHwgZXhhY3QtbWF0Y2ggICAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGFyZSBgc2NoZW1lYCAgICAgICAgICAgICAgICB8XG4gKiB8IGAncHl0aG9uYCAgIHwgaW5jbHVkZS1tYXRjaCAgICAgICAgICAgICAgfCBJdGVtcyB0aGF0IGluY2x1ZGUgYHB5dGhvbmAgICAgICAgICAgICB8XG4gKiB8IGAhcnVieWAgICAgIHwgaW52ZXJzZS1leGFjdC1tYXRjaCAgICAgICAgfCBJdGVtcyB0aGF0IGRvIG5vdCBpbmNsdWRlIGBydWJ5YCAgICAgICB8XG4gKiB8IGBeamF2YWAgICAgIHwgcHJlZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IHN0YXJ0IHdpdGggYGphdmFgICAgICAgICAgICB8XG4gKiB8IGAhXmVhcmxhbmdgIHwgaW52ZXJzZS1wcmVmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBzdGFydCB3aXRoIGBlYXJsYW5nYCB8XG4gKiB8IGAuanMkYCAgICAgIHwgc3VmZml4LWV4YWN0LW1hdGNoICAgICAgICAgfCBJdGVtcyB0aGF0IGVuZCB3aXRoIGAuanNgICAgICAgICAgICAgICB8XG4gKiB8IGAhLmdvJGAgICAgIHwgaW52ZXJzZS1zdWZmaXgtZXhhY3QtbWF0Y2ggfCBJdGVtcyB0aGF0IGRvIG5vdCBlbmQgd2l0aCBgLmdvYCAgICAgICB8XG4gKlxuICogQSBzaW5nbGUgcGlwZSBjaGFyYWN0ZXIgYWN0cyBhcyBhbiBPUiBvcGVyYXRvci4gRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmdcbiAqIHF1ZXJ5IG1hdGNoZXMgZW50cmllcyB0aGF0IHN0YXJ0IHdpdGggYGNvcmVgIGFuZCBlbmQgd2l0aCBlaXRoZXJgZ29gLCBgcmJgLFxuICogb3JgcHlgLlxuICpcbiAqIGBgYFxuICogXmNvcmUgZ28kIHwgcmIkIHwgcHkkXG4gKiBgYGBcbiAqL1xuY2xhc3MgRXh0ZW5kZWRTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IENvbmZpZy5pc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvbixcbiAgICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgICAgbG9jYXRpb24gPSBDb25maWcubG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UgPSBDb25maWcuZGlzdGFuY2VcbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIGlnbm9yZUxvY2F0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZVxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucXVlcnkgPSBwYXJzZVF1ZXJ5KHRoaXMucGF0dGVybiwgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBjb25kaXRpb24oXywgb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLnVzZUV4dGVuZGVkU2VhcmNoXG4gIH1cblxuICBzZWFyY2hJbih0ZXh0KSB7XG4gICAgY29uc3QgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuXG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICAgIHNjb3JlOiAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBpbmNsdWRlTWF0Y2hlcywgaXNDYXNlU2Vuc2l0aXZlIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICB0ZXh0ID0gaXNDYXNlU2Vuc2l0aXZlID8gdGV4dCA6IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBudW1NYXRjaGVzID0gMDtcbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcblxuICAgIC8vIE9Sc1xuICAgIGZvciAobGV0IGkgPSAwLCBxTGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgcUxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBzZWFyY2hlcnMgPSBxdWVyeVtpXTtcblxuICAgICAgLy8gUmVzZXQgaW5kaWNlc1xuICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgbnVtTWF0Y2hlcyA9IDA7XG5cbiAgICAgIC8vIEFORHNcbiAgICAgIGZvciAobGV0IGogPSAwLCBwTGVuID0gc2VhcmNoZXJzLmxlbmd0aDsgaiA8IHBMZW47IGogKz0gMSkge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tqXTtcbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBpbmRpY2VzLCBzY29yZSB9ID0gc2VhcmNoZXIuc2VhcmNoKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbnVtTWF0Y2hlcyArPSAxO1xuICAgICAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG4gICAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gc2VhcmNoZXIuY29uc3RydWN0b3IudHlwZTtcbiAgICAgICAgICAgIGlmIChNdWx0aU1hdGNoU2V0Lmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcy5wdXNoKGluZGljZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFNjb3JlID0gMDtcbiAgICAgICAgICBudW1NYXRjaGVzID0gMDtcbiAgICAgICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPUiBjb25kaXRpb24sIHNvIGlmIFRSVUUsIHJldHVyblxuICAgICAgaWYgKG51bU1hdGNoZXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICAgIHNjb3JlOiB0b3RhbFNjb3JlIC8gbnVtTWF0Y2hlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgIHJlc3VsdC5pbmRpY2VzID0gYWxsSW5kaWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHdhcyBtYXRjaGVkXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgc2NvcmU6IDFcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVnaXN0ZXJlZFNlYXJjaGVycyA9IFtdO1xuXG5mdW5jdGlvbiByZWdpc3RlciguLi5hcmdzKSB7XG4gIHJlZ2lzdGVyZWRTZWFyY2hlcnMucHVzaCguLi5hcmdzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucykge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVnaXN0ZXJlZFNlYXJjaGVycy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBzZWFyY2hlckNsYXNzID0gcmVnaXN0ZXJlZFNlYXJjaGVyc1tpXTtcbiAgICBpZiAoc2VhcmNoZXJDbGFzcy5jb25kaXRpb24ocGF0dGVybiwgb3B0aW9ucykpIHtcbiAgICAgIHJldHVybiBuZXcgc2VhcmNoZXJDbGFzcyhwYXR0ZXJuLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwgb3B0aW9ucylcbn1cblxuY29uc3QgTG9naWNhbE9wZXJhdG9yID0ge1xuICBBTkQ6ICckYW5kJyxcbiAgT1I6ICckb3InXG59O1xuXG5jb25zdCBLZXlUeXBlID0ge1xuICBQQVRIOiAnJHBhdGgnLFxuICBQQVRURVJOOiAnJHZhbCdcbn07XG5cbmNvbnN0IGlzRXhwcmVzc2lvbiA9IChxdWVyeSkgPT5cbiAgISEocXVlcnlbTG9naWNhbE9wZXJhdG9yLkFORF0gfHwgcXVlcnlbTG9naWNhbE9wZXJhdG9yLk9SXSk7XG5cbmNvbnN0IGlzUGF0aCA9IChxdWVyeSkgPT4gISFxdWVyeVtLZXlUeXBlLlBBVEhdO1xuXG5jb25zdCBpc0xlYWYgPSAocXVlcnkpID0+XG4gICFpc0FycmF5KHF1ZXJ5KSAmJiBpc09iamVjdChxdWVyeSkgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSk7XG5cbmNvbnN0IGNvbnZlcnRUb0V4cGxpY2l0ID0gKHF1ZXJ5KSA9PiAoe1xuICBbTG9naWNhbE9wZXJhdG9yLkFORF06IE9iamVjdC5rZXlzKHF1ZXJ5KS5tYXAoKGtleSkgPT4gKHtcbiAgICBba2V5XTogcXVlcnlba2V5XVxuICB9KSlcbn0pO1xuXG4vLyBXaGVuIGBhdXRvYCBpcyBgdHJ1ZWAsIHRoZSBwYXJzZSBmdW5jdGlvbiB3aWxsIGluZmVyIGFuZCBpbml0aWFsaXplIGFuZCBhZGRcbi8vIHRoZSBhcHByb3ByaWF0ZSBgU2VhcmNoZXJgIGluc3RhbmNlXG5mdW5jdGlvbiBwYXJzZShxdWVyeSwgb3B0aW9ucywgeyBhdXRvID0gdHJ1ZSB9ID0ge30pIHtcbiAgY29uc3QgbmV4dCA9IChxdWVyeSkgPT4ge1xuICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpO1xuXG4gICAgY29uc3QgaXNRdWVyeVBhdGggPSBpc1BhdGgocXVlcnkpO1xuXG4gICAgaWYgKCFpc1F1ZXJ5UGF0aCAmJiBrZXlzLmxlbmd0aCA+IDEgJiYgIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICAgIHJldHVybiBuZXh0KGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KSlcbiAgICB9XG5cbiAgICBpZiAoaXNMZWFmKHF1ZXJ5KSkge1xuICAgICAgY29uc3Qga2V5ID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVEhdIDoga2V5c1swXTtcblxuICAgICAgY29uc3QgcGF0dGVybiA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRURVJOXSA6IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmICghaXNTdHJpbmcocGF0dGVybikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKExPR0lDQUxfU0VBUkNIX0lOVkFMSURfUVVFUllfRk9SX0tFWShrZXkpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGtleUlkOiBjcmVhdGVLZXlJZChrZXkpLFxuICAgICAgICBwYXR0ZXJuXG4gICAgICB9O1xuXG4gICAgICBpZiAoYXV0bykge1xuICAgICAgICBvYmouc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIGxldCBub2RlID0ge1xuICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgb3BlcmF0b3I6IGtleXNbMF1cbiAgICB9O1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBub2RlLmNoaWxkcmVuLnB1c2gobmV4dChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5vZGVcbiAgfTtcblxuICBpZiAoIWlzRXhwcmVzc2lvbihxdWVyeSkpIHtcbiAgICBxdWVyeSA9IGNvbnZlcnRUb0V4cGxpY2l0KHF1ZXJ5KTtcbiAgfVxuXG4gIHJldHVybiBuZXh0KHF1ZXJ5KVxufVxuXG4vLyBQcmFjdGljYWwgc2NvcmluZyBmdW5jdGlvblxuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKFxuICByZXN1bHRzLFxuICB7IGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm0gfVxuKSB7XG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAxO1xuXG4gICAgcmVzdWx0Lm1hdGNoZXMuZm9yRWFjaCgoeyBrZXksIG5vcm0sIHNjb3JlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlaWdodCA9IGtleSA/IGtleS53ZWlnaHQgOiBudWxsO1xuXG4gICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KFxuICAgICAgICBzY29yZSA9PT0gMCAmJiB3ZWlnaHQgPyBOdW1iZXIuRVBTSUxPTiA6IHNjb3JlLFxuICAgICAgICAod2VpZ2h0IHx8IDEpICogKGlnbm9yZUZpZWxkTm9ybSA/IDEgOiBub3JtKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsU2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgIW1hdGNoLmluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGluZGljZXMsIHZhbHVlIH0gPSBtYXRjaDtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzLFxuICAgICAgdmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleS5zcmM7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoXG4gIHJlc3VsdHMsXG4gIGRvY3MsXG4gIHtcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpbmNsdWRlU2NvcmUgPSBDb25maWcuaW5jbHVkZVNjb3JlXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbTogZG9jc1tpZHhdLFxuICAgICAgcmVmSW5kZXg6IGlkeFxuICAgIH07XG5cbiAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgdHJhbnNmb3JtZXJzLmZvckVhY2goKHRyYW5zZm9ybWVyKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IoZG9jcywgb3B0aW9ucyA9IHt9LCBpbmRleCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uQ29uZmlnLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2ggJiZcbiAgICAgICF0cnVlXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFKVxuICAgIH1cblxuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKHRoaXMub3B0aW9ucy5rZXlzKTtcblxuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCk7XG4gIH1cblxuICBzZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KSB7XG4gICAgdGhpcy5fZG9jcyA9IGRvY3M7XG5cbiAgICBpZiAoaW5kZXggJiYgIShpbmRleCBpbnN0YW5jZW9mIEZ1c2VJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihJTkNPUlJFQ1RfSU5ERVhfVFlQRSlcbiAgICB9XG5cbiAgICB0aGlzLl9teUluZGV4ID1cbiAgICAgIGluZGV4IHx8XG4gICAgICBjcmVhdGVJbmRleCh0aGlzLm9wdGlvbnMua2V5cywgdGhpcy5fZG9jcywge1xuICAgICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuLFxuICAgICAgICBmaWVsZE5vcm1XZWlnaHQ6IHRoaXMub3B0aW9ucy5maWVsZE5vcm1XZWlnaHRcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkKGRvYykge1xuICAgIGlmICghaXNEZWZpbmVkKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RvY3MucHVzaChkb2MpO1xuICAgIHRoaXMuX215SW5kZXguYWRkKGRvYyk7XG4gIH1cblxuICByZW1vdmUocHJlZGljYXRlID0gKC8qIGRvYywgaWR4ICovKSA9PiBmYWxzZSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9kb2NzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkb2MgPSB0aGlzLl9kb2NzW2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZShkb2MsIGkpKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQXQoaSk7XG4gICAgICAgIGkgLT0gMTtcbiAgICAgICAgbGVuIC09IDE7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKGRvYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMuX2RvY3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgdGhpcy5fbXlJbmRleC5yZW1vdmVBdChpZHgpO1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX215SW5kZXhcbiAgfVxuXG4gIHNlYXJjaChxdWVyeSwgeyBsaW1pdCA9IC0xIH0gPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlLFxuICAgICAgc2hvdWxkU29ydCxcbiAgICAgIHNvcnRGbixcbiAgICAgIGlnbm9yZUZpZWxkTm9ybVxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgcmVzdWx0cyA9IGlzU3RyaW5nKHF1ZXJ5KVxuICAgICAgPyBpc1N0cmluZyh0aGlzLl9kb2NzWzBdKVxuICAgICAgICA/IHRoaXMuX3NlYXJjaFN0cmluZ0xpc3QocXVlcnkpXG4gICAgICAgIDogdGhpcy5fc2VhcmNoT2JqZWN0TGlzdChxdWVyeSlcbiAgICAgIDogdGhpcy5fc2VhcmNoTG9naWNhbChxdWVyeSk7XG5cbiAgICBjb21wdXRlU2NvcmUocmVzdWx0cywgeyBpZ25vcmVGaWVsZE5vcm0gfSk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgcmVzdWx0cy5zb3J0KHNvcnRGbik7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKGxpbWl0KSAmJiBsaW1pdCA+IC0xKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdChyZXN1bHRzLCB0aGlzLl9kb2NzLCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZVxuICAgIH0pXG4gIH1cblxuICBfc2VhcmNoU3RyaW5nTGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGluZGV4XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7IHY6IHRleHQsIGk6IGlkeCwgbjogbm9ybSB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW3sgc2NvcmUsIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hMb2dpY2FsKHF1ZXJ5KSB7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gcGFyc2UocXVlcnksIHRoaXMub3B0aW9ucyk7XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChub2RlLCBpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCB7IGtleUlkLCBzZWFyY2hlciB9ID0gbm9kZTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgIGtleTogdGhpcy5fa2V5U3RvcmUuZ2V0KGtleUlkKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5fbXlJbmRleC5nZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSxcbiAgICAgICAgICBzZWFyY2hlclxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGUoY2hpbGQsIGl0ZW0sIGlkeCk7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgcmVzLnB1c2goLi4ucmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIGlmIChub2RlLm9wZXJhdG9yID09PSBMb2dpY2FsT3BlcmF0b3IuQU5EKSB7XG4gICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNcbiAgICB9O1xuXG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX215SW5kZXgucmVjb3JkcztcbiAgICBjb25zdCByZXN1bHRNYXAgPSB7fTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICByZWNvcmRzLmZvckVhY2goKHsgJDogaXRlbSwgaTogaWR4IH0pID0+IHtcbiAgICAgIGlmIChpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgbGV0IGV4cFJlc3VsdHMgPSBldmFsdWF0ZShleHByZXNzaW9uLCBpdGVtLCBpZHgpO1xuXG4gICAgICAgIGlmIChleHBSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIERlZHVwZSB3aGVuIGFkZGluZ1xuICAgICAgICAgIGlmICghcmVzdWx0TWFwW2lkeF0pIHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdID0geyBpZHgsIGl0ZW0sIG1hdGNoZXM6IFtdIH07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TWFwW2lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHBSZXN1bHRzLmZvckVhY2goKHsgbWF0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRNYXBbaWR4XS5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKCFpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICBtYXRjaGVzLnB1c2goXG4gICAgICAgICAgLi4udGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW1ba2V5SW5kZXhdLFxuICAgICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBpdGVtLFxuICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIF9maW5kTWF0Y2hlcyh7IGtleSwgdmFsdWUsIHNlYXJjaGVyIH0pIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3JlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBub3JtLFxuICAgICAgICAgICAgaW5kaWNlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2OiB0ZXh0LCBuOiBub3JtIH0gPSB2YWx1ZTtcblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzXG4gIH1cbn1cblxuRnVzZS52ZXJzaW9uID0gJzYuNS4zJztcbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbkZ1c2UucGFyc2VJbmRleCA9IHBhcnNlSW5kZXg7XG5GdXNlLmNvbmZpZyA9IENvbmZpZztcblxue1xuICBGdXNlLnBhcnNlUXVlcnkgPSBwYXJzZTtcbn1cblxue1xuICByZWdpc3RlcihFeHRlbmRlZFNlYXJjaCk7XG59XG5cbmV4cG9ydCB7IEZ1c2UgYXMgZGVmYXVsdCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uLy4uLy4uL21vZHVsZXMvcGVvcGxlLWxpc3QvX3NjcmlwdCc7Il0sIm5hbWVzIjpbIndzdUFuaW1hdGVTbGlkZURvd24iLCJlbGVtZW50IiwiYXJncyIsImR1cmF0aW9uIiwiZXh0cmEiLCJ0aW1lciIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0Iiwid3N1QW5pbWF0ZVNsaWRlVXAiLCJjYWxsYmFjayIsImRlbGF5VGltZXIiLCJ3c3VBcmlhRXhwYW5kZWQiLCJ2YWx1ZSIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsIndzdUFyaWFJc0V4cGFuZGVkIiwiZ2V0QXR0cmlidXRlIiwid3N1Q2xhc3NBZGQiLCJlbGVtZW50Q2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJ3c3VDbGFzc1JlbW92ZSIsInJlbW92ZSIsIndzdUNsYXNzVG9nZ2xlIiwiRnVzZSIsIlBlb3BsZUxpc3QiLCJlbCIsImFwaUVuZHBvaW50IiwiUEVPUExFX0FQSV9CQVNFX1VSTCIsInF1ZXJ5QXR0cmlidXRlcyIsImZpbHRlckF0dHJpYnV0ZU1hcCIsImxvY2F0aW9uIiwib3JnYW5pemF0aW9uIiwiY2xhc3NpZmljYXRpb24iLCJ0YWciLCJjYXRlZ29yeSIsInNlYXJjaGVyIiwic2hvdWxkU29ydCIsIm1pbk1hdGNoQ2hhckxlbmd0aCIsInRocmVzaG9sZCIsImtleXMiLCJuYW1lIiwid2VpZ2h0IiwiY29tcG9uZW50SWQiLCJkYXRhc2V0IiwiZGlzcGxheUZpZWxkcyIsInNwbGl0Iiwib25seVNob3dTZWxlY3RlZFRlcm1WYWx1ZXMiLCJleGNsdWRlZFRlcm1zIiwiZXhjbHVkZVRlcm1WYWx1ZXMiLCJmaWx0ZXIiLCJyIiwiaW5jbHVkZWRUZXJtcyIsImluY2x1ZGVUZXJtVmFsdWVzIiwiYWN0aXZlRmlsdGVycyIsInNlbGVjdGVkRmlsdGVyc0xpc3QiLCJhbGxQZW9wbGVTdHJpbmciLCJwZW9wbGUiLCJwZW9wbGVDb250YWluZXIiLCJwZW9wbGVFbGVtZW50cyIsImZpbHRlcnNDb250YWluZXIiLCJmaWx0ZXJUb2dnbGVzIiwic2VhcmNoSW5wdXQiLCJnZXRQZXJzb25IVE1MIiwicGVyc29uIiwibmlkIiwiaW5jbHVkZXMiLCJwaG90byIsInBob3RvX3NyY3NldCIsImhlYWRpbmd0YWciLCJBcnJheSIsImlzQXJyYXkiLCJ0aXRsZSIsIm1hcCIsInQiLCJqb2luIiwiZW1haWwiLCJvZmZpY2UiLCJwaG9uZSIsIndlYnNpdGUiLCJ3ZWJzaXRlTGlua1RleHQiLCJzaG91bGRJbmNsdWRlVGVybVZhbHVlIiwic2x1ZyIsImxlbmd0aCIsImNyZWF0ZVNlbGVjdEZpbHRlckhUTUwiLCJvcHRpb25zIiwiZm9yRWFjaCIsImZpbHRlck9wdGlvbnMiLCJwdXNoIiwidiIsImZpbmRJbmRleCIsIm8iLCJzb3J0IiwiYSIsImIiLCJ4IiwidG9Mb3dlckNhc2UiLCJ5IiwiY3JlYXRlUGVvcGxlRmlsdGVycyIsImZpbHRlcnNTdHJpbmciLCJjb250ZW50IiwiZmlsdGVycyIsIm5vblNlYXJjaEZpbHRlcnMiLCJmIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0RmlsdGVyIiwic2VhcmNoRmlsdGVyTGFiZWwiLCJpbm5lckhUTUwiLCJwb3B1bGF0ZVBlb3BsZUNvbnRhaW5lciIsInBlb3BsZUhUTUwiLCJwIiwiY3JlYXRlUGVvcGxlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY29sdW1ucyIsInVwZGF0ZVBlb3BsZUxpc3QiLCJpIiwicGVyc29uRWxlbWVudCIsImZyb20iLCJmaW5kIiwiZGlzcGxheSIsIm9yZGVyIiwicGVvcGxlVG9IaWRlIiwidXBkYXRlU2VsZWN0ZWRGaWx0ZXJzIiwic2VsZWN0ZWRGaWx0ZXJJbnB1dHMiLCJpbnB1dCIsInJlcGxhY2UiLCJuZXh0U2libGluZyIsInRleHRDb250ZW50IiwidHJpbSIsInByb2Nlc3NQZW9wbGVGaWx0ZXJzIiwiZmlsdGVyZWRQZW9wbGUiLCJKU09OIiwicGFyc2UiLCJjaGVja2JveElucHV0cyIsImVsZW1lbnRzIiwic2VsZWN0ZWRJbnB1dHMiLCJjaGVja2VkIiwiY29uY2F0Iiwic2VsZWN0ZWRWYWx1ZXMiLCJzIiwicGVyc29uc1ZhbHVlcyIsInNvbWUiLCJzZXRDb2xsZWN0aW9uIiwicmVzdWx0cyIsInNlYXJjaCIsIml0ZW0iLCJiaW5kRXZlbnRzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJmaWx0ZXJMaXN0IiwiY2xpY2tlZEZpbHRlcnNDb250YWluZXIiLCJpbnNpZGVTZWxlY3RGaWx0ZXIiLCJnZW5lcmF0ZUhUTUwiLCJvdXRlckhUTUwiLCJnZXRQZW9wbGUiLCJwYXJhbXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiaWR4IiwiYXR0clZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaW5pdCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9