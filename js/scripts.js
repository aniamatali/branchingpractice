$(document).ready(function() {

  var height = parseInt(prompt("Please enter your height in inches"));

    if (height <= 60 ) {
    $(".short").addClass("green-background");
    $(".medium").addClass("red-background");
    $(".tall").addClass("red-background");
  } else if (height >= 60 && height < 70) {
    $(".short").addClass("green-background");
    $(".medium").addClass("green-background");
    $(".tall").addClass("red-background");
  } else  {
    $(".tall").addClass("green-background");
    $(".medium").addClass("green-background");
    $(".short").addClass("red-background");
  }

});
