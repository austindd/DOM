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
    /*
    document.getElementsByTagName('H1').className = 'h1';
    console.log(document.getElementsByTagName('H1').className);
    document.getElementsByTagName('H2').className = 'h2';
    document.getElementsByTagName('H3').className = 'h3';
    document.getElementsByTagName('H4').className = 'h3';
    document.getElementsByTagName('H5').className = 'h4';
    document.getElementsByTagName('H6').className = 'h5';
    */

    header1.className = 'h1';
    header2.className = 'h2';
    header3.className = 'h3';
    header4.className = 'h4';
    header5.className = 'h5';
    header6.className = 'h6';


});