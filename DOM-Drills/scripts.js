document.addEventListener("DOMContentLoaded", function() {
    
    // header container
    let headerContainer = document.createElement('div');
    
    // h1 created
    let header1 = document.createElement('h1');
    let header1Text = document.createTextNode("This is an h1");
    header1.appendChild(header1Text);
    headerContainer.appendChild(header1);

    // h2 created
    let header2 = document.createElement('h2');
    let header2Text = document.createTextNode("This is an h2");
    header2.appendChild(header2Text);
    headerContainer.appendChild(header2);

    // h3 created
    let header3 = document.createElement('h3');
    let header3Text = document.createTextNode("This is an h3");
    header3.appendChild(header3Text);
    headerContainer.appendChild(header3);

    // h4 created
    let header4 = document.createElement('h4');
    let header4Text = document.createTextNode("This is an h4");
    header4.appendChild(header4Text);
    headerContainer.appendChild(header4);

    // h5 created
    let header5 = document.createElement('h5');
    let header5Text = document.createTextNode("This is an h5");
    header5.appendChild(header5Text);
    headerContainer.appendChild(header5);

    // h6 created
    let header6 = document.createElement('h6');
    let header6Text = document.createTextNode("This is an h6");
    header6.appendChild(header6Text);
    headerContainer.appendChild(header6);

    document.body.appendChild(headerContainer);

    // class names
    header1.className = 'h1';
    header2.className = 'h2';
    header3.className = 'h3';
    header4.className = 'h4';
    header5.className = 'h5';
    header6.className = 'h6';

    let ColorArray = ['coral', 'blue', 'cadetblue', 'darkmagenta', 'green', 'goldenrod', 'mediumvioletred', 'navy'];


    // DOUBLECLICK HEADER TO CHANGE COLOR
    for (let i = 0; i < headerContainer.childNodes.length; i++) {

        headerContainer.childNodes[i].addEventListener("dblclick", function() {
            console.log("Header", i+1, "Clicked");
            headerContainer.childNodes[i].style.color = ColorArray[Math.floor(Math.random() * 8)];
        });
    };


    // ALTERNATE SOLUTION (BRUTE FORCE)

    /*
    header1.addEventListener("dblclick", function() {
        console.log("Header 1 Clicked")
        header1.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    header2.addEventListener("dblclick", function() {
        console.log("Header 2 Clicked")
        header2.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    header3.addEventListener("dblclick", function() {
        console.log("Header 3 Clicked")
        header3.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    header4.addEventListener("dblclick", function() {
        console.log("Header 4 Clicked")
        header4.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    header5.addEventListener("dblclick", function() {
        console.log("Header 5 Clicked")
        header5.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    header6.addEventListener("dblclick", function() {
        console.log("Header 6 Clicked")
        header6.style.color = ColorArray[Math.floor(Math.random() * 8)];
    });
    */



    

    // BUTTON INSERTS LIST ITEM
    // Had issues with calling a stand-alone function to create lists.
    // Had to place the function inside the event listener section for it to work properly.

    let listButton = document.getElementsByClassName('list-button');
    
    let listContainer = document.createElement('div');
    
    let listNumber = 0      // variable will correspond to list number and concatenate into the list text.

    for(let i = 0; i < listButton.length; i++) {

        console.log("Button Event Listener Added");
        listButton[i].addEventListener("click", function(){
        
            console.log("Create List Item");

            let listItem = document.createElement('li');

            // Creating a string for the list text
            let text = "This is list item ";
            text += listNumber+1;
            let listItemText = document.createTextNode(text);
            
            listItem.appendChild(listItemText);
            listContainer.appendChild(listItem);
            document.body.appendChild(listContainer);

            listNumber = listNumber + 1;
            console.log(listNumber);

            for (let i = 0; i < listContainer.childNodes.length; i++) {

                listContainer.childNodes[i].addEventListener("click", function() {
                    console.log("List", i+1, "Clicked");
                    listContainer.childNodes[i].style.color = ColorArray[Math.floor(Math.random() * 8)];
                });
            };
        
            for (let i = 0; i < listContainer.childNodes.length; i++) {
                listContainer.childNodes[i].addEventListener("dblclick", function() {
                    console.log("Remove List Item")
                    listContainer.removeChild(listContainer.childNodes[i]);
                    listNumber = listNumber - 1;
                });
            };

        });
    };

});
