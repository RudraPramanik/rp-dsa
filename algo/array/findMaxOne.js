function findMaxConsecutiveOnes(nums: number[]): number {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// Example usage:
const nums1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums1)); // Output: 3

const nums2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums2)); // Output: 2
