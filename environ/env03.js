let environmentName = "Planet Popstar - Year 4073";
let worldFacts = {
  year: 4073,
  inhabitants: "No humans, only unknown silent creatures roaming the ruins",
  treasures: "Ancient hidden treasure scattered across the planet",
  keys: "Mysterious keys needed to unlock each treasure"
};

$("#output").append(
  "<div class='panel yellow'>" +
  "<h3>World Setting</h3>" +
  "<p><strong>Year:</strong> " + worldFacts.year + "</p>" +
  "<p><strong>Inhabitants:</strong> " + worldFacts.inhabitants + "</p>" +
  "</div>"
);

$("#output2").append(
  "<div class='panel purple'>" +
  "<h3>Secrets of the Planet</h3>" +
  "<p><strong>Treasures:</strong> " + worldFacts.treasures + "</p>" +
  "<p><strong>Keys:</strong> " + worldFacts.keys + "</p>" +
  "</div>"
);
