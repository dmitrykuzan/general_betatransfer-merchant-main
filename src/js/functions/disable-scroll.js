export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll(".fixed-block"),
    body = document.body,
    paddingOffset = `${window.innerWidth - body.offsetWidth}px`;

  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });

  body.classList.add("lock");

  body.style.paddingRight = paddingOffset;
  body.style.setProperty("--padding", paddingOffset);
};
