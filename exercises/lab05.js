function askNumber(whatNumber) {
  let userNumber = prompt("Guess a number from 1 to 10:");
  if (userNumber == whatNumber) {
    $("#output").html("You got it!");
  } else {
    $("#output").html("Nope, try again!");
  }
}

$("#good-button").on("click", function () {
  askNumber(5);
});
