document.addEventListener('DOMContentLoaded', function() {

let mainContainer = document.createElement('div');
mainContainer.id = 'main-container';

let btnSing = document.createElement('button');
let btnSingText = document.createTextNode('Sing!');
btnSing.style.margin = '1em';
btnSing.style.width = '8em';
btnSing.style.height = '4em';

btnSing.appendChild(btnSingText);
mainContainer.appendChild(btnSing);
document.body.appendChild(mainContainer);

// DANIEL
let daniel = document.createElement('div');
daniel.className = 'friend';
let danielName = document.createElement('h3');
let danielNameText = document.createTextNode('Daniel');
danielName.appendChild(danielNameText);
daniel.appendChild(danielName);
mainContainer.appendChild(daniel);

// JOEL
let joel = document.createElement('div');
joel.className = 'friend';
let joelName = document.createElement('h3');
let joelNameText = document.createTextNode('Joel');
joelName.appendChild(joelNameText);
joel.appendChild(joelName);
mainContainer.appendChild(joel);

// KATE
let kate = document.createElement('div');
kate.className = 'friend';
let kateName = document.createElement('h3');
let kateNameText = document.createTextNode('Kate');
kateName.appendChild(kateNameText);
kate.appendChild(kateName);
mainContainer.appendChild(kate);

// GARRETT
let garrett = document.createElement('div');
garrett.className = 'friend';
let garrettName = document.createElement('h3');
let garrettNameText = document.createTextNode('Garrett');
garrettName.appendChild(garrettNameText);
garrett.appendChild(garrettName);
mainContainer.appendChild(garrett);

// NATALIE
let natalie = document.createElement('div');
natalie.className = 'friend';
let natalieName = document.createElement('h3');
let natalieNameText = document.createTextNode('natalie');
natalieName.appendChild(natalieNameText);
natalie.appendChild(natalieName);
mainContainer.appendChild(natalie);


let friendsNameTextArray = ['Daniel','Joel','Kate','Garrett','Natalie'];
let friendsNodeArray = [daniel, joel, kate, garrett, natalie];

btnSing.onclick = function() {
    for (let f = 0; f < friendsNodeArray.length; f++) {
        let i = 99
        while(i > 1) {
            let line = document.createElement('p');
            let lineText = document.createTextNode(`${i} lines of code in the file, ${i} lines of code. ${friendsNameTextArray[f]} strikes one out, clears it all out, ${i-1} lines of code in the file.`);
            line.appendChild(lineText);
            friendsNodeArray[f].appendChild(line);
            i = i - 1;
        };
        if (i == 1) {
            let line = document.createElement('p');
            let lineText = document.createTextNode(`${i} line of code in the file, ${i} line of code. ${friendsNameTextArray[f]} strikes it out, clears it all out, no more lines of code in the file.`);
            line.appendChild(lineText);
            friendsNodeArray[f].appendChild(line);
            i = i - 1;
        };
    };
    
    console.log('End Program')
};







});