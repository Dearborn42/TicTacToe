"use strict";
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

// creates visual board for players
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

// determins who's turn is it and checks for wins based on winner
let win;
function moves(action) {
    if (turn % 2 != 0) {
        chose(action, 'r', 'red');
        vWin('r');
        hWin('r');
        rdWin('r');
        ldWin('r');
        if(win != undefined){
        turn = true;
        for(let i = 1; i<7; i++){
            document.getElementById(`grid${i}`).style.display="none";
        }
        c.style.display='none';
        document.getElementById('reset').style.display="block";
        document.getElementById('winner').style.display="block";
        document.getElementById('winner').innerHTML = "The red player won!"
    }
    } else {
        chose(action, 'y', 'yellow');
        vWin('y');
        hWin('y');
        rdWin('y');
        ldWin('y');
        if(win != undefined){
        turn = true;
        for(let i = 1; i<7; i++){
            document.getElementById(`grid${i}`).style.display="none";
        }
        c.style.display='none';
        document.getElementById('reset').style.display="block";
        document.getElementById('winner').style.display="block";
        document.getElementById('winner').innerHTML = "The yellow player won!"
    }
    }
    turn++;
}

// function that takes someone's index and appending it to the page for visual representation and updates board
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

// loops through the columns and if there is four consecitive pieces of same color then tells win who won
let vWin = function(String) {
    for(let i = 0; i<board.length-1; i++) {
        if(OFFSETS.every(o => board[x][i+o] === String)){
            win = String;
        }
    }
}

// loops through the rows and if there is four consecitive pieces of same color then tells win who won
let hWin = function(String) {
    for(let i = 0; i < board.length-3; i++) {
        if(OFFSETS.every(o => board[i+o][y] === String)){
            win = String
        }
    }
}

// loops through the board in a diagonal direction where four or more pieces can be and if there is four consecitive pieces of same color then tells win who won
let rdWin = function(String) {
    for(let i=0; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][i+o] === String)){
            win = String
        }if(OFFSETS.every(o=> board[(i+3)-o][(i+3)-o] === String)){
            win = String
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[i+o][(i-1)+o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[(i+3)-o][(i+2)-o] === String)){
            win = String
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[(i-1)+o][i+o] === String)){
            win = String
        }if(OFFSETS.every(o=> board[(i+2)+o][(i+3)-o] === String)){
            win = String
        }
    }
    for(let i=2; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][(i-2)+o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[(i+1)-o][(i+1)-o] === String)){
            win = String
        }
    }
}

// loops through the board in a diagonal direction where four or more pieces can be and if there is four consecitive pieces of same color then tells win who won
let ldWin = function(String){
      for(let i=0; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][(i+4)-o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[(i+1)+o][(i+3)-o] === String)){
            win = String
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[i+o][(i+3)-o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[(i+1)+o][(i+2)-o] === String)){
            win = String
        }
    }
    for(let i=1; i < board.length-4; i++){
        if(OFFSETS.every(o=> board[(i-1)+o][(i+2)-o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[i+o][(i+1)-o] === String)){
            win = String
        }
    }
    for(let i=2; i < board.length-3; i++){
        if(OFFSETS.every(o=> board[i+o][(i+2)-o] === String)){
            win = String
        }else if(OFFSETS.every(o=> board[(i+1)+o][(i+1)-o] === String)){
            win = String
        }
    }
}

// resets all changed values to original state for another playthrough of the game
function reset(){
    c.style.display='block';
    drawBoard();
    for(let r=0; r < board.length; r++){
        for(let c=0; c<5; c++){
            board[r][c] = null;
        }
    }
    for(let i = 1; i<7; i++){
            document.getElementById(`grid${i}`).style.display="block";
        }
        c.style.display='block';
        document.getElementById('reset').style.display="none";
        document.getElementById('winner').style.display="none";
    win = undefined;
    turn = 1;
    console.log(board);

}