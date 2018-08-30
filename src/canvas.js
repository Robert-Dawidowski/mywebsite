$(function() {

  const $canvas = $('#my-canvas');
  const $canvasContainer = $('#my-canvas-container');

  if( ! $canvas.tagcanvas({
      textColour : '#367fec',
      maxSpeed : 0.06,
      weight: true,
      freezeActive:true,
      shuffleTags:true,
      shape:'sphere',
      noSelect:true,
      textFont:null,
      pinchZoom:false,
      freezeDecel:true,
      initial: [0.3,-0.1],
    })) {
    // TagCanvas failed to load
    $canvasContainer.hide();
  }

  $canvasContainer.hover(function () {
    $canvas.tagcanvas("resume");
  });

  const stopCanvas = function () {
    $canvas.tagcanvas("pause");
  };
  $(window).on("scroll", function() {
    if($('#skills').visible() === true) {
      setTimeout(stopCanvas, 5000);
    } else {
      $canvas.tagcanvas("resume");
    }
  });
});
