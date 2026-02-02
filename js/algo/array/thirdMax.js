function thirdMax(nums) {
    // Step 1: Create a set to store distinct numbers
    const numSet = new Set(nums);
    
    // Step 2: Convert the set to an array and sort it in descending order
    const sortedNums = Array.from(numSet).sort((a, b) => b - a);
    
    // Step 3: Check if there are at least three distinct numbers
    if (sortedNums.length >= 3) {
        return sortedNums[2]; // Return the third maximum
    } else {
        return sortedNums[0]; // Return the maximum number
    }
}

// Example usage:
const nums1 = [1, 2];
console.log(thirdMax(nums1)); // Output: 2

const nums2 = [1, 3, 4, 5, 6, 7, 7, 8, 9];
console.log(thirdMax(nums2)); // Output: 7

const nums3 = [3, 2, 1];
console.log(thirdMax(nums3)); // Output: 1

const nums4 = [2, 2, 3, 1];
console.log(thirdMax(nums4)); // Output: 1
