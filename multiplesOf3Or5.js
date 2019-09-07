// https://www.codewars.com/kata/multiples-of-3-or-5/

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    let multiplesOf3Or5 = [];
    for( let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiplesOf3Or5.push(i);
        }
    }

    let sum;
    if (number <= 3) {
        sum = 0;
    } else {
        sum = multiplesOf3Or5.reduce((a,b) => a+b);
    }
    
    return sum;
}

console.log(solution(2))
console.log(solution(3))
console.log(solution(5))
console.log(solution(13))

