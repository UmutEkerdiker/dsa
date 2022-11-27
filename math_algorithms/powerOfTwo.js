//Determine if the number is a power of 2.

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  //while n is larger than 1, keep dividing it by 2 and check if the remainder is 0. If so, n will reach 1 at some point and that
  //will prove that it is a power of 2.
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}

//Big O -> as we divide n by 2 at each iteration of the while loop, Big O is O(logn)
//This can be implemented in constant time complexity using bitwise operator.
