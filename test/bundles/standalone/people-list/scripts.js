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
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var _assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_assets/js/partials/wsuPartials */ "./_assets/js/partials/wsuPartials.js");



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
  var searcher = new fuse_js__WEBPACK_IMPORTED_MODULE_0__.default([], {
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
  var activeFilters = [];
  var categoryTerms = el.dataset.categoryFilterTerms.split(",").filter(function (r) {
    return r !== "";
  });
  var tagTerms = el.dataset.tagFilterTerms.split(",").filter(function (r) {
    return r !== "";
  });
  var locationTerms = el.dataset.locationFilterTerms.split(",").filter(function (r) {
    return r !== "";
  });
  var organizationTerms = el.dataset.organizationFilterTerms.split(",").filter(function (r) {
    return r !== "";
  });
  var classificationTerms = el.dataset.classificationFilterTerms.split(",").filter(function (r) {
    return r !== "";
  });
  var includedTerms = [];
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
    var options = [];
    var includeTerms = [];

    switch (filter) {
      case 'organization':
        includeTerms = organizationTerms;
        break;

      case 'tag':
        includeTerms = tagTerms;
        break;

      case 'location':
        includeTerms = locationTerms;
        break;

      case 'classification':
        includeTerms = classificationTerms;
        break;

      case 'category':
        includeTerms = categoryTerms;
        break;
    } // set filter options


    people.forEach(function (person) {
      var filterOptions = person[filterAttributeMap[filter]];

      if (filterOptions && filterOptions.length > 0) {
        if (!activeFilters.includes(filter)) {
          activeFilters.push(filter);
        }

        filterOptions.forEach(function (v) {
          if (includeTerms.length > 0) {
            if (includeTerms.includes(v.slug) && options.findIndex(function (o) {
              return o.slug === v.slug;
            }) === -1) {
              options.push(v);
            }
          } else if (options.findIndex(function (o) {
            return o.slug === v.slug;
          }) === -1) {
            options.push(v);
          }
          /*if (
            shouldIncludeTermValue(v.slug) &&
            options.findIndex((o) => o.slug === v.slug) === -1
          ) {
            options.push(v);
          }*/

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
              (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__.wsuAriaExpanded)(t, false);
            }
          });
          (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__.wsuAriaExpanded)(toggle, !(0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__.wsuAriaIsExpanded)(toggle)); // close all menus in filterContainer if click was not in a toggle or select menu
        } else if (!insideSelectFilter) {
          filterToggles.forEach(function (t) {
            (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__.wsuAriaExpanded)(t, false);
          });
        }
      } // close all if click was outside current filtersContainer


      if (clickedFiltersContainer === null || clickedFiltersContainer !== filtersContainer) {
        filterToggles.forEach(function (t) {
          (0,_assets_js_partials_wsuPartials__WEBPACK_IMPORTED_MODULE_1__.wsuAriaExpanded)(t, false);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Fuse.js v6.4.6 - Lightweight fuzzy-search (http://fusejs.io)
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
  ignoreFieldNorm: false
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
function norm(mantissa = 3) {
  const cache = new Map();
  const m = Math.pow(10, mantissa);

  return {
    get(value) {
      const numTokens = value.match(SPACE).length;

      if (cache.has(numTokens)) {
        return cache.get(numTokens)
      }

      const norm = 1 / Math.sqrt(numTokens);

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
  constructor({ getFn = Config.getFn } = {}) {
    this.norm = norm(3);
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
          }
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

function createIndex(keys, docs, { getFn = Config.getFn } = {}) {
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys.map(createKey));
  myIndex.setSources(docs);
  myIndex.create();
  return myIndex
}

function parseIndex(data, { getFn = Config.getFn } = {}) {
  const { keys, records } = data;
  const myIndex = new FuseIndex({ getFn });
  myIndex.setKeys(keys);
  myIndex.setIndexRecords(records);
  return myIndex
}

function computeScore(
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
    let score = computeScore(pattern, {
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
      const score = computeScore(pattern, {
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
        finalScore = computeScore(pattern, {
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
    const score = computeScore(pattern, {
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
function computeScore$1(
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
    ) {
      throw new Error(EXTENDED_SEARCH_UNAVAILABLE)
    }

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
        getFn: this.options.getFn
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

    computeScore$1(results, { ignoreFieldNorm });

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

      /*eslint indent: [2, 2, {"SwitchCase": 1}]*/
      switch (node.operator) {
        case LogicalOperator.AND: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
            } else {
              return []
            }
          }
          return res
        }
        case LogicalOperator.OR: {
          const res = [];
          for (let i = 0, len = node.children.length; i < len; i += 1) {
            const child = node.children[i];
            const result = evaluate(child, item, idx);
            if (result.length) {
              res.push(...result);
              break
            }
          }
          return res
        }
      }
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

Fuse.version = '6.4.6';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;

{
  Fuse.parseQuery = parse;
}

{
  register(ExtendedSearch);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fuse);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VBcmlhLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9wZW9wbGUtbGlzdC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5lc20uanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiXSwibmFtZXMiOlsid3N1QW5pbWF0ZVNsaWRlRG93biIsImVsZW1lbnQiLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInRpbWVyIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJnZXRBdHRyaWJ1dGUiLCJ3c3VDbGFzc0FkZCIsImVsZW1lbnRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsIndzdUNsYXNzUmVtb3ZlIiwicmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJQZW9wbGVMaXN0IiwiZWwiLCJhcGlFbmRwb2ludCIsIlBFT1BMRV9BUElfQkFTRV9VUkwiLCJxdWVyeUF0dHJpYnV0ZXMiLCJmaWx0ZXJBdHRyaWJ1dGVNYXAiLCJsb2NhdGlvbiIsIm9yZ2FuaXphdGlvbiIsImNsYXNzaWZpY2F0aW9uIiwidGFnIiwiY2F0ZWdvcnkiLCJzZWFyY2hlciIsIkZ1c2UiLCJzaG91bGRTb3J0IiwibWluTWF0Y2hDaGFyTGVuZ3RoIiwidGhyZXNob2xkIiwia2V5cyIsIm5hbWUiLCJ3ZWlnaHQiLCJjb21wb25lbnRJZCIsImRhdGFzZXQiLCJkaXNwbGF5RmllbGRzIiwic3BsaXQiLCJvbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcyIsImV4Y2x1ZGVkVGVybXMiLCJleGNsdWRlVGVybVZhbHVlcyIsImZpbHRlciIsInIiLCJhY3RpdmVGaWx0ZXJzIiwiY2F0ZWdvcnlUZXJtcyIsImNhdGVnb3J5RmlsdGVyVGVybXMiLCJ0YWdUZXJtcyIsInRhZ0ZpbHRlclRlcm1zIiwibG9jYXRpb25UZXJtcyIsImxvY2F0aW9uRmlsdGVyVGVybXMiLCJvcmdhbml6YXRpb25UZXJtcyIsIm9yZ2FuaXphdGlvbkZpbHRlclRlcm1zIiwiY2xhc3NpZmljYXRpb25UZXJtcyIsImNsYXNzaWZpY2F0aW9uRmlsdGVyVGVybXMiLCJpbmNsdWRlZFRlcm1zIiwic2VsZWN0ZWRGaWx0ZXJzTGlzdCIsImFsbFBlb3BsZVN0cmluZyIsInBlb3BsZSIsInBlb3BsZUNvbnRhaW5lciIsInBlb3BsZUVsZW1lbnRzIiwiZmlsdGVyc0NvbnRhaW5lciIsImZpbHRlclRvZ2dsZXMiLCJzZWFyY2hJbnB1dCIsImdldFBlcnNvbkhUTUwiLCJwZXJzb24iLCJuaWQiLCJpbmNsdWRlcyIsInBob3RvIiwicGhvdG9fc3Jjc2V0IiwiaGVhZGluZ3RhZyIsIkFycmF5IiwiaXNBcnJheSIsInRpdGxlIiwibWFwIiwidCIsImpvaW4iLCJlbWFpbCIsIm9mZmljZSIsInBob25lIiwid2Vic2l0ZSIsIndlYnNpdGVMaW5rVGV4dCIsInNob3VsZEluY2x1ZGVUZXJtVmFsdWUiLCJzbHVnIiwibGVuZ3RoIiwiY3JlYXRlU2VsZWN0RmlsdGVySFRNTCIsIm9wdGlvbnMiLCJpbmNsdWRlVGVybXMiLCJmb3JFYWNoIiwiZmlsdGVyT3B0aW9ucyIsInB1c2giLCJ2IiwiZmluZEluZGV4IiwibyIsInNvcnQiLCJhIiwiYiIsIngiLCJ0b0xvd2VyQ2FzZSIsInkiLCJjcmVhdGVQZW9wbGVGaWx0ZXJzIiwiZmlsdGVyc1N0cmluZyIsImNvbnRlbnQiLCJmaWx0ZXJzIiwibm9uU2VhcmNoRmlsdGVycyIsImYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzZWxlY3RGaWx0ZXIiLCJzZWFyY2hGaWx0ZXJMYWJlbCIsImlubmVySFRNTCIsInBvcHVsYXRlUGVvcGxlQ29udGFpbmVyIiwicGVvcGxlSFRNTCIsInAiLCJjcmVhdGVQZW9wbGVDb250YWluZXIiLCJjb250YWluZXIiLCJjb2x1bW5zIiwidXBkYXRlUGVvcGxlTGlzdCIsImkiLCJwZXJzb25FbGVtZW50IiwiZnJvbSIsImZpbmQiLCJkaXNwbGF5Iiwib3JkZXIiLCJwZW9wbGVUb0hpZGUiLCJ1cGRhdGVTZWxlY3RlZEZpbHRlcnMiLCJzZWxlY3RlZEZpbHRlcklucHV0cyIsImlucHV0IiwicmVwbGFjZSIsIm5leHRTaWJsaW5nIiwidGV4dENvbnRlbnQiLCJ0cmltIiwicHJvY2Vzc1Blb3BsZUZpbHRlcnMiLCJmaWx0ZXJlZFBlb3BsZSIsIkpTT04iLCJwYXJzZSIsImNoZWNrYm94SW5wdXRzIiwiZWxlbWVudHMiLCJzZWxlY3RlZElucHV0cyIsImNoZWNrZWQiLCJjb25jYXQiLCJzZWxlY3RlZFZhbHVlcyIsInMiLCJwZXJzb25zVmFsdWVzIiwic29tZSIsInNldENvbGxlY3Rpb24iLCJyZXN1bHRzIiwic2VhcmNoIiwiaXRlbSIsImJpbmRFdmVudHMiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwidG9nZ2xlIiwiY2xvc2VzdCIsImZpbHRlckxpc3QiLCJjbGlja2VkRmlsdGVyc0NvbnRhaW5lciIsImluc2lkZVNlbGVjdEZpbHRlciIsImdlbmVyYXRlSFRNTCIsIm91dGVySFRNTCIsImdldFBlb3BsZSIsInBhcmFtcyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJpZHgiLCJhdHRyVmFsdWUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJpbml0IiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFQyxPQUFGLEVBQVdDLElBQVgsRUFBcUI7QUFFN0MsdUJBR0lBLElBSEosQ0FDSUMsUUFESjtBQUFBLE1BQ0lBLFFBREosK0JBQ2UsR0FEZjtBQUFBLG9CQUdJRCxJQUhKLENBRUlFLEtBRko7QUFBQSxNQUVJQSxLQUZKLDRCQUVZLElBRlo7QUFLQSxNQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUVBSixTQUFPLENBQUNLLEtBQVIsQ0FBY0MsU0FBZCxHQUE0Qk4sT0FBTyxDQUFDTyxZQUFSLEdBQXVCQyxRQUFRLENBQUNMLEtBQUQsQ0FBL0IsR0FBeUMsSUFBckU7QUFFQUMsT0FBSyxHQUFHSyxVQUFVLENBQUUsWUFB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSx1QkFBdUIsS0FBSztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixtQkFBbUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0Qjs7QUFFcEQ7QUFDQSxpQkFBaUIsd0JBQXdCOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyx1QkFBdUIsS0FBSztBQUM5RCxpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQix1QkFBdUIsS0FBSztBQUN2RCxTQUFTLGdCQUFnQjtBQUN6QixpQ0FBaUMsUUFBUTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQixnQkFBZ0I7QUFDakMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxrQ0FBa0M7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixnQ0FBZ0M7QUFDMUQsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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O0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxhQUFhLG1CQUFtQjs7QUFFaEMsYUFBYSwwQkFBMEI7O0FBRXZDO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ3J2RHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRSIsImZpbGUiOiJidW5kbGVzL3N0YW5kYWxvbmUvcGVvcGxlLWxpc3Qvc2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdzdUFuaW1hdGVTbGlkZURvd24gPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFuaW1hdGVTbGlkZVVwID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgICAgIGNhbGxiYWNrID0gZmFsc2UsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuICAgIGxldCBkZWxheVRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xyXG5cclxuICAgIH0sIDE1ICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUFuaW1hdGVTbGlkZURvd24sIHdzdUFuaW1hdGVTbGlkZVVwIH07IiwiY29uc3Qgd3N1QXJpYUV4cGFuZGVkID0gKCBlbGVtZW50LCB2YWx1ZSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB2YWx1ZSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFyaWFJc0V4cGFuZGVkID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoJ3RydWUnID09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHsgd3N1QXJpYUV4cGFuZGVkLCB3c3VBcmlhSXNFeHBhbmRlZCB9IiwiY29uc3Qgd3N1Q2xhc3NBZGQgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NSZW1vdmUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NUb2dnbGUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VDbGFzc0FkZCwgd3N1Q2xhc3NSZW1vdmUsIHdzdUNsYXNzVG9nZ2xlIH0iLCJleHBvcnQge3dzdUFuaW1hdGVTbGlkZURvd24gYXMgd3N1QW5pbWF0ZVNsaWRlRG93biB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlVXAgYXMgd3N1QW5pbWF0ZVNsaWRlVXAgfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFyaWFFeHBhbmRlZCBhcyB3c3VBcmlhRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUFyaWFJc0V4cGFuZGVkIGFzIHdzdUFyaWFJc0V4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VDbGFzc0FkZCBhcyB3c3VDbGFzc0FkZCB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzUmVtb3ZlIGFzIHdzdUNsYXNzUmVtb3ZlIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NUb2dnbGUgYXMgd3N1Q2xhc3NUb2dnbGUgfSBmcm9tICcuL3dzdUNsYXNzJzsiLCJpbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIHdzdUFyaWFFeHBhbmRlZCxcclxuICB3c3VBcmlhSXNFeHBhbmRlZCxcclxufSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFsc1wiO1xyXG5cclxuY29uc3QgUGVvcGxlTGlzdCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gIGNvbnN0IGFwaUVuZHBvaW50ID0gUEVPUExFX0FQSV9CQVNFX1VSTCArIFwiL3dwLWpzb24vcGVvcGxlYXBpL3YxL3Blb3BsZT9cIjtcclxuICBjb25zdCBxdWVyeUF0dHJpYnV0ZXMgPSBbXHJcbiAgICBcImNvdW50XCIsXHJcbiAgICBcInBhZ2VcIixcclxuICAgIFwibmlkXCIsXHJcbiAgICBcImNsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBcInVuaXZlcnNpdHktY2F0ZWdvcnlcIixcclxuICAgIFwidW5pdmVyc2l0eS1sb2NhdGlvblwiLFxyXG4gICAgXCJ1bml2ZXJzaXR5LW9yZ2FuaXphdGlvblwiLFxyXG4gICAgXCJwaG90by1zaXplXCIsXHJcbiAgICBcInByb2ZpbGUtb3JkZXJcIixcclxuICBdO1xyXG4gIGNvbnN0IGZpbHRlckF0dHJpYnV0ZU1hcCA9IHtcclxuICAgIGxvY2F0aW9uOiBcInVuaXZlcnNpdHlfbG9jYXRpb25cIixcclxuICAgIG9yZ2FuaXphdGlvbjogXCJ1bml2ZXJzaXR5X29yZ2FuaXphdGlvblwiLFxyXG4gICAgY2xhc3NpZmljYXRpb246IFwiY2xhc3NpZmljYXRpb25cIixcclxuICAgIHRhZzogXCJ0YWdcIixcclxuICAgIGNhdGVnb3J5OiBcImNhdGVnb3J5XCIsXHJcbiAgfTtcclxuICBjb25zdCBzZWFyY2hlciA9IG5ldyBGdXNlKFtdLCB7XHJcbiAgICBzaG91bGRTb3J0OiB0cnVlLFxyXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAzLFxyXG4gICAgdGhyZXNob2xkOiAwLjMsXHJcbiAgICBrZXlzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIiwgXHJcbiAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBcInRpdGxlXCIsXHJcbiAgICAgIFwibmlkXCIsXHJcbiAgICAgIFwiZW1haWxcIixcclxuICAgICAgXCJwaG9uZVwiLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBjb21wb25lbnRJZCA9IGVsLmRhdGFzZXQuY29tcG9uZW50SWQ7XHJcbiAgY29uc3QgZGlzcGxheUZpZWxkcyA9IGVsLmRhdGFzZXQuZGlzcGxheUZpZWxkcy5zcGxpdChcIixcIik7XHJcbiAgY29uc3Qgb25seVNob3dTZWxlY3RlZFRlcm1WYWx1ZXMgPSBlbC5kYXRhc2V0Lm9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzO1xyXG4gIGNvbnN0IGV4Y2x1ZGVkVGVybXMgPSBlbC5kYXRhc2V0LmV4Y2x1ZGVUZXJtVmFsdWVzXHJcbiAgICAuc3BsaXQoXCIsXCIpXHJcbiAgICAuZmlsdGVyKChyKSA9PiByICE9PSBcIlwiKTtcclxuICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gW107XHJcbiAgY29uc3QgY2F0ZWdvcnlUZXJtcyA9IGVsLmRhdGFzZXQuY2F0ZWdvcnlGaWx0ZXJUZXJtc1xyXG4gIC5zcGxpdChcIixcIilcclxuICAuZmlsdGVyKChyKSA9PiByICE9PSBcIlwiKTtcclxuICBjb25zdCB0YWdUZXJtcyA9IGVsLmRhdGFzZXQudGFnRmlsdGVyVGVybXNcclxuICAuc3BsaXQoXCIsXCIpXHJcbiAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgY29uc3QgbG9jYXRpb25UZXJtcyA9IGVsLmRhdGFzZXQubG9jYXRpb25GaWx0ZXJUZXJtc1xyXG4gIC5zcGxpdChcIixcIilcclxuICAuZmlsdGVyKChyKSA9PiByICE9PSBcIlwiKTtcclxuICBjb25zdCBvcmdhbml6YXRpb25UZXJtcyA9IGVsLmRhdGFzZXQub3JnYW5pemF0aW9uRmlsdGVyVGVybXNcclxuICAuc3BsaXQoXCIsXCIpXHJcbiAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgY29uc3QgY2xhc3NpZmljYXRpb25UZXJtcyA9IGVsLmRhdGFzZXQuY2xhc3NpZmljYXRpb25GaWx0ZXJUZXJtc1xyXG4gIC5zcGxpdChcIixcIilcclxuICAuZmlsdGVyKChyKSA9PiByICE9PSBcIlwiKTtcclxuICBcclxuICBjb25zdCBpbmNsdWRlZFRlcm1zID0gW107XHJcbiAgbGV0IHNlbGVjdGVkRmlsdGVyc0xpc3QgPSBbXTtcclxuICBsZXQgYWxsUGVvcGxlU3RyaW5nID0gXCJcIjtcclxuICBsZXQgcGVvcGxlO1xyXG4gIGxldCBwZW9wbGVDb250YWluZXI7XHJcbiAgbGV0IHBlb3BsZUVsZW1lbnRzO1xyXG4gIGxldCBmaWx0ZXJzQ29udGFpbmVyO1xyXG4gIGxldCBmaWx0ZXJUb2dnbGVzO1xyXG4gIGxldCBzZWFyY2hJbnB1dDtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGVyc29uSFRNTChwZXJzb24pIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIndzdS1jYXJkIHdzdS1jYXJkLXBlcnNvbiB3c3UtaW1hZ2UtZnJhbWUtLXJhdGlvLXNxdWFyZSB3c3UtY2FyZC0tb3V0bGluZS1zaGFkb3cganMtcGVvcGxlLWxpc3RfX3BlcnNvblwiIGRhdGEtbmlkPVwiJHtcclxuICAgICAgcGVyc29uLm5pZFxyXG4gICAgfVwiPlxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwicGhvdG9cIilcclxuICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtaW1hZ2UtZnJhbWUgd3N1LWNhcmRfX3BlcnNvbi1pbWFnZSB3c3UtcGVvcGxlLWxpc3RfX3BlcnNvbi1pbWFnZSR7XHJcbiAgICAgICAgICAgICAgcGVyc29uLnBob3RvID8gXCIgaGFzLXBob3RvXCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgIHBlcnNvbi5waG90b1xyXG4gICAgICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwZXJzb24ucGhvdG99XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24ucGhvdG9fc3Jjc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBzcmNzZXQ9XCIke3BlcnNvbi5waG90b19zcmNzZXR9XCJgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbi5waG90b19zcmNzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYHNpemVzPVwiKG1pbi13aWR0aDogNzY4cHgpIDMzLjN2dywgMTAwdndcImBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGxvYWRpbmc9XCJsYXp5XCI+YFxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1jYXJkX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIm5hbWVcIilcclxuICAgICAgICAgICAgICAgID8gYDwke2VsLmRhdGFzZXQuaGVhZGluZ3RhZ30gY2xhc3M9XCJ3c3UtY2FyZF9fcGVyc29uLW5hbWVcIj4ke3BlcnNvbi5uYW1lfTwvJHtlbC5kYXRhc2V0LmhlYWRpbmd0YWd9PmBcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJ0aXRsZVwiKSAmJiBBcnJheS5pc0FycmF5KHBlcnNvbi50aXRsZSlcclxuICAgICAgICAgICAgICAgID8gcGVyc29uLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgICh0KSA9PiBgPGRpdiBjbGFzcz1cIndzdS1jYXJkX19wZXJzb24tdGl0bGVcIj4ke3R9PC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKVxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcImVtYWlsXCIpICYmIHBlcnNvbi5lbWFpbFxyXG4gICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtZW1haWwgd3N1LW1ldGEtLWljb24tY3JpbXNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiPkVtYWlsIEFkZHJlc3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzoke3BlcnNvbi5lbWFpbH1cIj4ke3BlcnNvbi5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwib2ZmaWNlXCIpICYmIHBlcnNvbi5vZmZpY2VcclxuICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1tZXRhLWxvY2F0aW9uIHdzdS1tZXRhLS1pY29uLWNyaW1zb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndzdS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5Mb2NhdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiR7cGVyc29uLm9mZmljZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwicGhvbmVcIikgJiYgcGVyc29uLnBob25lXHJcbiAgICAgICAgICAgICAgICA/IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtbWV0YS1waG9uZSB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3c3Utc2NyZWVuLXJlYWRlci1vbmx5XCI+UGhvbmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDoke3BlcnNvbi5waG9uZX1cIj4ke3BlcnNvbi5waG9uZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwid2Vic2l0ZVwiKSAmJiBwZXJzb24ud2Vic2l0ZVxyXG4gICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtd2Vic2l0ZSB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cGVyc29uLndlYnNpdGV9XCI+JHtlbC5kYXRhc2V0LndlYnNpdGVMaW5rVGV4dH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGVUZXJtVmFsdWUoc2x1Zykge1xyXG4gICAgaWYgKG9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzID09PSBcInRydWVcIiAmJiBpbmNsdWRlZFRlcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGluY2x1ZGVkVGVybXMuaW5jbHVkZXMoc2x1Zyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBvbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcyA9PT0gXCJmYWxzZVwiICYmXHJcbiAgICAgIGV4Y2x1ZGVkVGVybXMubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAhZXhjbHVkZWRUZXJtcy5pbmNsdWRlcyhzbHVnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEZpbHRlckhUTUwoZmlsdGVyLCBwZW9wbGUpIHtcclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgbGV0IGluY2x1ZGVUZXJtcyA9IFtdO1xyXG5cclxuICAgIHN3aXRjaCAoIGZpbHRlciApIHtcclxuICAgICAgY2FzZSAnb3JnYW5pemF0aW9uJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSBvcmdhbml6YXRpb25UZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSB0YWdUZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbG9jYXRpb24nOlxyXG4gICAgICAgIGluY2x1ZGVUZXJtcyA9IGxvY2F0aW9uVGVybXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsYXNzaWZpY2F0aW9uJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSBjbGFzc2lmaWNhdGlvblRlcm1zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjYXRlZ29yeSc6XHJcbiAgICAgICAgaW5jbHVkZVRlcm1zID0gY2F0ZWdvcnlUZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgZmlsdGVyIG9wdGlvbnNcclxuICAgIHBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHBlcnNvbltmaWx0ZXJBdHRyaWJ1dGVNYXBbZmlsdGVyXV07XHJcblxyXG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucyAmJiBmaWx0ZXJPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoIWFjdGl2ZUZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyKSkge1xyXG4gICAgICAgICAgYWN0aXZlRmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWx0ZXJPcHRpb25zLmZvckVhY2goKHYpID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoIGluY2x1ZGVUZXJtcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbmNsdWRlVGVybXMuaW5jbHVkZXMoIHYuc2x1ZyApICYmIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xICkgIHtcclxuICBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh2KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xICkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvKmlmIChcclxuICAgICAgICAgICAgc2hvdWxkSW5jbHVkZVRlcm1WYWx1ZSh2LnNsdWcpICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHYpO1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNvcnQgb3B0aW9ucyBhbHBoYWJldGljYWxseVxyXG4gICAgb3B0aW9ucy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHZhciB4ID0gYS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHZhciB5ID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiB4IDwgeSA/IC0xIDogeCA+IHkgPyAxIDogMDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiXHJcbiAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPiAwXHJcbiAgICAgID8gYDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdC1maWx0ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ3c3UtYnV0dG9uIHdzdS1wZW9wbGUtbGlzdF9fZmlsdGVyLXRvZ2dsZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiPiR7XHJcbiAgICAgICAgICBlbC5kYXRhc2V0W2ZpbHRlciArIFwiRmlsdGVyTGFiZWxcIl1cclxuICAgICAgICB9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1jb250YWluZXJcIiBhcmlhLWxhYmVsbGVkYnk9XCIke2NvbXBvbmVudElkfV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAke29wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PiBgPGxpIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fZml0bGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX2ZpdGxlci1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlcn1bXVwiIHZhbHVlPVwiJHtvLnNsdWd9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7by5uYW1lfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlRmlsdGVycyhmaWx0ZXJzU3RyaW5nLCBwZW9wbGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gXCJcIjtcclxuICAgIGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJzU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuICAgIGNvbnN0IG5vblNlYXJjaEZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcigoZikgPT4gZiAmJiBmICE9PSBcInNlYXJjaFwiKTtcclxuXHJcbiAgICAvLyBzZXR1cCBmaWx0ZXJzIGNvbnRhaW5lclxyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgbm9uLXNlYXJjaCBmaWx0ZXJzXHJcbiAgICBub25TZWFyY2hGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RGaWx0ZXIgPSBjcmVhdGVTZWxlY3RGaWx0ZXJIVE1MKGZpbHRlciwgcGVvcGxlKTtcclxuICAgICAgY29udGVudCArPSBzZWxlY3RGaWx0ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgc2VhcmNoIGZpbHRlclxyXG4gICAgaWYgKGZpbHRlcnMuaW5jbHVkZXMoXCJzZWFyY2hcIikpIHtcclxuICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWZpbHRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlYXJjaC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke2VsLmRhdGFzZXQuc2VhcmNoRmlsdGVyTGFiZWx9XCIvPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdGVkLWZpbHRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXJzLWxpc3RcIj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgLy8gd3JpdGUgZmlsdGVycyB0byBjb250YWluZXJcclxuICAgIGZpbHRlcnNDb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyc0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUGVvcGxlQ29udGFpbmVyKHBlb3BsZSwgcGVvcGxlQ29udGFpbmVyKSB7XHJcbiAgICBsZXQgcGVvcGxlSFRNTCA9IFwiXCI7XHJcblxyXG4gICAgcGVvcGxlLmZvckVhY2goKHApID0+IHtcclxuICAgICAgcGVvcGxlSFRNTCArPSBnZXRQZXJzb25IVE1MKHApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGVvcGxlQ29udGFpbmVyLmlubmVySFRNTCA9IHBlb3BsZUhUTUw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVQZW9wbGVDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGB3c3UtY2FyZC13cmFwcGVyIHdzdS1jYXJkLXdyYXBwZXItLXBlci1yb3ctJHtlbC5kYXRhc2V0LmNvbHVtbnN9IGpzLXBlb3BsZS1saXN0YDtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUGVvcGxlTGlzdChwZW9wbGUpIHtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAvLyBzaG93IGFuZCBzb3J0IHBlb3BsZSBieSBmaWx0ZXJzXHJcbiAgICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcnNvbkVsZW1lbnQgPSBBcnJheS5mcm9tKHBlb3BsZUVsZW1lbnRzKS5maW5kKFxyXG4gICAgICAgIChwKSA9PiBwLmRhdGFzZXQubmlkID09PSBwZXJzb24ubmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocGVyc29uRWxlbWVudCkge1xyXG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IGk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBoaWRlIHBlb3BsZSBub3QgZm91bmQgaW4gZmlsdGVyaW5nXHJcbiAgICBjb25zdCBwZW9wbGVUb0hpZGUgPSBBcnJheS5mcm9tKHBlb3BsZUVsZW1lbnRzKS5maWx0ZXIoKHBlcnNvbkVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBwZW9wbGUuZmluZEluZGV4KChwKSA9PiBwLm5pZCA9PT0gcGVyc29uRWxlbWVudC5kYXRhc2V0Lm5pZCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwZW9wbGVUb0hpZGUuZm9yRWFjaCgocGVyc29uRWxlbWVudCkgPT4ge1xyXG4gICAgICBwZXJzb25FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwZW9wbGUubGVuZ3RoID09PSAwXHJcbiAgICAgID8gZWwuY2xhc3NMaXN0LmFkZChcImhhcy1uby1yZXN1bHRzXCIpXHJcbiAgICAgIDogZWwuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1uby1yZXN1bHRzXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRGaWx0ZXJzKHNlbGVjdGVkRmlsdGVySW5wdXRzKSB7XHJcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgc2VsZWN0ZWRGaWx0ZXJJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXJzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVyLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgZGF0YS1maWx0ZXItbGlzdD1cIiR7aW5wdXQubmFtZS5yZXBsYWNlKFwiW11cIiwgXCJcIil9XCIgXHJcbiAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIke2lucHV0LnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAke2lucHV0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50LnRyaW0oKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzUGVvcGxlRmlsdGVycygpIHtcclxuICAgIGxldCBzZWxlY3RlZEZpbHRlcklucHV0cyA9IFtdO1xyXG4gICAgbGV0IGZpbHRlcmVkUGVvcGxlID0gSlNPTi5wYXJzZShhbGxQZW9wbGVTdHJpbmcpO1xyXG5cclxuICAgIGFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2JveElucHV0cyA9IGZpbHRlcnNDb250YWluZXIuZWxlbWVudHNbYCR7Zn1bXWBdO1xyXG5cclxuICAgICAgaWYgKCFjaGVja2JveElucHV0cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJbnB1dHMgPSBBcnJheS5mcm9tKGNoZWNrYm94SW5wdXRzKS5maWx0ZXIoXHJcbiAgICAgICAgKGYpID0+IGYuY2hlY2tlZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxlY3RlZEZpbHRlcklucHV0cyA9IHNlbGVjdGVkRmlsdGVySW5wdXRzLmNvbmNhdChzZWxlY3RlZElucHV0cyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBzZWxlY3RlZElucHV0cy5tYXAoKHMpID0+IHMudmFsdWUpO1xyXG5cclxuICAgICAgICBmaWx0ZXJlZFBlb3BsZSA9IGZpbHRlcmVkUGVvcGxlLmZpbHRlcigocGVyc29uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwZXJzb25zVmFsdWVzID0gcGVyc29uW2ZpbHRlckF0dHJpYnV0ZU1hcFtmXV07XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkVmFsdWVzLnNvbWUoKHYpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEocGVyc29uc1ZhbHVlcy5maW5kSW5kZXgoKG8pID0+IHYgPT09IG8uc2x1ZykgPT09IC0xKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHNlYXJjaElucHV0ICYmXHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlICE9PSBcIlwiICYmXHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+PSAzXHJcbiAgICApIHtcclxuICAgICAgc2VhcmNoZXIuc2V0Q29sbGVjdGlvbihmaWx0ZXJlZFBlb3BsZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hlci5zZWFyY2goc2VhcmNoSW5wdXQudmFsdWUpO1xyXG5cclxuICAgICAgZmlsdGVyZWRQZW9wbGUgPSByZXN1bHRzLm1hcCgocikgPT4gci5pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJJbnB1dHMpO1xyXG4gICAgdXBkYXRlUGVvcGxlTGlzdChmaWx0ZXJlZFBlb3BsZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiaW5kRXZlbnRzKGVsKSB7XHJcbiAgICBmaWx0ZXJzQ29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcihcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlcnMtY29udGFpbmVyXCIpO1xyXG4gICAgZmlsdGVyVG9nZ2xlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXItdG9nZ2xlXCIpO1xyXG4gICAgc2VhcmNoSW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgc2VsZWN0ZWRGaWx0ZXJzTGlzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0XCJcclxuICAgICk7XHJcbiAgICBwZW9wbGVDb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIik7XHJcbiAgICBwZW9wbGVFbGVtZW50cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcGVvcGxlLWxpc3RfX3BlcnNvblwiKTtcclxuXHJcbiAgICAvLyBmaWx0ZXIgb24gc2VsZWN0IG9wdGlvbiBjaGFuZ2VcclxuICAgIGZpbHRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgcHJvY2Vzc1Blb3BsZUZpbHRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyIG9uIHNlYXJjaFxyXG4gICAgc2VhcmNoSW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBwcm9jZXNzUGVvcGxlRmlsdGVycygpOyAvLyBzaG91bGQgY29uc2lkZXIgZGVib3VuY2luZz9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBmaWx0ZXIgb24gdG9nZ2xlIGNsaWNrXHJcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBlLnRhcmdldC5jbG9zZXN0KFxyXG4gICAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVyLXRvZ2dsZVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBmaWx0ZXJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBgaW5wdXRbbmFtZV49XCIke3RvZ2dsZS5kYXRhc2V0LmZpbHRlckxpc3R9XCJdW3ZhbHVlPVwiJHt0b2dnbGUuZGF0YXNldC52YWx1ZX1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0b2dnbGluZyBzZWxlY3QgZmlsdGVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRGaWx0ZXJzQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdChcclxuICAgICAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZS50YXJnZXQuY2xvc2VzdChcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlci10b2dnbGVcIik7XHJcbiAgICAgICAgY29uc3QgaW5zaWRlU2VsZWN0RmlsdGVyID1cclxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIud3N1LXBlb3BsZS1saXN0X19zZWxlY3QtZmlsdGVyXCIpICE9PSBudWxsO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tzIGluc2lkZSBjbGlja2VkIGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICBpZiAoY2xpY2tlZEZpbHRlcnNDb250YWluZXIgPT09IGZpbHRlcnNDb250YWluZXIpIHtcclxuICAgICAgICAgIGlmICh0b2dnbGUpIHtcclxuICAgICAgICAgICAgLy8gY2xvc2Ugb3RoZXIgb3BlbiBtZW51c1xyXG4gICAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodCAhPT0gdG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodG9nZ2xlLCAhd3N1QXJpYUlzRXhwYW5kZWQodG9nZ2xlKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjbG9zZSBhbGwgbWVudXMgaW4gZmlsdGVyQ29udGFpbmVyIGlmIGNsaWNrIHdhcyBub3QgaW4gYSB0b2dnbGUgb3Igc2VsZWN0IG1lbnVcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIWluc2lkZVNlbGVjdEZpbHRlcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIGFsbCBpZiBjbGljayB3YXMgb3V0c2lkZSBjdXJyZW50IGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjbGlja2VkRmlsdGVyc0NvbnRhaW5lciA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgY2xpY2tlZEZpbHRlcnNDb250YWluZXIgIT09IGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZpbHRlclRvZ2dsZXMuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRNTChwZW9wbGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgZmlsdGVyc1xyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGNyZWF0ZVBlb3BsZUZpbHRlcnMoZWwuZGF0YXNldC5maWx0ZXJzLCBwZW9wbGUpO1xyXG4gICAgY29udGVudCArPSBmaWx0ZXJzQ29udGFpbmVyLm91dGVySFRNTDtcclxuXHJcbiAgICAvLyBjcmVhdGUgcGVvcGxlIGxpc3RcclxuICAgIGNvbnN0IHBlb3BsZUNvbnRhaW5lciA9IGNyZWF0ZVBlb3BsZUNvbnRhaW5lcigpO1xyXG4gICAgcG9wdWxhdGVQZW9wbGVDb250YWluZXIocGVvcGxlLCBwZW9wbGVDb250YWluZXIpO1xyXG4gICAgY29udGVudCArPSBwZW9wbGVDb250YWluZXIub3V0ZXJIVE1MO1xyXG5cclxuICAgIC8vIHdyaXRlIGh0bWwgdG8gZG9tXHJcbiAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGVvcGxlKCkge1xyXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxyXG4gICAgY29uc3QgcGFyYW1zID0gcXVlcnlBdHRyaWJ1dGVzXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaWR4KSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGN1cnIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0clZhbHVlKSB7XHJcbiAgICAgICAgICBhY2MucHVzaChjdXJyICsgXCI9XCIgKyBhdHRyVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwgW10pXHJcbiAgICAgIC5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAvLyBtYWtlIHJlcXVlc3RcclxuICAgIHJldHVybiBmZXRjaChhcGlFbmRwb2ludCArIHBhcmFtcylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0UGVvcGxlKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBhbGxQZW9wbGVTdHJpbmcgPSBkYXRhO1xyXG4gICAgICBwZW9wbGUgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgZ2VuZXJhdGVIVE1MKHBlb3BsZSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiaW5kRXZlbnRzKGVsKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXQoKTtcclxufTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0XCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgbmV3IFBlb3BsZUxpc3QoZWwpO1xyXG59KTtcclxuIiwiLyoqXG4gKiBGdXNlLmpzIHY2LjQuNiAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5XG4gICAgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJylcbiAgKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUudHJpbSgpLmxlbmd0aFxufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyAnW29iamVjdCBVbmRlZmluZWRdJ1xuICAgICAgOiAnW29iamVjdCBOdWxsXSdcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcbn1cblxuY29uc3QgRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFID0gJ0V4dGVuZGVkIHNlYXJjaCBpcyBub3QgYXZhaWxhYmxlJztcblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcblxuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gKGtleSkgPT5cbiAgYEludmFsaWQgdmFsdWUgZm9yIGtleSAke2tleX1gO1xuXG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSAobWF4KSA9PlxuICBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5cbmNvbnN0IE1JU1NJTkdfS0VZX1BST1BFUlRZID0gKG5hbWUpID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcblxuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0gKGtleSkgPT5cbiAgYFByb3BlcnR5ICd3ZWlnaHQnIGluIGtleSAnJHtrZXl9JyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmA7XG5cbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlNYXAgPSB7fTtcblxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IGNyZWF0ZUtleShrZXkpO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuXG4gICAgICB0aGlzLl9rZXlzLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuX2tleU1hcFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkud2VpZ2h0IC89IHRvdGFsV2VpZ2h0O1xuICAgIH0pO1xuICB9XG4gIGdldChrZXlJZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYXBba2V5SWRdXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIGxldCBwYXRoID0gbnVsbDtcbiAgbGV0IGlkID0gbnVsbDtcbiAgbGV0IHNyYyA9IG51bGw7XG4gIGxldCB3ZWlnaHQgPSAxO1xuXG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGtleS5uYW1lO1xuICAgIHNyYyA9IG5hbWU7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKG5hbWUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gIH1cblxuICByZXR1cm4geyBwYXRoLCBpZCwgd2VpZ2h0LCBzcmMgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlQYXRoKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5IDoga2V5LnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5SWQoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkuam9pbignLicpIDoga2V5XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZXBHZXQgPSAob2JqLCBwYXRoLCBpbmRleCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG9iaikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXBhdGhbaW5kZXhdKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgYXJyaXZlZCBhdCB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGtleSA9IHBhdGhbaW5kZXhdO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsYXN0IHZhbHVlIGluIHRoZSBwYXRoLCBhbmQgaWYgaXQncyBhIHN0cmluZy9udW1iZXIvYm9vbCxcbiAgICAgIC8vIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxICYmXG4gICAgICAgIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpIHx8IGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICBkZWVwR2V0KHZhbHVlLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2luY2UgcGF0aCB1c2VkIHRvIGJlIGEgc3RyaW5nKVxuICBkZWVwR2V0KG9iaiwgaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoLCAwKTtcblxuICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF1cbn1cblxuY29uc3QgTWF0Y2hPcHRpb25zID0ge1xuICAvLyBXaGV0aGVyIHRoZSBtYXRjaGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldC4gV2hlbiBgdHJ1ZWAsIGVhY2ggcmVjb3JkIGluIHRoZSByZXN1bHRcbiAgLy8gc2V0IHdpbGwgaW5jbHVkZSB0aGUgaW5kaWNlcyBvZiB0aGUgbWF0Y2hlZCBjaGFyYWN0ZXJzLlxuICAvLyBUaGVzZSBjYW4gY29uc2VxdWVudGx5IGJlIHVzZWQgZm9yIGhpZ2hsaWdodGluZyBwdXJwb3Nlcy5cbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgLy8gYSBwZXJmZWN0IG1hdGNoIGhhcyBhbHJlYWR5IGJlZW4gbG9jYXRlZCBpbiB0aGUgc3RyaW5nLlxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDFcbn07XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gV2hlbiB0cnVlLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb246IHNvcnQgYnkgYXNjZW5kaW5nIHNjb3JlLCBhc2NlbmRpbmcgaW5kZXhcbiAgc29ydEZuOiAoYSwgYikgPT5cbiAgICBhLnNjb3JlID09PSBiLnNjb3JlID8gKGEuaWR4IDwgYi5pZHggPyAtMSA6IDEpIDogYS5zY29yZSA8IGIuc2NvcmUgPyAtMSA6IDFcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgaXQgZW5hYmxlcyB0aGUgdXNlIG9mIHVuaXgtbGlrZSBzZWFyY2ggY29tbWFuZHNcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXQsXG4gIC8vIFdoZW4gYHRydWVgLCBzZWFyY2ggd2lsbCBpZ25vcmUgYGxvY2F0aW9uYCBhbmQgYGRpc3RhbmNlYCwgc28gaXQgd29uJ3QgbWF0dGVyXG4gIC8vIHdoZXJlIGluIHRoZSBzdHJpbmcgdGhlIHBhdHRlcm4gYXBwZWFycy5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2Z1enppbmVzcy1zY29yZVxuICBpZ25vcmVMb2NhdGlvbjogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgY2FsY3VsYXRpb24gZm9yIHRoZSByZWxldmFuY2Ugc2NvcmUgKHVzZWQgZm9yIHNvcnRpbmcpIHdpbGxcbiAgLy8gaWdub3JlIHRoZSBmaWVsZC1sZW5ndGggbm9ybS5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2ZpZWxkLWxlbmd0aC1ub3JtXG4gIGlnbm9yZUZpZWxkTm9ybTogZmFsc2Vcbn07XG5cbnZhciBDb25maWcgPSB7XG4gIC4uLkJhc2ljT3B0aW9ucyxcbiAgLi4uTWF0Y2hPcHRpb25zLFxuICAuLi5GdXp6eU9wdGlvbnMsXG4gIC4uLkFkdmFuY2VkT3B0aW9uc1xufTtcblxuY29uc3QgU1BBQ0UgPSAvW14gXSsvZztcblxuLy8gRmllbGQtbGVuZ3RoIG5vcm06IHRoZSBzaG9ydGVyIHRoZSBmaWVsZCwgdGhlIGhpZ2hlciB0aGUgd2VpZ2h0LlxuLy8gU2V0IHRvIDMgZGVjaW1hbHMgdG8gcmVkdWNlIGluZGV4IHNpemUuXG5mdW5jdGlvbiBub3JtKG1hbnRpc3NhID0gMykge1xuICBjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgY29uc3QgbSA9IE1hdGgucG93KDEwLCBtYW50aXNzYSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IG51bVRva2VucyA9IHZhbHVlLm1hdGNoKFNQQUNFKS5sZW5ndGg7XG5cbiAgICAgIGlmIChjYWNoZS5oYXMobnVtVG9rZW5zKSkge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KG51bVRva2VucylcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9ybSA9IDEgLyBNYXRoLnNxcnQobnVtVG9rZW5zKTtcblxuICAgICAgLy8gSW4gcGxhY2Ugb2YgYHRvRml4ZWQobWFudGlzc2EpYCwgZm9yIGZhc3RlciBjb21wdXRhdGlvblxuICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQoTWF0aC5yb3VuZChub3JtICogbSkgLyBtKTtcblxuICAgICAgY2FjaGUuc2V0KG51bVRva2Vucywgbik7XG5cbiAgICAgIHJldHVybiBuXG4gICAgfSxcbiAgICBjbGVhcigpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1c2VJbmRleCB7XG4gIGNvbnN0cnVjdG9yKHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4gfSA9IHt9KSB7XG4gICAgdGhpcy5ub3JtID0gbm9ybSgzKTtcbiAgICB0aGlzLmdldEZuID0gZ2V0Rm47XG4gICAgdGhpcy5pc0NyZWF0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0SW5kZXhSZWNvcmRzKCk7XG4gIH1cbiAgc2V0U291cmNlcyhkb2NzID0gW10pIHtcbiAgICB0aGlzLmRvY3MgPSBkb2NzO1xuICB9XG4gIHNldEluZGV4UmVjb3JkcyhyZWNvcmRzID0gW10pIHtcbiAgICB0aGlzLnJlY29yZHMgPSByZWNvcmRzO1xuICB9XG4gIHNldEtleXMoa2V5cyA9IFtdKSB7XG4gICAgdGhpcy5rZXlzID0ga2V5cztcbiAgICB0aGlzLl9rZXlzTWFwID0ge307XG4gICAga2V5cy5mb3JFYWNoKChrZXksIGlkeCkgPT4ge1xuICAgICAgdGhpcy5fa2V5c01hcFtrZXkuaWRdID0gaWR4O1xuICAgIH0pO1xuICB9XG4gIGNyZWF0ZSgpIHtcbiAgICBpZiAodGhpcy5pc0NyZWF0ZWQgfHwgIXRoaXMuZG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuaXNDcmVhdGVkID0gdHJ1ZTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8U3RyaW5nPlxuICAgIGlmIChpc1N0cmluZyh0aGlzLmRvY3NbMF0pKSB7XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgICB0aGlzLmRvY3MuZm9yRWFjaCgoZG9jLCBkb2NJbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm5vcm0uY2xlYXIoKTtcbiAgfVxuICAvLyBBZGRzIGEgZG9jIHRvIHRoZSBlbmQgb2YgdGhlIGluZGV4XG4gIGFkZChkb2MpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLnNpemUoKTtcblxuICAgIGlmIChpc1N0cmluZyhkb2MpKSB7XG4gICAgICB0aGlzLl9hZGRTdHJpbmcoZG9jLCBpZHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9hZGRPYmplY3QoZG9jLCBpZHgpO1xuICAgIH1cbiAgfVxuICAvLyBSZW1vdmVzIHRoZSBkb2MgYXQgdGhlIHNwZWNpZmllZCBpbmRleCBvZiB0aGUgaW5kZXhcbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5yZWNvcmRzLnNwbGljZShpZHgsIDEpO1xuXG4gICAgLy8gQ2hhbmdlIHJlZiBpbmRleCBvZiBldmVyeSBzdWJzcXVlbnQgZG9jXG4gICAgZm9yIChsZXQgaSA9IGlkeCwgbGVuID0gdGhpcy5zaXplKCk7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgdGhpcy5yZWNvcmRzW2ldLmkgLT0gMTtcbiAgICB9XG4gIH1cbiAgZ2V0VmFsdWVGb3JJdGVtQXRLZXlJZChpdGVtLCBrZXlJZCkge1xuICAgIHJldHVybiBpdGVtW3RoaXMuX2tleXNNYXBba2V5SWRdXVxuICB9XG4gIHNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3Jkcy5sZW5ndGhcbiAgfVxuICBfYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkb2MpIHx8IGlzQmxhbmsoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHJlY29yZCA9IHtcbiAgICAgIHY6IGRvYyxcbiAgICAgIGk6IGRvY0luZGV4LFxuICAgICAgbjogdGhpcy5ub3JtLmdldChkb2MpXG4gICAgfTtcblxuICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJlY29yZCk7XG4gIH1cbiAgX2FkZE9iamVjdChkb2MsIGRvY0luZGV4KSB7XG4gICAgbGV0IHJlY29yZCA9IHsgaTogZG9jSW5kZXgsICQ6IHt9IH07XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgZXZlcnkga2V5IChpLmUsIHBhdGgpLCBhbmQgZmV0Y2ggdGhlIHZhbHVlIGF0IHRoYXQga2V5XG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSwga2V5SW5kZXgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGtleSlcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0Rm4oZG9jLCBrZXkucGF0aCk7XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmRzID0gW107XG4gICAgICAgIGNvbnN0IHN0YWNrID0gW3sgbmVzdGVkQXJySW5kZXg6IC0xLCB2YWx1ZSB9XTtcblxuICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgeyBuZXN0ZWRBcnJJbmRleCwgdmFsdWUgfSA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKCFpc0RlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgICAgICB2OiB2YWx1ZSxcbiAgICAgICAgICAgICAgaTogbmVzdGVkQXJySW5kZXgsXG4gICAgICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdWJSZWNvcmRzLnB1c2goc3ViUmVjb3JkKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtLCBrKSA9PiB7XG4gICAgICAgICAgICAgIHN0YWNrLnB1c2goe1xuICAgICAgICAgICAgICAgIG5lc3RlZEFyckluZGV4OiBrLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY29yZC4kW2tleUluZGV4XSA9IHN1YlJlY29yZHM7XG4gICAgICB9IGVsc2UgaWYgKCFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkID0ge1xuICAgICAgICAgIHY6IHZhbHVlLFxuICAgICAgICAgIG46IHRoaXMubm9ybS5nZXQodmFsdWUpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZWNvcmRzLnB1c2gocmVjb3JkKTtcbiAgfVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleXM6IHRoaXMua2V5cyxcbiAgICAgIHJlY29yZHM6IHRoaXMucmVjb3Jkc1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRleChrZXlzLCBkb2NzLCB7IGdldEZuID0gQ29uZmlnLmdldEZuIH0gPSB7fSkge1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuIH0pO1xuICBteUluZGV4LnNldEtleXMoa2V5cy5tYXAoY3JlYXRlS2V5KSk7XG4gIG15SW5kZXguc2V0U291cmNlcyhkb2NzKTtcbiAgbXlJbmRleC5jcmVhdGUoKTtcbiAgcmV0dXJuIG15SW5kZXhcbn1cblxuZnVuY3Rpb24gcGFyc2VJbmRleChkYXRhLCB7IGdldEZuID0gQ29uZmlnLmdldEZuIH0gPSB7fSkge1xuICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IGRhdGE7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4gfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzKTtcbiAgbXlJbmRleC5zZXRJbmRleFJlY29yZHMocmVjb3Jkcyk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShcbiAgcGF0dGVybixcbiAge1xuICAgIGVycm9ycyA9IDAsXG4gICAgY3VycmVudExvY2F0aW9uID0gMCxcbiAgICBleHBlY3RlZExvY2F0aW9uID0gMCxcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBjb25zdCBhY2N1cmFjeSA9IGVycm9ycyAvIHBhdHRlcm4ubGVuZ3RoO1xuXG4gIGlmIChpZ25vcmVMb2NhdGlvbikge1xuICAgIHJldHVybiBhY2N1cmFjeVxuICB9XG5cbiAgY29uc3QgcHJveGltaXR5ID0gTWF0aC5hYnMoZXhwZWN0ZWRMb2NhdGlvbiAtIGN1cnJlbnRMb2NhdGlvbik7XG5cbiAgaWYgKCFkaXN0YW5jZSkge1xuICAgIC8vIERvZGdlIGRpdmlkZSBieSB6ZXJvIGVycm9yLlxuICAgIHJldHVybiBwcm94aW1pdHkgPyAxLjAgOiBhY2N1cmFjeVxuICB9XG5cbiAgcmV0dXJuIGFjY3VyYWN5ICsgcHJveGltaXR5IC8gZGlzdGFuY2Vcbn1cblxuZnVuY3Rpb24gY29udmVydE1hc2tUb0luZGljZXMoXG4gIG1hdGNobWFzayA9IFtdLFxuICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoXG4pIHtcbiAgbGV0IGluZGljZXMgPSBbXTtcbiAgbGV0IHN0YXJ0ID0gLTE7XG4gIGxldCBlbmQgPSAtMTtcbiAgbGV0IGkgPSAwO1xuXG4gIGZvciAobGV0IGxlbiA9IG1hdGNobWFzay5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGxldCBtYXRjaCA9IG1hdGNobWFza1tpXTtcbiAgICBpZiAobWF0Y2ggJiYgc3RhcnQgPT09IC0xKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2ggJiYgc3RhcnQgIT09IC0xKSB7XG4gICAgICBlbmQgPSBpIC0gMTtcbiAgICAgIGlmIChlbmQgLSBzdGFydCArIDEgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgICAgIGluZGljZXMucHVzaChbc3RhcnQsIGVuZF0pO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSAtMTtcbiAgICB9XG4gIH1cblxuICAvLyAoaS0xIC0gc3RhcnQpICsgMSA9PiBpIC0gc3RhcnRcbiAgaWYgKG1hdGNobWFza1tpIC0gMV0gJiYgaSAtIHN0YXJ0ID49IG1pbk1hdGNoQ2hhckxlbmd0aCkge1xuICAgIGluZGljZXMucHVzaChbc3RhcnQsIGkgLSAxXSk7XG4gIH1cblxuICByZXR1cm4gaW5kaWNlc1xufVxuXG4vLyBNYWNoaW5lIHdvcmQgc2l6ZVxuY29uc3QgTUFYX0JJVFMgPSAzMjtcblxuZnVuY3Rpb24gc2VhcmNoKFxuICB0ZXh0LFxuICBwYXR0ZXJuLFxuICBwYXR0ZXJuQWxwaGFiZXQsXG4gIHtcbiAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICB0aHJlc2hvbGQgPSBDb25maWcudGhyZXNob2xkLFxuICAgIGZpbmRBbGxNYXRjaGVzID0gQ29uZmlnLmZpbmRBbGxNYXRjaGVzLFxuICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgfSA9IHt9XG4pIHtcbiAgaWYgKHBhdHRlcm4ubGVuZ3RoID4gTUFYX0JJVFMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoUEFUVEVSTl9MRU5HVEhfVE9PX0xBUkdFKE1BWF9CSVRTKSlcbiAgfVxuXG4gIGNvbnN0IHBhdHRlcm5MZW4gPSBwYXR0ZXJuLmxlbmd0aDtcbiAgLy8gU2V0IHN0YXJ0aW5nIGxvY2F0aW9uIGF0IGJlZ2lubmluZyB0ZXh0IGFuZCBpbml0aWFsaXplIHRoZSBhbHBoYWJldC5cbiAgY29uc3QgdGV4dExlbiA9IHRleHQubGVuZ3RoO1xuICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlbiBsb2NhdGlvbiA+IHRleHQubGVuZ3RoXG4gIGNvbnN0IGV4cGVjdGVkTG9jYXRpb24gPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsb2NhdGlvbiwgdGV4dExlbikpO1xuICAvLyBIaWdoZXN0IHNjb3JlIGJleW9uZCB3aGljaCB3ZSBnaXZlIHVwLlxuICBsZXQgY3VycmVudFRocmVzaG9sZCA9IHRocmVzaG9sZDtcbiAgLy8gSXMgdGhlcmUgYSBuZWFyYnkgZXhhY3QgbWF0Y2g/IChzcGVlZHVwKVxuICBsZXQgYmVzdExvY2F0aW9uID0gZXhwZWN0ZWRMb2NhdGlvbjtcblxuICAvLyBQZXJmb3JtYW5jZTogb25seSBjb21wdXRlciBtYXRjaGVzIHdoZW4gdGhlIG1pbk1hdGNoQ2hhckxlbmd0aCA+IDFcbiAgLy8gT1IgaWYgYGluY2x1ZGVNYXRjaGVzYCBpcyB0cnVlLlxuICBjb25zdCBjb21wdXRlTWF0Y2hlcyA9IG1pbk1hdGNoQ2hhckxlbmd0aCA+IDEgfHwgaW5jbHVkZU1hdGNoZXM7XG4gIC8vIEEgbWFzayBvZiB0aGUgbWF0Y2hlcywgdXNlZCBmb3IgYnVpbGRpbmcgdGhlIGluZGljZXNcbiAgY29uc3QgbWF0Y2hNYXNrID0gY29tcHV0ZU1hdGNoZXMgPyBBcnJheSh0ZXh0TGVuKSA6IFtdO1xuXG4gIGxldCBpbmRleDtcblxuICAvLyBHZXQgYWxsIGV4YWN0IG1hdGNoZXMsIGhlcmUgZm9yIHNwZWVkIHVwXG4gIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YocGF0dGVybiwgYmVzdExvY2F0aW9uKSkgPiAtMSkge1xuICAgIGxldCBzY29yZSA9IGNvbXB1dGVTY29yZShwYXR0ZXJuLCB7XG4gICAgICBjdXJyZW50TG9jYXRpb246IGluZGV4LFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGN1cnJlbnRUaHJlc2hvbGQgPSBNYXRoLm1pbihzY29yZSwgY3VycmVudFRocmVzaG9sZCk7XG4gICAgYmVzdExvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuXG4gICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IHBhdHRlcm5MZW4pIHtcbiAgICAgICAgbWF0Y2hNYXNrW2luZGV4ICsgaV0gPSAxO1xuICAgICAgICBpICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVzZXQgdGhlIGJlc3QgbG9jYXRpb25cbiAgYmVzdExvY2F0aW9uID0gLTE7XG5cbiAgbGV0IGxhc3RCaXRBcnIgPSBbXTtcbiAgbGV0IGZpbmFsU2NvcmUgPSAxO1xuICBsZXQgYmluTWF4ID0gcGF0dGVybkxlbiArIHRleHRMZW47XG5cbiAgY29uc3QgbWFzayA9IDEgPDwgKHBhdHRlcm5MZW4gLSAxKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5MZW47IGkgKz0gMSkge1xuICAgIC8vIFNjYW4gZm9yIHRoZSBiZXN0IG1hdGNoOyBlYWNoIGl0ZXJhdGlvbiBhbGxvd3MgZm9yIG9uZSBtb3JlIGVycm9yLlxuICAgIC8vIFJ1biBhIGJpbmFyeSBzZWFyY2ggdG8gZGV0ZXJtaW5lIGhvdyBmYXIgZnJvbSB0aGUgbWF0Y2ggbG9jYXRpb24gd2UgY2FuIHN0cmF5XG4gICAgLy8gYXQgdGhpcyBlcnJvciBsZXZlbC5cbiAgICBsZXQgYmluTWluID0gMDtcbiAgICBsZXQgYmluTWlkID0gYmluTWF4O1xuXG4gICAgd2hpbGUgKGJpbk1pbiA8IGJpbk1pZCkge1xuICAgICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICAgIC8vIFNwZWVkIHVwOiBxdWljayBib29sIHRvIGludCBjb252ZXJzaW9uIChpLmUsIGBjaGFyTWF0Y2ggPyAxIDogMGApXG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gKyEhY2hhck1hdGNoO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gY29tcHV0ZVNjb3JlKHBhdHRlcm4sIHtcbiAgICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVGhpcyBtYXRjaCB3aWxsIGFsbW9zdCBjZXJ0YWlubHkgYmUgYmV0dGVyIHRoYW4gYW55IGV4aXN0aW5nIG1hdGNoLlxuICAgICAgICAvLyBCdXQgY2hlY2sgYW55d2F5LlxuICAgICAgICBpZiAoZmluYWxTY29yZSA8PSBjdXJyZW50VGhyZXNob2xkKSB7XG4gICAgICAgICAgLy8gSW5kZWVkIGl0IGlzXG4gICAgICAgICAgY3VycmVudFRocmVzaG9sZCA9IGZpbmFsU2NvcmU7XG4gICAgICAgICAgYmVzdExvY2F0aW9uID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgICAgLy8gQWxyZWFkeSBwYXNzZWQgYGxvY2AsIGRvd25oaWxsIGZyb20gaGVyZSBvbiBpbi5cbiAgICAgICAgICBpZiAoYmVzdExvY2F0aW9uIDw9IGV4cGVjdGVkTG9jYXRpb24pIHtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gV2hlbiBwYXNzaW5nIGBiZXN0TG9jYXRpb25gLCBkb24ndCBleGNlZWQgb3VyIGN1cnJlbnQgZGlzdGFuY2UgZnJvbSBgZXhwZWN0ZWRMb2NhdGlvbmAuXG4gICAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgxLCAyICogZXhwZWN0ZWRMb2NhdGlvbiAtIGJlc3RMb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBObyBob3BlIGZvciBhIChiZXR0ZXIpIG1hdGNoIGF0IGdyZWF0ZXIgZXJyb3IgbGV2ZWxzLlxuICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlKHBhdHRlcm4sIHtcbiAgICAgIGVycm9yczogaSArIDEsXG4gICAgICBjdXJyZW50TG9jYXRpb246IGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKHNjb3JlID4gY3VycmVudFRocmVzaG9sZCkge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBsYXN0Qml0QXJyID0gYml0QXJyO1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0ge1xuICAgIGlzTWF0Y2g6IGJlc3RMb2NhdGlvbiA+PSAwLFxuICAgIC8vIENvdW50IGV4YWN0IG1hdGNoZXMgKHRob3NlIHdpdGggYSBzY29yZSBvZiAwKSB0byBiZSBcImFsbW9zdFwiIGV4YWN0XG4gICAgc2NvcmU6IE1hdGgubWF4KDAuMDAxLCBmaW5hbFNjb3JlKVxuICB9O1xuXG4gIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgIGNvbnN0IGluZGljZXMgPSBjb252ZXJ0TWFza1RvSW5kaWNlcyhtYXRjaE1hc2ssIG1pbk1hdGNoQ2hhckxlbmd0aCk7XG4gICAgaWYgKCFpbmRpY2VzLmxlbmd0aCkge1xuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGluZGljZXM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybikge1xuICBsZXQgbWFzayA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXR0ZXJuLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgY29uc3QgY2hhciA9IHBhdHRlcm4uY2hhckF0KGkpO1xuICAgIG1hc2tbY2hhcl0gPSAobWFza1tjaGFyXSB8fCAwKSB8ICgxIDw8IChsZW4gLSBpIC0gMSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tcbn1cblxuY2xhc3MgQml0YXBTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH07XG5cbiAgICB0aGlzLnBhdHRlcm4gPSBpc0Nhc2VTZW5zaXRpdmUgPyBwYXR0ZXJuIDogcGF0dGVybi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgdGhpcy5jaHVua3MgPSBbXTtcblxuICAgIGlmICghdGhpcy5wYXR0ZXJuLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWRkQ2h1bmsgPSAocGF0dGVybiwgc3RhcnRJbmRleCkgPT4ge1xuICAgICAgdGhpcy5jaHVua3MucHVzaCh7XG4gICAgICAgIHBhdHRlcm4sXG4gICAgICAgIGFscGhhYmV0OiBjcmVhdGVQYXR0ZXJuQWxwaGFiZXQocGF0dGVybiksXG4gICAgICAgIHN0YXJ0SW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBsZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA+IE1BWF9CSVRTKSB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBjb25zdCByZW1haW5kZXIgPSBsZW4gJSBNQVhfQklUUztcbiAgICAgIGNvbnN0IGVuZCA9IGxlbiAtIHJlbWFpbmRlcjtcblxuICAgICAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihpLCBNQVhfQklUUyksIGkpO1xuICAgICAgICBpICs9IE1BWF9CSVRTO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBsZW4gLSBNQVhfQklUUztcbiAgICAgICAgYWRkQ2h1bmsodGhpcy5wYXR0ZXJuLnN1YnN0cihzdGFydEluZGV4KSwgc3RhcnRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybiwgMCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoSW4odGV4dCkge1xuICAgIGNvbnN0IHsgaXNDYXNlU2Vuc2l0aXZlLCBpbmNsdWRlTWF0Y2hlcyB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKCFpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gRXhhY3QgbWF0Y2hcbiAgICBpZiAodGhpcy5wYXR0ZXJuID09PSB0ZXh0KSB7XG4gICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBpc01hdGNoOiB0cnVlLFxuICAgICAgICBzY29yZTogMFxuICAgICAgfTtcblxuICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgIHJlc3VsdC5pbmRpY2VzID0gW1swLCB0ZXh0Lmxlbmd0aCAtIDFdXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSwgdXNlIEJpdGFwIGFsZ29yaXRobVxuICAgIGNvbnN0IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuICAgIGxldCBoYXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgICB0aGlzLmNodW5rcy5mb3JFYWNoKCh7IHBhdHRlcm4sIGFscGhhYmV0LCBzdGFydEluZGV4IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaCh0ZXh0LCBwYXR0ZXJuLCBhbHBoYWJldCwge1xuICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24gKyBzdGFydEluZGV4LFxuICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgdGhyZXNob2xkLFxuICAgICAgICBmaW5kQWxsTWF0Y2hlcyxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgICAgaWdub3JlTG9jYXRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICBoYXNNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcblxuICAgICAgaWYgKGlzTWF0Y2ggJiYgaW5kaWNlcykge1xuICAgICAgICBhbGxJbmRpY2VzID0gWy4uLmFsbEluZGljZXMsIC4uLmluZGljZXNdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGlzTWF0Y2g6IGhhc01hdGNoZXMsXG4gICAgICBzY29yZTogaGFzTWF0Y2hlcyA/IHRvdGFsU2NvcmUgLyB0aGlzLmNodW5rcy5sZW5ndGggOiAxXG4gICAgfTtcblxuICAgIGlmIChoYXNNYXRjaGVzICYmIGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmNsYXNzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICB9XG4gIHN0YXRpYyBpc011bHRpTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLm11bHRpUmVnZXgpXG4gIH1cbiAgc3RhdGljIGlzU2luZ2xlTWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiBnZXRNYXRjaChwYXR0ZXJuLCB0aGlzLnNpbmdsZVJlZ2V4KVxuICB9XG4gIHNlYXJjaCgvKnRleHQqLykge31cbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2gocGF0dGVybiwgZXhwKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBwYXR0ZXJuLm1hdGNoKGV4cCk7XG4gIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGxcbn1cblxuLy8gVG9rZW46ICdmaWxlXG5cbmNsYXNzIEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXj1cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL149KC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dCA9PT0gdGhpcy5wYXR0ZXJuO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIWZpcmVcblxuY2xhc3MgSW52ZXJzZUV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGV4dC5pbmRleE9mKHRoaXMucGF0dGVybik7XG4gICAgY29uc3QgaXNNYXRjaCA9IGluZGV4ID09PSAtMTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiBeZmlsZVxuXG5jbGFzcyBQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3ByZWZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5zdGFydHNXaXRoKHRoaXMucGF0dGVybik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGhpcy5wYXR0ZXJuLmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAhXmZpcmVcblxuY2xhc3MgSW52ZXJzZVByZWZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1wcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcXF5cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46IC5maWxlJFxuXG5jbGFzcyBTdWZmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3N1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCJcXCQkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogW3RleHQubGVuZ3RoIC0gdGhpcy5wYXR0ZXJuLmxlbmd0aCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIS5maWxlJFxuXG5jbGFzcyBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdpbnZlcnNlLXN1ZmZpeC1leGFjdCdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiEoLiopXFwkJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGNvbnN0IGlzTWF0Y2ggPSAhdGV4dC5lbmRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbmNsYXNzIEZ1enp5TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuLFxuICAgIHtcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb25cbiAgICB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gICAgdGhpcy5fYml0YXBTZWFyY2ggPSBuZXcgQml0YXBTZWFyY2gocGF0dGVybiwge1xuICAgICAgbG9jYXRpb24sXG4gICAgICB0aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2Z1enp5J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL15cIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14oLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIHJldHVybiB0aGlzLl9iaXRhcFNlYXJjaC5zZWFyY2hJbih0ZXh0KVxuICB9XG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBJbmNsdWRlTWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW5jbHVkZSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eJ1wiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXicoLiopJC9cbiAgfVxuICBzZWFyY2godGV4dCkge1xuICAgIGxldCBsb2NhdGlvbiA9IDA7XG4gICAgbGV0IGluZGV4O1xuXG4gICAgY29uc3QgaW5kaWNlcyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5MZW4gPSB0aGlzLnBhdHRlcm4ubGVuZ3RoO1xuXG4gICAgLy8gR2V0IGFsbCBleGFjdCBtYXRjaGVzXG4gICAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4sIGxvY2F0aW9uKSkgPiAtMSkge1xuICAgICAgbG9jYXRpb24gPSBpbmRleCArIHBhdHRlcm5MZW47XG4gICAgICBpbmRpY2VzLnB1c2goW2luZGV4LCBsb2NhdGlvbiAtIDFdKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01hdGNoID0gISFpbmRpY2VzLmxlbmd0aDtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXNcbiAgICB9XG4gIH1cbn1cblxuLy8g4p2XT3JkZXIgaXMgaW1wb3J0YW50LiBETyBOT1QgQ0hBTkdFLlxuY29uc3Qgc2VhcmNoZXJzID0gW1xuICBFeGFjdE1hdGNoLFxuICBJbmNsdWRlTWF0Y2gsXG4gIFByZWZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlU3VmZml4RXhhY3RNYXRjaCxcbiAgU3VmZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZUV4YWN0TWF0Y2gsXG4gIEZ1enp5TWF0Y2hcbl07XG5cbmNvbnN0IHNlYXJjaGVyc0xlbiA9IHNlYXJjaGVycy5sZW5ndGg7XG5cbi8vIFJlZ2V4IHRvIHNwbGl0IGJ5IHNwYWNlcywgYnV0IGtlZXAgYW55dGhpbmcgaW4gcXVvdGVzIHRvZ2V0aGVyXG5jb25zdCBTUEFDRV9SRSA9IC8gKyg/PShbXlxcXCJdKlxcXCJbXlxcXCJdKlxcXCIpKlteXFxcIl0qJCkvO1xuY29uc3QgT1JfVE9LRU4gPSAnfCc7XG5cbi8vIFJldHVybiBhIDJEIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBxdWVyeSwgZm9yIHNpbXBsZXIgcGFyc2luZy5cbi8vIEV4YW1wbGU6XG4vLyBcIl5jb3JlIGdvJCB8IHJiJCB8IHB5JCB4eSRcIiA9PiBbW1wiXmNvcmVcIiwgXCJnbyRcIl0sIFtcInJiJFwiXSwgW1wicHkkXCIsIFwieHkkXCJdXVxuZnVuY3Rpb24gcGFyc2VRdWVyeShwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgcmV0dXJuIHBhdHRlcm4uc3BsaXQoT1JfVE9LRU4pLm1hcCgoaXRlbSkgPT4ge1xuICAgIGxldCBxdWVyeSA9IGl0ZW1cbiAgICAgIC50cmltKClcbiAgICAgIC5zcGxpdChTUEFDRV9SRSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gJiYgISFpdGVtLnRyaW0oKSk7XG5cbiAgICBsZXQgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgcXVlcnlJdGVtID0gcXVlcnlbaV07XG5cbiAgICAgIC8vIDEuIEhhbmRsZSBtdWx0aXBsZSBxdWVyeSBtYXRjaCAoaS5lLCBvbmNlIHRoYXQgYXJlIHF1b3RlZCwgbGlrZSBgXCJoZWxsbyB3b3JsZFwiYClcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCFmb3VuZCAmJiArK2lkeCA8IHNlYXJjaGVyc0xlbikge1xuICAgICAgICBjb25zdCBzZWFyY2hlciA9IHNlYXJjaGVyc1tpZHhdO1xuICAgICAgICBsZXQgdG9rZW4gPSBzZWFyY2hlci5pc011bHRpTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMi4gSGFuZGxlIHNpbmdsZSBxdWVyeSBtYXRjaGVzIChpLmUsIG9uY2UgdGhhdCBhcmUgKm5vdCogcXVvdGVkKVxuICAgICAgaWR4ID0gLTE7XG4gICAgICB3aGlsZSAoKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNTaW5nbGVNYXRjaChxdWVyeUl0ZW0pO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobmV3IHNlYXJjaGVyKHRva2VuLCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH0pXG59XG5cbi8vIFRoZXNlIGV4dGVuZGVkIG1hdGNoZXJzIGNhbiByZXR1cm4gYW4gYXJyYXkgb2YgbWF0Y2hlcywgYXMgb3Bwb3NlZFxuLy8gdG8gYSBzaW5nbCBtYXRjaFxuY29uc3QgTXVsdGlNYXRjaFNldCA9IG5ldyBTZXQoW0Z1enp5TWF0Y2gudHlwZSwgSW5jbHVkZU1hdGNoLnR5cGVdKTtcblxuLyoqXG4gKiBDb21tYW5kLWxpa2Ugc2VhcmNoaW5nXG4gKiA9PT09PT09PT09PT09PT09PT09PT09XG4gKlxuICogR2l2ZW4gbXVsdGlwbGUgc2VhcmNoIHRlcm1zIGRlbGltaXRlZCBieSBzcGFjZXMuZS5nLiBgXmpzY3JpcHQgLnB5dGhvbiQgcnVieSAhamF2YWAsXG4gKiBzZWFyY2ggaW4gYSBnaXZlbiB0ZXh0LlxuICpcbiAqIFNlYXJjaCBzeW50YXg6XG4gKlxuICogfCBUb2tlbiAgICAgICB8IE1hdGNoIHR5cGUgICAgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAtLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gfFxuICogfCBganNjcmlwdGAgICB8IGZ1enp5LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBmdXp6eSBtYXRjaCBganNjcmlwdGAgICAgICAgfFxuICogfCBgPXNjaGVtZWAgICB8IGV4YWN0LW1hdGNoICAgICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBhcmUgYHNjaGVtZWAgICAgICAgICAgICAgICAgfFxuICogfCBgJ3B5dGhvbmAgICB8IGluY2x1ZGUtbWF0Y2ggICAgICAgICAgICAgIHwgSXRlbXMgdGhhdCBpbmNsdWRlIGBweXRob25gICAgICAgICAgICAgfFxuICogfCBgIXJ1YnlgICAgICB8IGludmVyc2UtZXhhY3QtbWF0Y2ggICAgICAgIHwgSXRlbXMgdGhhdCBkbyBub3QgaW5jbHVkZSBgcnVieWAgICAgICAgfFxuICogfCBgXmphdmFgICAgICB8IHByZWZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBzdGFydCB3aXRoIGBqYXZhYCAgICAgICAgICAgfFxuICogfCBgIV5lYXJsYW5nYCB8IGludmVyc2UtcHJlZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3Qgc3RhcnQgd2l0aCBgZWFybGFuZ2AgfFxuICogfCBgLmpzJGAgICAgICB8IHN1ZmZpeC1leGFjdC1tYXRjaCAgICAgICAgIHwgSXRlbXMgdGhhdCBlbmQgd2l0aCBgLmpzYCAgICAgICAgICAgICAgfFxuICogfCBgIS5nbyRgICAgICB8IGludmVyc2Utc3VmZml4LWV4YWN0LW1hdGNoIHwgSXRlbXMgdGhhdCBkbyBub3QgZW5kIHdpdGggYC5nb2AgICAgICAgfFxuICpcbiAqIEEgc2luZ2xlIHBpcGUgY2hhcmFjdGVyIGFjdHMgYXMgYW4gT1Igb3BlcmF0b3IuIEZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nXG4gKiBxdWVyeSBtYXRjaGVzIGVudHJpZXMgdGhhdCBzdGFydCB3aXRoIGBjb3JlYCBhbmQgZW5kIHdpdGggZWl0aGVyYGdvYCwgYHJiYCxcbiAqIG9yYHB5YC5cbiAqXG4gKiBgYGBcbiAqIF5jb3JlIGdvJCB8IHJiJCB8IHB5JFxuICogYGBgXG4gKi9cbmNsYXNzIEV4dGVuZGVkU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUgPSBDb25maWcuaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaW5jbHVkZU1hdGNoZXMgPSBDb25maWcuaW5jbHVkZU1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaWdub3JlTG9jYXRpb24gPSBDb25maWcuaWdub3JlTG9jYXRpb24sXG4gICAgICBmaW5kQWxsTWF0Y2hlcyA9IENvbmZpZy5maW5kQWxsTWF0Y2hlcyxcbiAgICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkID0gQ29uZmlnLnRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBpZ25vcmVMb2NhdGlvbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2VcbiAgICB9O1xuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnF1ZXJ5ID0gcGFyc2VRdWVyeSh0aGlzLnBhdHRlcm4sIHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgY29uZGl0aW9uKF8sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaFxuICB9XG5cbiAgc2VhcmNoSW4odGV4dCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5xdWVyeTtcblxuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzTWF0Y2g6IGZhbHNlLFxuICAgICAgICBzY29yZTogMVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5jbHVkZU1hdGNoZXMsIGlzQ2FzZVNlbnNpdGl2ZSB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgdGV4dCA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHRleHQgOiB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgbnVtTWF0Y2hlcyA9IDA7XG4gICAgbGV0IGFsbEluZGljZXMgPSBbXTtcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG5cbiAgICAvLyBPUnNcbiAgICBmb3IgKGxldCBpID0gMCwgcUxlbiA9IHF1ZXJ5Lmxlbmd0aDsgaSA8IHFMZW47IGkgKz0gMSkge1xuICAgICAgY29uc3Qgc2VhcmNoZXJzID0gcXVlcnlbaV07XG5cbiAgICAgIC8vIFJlc2V0IGluZGljZXNcbiAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgIG51bU1hdGNoZXMgPSAwO1xuXG4gICAgICAvLyBBTkRzXG4gICAgICBmb3IgKGxldCBqID0gMCwgcExlbiA9IHNlYXJjaGVycy5sZW5ndGg7IGogPCBwTGVuOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbal07XG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgaW5kaWNlcywgc2NvcmUgfSA9IHNlYXJjaGVyLnNlYXJjaCh0ZXh0KTtcblxuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgIG51bU1hdGNoZXMgKz0gMTtcbiAgICAgICAgICB0b3RhbFNjb3JlICs9IHNjb3JlO1xuICAgICAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHNlYXJjaGVyLmNvbnN0cnVjdG9yLnR5cGU7XG4gICAgICAgICAgICBpZiAoTXVsdGlNYXRjaFNldC5oYXModHlwZSkpIHtcbiAgICAgICAgICAgICAgYWxsSW5kaWNlcyA9IFsuLi5hbGxJbmRpY2VzLCAuLi5pbmRpY2VzXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMucHVzaChpbmRpY2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG90YWxTY29yZSA9IDA7XG4gICAgICAgICAgbnVtTWF0Y2hlcyA9IDA7XG4gICAgICAgICAgYWxsSW5kaWNlcy5sZW5ndGggPSAwO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gT1IgY29uZGl0aW9uLCBzbyBpZiBUUlVFLCByZXR1cm5cbiAgICAgIGlmIChudW1NYXRjaGVzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgICBzY29yZTogdG90YWxTY29yZSAvIG51bU1hdGNoZXNcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXN1bHQuaW5kaWNlcyA9IGFsbEluZGljZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTm90aGluZyB3YXMgbWF0Y2hlZFxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAxXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJlZ2lzdGVyZWRTZWFyY2hlcnMgPSBbXTtcblxuZnVuY3Rpb24gcmVnaXN0ZXIoLi4uYXJncykge1xuICByZWdpc3RlcmVkU2VhcmNoZXJzLnB1c2goLi4uYXJncyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJlZ2lzdGVyZWRTZWFyY2hlcnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBsZXQgc2VhcmNoZXJDbGFzcyA9IHJlZ2lzdGVyZWRTZWFyY2hlcnNbaV07XG4gICAgaWYgKHNlYXJjaGVyQ2xhc3MuY29uZGl0aW9uKHBhdHRlcm4sIG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gbmV3IHNlYXJjaGVyQ2xhc3MocGF0dGVybiwgb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIG9wdGlvbnMpXG59XG5cbmNvbnN0IExvZ2ljYWxPcGVyYXRvciA9IHtcbiAgQU5EOiAnJGFuZCcsXG4gIE9SOiAnJG9yJ1xufTtcblxuY29uc3QgS2V5VHlwZSA9IHtcbiAgUEFUSDogJyRwYXRoJyxcbiAgUEFUVEVSTjogJyR2YWwnXG59O1xuXG5jb25zdCBpc0V4cHJlc3Npb24gPSAocXVlcnkpID0+XG4gICEhKHF1ZXJ5W0xvZ2ljYWxPcGVyYXRvci5BTkRdIHx8IHF1ZXJ5W0xvZ2ljYWxPcGVyYXRvci5PUl0pO1xuXG5jb25zdCBpc1BhdGggPSAocXVlcnkpID0+ICEhcXVlcnlbS2V5VHlwZS5QQVRIXTtcblxuY29uc3QgaXNMZWFmID0gKHF1ZXJ5KSA9PlxuICAhaXNBcnJheShxdWVyeSkgJiYgaXNPYmplY3QocXVlcnkpICYmICFpc0V4cHJlc3Npb24ocXVlcnkpO1xuXG5jb25zdCBjb252ZXJ0VG9FeHBsaWNpdCA9IChxdWVyeSkgPT4gKHtcbiAgW0xvZ2ljYWxPcGVyYXRvci5BTkRdOiBPYmplY3Qua2V5cyhxdWVyeSkubWFwKChrZXkpID0+ICh7XG4gICAgW2tleV06IHF1ZXJ5W2tleV1cbiAgfSkpXG59KTtcblxuLy8gV2hlbiBgYXV0b2AgaXMgYHRydWVgLCB0aGUgcGFyc2UgZnVuY3Rpb24gd2lsbCBpbmZlciBhbmQgaW5pdGlhbGl6ZSBhbmQgYWRkXG4vLyB0aGUgYXBwcm9wcmlhdGUgYFNlYXJjaGVyYCBpbnN0YW5jZVxuZnVuY3Rpb24gcGFyc2UocXVlcnksIG9wdGlvbnMsIHsgYXV0byA9IHRydWUgfSA9IHt9KSB7XG4gIGNvbnN0IG5leHQgPSAocXVlcnkpID0+IHtcbiAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcblxuICAgIGNvbnN0IGlzUXVlcnlQYXRoID0gaXNQYXRoKHF1ZXJ5KTtcblxuICAgIGlmICghaXNRdWVyeVBhdGggJiYga2V5cy5sZW5ndGggPiAxICYmICFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgICByZXR1cm4gbmV4dChjb252ZXJ0VG9FeHBsaWNpdChxdWVyeSkpXG4gICAgfVxuXG4gICAgaWYgKGlzTGVhZihxdWVyeSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IGlzUXVlcnlQYXRoID8gcXVlcnlbS2V5VHlwZS5QQVRIXSA6IGtleXNbMF07XG5cbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUVEVSTl0gOiBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoIWlzU3RyaW5nKHBhdHRlcm4pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihMT0dJQ0FMX1NFQVJDSF9JTlZBTElEX1FVRVJZX0ZPUl9LRVkoa2V5KSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICBrZXlJZDogY3JlYXRlS2V5SWQoa2V5KSxcbiAgICAgICAgcGF0dGVyblxuICAgICAgfTtcblxuICAgICAgaWYgKGF1dG8pIHtcbiAgICAgICAgb2JqLnNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocGF0dGVybiwgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmpcbiAgICB9XG5cbiAgICBsZXQgbm9kZSA9IHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIG9wZXJhdG9yOiBrZXlzWzBdXG4gICAgfTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKG5leHQoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBub2RlXG4gIH07XG5cbiAgaWYgKCFpc0V4cHJlc3Npb24ocXVlcnkpKSB7XG4gICAgcXVlcnkgPSBjb252ZXJ0VG9FeHBsaWNpdChxdWVyeSk7XG4gIH1cblxuICByZXR1cm4gbmV4dChxdWVyeSlcbn1cblxuLy8gUHJhY3RpY2FsIHNjb3JpbmcgZnVuY3Rpb25cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZSQxKFxuICByZXN1bHRzLFxuICB7IGlnbm9yZUZpZWxkTm9ybSA9IENvbmZpZy5pZ25vcmVGaWVsZE5vcm0gfVxuKSB7XG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAxO1xuXG4gICAgcmVzdWx0Lm1hdGNoZXMuZm9yRWFjaCgoeyBrZXksIG5vcm0sIHNjb3JlIH0pID0+IHtcbiAgICAgIGNvbnN0IHdlaWdodCA9IGtleSA/IGtleS53ZWlnaHQgOiBudWxsO1xuXG4gICAgICB0b3RhbFNjb3JlICo9IE1hdGgucG93KFxuICAgICAgICBzY29yZSA9PT0gMCAmJiB3ZWlnaHQgPyBOdW1iZXIuRVBTSUxPTiA6IHNjb3JlLFxuICAgICAgICAod2VpZ2h0IHx8IDEpICogKGlnbm9yZUZpZWxkTm9ybSA/IDEgOiBub3JtKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJlc3VsdC5zY29yZSA9IHRvdGFsU2NvcmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1NYXRjaGVzKHJlc3VsdCwgZGF0YSkge1xuICBjb25zdCBtYXRjaGVzID0gcmVzdWx0Lm1hdGNoZXM7XG4gIGRhdGEubWF0Y2hlcyA9IFtdO1xuXG4gIGlmICghaXNEZWZpbmVkKG1hdGNoZXMpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBtYXRjaGVzLmZvckVhY2goKG1hdGNoKSA9PiB7XG4gICAgaWYgKCFpc0RlZmluZWQobWF0Y2guaW5kaWNlcykgfHwgIW1hdGNoLmluZGljZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IGluZGljZXMsIHZhbHVlIH0gPSBtYXRjaDtcblxuICAgIGxldCBvYmogPSB7XG4gICAgICBpbmRpY2VzLFxuICAgICAgdmFsdWVcbiAgICB9O1xuXG4gICAgaWYgKG1hdGNoLmtleSkge1xuICAgICAgb2JqLmtleSA9IG1hdGNoLmtleS5zcmM7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoLmlkeCA+IC0xKSB7XG4gICAgICBvYmoucmVmSW5kZXggPSBtYXRjaC5pZHg7XG4gICAgfVxuXG4gICAgZGF0YS5tYXRjaGVzLnB1c2gob2JqKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVNjb3JlKHJlc3VsdCwgZGF0YSkge1xuICBkYXRhLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoXG4gIHJlc3VsdHMsXG4gIGRvY3MsXG4gIHtcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpbmNsdWRlU2NvcmUgPSBDb25maWcuaW5jbHVkZVNjb3JlXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IHRyYW5zZm9ybWVycyA9IFtdO1xuXG4gIGlmIChpbmNsdWRlTWF0Y2hlcykgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtTWF0Y2hlcyk7XG4gIGlmIChpbmNsdWRlU2NvcmUpIHRyYW5zZm9ybWVycy5wdXNoKHRyYW5zZm9ybVNjb3JlKTtcblxuICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgaWR4IH0gPSByZXN1bHQ7XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXRlbTogZG9jc1tpZHhdLFxuICAgICAgcmVmSW5kZXg6IGlkeFxuICAgIH07XG5cbiAgICBpZiAodHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgdHJhbnNmb3JtZXJzLmZvckVhY2goKHRyYW5zZm9ybWVyKSA9PiB7XG4gICAgICAgIHRyYW5zZm9ybWVyKHJlc3VsdCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG5jbGFzcyBGdXNlIHtcbiAgY29uc3RydWN0b3IoZG9jcywgb3B0aW9ucyA9IHt9LCBpbmRleCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgLi4uQ29uZmlnLCAuLi5vcHRpb25zIH07XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLm9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2ggJiZcbiAgICAgICF0cnVlXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFKVxuICAgIH1cblxuICAgIHRoaXMuX2tleVN0b3JlID0gbmV3IEtleVN0b3JlKHRoaXMub3B0aW9ucy5rZXlzKTtcblxuICAgIHRoaXMuc2V0Q29sbGVjdGlvbihkb2NzLCBpbmRleCk7XG4gIH1cblxuICBzZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KSB7XG4gICAgdGhpcy5fZG9jcyA9IGRvY3M7XG5cbiAgICBpZiAoaW5kZXggJiYgIShpbmRleCBpbnN0YW5jZW9mIEZ1c2VJbmRleCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihJTkNPUlJFQ1RfSU5ERVhfVFlQRSlcbiAgICB9XG5cbiAgICB0aGlzLl9teUluZGV4ID1cbiAgICAgIGluZGV4IHx8XG4gICAgICBjcmVhdGVJbmRleCh0aGlzLm9wdGlvbnMua2V5cywgdGhpcy5fZG9jcywge1xuICAgICAgICBnZXRGbjogdGhpcy5vcHRpb25zLmdldEZuXG4gICAgICB9KTtcbiAgfVxuXG4gIGFkZChkb2MpIHtcbiAgICBpZiAoIWlzRGVmaW5lZChkb2MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9kb2NzLnB1c2goZG9jKTtcbiAgICB0aGlzLl9teUluZGV4LmFkZChkb2MpO1xuICB9XG5cbiAgcmVtb3ZlKHByZWRpY2F0ZSA9ICgvKiBkb2MsIGlkeCAqLykgPT4gZmFsc2UpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5fZG9jcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgZG9jID0gdGhpcy5fZG9jc1tpXTtcbiAgICAgIGlmIChwcmVkaWNhdGUoZG9jLCBpKSkge1xuICAgICAgICB0aGlzLnJlbW92ZUF0KGkpO1xuICAgICAgICBpIC09IDE7XG4gICAgICAgIGxlbiAtPSAxO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICByZW1vdmVBdChpZHgpIHtcbiAgICB0aGlzLl9kb2NzLnNwbGljZShpZHgsIDEpO1xuICAgIHRoaXMuX215SW5kZXgucmVtb3ZlQXQoaWR4KTtcbiAgfVxuXG4gIGdldEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9teUluZGV4XG4gIH1cblxuICBzZWFyY2gocXVlcnksIHsgbGltaXQgPSAtMSB9ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZSxcbiAgICAgIHNob3VsZFNvcnQsXG4gICAgICBzb3J0Rm4sXG4gICAgICBpZ25vcmVGaWVsZE5vcm1cbiAgICB9ID0gdGhpcy5vcHRpb25zO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBpc1N0cmluZyhxdWVyeSlcbiAgICAgID8gaXNTdHJpbmcodGhpcy5fZG9jc1swXSlcbiAgICAgICAgPyB0aGlzLl9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KVxuICAgICAgICA6IHRoaXMuX3NlYXJjaE9iamVjdExpc3QocXVlcnkpXG4gICAgICA6IHRoaXMuX3NlYXJjaExvZ2ljYWwocXVlcnkpO1xuXG4gICAgY29tcHV0ZVNjb3JlJDEocmVzdWx0cywgeyBpZ25vcmVGaWVsZE5vcm0gfSk7XG5cbiAgICBpZiAoc2hvdWxkU29ydCkge1xuICAgICAgcmVzdWx0cy5zb3J0KHNvcnRGbik7XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtYmVyKGxpbWl0KSAmJiBsaW1pdCA+IC0xKSB7XG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBsaW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdChyZXN1bHRzLCB0aGlzLl9kb2NzLCB7XG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGluY2x1ZGVTY29yZVxuICAgIH0pXG4gIH1cblxuICBfc2VhcmNoU3RyaW5nTGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBzdHJpbmcgaW4gdGhlIGluZGV4XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7IHY6IHRleHQsIGk6IGlkeCwgbjogbm9ybSB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaXRlbTogdGV4dCxcbiAgICAgICAgICBpZHgsXG4gICAgICAgICAgbWF0Y2hlczogW3sgc2NvcmUsIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hMb2dpY2FsKHF1ZXJ5KSB7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gcGFyc2UocXVlcnksIHRoaXMub3B0aW9ucyk7XG5cbiAgICBjb25zdCBldmFsdWF0ZSA9IChub2RlLCBpdGVtLCBpZHgpID0+IHtcbiAgICAgIGlmICghbm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCB7IGtleUlkLCBzZWFyY2hlciB9ID0gbm9kZTtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgIGtleTogdGhpcy5fa2V5U3RvcmUuZ2V0KGtleUlkKSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5fbXlJbmRleC5nZXRWYWx1ZUZvckl0ZW1BdEtleUlkKGl0ZW0sIGtleUlkKSxcbiAgICAgICAgICBzZWFyY2hlclxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgbWF0Y2hlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICAvKmVzbGludCBpbmRlbnQ6IFsyLCAyLCB7XCJTd2l0Y2hDYXNlXCI6IDF9XSovXG4gICAgICBzd2l0Y2ggKG5vZGUub3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSBMb2dpY2FsT3BlcmF0b3IuQU5EOiB7XG4gICAgICAgICAgY29uc3QgcmVzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGV2YWx1YXRlKGNoaWxkLCBpdGVtLCBpZHgpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVzLnB1c2goLi4ucmVzdWx0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBMb2dpY2FsT3BlcmF0b3IuT1I6IHtcbiAgICAgICAgICBjb25zdCByZXMgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZXZhbHVhdGUoY2hpbGQsIGl0ZW0sIGlkeCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVjb3JkcyA9IHRoaXMuX215SW5kZXgucmVjb3JkcztcbiAgICBjb25zdCByZXN1bHRNYXAgPSB7fTtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG5cbiAgICByZWNvcmRzLmZvckVhY2goKHsgJDogaXRlbSwgaTogaWR4IH0pID0+IHtcbiAgICAgIGlmIChpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgbGV0IGV4cFJlc3VsdHMgPSBldmFsdWF0ZShleHByZXNzaW9uLCBpdGVtLCBpZHgpO1xuXG4gICAgICAgIGlmIChleHBSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIERlZHVwZSB3aGVuIGFkZGluZ1xuICAgICAgICAgIGlmICghcmVzdWx0TWFwW2lkeF0pIHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdID0geyBpZHgsIGl0ZW0sIG1hdGNoZXM6IFtdIH07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0TWFwW2lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBleHBSZXN1bHRzLmZvckVhY2goKHsgbWF0Y2hlcyB9KSA9PiB7XG4gICAgICAgICAgICByZXN1bHRNYXBbaWR4XS5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cblxuICBfc2VhcmNoT2JqZWN0TGlzdChxdWVyeSkge1xuICAgIGNvbnN0IHNlYXJjaGVyID0gY3JlYXRlU2VhcmNoZXIocXVlcnksIHRoaXMub3B0aW9ucyk7XG4gICAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSB0aGlzLl9teUluZGV4O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKCFpc0RlZmluZWQoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBldmVyeSBrZXkgKGkuZSwgcGF0aCksIGFuZCBmZXRjaCB0aGUgdmFsdWUgYXQgdGhhdCBrZXlcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5LCBrZXlJbmRleCkgPT4ge1xuICAgICAgICBtYXRjaGVzLnB1c2goXG4gICAgICAgICAgLi4udGhpcy5fZmluZE1hdGNoZXMoe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IGl0ZW1ba2V5SW5kZXhdLFxuICAgICAgICAgICAgc2VhcmNoZXJcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBpdGVtLFxuICAgICAgICAgIG1hdGNoZXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG4gIF9maW5kTWF0Y2hlcyh7IGtleSwgdmFsdWUsIHNlYXJjaGVyIH0pIHtcbiAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGxldCBtYXRjaGVzID0gW107XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgICAgaWYgKCFpc0RlZmluZWQodGV4dCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaXNNYXRjaCwgc2NvcmUsIGluZGljZXMgfSA9IHNlYXJjaGVyLnNlYXJjaEluKHRleHQpO1xuXG4gICAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgICAgICAgIHNjb3JlLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHRleHQsXG4gICAgICAgICAgICBpZHgsXG4gICAgICAgICAgICBub3JtLFxuICAgICAgICAgICAgaW5kaWNlc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB2OiB0ZXh0LCBuOiBub3JtIH0gPSB2YWx1ZTtcblxuICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgIGlmIChpc01hdGNoKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh7IHNjb3JlLCBrZXksIHZhbHVlOiB0ZXh0LCBub3JtLCBpbmRpY2VzIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzXG4gIH1cbn1cblxuRnVzZS52ZXJzaW9uID0gJzYuNC42JztcbkZ1c2UuY3JlYXRlSW5kZXggPSBjcmVhdGVJbmRleDtcbkZ1c2UucGFyc2VJbmRleCA9IHBhcnNlSW5kZXg7XG5GdXNlLmNvbmZpZyA9IENvbmZpZztcblxue1xuICBGdXNlLnBhcnNlUXVlcnkgPSBwYXJzZTtcbn1cblxue1xuICByZWdpc3RlcihFeHRlbmRlZFNlYXJjaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZ1c2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=