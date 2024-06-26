function containsDuplicate(nums){
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}

// Example usage
const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); // Output: true

const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2)); // Output: false
