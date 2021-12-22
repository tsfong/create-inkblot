async function autoDownloadCanvas() {
    let link = document.getElementById('link');
    link.setAttribute('download', 'example.png');
    link.setAttribute('href', canvas.toDataURL("image/png"));
    link.click();
  }

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var instructions = document.getElementById("instructions");

var radius = 3; 
var dragging = false; 

canvas.width = 475;
canvas.height = 475;

context.fillStyle="black";
context.fillRect(0, 0, canvas.width, canvas.height)

context.strokeStyle = "white";
context.lineCap = "round";
context.globalAlpha = "0.3";
context.lineWidth = 25;
context.shadowBlur = 5;
context.shadowColor = "black";
context.globalCompositeOperation = "source-over";

var mouseDraw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;

    if(dragging){
    context.lineTo(e.offsetX, e.offsetY);
    context.beginPath();
    context.fill();
    context.moveTo(e.offsetX, e.offsetY);
    }
    
    console.log(e);
    if(e.buttons == 1) {
    mirrorPoint(prevX, prevY, x, y);
    mirrorPoint(500 - prevX, prevY, 500 - x, y);
    mirrorPoint(prevX, 500 - prevY, x);
    mirrorPoint(prevY, prevX, y, x);
    mirrorPoint(500 - prevY, prevX, 500 - y, x);
        }
    prevX = x;
    prevY = y;
}

var mirrorPoint = function(x1, y1, x2, y2){
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

var start = function(){
    dragging = true; 
    putPoint(e);
    mirrorPoint(e);
}

var stop = function(){
    dragging = false; 
    context.beginPath();
}

canvas.addEventListener("mousemove", mouseDraw);
canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", stop);

document.getElementById("layer-canvas").addEventListener("click", function() {
    context.fillRect(0, 0, canvas.width, canvas.height);
    instructions.style.display = 'block';
}, false);

document.getElementById("clear").addEventListener("click", function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    instructions.style.display = 'block';
}, false);

document.getElementById("canvas").addEventListener("mousedown", function() {
    instructions.style.display = 'none';
}, false);

