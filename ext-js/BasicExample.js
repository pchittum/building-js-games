changeCanvasColor = function(){
	var canvas = document.getElementById('mycanvas');
	var context = canvas.getContext('2d');
	context.fillStyle = 'blue';
	context.fillRect(10, 10, canvas.width-20, canvas.height-20);
}
document.addEventListener('DOMContentLoaded',changeCanvasColor);
