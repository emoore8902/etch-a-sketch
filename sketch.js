const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 8;

createGrid(squareSize);

function createGrid(squareSize){
    for (let i = 0; i < gridSize; i ++){
        for (let j = 0; j < gridSize; j ++){
            grid.appendChild(createDiv(grid.clientWidth/gridSize));
        }
    }
}

function createDiv(size){
    const Div = document.createElement('div');
    Div.classList.add('box');
    Div.style.width = '${size}px';
    Div.style.height = '${size}px';
}

