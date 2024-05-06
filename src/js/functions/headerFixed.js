export const headerFixed = () => {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= headerHeight) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  });
};
