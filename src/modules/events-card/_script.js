const EventCards = function (el) {
  const data = {
    className: el.className,
    componentId: el.dataset.componentId,
    type: el.dataset.type,
    search: el.dataset.search,
    dataSource: el.dataset.dataSource,
    count: el.dataset.count,
    postIds: el.dataset.postIds,
    exclude: el.dataset.exclude,
    types: el.dataset.types,
    categories: el.dataset.categories,
    tags: el.dataset.tags,
    organizations: el.dataset.organizations,
  };

  function generateHTML(events) {
    const html = events
      .map(function (event) {
        const date = new Date(event.start_date);
        const month = date.toLocaleString("en-US", {
          month: "short",
        });
        const day = date.getDate();
        return `<article class="wsu-card wsu-events-card ${data.className}">
            <div class="wsu-events-card__container">
              <a href="${event.url}">${event.title}</a>
                <div class="wsu-events-card__meta">                
                    <div class="wsu-events-card__meta-date">${month} ${day}</div>                    
                    ${
                      event.is_all_day
                        ? `<div class="wsu-events-card__meta-time">All-Day</div>`
                        : ""
                    }
                    ${
                      !event.is_all_day && event.start_time
                        ? `<div class="wsu-events-card__meta-time">${event.start_time}</div>`
                        : ""
                    }                    
                </div>
                ${
                  event.venue
                    ? `<div class="wsu-events-card__meta-location">${event.venue}</div>`
                    : ""
                }                
                <p>${event.summary}</p>
            </div>
        </article>`;
      })
      .join("");

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
          &organizations=${data.organizations}`;
      }

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
    generateHTML(events);
  }

  init();
};

document.querySelectorAll(".js-wsu-events-card").forEach((el) => {
  new EventCards(el);
});
