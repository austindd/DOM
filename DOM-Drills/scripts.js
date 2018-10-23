document.addEventListener("DOMContentLoaded", function() {
    
    // header container
    let headerContainer = document.createElement('div');
    
    // h1 created
    let header1 = document.createElement('h1');
    let header1Text = document.createTextNode("This is an h1");

    header1.appendChild(header1Text);
    headerContainer.appendChild(header1);
    document.body.appendChild(headerContainer);

    // h2 created
    let header2 = document.createElement('h2');
    let header2Text = document.createTextNode("This is an h2");

});