let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");
const userSc = document.querySelector("#userscore");
const compSc = document.querySelector("#computerscore");


const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userSc.innerText = userScore;
        result.innerText = `${userChoice} is win over ${compChoice}`;
       result.style.backgroundColor = "green";
    }else{
        compScore++;
        compSc.innerText = compScore;
        result.innerText = `${compChoice} is win over ${userChoice}`;
        result.style.backgroundColor = "#BB3F3F";
    }
}

const gernerateCompChoice = () =>{
    const patterns = ["rock","paper","scissor"];
    const rmdIdx = Math.floor(Math.random()*3);
    return patterns[rmdIdx];
}

const playGame = (userChoice)=>{
    console.log("User choice :", userChoice); 
    let compChoice = gernerateCompChoice();
    console.log("Computer Choice :", compChoice);
    
    if(compChoice === userChoice){
        result.innerText = "Game Draw. Play Again.";
        result.style.backgroundColor = "gray";
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("Clicked",id);
        playGame(userChoice);
    })
})
