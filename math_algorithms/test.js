//Return the first n elements of the Fibonacci sequence.

function fib(n) {
  let fib = [0, 1];
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function facttest(n) {
  let factorial = 1;
  if (n === 0 || n === 1) {
    return 1;
  }
  for (i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

function facttestRecursive(n) {
  if (n === 0) {
    return 1;
  }

  return n * facttestRecursive(n - 1);
}

function twoTest(n) {
  while (n > 1) {
    n /= 2;
  }
  if (n === 1) {
    return true;
  }
  return false;
}

function twoTestRecursive(n) {
  if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  }
  return twoTestRecursive(n / 2);
}

function isPrimo(n) {
  if (n <= 1) {
    return false;
  }

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function isPrimoRecursive(n, i = 2) {
  if (n <= 1) {
    return false;
  }
  if (n % i === 0) {
    return false;
  } else if (n % i !== 0 && i < n) {
    isPrimoRecursive(n, i + 1);
  }
  return true;
}
