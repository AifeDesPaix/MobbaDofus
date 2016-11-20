var scWidth; // Screen Height
var scHeight; // Screen Width
var mmWidth; //Minimap Width
var mmHeight; // Minimap Height
var clicking = false;

// Minimap
$(document).ready(function() {
	initDimensions();

	// Keys
	$("#img_minimap").mousedown(function(){
	    clicking = true;
	    return false;
	});

	$(document).mouseup(function(){
	    clicking = false;
	});

	$("#img_minimap").click(function(e){
		posX = -(scWidth-mmWidth-e.pageX);
		posY = -(scHeight-mmHeight-e.pageY);
		mouveMap(posX, posY);
	});

	$(document).mousemove(function(e){
		if(clicking) {
			posX = -(scWidth-mmWidth-e.pageX);
			posY = -(scHeight-mmHeight-e.pageY);
			mouveMap(posX, posY);
		}
	});
});

$(window).resize(function(){
	initDimensions();
});

function mouveMap(x, y) {
	if(x<0) x = 0;
	if(y<0) y = 0;
	$('body').css('background-position', '-'+x*72+'px -'+y*115+'px');
}

function initDimensions() {

	scWidth = $(window).width();
	scHeight = $(window).height();

	mmWidth = scWidth*20/100;
	mmHeight = scHeight*20/100;

	// CSS Minimap
	$("#img_minimap").width(mmWidth);
	$("#img_minimap").height(mmHeight);
}