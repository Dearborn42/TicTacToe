"use strict";
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
            chose(action, 'r');
        }else{
            chose(action, 'y');
        }
    turn++;
}

let chose = function(action, string){
    for(let i=0; i<5; i++){
        if(board[action][i]){}
    }
    if(board[action] == null){
        board[action] = string;
        turn--;
    }
    console.log(i, board);
}