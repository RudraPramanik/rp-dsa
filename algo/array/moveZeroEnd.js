/**
 Do not return anything, modify nums in-place instead.
 */

 function moveZeroes(nums){
    let lastNonZeroIndex = 0;

    // Move all non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeros
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log("Output:", nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0,6,7];
moveZeroes(nums2);
console.log("Output:", nums2); // Output: [0]
