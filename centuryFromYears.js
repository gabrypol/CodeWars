// https://www.codewars.com/kata/century-from-year/

// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

function century(year) {
  let century = Math.floor(year / 100);
  return year % 100 !== 0 ? century + 1: century; 
}

console.log('year 100', century(100));
console.log('year 101', century(101));
console.log('year 154', century(154));
console.log('year 300', century(300));
console.log('year 2000', century(2000));


