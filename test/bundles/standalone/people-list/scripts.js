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
  var _el$dataset$profileLi;

  var apiEndpoint = "https://people.wsu.edu" + "/wp-json/peopleapi/v1/people?";
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
  var profileLink = (_el$dataset$profileLi = el.dataset.profileLink) !== null && _el$dataset$profileLi !== void 0 ? _el$dataset$profileLi : '';
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
    var linkProfile = profileLink && person.bio ? true : false;
    return "<div class=\"wsu-card wsu-card-person wsu-image-frame--ratio-square wsu-card--outline-shadow js-people-list__person\" data-nid=\"".concat(person.nid, "\">\n        ").concat(displayFields.includes("photo") ? "\n            <div class=\"wsu-image-frame wsu-card__person-image wsu-people-list__person-image".concat(person.photo ? " has-photo" : "", "\">\n                ").concat(person.photo ? "\n                    ".concat(linkProfile ? "<a href=\"".concat(profileLink, "?nid=").concat(person.nid, "\">") : '', "<img src=\"").concat(person.photo, "\"\n                        ").concat(person.photo_srcset ? "srcset=\"".concat(person.photo_srcset, "\"") : "", "\n                        ").concat(person.photo_srcset ? "sizes=\"(min-width: 768px) 33.3vw, 100vw\"" : "", " loading=\"lazy\">").concat(linkProfile ? "</a>" : '') : "", "\n            </div>") : "", "\n\n        <div class=\"wsu-card__content\">\n            ").concat(displayFields.includes("name") ? "<".concat(el.dataset.headingtag, " class=\"wsu-card__person-name\">").concat(person.name, "</").concat(el.dataset.headingtag, ">") : "", "\n            \n            ").concat(displayFields.includes("title") && Array.isArray(person.title) ? person.title.map(function (t) {
      return "<div class=\"wsu-card__person-title\">".concat(t, "</div>");
    }).join("") : "", "\n            \n            ").concat(displayFields.includes("email") && person.email ? "\n                <div class=\"wsu-meta-email wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Email Address</span>\n                    <a href=\"mailto:".concat(person.email, "\">").concat(person.email, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("office") && person.office ? "\n                <div class=\"wsu-meta-location wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Location</span>\n                    <a href=\"#\">".concat(person.office, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("phone") && person.phone ? "\n                <div class=\"wsu-meta-phone wsu-meta--icon-crimson\">\n                    <span class=\"wsu-screen-reader-only\">Phone</span>\n                    <a href=\"tel:".concat(person.phone, "\">").concat(person.phone, "</a>\n                </div>") : "", "\n\n            ").concat(displayFields.includes("website") && person.website ? "\n                <div class=\"wsu-meta-website wsu-meta--icon-crimson\">\n                    <a href=\"".concat(person.website, "\">").concat(el.dataset.websiteLinkText, "</a>\n                </div>") : "", "\n            ").concat(linkProfile ? "<div class=\"wsu-people-list__view-profile\"><a class=\"wsu-button--style-arrow\" href=\"".concat(profileLink, "?nid=").concat(person.nid, "\">View Profile</a></div>") : '', "\n        </div>\n    </div>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9zdGFuZGFsb25lL3Blb3BsZS1saXN0L3NjcmlwdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFFQyxPQUFGLEVBQVdDLElBQVgsRUFBcUI7QUFFN0MsdUJBR0lBLElBSEosQ0FDSUMsUUFESjtBQUFBLE1BQ0lBLFFBREosK0JBQ2UsR0FEZjtBQUFBLG9CQUdJRCxJQUhKLENBRUlFLEtBRko7QUFBQSxNQUVJQSxLQUZKLDRCQUVZLElBRlo7QUFLQSxNQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUVBSixFQUFBQSxPQUFPLENBQUNLLEtBQVIsQ0FBY0MsU0FBZCxHQUE0Qk4sT0FBTyxDQUFDTyxZQUFSLEdBQXVCQyxRQUFRLENBQUNMLEtBQUQsQ0FBL0IsR0FBeUMsSUFBckU7QUFFQUMsRUFBQUEsS0FBSyxHQUFHSyxVQUFVLENBQUUsWUFBTTtBQUV0QlQsSUFBQUEsT0FBTyxDQUFDSyxLQUFSLENBQWNDLFNBQWQsR0FBMEIsRUFBMUI7QUFFSCxHQUppQixFQUlmSixRQUplLENBQWxCO0FBTUgsQ0FqQkQ7O0FBbUJBLElBQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBRVYsT0FBRixFQUFXQyxJQUFYLEVBQXFCO0FBRTNDLHdCQUlJQSxJQUpKLENBQ0lDLFFBREo7QUFBQSxNQUNJQSxRQURKLGdDQUNlLEdBRGY7QUFBQSxxQkFJSUQsSUFKSixDQUVJRSxLQUZKO0FBQUEsTUFFSUEsS0FGSiw2QkFFWSxJQUZaO0FBQUEsdUJBSUlGLElBSkosQ0FHSVUsUUFISjtBQUFBLE1BR0lBLFFBSEosK0JBR2UsS0FIZjtBQU1BLE1BQUlQLEtBQUssR0FBRyxLQUFaO0FBQ0EsTUFBSVEsVUFBVSxHQUFHLEtBQWpCO0FBRUFaLEVBQUFBLE9BQU8sQ0FBQ0ssS0FBUixDQUFjQyxTQUFkLEdBQTRCTixPQUFPLENBQUNPLFlBQVIsR0FBdUJDLFFBQVEsQ0FBQ0wsS0FBRCxDQUEv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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsSUFBSTs7QUFFL0I7QUFDQSxtQ0FBbUMsSUFBSTs7QUFFdkMsa0RBQWtELE1BQU07O0FBRXhEO0FBQ0EsK0JBQStCLElBQUk7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSw0Q0FBNEMsU0FBUztBQUNyRDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUk7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCOztBQUVwRDtBQUNBLGtCQUFrQix3QkFBd0I7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLGtDQUFrQzs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLCtCQUErQjtBQUMxRCxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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Q0EsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwwQkFBMEI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOLGNBQWMsbUJBQW1COztBQUVqQyxjQUFjLDBCQUEwQjs7QUFFeEM7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7O1VDbHZEM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9fYXNzZXRzL2pzL3BhcnRpYWxzL3dzdUFuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VBcmlhLmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL19hc3NldHMvanMvcGFydGlhbHMvd3N1Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFscy5qcyIsIndlYnBhY2s6Ly9Ad3N1d2VidGVhbS93c3Utd2ViLWRlc2lnbi1zeXN0ZW0vLi9zcmMvbW9kdWxlcy9wZW9wbGUtbGlzdC9fc2NyaXB0LmpzIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS8uL25vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5lc20uanMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3c3V3ZWJ0ZWFtL3dzdS13ZWItZGVzaWduLXN5c3RlbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdzdXdlYnRlYW0vd3N1LXdlYi1kZXNpZ24tc3lzdGVtLy4vc3JjL2J1bmRsZXMvc3RhbmRhbG9uZS9wZW9wbGUtbGlzdC9zY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdzdUFuaW1hdGVTbGlkZURvd24gPSAoIGVsZW1lbnQsIGFyZ3MgKSA9PiB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgICBkdXJhdGlvbiA9IDMwMCxcclxuICAgICAgICBleHRyYSA9ICcyMCcsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICggZWxlbWVudC5zY3JvbGxIZWlnaHQgKyBwYXJzZUludChleHRyYSkgKyAncHgnICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFuaW1hdGVTbGlkZVVwID0gKCBlbGVtZW50LCBhcmdzICkgPT4ge1xyXG5cclxuICAgIGxldCB7XHJcbiAgICAgICAgZHVyYXRpb24gPSAzMDAsXHJcbiAgICAgICAgZXh0cmEgPSAnMjAnLFxyXG4gICAgICAgIGNhbGxiYWNrID0gZmFsc2UsXHJcbiAgICB9ID0gYXJncztcclxuXHJcbiAgICBsZXQgdGltZXIgPSBmYWxzZTtcclxuICAgIGxldCBkZWxheVRpbWVyID0gZmFsc2U7XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAoIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ICsgcGFyc2VJbnQoZXh0cmEpICsgJ3B4JyApO1xyXG5cclxuICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xyXG5cclxuICAgIH0sIDE1ICk7XHJcblxyXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XHJcblxyXG4gICAgfSwgZHVyYXRpb24gKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHdzdUFuaW1hdGVTbGlkZURvd24sIHdzdUFuaW1hdGVTbGlkZVVwIH07IiwiY29uc3Qgd3N1QXJpYUV4cGFuZGVkID0gKCBlbGVtZW50LCB2YWx1ZSApID0+IHtcclxuXHJcbiAgICBpZiAoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICkge1xyXG5cclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCB2YWx1ZSApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHdzdUFyaWFJc0V4cGFuZGVkID0gKCBlbGVtZW50ICkgPT4ge1xyXG5cclxuICAgIGlmICggZWxlbWVudC5oYXNBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJykgKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoJ3RydWUnID09IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcpICk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHsgd3N1QXJpYUV4cGFuZGVkLCB3c3VBcmlhSXNFeHBhbmRlZCB9IiwiY29uc3Qgd3N1Q2xhc3NBZGQgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NSZW1vdmUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIGVsZW1lbnRDbGFzcyApO1xyXG5cclxufVxyXG5cclxuY29uc3Qgd3N1Q2xhc3NUb2dnbGUgPSAoIGVsZW1lbnQsIGVsZW1lbnRDbGFzcyApID0+IHtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyB3c3VDbGFzc0FkZCwgd3N1Q2xhc3NSZW1vdmUsIHdzdUNsYXNzVG9nZ2xlIH0iLCJleHBvcnQge3dzdUFuaW1hdGVTbGlkZURvd24gYXMgd3N1QW5pbWF0ZVNsaWRlRG93biB9IGZyb20gJy4vd3N1QW5pbWF0ZSc7XHJcbmV4cG9ydCB7d3N1QW5pbWF0ZVNsaWRlVXAgYXMgd3N1QW5pbWF0ZVNsaWRlVXAgfSBmcm9tICcuL3dzdUFuaW1hdGUnO1xyXG5leHBvcnQge3dzdUFyaWFFeHBhbmRlZCBhcyB3c3VBcmlhRXhwYW5kZWQgfSBmcm9tICcuL3dzdUFyaWEnO1xyXG5leHBvcnQge3dzdUFyaWFJc0V4cGFuZGVkIGFzIHdzdUFyaWFJc0V4cGFuZGVkIH0gZnJvbSAnLi93c3VBcmlhJztcclxuZXhwb3J0IHt3c3VDbGFzc0FkZCBhcyB3c3VDbGFzc0FkZCB9IGZyb20gJy4vd3N1Q2xhc3MnO1xyXG5leHBvcnQge3dzdUNsYXNzUmVtb3ZlIGFzIHdzdUNsYXNzUmVtb3ZlIH0gZnJvbSAnLi93c3VDbGFzcyc7XHJcbmV4cG9ydCB7d3N1Q2xhc3NUb2dnbGUgYXMgd3N1Q2xhc3NUb2dnbGUgfSBmcm9tICcuL3dzdUNsYXNzJzsiLCJpbXBvcnQgRnVzZSBmcm9tIFwiZnVzZS5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIHdzdUFyaWFFeHBhbmRlZCxcclxuICB3c3VBcmlhSXNFeHBhbmRlZCxcclxufSBmcm9tIFwiLi4vLi4vLi4vX2Fzc2V0cy9qcy9wYXJ0aWFscy93c3VQYXJ0aWFsc1wiO1xyXG5cclxuY29uc3QgUGVvcGxlTGlzdCA9IGZ1bmN0aW9uIChlbCkge1xyXG4gIGNvbnN0IGFwaUVuZHBvaW50ID0gUEVPUExFX0FQSV9CQVNFX1VSTCArIFwiL3dwLWpzb24vcGVvcGxlYXBpL3YxL3Blb3BsZT9cIjtcclxuICBjb25zdCBxdWVyeUF0dHJpYnV0ZXMgPSBbXHJcbiAgICBcImNvdW50XCIsXHJcbiAgICBcInBhZ2VcIixcclxuICAgIFwibmlkXCIsXHJcbiAgICBcImNsYXNzaWZpY2F0aW9uXCIsXHJcbiAgICBcInVuaXZlcnNpdHktY2F0ZWdvcnlcIixcclxuICAgIFwidW5pdmVyc2l0eS1sb2NhdGlvblwiLFxyXG4gICAgXCJ1bml2ZXJzaXR5LW9yZ2FuaXphdGlvblwiLFxyXG4gICAgXCJwaG90by1zaXplXCIsXHJcbiAgICBcInByb2ZpbGUtb3JkZXJcIixcclxuICBdO1xyXG4gIGNvbnN0IGZpbHRlckF0dHJpYnV0ZU1hcCA9IHtcclxuICAgIGxvY2F0aW9uOiBcInVuaXZlcnNpdHlfbG9jYXRpb25cIixcclxuICAgIG9yZ2FuaXphdGlvbjogXCJ1bml2ZXJzaXR5X29yZ2FuaXphdGlvblwiLFxyXG4gICAgY2xhc3NpZmljYXRpb246IFwiY2xhc3NpZmljYXRpb25cIixcclxuICAgIHRhZzogXCJ0YWdcIixcclxuICAgIGNhdGVnb3J5OiBcImNhdGVnb3J5XCIsXHJcbiAgfTtcclxuICBjb25zdCBzZWFyY2hlciA9IG5ldyBGdXNlKFtdLCB7XHJcbiAgICBzaG91bGRTb3J0OiB0cnVlLFxyXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAzLFxyXG4gICAgdGhyZXNob2xkOiAwLjMsXHJcbiAgICBrZXlzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcIm5hbWVcIiwgXHJcbiAgICAgICAgd2VpZ2h0OiAzLFxyXG4gICAgICB9LFxyXG4gICAgICBcInRpdGxlXCIsXHJcbiAgICAgIFwibmlkXCIsXHJcbiAgICAgIFwiZW1haWxcIixcclxuICAgICAgXCJwaG9uZVwiLFxyXG4gICAgXSxcclxuICB9KTtcclxuICBjb25zdCBjb21wb25lbnRJZCA9IGVsLmRhdGFzZXQuY29tcG9uZW50SWQ7XHJcbiAgY29uc3QgcHJvZmlsZUxpbmsgPSBlbC5kYXRhc2V0LnByb2ZpbGVMaW5rID8/ICcnO1xyXG4gIGNvbnN0IGRpc3BsYXlGaWVsZHMgPSBlbC5kYXRhc2V0LmRpc3BsYXlGaWVsZHMuc3BsaXQoXCIsXCIpO1xyXG4gIGNvbnN0IG9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzID0gZWwuZGF0YXNldC5vbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcztcclxuICBjb25zdCBleGNsdWRlZFRlcm1zID0gZWwuZGF0YXNldC5leGNsdWRlVGVybVZhbHVlc1xyXG4gICAgLnNwbGl0KFwiLFwiKVxyXG4gICAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgY29uc3QgYWN0aXZlRmlsdGVycyA9IFtdO1xyXG4gIGNvbnN0IGNhdGVnb3J5VGVybXMgPSBlbC5kYXRhc2V0LmNhdGVnb3J5RmlsdGVyVGVybXNcclxuICAuc3BsaXQoXCIsXCIpXHJcbiAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgY29uc3QgdGFnVGVybXMgPSBlbC5kYXRhc2V0LnRhZ0ZpbHRlclRlcm1zXHJcbiAgLnNwbGl0KFwiLFwiKVxyXG4gIC5maWx0ZXIoKHIpID0+IHIgIT09IFwiXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uVGVybXMgPSBlbC5kYXRhc2V0LmxvY2F0aW9uRmlsdGVyVGVybXNcclxuICAuc3BsaXQoXCIsXCIpXHJcbiAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgY29uc3Qgb3JnYW5pemF0aW9uVGVybXMgPSBlbC5kYXRhc2V0Lm9yZ2FuaXphdGlvbkZpbHRlclRlcm1zXHJcbiAgLnNwbGl0KFwiLFwiKVxyXG4gIC5maWx0ZXIoKHIpID0+IHIgIT09IFwiXCIpO1xyXG4gIGNvbnN0IGNsYXNzaWZpY2F0aW9uVGVybXMgPSBlbC5kYXRhc2V0LmNsYXNzaWZpY2F0aW9uRmlsdGVyVGVybXNcclxuICAuc3BsaXQoXCIsXCIpXHJcbiAgLmZpbHRlcigocikgPT4gciAhPT0gXCJcIik7XHJcbiAgXHJcbiAgY29uc3QgaW5jbHVkZWRUZXJtcyA9IFtdO1xyXG4gIGxldCBzZWxlY3RlZEZpbHRlcnNMaXN0ID0gW107XHJcbiAgbGV0IGFsbFBlb3BsZVN0cmluZyA9IFwiXCI7XHJcbiAgbGV0IHBlb3BsZTtcclxuICBsZXQgcGVvcGxlQ29udGFpbmVyO1xyXG4gIGxldCBwZW9wbGVFbGVtZW50cztcclxuICBsZXQgZmlsdGVyc0NvbnRhaW5lcjtcclxuICBsZXQgZmlsdGVyVG9nZ2xlcztcclxuICBsZXQgc2VhcmNoSW5wdXQ7XHJcbiAgXHJcblxyXG4gIGZ1bmN0aW9uIGdldFBlcnNvbkhUTUwocGVyc29uKSB7XHJcblxyXG4gICAgbGV0IGxpbmtQcm9maWxlID0gKCBwcm9maWxlTGluayAmJiBwZXJzb24uYmlvICkgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwid3N1LWNhcmQgd3N1LWNhcmQtcGVyc29uIHdzdS1pbWFnZS1mcmFtZS0tcmF0aW8tc3F1YXJlIHdzdS1jYXJkLS1vdXRsaW5lLXNoYWRvdyBqcy1wZW9wbGUtbGlzdF9fcGVyc29uXCIgZGF0YS1uaWQ9XCIke1xyXG4gICAgICBwZXJzb24ubmlkXHJcbiAgICB9XCI+XHJcbiAgICAgICAgJHtcclxuICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJwaG90b1wiKVxyXG4gICAgICAgICAgICA/IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1pbWFnZS1mcmFtZSB3c3UtY2FyZF9fcGVyc29uLWltYWdlIHdzdS1wZW9wbGUtbGlzdF9fcGVyc29uLWltYWdlJHtcclxuICAgICAgICAgICAgICBwZXJzb24ucGhvdG8gPyBcIiBoYXMtcGhvdG9cIiA6IFwiXCJcclxuICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgcGVyc29uLnBob3RvXHJcbiAgICAgICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICAgICAgJHsgbGlua1Byb2ZpbGUgPyBgPGEgaHJlZj1cIiR7cHJvZmlsZUxpbmt9P25pZD0ke3BlcnNvbi5uaWR9XCI+YDonJ308aW1nIHNyYz1cIiR7cGVyc29uLnBob3RvfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVyc29uLnBob3RvX3NyY3NldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgc3Jjc2V0PVwiJHtwZXJzb24ucGhvdG9fc3Jjc2V0fVwiYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJzb24ucGhvdG9fc3Jjc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBzaXplcz1cIihtaW4td2lkdGg6IDc2OHB4KSAzMy4zdncsIDEwMHZ3XCJgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBsb2FkaW5nPVwibGF6eVwiPiR7IGxpbmtQcm9maWxlID8gYDwvYT5gOicnfWBcclxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtY2FyZF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJuYW1lXCIpXHJcbiAgICAgICAgICAgICAgICA/IGA8JHtlbC5kYXRhc2V0LmhlYWRpbmd0YWd9IGNsYXNzPVwid3N1LWNhcmRfX3BlcnNvbi1uYW1lXCI+JHtwZXJzb24ubmFtZX08LyR7ZWwuZGF0YXNldC5oZWFkaW5ndGFnfT5gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICBkaXNwbGF5RmllbGRzLmluY2x1ZGVzKFwidGl0bGVcIikgJiYgQXJyYXkuaXNBcnJheShwZXJzb24udGl0bGUpXHJcbiAgICAgICAgICAgICAgICA/IHBlcnNvbi50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAodCkgPT4gYDxkaXYgY2xhc3M9XCJ3c3UtY2FyZF9fcGVyc29uLXRpdGxlXCI+JHt0fTwvZGl2PmBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIilcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgIGRpc3BsYXlGaWVsZHMuaW5jbHVkZXMoXCJlbWFpbFwiKSAmJiBwZXJzb24uZW1haWxcclxuICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1tZXRhLWVtYWlsIHdzdS1tZXRhLS1pY29uLWNyaW1zb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndzdS1zY3JlZW4tcmVhZGVyLW9ubHlcIj5FbWFpbCBBZGRyZXNzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86JHtwZXJzb24uZW1haWx9XCI+JHtwZXJzb24uZW1haWx9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIm9mZmljZVwiKSAmJiBwZXJzb24ub2ZmaWNlXHJcbiAgICAgICAgICAgICAgICA/IGBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtbWV0YS1sb2NhdGlvbiB3c3UtbWV0YS0taWNvbi1jcmltc29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3c3Utc2NyZWVuLXJlYWRlci1vbmx5XCI+TG9jYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4ke3BlcnNvbi5vZmZpY2V9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcInBob25lXCIpICYmIHBlcnNvbi5waG9uZVxyXG4gICAgICAgICAgICAgICAgPyBgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3N1LW1ldGEtcGhvbmUgd3N1LW1ldGEtLWljb24tY3JpbXNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiPlBob25lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6JHtwZXJzb24ucGhvbmV9XCI+JHtwZXJzb24ucGhvbmV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgZGlzcGxheUZpZWxkcy5pbmNsdWRlcyhcIndlYnNpdGVcIikgJiYgcGVyc29uLndlYnNpdGVcclxuICAgICAgICAgICAgICAgID8gYFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1tZXRhLXdlYnNpdGUgd3N1LW1ldGEtLWljb24tY3JpbXNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3BlcnNvbi53ZWJzaXRlfVwiPiR7ZWwuZGF0YXNldC53ZWJzaXRlTGlua1RleHR9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHsgbGlua1Byb2ZpbGUgPyBgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fdmlldy1wcm9maWxlXCI+PGEgY2xhc3M9XCJ3c3UtYnV0dG9uLS1zdHlsZS1hcnJvd1wiIGhyZWY9XCIke3Byb2ZpbGVMaW5rfT9uaWQ9JHtwZXJzb24ubmlkfVwiPlZpZXcgUHJvZmlsZTwvYT48L2Rpdj5gOicnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3VsZEluY2x1ZGVUZXJtVmFsdWUoc2x1Zykge1xyXG4gICAgaWYgKG9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzID09PSBcInRydWVcIiAmJiBpbmNsdWRlZFRlcm1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGluY2x1ZGVkVGVybXMuaW5jbHVkZXMoc2x1Zyk7XHJcbiAgICB9IGVsc2UgaWYgKFxyXG4gICAgICBvbmx5U2hvd1NlbGVjdGVkVGVybVZhbHVlcyA9PT0gXCJmYWxzZVwiICYmXHJcbiAgICAgIGV4Y2x1ZGVkVGVybXMubGVuZ3RoID4gMFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiAhZXhjbHVkZWRUZXJtcy5pbmNsdWRlcyhzbHVnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEZpbHRlckhUTUwoZmlsdGVyLCBwZW9wbGUpIHtcclxuICAgIGxldCBvcHRpb25zID0gW107XHJcblxyXG4gICAgbGV0IGluY2x1ZGVUZXJtcyA9IFtdO1xyXG5cclxuICAgIHN3aXRjaCAoIGZpbHRlciApIHtcclxuICAgICAgY2FzZSAnb3JnYW5pemF0aW9uJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSBvcmdhbml6YXRpb25UZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSB0YWdUZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbG9jYXRpb24nOlxyXG4gICAgICAgIGluY2x1ZGVUZXJtcyA9IGxvY2F0aW9uVGVybXM7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2NsYXNzaWZpY2F0aW9uJzpcclxuICAgICAgICBpbmNsdWRlVGVybXMgPSBjbGFzc2lmaWNhdGlvblRlcm1zO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjYXRlZ29yeSc6XHJcbiAgICAgICAgaW5jbHVkZVRlcm1zID0gY2F0ZWdvcnlUZXJtcztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgZmlsdGVyIG9wdGlvbnNcclxuICAgIHBlb3BsZS5mb3JFYWNoKChwZXJzb24pID0+IHtcclxuICAgICAgY29uc3QgZmlsdGVyT3B0aW9ucyA9IHBlcnNvbltmaWx0ZXJBdHRyaWJ1dGVNYXBbZmlsdGVyXV07XHJcblxyXG4gICAgICBpZiAoZmlsdGVyT3B0aW9ucyAmJiBmaWx0ZXJPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoIWFjdGl2ZUZpbHRlcnMuaW5jbHVkZXMoZmlsdGVyKSkge1xyXG4gICAgICAgICAgYWN0aXZlRmlsdGVycy5wdXNoKGZpbHRlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmaWx0ZXJPcHRpb25zLmZvckVhY2goKHYpID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoIGluY2x1ZGVUZXJtcy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCBpbmNsdWRlVGVybXMuaW5jbHVkZXMoIHYuc2x1ZyApICYmIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xICkgIHtcclxuICBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaCh2KTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAoIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xICkge1xyXG4gICAgICAgICAgICBvcHRpb25zLnB1c2godik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvKmlmIChcclxuICAgICAgICAgICAgc2hvdWxkSW5jbHVkZVRlcm1WYWx1ZSh2LnNsdWcpICYmXHJcbiAgICAgICAgICAgIG9wdGlvbnMuZmluZEluZGV4KChvKSA9PiBvLnNsdWcgPT09IHYuc2x1ZykgPT09IC0xXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHYpO1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHNvcnQgb3B0aW9ucyBhbHBoYWJldGljYWxseVxyXG4gICAgb3B0aW9ucy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgIHZhciB4ID0gYS5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHZhciB5ID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHJldHVybiB4IDwgeSA/IC0xIDogeCA+IHkgPyAxIDogMDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGNsYXNzPVwid3N1LXNjcmVlbi1yZWFkZXItb25seVwiXHJcbiAgICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPiAwXHJcbiAgICAgID8gYDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdC1maWx0ZXJcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ3c3UtYnV0dG9uIHdzdS1wZW9wbGUtbGlzdF9fZmlsdGVyLXRvZ2dsZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiPiR7XHJcbiAgICAgICAgICBlbC5kYXRhc2V0W2ZpbHRlciArIFwiRmlsdGVyTGFiZWxcIl1cclxuICAgICAgICB9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCIke2NvbXBvbmVudElkfV9fY29udGVudFwiIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1jb250YWluZXJcIiBhcmlhLWxhYmVsbGVkYnk9XCIke2NvbXBvbmVudElkfV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAke29wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChvKSA9PiBgPGxpIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3QtbGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fZml0bGVyLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX2ZpdGxlci1jaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCIke2ZpbHRlcn1bXVwiIHZhbHVlPVwiJHtvLnNsdWd9XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7by5uYW1lfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5gXHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgICAgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUGVvcGxlRmlsdGVycyhmaWx0ZXJzU3RyaW5nLCBwZW9wbGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gXCJcIjtcclxuICAgIGNvbnN0IGZpbHRlcnMgPSBmaWx0ZXJzU3RyaW5nLnNwbGl0KFwiLFwiKTtcclxuICAgIGNvbnN0IG5vblNlYXJjaEZpbHRlcnMgPSBmaWx0ZXJzLmZpbHRlcigoZikgPT4gZiAmJiBmICE9PSBcInNlYXJjaFwiKTtcclxuXHJcbiAgICAvLyBzZXR1cCBmaWx0ZXJzIGNvbnRhaW5lclxyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgZmlsdGVyc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcIndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgbm9uLXNlYXJjaCBmaWx0ZXJzXHJcbiAgICBub25TZWFyY2hGaWx0ZXJzLmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RGaWx0ZXIgPSBjcmVhdGVTZWxlY3RGaWx0ZXJIVE1MKGZpbHRlciwgcGVvcGxlKTtcclxuICAgICAgY29udGVudCArPSBzZWxlY3RGaWx0ZXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjcmVhdGUgc2VhcmNoIGZpbHRlclxyXG4gICAgaWYgKGZpbHRlcnMuaW5jbHVkZXMoXCJzZWFyY2hcIikpIHtcclxuICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWZpbHRlclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlYXJjaC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIke2VsLmRhdGFzZXQuc2VhcmNoRmlsdGVyTGFiZWx9XCIvPlxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3c3UtcGVvcGxlLWxpc3RfX3NlbGVjdGVkLWZpbHRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXJzLWxpc3RcIj5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgLy8gd3JpdGUgZmlsdGVycyB0byBjb250YWluZXJcclxuICAgIGZpbHRlcnNDb250YWluZXIuaW5uZXJIVE1MID0gY29udGVudDtcclxuXHJcbiAgICByZXR1cm4gZmlsdGVyc0NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUGVvcGxlQ29udGFpbmVyKHBlb3BsZSwgcGVvcGxlQ29udGFpbmVyKSB7XHJcbiAgICBsZXQgcGVvcGxlSFRNTCA9IFwiXCI7XHJcblxyXG4gICAgcGVvcGxlLmZvckVhY2goKHApID0+IHtcclxuICAgICAgcGVvcGxlSFRNTCArPSBnZXRQZXJzb25IVE1MKHApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGVvcGxlQ29udGFpbmVyLmlubmVySFRNTCA9IHBlb3BsZUhUTUw7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVQZW9wbGVDb250YWluZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IGB3c3UtY2FyZC13cmFwcGVyIHdzdS1jYXJkLXdyYXBwZXItLXBlci1yb3ctJHtlbC5kYXRhc2V0LmNvbHVtbnN9IGpzLXBlb3BsZS1saXN0YDtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlUGVvcGxlTGlzdChwZW9wbGUpIHtcclxuICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAvLyBzaG93IGFuZCBzb3J0IHBlb3BsZSBieSBmaWx0ZXJzXHJcbiAgICBwZW9wbGUuZm9yRWFjaCgocGVyc29uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBlcnNvbkVsZW1lbnQgPSBBcnJheS5mcm9tKHBlb3BsZUVsZW1lbnRzKS5maW5kKFxyXG4gICAgICAgIChwKSA9PiBwLmRhdGFzZXQubmlkID09PSBwZXJzb24ubmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAocGVyc29uRWxlbWVudCkge1xyXG4gICAgICAgIHBlcnNvbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IGk7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBoaWRlIHBlb3BsZSBub3QgZm91bmQgaW4gZmlsdGVyaW5nXHJcbiAgICBjb25zdCBwZW9wbGVUb0hpZGUgPSBBcnJheS5mcm9tKHBlb3BsZUVsZW1lbnRzKS5maWx0ZXIoKHBlcnNvbkVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBwZW9wbGUuZmluZEluZGV4KChwKSA9PiBwLm5pZCA9PT0gcGVyc29uRWxlbWVudC5kYXRhc2V0Lm5pZCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwZW9wbGVUb0hpZGUuZm9yRWFjaCgocGVyc29uRWxlbWVudCkgPT4ge1xyXG4gICAgICBwZXJzb25FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgcGVyc29uRWxlbWVudC5zdHlsZS5vcmRlciA9IG51bGw7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwZW9wbGUubGVuZ3RoID09PSAwXHJcbiAgICAgID8gZWwuY2xhc3NMaXN0LmFkZChcImhhcy1uby1yZXN1bHRzXCIpXHJcbiAgICAgIDogZWwuY2xhc3NMaXN0LnJlbW92ZShcImhhcy1uby1yZXN1bHRzXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRGaWx0ZXJzKHNlbGVjdGVkRmlsdGVySW5wdXRzKSB7XHJcbiAgICBsZXQgY29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgc2VsZWN0ZWRGaWx0ZXJJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgY29udGVudCArPSBgXHJcbiAgICAgICAgPGxpIGNsYXNzPVwid3N1LXBlb3BsZS1saXN0X19zZWxlY3RlZC1maWx0ZXJzLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVyLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgZGF0YS1maWx0ZXItbGlzdD1cIiR7aW5wdXQubmFtZS5yZXBsYWNlKFwiW11cIiwgXCJcIil9XCIgXHJcbiAgICAgICAgICAgIGRhdGEtdmFsdWU9XCIke2lucHV0LnZhbHVlfVwiPlxyXG4gICAgICAgICAgICAke2lucHV0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50LnRyaW0oKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwcm9jZXNzUGVvcGxlRmlsdGVycygpIHtcclxuICAgIGxldCBzZWxlY3RlZEZpbHRlcklucHV0cyA9IFtdO1xyXG4gICAgbGV0IGZpbHRlcmVkUGVvcGxlID0gSlNPTi5wYXJzZShhbGxQZW9wbGVTdHJpbmcpO1xyXG5cclxuICAgIGFjdGl2ZUZpbHRlcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBjb25zdCBjaGVja2JveElucHV0cyA9IGZpbHRlcnNDb250YWluZXIuZWxlbWVudHNbYCR7Zn1bXWBdO1xyXG5cclxuICAgICAgaWYgKCFjaGVja2JveElucHV0cykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2VsZWN0ZWRJbnB1dHMgPSBBcnJheS5mcm9tKGNoZWNrYm94SW5wdXRzKS5maWx0ZXIoXHJcbiAgICAgICAgKGYpID0+IGYuY2hlY2tlZFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHNlbGVjdGVkSW5wdXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZWxlY3RlZEZpbHRlcklucHV0cyA9IHNlbGVjdGVkRmlsdGVySW5wdXRzLmNvbmNhdChzZWxlY3RlZElucHV0cyk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZXMgPSBzZWxlY3RlZElucHV0cy5tYXAoKHMpID0+IHMudmFsdWUpO1xyXG5cclxuICAgICAgICBmaWx0ZXJlZFBlb3BsZSA9IGZpbHRlcmVkUGVvcGxlLmZpbHRlcigocGVyc29uKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwZXJzb25zVmFsdWVzID0gcGVyc29uW2ZpbHRlckF0dHJpYnV0ZU1hcFtmXV07XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdGVkVmFsdWVzLnNvbWUoKHYpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICEocGVyc29uc1ZhbHVlcy5maW5kSW5kZXgoKG8pID0+IHYgPT09IG8uc2x1ZykgPT09IC0xKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHNlYXJjaElucHV0ICYmXHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlICE9PSBcIlwiICYmXHJcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+PSAzXHJcbiAgICApIHtcclxuICAgICAgc2VhcmNoZXIuc2V0Q29sbGVjdGlvbihmaWx0ZXJlZFBlb3BsZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBzZWFyY2hlci5zZWFyY2goc2VhcmNoSW5wdXQudmFsdWUpO1xyXG5cclxuICAgICAgZmlsdGVyZWRQZW9wbGUgPSByZXN1bHRzLm1hcCgocikgPT4gci5pdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxlY3RlZEZpbHRlcnMoc2VsZWN0ZWRGaWx0ZXJJbnB1dHMpO1xyXG4gICAgdXBkYXRlUGVvcGxlTGlzdChmaWx0ZXJlZFBlb3BsZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiaW5kRXZlbnRzKGVsKSB7XHJcbiAgICBmaWx0ZXJzQ29udGFpbmVyID0gZWwucXVlcnlTZWxlY3RvcihcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlcnMtY29udGFpbmVyXCIpO1xyXG4gICAgZmlsdGVyVG9nZ2xlcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0X19maWx0ZXItdG9nZ2xlXCIpO1xyXG4gICAgc2VhcmNoSW5wdXQgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fc2VhcmNoLWlucHV0XCIpO1xyXG4gICAgc2VsZWN0ZWRGaWx0ZXJzTGlzdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVycy1saXN0XCJcclxuICAgICk7XHJcbiAgICBwZW9wbGVDb250YWluZXIgPSBlbC5xdWVyeVNlbGVjdG9yKFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIik7XHJcbiAgICBwZW9wbGVFbGVtZW50cyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcGVvcGxlLWxpc3RfX3BlcnNvblwiKTtcclxuXHJcbiAgICAvLyBmaWx0ZXIgb24gc2VsZWN0IG9wdGlvbiBjaGFuZ2VcclxuICAgIGZpbHRlcnNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBpZiAoZS50YXJnZXQgIT09IHNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgcHJvY2Vzc1Blb3BsZUZpbHRlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyIG9uIHNlYXJjaFxyXG4gICAgc2VhcmNoSW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBwcm9jZXNzUGVvcGxlRmlsdGVycygpOyAvLyBzaG91bGQgY29uc2lkZXIgZGVib3VuY2luZz9cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHJlbW92ZSBzZWxlY3RlZCBmaWx0ZXIgb24gdG9nZ2xlIGNsaWNrXHJcbiAgICBzZWxlY3RlZEZpbHRlcnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCB0b2dnbGUgPSBlLnRhcmdldC5jbG9zZXN0KFxyXG4gICAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fc2VsZWN0ZWQtZmlsdGVyLXRvZ2dsZVwiXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodG9nZ2xlKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBmaWx0ZXJzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICBgaW5wdXRbbmFtZV49XCIke3RvZ2dsZS5kYXRhc2V0LmZpbHRlckxpc3R9XCJdW3ZhbHVlPVwiJHt0b2dnbGUuZGF0YXNldC52YWx1ZX1cIl1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAgIGlucHV0LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHByb2Nlc3NQZW9wbGVGaWx0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB0b2dnbGluZyBzZWxlY3QgZmlsdGVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJjbGlja1wiLFxyXG4gICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRGaWx0ZXJzQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdChcclxuICAgICAgICAgIFwiLndzdS1wZW9wbGUtbGlzdF9fZmlsdGVycy1jb250YWluZXJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gZS50YXJnZXQuY2xvc2VzdChcIi53c3UtcGVvcGxlLWxpc3RfX2ZpbHRlci10b2dnbGVcIik7XHJcbiAgICAgICAgY29uc3QgaW5zaWRlU2VsZWN0RmlsdGVyID1cclxuICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIud3N1LXBlb3BsZS1saXN0X19zZWxlY3QtZmlsdGVyXCIpICE9PSBudWxsO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tzIGluc2lkZSBjbGlja2VkIGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICBpZiAoY2xpY2tlZEZpbHRlcnNDb250YWluZXIgPT09IGZpbHRlcnNDb250YWluZXIpIHtcclxuICAgICAgICAgIGlmICh0b2dnbGUpIHtcclxuICAgICAgICAgICAgLy8gY2xvc2Ugb3RoZXIgb3BlbiBtZW51c1xyXG4gICAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICBpZiAodCAhPT0gdG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodG9nZ2xlLCAhd3N1QXJpYUlzRXhwYW5kZWQodG9nZ2xlKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBjbG9zZSBhbGwgbWVudXMgaW4gZmlsdGVyQ29udGFpbmVyIGlmIGNsaWNrIHdhcyBub3QgaW4gYSB0b2dnbGUgb3Igc2VsZWN0IG1lbnVcclxuICAgICAgICAgIH0gZWxzZSBpZiAoIWluc2lkZVNlbGVjdEZpbHRlcikge1xyXG4gICAgICAgICAgICBmaWx0ZXJUb2dnbGVzLmZvckVhY2goKHQpID0+IHtcclxuICAgICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNsb3NlIGFsbCBpZiBjbGljayB3YXMgb3V0c2lkZSBjdXJyZW50IGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBjbGlja2VkRmlsdGVyc0NvbnRhaW5lciA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgY2xpY2tlZEZpbHRlcnNDb250YWluZXIgIT09IGZpbHRlcnNDb250YWluZXJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZpbHRlclRvZ2dsZXMuZm9yRWFjaCgodCkgPT4ge1xyXG4gICAgICAgICAgICB3c3VBcmlhRXhwYW5kZWQodCwgZmFsc2UpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWxzZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlSFRNTChwZW9wbGUpIHtcclxuICAgIGxldCBjb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgZmlsdGVyc1xyXG4gICAgY29uc3QgZmlsdGVyc0NvbnRhaW5lciA9IGNyZWF0ZVBlb3BsZUZpbHRlcnMoZWwuZGF0YXNldC5maWx0ZXJzLCBwZW9wbGUpO1xyXG4gICAgY29udGVudCArPSBmaWx0ZXJzQ29udGFpbmVyLm91dGVySFRNTDtcclxuXHJcbiAgICAvLyBjcmVhdGUgcGVvcGxlIGxpc3RcclxuICAgIGNvbnN0IHBlb3BsZUNvbnRhaW5lciA9IGNyZWF0ZVBlb3BsZUNvbnRhaW5lcigpO1xyXG4gICAgcG9wdWxhdGVQZW9wbGVDb250YWluZXIocGVvcGxlLCBwZW9wbGVDb250YWluZXIpO1xyXG4gICAgY29udGVudCArPSBwZW9wbGVDb250YWluZXIub3V0ZXJIVE1MO1xyXG5cclxuICAgIC8vIHdyaXRlIGh0bWwgdG8gZG9tXHJcbiAgICBlbC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0UGVvcGxlKCkge1xyXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxyXG4gICAgY29uc3QgcGFyYW1zID0gcXVlcnlBdHRyaWJ1dGVzXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3VyciwgaWR4KSB7XHJcbiAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1cIiArIGN1cnIpO1xyXG5cclxuICAgICAgICBpZiAoYXR0clZhbHVlKSB7XHJcbiAgICAgICAgICBhY2MucHVzaChjdXJyICsgXCI9XCIgKyBhdHRyVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgfSwgW10pXHJcbiAgICAgIC5qb2luKFwiJlwiKTtcclxuXHJcbiAgICAvLyBtYWtlIHJlcXVlc3RcclxuICAgIHJldHVybiBmZXRjaChhcGlFbmRwb2ludCArIHBhcmFtcylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgZ2V0UGVvcGxlKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBhbGxQZW9wbGVTdHJpbmcgPSBkYXRhO1xyXG4gICAgICBwZW9wbGUgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuICAgICAgZ2VuZXJhdGVIVE1MKHBlb3BsZSk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiaW5kRXZlbnRzKGVsKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXQoKTtcclxufTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3N1LXBlb3BsZS1saXN0XCIpLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgbmV3IFBlb3BsZUxpc3QoZWwpO1xyXG59KTtcclxuIiwiLyoqXG4gKiBGdXNlLmpzIHY2LjUuMyAtIExpZ2h0d2VpZ2h0IGZ1enp5LXNlYXJjaCAoaHR0cDovL2Z1c2Vqcy5pbylcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjEgS2lybyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5XG4gICAgPyBnZXRUYWcodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nXG4gICAgOiBBcnJheS5pc0FycmF5KHZhbHVlKVxufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanNcbmNvbnN0IElORklOSVRZID0gMSAvIDA7XG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIGxldCByZXN1bHQgPSB2YWx1ZSArICcnO1xuICByZXR1cm4gcmVzdWx0ID09ICcwJyAmJiAxIC8gdmFsdWUgPT0gLUlORklOSVRZID8gJy0wJyA6IHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJ1xufVxuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyL2lzQm9vbGVhbi5qc1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWUgPT09IHRydWUgfHxcbiAgICB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IEJvb2xlYW5dJylcbiAgKVxufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG4vLyBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc0JsYW5rKHZhbHVlKSB7XG4gIHJldHVybiAhdmFsdWUudHJpbSgpLmxlbmd0aFxufVxuXG4vLyBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4vLyBBZGFwdGVkIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9sb2Rhc2gvbG9kYXNoL2Jsb2IvbWFzdGVyLy5pbnRlcm5hbC9nZXRUYWcuanNcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbFxuICAgID8gdmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgPyAnW29iamVjdCBVbmRlZmluZWRdJ1xuICAgICAgOiAnW29iamVjdCBOdWxsXSdcbiAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcbn1cblxuY29uc3QgRVhURU5ERURfU0VBUkNIX1VOQVZBSUxBQkxFID0gJ0V4dGVuZGVkIHNlYXJjaCBpcyBub3QgYXZhaWxhYmxlJztcblxuY29uc3QgSU5DT1JSRUNUX0lOREVYX1RZUEUgPSBcIkluY29ycmVjdCAnaW5kZXgnIHR5cGVcIjtcblxuY29uc3QgTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZID0gKGtleSkgPT5cbiAgYEludmFsaWQgdmFsdWUgZm9yIGtleSAke2tleX1gO1xuXG5jb25zdCBQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UgPSAobWF4KSA9PlxuICBgUGF0dGVybiBsZW5ndGggZXhjZWVkcyBtYXggb2YgJHttYXh9LmA7XG5cbmNvbnN0IE1JU1NJTkdfS0VZX1BST1BFUlRZID0gKG5hbWUpID0+IGBNaXNzaW5nICR7bmFtZX0gcHJvcGVydHkgaW4ga2V5YDtcblxuY29uc3QgSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFID0gKGtleSkgPT5cbiAgYFByb3BlcnR5ICd3ZWlnaHQnIGluIGtleSAnJHtrZXl9JyBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcmA7XG5cbmNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmNsYXNzIEtleVN0b3JlIHtcbiAgY29uc3RydWN0b3Ioa2V5cykge1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl9rZXlNYXAgPSB7fTtcblxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IG9iaiA9IGNyZWF0ZUtleShrZXkpO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuXG4gICAgICB0aGlzLl9rZXlzLnB1c2gob2JqKTtcbiAgICAgIHRoaXMuX2tleU1hcFtvYmouaWRdID0gb2JqO1xuXG4gICAgICB0b3RhbFdlaWdodCArPSBvYmoud2VpZ2h0O1xuICAgIH0pO1xuXG4gICAgLy8gTm9ybWFsaXplIHdlaWdodHMgc28gdGhhdCB0aGVpciBzdW0gaXMgZXF1YWwgdG8gMVxuICAgIHRoaXMuX2tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBrZXkud2VpZ2h0IC89IHRvdGFsV2VpZ2h0O1xuICAgIH0pO1xuICB9XG4gIGdldChrZXlJZCkge1xuICAgIHJldHVybiB0aGlzLl9rZXlNYXBba2V5SWRdXG4gIH1cbiAga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy5fa2V5c1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fa2V5cylcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoa2V5KSB7XG4gIGxldCBwYXRoID0gbnVsbDtcbiAgbGV0IGlkID0gbnVsbDtcbiAgbGV0IHNyYyA9IG51bGw7XG4gIGxldCB3ZWlnaHQgPSAxO1xuXG4gIGlmIChpc1N0cmluZyhrZXkpIHx8IGlzQXJyYXkoa2V5KSkge1xuICAgIHNyYyA9IGtleTtcbiAgICBwYXRoID0gY3JlYXRlS2V5UGF0aChrZXkpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKGtleSwgJ25hbWUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKE1JU1NJTkdfS0VZX1BST1BFUlRZKCduYW1lJykpXG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGtleS5uYW1lO1xuICAgIHNyYyA9IG5hbWU7XG5cbiAgICBpZiAoaGFzT3duLmNhbGwoa2V5LCAnd2VpZ2h0JykpIHtcbiAgICAgIHdlaWdodCA9IGtleS53ZWlnaHQ7XG5cbiAgICAgIGlmICh3ZWlnaHQgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9LRVlfV0VJR0hUX1ZBTFVFKG5hbWUpKVxuICAgICAgfVxuICAgIH1cblxuICAgIHBhdGggPSBjcmVhdGVLZXlQYXRoKG5hbWUpO1xuICAgIGlkID0gY3JlYXRlS2V5SWQobmFtZSk7XG4gIH1cblxuICByZXR1cm4geyBwYXRoLCBpZCwgd2VpZ2h0LCBzcmMgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXlQYXRoKGtleSkge1xuICByZXR1cm4gaXNBcnJheShrZXkpID8ga2V5IDoga2V5LnNwbGl0KCcuJylcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5SWQoa2V5KSB7XG4gIHJldHVybiBpc0FycmF5KGtleSkgPyBrZXkuam9pbignLicpIDoga2V5XG59XG5cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgbGV0IGxpc3QgPSBbXTtcbiAgbGV0IGFyciA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZXBHZXQgPSAob2JqLCBwYXRoLCBpbmRleCkgPT4ge1xuICAgIGlmICghaXNEZWZpbmVkKG9iaikpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXBhdGhbaW5kZXhdKSB7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIHBhdGggbGVmdCwgd2UndmUgYXJyaXZlZCBhdCB0aGUgb2JqZWN0IHdlIGNhcmUgYWJvdXQuXG4gICAgICBsaXN0LnB1c2gob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGtleSA9IHBhdGhbaW5kZXhdO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlJ3JlIGF0IHRoZSBsYXN0IHZhbHVlIGluIHRoZSBwYXRoLCBhbmQgaWYgaXQncyBhIHN0cmluZy9udW1iZXIvYm9vbCxcbiAgICAgIC8vIGFkZCBpdCB0byB0aGUgbGlzdFxuICAgICAgaWYgKFxuICAgICAgICBpbmRleCA9PT0gcGF0aC5sZW5ndGggLSAxICYmXG4gICAgICAgIChpc1N0cmluZyh2YWx1ZSkgfHwgaXNOdW1iZXIodmFsdWUpIHx8IGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgbGlzdC5wdXNoKHRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGFyciA9IHRydWU7XG4gICAgICAgIC8vIFNlYXJjaCBlYWNoIGl0ZW0gaW4gdGhlIGFycmF5LlxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICBkZWVwR2V0KHZhbHVlW2ldLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhdGgubGVuZ3RoKSB7XG4gICAgICAgIC8vIEFuIG9iamVjdC4gUmVjdXJzZSBmdXJ0aGVyLlxuICAgICAgICBkZWVwR2V0KHZhbHVlLCBwYXRoLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2luY2UgcGF0aCB1c2VkIHRvIGJlIGEgc3RyaW5nKVxuICBkZWVwR2V0KG9iaiwgaXNTdHJpbmcocGF0aCkgPyBwYXRoLnNwbGl0KCcuJykgOiBwYXRoLCAwKTtcblxuICByZXR1cm4gYXJyID8gbGlzdCA6IGxpc3RbMF1cbn1cblxuY29uc3QgTWF0Y2hPcHRpb25zID0ge1xuICAvLyBXaGV0aGVyIHRoZSBtYXRjaGVzIHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0IHNldC4gV2hlbiBgdHJ1ZWAsIGVhY2ggcmVjb3JkIGluIHRoZSByZXN1bHRcbiAgLy8gc2V0IHdpbGwgaW5jbHVkZSB0aGUgaW5kaWNlcyBvZiB0aGUgbWF0Y2hlZCBjaGFyYWN0ZXJzLlxuICAvLyBUaGVzZSBjYW4gY29uc2VxdWVudGx5IGJlIHVzZWQgZm9yIGhpZ2hsaWdodGluZyBwdXJwb3Nlcy5cbiAgaW5jbHVkZU1hdGNoZXM6IGZhbHNlLFxuICAvLyBXaGVuIGB0cnVlYCwgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIHdpbGwgY29udGludWUgdG8gdGhlIGVuZCBvZiBhIHNlYXJjaCBwYXR0ZXJuIGV2ZW4gaWZcbiAgLy8gYSBwZXJmZWN0IG1hdGNoIGhhcyBhbHJlYWR5IGJlZW4gbG9jYXRlZCBpbiB0aGUgc3RyaW5nLlxuICBmaW5kQWxsTWF0Y2hlczogZmFsc2UsXG4gIC8vIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBtdXN0IGJlIG1hdGNoZWQgYmVmb3JlIGEgcmVzdWx0IGlzIGNvbnNpZGVyZWQgYSBtYXRjaFxuICBtaW5NYXRjaENoYXJMZW5ndGg6IDFcbn07XG5cbmNvbnN0IEJhc2ljT3B0aW9ucyA9IHtcbiAgLy8gV2hlbiBgdHJ1ZWAsIHRoZSBhbGdvcml0aG0gY29udGludWVzIHNlYXJjaGluZyB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dCBldmVuIGlmIGEgcGVyZmVjdFxuICAvLyBtYXRjaCBpcyBmb3VuZCBiZWZvcmUgdGhlIGVuZCBvZiB0aGUgc2FtZSBpbnB1dC5cbiAgaXNDYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgLy8gV2hlbiB0cnVlLCB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gd2lsbCBjb250aW51ZSB0byB0aGUgZW5kIG9mIGEgc2VhcmNoIHBhdHRlcm4gZXZlbiBpZlxuICBpbmNsdWRlU2NvcmU6IGZhbHNlLFxuICAvLyBMaXN0IG9mIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkLiBUaGlzIGFsc28gc3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMuXG4gIGtleXM6IFtdLFxuICAvLyBXaGV0aGVyIHRvIHNvcnQgdGhlIHJlc3VsdCBsaXN0LCBieSBzY29yZVxuICBzaG91bGRTb3J0OiB0cnVlLFxuICAvLyBEZWZhdWx0IHNvcnQgZnVuY3Rpb246IHNvcnQgYnkgYXNjZW5kaW5nIHNjb3JlLCBhc2NlbmRpbmcgaW5kZXhcbiAgc29ydEZuOiAoYSwgYikgPT5cbiAgICBhLnNjb3JlID09PSBiLnNjb3JlID8gKGEuaWR4IDwgYi5pZHggPyAtMSA6IDEpIDogYS5zY29yZSA8IGIuc2NvcmUgPyAtMSA6IDFcbn07XG5cbmNvbnN0IEZ1enp5T3B0aW9ucyA9IHtcbiAgLy8gQXBwcm94aW1hdGVseSB3aGVyZSBpbiB0aGUgdGV4dCBpcyB0aGUgcGF0dGVybiBleHBlY3RlZCB0byBiZSBmb3VuZD9cbiAgbG9jYXRpb246IDAsXG4gIC8vIEF0IHdoYXQgcG9pbnQgZG9lcyB0aGUgbWF0Y2ggYWxnb3JpdGhtIGdpdmUgdXAuIEEgdGhyZXNob2xkIG9mICcwLjAnIHJlcXVpcmVzIGEgcGVyZmVjdCBtYXRjaFxuICAvLyAob2YgYm90aCBsZXR0ZXJzIGFuZCBsb2NhdGlvbiksIGEgdGhyZXNob2xkIG9mICcxLjAnIHdvdWxkIG1hdGNoIGFueXRoaW5nLlxuICB0aHJlc2hvbGQ6IDAuNixcbiAgLy8gRGV0ZXJtaW5lcyBob3cgY2xvc2UgdGhlIG1hdGNoIG11c3QgYmUgdG8gdGhlIGZ1enp5IGxvY2F0aW9uIChzcGVjaWZpZWQgYWJvdmUpLlxuICAvLyBBbiBleGFjdCBsZXR0ZXIgbWF0Y2ggd2hpY2ggaXMgJ2Rpc3RhbmNlJyBjaGFyYWN0ZXJzIGF3YXkgZnJvbSB0aGUgZnV6enkgbG9jYXRpb25cbiAgLy8gd291bGQgc2NvcmUgYXMgYSBjb21wbGV0ZSBtaXNtYXRjaC4gQSBkaXN0YW5jZSBvZiAnMCcgcmVxdWlyZXMgdGhlIG1hdGNoIGJlIGF0XG4gIC8vIHRoZSBleGFjdCBsb2NhdGlvbiBzcGVjaWZpZWQsIGEgdGhyZXNob2xkIG9mICcxMDAwJyB3b3VsZCByZXF1aXJlIGEgcGVyZmVjdCBtYXRjaFxuICAvLyB0byBiZSB3aXRoaW4gODAwIGNoYXJhY3RlcnMgb2YgdGhlIGZ1enp5IGxvY2F0aW9uIHRvIGJlIGZvdW5kIHVzaW5nIGEgMC44IHRocmVzaG9sZC5cbiAgZGlzdGFuY2U6IDEwMFxufTtcblxuY29uc3QgQWR2YW5jZWRPcHRpb25zID0ge1xuICAvLyBXaGVuIGB0cnVlYCwgaXQgZW5hYmxlcyB0aGUgdXNlIG9mIHVuaXgtbGlrZSBzZWFyY2ggY29tbWFuZHNcbiAgdXNlRXh0ZW5kZWRTZWFyY2g6IGZhbHNlLFxuICAvLyBUaGUgZ2V0IGZ1bmN0aW9uIHRvIHVzZSB3aGVuIGZldGNoaW5nIGFuIG9iamVjdCdzIHByb3BlcnRpZXMuXG4gIC8vIFRoZSBkZWZhdWx0IHdpbGwgc2VhcmNoIG5lc3RlZCBwYXRocyAqaWUgZm9vLmJhci5iYXoqXG4gIGdldEZuOiBnZXQsXG4gIC8vIFdoZW4gYHRydWVgLCBzZWFyY2ggd2lsbCBpZ25vcmUgYGxvY2F0aW9uYCBhbmQgYGRpc3RhbmNlYCwgc28gaXQgd29uJ3QgbWF0dGVyXG4gIC8vIHdoZXJlIGluIHRoZSBzdHJpbmcgdGhlIHBhdHRlcm4gYXBwZWFycy5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2Z1enppbmVzcy1zY29yZVxuICBpZ25vcmVMb2NhdGlvbjogZmFsc2UsXG4gIC8vIFdoZW4gYHRydWVgLCB0aGUgY2FsY3VsYXRpb24gZm9yIHRoZSByZWxldmFuY2Ugc2NvcmUgKHVzZWQgZm9yIHNvcnRpbmcpIHdpbGxcbiAgLy8gaWdub3JlIHRoZSBmaWVsZC1sZW5ndGggbm9ybS5cbiAgLy8gTW9yZSBpbmZvOiBodHRwczovL2Z1c2Vqcy5pby9jb25jZXB0cy9zY29yaW5nLXRoZW9yeS5odG1sI2ZpZWxkLWxlbmd0aC1ub3JtXG4gIGlnbm9yZUZpZWxkTm9ybTogZmFsc2UsXG4gIC8vIFRoZSB3ZWlnaHQgdG8gZGV0ZXJtaW5lIGhvdyBtdWNoIGZpZWxkIGxlbmd0aCBub3JtIGVmZmVjdHMgc2NvcmluZy5cbiAgZmllbGROb3JtV2VpZ2h0OiAxXG59O1xuXG52YXIgQ29uZmlnID0ge1xuICAuLi5CYXNpY09wdGlvbnMsXG4gIC4uLk1hdGNoT3B0aW9ucyxcbiAgLi4uRnV6enlPcHRpb25zLFxuICAuLi5BZHZhbmNlZE9wdGlvbnNcbn07XG5cbmNvbnN0IFNQQUNFID0gL1teIF0rL2c7XG5cbi8vIEZpZWxkLWxlbmd0aCBub3JtOiB0aGUgc2hvcnRlciB0aGUgZmllbGQsIHRoZSBoaWdoZXIgdGhlIHdlaWdodC5cbi8vIFNldCB0byAzIGRlY2ltYWxzIHRvIHJlZHVjZSBpbmRleCBzaXplLlxuZnVuY3Rpb24gbm9ybSh3ZWlnaHQgPSAxLCBtYW50aXNzYSA9IDMpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IG0gPSBNYXRoLnBvdygxMCwgbWFudGlzc2EpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBudW1Ub2tlbnMgPSB2YWx1ZS5tYXRjaChTUEFDRSkubGVuZ3RoO1xuXG4gICAgICBpZiAoY2FjaGUuaGFzKG51bVRva2VucykpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmdldChudW1Ub2tlbnMpXG4gICAgICB9XG5cbiAgICAgIC8vIERlZmF1bHQgZnVuY3Rpb24gaXMgMS9zcXJ0KHgpLCB3ZWlnaHQgbWFrZXMgdGhhdCB2YXJpYWJsZVxuICAgICAgY29uc3Qgbm9ybSA9IDEgLyBNYXRoLnBvdyhudW1Ub2tlbnMsIDAuNSAqIHdlaWdodCk7XG5cbiAgICAgIC8vIEluIHBsYWNlIG9mIGB0b0ZpeGVkKG1hbnRpc3NhKWAsIGZvciBmYXN0ZXIgY29tcHV0YXRpb25cbiAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KE1hdGgucm91bmQobm9ybSAqIG0pIC8gbSk7XG5cbiAgICAgIGNhY2hlLnNldChudW1Ub2tlbnMsIG4pO1xuXG4gICAgICByZXR1cm4gblxuICAgIH0sXG4gICAgY2xlYXIoKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXNlSW5kZXgge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sXG4gICAgZmllbGROb3JtV2VpZ2h0ID0gQ29uZmlnLmZpZWxkTm9ybVdlaWdodFxuICB9ID0ge30pIHtcbiAgICB0aGlzLm5vcm0gPSBub3JtKGZpZWxkTm9ybVdlaWdodCwgMyk7XG4gICAgdGhpcy5nZXRGbiA9IGdldEZuO1xuICAgIHRoaXMuaXNDcmVhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldEluZGV4UmVjb3JkcygpO1xuICB9XG4gIHNldFNvdXJjZXMoZG9jcyA9IFtdKSB7XG4gICAgdGhpcy5kb2NzID0gZG9jcztcbiAgfVxuICBzZXRJbmRleFJlY29yZHMocmVjb3JkcyA9IFtdKSB7XG4gICAgdGhpcy5yZWNvcmRzID0gcmVjb3JkcztcbiAgfVxuICBzZXRLZXlzKGtleXMgPSBbXSkge1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5fa2V5c01hcCA9IHt9O1xuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpZHgpID0+IHtcbiAgICAgIHRoaXMuX2tleXNNYXBba2V5LmlkXSA9IGlkeDtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGUoKSB7XG4gICAgaWYgKHRoaXMuaXNDcmVhdGVkIHx8ICF0aGlzLmRvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlzQ3JlYXRlZCA9IHRydWU7XG5cbiAgICAvLyBMaXN0IGlzIEFycmF5PFN0cmluZz5cbiAgICBpZiAoaXNTdHJpbmcodGhpcy5kb2NzWzBdKSkge1xuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3QgaXMgQXJyYXk8T2JqZWN0PlxuICAgICAgdGhpcy5kb2NzLmZvckVhY2goKGRvYywgZG9jSW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgZG9jSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5ub3JtLmNsZWFyKCk7XG4gIH1cbiAgLy8gQWRkcyBhIGRvYyB0byB0aGUgZW5kIG9mIHRoZSBpbmRleFxuICBhZGQoZG9jKSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5zaXplKCk7XG5cbiAgICBpZiAoaXNTdHJpbmcoZG9jKSkge1xuICAgICAgdGhpcy5fYWRkU3RyaW5nKGRvYywgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWRkT2JqZWN0KGRvYywgaWR4KTtcbiAgICB9XG4gIH1cbiAgLy8gUmVtb3ZlcyB0aGUgZG9jIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggb2YgdGhlIGluZGV4XG4gIHJlbW92ZUF0KGlkeCkge1xuICAgIHRoaXMucmVjb3Jkcy5zcGxpY2UoaWR4LCAxKTtcblxuICAgIC8vIENoYW5nZSByZWYgaW5kZXggb2YgZXZlcnkgc3Vic3F1ZW50IGRvY1xuICAgIGZvciAobGV0IGkgPSBpZHgsIGxlbiA9IHRoaXMuc2l6ZSgpOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIHRoaXMucmVjb3Jkc1tpXS5pIC09IDE7XG4gICAgfVxuICB9XG4gIGdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpIHtcbiAgICByZXR1cm4gaXRlbVt0aGlzLl9rZXlzTWFwW2tleUlkXV1cbiAgfVxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLnJlY29yZHMubGVuZ3RoXG4gIH1cbiAgX2FkZFN0cmluZyhkb2MsIGRvY0luZGV4KSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSB8fCBpc0JsYW5rKGRvYykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCByZWNvcmQgPSB7XG4gICAgICB2OiBkb2MsXG4gICAgICBpOiBkb2NJbmRleCxcbiAgICAgIG46IHRoaXMubm9ybS5nZXQoZG9jKVxuICAgIH07XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIF9hZGRPYmplY3QoZG9jLCBkb2NJbmRleCkge1xuICAgIGxldCByZWNvcmQgPSB7IGk6IGRvY0luZGV4LCAkOiB7fSB9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgIHRoaXMua2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhrZXkpXG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEZuKGRvYywga2V5LnBhdGgpO1xuXG4gICAgICBpZiAoIWlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBsZXQgc3ViUmVjb3JkcyA9IFtdO1xuICAgICAgICBjb25zdCBzdGFjayA9IFt7IG5lc3RlZEFyckluZGV4OiAtMSwgdmFsdWUgfV07XG5cbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IHsgbmVzdGVkQXJySW5kZXgsIHZhbHVlIH0gPSBzdGFjay5wb3AoKTtcblxuICAgICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0JsYW5rKHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IHN1YlJlY29yZCA9IHtcbiAgICAgICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgICAgIGk6IG5lc3RlZEFyckluZGV4LFxuICAgICAgICAgICAgICBuOiB0aGlzLm5vcm0uZ2V0KHZhbHVlKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3ViUmVjb3Jkcy5wdXNoKHN1YlJlY29yZCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaykgPT4ge1xuICAgICAgICAgICAgICBzdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgICBuZXN0ZWRBcnJJbmRleDogayxcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSA7XG4gICAgICAgIH1cbiAgICAgICAgcmVjb3JkLiRba2V5SW5kZXhdID0gc3ViUmVjb3JkcztcbiAgICAgIH0gZWxzZSBpZiAoIWlzQmxhbmsodmFsdWUpKSB7XG4gICAgICAgIGxldCBzdWJSZWNvcmQgPSB7XG4gICAgICAgICAgdjogdmFsdWUsXG4gICAgICAgICAgbjogdGhpcy5ub3JtLmdldCh2YWx1ZSlcbiAgICAgICAgfTtcblxuICAgICAgICByZWNvcmQuJFtrZXlJbmRleF0gPSBzdWJSZWNvcmQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnJlY29yZHMucHVzaChyZWNvcmQpO1xuICB9XG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5czogdGhpcy5rZXlzLFxuICAgICAgcmVjb3JkczogdGhpcy5yZWNvcmRzXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZGV4KFxuICBrZXlzLFxuICBkb2NzLFxuICB7IGdldEZuID0gQ29uZmlnLmdldEZuLCBmaWVsZE5vcm1XZWlnaHQgPSBDb25maWcuZmllbGROb3JtV2VpZ2h0IH0gPSB7fVxuKSB7XG4gIGNvbnN0IG15SW5kZXggPSBuZXcgRnVzZUluZGV4KHsgZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCB9KTtcbiAgbXlJbmRleC5zZXRLZXlzKGtleXMubWFwKGNyZWF0ZUtleSkpO1xuICBteUluZGV4LnNldFNvdXJjZXMoZG9jcyk7XG4gIG15SW5kZXguY3JlYXRlKCk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIHBhcnNlSW5kZXgoXG4gIGRhdGEsXG4gIHsgZ2V0Rm4gPSBDb25maWcuZ2V0Rm4sIGZpZWxkTm9ybVdlaWdodCA9IENvbmZpZy5maWVsZE5vcm1XZWlnaHQgfSA9IHt9XG4pIHtcbiAgY29uc3QgeyBrZXlzLCByZWNvcmRzIH0gPSBkYXRhO1xuICBjb25zdCBteUluZGV4ID0gbmV3IEZ1c2VJbmRleCh7IGdldEZuLCBmaWVsZE5vcm1XZWlnaHQgfSk7XG4gIG15SW5kZXguc2V0S2V5cyhrZXlzKTtcbiAgbXlJbmRleC5zZXRJbmRleFJlY29yZHMocmVjb3Jkcyk7XG4gIHJldHVybiBteUluZGV4XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZSQxKFxuICBwYXR0ZXJuLFxuICB7XG4gICAgZXJyb3JzID0gMCxcbiAgICBjdXJyZW50TG9jYXRpb24gPSAwLFxuICAgIGV4cGVjdGVkTG9jYXRpb24gPSAwLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gIH0gPSB7fVxuKSB7XG4gIGNvbnN0IGFjY3VyYWN5ID0gZXJyb3JzIC8gcGF0dGVybi5sZW5ndGg7XG5cbiAgaWYgKGlnbm9yZUxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGFjY3VyYWN5XG4gIH1cblxuICBjb25zdCBwcm94aW1pdHkgPSBNYXRoLmFicyhleHBlY3RlZExvY2F0aW9uIC0gY3VycmVudExvY2F0aW9uKTtcblxuICBpZiAoIWRpc3RhbmNlKSB7XG4gICAgLy8gRG9kZ2UgZGl2aWRlIGJ5IHplcm8gZXJyb3IuXG4gICAgcmV0dXJuIHByb3hpbWl0eSA/IDEuMCA6IGFjY3VyYWN5XG4gIH1cblxuICByZXR1cm4gYWNjdXJhY3kgKyBwcm94aW1pdHkgLyBkaXN0YW5jZVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0TWFza1RvSW5kaWNlcyhcbiAgbWF0Y2htYXNrID0gW10sXG4gIG1pbk1hdGNoQ2hhckxlbmd0aCA9IENvbmZpZy5taW5NYXRjaENoYXJMZW5ndGhcbikge1xuICBsZXQgaW5kaWNlcyA9IFtdO1xuICBsZXQgc3RhcnQgPSAtMTtcbiAgbGV0IGVuZCA9IC0xO1xuICBsZXQgaSA9IDA7XG5cbiAgZm9yIChsZXQgbGVuID0gbWF0Y2htYXNrLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2htYXNrW2ldO1xuICAgIGlmIChtYXRjaCAmJiBzdGFydCA9PT0gLTEpIHtcbiAgICAgIHN0YXJ0ID0gaTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCAmJiBzdGFydCAhPT0gLTEpIHtcbiAgICAgIGVuZCA9IGkgLSAxO1xuICAgICAgaWYgKGVuZCAtIHN0YXJ0ICsgMSA+PSBtaW5NYXRjaENoYXJMZW5ndGgpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgZW5kXSk7XG4gICAgICB9XG4gICAgICBzdGFydCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIC8vIChpLTEgLSBzdGFydCkgKyAxID0+IGkgLSBzdGFydFxuICBpZiAobWF0Y2htYXNrW2kgLSAxXSAmJiBpIC0gc3RhcnQgPj0gbWluTWF0Y2hDaGFyTGVuZ3RoKSB7XG4gICAgaW5kaWNlcy5wdXNoKFtzdGFydCwgaSAtIDFdKTtcbiAgfVxuXG4gIHJldHVybiBpbmRpY2VzXG59XG5cbi8vIE1hY2hpbmUgd29yZCBzaXplXG5jb25zdCBNQVhfQklUUyA9IDMyO1xuXG5mdW5jdGlvbiBzZWFyY2goXG4gIHRleHQsXG4gIHBhdHRlcm4sXG4gIHBhdHRlcm5BbHBoYWJldCxcbiAge1xuICAgIGxvY2F0aW9uID0gQ29uZmlnLmxvY2F0aW9uLFxuICAgIGRpc3RhbmNlID0gQ29uZmlnLmRpc3RhbmNlLFxuICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICBpbmNsdWRlTWF0Y2hlcyA9IENvbmZpZy5pbmNsdWRlTWF0Y2hlcyxcbiAgICBpZ25vcmVMb2NhdGlvbiA9IENvbmZpZy5pZ25vcmVMb2NhdGlvblxuICB9ID0ge31cbikge1xuICBpZiAocGF0dGVybi5sZW5ndGggPiBNQVhfQklUUykge1xuICAgIHRocm93IG5ldyBFcnJvcihQQVRURVJOX0xFTkdUSF9UT09fTEFSR0UoTUFYX0JJVFMpKVxuICB9XG5cbiAgY29uc3QgcGF0dGVybkxlbiA9IHBhdHRlcm4ubGVuZ3RoO1xuICAvLyBTZXQgc3RhcnRpbmcgbG9jYXRpb24gYXQgYmVnaW5uaW5nIHRleHQgYW5kIGluaXRpYWxpemUgdGhlIGFscGhhYmV0LlxuICBjb25zdCB0ZXh0TGVuID0gdGV4dC5sZW5ndGg7XG4gIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVuIGxvY2F0aW9uID4gdGV4dC5sZW5ndGhcbiAgY29uc3QgZXhwZWN0ZWRMb2NhdGlvbiA9IE1hdGgubWF4KDAsIE1hdGgubWluKGxvY2F0aW9uLCB0ZXh0TGVuKSk7XG4gIC8vIEhpZ2hlc3Qgc2NvcmUgYmV5b25kIHdoaWNoIHdlIGdpdmUgdXAuXG4gIGxldCBjdXJyZW50VGhyZXNob2xkID0gdGhyZXNob2xkO1xuICAvLyBJcyB0aGVyZSBhIG5lYXJieSBleGFjdCBtYXRjaD8gKHNwZWVkdXApXG4gIGxldCBiZXN0TG9jYXRpb24gPSBleHBlY3RlZExvY2F0aW9uO1xuXG4gIC8vIFBlcmZvcm1hbmNlOiBvbmx5IGNvbXB1dGVyIG1hdGNoZXMgd2hlbiB0aGUgbWluTWF0Y2hDaGFyTGVuZ3RoID4gMVxuICAvLyBPUiBpZiBgaW5jbHVkZU1hdGNoZXNgIGlzIHRydWUuXG4gIGNvbnN0IGNvbXB1dGVNYXRjaGVzID0gbWluTWF0Y2hDaGFyTGVuZ3RoID4gMSB8fCBpbmNsdWRlTWF0Y2hlcztcbiAgLy8gQSBtYXNrIG9mIHRoZSBtYXRjaGVzLCB1c2VkIGZvciBidWlsZGluZyB0aGUgaW5kaWNlc1xuICBjb25zdCBtYXRjaE1hc2sgPSBjb21wdXRlTWF0Y2hlcyA/IEFycmF5KHRleHRMZW4pIDogW107XG5cbiAgbGV0IGluZGV4O1xuXG4gIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlcywgaGVyZSBmb3Igc3BlZWQgdXBcbiAgd2hpbGUgKChpbmRleCA9IHRleHQuaW5kZXhPZihwYXR0ZXJuLCBiZXN0TG9jYXRpb24pKSA+IC0xKSB7XG4gICAgbGV0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgY3VycmVudExvY2F0aW9uOiBpbmRleCxcbiAgICAgIGV4cGVjdGVkTG9jYXRpb24sXG4gICAgICBkaXN0YW5jZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgfSk7XG5cbiAgICBjdXJyZW50VGhyZXNob2xkID0gTWF0aC5taW4oc2NvcmUsIGN1cnJlbnRUaHJlc2hvbGQpO1xuICAgIGJlc3RMb2NhdGlvbiA9IGluZGV4ICsgcGF0dGVybkxlbjtcblxuICAgIGlmIChjb21wdXRlTWF0Y2hlcykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBwYXR0ZXJuTGVuKSB7XG4gICAgICAgIG1hdGNoTWFza1tpbmRleCArIGldID0gMTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlc2V0IHRoZSBiZXN0IGxvY2F0aW9uXG4gIGJlc3RMb2NhdGlvbiA9IC0xO1xuXG4gIGxldCBsYXN0Qml0QXJyID0gW107XG4gIGxldCBmaW5hbFNjb3JlID0gMTtcbiAgbGV0IGJpbk1heCA9IHBhdHRlcm5MZW4gKyB0ZXh0TGVuO1xuXG4gIGNvbnN0IG1hc2sgPSAxIDw8IChwYXR0ZXJuTGVuIC0gMSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXR0ZXJuTGVuOyBpICs9IDEpIHtcbiAgICAvLyBTY2FuIGZvciB0aGUgYmVzdCBtYXRjaDsgZWFjaCBpdGVyYXRpb24gYWxsb3dzIGZvciBvbmUgbW9yZSBlcnJvci5cbiAgICAvLyBSdW4gYSBiaW5hcnkgc2VhcmNoIHRvIGRldGVybWluZSBob3cgZmFyIGZyb20gdGhlIG1hdGNoIGxvY2F0aW9uIHdlIGNhbiBzdHJheVxuICAgIC8vIGF0IHRoaXMgZXJyb3IgbGV2ZWwuXG4gICAgbGV0IGJpbk1pbiA9IDA7XG4gICAgbGV0IGJpbk1pZCA9IGJpbk1heDtcblxuICAgIHdoaWxlIChiaW5NaW4gPCBiaW5NaWQpIHtcbiAgICAgIGNvbnN0IHNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICBlcnJvcnM6IGksXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogZXhwZWN0ZWRMb2NhdGlvbiArIGJpbk1pZCxcbiAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKHNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgYmluTWluID0gYmluTWlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmluTWF4ID0gYmluTWlkO1xuICAgICAgfVxuXG4gICAgICBiaW5NaWQgPSBNYXRoLmZsb29yKChiaW5NYXggLSBiaW5NaW4pIC8gMiArIGJpbk1pbik7XG4gICAgfVxuXG4gICAgLy8gVXNlIHRoZSByZXN1bHQgZnJvbSB0aGlzIGl0ZXJhdGlvbiBhcyB0aGUgbWF4aW11bSBmb3IgdGhlIG5leHQuXG4gICAgYmluTWF4ID0gYmluTWlkO1xuXG4gICAgbGV0IHN0YXJ0ID0gTWF0aC5tYXgoMSwgZXhwZWN0ZWRMb2NhdGlvbiAtIGJpbk1pZCArIDEpO1xuICAgIGxldCBmaW5pc2ggPSBmaW5kQWxsTWF0Y2hlc1xuICAgICAgPyB0ZXh0TGVuXG4gICAgICA6IE1hdGgubWluKGV4cGVjdGVkTG9jYXRpb24gKyBiaW5NaWQsIHRleHRMZW4pICsgcGF0dGVybkxlbjtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIGJpdCBhcnJheVxuICAgIGxldCBiaXRBcnIgPSBBcnJheShmaW5pc2ggKyAyKTtcblxuICAgIGJpdEFycltmaW5pc2ggKyAxXSA9ICgxIDw8IGkpIC0gMTtcblxuICAgIGZvciAobGV0IGogPSBmaW5pc2g7IGogPj0gc3RhcnQ7IGogLT0gMSkge1xuICAgICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IGogLSAxO1xuICAgICAgbGV0IGNoYXJNYXRjaCA9IHBhdHRlcm5BbHBoYWJldFt0ZXh0LmNoYXJBdChjdXJyZW50TG9jYXRpb24pXTtcblxuICAgICAgaWYgKGNvbXB1dGVNYXRjaGVzKSB7XG4gICAgICAgIC8vIFNwZWVkIHVwOiBxdWljayBib29sIHRvIGludCBjb252ZXJzaW9uIChpLmUsIGBjaGFyTWF0Y2ggPyAxIDogMGApXG4gICAgICAgIG1hdGNoTWFza1tjdXJyZW50TG9jYXRpb25dID0gKyEhY2hhck1hdGNoO1xuICAgICAgfVxuXG4gICAgICAvLyBGaXJzdCBwYXNzOiBleGFjdCBtYXRjaFxuICAgICAgYml0QXJyW2pdID0gKChiaXRBcnJbaiArIDFdIDw8IDEpIHwgMSkgJiBjaGFyTWF0Y2g7XG5cbiAgICAgIC8vIFN1YnNlcXVlbnQgcGFzc2VzOiBmdXp6eSBtYXRjaFxuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYml0QXJyW2pdIHw9XG4gICAgICAgICAgKChsYXN0Qml0QXJyW2ogKyAxXSB8IGxhc3RCaXRBcnJbal0pIDw8IDEpIHwgMSB8IGxhc3RCaXRBcnJbaiArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoYml0QXJyW2pdICYgbWFzaykge1xuICAgICAgICBmaW5hbFNjb3JlID0gY29tcHV0ZVNjb3JlJDEocGF0dGVybiwge1xuICAgICAgICAgIGVycm9yczogaSxcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgICAgICBkaXN0YW5jZSxcbiAgICAgICAgICBpZ25vcmVMb2NhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGlzIG1hdGNoIHdpbGwgYWxtb3N0IGNlcnRhaW5seSBiZSBiZXR0ZXIgdGhhbiBhbnkgZXhpc3RpbmcgbWF0Y2guXG4gICAgICAgIC8vIEJ1dCBjaGVjayBhbnl3YXkuXG4gICAgICAgIGlmIChmaW5hbFNjb3JlIDw9IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAvLyBJbmRlZWQgaXQgaXNcbiAgICAgICAgICBjdXJyZW50VGhyZXNob2xkID0gZmluYWxTY29yZTtcbiAgICAgICAgICBiZXN0TG9jYXRpb24gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBBbHJlYWR5IHBhc3NlZCBgbG9jYCwgZG93bmhpbGwgZnJvbSBoZXJlIG9uIGluLlxuICAgICAgICAgIGlmIChiZXN0TG9jYXRpb24gPD0gZXhwZWN0ZWRMb2NhdGlvbikge1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBXaGVuIHBhc3NpbmcgYGJlc3RMb2NhdGlvbmAsIGRvbid0IGV4Y2VlZCBvdXIgY3VycmVudCBkaXN0YW5jZSBmcm9tIGBleHBlY3RlZExvY2F0aW9uYC5cbiAgICAgICAgICBzdGFydCA9IE1hdGgubWF4KDEsIDIgKiBleHBlY3RlZExvY2F0aW9uIC0gYmVzdExvY2F0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGhvcGUgZm9yIGEgKGJldHRlcikgbWF0Y2ggYXQgZ3JlYXRlciBlcnJvciBsZXZlbHMuXG4gICAgY29uc3Qgc2NvcmUgPSBjb21wdXRlU2NvcmUkMShwYXR0ZXJuLCB7XG4gICAgICBlcnJvcnM6IGkgKyAxLFxuICAgICAgY3VycmVudExvY2F0aW9uOiBleHBlY3RlZExvY2F0aW9uLFxuICAgICAgZXhwZWN0ZWRMb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcblxuICAgIGlmIChzY29yZSA+IGN1cnJlbnRUaHJlc2hvbGQpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgbGFzdEJpdEFyciA9IGJpdEFycjtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBpc01hdGNoOiBiZXN0TG9jYXRpb24gPj0gMCxcbiAgICAvLyBDb3VudCBleGFjdCBtYXRjaGVzICh0aG9zZSB3aXRoIGEgc2NvcmUgb2YgMCkgdG8gYmUgXCJhbG1vc3RcIiBleGFjdFxuICAgIHNjb3JlOiBNYXRoLm1heCgwLjAwMSwgZmluYWxTY29yZSlcbiAgfTtcblxuICBpZiAoY29tcHV0ZU1hdGNoZXMpIHtcbiAgICBjb25zdCBpbmRpY2VzID0gY29udmVydE1hc2tUb0luZGljZXMobWF0Y2hNYXNrLCBtaW5NYXRjaENoYXJMZW5ndGgpO1xuICAgIGlmICghaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBpbmRpY2VzO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pIHtcbiAgbGV0IG1hc2sgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGF0dGVybi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIGNvbnN0IGNoYXIgPSBwYXR0ZXJuLmNoYXJBdChpKTtcbiAgICBtYXNrW2NoYXJdID0gKG1hc2tbY2hhcl0gfHwgMCkgfCAoMSA8PCAobGVuIC0gaSAtIDEpKTtcbiAgfVxuXG4gIHJldHVybiBtYXNrXG59XG5cbmNsYXNzIEJpdGFwU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9O1xuXG4gICAgdGhpcy5wYXR0ZXJuID0gaXNDYXNlU2Vuc2l0aXZlID8gcGF0dGVybiA6IHBhdHRlcm4udG9Mb3dlckNhc2UoKTtcblxuICAgIHRoaXMuY2h1bmtzID0gW107XG5cbiAgICBpZiAoIXRoaXMucGF0dGVybi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGFkZENodW5rID0gKHBhdHRlcm4sIHN0YXJ0SW5kZXgpID0+IHtcbiAgICAgIHRoaXMuY2h1bmtzLnB1c2goe1xuICAgICAgICBwYXR0ZXJuLFxuICAgICAgICBhbHBoYWJldDogY3JlYXRlUGF0dGVybkFscGhhYmV0KHBhdHRlcm4pLFxuICAgICAgICBzdGFydEluZGV4XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgbGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPiBNQVhfQklUUykge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgcmVtYWluZGVyID0gbGVuICUgTUFYX0JJVFM7XG4gICAgICBjb25zdCBlbmQgPSBsZW4gLSByZW1haW5kZXI7XG5cbiAgICAgIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoaSwgTUFYX0JJVFMpLCBpKTtcbiAgICAgICAgaSArPSBNQVhfQklUUztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gbGVuIC0gTUFYX0JJVFM7XG4gICAgICAgIGFkZENodW5rKHRoaXMucGF0dGVybi5zdWJzdHIoc3RhcnRJbmRleCksIHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDaHVuayh0aGlzLnBhdHRlcm4sIDApO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCB7IGlzQ2FzZVNlbnNpdGl2ZSwgaW5jbHVkZU1hdGNoZXMgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGlmICghaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEV4YWN0IG1hdGNoXG4gICAgaWYgKHRoaXMucGF0dGVybiA9PT0gdGV4dCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgaXNNYXRjaDogdHJ1ZSxcbiAgICAgICAgc2NvcmU6IDBcbiAgICAgIH07XG5cbiAgICAgIGlmIChpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgICByZXN1bHQuaW5kaWNlcyA9IFtbMCwgdGV4dC5sZW5ndGggLSAxXV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHVzZSBCaXRhcCBhbGdvcml0aG1cbiAgICBjb25zdCB7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGRpc3RhbmNlLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGgsXG4gICAgICBpZ25vcmVMb2NhdGlvblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICBsZXQgYWxsSW5kaWNlcyA9IFtdO1xuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBsZXQgaGFzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5jaHVua3MuZm9yRWFjaCgoeyBwYXR0ZXJuLCBhbHBoYWJldCwgc3RhcnRJbmRleCB9KSA9PiB7XG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2godGV4dCwgcGF0dGVybiwgYWxwaGFiZXQsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uICsgc3RhcnRJbmRleCxcbiAgICAgICAgZGlzdGFuY2UsXG4gICAgICAgIHRocmVzaG9sZCxcbiAgICAgICAgZmluZEFsbE1hdGNoZXMsXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICAgIGlnbm9yZUxvY2F0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgaGFzTWF0Y2hlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRvdGFsU2NvcmUgKz0gc2NvcmU7XG5cbiAgICAgIGlmIChpc01hdGNoICYmIGluZGljZXMpIHtcbiAgICAgICAgYWxsSW5kaWNlcyA9IFsuLi5hbGxJbmRpY2VzLCAuLi5pbmRpY2VzXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCByZXN1bHQgPSB7XG4gICAgICBpc01hdGNoOiBoYXNNYXRjaGVzLFxuICAgICAgc2NvcmU6IGhhc01hdGNoZXMgPyB0b3RhbFNjb3JlIC8gdGhpcy5jaHVua3MubGVuZ3RoIDogMVxuICAgIH07XG5cbiAgICBpZiAoaGFzTWF0Y2hlcyAmJiBpbmNsdWRlTWF0Y2hlcykge1xuICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5jbGFzcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgfVxuICBzdGF0aWMgaXNNdWx0aU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5tdWx0aVJlZ2V4KVxuICB9XG4gIHN0YXRpYyBpc1NpbmdsZU1hdGNoKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2V0TWF0Y2gocGF0dGVybiwgdGhpcy5zaW5nbGVSZWdleClcbiAgfVxuICBzZWFyY2goLyp0ZXh0Ki8pIHt9XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoKHBhdHRlcm4sIGV4cCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0dGVybi5tYXRjaChleHApO1xuICByZXR1cm4gbWF0Y2hlcyA/IG1hdGNoZXNbMV0gOiBudWxsXG59XG5cbi8vIFRva2VuOiAnZmlsZVxuXG5jbGFzcyBFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2V4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL149XCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9ePSguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQgPT09IHRoaXMucGF0dGVybjtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0aGlzLnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICFmaXJlXG5cbmNsYXNzIEludmVyc2VFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRleHQuaW5kZXhPZih0aGlzLnBhdHRlcm4pO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBpbmRleCA9PT0gLTE7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogXmZpbGVcblxuY2xhc3MgUHJlZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwcmVmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXlwiKC4qKVwiJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuc3RhcnRzV2l0aCh0aGlzLnBhdHRlcm4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTWF0Y2gsXG4gICAgICBzY29yZTogaXNNYXRjaCA/IDAgOiAxLFxuICAgICAgaW5kaWNlczogWzAsIHRoaXMucGF0dGVybi5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG4vLyBUb2tlbjogIV5maXJlXG5cbmNsYXNzIEludmVyc2VQcmVmaXhFeGFjdE1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2ludmVyc2UtcHJlZml4LWV4YWN0J1xuICB9XG4gIHN0YXRpYyBnZXQgbXVsdGlSZWdleCgpIHtcbiAgICByZXR1cm4gL14hXFxeXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eIVxcXiguKikkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9ICF0ZXh0LnN0YXJ0c1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFswLCB0ZXh0Lmxlbmd0aCAtIDFdXG4gICAgfVxuICB9XG59XG5cbi8vIFRva2VuOiAuZmlsZSRcblxuY2xhc3MgU3VmZml4RXhhY3RNYXRjaCBleHRlbmRzIEJhc2VNYXRjaCB7XG4gIGNvbnN0cnVjdG9yKHBhdHRlcm4pIHtcbiAgICBzdXBlcihwYXR0ZXJuKTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdzdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXlwiKC4qKVwiXFwkJC9cbiAgfVxuICBzdGF0aWMgZ2V0IHNpbmdsZVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiguKilcXCQkL1xuICB9XG4gIHNlYXJjaCh0ZXh0KSB7XG4gICAgY29uc3QgaXNNYXRjaCA9IHRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpc01hdGNoLFxuICAgICAgc2NvcmU6IGlzTWF0Y2ggPyAwIDogMSxcbiAgICAgIGluZGljZXM6IFt0ZXh0Lmxlbmd0aCAtIHRoaXMucGF0dGVybi5sZW5ndGgsIHRleHQubGVuZ3RoIC0gMV1cbiAgICB9XG4gIH1cbn1cblxuLy8gVG9rZW46ICEuZmlsZSRcblxuY2xhc3MgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2ggZXh0ZW5kcyBCYXNlTWF0Y2gge1xuICBjb25zdHJ1Y3RvcihwYXR0ZXJuKSB7XG4gICAgc3VwZXIocGF0dGVybik7XG4gIH1cbiAgc3RhdGljIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaW52ZXJzZS1zdWZmaXgtZXhhY3QnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXiFcIiguKilcIlxcJCQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14hKC4qKVxcJCQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBjb25zdCBpc01hdGNoID0gIXRleHQuZW5kc1dpdGgodGhpcy5wYXR0ZXJuKTtcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzOiBbMCwgdGV4dC5sZW5ndGggLSAxXVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBGdXp6eU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybixcbiAgICB7XG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBtaW5NYXRjaENoYXJMZW5ndGggPSBDb25maWcubWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uXG4gICAgfSA9IHt9XG4gICkge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICAgIHRoaXMuX2JpdGFwU2VhcmNoID0gbmV3IEJpdGFwU2VhcmNoKHBhdHRlcm4sIHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgdGhyZXNob2xkLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoLFxuICAgICAgaXNDYXNlU2Vuc2l0aXZlLFxuICAgICAgaWdub3JlTG9jYXRpb25cbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdmdXp6eSdcbiAgfVxuICBzdGF0aWMgZ2V0IG11bHRpUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eXCIoLiopXCIkL1xuICB9XG4gIHN0YXRpYyBnZXQgc2luZ2xlUmVnZXgoKSB7XG4gICAgcmV0dXJuIC9eKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0YXBTZWFyY2guc2VhcmNoSW4odGV4dClcbiAgfVxufVxuXG4vLyBUb2tlbjogJ2ZpbGVcblxuY2xhc3MgSW5jbHVkZU1hdGNoIGV4dGVuZHMgQmFzZU1hdGNoIHtcbiAgY29uc3RydWN0b3IocGF0dGVybikge1xuICAgIHN1cGVyKHBhdHRlcm4pO1xuICB9XG4gIHN0YXRpYyBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ2luY2x1ZGUnXG4gIH1cbiAgc3RhdGljIGdldCBtdWx0aVJlZ2V4KCkge1xuICAgIHJldHVybiAvXidcIiguKilcIiQvXG4gIH1cbiAgc3RhdGljIGdldCBzaW5nbGVSZWdleCgpIHtcbiAgICByZXR1cm4gL14nKC4qKSQvXG4gIH1cbiAgc2VhcmNoKHRleHQpIHtcbiAgICBsZXQgbG9jYXRpb24gPSAwO1xuICAgIGxldCBpbmRleDtcblxuICAgIGNvbnN0IGluZGljZXMgPSBbXTtcbiAgICBjb25zdCBwYXR0ZXJuTGVuID0gdGhpcy5wYXR0ZXJuLmxlbmd0aDtcblxuICAgIC8vIEdldCBhbGwgZXhhY3QgbWF0Y2hlc1xuICAgIHdoaWxlICgoaW5kZXggPSB0ZXh0LmluZGV4T2YodGhpcy5wYXR0ZXJuLCBsb2NhdGlvbikpID4gLTEpIHtcbiAgICAgIGxvY2F0aW9uID0gaW5kZXggKyBwYXR0ZXJuTGVuO1xuICAgICAgaW5kaWNlcy5wdXNoKFtpbmRleCwgbG9jYXRpb24gLSAxXSk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNNYXRjaCA9ICEhaW5kaWNlcy5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaCxcbiAgICAgIHNjb3JlOiBpc01hdGNoID8gMCA6IDEsXG4gICAgICBpbmRpY2VzXG4gICAgfVxuICB9XG59XG5cbi8vIOKdl09yZGVyIGlzIGltcG9ydGFudC4gRE8gTk9UIENIQU5HRS5cbmNvbnN0IHNlYXJjaGVycyA9IFtcbiAgRXhhY3RNYXRjaCxcbiAgSW5jbHVkZU1hdGNoLFxuICBQcmVmaXhFeGFjdE1hdGNoLFxuICBJbnZlcnNlUHJlZml4RXhhY3RNYXRjaCxcbiAgSW52ZXJzZVN1ZmZpeEV4YWN0TWF0Y2gsXG4gIFN1ZmZpeEV4YWN0TWF0Y2gsXG4gIEludmVyc2VFeGFjdE1hdGNoLFxuICBGdXp6eU1hdGNoXG5dO1xuXG5jb25zdCBzZWFyY2hlcnNMZW4gPSBzZWFyY2hlcnMubGVuZ3RoO1xuXG4vLyBSZWdleCB0byBzcGxpdCBieSBzcGFjZXMsIGJ1dCBrZWVwIGFueXRoaW5nIGluIHF1b3RlcyB0b2dldGhlclxuY29uc3QgU1BBQ0VfUkUgPSAvICsoPz0oW15cXFwiXSpcXFwiW15cXFwiXSpcXFwiKSpbXlxcXCJdKiQpLztcbmNvbnN0IE9SX1RPS0VOID0gJ3wnO1xuXG4vLyBSZXR1cm4gYSAyRCBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcXVlcnksIGZvciBzaW1wbGVyIHBhcnNpbmcuXG4vLyBFeGFtcGxlOlxuLy8gXCJeY29yZSBnbyQgfCByYiQgfCBweSQgeHkkXCIgPT4gW1tcIl5jb3JlXCIsIFwiZ28kXCJdLCBbXCJyYiRcIl0sIFtcInB5JFwiLCBcInh5JFwiXV1cbmZ1bmN0aW9uIHBhcnNlUXVlcnkocGF0dGVybiwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiBwYXR0ZXJuLnNwbGl0KE9SX1RPS0VOKS5tYXAoKGl0ZW0pID0+IHtcbiAgICBsZXQgcXVlcnkgPSBpdGVtXG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoU1BBQ0VfUkUpXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtICYmICEhaXRlbS50cmltKCkpO1xuXG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5SXRlbSA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyAxLiBIYW5kbGUgbXVsdGlwbGUgcXVlcnkgbWF0Y2ggKGkuZSwgb25jZSB0aGF0IGFyZSBxdW90ZWQsIGxpa2UgYFwiaGVsbG8gd29ybGRcImApXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgIHdoaWxlICghZm91bmQgJiYgKytpZHggPCBzZWFyY2hlcnNMZW4pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoZXIgPSBzZWFyY2hlcnNbaWR4XTtcbiAgICAgICAgbGV0IHRva2VuID0gc2VhcmNoZXIuaXNNdWx0aU1hdGNoKHF1ZXJ5SXRlbSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChuZXcgc2VhcmNoZXIodG9rZW4sIG9wdGlvbnMpKTtcbiAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEhhbmRsZSBzaW5nbGUgcXVlcnkgbWF0Y2hlcyAoaS5lLCBvbmNlIHRoYXQgYXJlICpub3QqIHF1b3RlZClcbiAgICAgIGlkeCA9IC0xO1xuICAgICAgd2hpbGUgKCsraWR4IDwgc2VhcmNoZXJzTGVuKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2lkeF07XG4gICAgICAgIGxldCB0b2tlbiA9IHNlYXJjaGVyLmlzU2luZ2xlTWF0Y2gocXVlcnlJdGVtKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG5ldyBzZWFyY2hlcih0b2tlbiwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9KVxufVxuXG4vLyBUaGVzZSBleHRlbmRlZCBtYXRjaGVycyBjYW4gcmV0dXJuIGFuIGFycmF5IG9mIG1hdGNoZXMsIGFzIG9wcG9zZWRcbi8vIHRvIGEgc2luZ2wgbWF0Y2hcbmNvbnN0IE11bHRpTWF0Y2hTZXQgPSBuZXcgU2V0KFtGdXp6eU1hdGNoLnR5cGUsIEluY2x1ZGVNYXRjaC50eXBlXSk7XG5cbi8qKlxuICogQ29tbWFuZC1saWtlIHNlYXJjaGluZ1xuICogPT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdpdmVuIG11bHRpcGxlIHNlYXJjaCB0ZXJtcyBkZWxpbWl0ZWQgYnkgc3BhY2VzLmUuZy4gYF5qc2NyaXB0IC5weXRob24kIHJ1YnkgIWphdmFgLFxuICogc2VhcmNoIGluIGEgZ2l2ZW4gdGV4dC5cbiAqXG4gKiBTZWFyY2ggc3ludGF4OlxuICpcbiAqIHwgVG9rZW4gICAgICAgfCBNYXRjaCB0eXBlICAgICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHxcbiAqIHwgYGpzY3JpcHRgICAgfCBmdXp6eS1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgZnV6enkgbWF0Y2ggYGpzY3JpcHRgICAgICAgIHxcbiAqIHwgYD1zY2hlbWVgICAgfCBleGFjdC1tYXRjaCAgICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgYXJlIGBzY2hlbWVgICAgICAgICAgICAgICAgIHxcbiAqIHwgYCdweXRob25gICAgfCBpbmNsdWRlLW1hdGNoICAgICAgICAgICAgICB8IEl0ZW1zIHRoYXQgaW5jbHVkZSBgcHl0aG9uYCAgICAgICAgICAgIHxcbiAqIHwgYCFydWJ5YCAgICAgfCBpbnZlcnNlLWV4YWN0LW1hdGNoICAgICAgICB8IEl0ZW1zIHRoYXQgZG8gbm90IGluY2x1ZGUgYHJ1YnlgICAgICAgIHxcbiAqIHwgYF5qYXZhYCAgICAgfCBwcmVmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgamF2YWAgICAgICAgICAgIHxcbiAqIHwgYCFeZWFybGFuZ2AgfCBpbnZlcnNlLXByZWZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IHN0YXJ0IHdpdGggYGVhcmxhbmdgIHxcbiAqIHwgYC5qcyRgICAgICAgfCBzdWZmaXgtZXhhY3QtbWF0Y2ggICAgICAgICB8IEl0ZW1zIHRoYXQgZW5kIHdpdGggYC5qc2AgICAgICAgICAgICAgIHxcbiAqIHwgYCEuZ28kYCAgICAgfCBpbnZlcnNlLXN1ZmZpeC1leGFjdC1tYXRjaCB8IEl0ZW1zIHRoYXQgZG8gbm90IGVuZCB3aXRoIGAuZ29gICAgICAgIHxcbiAqXG4gKiBBIHNpbmdsZSBwaXBlIGNoYXJhY3RlciBhY3RzIGFzIGFuIE9SIG9wZXJhdG9yLiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZ1xuICogcXVlcnkgbWF0Y2hlcyBlbnRyaWVzIHRoYXQgc3RhcnQgd2l0aCBgY29yZWAgYW5kIGVuZCB3aXRoIGVpdGhlcmBnb2AsIGByYmAsXG4gKiBvcmBweWAuXG4gKlxuICogYGBgXG4gKiBeY29yZSBnbyQgfCByYiQgfCBweSRcbiAqIGBgYFxuICovXG5jbGFzcyBFeHRlbmRlZFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdHRlcm4sXG4gICAge1xuICAgICAgaXNDYXNlU2Vuc2l0aXZlID0gQ29uZmlnLmlzQ2FzZVNlbnNpdGl2ZSxcbiAgICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoID0gQ29uZmlnLm1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGlnbm9yZUxvY2F0aW9uID0gQ29uZmlnLmlnbm9yZUxvY2F0aW9uLFxuICAgICAgZmluZEFsbE1hdGNoZXMgPSBDb25maWcuZmluZEFsbE1hdGNoZXMsXG4gICAgICBsb2NhdGlvbiA9IENvbmZpZy5sb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCA9IENvbmZpZy50aHJlc2hvbGQsXG4gICAgICBkaXN0YW5jZSA9IENvbmZpZy5kaXN0YW5jZVxuICAgIH0gPSB7fVxuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICBpc0Nhc2VTZW5zaXRpdmUsXG4gICAgICBpbmNsdWRlTWF0Y2hlcyxcbiAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aCxcbiAgICAgIGZpbmRBbGxNYXRjaGVzLFxuICAgICAgaWdub3JlTG9jYXRpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICAgIGRpc3RhbmNlXG4gICAgfTtcblxuICAgIHRoaXMucGF0dGVybiA9IGlzQ2FzZVNlbnNpdGl2ZSA/IHBhdHRlcm4gOiBwYXR0ZXJuLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5xdWVyeSA9IHBhcnNlUXVlcnkodGhpcy5wYXR0ZXJuLCB0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGNvbmRpdGlvbihfLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudXNlRXh0ZW5kZWRTZWFyY2hcbiAgfVxuXG4gIHNlYXJjaEluKHRleHQpIHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucXVlcnk7XG5cbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc01hdGNoOiBmYWxzZSxcbiAgICAgICAgc2NvcmU6IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IGluY2x1ZGVNYXRjaGVzLCBpc0Nhc2VTZW5zaXRpdmUgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIHRleHQgPSBpc0Nhc2VTZW5zaXRpdmUgPyB0ZXh0IDogdGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IG51bU1hdGNoZXMgPSAwO1xuICAgIGxldCBhbGxJbmRpY2VzID0gW107XG4gICAgbGV0IHRvdGFsU2NvcmUgPSAwO1xuXG4gICAgLy8gT1JzXG4gICAgZm9yIChsZXQgaSA9IDAsIHFMZW4gPSBxdWVyeS5sZW5ndGg7IGkgPCBxTGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHNlYXJjaGVycyA9IHF1ZXJ5W2ldO1xuXG4gICAgICAvLyBSZXNldCBpbmRpY2VzXG4gICAgICBhbGxJbmRpY2VzLmxlbmd0aCA9IDA7XG4gICAgICBudW1NYXRjaGVzID0gMDtcblxuICAgICAgLy8gQU5Ec1xuICAgICAgZm9yIChsZXQgaiA9IDAsIHBMZW4gPSBzZWFyY2hlcnMubGVuZ3RoOyBqIDwgcExlbjsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaGVyID0gc2VhcmNoZXJzW2pdO1xuICAgICAgICBjb25zdCB7IGlzTWF0Y2gsIGluZGljZXMsIHNjb3JlIH0gPSBzZWFyY2hlci5zZWFyY2godGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBudW1NYXRjaGVzICs9IDE7XG4gICAgICAgICAgdG90YWxTY29yZSArPSBzY29yZTtcbiAgICAgICAgICBpZiAoaW5jbHVkZU1hdGNoZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBzZWFyY2hlci5jb25zdHJ1Y3Rvci50eXBlO1xuICAgICAgICAgICAgaWYgKE11bHRpTWF0Y2hTZXQuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgIGFsbEluZGljZXMgPSBbLi4uYWxsSW5kaWNlcywgLi4uaW5kaWNlc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxJbmRpY2VzLnB1c2goaW5kaWNlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsU2NvcmUgPSAwO1xuICAgICAgICAgIG51bU1hdGNoZXMgPSAwO1xuICAgICAgICAgIGFsbEluZGljZXMubGVuZ3RoID0gMDtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE9SIGNvbmRpdGlvbiwgc28gaWYgVFJVRSwgcmV0dXJuXG4gICAgICBpZiAobnVtTWF0Y2hlcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgIGlzTWF0Y2g6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IHRvdGFsU2NvcmUgLyBudW1NYXRjaGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGluY2x1ZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmVzdWx0LmluZGljZXMgPSBhbGxJbmRpY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgd2FzIG1hdGNoZWRcbiAgICByZXR1cm4ge1xuICAgICAgaXNNYXRjaDogZmFsc2UsXG4gICAgICBzY29yZTogMVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZWdpc3RlcmVkU2VhcmNoZXJzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKC4uLmFyZ3MpIHtcbiAgcmVnaXN0ZXJlZFNlYXJjaGVycy5wdXNoKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWFyY2hlcihwYXR0ZXJuLCBvcHRpb25zKSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByZWdpc3RlcmVkU2VhcmNoZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgbGV0IHNlYXJjaGVyQ2xhc3MgPSByZWdpc3RlcmVkU2VhcmNoZXJzW2ldO1xuICAgIGlmIChzZWFyY2hlckNsYXNzLmNvbmRpdGlvbihwYXR0ZXJuLCBvcHRpb25zKSkge1xuICAgICAgcmV0dXJuIG5ldyBzZWFyY2hlckNsYXNzKHBhdHRlcm4sIG9wdGlvbnMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBCaXRhcFNlYXJjaChwYXR0ZXJuLCBvcHRpb25zKVxufVxuXG5jb25zdCBMb2dpY2FsT3BlcmF0b3IgPSB7XG4gIEFORDogJyRhbmQnLFxuICBPUjogJyRvcidcbn07XG5cbmNvbnN0IEtleVR5cGUgPSB7XG4gIFBBVEg6ICckcGF0aCcsXG4gIFBBVFRFUk46ICckdmFsJ1xufTtcblxuY29uc3QgaXNFeHByZXNzaW9uID0gKHF1ZXJ5KSA9PlxuICAhIShxdWVyeVtMb2dpY2FsT3BlcmF0b3IuQU5EXSB8fCBxdWVyeVtMb2dpY2FsT3BlcmF0b3IuT1JdKTtcblxuY29uc3QgaXNQYXRoID0gKHF1ZXJ5KSA9PiAhIXF1ZXJ5W0tleVR5cGUuUEFUSF07XG5cbmNvbnN0IGlzTGVhZiA9IChxdWVyeSkgPT5cbiAgIWlzQXJyYXkocXVlcnkpICYmIGlzT2JqZWN0KHF1ZXJ5KSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KTtcblxuY29uc3QgY29udmVydFRvRXhwbGljaXQgPSAocXVlcnkpID0+ICh7XG4gIFtMb2dpY2FsT3BlcmF0b3IuQU5EXTogT2JqZWN0LmtleXMocXVlcnkpLm1hcCgoa2V5KSA9PiAoe1xuICAgIFtrZXldOiBxdWVyeVtrZXldXG4gIH0pKVxufSk7XG5cbi8vIFdoZW4gYGF1dG9gIGlzIGB0cnVlYCwgdGhlIHBhcnNlIGZ1bmN0aW9uIHdpbGwgaW5mZXIgYW5kIGluaXRpYWxpemUgYW5kIGFkZFxuLy8gdGhlIGFwcHJvcHJpYXRlIGBTZWFyY2hlcmAgaW5zdGFuY2VcbmZ1bmN0aW9uIHBhcnNlKHF1ZXJ5LCBvcHRpb25zLCB7IGF1dG8gPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCBuZXh0ID0gKHF1ZXJ5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhxdWVyeSk7XG5cbiAgICBjb25zdCBpc1F1ZXJ5UGF0aCA9IGlzUGF0aChxdWVyeSk7XG5cbiAgICBpZiAoIWlzUXVlcnlQYXRoICYmIGtleXMubGVuZ3RoID4gMSAmJiAhaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgICAgcmV0dXJuIG5leHQoY29udmVydFRvRXhwbGljaXQocXVlcnkpKVxuICAgIH1cblxuICAgIGlmIChpc0xlYWYocXVlcnkpKSB7XG4gICAgICBjb25zdCBrZXkgPSBpc1F1ZXJ5UGF0aCA/IHF1ZXJ5W0tleVR5cGUuUEFUSF0gOiBrZXlzWzBdO1xuXG4gICAgICBjb25zdCBwYXR0ZXJuID0gaXNRdWVyeVBhdGggPyBxdWVyeVtLZXlUeXBlLlBBVFRFUk5dIDogcXVlcnlba2V5XTtcblxuICAgICAgaWYgKCFpc1N0cmluZyhwYXR0ZXJuKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTE9HSUNBTF9TRUFSQ0hfSU5WQUxJRF9RVUVSWV9GT1JfS0VZKGtleSkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAga2V5SWQ6IGNyZWF0ZUtleUlkKGtleSksXG4gICAgICAgIHBhdHRlcm5cbiAgICAgIH07XG5cbiAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgIG9iai5zZWFyY2hlciA9IGNyZWF0ZVNlYXJjaGVyKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgbGV0IG5vZGUgPSB7XG4gICAgICBjaGlsZHJlbjogW10sXG4gICAgICBvcGVyYXRvcjoga2V5c1swXVxuICAgIH07XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuXG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaChuZXh0KGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZVxuICB9O1xuXG4gIGlmICghaXNFeHByZXNzaW9uKHF1ZXJ5KSkge1xuICAgIHF1ZXJ5ID0gY29udmVydFRvRXhwbGljaXQocXVlcnkpO1xuICB9XG5cbiAgcmV0dXJuIG5leHQocXVlcnkpXG59XG5cbi8vIFByYWN0aWNhbCBzY29yaW5nIGZ1bmN0aW9uXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUoXG4gIHJlc3VsdHMsXG4gIHsgaWdub3JlRmllbGROb3JtID0gQ29uZmlnLmlnbm9yZUZpZWxkTm9ybSB9XG4pIHtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZXN1bHQpID0+IHtcbiAgICBsZXQgdG90YWxTY29yZSA9IDE7XG5cbiAgICByZXN1bHQubWF0Y2hlcy5mb3JFYWNoKCh7IGtleSwgbm9ybSwgc2NvcmUgfSkgPT4ge1xuICAgICAgY29uc3Qgd2VpZ2h0ID0ga2V5ID8ga2V5LndlaWdodCA6IG51bGw7XG5cbiAgICAgIHRvdGFsU2NvcmUgKj0gTWF0aC5wb3coXG4gICAgICAgIHNjb3JlID09PSAwICYmIHdlaWdodCA/IE51bWJlci5FUFNJTE9OIDogc2NvcmUsXG4gICAgICAgICh3ZWlnaHQgfHwgMSkgKiAoaWdub3JlRmllbGROb3JtID8gMSA6IG5vcm0pXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmVzdWx0LnNjb3JlID0gdG90YWxTY29yZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdGNoZXMocmVzdWx0LCBkYXRhKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSByZXN1bHQubWF0Y2hlcztcbiAgZGF0YS5tYXRjaGVzID0gW107XG5cbiAgaWYgKCFpc0RlZmluZWQobWF0Y2hlcykpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIG1hdGNoZXMuZm9yRWFjaCgobWF0Y2gpID0+IHtcbiAgICBpZiAoIWlzRGVmaW5lZChtYXRjaC5pbmRpY2VzKSB8fCAhbWF0Y2guaW5kaWNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgaW5kaWNlcywgdmFsdWUgfSA9IG1hdGNoO1xuXG4gICAgbGV0IG9iaiA9IHtcbiAgICAgIGluZGljZXMsXG4gICAgICB2YWx1ZVxuICAgIH07XG5cbiAgICBpZiAobWF0Y2gua2V5KSB7XG4gICAgICBvYmoua2V5ID0gbWF0Y2gua2V5LnNyYztcbiAgICB9XG5cbiAgICBpZiAobWF0Y2guaWR4ID4gLTEpIHtcbiAgICAgIG9iai5yZWZJbmRleCA9IG1hdGNoLmlkeDtcbiAgICB9XG5cbiAgICBkYXRhLm1hdGNoZXMucHVzaChvYmopO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU2NvcmUocmVzdWx0LCBkYXRhKSB7XG4gIGRhdGEuc2NvcmUgPSByZXN1bHQuc2NvcmU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChcbiAgcmVzdWx0cyxcbiAgZG9jcyxcbiAge1xuICAgIGluY2x1ZGVNYXRjaGVzID0gQ29uZmlnLmluY2x1ZGVNYXRjaGVzLFxuICAgIGluY2x1ZGVTY29yZSA9IENvbmZpZy5pbmNsdWRlU2NvcmVcbiAgfSA9IHt9XG4pIHtcbiAgY29uc3QgdHJhbnNmb3JtZXJzID0gW107XG5cbiAgaWYgKGluY2x1ZGVNYXRjaGVzKSB0cmFuc2Zvcm1lcnMucHVzaCh0cmFuc2Zvcm1NYXRjaGVzKTtcbiAgaWYgKGluY2x1ZGVTY29yZSkgdHJhbnNmb3JtZXJzLnB1c2godHJhbnNmb3JtU2NvcmUpO1xuXG4gIHJldHVybiByZXN1bHRzLm1hcCgocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBpZHggfSA9IHJlc3VsdDtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtOiBkb2NzW2lkeF0sXG4gICAgICByZWZJbmRleDogaWR4XG4gICAgfTtcblxuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoKSB7XG4gICAgICB0cmFuc2Zvcm1lcnMuZm9yRWFjaCgodHJhbnNmb3JtZXIpID0+IHtcbiAgICAgICAgdHJhbnNmb3JtZXIocmVzdWx0LCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG4gIH0pXG59XG5cbmNsYXNzIEZ1c2Uge1xuICBjb25zdHJ1Y3Rvcihkb2NzLCBvcHRpb25zID0ge30sIGluZGV4KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyAuLi5Db25maWcsIC4uLm9wdGlvbnMgfTtcblxuICAgIGlmIChcbiAgICAgIHRoaXMub3B0aW9ucy51c2VFeHRlbmRlZFNlYXJjaCAmJlxuICAgICAgIXRydWVcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihFWFRFTkRFRF9TRUFSQ0hfVU5BVkFJTEFCTEUpXG4gICAgfVxuXG4gICAgdGhpcy5fa2V5U3RvcmUgPSBuZXcgS2V5U3RvcmUodGhpcy5vcHRpb25zLmtleXMpO1xuXG4gICAgdGhpcy5zZXRDb2xsZWN0aW9uKGRvY3MsIGluZGV4KTtcbiAgfVxuXG4gIHNldENvbGxlY3Rpb24oZG9jcywgaW5kZXgpIHtcbiAgICB0aGlzLl9kb2NzID0gZG9jcztcblxuICAgIGlmIChpbmRleCAmJiAhKGluZGV4IGluc3RhbmNlb2YgRnVzZUluZGV4KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKElOQ09SUkVDVF9JTkRFWF9UWVBFKVxuICAgIH1cblxuICAgIHRoaXMuX215SW5kZXggPVxuICAgICAgaW5kZXggfHxcbiAgICAgIGNyZWF0ZUluZGV4KHRoaXMub3B0aW9ucy5rZXlzLCB0aGlzLl9kb2NzLCB7XG4gICAgICAgIGdldEZuOiB0aGlzLm9wdGlvbnMuZ2V0Rm4sXG4gICAgICAgIGZpZWxkTm9ybVdlaWdodDogdGhpcy5vcHRpb25zLmZpZWxkTm9ybVdlaWdodFxuICAgICAgfSk7XG4gIH1cblxuICBhZGQoZG9jKSB7XG4gICAgaWYgKCFpc0RlZmluZWQoZG9jKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZG9jcy5wdXNoKGRvYyk7XG4gICAgdGhpcy5fbXlJbmRleC5hZGQoZG9jKTtcbiAgfVxuXG4gIHJlbW92ZShwcmVkaWNhdGUgPSAoLyogZG9jLCBpZHggKi8pID0+IGZhbHNlKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuX2RvY3MubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGRvYyA9IHRoaXMuX2RvY3NbaV07XG4gICAgICBpZiAocHJlZGljYXRlKGRvYywgaSkpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVBdChpKTtcbiAgICAgICAgaSAtPSAxO1xuICAgICAgICBsZW4gLT0gMTtcblxuICAgICAgICByZXN1bHRzLnB1c2goZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgcmVtb3ZlQXQoaWR4KSB7XG4gICAgdGhpcy5fZG9jcy5zcGxpY2UoaWR4LCAxKTtcbiAgICB0aGlzLl9teUluZGV4LnJlbW92ZUF0KGlkeCk7XG4gIH1cblxuICBnZXRJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXlJbmRleFxuICB9XG5cbiAgc2VhcmNoKHF1ZXJ5LCB7IGxpbWl0ID0gLTEgfSA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5jbHVkZU1hdGNoZXMsXG4gICAgICBpbmNsdWRlU2NvcmUsXG4gICAgICBzaG91bGRTb3J0LFxuICAgICAgc29ydEZuLFxuICAgICAgaWdub3JlRmllbGROb3JtXG4gICAgfSA9IHRoaXMub3B0aW9ucztcblxuICAgIGxldCByZXN1bHRzID0gaXNTdHJpbmcocXVlcnkpXG4gICAgICA/IGlzU3RyaW5nKHRoaXMuX2RvY3NbMF0pXG4gICAgICAgID8gdGhpcy5fc2VhcmNoU3RyaW5nTGlzdChxdWVyeSlcbiAgICAgICAgOiB0aGlzLl9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KVxuICAgICAgOiB0aGlzLl9zZWFyY2hMb2dpY2FsKHF1ZXJ5KTtcblxuICAgIGNvbXB1dGVTY29yZShyZXN1bHRzLCB7IGlnbm9yZUZpZWxkTm9ybSB9KTtcblxuICAgIGlmIChzaG91bGRTb3J0KSB7XG4gICAgICByZXN1bHRzLnNvcnQoc29ydEZuKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIobGltaXQpICYmIGxpbWl0ID4gLTEpIHtcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0KHJlc3VsdHMsIHRoaXMuX2RvY3MsIHtcbiAgICAgIGluY2x1ZGVNYXRjaGVzLFxuICAgICAgaW5jbHVkZVNjb3JlXG4gICAgfSlcbiAgfVxuXG4gIF9zZWFyY2hTdHJpbmdMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IHN0cmluZyBpbiB0aGUgaW5kZXhcbiAgICByZWNvcmRzLmZvckVhY2goKHsgdjogdGV4dCwgaTogaWR4LCBuOiBub3JtIH0pID0+IHtcbiAgICAgIGlmICghaXNEZWZpbmVkKHRleHQpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICBpdGVtOiB0ZXh0LFxuICAgICAgICAgIGlkeCxcbiAgICAgICAgICBtYXRjaGVzOiBbeyBzY29yZSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgX3NlYXJjaExvZ2ljYWwocXVlcnkpIHtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSBwYXJzZShxdWVyeSwgdGhpcy5vcHRpb25zKTtcblxuICAgIGNvbnN0IGV2YWx1YXRlID0gKG5vZGUsIGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgaWYgKCFub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IHsga2V5SWQsIHNlYXJjaGVyIH0gPSBub2RlO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAga2V5OiB0aGlzLl9rZXlTdG9yZS5nZXQoa2V5SWQpLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLl9teUluZGV4LmdldFZhbHVlRm9ySXRlbUF0S2V5SWQoaXRlbSwga2V5SWQpLFxuICAgICAgICAgIHNlYXJjaGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICBtYXRjaGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBldmFsdWF0ZShjaGlsZCwgaXRlbSwgaWR4KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXMucHVzaCguLi5yZXN1bHQpO1xuICAgICAgICB9IGVsc2UgaWYgKG5vZGUub3BlcmF0b3IgPT09IExvZ2ljYWxPcGVyYXRvci5BTkQpIHtcbiAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc1xuICAgIH07XG5cbiAgICBjb25zdCByZWNvcmRzID0gdGhpcy5fbXlJbmRleC5yZWNvcmRzO1xuICAgIGNvbnN0IHJlc3VsdE1hcCA9IHt9O1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgIHJlY29yZHMuZm9yRWFjaCgoeyAkOiBpdGVtLCBpOiBpZHggfSkgPT4ge1xuICAgICAgaWYgKGlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICBsZXQgZXhwUmVzdWx0cyA9IGV2YWx1YXRlKGV4cHJlc3Npb24sIGl0ZW0sIGlkeCk7XG5cbiAgICAgICAgaWYgKGV4cFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gRGVkdXBlIHdoZW4gYWRkaW5nXG4gICAgICAgICAgaWYgKCFyZXN1bHRNYXBbaWR4XSkge1xuICAgICAgICAgICAgcmVzdWx0TWFwW2lkeF0gPSB7IGlkeCwgaXRlbSwgbWF0Y2hlczogW10gfTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRNYXBbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4cFJlc3VsdHMuZm9yRWFjaCgoeyBtYXRjaGVzIH0pID0+IHtcbiAgICAgICAgICAgIHJlc3VsdE1hcFtpZHhdLm1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHNcbiAgfVxuXG4gIF9zZWFyY2hPYmplY3RMaXN0KHF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VhcmNoZXIgPSBjcmVhdGVTZWFyY2hlcihxdWVyeSwgdGhpcy5vcHRpb25zKTtcbiAgICBjb25zdCB7IGtleXMsIHJlY29yZHMgfSA9IHRoaXMuX215SW5kZXg7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgLy8gTGlzdCBpcyBBcnJheTxPYmplY3Q+XG4gICAgcmVjb3Jkcy5mb3JFYWNoKCh7ICQ6IGl0ZW0sIGk6IGlkeCB9KSA9PiB7XG4gICAgICBpZiAoIWlzRGVmaW5lZChpdGVtKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGV2ZXJ5IGtleSAoaS5lLCBwYXRoKSwgYW5kIGZldGNoIHRoZSB2YWx1ZSBhdCB0aGF0IGtleVxuICAgICAga2V5cy5mb3JFYWNoKChrZXksIGtleUluZGV4KSA9PiB7XG4gICAgICAgIG1hdGNoZXMucHVzaChcbiAgICAgICAgICAuLi50aGlzLl9maW5kTWF0Y2hlcyh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogaXRlbVtrZXlJbmRleF0sXG4gICAgICAgICAgICBzZWFyY2hlclxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgaWR4LFxuICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgbWF0Y2hlc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRzXG4gIH1cbiAgX2ZpbmRNYXRjaGVzKHsga2V5LCB2YWx1ZSwgc2VhcmNoZXIgfSkge1xuICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoeyB2OiB0ZXh0LCBpOiBpZHgsIG46IG5vcm0gfSkgPT4ge1xuICAgICAgICBpZiAoIWlzRGVmaW5lZCh0ZXh0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBpc01hdGNoLCBzY29yZSwgaW5kaWNlcyB9ID0gc2VhcmNoZXIuc2VhcmNoSW4odGV4dCk7XG5cbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgICAgICAgc2NvcmUsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdGV4dCxcbiAgICAgICAgICAgIGlkeCxcbiAgICAgICAgICAgIG5vcm0sXG4gICAgICAgICAgICBpbmRpY2VzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHY6IHRleHQsIG46IG5vcm0gfSA9IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IGlzTWF0Y2gsIHNjb3JlLCBpbmRpY2VzIH0gPSBzZWFyY2hlci5zZWFyY2hJbih0ZXh0KTtcblxuICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHsgc2NvcmUsIGtleSwgdmFsdWU6IHRleHQsIG5vcm0sIGluZGljZXMgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNcbiAgfVxufVxuXG5GdXNlLnZlcnNpb24gPSAnNi41LjMnO1xuRnVzZS5jcmVhdGVJbmRleCA9IGNyZWF0ZUluZGV4O1xuRnVzZS5wYXJzZUluZGV4ID0gcGFyc2VJbmRleDtcbkZ1c2UuY29uZmlnID0gQ29uZmlnO1xuXG57XG4gIEZ1c2UucGFyc2VRdWVyeSA9IHBhcnNlO1xufVxuXG57XG4gIHJlZ2lzdGVyKEV4dGVuZGVkU2VhcmNoKTtcbn1cblxuZXhwb3J0IHsgRnVzZSBhcyBkZWZhdWx0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vLi4vLi4vbW9kdWxlcy9wZW9wbGUtbGlzdC9fc2NyaXB0JzsiXSwibmFtZXMiOlsid3N1QW5pbWF0ZVNsaWRlRG93biIsImVsZW1lbnQiLCJhcmdzIiwiZHVyYXRpb24iLCJleHRyYSIsInRpbWVyIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJwYXJzZUludCIsInNldFRpbWVvdXQiLCJ3c3VBbmltYXRlU2xpZGVVcCIsImNhbGxiYWNrIiwiZGVsYXlUaW1lciIsIndzdUFyaWFFeHBhbmRlZCIsInZhbHVlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwid3N1QXJpYUlzRXhwYW5kZWQiLCJnZXRBdHRyaWJ1dGUiLCJ3c3VDbGFzc0FkZCIsImVsZW1lbnRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsIndzdUNsYXNzUmVtb3ZlIiwicmVtb3ZlIiwid3N1Q2xhc3NUb2dnbGUiLCJGdXNlIiwiUGVvcGxlTGlzdCIsImVsIiwiYXBpRW5kcG9pbnQiLCJQRU9QTEVfQVBJX0JBU0VfVVJMIiwicXVlcnlBdHRyaWJ1dGVzIiwiZmlsdGVyQXR0cmlidXRlTWFwIiwibG9jYXRpb24iLCJvcmdhbml6YXRpb24iLCJjbGFzc2lmaWNhdGlvbiIsInRhZyIsImNhdGVnb3J5Iiwic2VhcmNoZXIiLCJzaG91bGRTb3J0IiwibWluTWF0Y2hDaGFyTGVuZ3RoIiwidGhyZXNob2xkIiwia2V5cyIsIm5hbWUiLCJ3ZWlnaHQiLCJjb21wb25lbnRJZCIsImRhdGFzZXQiLCJwcm9maWxlTGluayIsImRpc3BsYXlGaWVsZHMiLCJzcGxpdCIsIm9ubHlTaG93U2VsZWN0ZWRUZXJtVmFsdWVzIiwiZXhjbHVkZWRUZXJtcyIsImV4Y2x1ZGVUZXJtVmFsdWVzIiwiZmlsdGVyIiwiciIsImFjdGl2ZUZpbHRlcnMiLCJjYXRlZ29yeVRlcm1zIiwiY2F0ZWdvcnlGaWx0ZXJUZXJtcyIsInRhZ1Rlcm1zIiwidGFnRmlsdGVyVGVybXMiLCJsb2NhdGlvblRlcm1zIiwibG9jYXRpb25GaWx0ZXJUZXJtcyIsIm9yZ2FuaXphdGlvblRlcm1zIiwib3JnYW5pemF0aW9uRmlsdGVyVGVybXMiLCJjbGFzc2lmaWNhdGlvblRlcm1zIiwiY2xhc3NpZmljYXRpb25GaWx0ZXJUZXJtcyIsImluY2x1ZGVkVGVybXMiLCJzZWxlY3RlZEZpbHRlcnNMaXN0IiwiYWxsUGVvcGxlU3RyaW5nIiwicGVvcGxlIiwicGVvcGxlQ29udGFpbmVyIiwicGVvcGxlRWxlbWVudHMiLCJmaWx0ZXJzQ29udGFpbmVyIiwiZmlsdGVyVG9nZ2xlcyIsInNlYXJjaElucHV0IiwiZ2V0UGVyc29uSFRNTCIsInBlcnNvbiIsImxpbmtQcm9maWxlIiwiYmlvIiwibmlkIiwiaW5jbHVkZXMiLCJwaG90byIsInBob3RvX3NyY3NldCIsImhlYWRpbmd0YWciLCJBcnJheSIsImlzQXJyYXkiLCJ0aXRsZSIsIm1hcCIsInQiLCJqb2luIiwiZW1haWwiLCJvZmZpY2UiLCJwaG9uZSIsIndlYnNpdGUiLCJ3ZWJzaXRlTGlua1RleHQiLCJzaG91bGRJbmNsdWRlVGVybVZhbHVlIiwic2x1ZyIsImxlbmd0aCIsImNyZWF0ZVNlbGVjdEZpbHRlckhUTUwiLCJvcHRpb25zIiwiaW5jbHVkZVRlcm1zIiwiZm9yRWFjaCIsImZpbHRlck9wdGlvbnMiLCJwdXNoIiwidiIsImZpbmRJbmRleCIsIm8iLCJzb3J0IiwiYSIsImIiLCJ4IiwidG9Mb3dlckNhc2UiLCJ5IiwiY3JlYXRlUGVvcGxlRmlsdGVycyIsImZpbHRlcnNTdHJpbmciLCJjb250ZW50IiwiZmlsdGVycyIsIm5vblNlYXJjaEZpbHRlcnMiLCJmIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2VsZWN0RmlsdGVyIiwic2VhcmNoRmlsdGVyTGFiZWwiLCJpbm5lckhUTUwiLCJwb3B1bGF0ZVBlb3BsZUNvbnRhaW5lciIsInBlb3BsZUhUTUwiLCJwIiwiY3JlYXRlUGVvcGxlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiY29sdW1ucyIsInVwZGF0ZVBlb3BsZUxpc3QiLCJpIiwicGVyc29uRWxlbWVudCIsImZyb20iLCJmaW5kIiwiZGlzcGxheSIsIm9yZGVyIiwicGVvcGxlVG9IaWRlIiwidXBkYXRlU2VsZWN0ZWRGaWx0ZXJzIiwic2VsZWN0ZWRGaWx0ZXJJbnB1dHMiLCJpbnB1dCIsInJlcGxhY2UiLCJuZXh0U2libGluZyIsInRleHRDb250ZW50IiwidHJpbSIsInByb2Nlc3NQZW9wbGVGaWx0ZXJzIiwiZmlsdGVyZWRQZW9wbGUiLCJKU09OIiwicGFyc2UiLCJjaGVja2JveElucHV0cyIsImVsZW1lbnRzIiwic2VsZWN0ZWRJbnB1dHMiLCJjaGVja2VkIiwiY29uY2F0Iiwic2VsZWN0ZWRWYWx1ZXMiLCJzIiwicGVyc29uc1ZhbHVlcyIsInNvbWUiLCJzZXRDb2xsZWN0aW9uIiwicmVzdWx0cyIsInNlYXJjaCIsIml0ZW0iLCJiaW5kRXZlbnRzIiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInRvZ2dsZSIsImNsb3Nlc3QiLCJmaWx0ZXJMaXN0IiwiY2xpY2tlZEZpbHRlcnNDb250YWluZXIiLCJpbnNpZGVTZWxlY3RGaWx0ZXIiLCJnZW5lcmF0ZUhUTUwiLCJvdXRlckhUTUwiLCJnZXRQZW9wbGUiLCJwYXJhbXMiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwiaWR4IiwiYXR0clZhbHVlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaW5pdCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9