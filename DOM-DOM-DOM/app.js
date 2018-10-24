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

    let squareCount = 0; // Starts at 0. +1 when square is added. Used for square ID.
    let squareHtmlIDPrefix = 'square-black-';
    let squareNumberPrefix = 'Square ';

    // Add event listener to button. Anonymous function creates squares.
    btnAddSquare.addEventListener('click', function() {

        squareCount = squareCount + 1;

        // Create square object.
        let square = {
            element: document.createElement('div'),
            htmlID: squareHtmlIDPrefix += squareCount,
            number: squareCount,
            tooltip: {
                element: document.createElement('div'),
                text: squareNumberPrefix += squareCount,
            }
        };


        // Create black square.
        let squareBlock = document.createElement('div');
        let squareID = squareIDPrefix += squareCount; // Concat square counter to string for square ID.
        squareBlock.id = squareID;

        // Style black square.
        squareBlock.style.height = '100px';
        squareBlock.style.width = '100px';
        squareBlock.style.backgroundColor = 'black';
        squareBlock.style.border = '1px solid darkgrey';
        squareBlock.className = 'square-black';

        // Add square to document.
        squareContainer.appendChild(squareBlock);

        // Create tooltip for square.
        let tooltipContainer = document.createElement('div');
        let tooltipContainerIDPrefix = 'tooltip-container';
        tooltipContainer.id = tooltipContainerIDPrefix += squareCount; // Concat square counter to string for tooltip container ID.
        tooltipContainer.style.position = 'relative';
        tooltipContainer.style.display = 'hidden';
        tooltipContainer.style.backgroundColor = 'lightgrey';
        tooltipContainer.style.border = '1px solid mediumseagreen';

        // Tooltip text
        let tooltipTextPrefix = 'Square # ';
        let tooltipText = tooltipTextPrefix += squareCount;

        // Create Object for each square

        // Add event listener to square for hover text. Anonymous function displays tooltip.
        squareBlock.addEventListener('mouseover', function(e) {
            console.log("Mouseover: ", );
            tooltipContainer.style.display = 'block';
        });

    });

});