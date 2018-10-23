document.addEventListener("DOMContentLoaded", function() {

    let btnAddSquare = document.createElement('button');
    let btnAddSquareText = document.createTextNode("Add Square");

    btnAddSquare.style.margin = '2em';
    
    btnAddSquare.appendChild(btnAddSquareText);
    document.body.appendChild(btnAddSquare);

    btnAddSquare.addEventListener('click', function() {
        let squareContainer = document.createElement('div');

        let squareRow1 = document.createElement('div');

        let squareBlack = document.createElement('div');
        squareBlack.style.height = '100px';
        squareBlack.style.width = '100px';
        squareBlack.style.backgroundColor = 'black';
        
        squareRow1.appendChild(squareBlack);
        squareContainer.appendChild(squareRow1);
        document.body.appendChild(squareContainer);
    });

});