const characterA = {
    name: "Kirby",
    dayPhrase: "Sun’s up, treasure time!",
    nightPhrase: "Moon’s out, stay cautious..."
};

function changeEnvironment(mode, mood, wind) {
    if (mode === "night") {
        $("body").removeClass("day").addClass("night");
        $("#output").html(
            "<strong>Mode:</strong> Night<br>" +
            characterA.name + " says: " + characterA.nightPhrase
        );
    } else {
        $("body").removeClass("night").addClass("day");
        $("#output").html(
            "<strong>Mode:</strong> Day<br>" +
            characterA.name + " says: " + characterA.dayPhrase
        );
    }

    if (mood === "sleepy" && mode === "day") {
        $("#output").append("<br>Feeling sleepy even though it’s daytime.");
    } else if (mood === "excited" && mode === "night") {
        $("#output").append("<br>Too excited to sleep under the blue moon!");
    }

    const dx = Math.min(Math.max(wind, 0), 20) * 10;
    $("#cloud1").css("transform", "translate(" + dx + "px, 5px)");
    $("#cloud2").css("transform", "translate(" + (-dx) + "px, 25px)");

    $("#output2").html(
        "<strong>Mood:</strong> " + mood +
        " &nbsp;|&nbsp; <strong>Wind:</strong> " + wind
    );
}

$("#btn-day").on("click", function () {
    changeEnvironment("day", "sleepy", 2);
});

$("#btn-night").on("click", function () {
    changeEnvironment("night", "excited", 8);
});

$(function () {
    changeEnvironment("day", "sleepy", 1);
});
