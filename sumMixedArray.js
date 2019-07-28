function sumMix(x){
    let sum = 0;
    for (element of x) {
      sum += parseInt(element);
    }
    return sum;
  }

console.log(sumMix([1, '5', 3, '2']));