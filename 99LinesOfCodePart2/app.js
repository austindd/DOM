var friends = ['Daniel','Joel','Kate','Garrett','Natalie'];


for (let f = 0; f < friends.length; ++f) {
    let i = 99
    while(i > 0) {
        console.log(i,'lines of code in the file,',i,'lines of code;',friends[f],'strikes one out, clears it all out,',i-1,'lines of code in the file.')
        --i;
    }
}

console.log('End Program')