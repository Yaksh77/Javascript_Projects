// Initialize feather icons
feather.replace();

// Select DOM elements

const goalAmount = document.querySelector("#goal-amount");
const currentSaving = document.querySelector("#current-savings");
const monthlyContribution = document.querySelector("#monthly-contribution");
const calculateBtn = document.querySelector("#calculate-btn");
const progressBar = document.querySelector("#progress-barID");
const result = document.querySelector("#result");

// Add event listener for calculate button

calculateBtn.addEventListener("click",()=>{
    const goalAmountVal = parseFloat(goalAmount.value);
    const currentSavingVal = parseFloat(currentSaving.value);
    const monthlyContributionVal = parseFloat(monthlyContribution.value);

    if(isNaN(goalAmountVal || currentSavingVal || monthlyContributionVal)){
        result.textContent = "Please enter valid amount....";
        result.classList.add("show");
        return;
    }

    const remainingAmount = goalAmountVal - currentSavingVal;
    const monthsToGoal = Math.ceil(remainingAmount / monthlyContributionVal);
    const progressPercentage = (currentSavingVal / goalAmountVal) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    result.classList.remove("show");
    setTimeout(()=>{
        if(currentSavingVal >= goalAmountVal){
            result.innerHTML = `Congratulations! You have reached your goal`;
            result.classList.add("show");
        }else{
            result.innerHTML = `Keep grind for savings! Your goal will be achieved in ${monthsToGoal} months`;
            result.classList.add("show");
        }
    },100);
});