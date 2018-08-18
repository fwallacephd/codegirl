//Initial display
$("#about-me-display").hide();
$("#projects-display").hide();
$("#contact-display").hide();
$("#presentations-display").hide();
$("#civic-display").hide();


//Click on Main Button
$("#main-display-button").on("click", function(){
  console.log ("Click")
  $("#main-display").hide();
  $("#about-me-display").show();
  $("#presentations-display").hide();
  $("#projects-display").hide();
  
});

//Click on Projects Button
$(".projects-button").on("click", function(){
  $("#projects-display").show();
  $("#about-me-display").hide();
  $("#presentations-display").hide();
  $("#civic-display").hide();
})

//Click on Presentations Button
$(".presentation-button").on("click", function(){
  $("#presentations-display").show();
  $("#about-me-display").hide();
  $("#projects-display").hide();
  $("#civic-display").hide();
  
});

//Click on About Me
$(".about-button").on("click", function(){
  $("#projects-display").hide();
  $("#about-me-display").show();
  $("#contact-display").hide();
  $("#presentations-display").hide();
  $("#civic-display").hide();
});

//Click on Civic Hack
$(".civic-button").on("click", function(){
  $("#civic-display").show();
  $("#projects-display").hide();
  $("#about-me-display").hide();
  $("#contact-display").hide();
  $("#presentations-display").hide();

});

//Click on Contact Me
$(".contact-button").on("click", function(){
  $("#about-me-display").hide();
  $("#projects-display").hide();
  $("#contact-display").show();
   $("#presentations-display").hide();
   $("#civic-display").hide();
});

$("#back-button").on("click", function(){
  $("#projects-display").hide();
  $("#about-me-display").show();
  $("#contact-display").hide();
  $("#presentations-display").hide();
  $("#civic-display").hide();
});
