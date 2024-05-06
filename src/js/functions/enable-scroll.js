export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block"),
    body = document.body;

  fixBlocks.forEach((el) => {
    el.style.paddingRight = "0px";
  });

  body.style.paddingRight = "";

  body.classList.remove("lock");
  body.style.removeProperty("--padding");
};
