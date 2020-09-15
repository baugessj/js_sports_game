let shotsTakenOne = document.querySelector("#teamone-numshots");
let shotsTakenTwo = document.querySelector("#teamtwo-numshots");
let buttonOne = document.querySelector("#teamone-shoot-button");
let buttonTwo = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");
let numOneGoals = document.querySelector("#teamone-numgoals");
let numTwoGoals = document.querySelector("#teamtwo-numgoals");

buttonOne.addEventListener("click", function(){
    let shotValueOne = Number(shotsTakenOne.innerHTML) + 1;
    shotsTakenOne.innerHTML = shotValueOne;
    if (Math.random() * 100 < 50) {
        let numOneGoalsAdd = Number(numOneGoals.innerHTML) + 1;
        numOneGoals.innerHTML = numOneGoalsAdd;
    }
    let pew = document.querySelector("audio");
    pew.play();
}
)

buttonTwo.addEventListener("click", function(){
    let shotValueTwo = Number(shotsTakenTwo.innerHTML) + 1;
    shotsTakenTwo.innerHTML = shotValueTwo;
    if(Math.random() * 100 < 50){
        let numTwoGoalsAdd = Number(numTwoGoals.innerHTML) + 1;
        numTwoGoals.innerHTML = numTwoGoalsAdd;
    }
    let pew = document.querySelector("audio");
    pew.play();
}
)

resetButton.addEventListener("click", function(){
    numOneGoals.innerHTML = 0;
    numTwoGoals.innerHTML = 0;
    shotsTakenOne.innerHTML = 0;
    shotsTakenTwo.innerHTML = 0;
    let numberOfResets = document.querySelector("#num-resets");
    let numberOfResetsAdd = Number(numberOfResets.innerHTML) + 1;
    numberOfResets.innerHTML = numberOfResetsAdd;

}
)