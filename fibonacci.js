function fibonacciChecker(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciChecker(n - 1) + fibonacci(n + 2);
    }   
}