$(document).ready(function() {

  $("#mainform").submit(function(event) {

    var color = $("#colorq").val();
    var season = $("#seasonq").val();
    var born = $("#bornq").val();
    var animal = $("#animalq").val();
    var job = $("#jobq").val();
    var name = $("#inputName").val();

    if (color === "green" && season === "fall" && born === "portland" && animal === "dog" && job != "police") {
      $(".jsanswer").show();
      $(".jsimg").show();
    } else if (color === "red" && born === "outside" && job === "firefighter" || animal === "kangaroo") {
      $(".rubyanswer").show();
      $(".rubyimg").show();
    } else if (animal === "snake" && job === "programmer" || born === "east") {
      $(".pythonanswer").show();
      $(".pythonimg").show();
    } else {
      $(".rustanswer").show();
      $(".rustimg").show();
    }


    $(".panel-title").append(name);

    event.preventDefault();
  });
});
