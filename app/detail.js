$(window).on("load", function () {
  setTimeout(function () {
    $("#loader").fadeOut();
  }, 100);
});

const swiper = new Swiper(".portfolio_slider", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 10,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination-projects",
  //     clickable: true,
  //     dynamicBullets: true,
  //   },

  // Navigation arrows
  navigation: {
    nextEl: "#next_btn_projects",
    prevEl: "#prev_btn_projects",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
