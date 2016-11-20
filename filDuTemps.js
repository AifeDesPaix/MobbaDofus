$(function() {
	menuPrincipal();
});

function jouer() {
	hideAll();
	$("#E_jeu").show();
}

function menuPrincipal() {
	hideAll();
	$("#E_home").show();	
}

function menuResolution() {
	hideAll();
	$("#E_resolution").show();	
}

function hideAll() {
	$("#E_home").hide();
	$("#E_jeu").hide();
	$("#E_resolution").hide();
}

function quitter() {
	alert("Non, tu restes fdp.")
}

function changeResolution(x, y) {
	$("#resolution").css({
			width: x+"px",
			height: y+"px"
	})
}