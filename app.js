var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var beginX = 0;
var beginY = 0;
var endX = canvas.width;
var endY = canvas.height;

context.beginPath();
context.moveTo(beginX, beginY);
context.lineTo(endX, endY);
context.strokeStyle = 'red';
context.stroke();

beginY = canvas.height;
endY = 0;

context.beginPath();
context.moveTo(beginX, beginY);
context.lineTo(endX, endY);
context.strokeStyle = 'red';
context.stroke();