$(window).load(function () {
  $("#plaza-slider").nivoSlider({
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    manualAdvance: false,
    pauseTime: 5000,
    controlNav: true,
    directionNav: false,
    pauseOnHover: true,
    controlNavThumbs: false,
    effect: "random",
    startSlide: 0,
    prevText: "Prev",
    nextText: "Next",
  });
});
