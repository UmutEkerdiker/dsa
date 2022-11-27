//Return the factorial of n.

function factorial(n) {
  let fact = 1;
  //factorial of 0 is 1.
  if (n === 0) {
    return 1;
  }
  //set fact's value to the multiplication of its current value and i until n is reached.
  for (i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// console.log(factorial(4));
// Big-O = O(n) since we have a single for loop.
// Conditional statements can be added to negate negative numbers.

//RECURSIVE SOLUTION - base case is 0! is equal to 1

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

// console.log(recursiveFactorial(5));
//Big-O = O(n) in recursive solution
