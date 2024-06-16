// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 
function check(nums){
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
    }

    return count <= 1;
}

// Example usage:
const nums1 = [3, 4, 5, 1, 2];
const result1 = check(nums1);
console.log(result1); // Output: true

const nums2 = [2, 1, 3, 4];
const result2 = check(nums2);
console.log(result2); // Output: false

const nums3 = [1, 2, 3, 4, 5];
const result3 = check(nums3);
console.log(result3); // Output: true
