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
