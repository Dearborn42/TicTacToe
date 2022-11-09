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

function moves(action) {
    if (turn % 2 != 0) {
        chose(action, 'r', 'red');
        vWin('r');
        hWin('r');
        rdWin('r');
        ldWin('r');
    } else {
        chose(action, 'y', 'yellow');
        vWin('y');
        hWin('y');
        rdWin('y');
        ldWin('y');
    }
    turn++;
}

let x;
let y;
let chose = function (action, String, color) {
    let a = action;
    for (let i = 0; i < 5; i++) {
        if (board[a][i] == null) {
            board[a][i] = String;
            x = parseInt(action);
            y = i;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(((a * 51) + 22), (((4 - i) * 30) + 15), 12.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            i += 5;
        }
    }
}

const OFFSETS = [0, 1, 2, 3];
const OFFSETS2 = [3, 2, 1, 0];

let vWin = function(String) {
    for(let i = 0; i<board.length-1; i++) {
        if(OFFSETS.every(o => board[x][i+o] === String)){
            console.log(String + ' wins');
        }
    }
}

let hWin = function(String) {
    for(let i = 0; i < board.length-3; i++) {
        if(OFFSETS.every(o => board[i+o][y] === String)){
            console.log(String + ' wins');
        }
    }
}

let rdWin = function(String) {
    for(let i=0; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][i+o] === String)){
            console.log(String + ' wins');
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[i+o][(i-1)+o] === String)){
            console.log(String + ' wins');
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[(i-1)+o][i+o] === String)){
            console.log(String + ' wins');
        }
    }
    for(let i=2; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][(i-2)+o] === String)){
            console.log(String + ' wins');
        }
    }
}

let ldWin = function(String){
    //   for(let i=0; i < board.length-3; i++){
    //     if(OFFSETS.every(o=> board[i+o][(i+4)-o] === String)){
    //         console.log(String + ' wins');
    //     }
    // }
    // for(let i=1; i < board.length-4; i++){
    //     if(OFFSETS.every(o=> board[i+o][(i+3)-o] === String)){
    //         console.log(String + ' wins');
    //     }
    // }
    // for(let i=1; i < board.length-4; i++){
    //     if(OFFSETS.every(o=> board[(i-1)+o][(i+2)-o] === String)){
    //         console.log(String + ' wins');
    //     }
    // }
    // for(let i=2; i < board.length-3; i++){
    //     if(OFFSETS.every(o=> board[i+o][(i-2)+o] === String)){
    //         console.log(String + ' wins');
    //     }
    // }
}
