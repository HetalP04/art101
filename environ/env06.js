const characterA = {
  name: "Kirby",
  dayPhrase: "Sun’s up, treasure time!",
  nightPhrase: "Moon’s out, stay cautious..."
};

let lastEnv = { mode: "day", mood: "sleepy", wind: 1 };

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

  const scale1 = $("#cloud1").hasClass("is-big") ? 1.35 : 1;
  const scale2 = $("#cloud2").hasClass("is-big") ? 1.35 : 1;

  $("#cloud1").css("transform", "translate(" + dx + "px, 5px) scale(" + scale1 + ")");
  $("#cloud2").css("transform", "translate(" + (-dx) + "px, 25px) scale(" + scale2 + ")");

  $("#output2").html(
    "<strong>Mood:</strong> " + mood +
    " &nbsp;|&nbsp; <strong>Wind:</strong> " + wind
  );

  lastEnv = { mode, mood, wind };
}

$("#btn-day").on("click", function () {
  changeEnvironment("day", "sleepy", 2);
});

$("#btn-night").on("click", function () {
  changeEnvironment("night", "excited", 8);
});

$(document).on("click", ".cloud", function () {
  $(this).toggleClass("is-big");
  changeEnvironment(lastEnv.mode, lastEnv.mood, lastEnv.wind);
});


$(document).on("keydown", function (event) {
  let mode = lastEnv.mode;
  let mood = lastEnv.mood;
  let wind = lastEnv.wind;

  if (event.key === "ArrowRight") {
    wind = Math.min(wind + 1, 20);
    $("#output2").append("<br><em>Wind increased with →</em>");
  } else if (event.key === "ArrowLeft") {
    wind = Math.max(wind - 1, 0);
    $("#output2").append("<br><em>Wind decreased with ←</em>");
  } else if (event.key === "m" || event.key === "M") {
    mood = (mood === "sleepy") ? "excited" : "sleepy";
    $("#output2").append("<br><em>Mood toggled with M key</em>");
  } else {
    return;
  }

  changeEnvironment(mode, mood, wind);
});


$(function () {
  changeEnvironment("day", "sleepy", 1);
});
