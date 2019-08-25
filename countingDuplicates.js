// https://www.codewars.com/kata/counting-duplicates/

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


let duplicateCount = text => {
    // covert 'text' to uppercase or to lowercase (case-insensitive alphabetic characters)
    let textUpperCase = text.toUpperCase();
    // Split string to array and sort array in ascending order
    let textArr = textUpperCase.split('').sort();

    let prev;
    let occurrenciesArr = [];
    textArr.forEach(element => {
        if (element !== prev) {
            occurrenciesArr.push(1);
        } else {
            occurrenciesArr[occurrenciesArr.length - 1]++;
        }
        prev = element;
    });

    // 'countMoreThanOne' counts how many characters repeat more than one time
    let countMoreThanOne = 0;

    occurrenciesArr.forEach(element => {
        if (element > 1) {
            countMoreThanOne++;
        } 
    });

    return countMoreThanOne;
}

console.log(duplicateCount('Hello World'));
console.log(duplicateCount('HelloooOOOO World'));
console.log(duplicateCount('123456789123456789'));
