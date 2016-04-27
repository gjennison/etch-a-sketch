$(document).ready(function(){
	// var gridSize = 16;

	// createGrid(gridSize);

	createGrid(24);

	$(".size").click(function(){
		$(".square").remove();

		var gridSize = prompt("enter grid size");

		createGrid(gridSize);
	});
});

function createGrid(gridSize){
	useRandomColor = false;

	$grid = $('.grid');

	for (var i = gridSize*gridSize - 1; i >= 0; i--) {
		$grid.append("<div class='square'></div>");
	};

	$('.square').css("background-color", "yellow");

	var size = 480/gridSize;

	$(".square").css("width", size);
	$(".square").css("height", size);
	$(".square").css("margin", 1);

	var color = "rgb(255,0,0)";

	$(".square").hover(function(){
		if(!useRandomColor) $(this).css("background-color", color);
		else $(this).css("background-color", randomColor());
		// $(this).fadeOut(500);
	});

	$(".clear").click(function(){
		$(".square").css({
			"background-color":"yellow", 
			"opacity":"1"});
	});

	$(".color").click(function(){
		useRandomColor = true;
	});

	$(".red").click(function(){
		useRandomColor = false;
	});
}

function randomColor(){
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
}
