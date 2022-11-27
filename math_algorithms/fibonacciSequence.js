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

//RECURSIVE SOLUTION - only return n'th number in the sequence.

function recursiveFib(n) {
  if (n < 2) {
    // if input is 1 or 0, return 1 or 2 as they're the first 2 numbers of the sequence.
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

//Time complexity here is O(2**n), iterative solution is much better
