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


var friends = ['Daniel','Joel','Kate','Garrett','Natalie'];

// DANIEL
let daniel = document.createElement('div');
daniel.className = 'friend';
let danielName = document.createElement('h3');
let danielNameText = document.createTextNode('Daniel');
// JOEL
let joel = document.createElement('div');
joel.className = 'friend';
let JoelName = document.createElement('h3');
let joelNameText = document.createTextNode('Joel');
// KATE
let kate = document.createElement('div');
kate.className = 'friend';
let kateName = document.createElement('h3');
let kateNameText = document.createTextNode('Kate');
// GARRETT
let garrett = document.createElement('div');
garrett.className = 'friend';
let garrettName = document.createElement('h3');
let garrettNameText = document.createTextNode('Garrett');
// NATALIE
let natalie = document.createElement('div');
natalie.className = 'friend';
let natalieName = document.createElement('h3');
let natalieNameText = document.createTextNode('natalie');




btnSing.onclick = function() {
    for (let f = 0; f < friends.length; ++f) {
        let i = 99
        while(i > 0) {
            console.log(i,'lines of code in the file,',i,'lines of code;',friends[f],'strikes one out, clears it all out,',i-1,'lines of code in the file.')
            --i;
        };
    };
    
    console.log('End Program')
};







});