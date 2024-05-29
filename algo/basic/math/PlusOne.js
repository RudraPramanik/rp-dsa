function plusOne(digits) {
    const n = digits.length;

    // Traverse the digits array from the end to the beginning
    for (let i = n - 1; i >= 0; i--) {
        // If the current digit is less than 9, increment it by 1 and return the array
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        // If the current digit is 9, set it to 0
        digits[i] = 0;
    }

    // If all digits were 9, we need to add a leading 1
    digits.unshift(1);
    return digits;
}

// Example usage:
const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]
