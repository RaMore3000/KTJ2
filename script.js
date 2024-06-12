let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turn = document.querySelector("#turn");
// let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //player 1, palyer 2 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winner is ${winner}`;
     disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner");
                let winner = "Player1";
                if (pos1Val === "X") {
                     winner = "Player2";
                }
                showWinner(winner);
            } else if (box.innerText === "") {

            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    msg.innerText = "Continue Playing";
    turn.innerText = "Turn : Player 1";
    enableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
            turn.innerText = "Turn : Player 2";
        } else {
            box.innerText = "X"
            turnO = true;
            turn.innerText = "Turn : Player 1";
        }
        box.disabled = true;
        checkWinner();
        
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


// reset Game
// newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
