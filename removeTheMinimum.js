// https://www.codewars.com/kata/remove-the-minimum/

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    console.log('numbers: ', numbers);
    console.log('...numbers: ', ...numbers);
    
    let min = Math.min(...numbers);
    console.log('min: ', min)

    let indexOfMin = numbers.indexOf(min);
    console.log('index of min: ', indexOfMin);

    // Arrays are passed by reference, therefore in order to not change the original array 'numbers' (while changing 'newArr'), we need to make a copy using JSON (stringify first, and parse afterwards)
    let newArr = JSON.parse(JSON.stringify(numbers));
    newArr.splice(indexOfMin, 1);
    
    return newArr;
  }

  console.log(removeSmallest([1, -5, -10, 2, 1, 4]))