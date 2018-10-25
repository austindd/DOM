
document.addEventListener("DOMContentLoaded", function() {

    // CREATE the element (and text node in this case)
    let paragraph = document.createElement('p');
    let text = document.createTextNode('This can be whatever text you would like it to be.');
    //

    // MODIFY the element
    paragraph.style.color = 'red';
    paragraph.style.textTransform = 'uppercase';
    paragraph.className = "some paragraph";
    //

    // INSERT the element
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
    //

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me!');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode("I've been clicked!");
        h1.appendChild(h1Text);
        document.body.appendChild(h1);

    })

});

let red1 = Math.floor(Math.random() * 16).toString(16);
let red2 = Math.floor(Math.random() * 16).toString(16);
let green1 = Math.floor(Math.random() * 16).toString(16);
let green2 = Math.floor(Math.random() * 16).toString(16);
let blue1 = Math.floor(Math.random() * 16).toString(16);
let blue2 = Math.floor(Math.random() * 16).toString(16);
let newColor = red1 += red2 += green1 += green2 += blue1 += blue2;

console.log(newColor);

