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
    grid.innerHTML = '';
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 2fr)`);
    console.log(`repeat(${userInput.value}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 2fr)`);

    for (let i = 0; i < userInput.value*userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}

const square = document.querySelector("div.container");
square.addEventListener("mouseover", function(event) {
    event.target.classList.replace("square", "color");
    console.log('hi');
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns", `repeat(${userInput.value}, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(${userInput.value}, 2fr)`);
    updateGrid();
  });


createGrid();

