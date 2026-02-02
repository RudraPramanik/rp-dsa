function missingNumber(nums: number[]): number {
    const n = nums.length;
    // Calculate the expected sum of numbers from 0 to n
    const expectedSum = (n * (n + 1)) / 2;
    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
}

// Example usage
const nums = [3, 0, 1];
const missing = missingNumber(nums);
console.log(missing); // Output: 2
