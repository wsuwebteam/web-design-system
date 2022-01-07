import Fuse from "fuse.js";
import {
  wsuAriaExpanded,
  wsuAriaIsExpanded,
} from "../../../_assets/js/partials/wsuPartials";

const PeopleList = function (el) {
  const apiEndpoint = PEOPLE_API_BASE_URL + "/wp-json/peopleapi/v1/people?";
  const queryAttributes = [
    "count",
    "page",
    "nid",
    "classification",
    "university-category",
    "university-location",
    "university-organization",
    "photo-size",
    "profile-order",
  ];
  const filterAttributeMap = {
    location: "university_location",
    organization: "university_organization",
    classification: "classification",
    tag: "tag",
    category: "category",
  };
  const searcher = new Fuse([], {
    shouldSort: true,
    minMatchCharLength: 3,
    threshold: 0.3,
    keys: [
      {
        name: "name",
        weight: 3,
      },
      "title",
      "nid",
      "email",
      "phone",
    ],
  });
  const componentId = el.dataset.componentId;
  const displayFields = el.dataset.displayFields.split(",");
  const excludedTerms = el.dataset.excludeTermValues.split(",");
  const activeFilters = [];
  let selectedFiltersList = [];
  let allPeopleString = "";
  let people;
  let peopleContainer;
  let peopleElements;
  let filtersContainer;
  let filterToggles;
  let searchInput;

  function getPersonHTML(person) {
    return `<div class="wsu-card wsu-card-person wsu-image-frame--ratio-square wsu-card--outline-shadow js-people-list__person" data-nid="${
      person.nid
    }">
        ${
          displayFields.includes("photo")
            ? `
            <div class="wsu-image-frame wsu-card__person-image wsu-people-list__person-image">
                ${
                  person.photo
                    ? `
                    <img src="${person.photo}"
                        srcset="${person.photo_srcset}"
                        sizes="(min-width: 768px) 33.3vw, 100vw">`
                    : ""
                }
            </div>`
            : ""
        }

        <div class="wsu-card__content">
            ${
              displayFields.includes("name")
                ? `<${el.dataset.headingtag} class="wsu-card__person-name">${person.name}</${el.dataset.headingtag}>`
                : ""
            }
            
            ${
              displayFields.includes("title") && Array.isArray(person.title)
                ? person.title
                    .map(
                      (t) => `<div class="wsu-card__person-title">${t}</div>`
                    )
                    .join("")
                : ""
            }
            
            ${
              displayFields.includes("email") && person.email
                ? `
                <div class="wsu-meta-email wsu-meta--icon-crimson">
                    <span class="wsu-screen-reader-only">Email Address</span>
                    <a href="mailto:${person.email}">${person.email}</a>
                </div>`
                : ""
            }

            ${
              displayFields.includes("office") && person.office
                ? `
                <div class="wsu-meta-location wsu-meta--icon-crimson">
                    <span class="wsu-screen-reader-only">Location</span>
                    <a href="#">${person.office}</a>
                </div>`
                : ""
            }

            ${
              displayFields.includes("phone") && person.phone
                ? `
                <div class="wsu-meta-phone wsu-meta--icon-crimson">
                    <span class="wsu-screen-reader-only">Phone</span>
                    <a href="tel:${person.phone}">${person.phone}</a>
                </div>`
                : ""
            }

            ${
              displayFields.includes("website") && person.website
                ? `
                <div class="wsu-meta-website wsu-meta--icon-crimson">
                    <a href="${person.website}">${el.dataset.websiteLinkText}</a>
                </div>`
                : ""
            }
        </div>
    </div>`;
  }

  function createSelectFilterHTML(filter, people) {
    let options = [];

    // set filter options
    people.forEach((person) => {
      const filterOptions = person[filterAttributeMap[filter]];

      if (filterOptions && filterOptions.length > 0) {
        if (!activeFilters.includes(filter)) {
          activeFilters.push(filter);
        }

        filterOptions.forEach((v) => {
          if (
            !excludedTerms.includes(v.slug) &&
            options.findIndex((o) => o.slug === v.slug) === -1
          ) {
            options.push(v);
          }
        });
      }
    });

    // sort options alphabetically
    options.sort(function (a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    // class="wsu-screen-reader-only"
    return options.length > 0
      ? `<div class="wsu-people-list__select-filter">
            <button type="button" class="wsu-button wsu-people-list__filter-toggle" aria-expanded="false" aria-controls="${componentId}__content">${
          el.dataset[filter + "FilterLabel"]
        }</button>
            <div id="${componentId}__content" class="wsu-people-list__select-list-container" aria-labelledby="${componentId}__title">
                <ul class="wsu-people-list__select-list">
                    ${options
                      .map(
                        (o) => `<li class="wsu-people-list__select-list-item">
                        <label class="wsu-people-list__fitler-label">
                            <input class="wsu-people-list__fitler-checkbox" type="checkbox" name="${filter}[]" value="${o.slug}" />
                            ${o.name}                    
                        </label>
                    </li>`
                      )
                      .join("")}
                </ul>
            </div>
        </div>`
      : "";
  }

  function createPeopleFilters(filtersString, people) {
    let content = "";
    const filters = filtersString.split(",");
    const nonSearchFilters = filters.filter((f) => f && f !== "search");

    // setup filters container
    const filtersContainer = document.createElement("form");
    filtersContainer.className = "wsu-people-list__filters-container";

    // create non-search filters
    nonSearchFilters.forEach((filter) => {
      const selectFilter = createSelectFilterHTML(filter, people);
      content += selectFilter;
    });

    // create search filter
    if (filters.includes("search")) {
      content += `
        <div class="wsu-people-list__search-filter">
            <input class="wsu-people-list__search-input" type="text" placeholder="${el.dataset.searchFilterLabel}"/>
        </div>`;
    }

    content += `
      <div class="wsu-people-list__selected-filters-container">
        <ul class="wsu-people-list__selected-filters-list">
        </ul>
      </div>
    `;

    // write filters to container
    filtersContainer.innerHTML = content;

    return filtersContainer;
  }

  function populatePeopleContainer(people, peopleContainer) {
    let peopleHTML = "";

    people.forEach((p) => {
      peopleHTML += getPersonHTML(p);
    });

    peopleContainer.innerHTML = peopleHTML;
  }

  function createPeopleContainer() {
    const container = document.createElement("div");
    container.className = `wsu-card-wrapper wsu-card-wrapper--per-row-${el.dataset.columns} js-people-list`;

    return container;
  }

  function updatePeopleList(people) {
    let i = 0;

    // show and sort people by filters
    people.forEach((person) => {
      const personElement = Array.from(peopleElements).find(
        (p) => p.dataset.nid === person.nid
      );

      if (personElement) {
        personElement.style.display = null;
        personElement.style.order = i;
        i++;
      }
    });

    // hide people not found in filtering
    const peopleToHide = Array.from(peopleElements).filter((personElement) => {
      return (
        people.findIndex((p) => p.nid === personElement.dataset.nid) === -1
      );
    });

    peopleToHide.forEach((personElement) => {
      personElement.style.display = "none";
      personElement.style.order = null;
    });

    people.length === 0
      ? el.classList.add("has-no-results")
      : el.classList.remove("has-no-results");
  }

  function updateSelectedFilters(selectedFilterInputs) {
    let content = "";

    selectedFilterInputs.forEach((input) => {
      content += `
        <li class="wsu-people-list__selected-filters-list-item">
          <button class="wsu-people-list__selected-filter-toggle" type="button" 
            data-filter-list="${input.name.replace("[]", "")}" 
            data-value="${input.value}">
            ${input.nextSibling.textContent.trim()}
          </button>
        </li>
      `;
    });

    selectedFiltersList.innerHTML = content;
  }

  function processPeopleFilters() {
    let selectedFilterInputs = [];
    let filteredPeople = JSON.parse(allPeopleString);

    activeFilters.forEach((f) => {
      const selectedInputs = Array.from(
        filtersContainer.elements[`${f}[]`]
      ).filter((f) => f.checked);

      if (selectedInputs.length > 0) {
        selectedFilterInputs = selectedFilterInputs.concat(selectedInputs);
        const selectedValues = selectedInputs.map((s) => s.value);

        filteredPeople = filteredPeople.filter((person) => {
          const personsValues = person[filterAttributeMap[f]];

          return selectedValues.some((v) => {
            return !(personsValues.findIndex((o) => v === o.slug) === -1);
          });
        });
      }
    });

    if (
      searchInput &&
      searchInput.value !== "" &&
      searchInput.value.length >= 3
    ) {
      searcher.setCollection(filteredPeople);
      const results = searcher.search(searchInput.value);

      filteredPeople = results.map((r) => r.item);
    }

    updateSelectedFilters(selectedFilterInputs);
    updatePeopleList(filteredPeople);
  }

  function bindEvents(el) {
    filtersContainer = el.querySelector(".wsu-people-list__filters-container");
    filterToggles = el.querySelectorAll(".wsu-people-list__filter-toggle");
    searchInput = el.querySelector(".wsu-people-list__search-input");
    selectedFiltersList = el.querySelector(
      ".wsu-people-list__selected-filters-list"
    );
    peopleContainer = el.querySelector(".wsu-people-list__filters-container");
    peopleElements = el.querySelectorAll(".js-people-list__person");

    // filter on select option change
    filtersContainer.addEventListener("change", function (e) {
      if (e.target !== searchInput) {
        processPeopleFilters();
      }
    });

    // fitler on search
    searchInput?.addEventListener("input", function (e) {
      // consider debouncing
      processPeopleFilters();
    });

    // remove selected filter on toggle click
    selectedFiltersList.addEventListener("click", function (e) {
      const toggle = e.target.closest(
        ".wsu-people-list__selected-filter-toggle"
      );

      if (toggle) {
        const input = filtersContainer.querySelector(
          `input[name^="${toggle.dataset.filterList}"][value="${toggle.dataset.value}"]`
        );
        if (input) {
          input.checked = false;
          processPeopleFilters();
        }
      }
    });

    // toggling select filters
    document.addEventListener(
      "click",
      function (e) {
        const toggle = e.target.closest(".wsu-people-list__filter-toggle");
        const insideSelectFilter = e.target.closest(
          ".wsu-people-list__select-filter"
        );

        if (toggle) {
          // close other open menus
          filterToggles.forEach((t) => {
            if (t !== toggle) {
              wsuAriaExpanded(t, false);
            }
          });

          wsuAriaExpanded(toggle, !wsuAriaIsExpanded(toggle));
        }

        // // close all if outside click
        if (!insideSelectFilter) {
          filterToggles.forEach((t) => {
            wsuAriaExpanded(t, false);
          });
        }
      },
      false
    );
  }

  function generateHTML(people) {
    let content = "";

    // create filters
    const filtersContainer = createPeopleFilters(el.dataset.filters, people);
    content += filtersContainer.outerHTML;

    // create people list
    const peopleContainer = createPeopleContainer();
    populatePeopleContainer(people, peopleContainer);
    content += peopleContainer.outerHTML;

    // write html to dom
    el.innerHTML = content;
  }

  function getPeople() {
    // build request
    const params = queryAttributes
      .reduce(function (acc, curr, idx) {
        const attrValue = el.getAttribute("data-" + curr);

        if (attrValue) {
          acc.push(curr + "=" + attrValue);
        }

        return acc;
      }, [])
      .join("&");

    // make request
    return fetch(apiEndpoint + params)
      .then((response) => response.json())
      .catch(function (error) {
        console.error(error);
      });
  }

  function init() {
    getPeople().then((data) => {
      allPeopleString = data;
      people = JSON.parse(data);

      generateHTML(people);

      setTimeout(() => {
        bindEvents(el);
      }, 0);
    });
  }

  init();
};

document.querySelectorAll(".wsu-people-list").forEach((el) => {
  new PeopleList(el);
});
