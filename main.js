"use strict";
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function drawBoard(){
    // y=30
    // x=51
    for(let r=22; r<320; r+=51){
        for(let c=15; c<150; c+= 30){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(r, c, 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
}
drawBoard();

let turn = 1;

let board = [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
]

function moves(action){
        if(turn%2 != 0){
            chose(action, 'r', 'red');
            win('r');
        }else{
            chose(action, 'y', 'yellow');
        }
    turn++;
}

let chose = function(action, string, color){
    let a = action.split("");
    for(let i=0; i<5; i++){
         if (board[a[0]][i] == null){
            board[a[0]][i] = string;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc( (  (a[0]*51)  +22), ( ( (4-i)*30) +15 ), 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            i+=5;
        }   
    }
    console.log(board);
}


let win = function(string){
    let check = 0;
    let c = 0;
        for(let r=0; r<4; r++){
            if(board[0][r] == string || board[r][0] == string || board[r][r] == string){
                check++;
                if(check == 4){
                    console.log('win');
                }
            }
        }
}