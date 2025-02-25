const statut = document.getElementById("status");
const board = document.querySelector(".board"); // . = ID, # = class
const restart = document.getElementById("restart");

let rows = 7, cols = 6;
let getBoard, gameActive;
let currentPlayer = "red"
function init(){
    gameBoard = Array.from({length: rows}, () => Array(cols).fill(null)); // => = function
    gameActive = true;
    currentPlayer = "red";
    statut.textcontent="Tour du joueur : Rouge"
    createRound();
}
function createRound(){
    board.innerHTML = "";
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            board.appendChild(cell);
        }
    }
    document.querySelectorAll(".cell").forEach(ceil =>
        cell.addEventListener("click"), () => dropPiece(parseInt(cell.dataset.col))
    )
}
function dropPiece(col){
    if(!gameActive) return;
    for(row = rows - 1; rows >= 0; row--){
        if(!gameBoard[row][col]){
            gameBoard[row][col] = currentPlayer;
            updateBoard();
        }
    }
}
function updateBoard(){
    gameBoard.querySelectorAll(".cell").forEach(cell => {
        const {row, col} = cell.dataset;
        cell.classList.remove("red", "yellow");
        if(gameBoard[row][col])cell.classList.add(gameBoard[row][col]);
    })
}
init();