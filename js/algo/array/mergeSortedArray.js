// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
function merge(nums1, m, nums2, n) {
    // Take only the first m elements from nums1
    let nums1Part = nums1.slice(0, m);
    // Take only the first n elements from nums2
    let nums2Part = nums2.slice(0, n);
    // Concatenate nums1Part with nums2Part
    let mergedArray = nums1Part.concat(nums2Part);
    // Sort the merged array
    mergedArray.sort((a, b) => a - b);
    // Copy the sorted elements back into nums1
    for (let i = 0; i < mergedArray.length; i++) {
        nums1[i] = mergedArray[i];
    }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 2;

merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

// Example usage: