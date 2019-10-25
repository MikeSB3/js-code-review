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
    } else if (color === "red" && born === "outside" && job === "firefighter" || animal === "kangaroo" || season === "summer") {
      $(".rubyanswer").show();
      $(".rubyimg").show();
    } else if (animal === "snake" && job === "programmer" || born === "east" || season === winter || color === black) {
      $(".pythonanswer").show();
      $(".pythonimg").show();
    } else {
      $(".rustanswer").show();
      $(".rustimg").show();
    }

    $(".panel-title").prepend(name);

    event.preventDefault();
  });

  $("#refresh").click(function() {
    location.reload();
  });

  $(".footer1").click(function() {
    $(".footer2").fadeIn(function() {
      $(".footer3").fadeIn(function() {
        $(".footer4").fadeIn(function() {
          $(".footer5").fadeIn(function() {
            $(".footer6").fadeIn(function() {
              $(".footer7").fadeIn(function() {
                $(".footer8").fadeIn(function() {
                  $(".footer9").fadeIn(function() {
                    $(".footer10").fadeIn(function() {
                      $(".footer11").fadeIn(function() {
                        $(".footer12").fadeIn();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

});
