$("#about-me-display").hide();
$("#projects-display").hide();


$("#main-display-button").on("click", function(){
  $("#main-display").hide();
  $("#about-me-display").show();
});

$("#projects-button").on("click", function(){
  $("#projects-display").show();
  $("#about-me-display").hide();
})
