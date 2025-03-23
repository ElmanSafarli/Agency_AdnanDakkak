$(window).on("load", function () {
  setTimeout(function () {
    $("#loader").fadeOut();
  }, 100);
});

$(document).mousemove(function (e) {
  let x = e.pageX;
  let y = e.pageY;
  $(".cursor_animation").css({
    left: x + "px",
    top: y + "px",
    display: "block",
  });
});

$(document).on("scroll", function (e) {
  let x = e.pageX;
  let y = e.pageY;
  $(".cursor_animation").css({
    left: x + "px",
    top: y + "px",
    display: "block",
  });
});

$(document).mouseout(function () {
  $(".cursor_animation").css({
    display: "none",
  });
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
