
$(document).ready(function() {

  $(".hero-heading").waypoint(function(direction) {
    $(".hero-heading").addClass("animate__animated animate__fadeIn animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".banner-content-container").waypoint(function(direction) {
    $(".banner-content-container").addClass("animate__animated animate__bounce animate__duration-2s");
  }, {
    offset: '80%' // Trigger when the element is 10% down the viewport
  });
  $(".creviews-heading").waypoint(function(direction) {
    $(".creviews-heading").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".rtext1").waypoint(function(direction) {
    $(".rtext1").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".rtext2").waypoint(function(direction) {
    $(".rtext2").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".aboutSt1").waypoint(function(direction) {
    $(".aboutSt1").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".aboutSt2").waypoint(function(direction) {
    $(".aboutSt2").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".abt-story-heading").waypoint(function(direction) {
    $(".abt-story-heading").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".flip-heading").waypoint(function(direction) {
    $(".flip-heading").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".grid").waypoint(function(direction) {
    $(".grid").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $(".frm-heading").waypoint(function(direction) {
    $(".frm-heading").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
  $("#signup_form").waypoint(function(direction) {
    $("#signup_form").addClass("animate__animated animate__fadeInUp animate__duration-1_5s");
  }, {
    offset: '50%' // Trigger when the element is 50% down the viewport
  });
});
