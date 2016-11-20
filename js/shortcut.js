$(function() {
	var fullScreen = false;
	$(window).keypress(function(key) {
		// Echap :
		if(key.keyCode == 27) 
			menuPrincipal();

		// F12
		if(key.keyCode == 122) {
			$(document).toggleFullScreen();
		}
	});
});