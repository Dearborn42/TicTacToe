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
];

let board2 = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
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
            board2[i][a] = String;
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
    let filter = board[a].map(check => check);
    for(let i = 0; i < 5; i++) {
        if(filter[i] == String && filter[i] == filter[i + 1]){
            check++;
        }
    }
    if(check == 3){
        console.log(String + ' wins');
    }
}

// does not work
let hWin = function(String, action) {
    let a = parseInt(action);
    let x = 0;
    let check = 0;
    let check2 = 0;

    for(let i=0; i<5; i++){
        let row = board2[i].map(check => check);
        let nRow = row.filter(check => check);
        console.log(nRow)
    }
}

let dWin = function(String, action) {}
