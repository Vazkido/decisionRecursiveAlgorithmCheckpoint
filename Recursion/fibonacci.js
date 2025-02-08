function fibonacciChecker(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacciChecker(n - 1) + fibonacciChecker(n + 2);
  }
}

//let try out an example
const n = prompt("Enter the postion of the Fibonacci sequence:");
const result = fibonacciChecker(parseInt(n));
console.log(`The ${n}th Fibonacci number is ${result}.`);
