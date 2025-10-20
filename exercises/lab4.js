let myCommutes = ["metro bus", "UCSC taps bus", "rental e-bike", "uber", "lyft", "friend's car"];

let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "dolphins",
    hasMiddleDoor: true,
    drivers: ["Thegirl with the black wavy hair", "the guy with the goatee"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
