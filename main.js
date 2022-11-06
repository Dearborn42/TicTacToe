"use strict";
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

function drawBoard() {
    // y=30
    // x=51
    for (let r = 22; r < 320; r += 51) {
        for (let c = 15; c < 150; c += 30) {
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

function moves(action) {
    if (turn % 2 != 0) {
        chose(action, 'r', 'red');
        win('r');
    } else {
        chose(action, 'y', 'yellow');
    }
    turn++;
}

let chose = function (action, string, color) {
    let a = action.split("");
    for (let i = 0; i < 5; i++) {
        if (board[a[0]][i] == null) {
            board[a[0]][i] = string;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(((a[0] * 51) + 22), (((4 - i) * 30) + 15), 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            i += 5;
        }
    }
}


let win = function (string) {
    let check1 = 0;
    let check2 = 0;
    let check3 = 0;
    let check4 = 0;
    let r = 0;
    let c = 0;
    // r maxes out at 6
    // c maxes out at 5
//     let board = [
    //    c     c     c     c     c
//    r [null, null, null, null, null],
//    r [null, null, null, null, null],
//    r [null, null, null, null, null],
//    r [null, null, null, null, null],
//    r [null, null, null, null, null],
//    r [null, null, null, null, null]
//      ]
    // for(let r=0; r<6; r++){
    //     for(let c=0; c<5; c++){
    //         if(board[r][c] === string){
    //             check1++;
    //             if(board[r][c+1] != string){
    //                 check1--;
    //             }
    //         }
    //     }
    //     if(check1 === 3){
    //         console.log('win');
    //     }
    // }
    // for(let c=0; c<5; c++){
    //     for(let r=0; r<6; r++){
    //         if(board[r][c] === string){
    //             check2++;
    //             if(board[r+1][c] != string){
    //                 check2--;
    //             }
    //         }
    //     }
    //     if(check2 === 3){
    //         console.log('win');
    //     }
    // }

    for(let c=0; c<5; c++){
        for(let r=0; r<6; r++){
            if(board[r][c] === string){
                check3++;
                c++;
            }else if(board[r][c] != string){
                check3--;
                c--;
            }
        }
        console.log(check3);
    }      
}