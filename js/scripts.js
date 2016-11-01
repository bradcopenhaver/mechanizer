


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputString = $("#inputString").val();

    var splitString = inputString.split("");

    splitString.reverse();

    var outputString = splitString.join("");
    $("#output").text(outputString);
  });
});
