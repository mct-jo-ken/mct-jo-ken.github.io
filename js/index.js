/*global $, anime*/

let translatePosCount = 0;
let button_size = 3;

function translate_item(posCount) {
  var w = $(".schedule-item").outerWidth(true);
  anime({
    targets: '.schedule-item',
    translateX: (-posCount * w) + 'px',
    duration: 1200,
    // loop: true,
    // direction: 'alternate',
    easing: 'easeInOutCubic'
  });
}

function change_button_opacity(posCount) {
  if (posCount === 0) {
    $("#schdule-button-left").css({"opacity": "0.4"});
    $("#schdule-button-right").css({"opacity": "1"});
  } else if (posCount === button_size - 1) {
    $("#schdule-button-right").css({"opacity": "0.4"});
    $("#schdule-button-left").css({"opacity": "1"});
  } else {
    $("#schdule-button-right").css({"opacity": "1"});
    $("#schdule-button-left").css({"opacity": "1"});
  }
}

change_button_opacity(translatePosCount);

$("#schdule-button-right").on("click", function() {
  if (translatePosCount < button_size - 1) {
    translatePosCount++;
    translate_item(translatePosCount);
  }
  change_button_opacity(translatePosCount);
});

$("#schdule-button-left").on("click", function() {
  if (translatePosCount > 0) {
    translatePosCount--;
    translate_item(translatePosCount);
  }
  change_button_opacity(translatePosCount);
});
