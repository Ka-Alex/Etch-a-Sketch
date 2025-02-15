const container = document.querySelector('#container');

//Loop to create successive rows
for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.setAttribute('id', 'row'+i);
    row.classList.add('row');
    container.appendChild(row);

    //Loop to create suucessive items
    for (let j = 0; j < 16; j++) {
        let item = document.createElement('div');
        item.setAttribute('id', 'item'+j);
        item.classList.add('item', 'item');
        row.appendChild(item);
    }
}