$(document).ready(function() {

  $("#mainform").submit(function(event) {

    var color = $("#colorq").val();
    var season = $("#seasonq").val();
    var born = $("#bornq").val();
    var animal = $("#animalq").val();
    var job = $("#jobq").val();

    if (color === "green" && season === "fall" && born === "portland" && animal === "dog" && job != "police") {
      $(".jsanswer").show();
    } else if (color === "red" && born === "outside" && job === "firefighter" || animal === "kangaroo") {
      $(".rubyanswer").show();
    } else if (animal === "snake" && job === "programmer" || born === "east") {
      $(".pythonanswer").show();
    } else {
      $(".rustanswer").show();
    }

    event.preventDefault();
  });
});
