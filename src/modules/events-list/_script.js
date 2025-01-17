const EventList = function (el) {
  const data = {
    className: el.className,
    componentId: el.dataset.componentId,
    type: el.dataset.type,
    search: el.dataset.search,
    dataSource: el.dataset.dataSource,
    noResultsMessage: el.dataset.noResultsMessage,
    count: el.dataset.count,
    offset: el.dataset.offset,
    postIds: el.dataset.postIds,
    exclude: el.dataset.exclude,
    types: el.dataset.types,
    categories: el.dataset.categories,
    tags: el.dataset.tags,
    organizations: el.dataset.organizations,
    locations: el.dataset.locations,
    displayFields: el.dataset.displayFields ?? "location,description",
  };
  const displayFields = data.displayFields.split(",");

  function generateHTML(events) {
    const html = `<ul class="${data.className}">
        ${events
          .map(function (event) {
            const date = new Date(event.start_date);
            const month = date.toLocaleString("en-US", {
              month: "short",
            });
            const day = date.getDate();
            return `<li>
                <div class="wsu-events-list__container">
                    <div class="wsu-events-list__date">
                        <div class="wsu-events-list__date-month">${month}</div>
                        <div class="wsu-events-list__date-day">${day}</div>
                    </div>
                    <div class="wsu-events-list__content">
                        <a href="${event.url}">${event.title}</a>
                        <div class="wsu-events-list__meta">
                          ${
                            event.is_all_day
                              ? `<div class="wsu-events-list__meta-time">All-Day</div>`
                              : ""
                          }
                          ${
                            !event.is_all_day && event.start_time
                              ? `<div class="wsu-events-list__meta-time">${event.start_time}</div>`
                              : ""
                          }
                          ${
                            displayFields.includes("location") && event.venue
                              ? `<div class="wsu-events-list__meta-location">${event.venue}</div>`
                              : ""
                          }
                        </div>
                       ${
                         displayFields.includes("description")
                           ? `<p>${event.summary}</p>`
                           : ""
                       }
                    </div>
                </div>
            </li>`;
          })
          .join("")}        
    </ul>`;

    el.outerHTML = html;
  }

  async function getEvents() {
    try {
      let url = `${data.dataSource}/wp-json/wsu-events/v1/get-events?`;

      if (data.type === "select") {
        url += `type=select&post-ids=${data.postIds}&offset=${data.offset}`;
      } else if (data.type === "feed") {
        url += `type=feed
          &count=${data.count}
          &offset=${data.offset}
          &types=${data.types}
          &categories=${data.categories}
          &tags=${data.tags}
          &exclude=${data.exclude}
          &organizations=${data.organizations}
          &locations=${data.locations}`;
      }

      url = url.replace(/\s/g, "");

      const response = await fetch(url);

      if (response.ok) {
        return await response.json();
      }

      throw new Error(`Error: ${response.statusText}`);
    } catch (ex) {
      console.error(ex);
    }
  }

  async function init() {
    const events = await getEvents();

    events.length > 0
      ? generateHTML(events)
      : (el.outerHTML = data.noResultsMessage
          ? `<p>${data.noResultsMessage}</p>`
          : "");
  }

  init();
};

document.querySelectorAll(".js-wsu-events-list").forEach((el) => {
  new EventList(el);
});
