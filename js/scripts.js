$(document).ready(function() {


  $("#mainform").submit(function(event) {

    if (portland && green && fall && dog) {
      $(".jsanswer").show();
    } else if (red && summer || outside) {
      $(".rubyanswer").show();
    } else if (snake || programmer || blue || spring) {
      $(".pythonanswer").show();
    } else {
      $(".rustanswer").show();
    }


    console.log("it submitted.");
    event.preventDefault();
  });




});
