function fibonacciChecker(n) {
  if (n <= 0) return 0;
  if (n <= 1) return 1;
  return fibonacciChecker(n - 1) + fibonacciChecker(n - 2);
}

//Example usage:
console.log(fibonacciChecker(6));
console.log(fibonacciChecker(10));





// function fibonacciChecker(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonacciChecker(n - 1) + fibonacciChecker(n + 2);
//   }
// }

// //let try out an example
// const n = prompt("Enter the postion of the Fibonacci sequence:");
// const result = fibonacciChecker(parseInt(n));
// console.log(`The ${n}th Fibonacci number is ${result}.`);
