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
  var excludedTerms = el.dataset.excludeTermValues.split(",");
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
    return "<div class=\"wsu-card wsu-card-person wsu-image-frame--ratio-square wsu-card--outline-shadow js-people-list__person\" data-nid=\"".concat(person.nid, "\">\n        ").concat(displayFields.includes("photo") ? "\n            <div class=\"wsu-image-frame wsu-card__person-image wsu-people-list__person-image".concat(person.photo ? " has-photo" : "", "\">\n                ").concat(person.photo ? "\n                    <img src=\"".concat(person.photo, "\"\n                        ").concat(person.photo_srcset ? "srcset=\"".concat(person.photo_srcset, "\"") : "", "\n                        ").concat(person.photo_srcset ? "sizes=\"(min-width: 768px) 33.3vw, 100vw\"" : "", ">") : "", "\n            </div>") : "", "\n\n        <div class=\"wsu-card__content\">\n            ").concat(displayFields.includes("name") ? "<".concat(el.dataset.headingtag, " class=\"wsu-card__person-name\">").concat(person.name, "</").concat(el.dataset.headingtag, ">") : "", "\n            \n            ").concat(displayFields.includes("title") && Array.isArray(person.title) ? person.title.map(function (t) {
      return "<div class=\"wsu-card__person-title\">".concat(t, "</div>");
    }).join("") : "", "\n            \n            ").concat(displayFields.includes("email") && person.email ? "\n                <div class=\"wsu-meta-email wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Email Address</span>\n                    <a href=\"mailto:".concat(person.email, "\">").concat(person.email, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("office") && person.office ? "\n                <div class=\"wsu-meta-location wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Location</span>\n                    <a href=\"#\">".concat(person.office, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("phone") && person.phone ? "\n                <div class=\"wsu-meta-phone wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Phone</span>\n                    <a href=\"tel:".concat(person.phone, "\">").concat(person.phone, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("website") && person.website ? "\n                <div class=\"wsu-meta-website wsu-meta--icon-crimson\">\n                    <a href=\"".concat(person.website, "\">").concat(el.dataset.websiteLinkText, "</a>\n                </div>") : "", "\n        </div>\n    </div>");
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
          if (!excludedTerms.includes(v.slug) && options.findIndex(function (o) {
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
      var selectedInputs = Array.from(filtersContainer.elements["".concat(f, "[]")]).filter(function (f) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9zdGFuZGFsb25lL3Blb3BsZS1saXN0L3NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFQyxPQUFGLEVBQVdDLElBQVgsRUFBcUI7QUFFN0MsdUJBR0lBLElBSEosQ0FDSUMsUUFESjtBQUFBLE1BQ0lBLFFBREosK0JBQ2UsR0FEZjtBQUFBLG9CQUdJRCxJQUhKLENBRUlFLEtBRko7QUFBQSxNQUVJQSxLQUZKLDRCQUVZLElBRlo7QUFLQSxNQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUVBSixFQUFBQSxPQUFPLENBQUNLLEtBQVIsQ0FBY0MsU0FBZCxHQUE0Qk4sT0FBTyxDQUFDTyxZQUFSLEdBQXVCQyxRQUFRLENBQUNMLEtBQUQsQ0FBL0IsR0FBeUMsSUFBckU7QUFFQUMsRUFBQUEsS0FBSyxHQUFHSyxVQUFVLENBQUUsWUFBTTtBQUV0QlQsSUFBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFFSCxHQUppQixFQUlmSixRQUplLENBQWxCO0FBTUgsQ0FqQkQ7O0FBbUJBLElBQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRVYsT0FBRixFQUFXQyxJQUFYLEVBQXFCO0FBRTNDLHdCQUlJQSxJQUpKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLGdDQUNlLEdBRGY7QUFBQSxxQkFJSUQsSUFKSixDQUVJRSxLQUZKO0FBQUEsTUFFSUEsS0FGSiw2QkFFWSxJQUZaO0FBQUEsdUJBSUlGLElBSkosQ0FHSVUsUUFISjtBQUFBLE1BR0lBLFFBSEosK0JBR2UsS0FIZjtBQU1BLE1BQUlQLEtBQUssR0FBRyxLQUFaO0FBQ0EsTUFBSVEsVUFBVSxHQUFHLEtBQWpCO0FBRUFaLEVBQUFBLE9BQU8sQ0FBQ0ssS0FBUixDQUFjQyxTQUFkLEdBQTRCTixPQUFPLENBQUNPLFlBQVIsR0FBdUJDLFFBQVEsQ0FBQ0wsS0FBRCxDQUEv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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSTtBQUNSO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QWMsMEJBQTBCOztBQUV4QztBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFMkI7Ozs7Ozs7VUNsdkQzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCIsInNvdXJjZXMiOlsid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1QW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFyaWEuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VDbGFzcy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdVBhcnRpYWxzLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL3NyYy9tb2R1bGVzL3Blb3BsZS1saXN0L19zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmVzbS5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvYnVuZGxlcy9zdGFuZGFsb25lL3Blb3BsZS1saXN0L3NjcmlwdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd3N1QW5pbWF0ZVNsaWRlRG93biA9ICggZWxlbWVudCwgYXJncyApID0+IHtcclxuXHJcbiAgICBsZXQge1xyXG4gICAgICAgIGR1cmF0aW9uID0gMzAwLFxyXG4gICAgICAgIGV4dHJhID0gJzIwJyxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gKCBlbGVtZW50LnNjcm9sbEhlaWdodCArIHBhcnNlSW50KGV4dHJhKSArICdweCcgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QW5pbWF0ZVNsaWRlVXAgPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICAgICAgY2FsbGJhY2sgPSBmYWxzZSxcclxuICAgIH0gPSBhcmdzO1xyXG5cclxuICAgIGxldCB0aW1lciA9IGZhbHNlO1xyXG4gICAgbGV0IGRlbGF5VGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgfSwgMTUgKTtcclxuXHJcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoICgpID0+IHtcclxuXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICB9LCBkdXJhdGlvbiApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgd3N1QW5pbWF0ZVNsaWRlRG93biwgd3N1QW5pbWF0ZVNsaWRlVXAgfTsiLCJjb25zdCB3c3VBcmlhRXhwYW5kZWQgPSAoIGVsZW1lbnQsIHZhbHVlICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsIHZhbHVlICk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1QXJpYUlzRXhwYW5kZWQgPSAoIGVsZW1lbnQgKSA9PiB7XHJcblxyXG4gICAgaWYgKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnKSApIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICgndHJ1ZScgPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxufSBcclxuXHJcblxyXG5leHBvcnQgeyB3c3VBcmlhRXhwYW5kZWQsIHdzdUFyaWFJc0V4cGFuZGVkIH0iLCJjb25zdCB3c3VDbGFzc0FkZCA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1JlbW92ZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggZWxlbWVudENsYXNzICk7XHJcblxyXG59XHJcblxyXG5jb25zdCB3c3VDbGFzc1RvZ2dsZSA9ICggZWxlbWVudCwgZWxlbWVudENsYXNzICkgPT4ge1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUNsYXNzQWRkLCB3c3VDbGFzc1JlbW92ZSwgd3N1Q2xhc3NUb2dnbGUgfSIsImV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlRG93biBhcyB3c3VBbmltYXRlU2xpZGVEb3duIH0gZnJvbSAnLi93c3VBbmltYXRlJztcclxuZXhwb3J0IHt3c3VBbmltYXRlU2xpZGVVcCBhcyB3c3VBbmltYXRlU2xpZGVVcCB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QXJpYUV4cGFuZGVkIGFzIHdzdUFyaWFFeHBhbmRlZCB9IGZyb20gJy4vd3N1QXJpYSc7XHJcbmV4cG9ydCB7d3N1QXJpYUlzRXhwYW5kZWQgYXMgd3N1QXJpYUlzRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUNsYXNzQWRkIGFzIHdzdUNsYXNzQWRkIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NSZW1vdmUgYXMgd3N1Q2xhc3NSZW1vdmUgfSBmcm9tICcuL3dzdUNsYXNzJztcclxuZXhwb3J0IHt3c3VDbGFzc1RvZ2dsZSBhcyB3c3VDbGFzc1RvZ2dsZSB9IGZyb20gJy4vd3N1Q2xhc3MnOyIsImltcG9ydCBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5pbXBvcnQge1xuICB3c3VBcmlhRXhwYW5kZWQsXG4gIHdzdUFyaWFJc0V4cGFuZGVkLFxufSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFsc1wiO1xuXG5jb25zdCBQZW9wbGVMaXN0ID0gZnVuY3Rpb24gKGVsKSB7XG4gIGNvbnN0IGFwaUVuZHBvaW50ID0gUEVPUExFX0FQSV9CQVNFX1VSTCArIFwiL3dwLWpzb24vcGVvcGxlYXBpL3YxL3Blb3BsZT9cIjtcbiAgY29uc3QgcXVlcnlBdHRyaWJ1dGVzID0gW1xuICAgIFwiY291bnRcIixcbiAgICBcInBhZ2VcIixcbiAgICBcIm5pZFwiLFxuICAgIFwiY2xhc3NpZmljYXRpb25cIixcbiAgICBcInVuaXZlcnNpdHktY2F0ZWdvcnlcIixcbiAgICBcInVuaXZlcnNpdHktbG9jYXRpb25cIixcbiAgICBcInVuaXZlcnNpdHktb3JnYW5pemF0aW9uXCIsXG4gICAgXCJwaG90by1zaXplXCIsXG4gICAgXCJwcm9maWxlLW9yZGVyXCIsXG4gIF07XG4gIGNvbnN0IGZpbHRlckF0dHJpYnV0ZU1hcCA9IHtcbiAgICBsb2NhdGlvbjogXCJ1bml2ZXJzaXR5X2xvY2F0aW9uXCIsXG4gICAgb3JnYW5pemF0aW9uOiBcInVuaXZlcnNpdHlfb3JnYW5pemF0aW9uXCIsXG4gICAgY2xhc3NpZmljYXRpb246IFwiY2xhc3NpZmljYXRpb25cIixcbiAgICB0YWc6IFwidGFnXCIsXG4gICAgY2F0ZWdvcnk6IFwiY2F0ZWdvcnlcIixcbiAgfTtcbiAgY29uc3Qgc2VhcmNoZXIgPSBuZXcgRnVzZShbXSwge1xuICAgIHNob3VsZFNvcnQ6IHRydWUsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAzLFxuICAgIHRocmVzaG9sZDogMC4zLFxuICAgIGtleXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIHdlaWdodDogMyxcbiAgICAgIH0sXG4gICAgICBcInRpdGxlXCIsXG4gICAgICBcIm5pZFwiLFxuICAgICAgXCJlbWFpbFwiLFxuICAgICAgXCJwaG9uZVwiLFxuICAgIF0sXG4gIH0pO1xuICBjb25zdCBjb21wb25lbnRJZCA9IGVsLmRhdGFzZXQuY29tcG9uZW50SWQ7XG4gIGNvbnN0IGRpc3BsYXlGaWVsZHMgPSBlbC5kYXRhc2V0LmRpc3BsYXlGaWVsZHMuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBleGNsdWRlZFRlcm1zID0gZWwuZGF0YXNldC5leGNsdWRlVGVybVZhbHVlcy5zcGxpdChcIixcIik7XG4gIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSBbXTtcbiAgbGV0IHNlbGVjdGVkRmlsdGVyc0xpc3QgPSBbXTtcbiAgbGV0IGFsbFBlb3BsZVN0cmluZyA9IFwiXCI7XG4gIGxldCBwZW9wbGU7XG4gIGxldCBwZW9wbGVDb250YWluZXI7XG4gIGxldCBwZW9wbGVFbGVtZW50cztcbiAgbGV0IGZpbHRlcnNDb250YWluZXI7XG4gIGxldCBmaWx0ZXJUb2dnbGVzO1xuICBsZXQgc2VhcmNoSW5wdXQ7XG5cbiAgZnVuY3Rpb24gZ2V0UGVyc29uSFRNTChwZXJzb24pIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ3c3UtY2FyZCB3c3UtY2FyZC1wZXJzb24gd3N1LWltYWdlLWZyYW1lLS1yYXRpby1zcXVhcmUgd3N1LWNhcmQtLW91dGxpbmUtc2hhZG93IGpzLXBlb3BsZS1saXN0X19wZXJzb25cIiBkYXRhLW5pZD1cIiR7XG4gICAgICBwZXJzb24ubmlkXG4gICAgfVwiPlxuICAgICAgICAke1xuICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJwaG90b1wiKVxuICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LWltYWdlLWZyYW1lIHdzdS1jYXJkX19wZXJzb24taW1hZ2Ugd3N1LXBlb3BsZS1saXN0X19wZXJzb24taW1hZ2Uke1xuICAgICAgICAgICAgICBwZXJzb24ucGhvdG8gPyBcIiBoYXMtcGhvdG9cIiA6IFwiXCJcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgcGVyc29uLnBob3RvXG4gICAgICAgICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGVyc29uLnBob3RvfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24ucGhvdG9fc3Jjc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgc3Jjc2V0PVwiJHtwZXJzb24ucGhvdG9fc3Jjc2V0fVwiYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uLnBob3RvX3NyY3NldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHNpemVzPVwiKG1pbi13aWR0aDogNzY4cHgpIDMzLjN2dywgMTAwdndcImBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0+YFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtY2FyZF9fY29udGVudFwiPlxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIm5hbWVcIilcbiAgICAgICAgICAgICAgICA/IGA8JHtlbC5kYXRhc2V0LmhlYWRpbmd0YWd9IGNsYXNzPVwid3N1LWNhcmRfX3BlcnNvbi1uYW1lXCI+JHtwZXJzb24ubmFtZX08LyR7ZWwuZGF0YXNldC5oZWFkaW5ndGFnfT5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJ0aXRsZVwiKSAmJiBBcnJheS5pc0FycmF5KHBlcnNvbi50aXRsZSlcbiAgICAgICAgICAgICAgICA/IHBlcnNvbi50aXRsZVxuICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICh0KSA9PiBgPGRpdiBjbGFzcz1cIndzdS1jYXJkX19wZXJzb24tdGl0bGVcIj4ke3R9PC9kaXY+YFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJlbWFpbFwiKSAmJiBwZXJzb24uZW1haWxcbiAgICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtZW1haWwgd3N1LW1ldGEtLWljb24tY3JpbXNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndzdS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5FbWFpbCBBZGRyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOiR7cGVyc29uLmVtYWlsfVwiPiR7cGVyc29uLmVtYWlsfTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJvZmZpY2VcIikgJiYgcGVyc29uLm9mZmljZVxuICAgICAgICAgICAgICAgID8gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtbWV0YS1sb2NhdGlvbiB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiPkxvY2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiR7cGVyc29uLm9mZmljZX08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+YFxuICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwicGhvbmVcIikgJiYgcGVyc29uLnBob25lXG4gICAgICAgICAgICAgICAgPyBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1tZXRhLXBob25lIHdzdS1tZXRhLS1pY29uLWNyaW1zb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3c3Utc2NyZWVuLXJlYWRlci1vbmx5XCI+UGhvbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6JHtwZXJzb24ucGhvbmV9XCI+JHtwZXJzb24ucGhvbmV9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIndlYnNpdGVcIikgJiYgcGVyc29uLndlYnNpdGVcbiAgICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtd2Vic2l0ZSB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3BlcnNvbi53ZWJzaXRlfVwiPiR7ZWwuZGF0YXNldC53ZWJzaXRlTGlua1RleHR9PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEZpbHRlckhUTUwoZmlsdGVyLCBwZW9wbGUpIHtcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xuXG4gICAgLy8gc2V0IGZpbHRlciBvcHRpb25zXG4gICAgcGVvcGxlLmZvckVhY2goKHBlcnNvbikgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHBlcnNvbltmaWx0ZXJBdHRyaWJ1dGVNYXBbZmlsdGVyXV07XG5cbiAgICAgIGlmIChmaWx0ZXJPcHRpb25zICYmIGZpbHRlck9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoIWFjdGl2ZUZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyKSkge1xuICAgICAgICAgIGFjdGl2ZUZpbHRlcnMucHVzaChmaWx0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlsdGVyT3B0aW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWV4Y2x1ZGVkVGVybXMuaW5jbHVkZXModi5zbHVnKSAmJlxuICAgICAgICAgICAgb3B0aW9ucy5maW5kSW5kZXgoKG8pID0+IG8uc2x1ZyA9PT0gdi5zbHVnKSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gc29ydCBvcHRpb25zIGFscGhhYmV0aWNhbGx5XG4gICAgb3B0aW9ucy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgeCA9IGEubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHkgPSBiLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiB4IDwgeSA/IC0xIDogeCA+IHkgPyAxIDogMDtcbiAgICB9KTtcblxuICAgIC8vIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiXG4gICAgcmV0dXJuIG9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgPyBgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWZpbHRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ3c3UtYnV0dG9uIHdzdS1wZW9wbGUtbGlzdF9fZmlsdGVyLXRvZ2dsZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiPiR7XG4gICAgICAgICAgZWwuZGF0YXNldFtmaWx0ZXIgKyBcIkZpbHRlckxhYmVsXCJdXG4gICAgICAgIH08L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1jb250YWluZXJcIiBhcmlhLWxhYmVsbGVkYnk9XCIke2NvbXBvbmVudElkfV9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7b3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAobykgPT4gYDxsaSBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19maXRsZXItbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX2ZpdGxlci1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlcn1bXVwiIHZhbHVlPVwiJHtvLnNsdWd9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke28ubmFtZX0gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5gXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICAgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlRmlsdGVycyhmaWx0ZXJzU3RyaW5nLCBwZW9wbGUpIHtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG4gICAgY29uc3QgZmlsdGVycyA9IGZpbHRlcnNTdHJpbmcuc3BsaXQoXCIsXCIpO1xuICAgIGNvbnN0IG5vblNlYXJjaEZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcigoZikgPT4gZiAmJiBmICE9PSBcInNlYXJjaFwiKTtcblxuICAgIC8vIHNldHVwIGZpbHRlcnMgY29udGFpbmVyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZpbHRlcnNDb250YWluZXIuY2xhc3NOYW1lID0gXCJ3c3UtcGVvcGxlLWxpc3RfX2ZpbHRlcnMtY29udGFpbmVyXCI7XG5cbiAgICAvLyBjcmVhdGUgbm9uLXNlYXJjaCBmaWx0ZXJzXG4gICAgbm9uU2VhcmNoRmlsdGVycy5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdEZpbHRlciA9IGNyZWF0ZVNlbGVjdEZpbHRlckhUTUwoZmlsdGVyLCBwZW9wbGUpO1xuICAgICAgY29udGVudCArPSBzZWxlY3RGaWx0ZXI7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgc2VhcmNoIGZpbHRlclxuICAgIGlmIChmaWx0ZXJzLmluY2x1ZGVzKFwic2VhcmNoXCIpKSB7XG4gICAgICBjb250ZW50ICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWZpbHRlclwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWFyY2gtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiJHtlbC5kYXRhc2V0LnNlYXJjaEZpbHRlckxhYmVsfVwiLz5cbiAgICAgICAgPC9kaXY+YDtcbiAgICB9XG5cbiAgICBjb250ZW50ICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdGVkLWZpbHRlcnMtY29udGFpbmVyXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0XCI+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLy8gd3JpdGUgZmlsdGVycyB0byBjb250YWluZXJcbiAgICBmaWx0ZXJzQ29udGFpbmVyLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gZmlsdGVyc0NvbnRhaW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUGVvcGxlQ29udGFpbmVyKHBlb3BsZSwgcGVvcGxlQ29udGFpbmVyKSB7XG4gICAgbGV0IHBlb3BsZUhUTUwgPSBcIlwiO1xuXG4gICAgcGVvcGxlLmZvckVhY2goKHApID0+IHtcbiAgICAgIHBlb3BsZUhUTUwgKz0gZ2V0UGVyc29uSFRNTChwKTtcbiAgICB9KTtcblxuICAgIHBlb3BsZUNvbnRhaW5lci5pbm5lckhUTUwgPSBwZW9wbGVIVE1MO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGB3c3UtY2FyZC13cmFwcGVyIHdzdS1jYXJkLXdyYXBwZXItLXBlci1yb3ctJHtlbC5kYXRhc2V0LmNvbHVtbnN9IGpzLXBlb3BsZS1saXN0YDtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQZW9wbGVMaXN0KHBlb3BsZSkge1xuICAgIGxldCBpID0gMDtcblxuICAgIC8vIHNob3cgYW5kIHNvcnQgcGVvcGxlIGJ5IGZpbHRlcnNcbiAgICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICBjb25zdCBwZXJzb25FbGVtZW50ID0gQXJyYXkuZnJvbShwZW9wbGVFbGVtZW50cykuZmluZChcbiAgICAgICAgKHApID0+IHAuZGF0YXNldC5uaWQgPT09IHBlcnNvbi5uaWRcbiAgICAgICk7XG5cbiAgICAgIGlmIChwZXJzb25FbGVtZW50KSB7XG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUub3JkZXIgPSBpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBoaWRlIHBlb3BsZSBub3QgZm91bmQgaW4gZmlsdGVyaW5nXG4gICAgY29uc3QgcGVvcGxlVG9IaWRlID0gQXJyYXkuZnJvbShwZW9wbGVFbGVtZW50cykuZmlsdGVyKChwZXJzb25FbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwZW9wbGUuZmluZEluZGV4KChwKSA9PiBwLm5pZCA9PT0gcGVyc29uRWxlbWVudC5kYXRhc2V0Lm5pZCkgPT09IC0xXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcGVvcGxlVG9IaWRlLmZvckVhY2goKHBlcnNvbkVsZW1lbnQpID0+IHtcbiAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IG51bGw7XG4gICAgfSk7XG5cbiAgICBwZW9wbGUubGVuZ3RoID09PSAwXG4gICAgICA/IGVsLmNsYXNzTGlzdC5hZGQoXCJoYXMtbm8tcmVzdWx0c1wiKVxuICAgICAgOiBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGFzLW5vLXJlc3VsdHNcIik7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJJbnB1dHMpIHtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG5cbiAgICBzZWxlY3RlZEZpbHRlcklucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgY29udGVudCArPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0LWl0ZW1cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXItdG9nZ2xlXCIgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgZGF0YS1maWx0ZXItbGlzdD1cIiR7aW5wdXQubmFtZS5yZXBsYWNlKFwiW11cIiwgXCJcIil9XCIgXG4gICAgICAgICAgICBkYXRhLXZhbHVlPVwiJHtpbnB1dC52YWx1ZX1cIj5cbiAgICAgICAgICAgICR7aW5wdXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQudHJpbSgpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgYDtcbiAgICB9KTtcblxuICAgIHNlbGVjdGVkRmlsdGVyc0xpc3QuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCkge1xuICAgIGxldCBzZWxlY3RlZEZpbHRlcklucHV0cyA9IFtdO1xuICAgIGxldCBmaWx0ZXJlZFBlb3BsZSA9IEpTT04ucGFyc2UoYWxsUGVvcGxlU3RyaW5nKTtcblxuICAgIGFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZikgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJbnB1dHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBmaWx0ZXJzQ29udGFpbmVyLmVsZW1lbnRzW2Ake2Z9W11gXVxuICAgICAgKS5maWx0ZXIoKGYpID0+IGYuY2hlY2tlZCk7XG5cbiAgICAgIGlmIChzZWxlY3RlZElucHV0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNlbGVjdGVkRmlsdGVySW5wdXRzID0gc2VsZWN0ZWRGaWx0ZXJJbnB1dHMuY29uY2F0KHNlbGVjdGVkSW5wdXRzKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBzZWxlY3RlZElucHV0cy5tYXAoKHMpID0+IHMudmFsdWUpO1xuXG4gICAgICAgIGZpbHRlcmVkUGVvcGxlID0gZmlsdGVyZWRQZW9wbGUuZmlsdGVyKChwZXJzb24pID0+IHtcbiAgICAgICAgICBjb25zdCBwZXJzb25zVmFsdWVzID0gcGVyc29uW2ZpbHRlckF0dHJpYnV0ZU1hcFtmXV07XG5cbiAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZXMuc29tZSgodikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICEocGVyc29uc1ZhbHVlcy5maW5kSW5kZXgoKG8pID0+IHYgPT09IG8uc2x1ZykgPT09IC0xKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICBzZWFyY2hJbnB1dCAmJlxuICAgICAgc2VhcmNoSW5wdXQudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+PSAzXG4gICAgKSB7XG4gICAgICBzZWFyY2hlci5zZXRDb2xsZWN0aW9uKGZpbHRlcmVkUGVvcGxlKTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hlci5zZWFyY2goc2VhcmNoSW5wdXQudmFsdWUpO1xuXG4gICAgICBmaWx0ZXJlZFBlb3BsZSA9IHJlc3VsdHMubWFwKChyKSA9PiByLml0ZW0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVNlbGVjdGVkRmlsdGVycyhzZWxlY3RlZEZpbHRlcklucHV0cyk7XG4gICAgdXBkYXRlUGVvcGxlTGlzdChmaWx0ZXJlZFBlb3BsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRXZlbnRzKGVsKSB7XG4gICAgZmlsdGVyc0NvbnRhaW5lciA9IGVsLnF1ZXJ5U2VsZWN0b3IoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXJzLWNvbnRhaW5lclwiKTtcbiAgICBmaWx0ZXJUb2dnbGVzID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlci10b2dnbGVcIik7XG4gICAgc2VhcmNoSW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWlucHV0XCIpO1xuICAgIHNlbGVjdGVkRmlsdGVyc0xpc3QgPSBlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIud3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXJzLWxpc3RcIlxuICAgICk7XG4gICAgcGVvcGxlQ29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcihcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlcnMtY29udGFpbmVyXCIpO1xuICAgIHBlb3BsZUVsZW1lbnRzID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi5qcy1wZW9wbGUtbGlzdF9fcGVyc29uXCIpO1xuXG4gICAgLy8gZmlsdGVyIG9uIHNlbGVjdCBvcHRpb24gY2hhbmdlXG4gICAgZmlsdGVyc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgIT09IHNlYXJjaElucHV0KSB7XG4gICAgICAgIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaWx0ZXIgb24gc2VhcmNoXG4gICAgc2VhcmNoSW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcHJvY2Vzc1Blb3BsZUZpbHRlcnMoKTsgLy8gc2hvdWxkIGNvbnNpZGVyIGRlYm91bmNpbmc/XG4gICAgfSk7XG5cbiAgICAvLyByZW1vdmUgc2VsZWN0ZWQgZmlsdGVyIG9uIHRvZ2dsZSBjbGlja1xuICAgIHNlbGVjdGVkRmlsdGVyc0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCB0b2dnbGUgPSBlLnRhcmdldC5jbG9zZXN0KFxuICAgICAgICBcIi53c3UtcGVvcGxlLWxpc3RfX3NlbGVjdGVkLWZpbHRlci10b2dnbGVcIlxuICAgICAgKTtcblxuICAgICAgaWYgKHRvZ2dsZSkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGZpbHRlcnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgaW5wdXRbbmFtZV49XCIke3RvZ2dsZS5kYXRhc2V0LmZpbHRlckxpc3R9XCJdW3ZhbHVlPVwiJHt0b2dnbGUuZGF0YXNldC52YWx1ZX1cIl1gXG4gICAgICAgICk7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBwcm9jZXNzUGVvcGxlRmlsdGVycygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB0b2dnbGluZyBzZWxlY3QgZmlsdGVyc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkRmlsdGVyc0NvbnRhaW5lciA9IGUudGFyZ2V0LmNsb3Nlc3QoXG4gICAgICAgICAgXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXJzLWNvbnRhaW5lclwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXItdG9nZ2xlXCIpO1xuICAgICAgICBjb25zdCBpbnNpZGVTZWxlY3RGaWx0ZXIgPVxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIud3N1LXBlb3BsZS1saXN0X19zZWxlY3QtZmlsdGVyXCIpICE9PSBudWxsO1xuXG4gICAgICAgIC8vIGhhbmRsZSBjbGlja3MgaW5zaWRlIGNsaWNrZWQgZmlsdGVyc0NvbnRhaW5lclxuICAgICAgICBpZiAoY2xpY2tlZEZpbHRlcnNDb250YWluZXIgPT09IGZpbHRlcnNDb250YWluZXIpIHtcbiAgICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICAvLyBjbG9zZSBvdGhlciBvcGVuIG1lbnVzXG4gICAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHQgIT09IHRvZ2dsZSkge1xuICAgICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCh0LCBmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodG9nZ2xlLCAhd3N1QXJpYUlzRXhwYW5kZWQodG9nZ2xlKSk7XG5cbiAgICAgICAgICAgIC8vIGNsb3NlIGFsbCBtZW51cyBpbiBmaWx0ZXJDb250YWluZXIgaWYgY2xpY2sgd2FzIG5vdCBpbiBhIHRvZ2dsZSBvciBzZWxlY3QgbWVudVxuICAgICAgICAgIH0gZWxzZSBpZiAoIWluc2lkZVNlbGVjdEZpbHRlcikge1xuICAgICAgICAgICAgZmlsdGVyVG9nZ2xlcy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICAgICAgICAgIHdzdUFyaWFFeHBhbmRlZCh0LCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbG9zZSBhbGwgaWYgY2xpY2sgd2FzIG91dHNpZGUgY3VycmVudCBmaWx0ZXJzQ29udGFpbmVyXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjbGlja2VkRmlsdGVyc0NvbnRhaW5lciA9PT0gbnVsbCB8fFxuICAgICAgICAgIGNsaWNrZWRGaWx0ZXJzQ29udGFpbmVyICE9PSBmaWx0ZXJzQ29udGFpbmVyXG4gICAgICAgICkge1xuICAgICAgICAgIGZpbHRlclRvZ2dsZXMuZm9yRWFjaCgodCkgPT4ge1xuICAgICAgICAgICAgd3N1QXJpYUV4cGFuZGVkKHQsIGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRNTChwZW9wbGUpIHtcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XG5cbiAgICAvLyBjcmVhdGUgZmlsdGVyc1xuICAgIGNvbnN0IGZpbHRlcnNDb250YWluZXIgPSBjcmVhdGVQZW9wbGVGaWx0ZXJzKGVsLmRhdGFzZXQuZmlsdGVycywgcGVvcGxlKTtcbiAgICBjb250ZW50ICs9IGZpbHRlcnNDb250YWluZXIub3V0ZXJIVE1MO1xuXG4gICAgLy8gY3JlYXRlIHBlb3BsZSBsaXN0XG4gICAgY29uc3QgcGVvcGxlQ29udGFpbmVyID0gY3JlYXRlUGVvcGxlQ29udGFpbmVyKCk7XG4gICAgcG9wdWxhdGVQZW9wbGVDb250YWluZXIocGVvcGxlLCBwZW9wbGVDb250YWluZXIpO1xuICAgIGNvbnRlbnQgKz0gcGVvcGxlQ29udGFpbmVyLm91dGVySFRNTDtcblxuICAgIC8vIHdyaXRlIGh0bWwgdG8gZG9tXG4gICAgZWwuaW5uZXJIVE1MID0gY29udGVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBlb3BsZSgpIHtcbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgY29uc3QgcGFyYW1zID0gcXVlcnlBdHRyaWJ1dGVzXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnIsIGlkeCkge1xuICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgY3Vycik7XG5cbiAgICAgICAgaWYgKGF0dHJWYWx1ZSkge1xuICAgICAgICAgIGFjYy5wdXNoKGN1cnIgKyBcIj1cIiArIGF0dHJWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pXG4gICAgICAuam9pbihcIiZcIik7XG5cbiAgICAvLyBtYWtlIHJlcXVlc3RcbiAgICByZXR1cm4gZmV0Y2goYXBpRW5kcG9pbnQgKyBwYXJhbXMpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZ2V0UGVvcGxlKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgYWxsUGVvcGxlU3RyaW5nID0gZGF0YTtcbiAgICAgIHBlb3BsZSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgIGdlbmVyYXRlSFRNTChwZW9wbGUpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmluZEV2ZW50cyhlbCk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXQoKTtcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0XCIpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBQZW9wbGVMaXN0KGVsKTtcbn0pO1xuIiwiLyoqXG4gKiBGdXNlLmpzIHY2LjUuMyAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5XG4gICAgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJylcbiAgKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUudHJpbSgpLmxlbmd0aFxufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyAnW29iamVjdCBVbmRlZmluZWRdJ1xuICAgICAgOiAnW29iamVjdCBOdWxsXSdcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcbn1cblxuY29uc3QgRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFID0gJ0V4dGVuZGVkIHNlYXJjaCBpcyBub3QgYXZhaWxhYmxlJztcblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcblxuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gKGtleSkgPT5cbiAgYEludmFsaWQgdmFsdWUgZm9yIGtleSAke2tleX1gO1xuXG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSAobWF4KSA9PlxuICBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5cbmNvbnN0IE1JU1NJTkdfS0VZX1BST1BFUlRZID0gKG5hbWUpID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcblxuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0gKGtleSkgPT5cbiAgYFByb3BlcnR5ICd3ZWlnaHQnIGluIGtleSAnJHtrZXl9JyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmA7XG5cbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlNYXAgPSB7fTtcblxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IGNyZWF0ZUtleShrZXkpO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuXG4gICAgICB0aGlzLl9rZXlzLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuX2tleU1hcFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkud2VpZ2h0IC89IHRvdGFsV2VpZ2h0O1xuICAgIH0pO1xuICB9XG4gIGdldChrZXlJZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYXBba2V5SWRdXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIGxldCBwYXRoID0gbnVsbDtcbiAgbGV0IGlkID0gbnVsbDtcbiAgbGV0IHNyYyA9IG51bGw7XG4gIGxldCB3ZWlnaHQgPSAxO1xuXG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGtleS5uYW1lO1xuICAgIHNyYyA9IG5hbWU7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKG5hbWUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gIH1cblxuICByZXR1cm4geyBwYXRoLCBpZCwgd2VpZ2h0LCBzcmMgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlQYXRoKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5IDoga2V5LnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5SWQoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkuam9pbignLicpIDoga2V5XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZXBHZXQgPSAob2JqLCBwYXRoLCBpbmRleCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG9iaikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXBhdGhbaW5kZXhdKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgYXJyaXZlZCBhdCB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGtleSA9IHBhdGhbaW5kZXhdO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsYXN0IHZhbHVlIGluIHRoZSBwYXRoLCBhbmQgaWYgaXQncyBhIHN0cmluZy9udW1iZXIvYm9vbCxcbiAgICAgIC8vIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxICYmXG4gICAgICAgIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpIHx8IGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICBkZWVwR2V0KHZhbHVlLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2luY2UgcGF0aCB1c2VkIHRvIGJlIGEgc3RyaW5nKVxuICBkZWVwR2V0KG9iaiwgaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoLCAwKTtcblxuICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF1cbn1cblxuY29uc3QgTWF0Y2hPcHRpb25zID0ge1xuICAvLyBXaGV0aGVyIHRoZSBtYXRjaGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldC4gV2hlbiBgdHJ1ZWAsIGVhY2ggcmVjb3JkIGluIHRoZSByZXN1bHRcbiAgLy8gc2V0IHdpbGwgaW5jbHVkZSB0aGUgaW5kaWNlcyBvZiB0aGUgbWF0Y2hlZCBjaGFyYWN0ZXJzLlxuICAvLyBUaGVzZSBjYW4gY29uc2VxdWVudGx5IGJlIHVzZWQgZm9yIGhpZ2hsaWdodGluZyBwdXJwb3Nlcy5cbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgLy8gYSBwZXJmZWN0IG1hdGNoIGhhcyBhbHJlYWR5IGJlZW4gbG9jYXRlZCBpbiB0aGUgc3RyaW5nLlxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDFcbn07XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gV2hlbiB0cnVlLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb246IHNvcnQgYnkgYXNjZW5kaW5nIHNjb3JlLCBhc2NlbmRpbmcgaW5kZXhcbiAgc29ydEZuOiAoYSwgYikgPT5cbiAgICBhLnNjb3JlID09PSBiLnNjb3JlID8gKGEuaWR4IDwgYi5pZHggPyAtMSA6IDEpIDogYS5zY29yZSA8IGIuc2NvcmUgPyAtMSA6IDFcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgaXQgZW5hYmxlcyB0aGUgdXNlIG9mIHVuaXgtbGlrZSBzZWFyY2ggY29tbWFuZHNcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXQsXG4gIC8vIFdoZW4gYHRydWVgLCBzZWFyY2ggd2lsbCBpZ25vcmUgYGxvY2F0aW9uYCBhbmQgYGRpc3RhbmNlYCwgc28gaXQgd29uJ3QgbWF0dGVyXG4gIC8vIHdoZXJlIGluIHRoZSBzdHJpbmcgdGhlIHBhdHRlcm4gYXBwZWFycy5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2Z1enppbmVzcy1zY29yZVxuICBpZ25vcmVMb2NhdGlvbjogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgY2FsY3VsYXRpb24gZm9yIHRoZSByZWxldmFuY2Ugc2NvcmUgKHVzZWQgZm9yIHNvcnRpbmcpIHdpbGxcbiAgLy8gaWdub3JlIHRoZSBmaWVsZC1sZW5ndGggbm9ybS5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2ZpZWxkLWxlbmd0aC1ub3JtXG4gIGlnbm9yZUZpZWxkTm9ybTogZmFsc2UsXG4gIC8vIFRoZSB3ZWlnaHQgdG8gZGV0ZXJtaW5lIGhvdyBtdWNoIGZpZWxkIGxlbmd0aCBub3JtIGVmZmVjdHMgc2NvcmluZy5cbiAgZmllbGROb3JtV2VpZ2h0OiAxXG59O1xuXG52YXIgQ29uZmlnID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLk1hdGNoT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5cbmNvbnN0IFNQQUNFID0gL1teIF0rL2c7XG5cbi8vIEZpZWxkLWxlbmd0aCBub3JtOiB0aGUgc2hvcnRlciB0aGUgZmllbGQsIHRoZSBoaWdoZXIgdGhlIHdlaWdodC5cbi8vIFNldCB0byAzIGRlY2ltYWxzIHRvIHJlZHVjZSBpbmRleCBzaXplLlxuZnVuY3Rpb24gbm9ybSh3ZWlnaHQgPSAxLCBtYW50aXNzYSA9IDMpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG0gPSBNYXRoLnBvdygxMCwgbWFudGlzc2EpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1Ub2tlbnMgPSB2YWx1ZS5tYXRjaChTUEFDRSkubGVuZ3RoO1xuXG4gICAgICBpZiAoY2FjaGUuaGFzKG51bVRva2VucykpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldChudW1Ub2tlbnMpXG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQgZnVuY3Rpb24gaXMgMS9zcXJ0KHgpLCB3ZWlnaHQgbWFrZXMgdGhhdCB2YXJpYWJsZVxuICAgICAgY29uc3Qgbm9ybSA9IDEgLyBNYXRoLnBvdyhudW1Ub2tlbnMsIDAuNSAqIHdlaWdodCk7XG5cbiAgICAgIC8vIEluIHBsYWNlIG9mIGB0b0ZpeGVkKG1hbnRpc3NhKWAsIGZvciBmYXN0ZXIgY29tcHV0YXRpb25cbiAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KE1hdGgucm91bmQobm9ybSAqIG0pIC8gbSk7XG5cbiAgICAgIGNhY2hlLnNldChudW1Ub2tlbnMsIG4pO1xuXG4gICAgICByZXR1cm4gblxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXNlSW5kZXgge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sXG4gICAgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodFxuICB9ID0ge30pIHtcbiAgICB0aGlzLm5vcm0gPSBub3JtKGZpZWxkTm9ybVdlaWdodCwgMyk7XG4gICAgdGhpcy5nZXRGbiA9IGdldEZuO1xuICAgIHRoaXMuaXNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEluZGV4UmVjb3JkcygpO1xuICB9XG4gIHNldFNvdXJjZXMoZG9jcyA9IFtdKSB7XG4gICAgdGhpcy5kb2NzID0gZG9jcztcbiAgfVxuICBzZXRJbmRleFJlY29yZHMocmVjb3JkcyA9IFtdKSB7XG4gICAgdGhpcy5yZWNvcmRzID0gcmVjb3JkcztcbiAgfVxuICBzZXRLZXlzKGtleXMgPSBbXSkge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5fa2V5c01hcCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpZHgpID0+IHtcbiAgICAgIHRoaXMuX2tleXNNYXBba2V5LmlkXSA9IGlkeDtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMuaXNDcmVhdGVkIHx8ICF0aGlzLmRvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAoaXNTdHJpbmcodGhpcy5kb2NzWzBdKSkge1xuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3JtLmNsZWFyKCk7XG4gIH1cbiAgLy8gQWRkcyBhIGRvYyB0byB0aGUgZW5kIG9mIHRoZSBpbmRleFxuICBhZGQoZG9jKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5zaXplKCk7XG5cbiAgICBpZiAoaXNTdHJpbmcoZG9jKSkge1xuICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgaWR4KTtcbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlcyB0aGUgZG9jIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggb2YgdGhlIGluZGV4XG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMucmVjb3Jkcy5zcGxpY2UoaWR4LCAxKTtcblxuICAgIC8vIENoYW5nZSByZWYgaW5kZXggb2YgZXZlcnkgc3Vic3F1ZW50IGRvY1xuICAgIGZvciAobGV0IGkgPSBpZHgsIGxlbiA9IHRoaXMuc2l6ZSgpOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHRoaXMucmVjb3Jkc1tpXS5pIC09IDE7XG4gICAgfVxuICB9XG4gIGdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpIHtcbiAgICByZXR1cm4gaXRlbVt0aGlzLl9rZXlzTWFwW2tleUlkXV1cbiAgfVxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHMubGVuZ3RoXG4gIH1cbiAgX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSB8fCBpc0JsYW5rKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCByZWNvcmQgPSB7XG4gICAgICB2OiBkb2MsXG4gICAgICBpOiBkb2NJbmRleCxcbiAgICAgIG46IHRoaXMubm9ybS5nZXQoZG9jKVxuICAgIH07XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIF9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCkge1xuICAgIGxldCByZWNvcmQgPSB7IGk6IGRvY0luZGV4LCAkOiB7fSB9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgIHRoaXMua2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXkpXG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEZuKGRvYywga2V5LnBhdGgpO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFt7IG5lc3RlZEFyckluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHsgbmVzdGVkQXJySW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgICAgIGk6IG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaykgPT4ge1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogayxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkcztcbiAgICAgIH0gZWxzZSBpZiAoIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5czogdGhpcy5rZXlzLFxuICAgICAgcmVjb3JkczogdGhpcy5yZWNvcmRzXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KFxuICBrZXlzLFxuICBkb2NzLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMubWFwKGNyZWF0ZUtleSkpO1xuICBteUluZGV4LnNldFNvdXJjZXMoZG9jcyk7XG4gIG15SW5kZXguY3JlYXRlKCk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5kZXgoXG4gIGRhdGEsXG4gIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHQgfSA9IHt9XG4pIHtcbiAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSBkYXRhO1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzKTtcbiAgbXlJbmRleC5zZXRJbmRleFJlY29yZHMocmVjb3Jkcyk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZSQxKFxuICBwYXR0ZXJuLFxuICB7XG4gICAgZXJyb3JzID0gMCxcbiAgICBjdXJyZW50TG9jYXRpb24gPSAwLFxuICAgIGV4cGVjdGVkTG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG5cbiAgaWYgKGlnbm9yZUxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGFjY3VyYWN5XG4gIH1cblxuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0TWFza1RvSW5kaWNlcyhcbiAgbWF0Y2htYXNrID0gW10sXG4gIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGhcbikge1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBpbmRpY2VzXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5mdW5jdGlvbiBzZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKVxuICB9XG5cbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSBleHBlY3RlZExvY2F0aW9uO1xuXG4gIC8vIFBlcmZvcm1hbmNlOiBvbmx5IGNvbXB1dGVyIG1hdGNoZXMgd2hlbiB0aGUgbWluTWF0Y2hDaGFyTGVuZ3RoID4gMVxuICAvLyBPUiBpZiBgaW5jbHVkZU1hdGNoZXNgIGlzIHRydWUuXG4gIGNvbnN0IGNvbXB1dGVNYXRjaGVzID0gbWluTWF0Y2hDaGFyTGVuZ3RoID4gMSB8fCBpbmNsdWRlTWF0Y2hlcztcbiAgLy8gQSBtYXNrIG9mIHRoZSBtYXRjaGVzLCB1c2VkIGZvciBidWlsZGluZyB0aGUgaW5kaWNlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBjb21wdXRlTWF0Y2hlcyA/IEFycmF5KHRleHRMZW4pIDogW107XG5cbiAgbGV0IGluZGV4O1xuXG4gIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlcywgaGVyZSBmb3Igc3BlZWQgdXBcbiAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBiZXN0TG9jYXRpb24pKSA+IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgY3VycmVudExvY2F0aW9uOiBpbmRleCxcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIGJlc3RMb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcblxuICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBwYXR0ZXJuTGVuKSB7XG4gICAgICAgIG1hdGNoTWFza1tpbmRleCArIGldID0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIC0gMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICAgIC8vIFNwZWVkIHVwOiBxdWljayBib29sIHRvIGludCBjb252ZXJzaW9uIChpLmUsIGBjaGFyTWF0Y2ggPyAxIDogMGApXG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gKyEhY2hhck1hdGNoO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IGkgKyAxLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc01hdGNoOiBiZXN0TG9jYXRpb24gPj0gMCxcbiAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgIHNjb3JlOiBNYXRoLm1heCgwLjAwMSwgZmluYWxTY29yZSlcbiAgfTtcblxuICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBpbmRpY2VzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYXIgPSBwYXR0ZXJuLmNoYXJBdChpKTtcbiAgICBtYXNrW2NoYXJdID0gKG1hc2tbY2hhcl0gfHwgMCkgfCAoMSA8PCAobGVuIC0gaSAtIDEpKTtcbiAgfVxuXG4gIHJldHVybiBtYXNrXG59XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9O1xuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuY2h1bmtzID0gW107XG5cbiAgICBpZiAoIXRoaXMucGF0dGVybi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENodW5rID0gKHBhdHRlcm4sIHN0YXJ0SW5kZXgpID0+IHtcbiAgICAgIHRoaXMuY2h1bmtzLnB1c2goe1xuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBhbHBoYWJldDogY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pLFxuICAgICAgICBzdGFydEluZGV4XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPiBNQVhfQklUUykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgcmVtYWluZGVyID0gbGVuICUgTUFYX0JJVFM7XG4gICAgICBjb25zdCBlbmQgPSBsZW4gLSByZW1haW5kZXI7XG5cbiAgICAgIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoaSwgTUFYX0JJVFMpLCBpKTtcbiAgICAgICAgaSArPSBNQVhfQklUUztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbGVuIC0gTUFYX0JJVFM7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoc3RhcnRJbmRleCksIHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4sIDApO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSwgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICByZXN1bHQuaW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBsZXQgaGFzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jaHVua3MuZm9yRWFjaCgoeyBwYXR0ZXJuLCBhbHBoYWJldCwgc3RhcnRJbmRleCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2godGV4dCwgcGF0dGVybiwgYWxwaGFiZXQsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uICsgc3RhcnRJbmRleCxcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIHRocmVzaG9sZCxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgaGFzTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG5cbiAgICAgIGlmIChpc01hdGNoICYmIGluZGljZXMpIHtcbiAgICAgICAgYWxsSW5kaWNlcyA9IFsuLi5hbGxJbmRpY2VzLCAuLi5pbmRpY2VzXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiBoYXNNYXRjaGVzLFxuICAgICAgc2NvcmU6IGhhc01hdGNoZXMgPyB0b3RhbFNjb3JlIC8gdGhpcy5jaHVua3MubGVuZ3RoIDogMVxuICAgIH07XG5cbiAgICBpZiAoaGFzTWF0Y2hlcyAmJiBpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5jbGFzcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgfVxuICBzdGF0aWMgaXNNdWx0aU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5tdWx0aVJlZ2V4KVxuICB9XG4gIHN0YXRpYyBpc1NpbmdsZU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5zaW5nbGVSZWdleClcbiAgfVxuICBzZWFyY2goLyp0ZXh0Ki8pIHt9XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoKHBhdHRlcm4sIGV4cCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0dGVybi5tYXRjaChleHApO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiBudWxsXG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2V4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL149XCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePSguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQgPT09IHRoaXMucGF0dGVybjtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFmaXJlXG5cbmNsYXNzIEludmVyc2VFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4pO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA9PT0gLTE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogXmZpbGVcblxuY2xhc3MgUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIV5maXJlXG5cbmNsYXNzIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtcHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAuZmlsZSRcblxuY2xhc3MgU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFt0ZXh0Lmxlbmd0aCAtIHRoaXMucGF0dGVybi5sZW5ndGgsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICEuZmlsZSRcblxuY2xhc3MgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1zdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXp6eU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICAgIHRoaXMuX2JpdGFwU2VhcmNoID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmdXp6eSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0YXBTZWFyY2guc2VhcmNoSW4odGV4dClcbiAgfVxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgSW5jbHVkZU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2luY2x1ZGUnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXidcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14nKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBsZXQgbG9jYXRpb24gPSAwO1xuICAgIGxldCBpbmRleDtcblxuICAgIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlc1xuICAgIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuLCBsb2NhdGlvbikpID4gLTEpIHtcbiAgICAgIGxvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNNYXRjaCA9ICEhaW5kaWNlcy5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzXG4gICAgfVxuICB9XG59XG5cbi8vIOKdl09yZGVyIGlzIGltcG9ydGFudC4gRE8gTk9UIENIQU5HRS5cbmNvbnN0IHNlYXJjaGVycyA9IFtcbiAgRXhhY3RNYXRjaCxcbiAgSW5jbHVkZU1hdGNoLFxuICBQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gsXG4gIFN1ZmZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VFeGFjdE1hdGNoLFxuICBGdXp6eU1hdGNoXG5dO1xuXG5jb25zdCBzZWFyY2hlcnNMZW4gPSBzZWFyY2hlcnMubGVuZ3RoO1xuXG4vLyBSZWdleCB0byBzcGxpdCBieSBzcGFjZXMsIGJ1dCBrZWVwIGFueXRoaW5nIGluIHF1b3RlcyB0b2dldGhlclxuY29uc3QgU1BBQ0VfUkUgPSAvICsoPz0oW15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbmNvbnN0IE9SX1RPS0VOID0gJ3wnO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoKGl0ZW0pID0+IHtcbiAgICBsZXQgcXVlcnkgPSBpdGVtXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoU1BBQ0VfUkUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmICEhaXRlbS50cmltKCkpO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SXRlbSA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyAxLiBIYW5kbGUgbXVsdGlwbGUgcXVlcnkgbWF0Y2ggKGkuZSwgb25jZSB0aGF0IGFyZSBxdW90ZWQsIGxpa2UgYFwiaGVsbG8gd29ybGRcImApXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgIHdoaWxlICghZm91bmQgJiYgKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNNdWx0aU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEhhbmRsZSBzaW5nbGUgcXVlcnkgbWF0Y2hlcyAoaS5lLCBvbmNlIHRoYXQgYXJlICpub3QqIHF1b3RlZClcbiAgICAgIGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzU2luZ2xlTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9KVxufVxuXG4vLyBUaGVzZSBleHRlbmRlZCBtYXRjaGVycyBjYW4gcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZXMsIGFzIG9wcG9zZWRcbi8vIHRvIGEgc2luZ2wgbWF0Y2hcbmNvbnN0IE11bHRpTWF0Y2hTZXQgPSBuZXcgU2V0KFtGdXp6eU1hdGNoLnR5cGUsIEluY2x1ZGVNYXRjaC50eXBlXSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgZnV6enkgbWF0Y2ggYGpzY3JpcHRgICAgICAgIHxcbiAqIHwgYD1zY2hlbWVgICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgYXJlIGBzY2hlbWVgICAgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBpbmNsdWRlLW1hdGNoICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZVxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaWdub3JlTG9jYXRpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5xdWVyeSA9IHBhcnNlUXVlcnkodGhpcy5wYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2hcbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpc0Nhc2VTZW5zaXRpdmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG51bU1hdGNoZXMgPSAwO1xuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIGluZGljZXMsIHNjb3JlIH0gPSBzZWFyY2hlci5zZWFyY2godGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBudW1NYXRjaGVzICs9IDE7XG4gICAgICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcbiAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hlci5jb25zdHJ1Y3Rvci50eXBlO1xuICAgICAgICAgICAgaWYgKE11bHRpTWF0Y2hTZXQuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzLnB1c2goaW5kaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICAgIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobnVtTWF0Y2hlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IHRvdGFsU2NvcmUgLyBudW1NYXRjaGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKC4uLmFyZ3MpIHtcbiAgcmVnaXN0ZXJlZFNlYXJjaGVycy5wdXNoKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdpc3RlcmVkU2VhcmNoZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuICAgIGlmIChzZWFyY2hlckNsYXNzLmNvbmRpdGlvbihwYXR0ZXJuLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5jb25zdCBMb2dpY2FsT3BlcmF0b3IgPSB7XG4gIEFORDogJyRhbmQnLFxuICBPUjogJyRvcidcbn07XG5cbmNvbnN0IEtleVR5cGUgPSB7XG4gIFBBVEg6ICckcGF0aCcsXG4gIFBBVFRFUk46ICckdmFsJ1xufTtcblxuY29uc3QgaXNFeHByZXNzaW9uID0gKHF1ZXJ5KSA9PlxuICAhIShxdWVyeVtMb2dpY2FsT3BlcmF0b3IuQU5EXSB8fCBxdWVyeVtMb2dpY2FsT3BlcmF0b3IuT1JdKTtcblxuY29uc3QgaXNQYXRoID0gKHF1ZXJ5KSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5cbmNvbnN0IGlzTGVhZiA9IChxdWVyeSkgPT5cbiAgIWlzQXJyYXkocXVlcnkpICYmIGlzT2JqZWN0KHF1ZXJ5KSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KTtcblxuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSAocXVlcnkpID0+ICh7XG4gIFtMb2dpY2FsT3BlcmF0b3IuQU5EXTogT2JqZWN0LmtleXMocXVlcnkpLm1hcCgoa2V5KSA9PiAoe1xuICAgIFtrZXldOiBxdWVyeVtrZXldXG4gIH0pKVxufSk7XG5cbi8vIFdoZW4gYGF1dG9gIGlzIGB0cnVlYCwgdGhlIHBhcnNlIGZ1bmN0aW9uIHdpbGwgaW5mZXIgYW5kIGluaXRpYWxpemUgYW5kIGFkZFxuLy8gdGhlIGFwcHJvcHJpYXRlIGBTZWFyY2hlcmAgaW5zdGFuY2VcbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zLCB7IGF1dG8gPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gKHF1ZXJ5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBjb25zdCBpc1F1ZXJ5UGF0aCA9IGlzUGF0aChxdWVyeSk7XG5cbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKVxuICAgIH1cblxuICAgIGlmIChpc0xlYWYocXVlcnkpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUSF0gOiBrZXlzWzBdO1xuXG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZKGtleSkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgIG9iai5zZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgbGV0IG5vZGUgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBvcGVyYXRvcjoga2V5c1swXVxuICAgIH07XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChuZXh0KGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZVxuICB9O1xuXG4gIGlmICghaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgIHF1ZXJ5ID0gY29udmVydFRvRXhwbGljaXQocXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQocXVlcnkpXG59XG5cbi8vIFByYWN0aWNhbCBzY29yaW5nIGZ1bmN0aW9uXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUoXG4gIHJlc3VsdHMsXG4gIHsgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybSB9XG4pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG5cbiAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKCh7IGtleSwgbm9ybSwgc2NvcmUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG5cbiAgICAgIHRvdGFsU2NvcmUgKj0gTWF0aC5wb3coXG4gICAgICAgIHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsXG4gICAgICAgICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5kaWNlcywgdmFsdWUgfSA9IG1hdGNoO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChcbiAgcmVzdWx0cyxcbiAgZG9jcyxcbiAge1xuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gIHJldHVybiByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcblxuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCgodHJhbnNmb3JtZXIpID0+IHtcbiAgICAgICAgdHJhbnNmb3JtZXIocmVzdWx0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH0pXG59XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3Rvcihkb2NzLCBvcHRpb25zID0ge30sIGluZGV4KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Db25maWcsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJlxuICAgICAgIXRydWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUpXG4gICAgfVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm4sXG4gICAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgICAgfSk7XG4gIH1cblxuICBhZGQoZG9jKSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuXG4gIHJlbW92ZShwcmVkaWNhdGUgPSAoLyogZG9jLCBpZHggKi8pID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2RvY3MubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHRoaXMuX2RvY3NbaV07XG4gICAgICBpZiAocHJlZGljYXRlKGRvYywgaSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBsZW4gLT0gMTtcblxuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlJbmRleFxuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5LCB7IGxpbWl0ID0gLTEgfSA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmUsXG4gICAgICBzaG91bGRTb3J0LFxuICAgICAgc29ydEZuLFxuICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpXG4gICAgICA/IGlzU3RyaW5nKHRoaXMuX2RvY3NbMF0pXG4gICAgICAgID8gdGhpcy5fc2VhcmNoU3RyaW5nTGlzdChxdWVyeSlcbiAgICAgICAgOiB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KVxuICAgICAgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcblxuICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNi41LjMnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuZXhwb3J0IHsgRnVzZSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vLi4vLi4vbW9kdWxlcy9wZW9wbGUtbGlzdC9fc2NyaXB0JzsiXSwibmFtZXMiOlsid3N1QW5pbWF0ZVNsaWRlRG93biIsImVsZW1lbnQiLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInRpbWVyIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJnZXRBdHRyaWJ1dGUiLCJ3c3VDbGFzc0FkZCIsImVsZW1lbnRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsIndzdUNsYXNzUmVtb3ZlIiwicmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJGdXNlIiwiUGVvcGxlTGlzdCIsImVsIiwiYXBpRW5kcG9pbnQiLCJQRU9QTEVfQVBJX0JBU0VfVVJMIiwicXVlcnlBdHRyaWJ1dGVzIiwiZmlsdGVyQXR0cmlidXRlTWFwIiwibG9jYXRpb24iLCJvcmdhbml6YXRpb24iLCJjbGFzc2lmaWNhdGlvbiIsInRhZyIsImNhdGVnb3J5Iiwic2VhcmNoZXIiLCJzaG91bGRTb3J0IiwibWluTWF0Y2hDaGFyTGVuZ3RoIiwidGhyZXNob2xkIiwia2V5cyIsIm5hbWUiLCJ3ZWlnaHQiLCJjb21wb25lbnRJZCIsImRhdGFzZXQiLCJkaXNwbGF5RmllbGRzIiwic3BsaXQiLCJleGNsdWRlZFRlcm1zIiwiZXhjbHVkZVRlcm1WYWx1ZXMiLCJhY3RpdmVGaWx0ZXJzIiwic2VsZWN0ZWRGaWx0ZXJzTGlzdCIsImFsbFBlb3BsZVN0cmluZyIsInBlb3BsZSIsInBlb3BsZUNvbnRhaW5lciIsInBlb3BsZUVsZW1lbnRzIiwiZmlsdGVyc0NvbnRhaW5lciIsImZpbHRlclRvZ2dsZXMiLCJzZWFyY2hJbnB1dCIsImdldFBlcnNvbkhUTUwiLCJwZXJzb24iLCJuaWQiLCJpbmNsdWRlcyIsInBob3RvIiwicGhvdG9fc3Jjc2V0IiwiaGVhZGluZ3RhZyIsIkFycmF5IiwiaXNBcnJheSIsInRpdGxlIiwibWFwIiwidCIsImpvaW4iLCJlbWFpbCIsIm9mZmljZSIsInBob25lIiwid2Vic2l0ZSIsIndlYnNpdGVMaW5rVGV4dCIsImNyZWF0ZVNlbGVjdEZpbHRlckhUTUwiLCJmaWx0ZXIiLCJvcHRpb25zIiwiZm9yRWFjaCIsImZpbHRlck9wdGlvbnMiLCJsZW5ndGgiLCJwdXNoIiwidiIsInNsdWciLCJmaW5kSW5kZXgiLCJvIiwic29ydCIsImEiLCJiIiwieCIsInRvTG93ZXJDYXNlIiwieSIsImNyZWF0ZVBlb3BsZUZpbHRlcnMiLCJmaWx0ZXJzU3RyaW5nIiwiY29udGVudCIsImZpbHRlcnMiLCJub25TZWFyY2hGaWx0ZXJzIiwiZiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNlbGVjdEZpbHRlciIsInNlYXJjaEZpbHRlckxhYmVsIiwiaW5uZXJIVE1MIiwicG9wdWxhdGVQZW9wbGVDb250YWluZXIiLCJwZW9wbGVIVE1MIiwicCIsImNyZWF0ZVBlb3BsZUNvbnRhaW5lciIsImNvbnRhaW5lciIsImNvbHVtbnMiLCJ1cGRhdGVQZW9wbGVMaXN0IiwiaSIsInBlcnNvbkVsZW1lbnQiLCJmcm9tIiwiZmluZCIsImRpc3BsYXkiLCJvcmRlciIsInBlb3BsZVRvSGlkZSIsInVwZGF0ZVNlbGVjdGVkRmlsdGVycyIsInNlbGVjdGVkRmlsdGVySW5wdXRzIiwiaW5wdXQiLCJyZXBsYWNlIiwibmV4dFNpYmxpbmciLCJ0ZXh0Q29udGVudCIsInRyaW0iLCJwcm9jZXNzUGVvcGxlRmlsdGVycyIsImZpbHRlcmVkUGVvcGxlIiwiSlNPTiIsInBhcnNlIiwic2VsZWN0ZWRJbnB1dHMiLCJlbGVtZW50cyIsImNoZWNrZWQiLCJjb25jYXQiLCJzZWxlY3RlZFZhbHVlcyIsInMiLCJwZXJzb25zVmFsdWVzIiwic29tZSIsInNldENvbGxlY3Rpb24iLCJyZXN1bHRzIiwic2VhcmNoIiwiciIsIml0ZW0iLCJiaW5kRXZlbnRzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJmaWx0ZXJMaXN0IiwiY2xpY2tlZEZpbHRlcnNDb250YWluZXIiLCJpbnNpZGVTZWxlY3RGaWx0ZXIiLCJnZW5lcmF0ZUhUTUwiLCJvdXRlckhUTUwiLCJnZXRQZW9wbGUiLCJwYXJhbXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiaWR4IiwiYXR0clZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaW5pdCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9