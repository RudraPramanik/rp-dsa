
function largestOddNumber(num) {
    // Iterate from the end of the string to the beginning
    for (let i = num.length - 1; i >= 0; i--) {
        // Check if the current character is an odd digit
        if (parseInt(num[i]) % 2 !== 0) {
            // Return the substring from the start to the current index (inclusive)
            return num.substring(0, i + 1);
        }
    }
    // Return an empty string if no odd digit is found
    return "";
}

// Example usage:
console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("4216")); // Output: ""
console.log(largestOddNumber("35427")); // Output: "35427"
console.log(largestOddNumber("123456789")); // Output: "123456789"
