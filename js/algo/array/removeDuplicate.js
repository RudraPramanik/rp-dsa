function removeDuplicates(nums){
    if (nums.length === 0) return [];

    let uniqueIndex = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[uniqueIndex] !== nums[j]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[j];
        }
    }

    return nums.slice(0, uniqueIndex + 1);
}

// Example usage:
const nums = [1, 1, 2, 2, 2, 3, 3];
const uniqueNums = removeDuplicates(nums);
console.log("The array after removing duplicate elements is:", uniqueNums);
console.log(`Number of unique elements: ${uniqueNums.length}`);
