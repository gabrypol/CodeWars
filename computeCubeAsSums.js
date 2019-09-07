// https://www.codewars.com/kata/compute-cube-as-sums/

/*
Can you compute a cube as a sum?

In this Kata, you will be given a number n (where n >= 1) and your task is to find n consecutive odd numbers whose sum is exactly the cube of n.

Mathematically:
cube = n ** 3
sum = a1 + a2 + a3 + ..... + an
sum == cube
a2 == a1 + 2, a3 == a2 + 2, .......

For example:

findSummands(3) = [7,9,11] // because 7 + 9 + 11 = 27, the cube of 3. Note that there are only n = 3 elements in the array.

Write function findSummands(n) which will return an array of n consecutive odd numbers with the sum equal to the cube of n (n*n*n).
*/

function findSummands(n){
    const square = n * n;
    const start = square - n + 1;
    const end = square + n - 1;
    const acc = [];
    for (let i = start; i <= end; i += 2) acc.push(i);
    return acc;
  }

console.log(findSummands(3));


