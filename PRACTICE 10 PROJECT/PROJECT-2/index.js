let totalAttempsts = 5;
let attemps = 0;
let totalWons = 0;
let totallosts = 0;


const form = document.querySelector("#form");
const cardbody = document.querySelector(".card-body");
const gessuingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardbody.querySelector(".resultText");
const lostWonMessages = document.createElement("p");
const remainingAttempts = cardbody.querySelector(".remainingAttempts")


form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    attemps++;
    if(attemps === 5){
        gessuingNumber.disabled = true
        checkButton.disabled = true
    }
    if(attemps < 6){
        let guessNumber = Number(gessuingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts ${totalAttempsts - attemps}`;
        gessuingNumber.value = "";
    }
});

function checkResult(gessuingNumber){
    const randomNumber = getRandomNumber(1000);
    if (gessuingNumber === getRandomNumber ) {
        resultText.innerHTML = `You have won`;
        totalWons++;
    } else {
        resultText.innerHTML = `You have lost.
         random number was: ${randomNumber}`;
        totallosts++;
    }
    lostWonMessages.innerHTML = `Won: ${totalWons}, Lost: ${totallosts}`;
    lostWonMessages.classList.add("large-text");
    cardbody.appendChild(lostWonMessages);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}