
document.addEventListener("click", onMouseClick, false);

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 5;

var hasStartedClick = 0;

function drawCircle(xCoor, yCoor, color){
	ctx.beginPath();
	ctx.arc(xCoor, yCoor, radius, 0, 2 * Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
}

$(function (){ 	// global rightclick handler - trigger custom event "rightclick"
	$(document).on('mousedown', '*', function(event){
		if (event.which == 3){
			if (hasStartedClick == 1){
				var x = event.clientX-205;
				var y = event.clientY-6;
				drawCircle(x, y, "red");
				hasStartedClick = 0;
			}
		}
	});
	$(document).on('contextmenu', function(event){		// Disable contextmenu
		event.preventDefault();
	});
});

function onMouseClick(e){
	var x = e.clientX-205;
	var y = e.clientY-6;
	
	if (!hasStartedClick){
		drawCircle(x, y, "black");
		hasStartedClick = 1;
	}
}


