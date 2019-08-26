// https://www.codewars.com/kata/powers-of-3/

// Given a positive integer N, return the largest integer k such that 3^k < N.

function largestPower(n){
    let k = 0;
    while(3 ** k < n) {
      k++;
    }
    return k-1;
}

