function reverseInteger(x) {
    // Determine if the original number is negative
    const isNegative = x < 0;
    // Make the number positive for easy processing
    x = Math.abs(x);

    // Reverse the digits of the number
    let reversed = 0;
    while (x > 0) {
        const digit = x % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Shift existing digits left and add new digit
        x = Math.floor(x / 10); // Remove the last digit
    }

    // Check for 32-bit signed integer overflow
    if (reversed > 0x7FFFFFFF) {
        return 0; // Exceeds the max value of a 32-bit signed integer
    }

    // Return the reversed number with the correct sign
    return isNegative ? -reversed : reversed;
}

// Example Usage
console.log(reverseInteger(123));      // Outputs: 321
console.log(reverseInteger(-123));     // Outputs: -321
console.log(reverseInteger(120));      // Outputs: 21
console.log(reverseInteger(1534236469)); // Should output 0 due to overflow
