let boxes = document.querySelectorAll(".box");
let resetBtn1 = document.querySelector("#reset-btn");
let resetScore = document.querySelector("#reset-score");
//let resetBtn2 = document.querySelector("#reset-btn");
let turn = document.querySelector("#turn");
let p1 = document.querySelector("#p1"); 
let p2 = document.querySelector("#p2"); 
// let score = document.querySelector("#score");
// let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //player 1, palyer 2 

let score1 = 0;
let score2 = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winner is ${winner}`;
     disableBoxes();
};

const checkTie = (count) => {
    if ( count === 9) {
    boxes.forEach((box) => {
        if (box.innerText != "") {
            msg.innerText = "It is a Tie";
            setTimeout(() => {
                // resetBtn2.click();
                resetGame2();
            }, 5000)
             }
        });
    }
}
const checkWinner = (count) => {
    for(pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner");
                let winner = "None";
                if (pos1Val === "X") {
                     winner = "Player2";
                     score2++;
                     console.log(score2);
                } else {
                    winner = "Player1";
                    score1++;
                    
                }
                // score.innerText = `Score Board\nPlayer 1 : ${score1}\nPlayer 2 : ${score2}`;
                p1.innerText = `Player 1 : ${score1}`;
                p2.innerText = `Player 2 : ${score2}`;
                showWinner(winner);
                localStorage.setItem("Player1", score1);
                localStorage.setItem("Player2", score2);
            }
        }
        if (score1 > score2) {
            p1.style.color = "green";
            p2.style.color = "red";
         } else if (score2 > score1) {
             p2.style.color = "green";
             p1.style.color = "red";
         } else {
             p2.style.color = "#fff";
             p1.style.color = "#fff";
         }
    }
};

const resetGame1 = () => {
    if(confirm('Are you sure to Reset?')) {
    turnO = true;
    count = 0;
    msg.innerText = "Continue Playing";
    turn.innerText = "Turn : Player 1";
    enableBoxes();
 }
};
const resetGame2 = () => {
    turnO = true;
    count = 0;
    msg.innerText = "Continue Playing";
    turn.innerText = "Turn : Player 1";
    enableBoxes();
};
const resetTheScore = () => {
    location.reload();
}
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box clicked");
        count++;
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
        checkWinner(count);
        checkTie(count);
        // console.log(count);
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    setTimeout(() => {
        resetGame2();
    }, 5000)
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
resetBtn1.addEventListener("click", resetGame1);
resetScore.addEventListener("click", resetTheScore);
//let = resetBtn2.addEventListener("click", resetGame2);
