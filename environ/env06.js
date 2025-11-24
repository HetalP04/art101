const characterA = {
  name: "Kirby",
  dayPhrase: "Sun’s up, treasure time!",
  nightPhrase: "Moon’s out, stay cautious..."
};

let lastEnv = { mode: "day", mood: "sleepy", wind: 1 };

function changeEnvironment(mode, mood, wind) {
  $("body").removeClass("day night").addClass(mode);

  const phrase =
    mode === "night" ? characterA.nightPhrase : characterA.dayPhrase;

  $("#output").html(
    `<strong>Mode:</strong> ${mode.charAt(0).toUpperCase() + mode.slice(1)}<br>
    ${characterA.name} says: ${phrase}`
  );

  if (mood === "sleepy" && mode === "day") {
    $("#output").append("<br>Feeling sleepy even though it’s daytime.");
  } else if (mood === "excited" && mode === "night") {
    $("#output").append("<br>Too excited to sleep under the blue moon!");
  }

  function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
  }

  const dx = clamp(wind, 0, 20) * 10;

  function applyCloudTransform(id, x, y) {
    const el = $(id);
    const scale = el.hasClass("is-big") ? 1.35 : 1;
    el.css("transform", `translate(${x}px, ${y}px) scale(${scale})`);
  }

  applyCloudTransform("#cloud1", dx, 5);
  applyCloudTransform("#cloud2", -dx, 25);

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
  let { mode, mood, wind } = lastEnv;

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
