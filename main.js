let canvas = document.getElementById("canvas");
let paint = canvas.getContext("2d");
let cords = canvas.getBoundingClientRect();
function draw(){
    paint.beginPath();
    for(let i=0; i<2; i++){
        for(let i=0; i<500; i+=100){
        paint.moveTo(i, 0);
        paint.lineTo(i, 500);
    }
    for(let i=0; i<400; i+=50){
        paint.moveTo(0, i);
        paint.lineTo(500, i);
    }
    }
    paint.stroke();
}
draw();

function move(){
    
}