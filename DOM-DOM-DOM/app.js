document.addEventListener("DOMContentLoaded", function() {

    // Create button to add squares to screen.
    let btnAddSquare = document.createElement('button');
    let btnAddSquareText = document.createTextNode("Add Square");
    btnAddSquare.style.margin = '2em';
    btnAddSquare.appendChild(btnAddSquareText);
    document.body.appendChild(btnAddSquare);

    // Set up square container with flex and wrap properties.
    let squareContainer = document.createElement('div');
    squareContainer.className = 'square-container flex-container';
    squareContainer.style.display = 'flex';
    squareContainer.style.flexWrap = 'wrap';
    document.body.appendChild(squareContainer);

    let squareCounter = 0; // Starts at 0. +1 when square is added. Used for square ID.

    // Add event listener to button. Anonymous function creates squares.
    btnAddSquare.addEventListener('click', function() {

        squareCounter = squareCounter + 1;

        let squareBlack = document.createElement('div');
        squareBlack.style.height = '100px';
        squareBlack.style.width = '100px';
        squareBlack.style.backgroundColor = 'black';
        squareBlack.style.border = '1px solid darkgrey';
        squareBlack.className = 'square-black';
        let squareIDPrefix = 'square-black'
        let squareID = squareIDPrefix += squareCounter; // Concatenating counter to string for square ID.
        squareBlack.id = squareID;

        squareContainer.appendChild(squareBlack); // Add square to document.

        let tooltipContainer = document.createElement('div');
        tooltipContainer.style.position = 'relative';
        

    });

});