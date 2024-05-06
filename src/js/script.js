"use strict";

// Connecting vendors (plugins)
import "./_vendor";
import { calendar, choices } from "./components";

// Functions
import {
  mobileCheck,
  burger,
  slider,
  dynamicAdaptive,
  modals,
  headerFixed,
  accordion,
} from "./functions/";

// Components
// import { formValidation } from "./components/";

window.addEventListener("DOMContentLoaded", () => {
  burger();
  mobileCheck();
  slider();
  dynamicAdaptive();
  modals();
  headerFixed();
  accordion(".faq__list", "faq__item-title", ".faq__item", "faq__item--active");
  calendar();
  choices();
});
