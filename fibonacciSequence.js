//Return the first n elements of the Fibonacci sequence.

function fibonacciSeq(n) {
  //initial array with first 2 items
  const fibo = [0, 1]; //executed once

  //push new item as sum of last 2 items until n items are reached.
  for (let i = 2; i < n; i++) {
    //executed n times
    let newSeqItem = fibo[i - 1] + fibo[i - 2];
    fibo.push(newSeqItem);
  }

  return fibo; //executed once
}

//Big-O = O(n), linear due to single for loop
//control statements can be added to negate negative numbers.
// console.log(fibonacciSeq(6));
