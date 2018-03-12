$(document).ready(function() {
    if( ! $('#my-canvas').tagcanvas({
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
        $('#my-canvas-container').hide();

    }
});