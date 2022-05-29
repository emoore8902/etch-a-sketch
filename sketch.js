const grid = document.querySelector('.grid');
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
    for (let i = 0; i < 256; i ++){
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
    }
}

updateGrid = () => {
    for (let i = 0; i < userInput * userInput; i ++) {

    }
}

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
});



createGrid();

