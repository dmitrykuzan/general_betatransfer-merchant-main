import Choices from "choices.js";

export const choices = () => {
  const sign = document.querySelector(".form__field-label--messenger");
  const selectMessenger = document.querySelector(".select__messenger");
  const options = selectMessenger?.querySelectorAll("option");
  const selects = document.querySelectorAll(".select");
  const navEl = document.querySelector(".form__multi");
  const multiElements = document.querySelectorAll(".form__multi");

  // const selectMulti = document.querySelector(".select__multi");
  // const selectsMultiple = document.querySelectorAll(".select--multiple");

  if (!options?.length) return;

  const choicesMessenger = new Choices(selectMessenger, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,

    callbackOnCreateTemplates: function (template) {
      return {
        item: ({ classNames }, data) => {
          const src = options[data.choiceId - 1].getAttribute(["data-src"]);
          return template(`
                <div class="${classNames.item} ${
            data.highlighted
              ? classNames.highlightedState
              : classNames.itemSelectable
          } ${
            data.placeholder ? classNames.placeholder : ""
          }" data-item data-id="${data.id}" data-value="${data.value}" ${
            data.active ? 'aria-selected="true"' : ""
          } ${data.disabled ? 'aria-disabled="true"' : ""}>
                <div class="form__select-wrapper">
                  <div class="form__select-image">
                    <img src="${src}" alt="">
                  </div>
                  <div class="select__text">${String(data.label)}</div>
                </div>
                </div>
              `);
        },
        choice: ({ classNames }, data) => {
          const src = options[data.id - 1].getAttribute(["data-src"]);
          return template(`
                <div class="${classNames.item} ${classNames.itemChoice} ${
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable
          }" data-select-text="${this.config.itemSelectText}" data-choice ${
            data.disabled
              ? 'data-choice-disabled aria-disabled="true"'
              : "data-choice-selectable"
          } data-id="${data.id}" data-value="${data.value}" ${
            data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
          }>
                <div class="select__wrapper">
                  <div class="select__image">
                    <img src="${src}" alt="">
                  </div>
                  <div class="select__text">${String(data.label)}</div>
                </div>
                </div>
              `);
        },
      };
    },
  });

  selectMessenger.addEventListener(
    "choice",
    function (event) {
      const dataSign = options[event.detail.choice.id - 1].getAttribute([
        "data-sign",
      ]);
      sign.textContent = dataSign;
    },
    false
  );

  selects.forEach((select) => {
    const choices = new Choices(select, {
      searchEnabled: false,
      placeholder: true,
      itemSelectText: "",
      allowHTML: true,
      renderSelectedChoices: "always",
    });

    select.addEventListener("change", function () {
      const container = select.closest(".form__field");
      const label = container.querySelector(".form__field-label");
      const icon = container.querySelector(".form__field-icon");

      const selectedOptions = Array.from(select.selectedOptions);

      if (selectedOptions.length > 0) {
        label.classList.add("active");
        icon.classList.add("active");
      } else {
        label.classList.remove("active");
        icon.classList.remove("active");
      }
    });
  });

  //- test checkbox
  // const choicesMulti = new Choices(selectMulti, {
  //   searchEnabled: false,
  //   itemSelectText: "",
  //   shouldSort: false,
  //   renderSelectedChoices: "always",

  //   callbackOnCreateTemplates: function (template) {
  //     return {
  //       item: ({ classNames }, data) => {
  //         return template(`
  //               <div class="${classNames.item} ${
  //           data.highlighted
  //             ? classNames.highlightedState
  //             : classNames.itemSelectable
  //         } ${
  //           data.placeholder ? classNames.placeholder : ""
  //         }" data-item data-id="${data.id}" data-value="${data.value}" ${
  //           data.active ? 'aria-selected="true"' : ""
  //         } ${data.disabled ? 'aria-disabled="true"' : ""}>
  //               <div class="form__select-wrapper">
  //                 <div class="select__text">${String(data.label)}</div>
  //               </div>
  //               </div>
  //             `);
  //       },
  //       choice: ({ classNames }, data) => {
  //         return template(`
  //               <div class="${classNames.item} ${classNames.itemChoice} ${
  //           data.disabled ? classNames.itemDisabled : classNames.itemSelectable
  //         }" data-select-text="${this.config.itemSelectText}" data-choice ${
  //           data.disabled
  //             ? 'data-choice-disabled aria-disabled="true"'
  //             : "data-choice-selectable"
  //         } data-id="${data.id}" data-value="${data.value}" ${
  //           data.groupId > 0 ? 'role="treeitem"' : 'role="option"'
  //         }>
  //               <div class="select__wrapper">
  //                 <div class="form__select-checkbox">
  //                   <label class="form__checkbox-label">
  //                     <div class="form__checkbox-text">
  //                       ${String(data.label)}
  //                     </div>
  //                     <input class="form__checkbox-input" type="checkbox" checked name="checkbox">
  //                     <span class="form__checkbox-box"></span>
  //                   </label>
  //                 </div>
  //               </div>
  //               </div>
  //             `);
  //       },
  //     };
  //   },
  // });
  //-

  multiElements.forEach((navEl) => {
    navEl.addEventListener("click", navigationHandler);

    window.addEventListener("click", (e) => {
      const clickedEl = e.target;
      if (!clickedEl.closest(".form__multi")) {
        const activeBtn = navEl.querySelector(".form__select-header.active");
        if (activeBtn) {
          activeBtn.classList.remove("active");
          activeBtn.nextElementSibling.classList.remove("show");
        }
      }
    });
  });

  function navigationHandler(e) {
    const clickedEl = e.target;
    const clikedBtn = clickedEl.closest(".form__select-header");

    if (clikedBtn) {
      if (clikedBtn.classList.contains("active")) {
        clikedBtn.nextElementSibling.classList.remove("show");
        clikedBtn.classList.remove("active");
      } else {
        const btnIsActive = navEl.querySelector(".form__multi.active");
        if (btnIsActive) {
          btnIsActive.classList.remove("active");
          btnIsActive.nextElementSibling.classList.remove("show");
        }
        clikedBtn.nextElementSibling.classList.add("show");
        clikedBtn.classList.add("active");
      }
    }
  }

  multiElements.forEach((container) => {
    const checkboxes = container.querySelectorAll(".form__checkbox-input");
    const selectText = container.querySelector(".form__select-text");
    const fieldIcon = container.querySelector(".form__field-icon");
    const fieldLabel = container.querySelector(".form__field-label");

    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", (event) => {
        updateSelectText(event, checkboxes, selectText, fieldIcon, fieldLabel);
      });
    });
  });

  function updateSelectText(
    event,
    checkboxes,
    selectText,
    fieldIcon,
    fieldLabel
  ) {
    const selectedValues = [];

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const label = checkbox
          .closest(".form__select-checkbox")
          .querySelector(".form__checkbox-text");
        if (label) {
          selectedValues.push(label.textContent);
        }
      }
    });

    selectText.textContent = selectedValues.join(", ") + " ";

    if (selectedValues.length > 0) {
      fieldIcon.classList.add("active");
      fieldLabel.classList.add("active");
    } else {
      fieldIcon.classList.remove("active");
      fieldLabel.classList.remove("active");
    }
  }
};
