var headsCount = 0;
var tailsCount = 0;
var wins = 0;
var losses = 0;

//TODO add code here to check the defaults, and get the values of the localStorage for each item

function flipThatCoin(result) {
  var randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg' />");
  } else {
    $("#coin-image").html("<img src='http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg' />");
  }

  if (result === randomNumber) {
    wins++;
    //TODO save the wins here
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
  } else {
    losses++;
    //TODO save the losses here
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
  }
}

$("#heads").on("click", function() {
  headsCount++;
  //TODO save the headsCount here
  $("#heads-chosen").html(headsCount);
  $("#guess").html("<b>Heads</b>");
  flipThatCoin(0);
});

$("#tails").on("click", function() {
  tailsCount++;
  //TODO save the tailsCount here
  $("#tails-chosen").html(tailsCount);
  $("#guess").html("<b>Tails</b>");
  flipThatCoin(1);
});


//TODO write a jQuery on Ready function that writes the html of our four indicators:
// wins
// losses
// headsCount
// tailsCount