
$(document).ready(function() {
  $('#v1').hide();


var vid1 = document.getElementById("v1")

document.getElementById('play').onclick = function (){
    document.getElementById('v1').play();
};


$('#play').click(function() {
	$('#v1').show().trigger('play')})
// $('#play').mouseout(function() {
// 	$('#v1').hide().trigger('pause')})

 // $("#v1")[0].webkitExitFullScreen();

// hide video when ended
$('#v1').on('ended',function(){ 
$('#v1').hide();
});

// onclick to play and paused
$('#v1').click(function () {
   if ($("#v1").get(0).paused) {
       $("#v1").get(0).play();
   } else {
       $("#v1").get(0).pause();
  }
});

// double click to exit viedo
$('#v1').dblclick(function(){

        $('#v1').hide();
        $('#v1').get(0).pause();
    });



});




