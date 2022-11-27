//Determine if a number is prime.

function isPrime(n) {
  //if number is 1 or smaller, return false. If it's 2, return true.
  if (n <= 1) {
    return false;
  } else if (n === 2) {
    return true;
  }
  //Divide the number with every positive number except 1 and 2, if remainder is not 0 for all of them return true.
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

//Big-O = O(n) as we  have a single for loop. Its not exactly O(n) since
//we have an if statement in the first block and a return value, however they are negligible for large scale applications.

//We can optimise this more by only dividing n with numbers smaller than its square root
//since one of the two factors of n is always either less than or equal to its square root, but that's too much maths for my old brain.
//If we do that (i<Math.sqrt(n)) in the for loop, Big-O becomes O(sqrt(n)).
