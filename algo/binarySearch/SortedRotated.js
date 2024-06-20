function check(nums: number[]): boolean {
  let count = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }

  return true;
}

// Example usage:
const nums1 = [3, 4, 5, 1, 2];
console.log(check(nums1)); // Output: true

const nums2 = [2, 1, 3, 4];
console.log(check(nums2)); // Output: false

const nums3 = [1, 2, 3, 4];
console.log(check(nums3)); // Output: true

const nums4 = [1, 1, 1, 1];
console.log(check(nums4)); // Output: true
