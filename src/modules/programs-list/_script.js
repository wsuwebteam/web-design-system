import Fuse from "fuse.js";
import _groupBy from "lodash/groupBy";
import _some from "lodash/some";
// import _unescape from "lodash/unescape";
import _debounce from "lodash/debounce";
import {
  wsuAriaExpanded,
  wsuAriaIsExpanded,
} from "../../../_assets/js/partials/wsuPartials";

const ProgramsList = function (el) {
  let programs = [];
  const programsContainer = el.querySelector(".js-programs-list__list-groups");
  const programsContainerOriginal = programsContainer.cloneNode(true);
  const searchFilter = el.querySelector(".wsu-programs-list__search-input");
  const selectFilters = _groupBy(
    el.querySelectorAll(".js-programs-list__filter-option-input"),
    "name"
  );
  const searcher = new Fuse([], {
    shouldSort: true,
    minMatchCharLength: 3,
    threshold: 0.3,
    distance: 200,
    keys: [
      {
        name: "title",
        weight: 3,
      },
    ],
  });
  let filterToggles;

  function updateProgramList(programs) {
    if (programs.length > 0) {
      const programsContainerClone = programsContainerOriginal.cloneNode(true);

      removeEmptyGroups(programs, programsContainerClone);
      removeProgramsNotInResults(programs, programsContainerClone);
      removeDegreeTagsNotAvailableAtSelectedCampuses(programsContainerClone);

      // replace programs list with new list
      requestAnimationFrame(() => {
        programsContainer.innerHTML = programsContainerClone.innerHTML;
      });
    } else {
      requestAnimationFrame(() => {
        programsContainer.innerHTML =
          "<p>No results found for current search.</p>";
      });
    }
  }

  function removeEmptyGroups(programs, programsContainer) {
    const groupIds = programs.reduce((acc, cur) => {
      const groupId = "program-group-" + cur.title[0].toLowerCase();
      if (!acc.includes(groupId)) {
        acc.push(groupId);
      }
      return acc;
    }, []);
    const programGroups = programsContainer.querySelectorAll(
      ".wsu-programs-list__list-group"
    );

    programGroups.forEach((programGroup) => {
      if (!groupIds.includes(programGroup.id)) {
        programsContainer.removeChild(programGroup);
      }
    });
  }

  function removeProgramsNotInResults(programs, programsContainer) {
    const programIds = programs.map((program) => program.id);
    const programItems = programsContainer.querySelectorAll(
      ".wsu-programs-list__list-item"
    );
    programItems.forEach((programItem) => {
      if (!programIds.includes(programItem.id)) {
        programItem.parentNode.removeChild(programItem);
      }
    });
  }

  function removeDegreeTagsNotAvailableAtSelectedCampuses(programsContainer) {
    const checkedCampusFilters = selectFilters.campus
      .filter((i) => i.checked)
      .map((i) => i.value);

    if (checkedCampusFilters.length > 0) {
      const degreeTags = programsContainer.querySelectorAll(
        ".wsu-programs-list__degree-type"
      );
      degreeTags.forEach((degreeTag) => {
        const campuses = degreeTag.dataset.campuses.split("|");

        if (
          !_some(campuses, (campus) => checkedCampusFilters.includes(campus))
        ) {
          degreeTag.parentNode.removeChild(degreeTag);
        }
      });
    }
  }

  function processFilters() {
    let programsToDisplay = filterProgramsBySelectFilters(programs);
    programsToDisplay = filterProgramsBySearch(programsToDisplay);

    updateProgramList(programsToDisplay);
  }

  function filterProgramsBySearch(programs) {
    if (
      searchFilter.value &&
      searchFilter.value.length >= searcher.options.minMatchCharLength
    ) {
      searcher.setCollection(programs);
      const results = searcher.search(searchFilter.value);
      programs = results.map((r) => r.item);
    }

    return programs;
  }

  function filterProgramsBySelectFilters(programs) {
    // get checked filters
    const checkedAreaFilters = selectFilters.area.filter((i) => i.checked);
    const checkedDegreeTypeFilters = selectFilters.degreeType.filter(
      (i) => i.checked
    );
    const checkedCampusFilters = selectFilters.campus.filter((i) => i.checked);

    // filter programs by area
    if (checkedAreaFilters.length > 0) {
      const filterValues = checkedAreaFilters.map((i) => i.value);

      programs = programs.filter((p) => {
        return _some(p.areas, (v) => {
          return filterValues.includes(v);
        });
      });
    }

    // filter by campus and degree type combined
    if (
      checkedDegreeTypeFilters.length > 0 &&
      checkedCampusFilters.length > 0
    ) {
      const filterValues = checkedCampusFilters.reduce((acc, cur) => {
        return acc.concat(
          checkedDegreeTypeFilters.map((d) => {
            return `${cur.value}--${d.value}`;
          })
        );
      }, []);

      programs = programs.filter((p) => {
        return _some(p.campusDegrees, (v) => {
          return filterValues.includes(v);
        });
      });
    } else {
      // filter by degree type
      if (checkedDegreeTypeFilters.length > 0) {
        const filterValues = checkedDegreeTypeFilters.map((i) => i.value);

        programs = programs.filter((p) => {
          const programValues = p.campusDegrees.map((d) => {
            return d.split("--")[1];
          });

          return _some(programValues, (v) => {
            return filterValues.includes(v);
          });
        });
      }

      // filter by campus
      if (checkedCampusFilters.length > 0) {
        const filterValues = checkedCampusFilters.map((i) => i.value);

        programs = programs.filter((p) => {
          const programValues = p.campusDegrees.map((d) => {
            return d.split("--")[0];
          });

          return _some(programValues, (v) => {
            return filterValues.includes(v);
          });
        });
      }
    }

    return programs;
  }

  function getProgramData() {
    const programEls = el.querySelectorAll(".wsu-programs-list__list-item");

    programEls.forEach((p) => {
      programs.push({
        id: p.id,
        title: p.dataset.title,
        areas: p.dataset.areas.split("|"),
        campusDegrees: p.dataset.campusDegrees.split("|"),
      });
    });
  }

  function openSelectMenu(toggle) {
    wsuAriaExpanded(toggle, true);
    const icon = toggle.querySelector(".wsu-programs-list__button-icon");
    icon.classList.remove("wsu-i-arrow-down-carrot");
    icon.classList.add("wsu-i-x-close");
  }

  function closeSelectMenu(toggle) {
    wsuAriaExpanded(toggle, false);
    const icon = toggle.querySelector(".wsu-programs-list__button-icon");
    icon.classList.remove("wsu-i-x-close");
    icon.classList.add("wsu-i-arrow-down-carrot");
  }

  function bindToggleEvents() {
    filterToggles = el.querySelectorAll(".wsu-programs-list__control-button");

    // toggling select filters
    document.addEventListener(
      "click",
      function (e) {
        const toggle = e.target.closest(".wsu-programs-list__control-button");
        const insideSelectFilter =
          e.target.closest(".wsu-programs-list__control--select") !== null;

        if (!insideSelectFilter) {
          // close all menus in filterContainer if click was not in a toggle or select menu
          filterToggles.forEach((t) => {
            closeSelectMenu(t);
          });
        } else if (toggle) {
          // close other open menus
          filterToggles.forEach((t) => {
            if (t !== toggle) {
              closeSelectMenu(t);
            }
          });

          // toggle clicked toggle ;)
          wsuAriaIsExpanded(toggle)
            ? closeSelectMenu(toggle)
            : openSelectMenu(toggle);
        }
      },
      false
    );
  }

  function bindFilteringEvents() {
    const searchFilter = el.querySelector(".wsu-programs-list__search-input");
    const selectFiltersContainer = el.querySelector(
      ".js-programs-list__select-controls"
    );

    searchFilter.addEventListener(
      "keydown",
      _debounce(function (e) {
        processFilters();
      }, 400)
    );

    selectFiltersContainer.addEventListener("change", function (e) {
      processFilters();
    });
  }

  function bindEvents() {
    bindToggleEvents();
    bindFilteringEvents();
  }

  function init() {
    getProgramData();
    bindEvents();
  }

  init();
};

document.querySelectorAll(".wsu-programs-list").forEach((el) => {
  new ProgramsList(el);
});
