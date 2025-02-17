'use strict'
let userInput = 16;

let container = document.querySelector('#container');


const changeColor = (e) => {
    
    console.log(e);
    
    e.target.style.backgroundColor = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
}   

createGrid();

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
   
    do {
        userInput = parseInt(prompt('Enter the size of the grid (between 2 and 100)'));
        console.log(userInput);
        
    } while ((isNaN(userInput)) || (userInput > 100 || userInput < 2))

    container.remove();
    container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    createGrid(userInput);
});

function createGrid(userInput = 16) {
    
    //Loop to create successive rows
for (let i = 0; i < userInput; i++) {
    let row = document.createElement('div');
    row.setAttribute('id', 'row'+i);
    row.classList.add('row');
    container.appendChild(row);

    //Loop to create suucessive items
    for (let j = 0; j < userInput; j++) {
        let item = document.createElement('div');
        item.setAttribute('id', 'item'+j);
        item.classList.add('item', 'item');
        item.addEventListener('mouseover', changeColor);
        row.appendChild(item);
    }
}
}

