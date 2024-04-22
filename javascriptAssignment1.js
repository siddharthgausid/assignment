// Function to concatenate two strings
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

let string1 = "Siddharth ";
let string2 = "Srivastava";
let result = concatenateStrings(string1, string2);
console.log(result); 

// Function to find the length of a string
function findStringLength(str) {
    return str.length;
}
console.log(findStringLength("Siddharth Srivastava"));

// Function to convert a string to uppercase
function convertToUppercase(str) {
    return str.toUpperCase();
}
console.log(convertToUppercase("Siddharth")); 

// Function to convert a string to lowercase
function convertToLowercase(str) {
    return str.toLowerCase();
}
console.log(convertToLowercase("SRIVASTAVA")); 

// Function to extract a substring from a given string
function extractSubstring(str, startIndex, length) {
    return str.substring(startIndex, startIndex + length);
}
console.log(extractSubstring("Siddharth", 0, 4)); 

// Function to perform numerical operations
function numericalOperation(operation, num1, num2) {
    switch (operation) {
        case 'addition':
            return num1 + num2;
        case 'subtraction':
            return num1 - num2;
        case 'multiplication':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
    }
}
console.log(numericalOperation('addition', 5, 3)); 
console.log(numericalOperation('subtraction', 10, 3)); 
console.log(numericalOperation('multiplication', 9, 7)); 
console.log(numericalOperation('division', 10, 2)); 

// Function to find the square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
}
console.log(squareRoot(49)); 

// Function to round a number to a specified number of decimal places
function roundNumber(num, decimalPlaces) {
    return num.toFixed(decimalPlaces);
}
console.log(roundNumber(96.1934, 2)); 
