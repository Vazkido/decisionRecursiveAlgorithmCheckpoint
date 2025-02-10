function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

//Example 
console.log(power(2, 3));
console.log(power(5, 0));
console.log(power(3, 4));
