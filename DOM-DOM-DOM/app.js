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


    // Defining helper variables here to keep the code cleaner
    let squareCount = 0;                    // Keeps track of total number of squares in html document.

    // Add event listener to button. Anonymous function creates squares.
    btnAddSquare.addEventListener('click', function() {

        squareCount = squareCount + 1;

        // Defining helper variables for the function.
        let squareHtmlIDPrefix = 'square';      // Used for html ID.
        let tooltipHtmlIDPrefix = 'tooltip';    // Used for html ID.
        let squareNumberPrefix = 'Square ';     // Used for display text.

        // Create square object template.
        let square = {
            element: document.createElement('div'),
            number: squareCount,
            tooltip: {
                element: document.createElement('div'),
                text: squareNumberPrefix += squareCount,
            }
        };

        square.element.appendChild(square.tooltip.element);

        console.log(squareCount);

        // Assign html class and ID to the square and tooltip elements.
        square.element.className = 'square-black';
        square.element.id = squareHtmlIDPrefix += squareCount;
        square.tooltip.className = 'tooltip';
        square.tooltip.element.id = tooltipHtmlIDPrefix += squareCount;

        // Style square element.
        square.element.style.height = '100px';
        square.element.style.width = '100px';
        square.element.style.backgroundColor = 'black';
        square.element.style.border = '1px solid darkgrey';

        // Add square to document.
        squareContainer.appendChild(square.element);

        // Style tooltip element.
        square.tooltip.element.innerHTML = "Test";
        square.tooltip.element.style.position = 'absolute';
        square.tooltip.element.style.display = 'none';
        // square.tooltip.element.style.height = '20px';
        // square.tooltip.element.style.width = '90 px';
        // square.tooltip.element.style.backgroundColor = 'lightgrey';
        square.tooltip.element.style.color = 'white';
        square.tooltip.element.style.border = '1px solid mediumseagreen';

        // Add event listener to square for hover text. Anonymous function displays tooltip.
        square.element.addEventListener('mouseenter', function(e) {
            console.log("Mouse Enter: ", square.tooltip.text);
            square.tooltip.element.style.display = 'inline-block';
            // square.tooltip.element.style.position = 'absolute';
        });

        square.element.addEventListener('mouseout', function(e) {
            console.log("Mouse Out: ", square.tooltip.text);
            square.tooltip.element.style.display = 'none';
            // square.tooltip.element.style.position = 'absolute';
        });

    });

});