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

// Handle scroll event
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

$(document).ready(function () {
  // Hide all answers except the first one
  $(".faq-answer").hide().first().show();
  $(".faq-question svg").first().addClass("rotate");

  $(".faq-question").click(function () {
    var answer = $(this).next(".faq-answer");
    var arrow = $(this).find("svg");

    // Close other answers
    $(".faq-answer").not(answer).slideUp();
    $(".faq-question svg").not(arrow).removeClass("rotate");

    // Toggle the selected answer
    answer.slideToggle();
    arrow.toggleClass("rotate");
  });
});

// gsap.registerPlugin(Draggable);
// // Get the parent container dimensions

// let parent = document.querySelector(".offer_services_content");
// let items = document.querySelectorAll(".offer_services-drag-item");

// // Create draggable instances
// let draggables = Draggable.create(items, {
//   type: "x,y",
//   bounds: parent, // Keeps items inside parent
//   edgeResistance: 1, // No edge resistance
//   inertia: false, // Prevents excessive movement
//   onDrag: function () {
//     checkCollisions(this);
//   },
// });

// function checkCollisions(draggedItem) {
//   let draggedRect = draggedItem.target.getBoundingClientRect();

//   items.forEach((otherItem) => {
//     if (otherItem !== draggedItem.target) {
//       let otherRect = otherItem.getBoundingClientRect();

//       if (isColliding(draggedRect, otherRect)) {
//         resolveCollision(draggedItem, otherItem);
//       }
//     }
//   });
// }

// function isColliding(rect1, rect2) {
//   return (
//     rect1.left < rect2.right &&
//     rect1.right > rect2.left &&
//     rect1.top < rect2.bottom &&
//     rect1.bottom > rect2.top
//   );
// }

// function resolveCollision(draggedItem, otherItem) {
//   let dx = draggedItem.x - otherItem.offsetLeft;
//   let dy = draggedItem.y - otherItem.offsetTop;
//   let distance = Math.sqrt(dx * dx + dy * dy) || 1;

//   let moveX = (dx / distance) * 5; // Soft repulsion (adjust force here)
//   let moveY = (dy / distance) * 5;

//   gsap.to(otherItem, {
//     x: `+=${moveX}`,
//     y: `+=${moveY}`,
//     duration: 0.3,
//     ease: "power2.out",
//   });
// }
