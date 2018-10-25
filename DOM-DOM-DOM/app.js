document.addEventListener("DOMContentLoaded", function() {

    // Create button to add squares to screen.
    let btnAddSquare = document.createElement('button');
    let btnAddSquareText = document.createTextNode("Add Square");
    btnAddSquare.style.margin = '3em';
    btnAddSquare.style.borderRadius = '0.25em';
    btnAddSquare.appendChild(btnAddSquareText);
    document.body.appendChild(btnAddSquare);

    // Set up square container with flex and wrap properties.
    let squareContainer = document.createElement('div');
    squareContainer.className = 'square-container flex-container';
    squareContainer.style.display = 'flex';
    squareContainer.style.flexWrap = 'wrap';
    document.body.appendChild(squareContainer);


    let squareCount = 0;        // Keeps track of total number of squares in html document.

    // Add event listener to button. Anonymous function creates squares.
    btnAddSquare.addEventListener('click', function() {

        squareCount = squareCount + 1; // Adding a new square!!!

        // Defining helper variables for the function.
        let squareHtmlIDPrefix = 'square';      // Used for html ID.
        let tooltipHtmlIDPrefix = 'tooltip';    // Used for html ID.
        let squareNumberPrefix = 'Square ';     // Used for display text.

        // CREATE SQUARE OBJECT WITH HOVER TEXT.
        let square = {
            element: document.createElement('div'),
            number: squareCount,
            tooltip: {
                element: document.createElement('div'),
                text: squareNumberPrefix += squareCount,
            }
        };
        square.element.appendChild(square.tooltip.element);

        console.log('Square Count: ', squareCount);

        // Assign html class and ID to the square and tooltip elements.
        square.element.className = 'square-black';
        square.element.id = squareHtmlIDPrefix += squareCount;
        square.tooltip.className = 'tooltip';
        square.tooltip.element.id = tooltipHtmlIDPrefix += squareCount;

        // SQUARE STYLE
        square.element.style.height = '100px';
        square.element.style.width = '100px';
        square.element.style.backgroundColor = 'black';
        square.element.style.border = '1px solid darkgrey';

        // Add square to document.
        squareContainer.appendChild(square.element);

        // TOOLTIP STYLE
        square.tooltip.element.innerHTML = square.tooltip.text;
        square.tooltip.element.style.position = 'absolute';
        square.tooltip.element.style.display = 'none';
        square.tooltip.element.style.height = 'fit-content';
        square.tooltip.element.style.width = 'fit-content';
        square.tooltip.element.style.color = 'white';
        square.tooltip.element.style.border = '2px solid white';
        square.tooltip.element.style.borderRadius = '.2em';

        // SQUARE ELEMENT EVENT LISTENERS
        square.element.addEventListener('mouseover', function(e) {
            square.tooltip.element.style.display = 'inline-block';
        });
        square.element.addEventListener('mouseout', function(e) {
            square.tooltip.element.style.display = 'none';
        });
        square.element.addEventListener('click', colorChangeRandom);

        square.element.addEventListener('dblclick', function () {        // Delete next square if even
            if (square.number % 2 == 0 && square.number != squareCount) {
                console.log("square.number Clicked: ", square.number);
                squareContainer.removeChild(this.nextSibling);
                squareCount = squareCount - 1;
                console.log('Square Count: ', squareCount);
    
            };
            if (square.number % 2 == 1 && square.number != 1) {          // Delete previous square if odd
                console.log("square.number Clicked: ", square.number);
                squareContainer.removeChild(this.previousSibling);
                squareCount = squareCount - 1;
                console.log('Square Count: ', squareCount);
            };
        });

        // TOOLTIP ELEMENT EVENT LISTENERS
        square.tooltip.element.addEventListener('mouseover', function(e) {
            square.tooltip.element.style.display = 'inline-block';
        });
        square.tooltip.element.addEventListener('mouseout', function(e) {
            square.tooltip.element.style.display = 'none';
        });
            
        // RANDOM COLOR CHANGE FUNCTION
        function colorChangeRandom(e) {
            console.log('Begin Color Change');
            let poundSign = '#'
            let red1 = Math.floor(Math.random() * 16).toString(16);
            let red2 = Math.floor(Math.random() * 16).toString(16);
            let green1 = Math.floor(Math.random() * 16).toString(16);
            let green2 = Math.floor(Math.random() * 16).toString(16);
            let blue1 = Math.floor(Math.random() * 16).toString(16);
            let blue2 = Math.floor(Math.random() * 16).toString(16);
            let newColor = poundSign += red1 += red2 += green1 += green2 += blue1 += blue2;
            square.element.style.backgroundColor = newColor;
            console.log('New Color: ', newColor);
            console.log(e);
        };

    }); // END BUTTON CLICK FUNCTION

}); // END DOMCONTENTLOADED FUNCTION