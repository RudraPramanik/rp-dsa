function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      // The minimum element is in the right half
      left = mid + 1;
    } else {
      // The minimum element is in the left half including mid
      right = mid;
    }
  }

  return nums[left];
}
