
const Gameboard = (() => {
    const board = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
    const boardDiv = [].slice.call(document.querySelector("#gameGrid").children);

    (boardDiv).forEach((div) => div.addEventListener('click', () => {
        update(div.id, turn);
        checkWin();
        div.innerHTML = turn;
        if(turn === "x")
            turn = "o";
        else
            turn = "x";
    }));

    let turn = "x";

    const update = (a, b) => {
        a -= 1;
        board[Math.floor(a / 3)][a % 3] = b;
    }

    const checkWin = () => {
        for(let rowCol = 0; rowCol <= 2; rowCol++) {
            if(board[rowCol][0] === board[rowCol][1] && board[rowCol][1] === board[rowCol][2] && board[rowCol][0] != '_'){
                console.log("win");
            }
            if(board[0][rowCol] === board[1][rowCol] && board[1][rowCol] === board[2][rowCol] && board[0][rowCol] != '_'){
                console.log("verticalWin");
            }
        }
        if(board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] != "_") {
            console.log("diagnal win");
        }

        if(board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[1][1] != "_") {
            console.log("other diagnal win");
        }
    }

    const reset = () => { 
        boardDiv.forEach((div) => div.innerHTML = "");
    }

    return {
        board,
        boardDiv,
        update,
        reset
    }
})();

const DisplayControl = (() => {
    const display = "";
    return {
        display
    }
})();

const player = () => {

    const wins = 0;

    const addWin = () => wins++;

};


console.log(Gameboard.board);
console.log(Gameboard.boardDiv);

const player1 = player();
const player2 = player();

Gameboard.reset();
