import Swiper, { Autoplay, Pagination, Navigation, Grid } from "swiper";

Swiper.use([Autoplay, Pagination, Navigation, Grid]);

export const slider = () => {
  const heroSlider = new Swiper(".hero__slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    allowTouchMove: false,
    direction: "vertical",
    slidesPerView: 6,
    spaceBetween: 15,
    loop: true,

    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 3.5,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 6,
      },
    },
  });

  const banksSLider = new Swiper(".banks__slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    loop: true,
    simulateTouch: true,
    slideToClickedSlide: true,
    spaceBetween: 20,
    slidesPerView: 7,

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      460: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 7,
      },
    },

    pagination: {
      el: ".banks__pagination",
      type: "bullets",
      clickable: true,
    },
  });

  const mediaSLider = new Swiper(".media__slider", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    slidesPerGroup: 1,
    slidesPerView: 3,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1.1,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 15,
      },
      400: {
        slidesPerGroup: 1,
        slidesPerView: 1.5,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 15,
      },
      576: {
        slidesPerGroup: 1,
        slidesPerView: 2,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 15,
      },
      767: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row",
        },
        spaceBetween: 15,
      },
      992: {
        slidesPerGroup: 1,
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 30,
      },
    },
  });

  const reviewsSLider = new Swiper(".reviews__slider", {
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 1.5,
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // const botSlider = new Swiper(".bot-hero__slider", {
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //     reverseDirection: true,
  //   },

  //   slidesPerView: 4,
  //   spaceBetween: 40,
  //   allowTouchMove: false,
  //   direction: "vertical",
  //   loop: true,

  //   breakpoints: {
  //     // 320: {
  //     //   spaceBetween: 10,
  //     //   slidesPerView: 3.5,
  //     // },
  //     // 576: {
  //     //   spaceBetween: 15,
  //     //   slidesPerView: 6,
  //     // },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //   },
  // });
};
