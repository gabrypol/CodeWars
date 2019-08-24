// https://www.codewars.com/kata/sum-mixed-array/

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    let sum = 0;
    for (element of x) {
      sum += parseInt(element);
    }
    return sum;
  }

console.log(sumMix([1, '5', 3, '2']));