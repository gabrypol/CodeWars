// https://www.codewars.com/kata/string-transformer/

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

function stringTransformer(str) {
    let arrChars = str.split('');
    let newArr = [];
    arrChars.forEach(element => {
        let elementChanged;
        if(element.toUpperCase() === element) {
            elementChanged = element.toLowerCase();
        } else if (element.toLowerCase() === element) {
            elementChanged = element.toUpperCase();
        }
        newArr.push(elementChanged);
    });
    let newString = newArr.join('');
    newString = newString.split(' ').reverse().join(' ');
    return newString;
}

console.log(stringTransformer('Aa bB'));



  // node stringTransformer.js