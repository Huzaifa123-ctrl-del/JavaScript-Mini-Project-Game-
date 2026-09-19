let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#Reset-btn");
let gameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let para = document.querySelector("#msg");

let turnO = true; //playerO ,playerX;

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
const resetGame = () => {
    turnO = true;
    enable();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false
        } else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;

        checkWinner();


    })
});
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    para.innerText = `the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
}
const checkWinner = () => {
    for (let patterns of winPatterns) {
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]])
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1)
                showWinner(pos1);
            }
        }
    }
};
gameBtn.addEventListener("click",resetGame);
resbtn.addEventListener("click",resetGame);