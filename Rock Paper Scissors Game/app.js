let userScore = 0;
let comScore = 0;

const clicks = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComps = () => {
    const option = ["rock", "paper", "sciccsors"]
    //rock,paper.scissors; random no. generate karne k lye math.random();
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];

};
const showWinner = (userWin, choiceId, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Your ${choiceId} beats computer's ${compChoice} You Win!`;
        msg.style.background = "green";

    } else {
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `Computer's ${compChoice} beats your ${choiceId} You Lose!`;
        msg.style.background = "red";

    };

}

const playGame = (choiceId) => {
    console.log("user choice = ", choiceId);
    //Generate Comps Choice;
    const compChoice = genComps();
    console.log("computer choice is ", compChoice);

    if (choiceId === compChoice) {  
        Draw();

    } else {
        let userWin = true;
        if (choiceId === "rock" && compChoice === "sciccsors") {
            userWin = true;
        } else if (choiceId === "rock" && compChoice === "paper") {
            userWin = false;
        } else if (choiceId === "paper" && compChoice === "rock") {
            userWin = true;
        } else if (choiceId === "sciccsors" && compChoice === "rock") {
            userWin = false;
        } else if (choiceId === "sciccsors" && compChoice === "paper") {
            userWin = true;
        } else if (choiceId === "paper" && compChoice === "sciccsors") {
            userWin = false;
        };
        showWinner(userWin, choiceId, compChoice);
    }
}
clicks.forEach((choice) => {
    // console.log(clicks);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id"); // ye attribute bas esahi lagaya hai
        // console.log("clicked", choiceId);
        playGame(choiceId);
    });
})
const Draw = () => {
    msg.innerText = `The Game was Draw! because ${choiceId} = ${compChoice}`;
    msg.style.background = "yellow";
}