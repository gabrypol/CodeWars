// https://www.codewars.com/kata/find-the-odd-int/

// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


function findOdd(arr) {
    let prev;
    let arrElement = [];
    let arrOccurences = [];
    arr.sort();
    arr.forEach(element => {
        if (element !== prev) {
            arrElement.push(element);
            arrOccurences.push(1);
        } else {
            arrOccurences[arrOccurences.length - 1]++;
        }
        prev = element;
    });

    let result;
    arrOccurences.forEach((element, index) => {
        if(element % 2 !== 0) {
            result = arrElement[index];
        }
    });
    return result;
}

console.log(findOdd([ 20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5 ]))