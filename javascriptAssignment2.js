// Array of numbers
const numbers = [3, 6, 8, 4, 7, 2, 9, 15, 6];

// Function to calculate sum of all numbers using reduce function
function calculateSumWithReduce(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum with reduce:", calculateSumWithReduce(numbers));

// Function to calculate sum of all numbers using for loop
function calculateSumWithForLoop(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log("Sum with for loop:", calculateSumWithForLoop(numbers));

// Function to find maximum value in the array
function findMaxValue(arr) {
    return Math.max(...arr);
}
console.log("Maximum value:", findMaxValue(numbers));

// Function to find minimum value in the array
function findMinValue(arr) {
    return Math.min(...arr);
}
console.log("Minimum value:", findMinValue(numbers));

// Function to filter out even numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers(numbers));

// Function to filter out odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("Odd numbers:", filterOddNumbers(numbers));

// Function to convert each number to its square
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("Squared numbers:", squareNumbers(numbers));

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to find prime numbers in the array
function findPrimeNumbers(arr) {
    return arr.filter(num => isPrime(num));
}
console.log("Prime numbers:", findPrimeNumbers(numbers));

// Function to print Fibonacci sequence up to a certain limit
function printFibonacciSequence(limit) {
    let a = 0, b = 1;
    while (a <= limit) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}
console.log("Fibonacci sequence with while loop:");
printFibonacciSequence(50);

// Implementing Fibonacci sequence using do-while loop
function printFibonacciSequenceDoWhile(limit) {
    let a = 0, b = 1;
    do {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    } while (a <= limit);
}
console.log("Fibonacci sequence with do-while loop:");
printFibonacciSequenceDoWhile(50);

// Implementing Fibonacci sequence using for loop
function printFibonacciSequenceFor(limit) {
    let a = 0, b = 1;
    for (let i = 0; a <= limit; i++) {
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}
console.log("Fibonacci sequence with for loop:");
printFibonacciSequenceFor(50);
