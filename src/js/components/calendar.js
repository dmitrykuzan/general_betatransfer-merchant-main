import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import tippy from "tippy.js";

export const calendar = () => {
  const calendarRoot = document.querySelector(".calendar");
  const calendarWrapper = calendarRoot?.querySelector(".calendar-fullcalendar");

  if (!calendarRoot) return;
  const events = JSON.parse(calendarRoot.getAttribute("data-events"));
  const eventBlock = calendarRoot.querySelector(".calendar-event");

  let calendar = new Calendar(calendarWrapper, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: "dayGridMonth",
    fixedWeekCount: false,
    headerToolbar: {
      left: "title",
      center: "prev today next",
      right: "",
    },
    buttonText: {
      today: "Today",
    },
    eventClick: (info) => {
      if (!info.event.extendedProps?.url) return;

      window.open(info.event.extendedProps?.url, "_blank");
    },
    eventDidMount: (info) => {
      const title = info.el.querySelector(".fc-event-title");
      tippy(title, {
        content: info.event.title,
        placement: "top",
        arrow: true,
      });
    },
    events,
    datesSet: () => {
      const dates = document.querySelectorAll("[data-date]");

      let firstEvent = null;

      dates.forEach((date) => {
        const start = date.getAttribute("data-date");
        const event = events.find((event) => event.start === start);

        if (event) {
          date.classList.add("fc-has-event");

          if (!firstEvent) {
            firstEvent = event;

            date.classList.add("fc-clicked");

            if (event.extendedProps?.url) {
              eventBlock.innerHTML = `<a href="${event.extendedProps?.url}" target="_blank">${event.title}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4.5 16L12 8.5L4.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>`;
            } else {
              eventBlock.textContent = event.title;
            }
          }
        }

        date.addEventListener("click", (e) => {
          if (e.currentTarget.classList.contains("fc-has-event")) {
            dates.forEach((item) => item.classList.remove("fc-clicked"));

            e.currentTarget.classList.add("fc-clicked");

            if (event.extendedProps?.url) {
              eventBlock.innerHTML = `<a href="${event.extendedProps?.url}" target="_blank">${event.title}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4.5 16L12 8.5L4.5 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>`;
            } else {
              eventBlock.textContent = event.title;
            }
          }
        });
      });
    },
  });

  calendar.render();
};
