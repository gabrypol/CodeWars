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
