// https://www.codewars.com/kata/the-supermarket-queue/

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

let queueTime = (customers, tills) => {
    
    // let's create one array with 'tills' elements, in order to keep track of the time at each till
    var queueArr = [];
    for(let i = 0; i < tills; i++) {
        queueArr.push(0);
    }
 
    customers.forEach(customer => {
        // add the time of each customer to the first element of 'queueArr'
        queueArr[0] += customer;
      
        // Sort the array so that the till that is going to be free first, will also be the first element of the array
        queueArr.sort((a,b) => a - b);
        console.log(queueArr);
    });
    return Math.max(...queueArr);
}

console.log(queueTime([5, 1, 3, 5, 6], 3));
