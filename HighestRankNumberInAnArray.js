// https://www.codewars.com/kata/highest-rank-number-in-an-array/

/*
Write a method highestRank(arr) (or highest-rank in clojure) which returns the number which is most frequent in the given input array (or ISeq). If there is a tie for most frequent number, return the largest number of which is most frequent.

Example:

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
highestRank(arr) //=> returns 12

arr = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];
highestRank(arr) //=> returns 3
*/

function highestRank(arr){
    let obj = {};
    // arr.map(number => obj[number] = (obj[number] ? obj[number] + 1 : 1));
    arr.map(number => obj[number] = (obj[number] ? obj[number] + 1 : 1));

    let mostFrequentNumberOccurrences = 0;
    let mostFrequentNumber;
    for (let num in obj) {
        num = num * 1;
        if (obj[num] >= mostFrequentNumberOccurrences) {
            mostFrequentNumberOccurrences = obj[num];
            mostFrequentNumber = num;
        }
    }
    
    return mostFrequentNumber;
}


console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
