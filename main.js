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
        vWin('r', action);
        hWin('r', action);
    } else {
        chose(action, 'y', 'yellow');
        vWin('y', action);
        hWin('y', action);
    }
    turn++;
}

let chose = function (action, String, color) {
    let a = action;
    for (let i = 0; i < 5; i++) {
        if (board[a][i] == null) {
            board[a][i] = String;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(((a * 51) + 22), (((4 - i) * 30) + 15), 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            i += 5;
        }
    }
}

let vWin = function(String, action) {
    let a = action;
    let check = 0;
    let filter = board[a].filter(check => check);
    for(let i = 0; i < 5; i++) {
        if(filter[i] == String && filter[i] == filter[i + 1]){
            check++;
        }
    }
    if(check == 3){
        console.log(String + ' wins');
    }
}

let hWin = function(String, action) {
    let check2 = 0;
    let a = action;
    let filter = board[a].filter(check => check);
}



let win = function (String) {
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

    // for(let c=0; c<5; c++){
    //     for(let r=0; r<6; r++){
    //         if(board[r][c] === String){
    //             check2++;
    //             if(c != 4){
    //                 if(board[r][c+1] != String){
    //                     check2--;
    //                 }
    //             } 
    //         }
    //     }
    //     if(check2 === 3){
    //         console.log(String +' wins');
    //     }
    // }


//    for (let c = 4; c>0; c--) {
//         for (let r = 0; r < 6; r++) {
//             if (board[r][c] === String) {
//                 c--;
//                 check4++;
//                 if( r != 5){
//                     if(board[r+1][c] != String){
//                         check4--;
//                     }
//                 }
//             }
//             if(check4 === 4){
//                 console.log(String +' wins');
//             }
//         }
//     }
}






