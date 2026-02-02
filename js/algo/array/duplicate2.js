function containsNearbyDuplicate(nums, k) {
    const indexMap = {}; // Hash map to store the last seen index of each element

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        // Check if the element is already in the map
        if (indexMap[num] !== undefined) {
            // Check if the difference between indices is within the allowed range k
            if (i - indexMap[num] <= k) {
                return true;
            }
        }
        
        // Update the last seen index of the element
        indexMap[num] = i;
    }

    return false; // Return false if no such pair is found
}

// Example usage:
const nums1 = [1, 2, 3, 1];
const k1 = 3;
console.log(containsNearbyDuplicate(nums1, k1)); // Output: true

const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2)); // Output: true

const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;
console.log(containsNearbyDuplicate(nums3, k3)); // Output: false
