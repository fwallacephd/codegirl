//Initial display
$("#about-me-display").hide();
$("#projects-display").hide();
$("#contact-display").hide();

//Click on Main Button
$("#main-display-button").on("click", function(){
  $("#main-display").hide();
  $("#about-me-display").show();
});

//Click on Projects Button
$("#projects-button").on("click", function(){
  $("#projects-display").show();
  $("#about-me-display").hide();
})

//Click on About Me
$("#about-button").on("click", function(){
  $("#projects-display").hide();
  $("#about-me-display").show();
  $("#contact-display").hide();
});

//Click on Contact Me
$("#contact-button").on("click", function(){
  $("#about-me-display").hide();
  $("#projects-display").hide();
  $("#contact-display").show();
});

$("#back-button").on("click", function(){
  $("#projects-display").hide();
  $("#about-me-display").show();
  $("#contact-display").hide();
});
