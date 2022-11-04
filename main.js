let canvas = document.getElementById("canvas");
let paint = canvas.getContext("2d");
// Draws lines in even intervals on canvas, twice to make lines thicker
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

let board = [
    [null, null, null], 
    [null, null, null],
    [null, null, null]
]
function moves(event){
    let x = event.clientX;
        if(x <= 829){
        x = 0;
    }else if(x <= 1085){
        x = 1;
    }else{
        x = 2;
    }

    let y = event.clientY;
    // if(y <= 329){
    //     y = 0;
    // }else if(y <= 559){
    //     y = 1;
    // }else{
    //     y = 2;
    // }
    console.log(x, y);
}