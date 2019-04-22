$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in centimeters"));

  if (height >= 160) {
    $('#tall-height-ride').show();
    $('#average-height-ride').show();
    $('#short-height-ride').show();
  } else if (height >=140) {
    $('#average-height-ride').show();
    $('#short-height-ride').show();
  } else {
    $('#short-height-ride').show();
  }
});
