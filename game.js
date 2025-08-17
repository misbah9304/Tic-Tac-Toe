let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newbtn = document.querySelector('#new-btn');
let para = document.querySelector('#new');
let newContainer = document.querySelector('.new-container');

let turn0 = true;

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

alert('Are you ready to play the Game!!');

const resetgame = () => {
    turn0 = true;
    enablebtns();
    newContainer.classList.add('hide');

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = 'O';
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});




const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
}
const enablebtns = () => {
    for (let box of boxes) {
        box.innerText = '';
        box.disabled = false;
    }
}

const showinner = (winner) => {
    para.innerText = `Congratulations, the winner is ${winner}`
    newContainer.classList.remove('hide');
    disablebtns();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 === pos2 && pos2 === pos3) {
                boxes.disabled = true;
                showinner(pos1);

            }
        }
    }
}


newbtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);


