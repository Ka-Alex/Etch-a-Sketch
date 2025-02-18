'use strict'
//Variables declarations
let userInput = 16;
let container = document.querySelector('#container');
const resizeGridButton = document.querySelector('#resizeGridButton');
const clearGridButton = document.querySelector('#clearGridButton');

resizeGridButton.addEventListener('click', () => {
//values input by user authorized between 2 and 100
do {
    userInput = prompt('Enter the size of the grid (between 2 and 100)');

//case NaN : ends function execution
if(isNaN(userInput)) {
    return;
}
userInput = parseInt(userInput);

//test if value input is strictly an integer (no floats)
if(Number.isInteger(userInput) === false) {
    return;
  } else {
    userInput = parseInt(userInput);
    container.remove();
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    createGrid(userInput);
  }

} while ((userInput > 100 || userInput < 2))
});

clearGridButton.addEventListener('click', () => {
    let items= document.querySelectorAll('.item');
    items.forEach(element => {
        element.removeAttribute('style');
    });
});


const changeColor = (e) => {
    e.target.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
}

function createGrid(userInput = 16) {

    //Loop to create successive rows
    for (let i = 0; i < userInput; i++) {
        let row = document.createElement('div');
        row.setAttribute('id', 'row' + i);
        row.classList.add('row');
        container.appendChild(row);

        //Loop to create suucessive items
        for (let j = 0; j < userInput; j++) {
            let item = document.createElement('div');
            item.setAttribute('id', 'item' + j);
            item.classList.add('item', 'item');
            item.addEventListener('mouseover', changeColor);
            row.appendChild(item);
        }
    }
}

createGrid();

