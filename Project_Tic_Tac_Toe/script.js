let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector(".newGame");
let winnerMsg = document.querySelector(".winner");
let turn = true;
let count = 0;

let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const drawGame = ()=>{
    if(count === 9){
        newGameBtn.classList.remove("hide");
        resetBtn.classList.add("hide");
        winnerMsg.classList.remove("hide");
        winnerMsg.innerText = "Match Draw...";
    }
}
const resetGame = ()=>{
    turn = true;
    enableBox();
    winnerMsg.classList.add("hide");
    newGameBtn.classList.add("hide");
    resetBtn.classList.remove("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "O";
            box.style.color = "green";
            turn = false;
            count++;
        } else{
            box.innerText = "X";
            box.style.color = "black";
            turn = true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        drawGame();
    });
});

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    winnerMsg.innerText = "Winner is " + winner;
    winnerMsg.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableBox();
}

const checkWinner = ()=>{
    for(let patterns of winningPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
               showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
