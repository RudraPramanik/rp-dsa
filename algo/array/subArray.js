function findAllSubarraysWithGivenSum(arr, k) {
    const n = arr.length;  // size of the given array
    let cnt = 0;  // number of subarrays
    const subarrays = [];  // to store the subarrays

    for (let i = 0; i < n; i++) {  // starting index i
        for (let j = i; j < n; j++) {  // ending index j
            // calculate the sum of subarray [i...j]
            let subarray_sum = 0;
            const currentSubarray = [];
            for (let l = i; l <= j; l++) {
                subarray_sum += arr[l];
                currentSubarray.push(arr[l]);
            }

            // increase the count if sum == k and store the subarray
            if (subarray_sum === k) {
                cnt += 1;
                subarrays.push([...currentSubarray]);
            }
        }
    }

    // Print the subarrays
    console.log("Subarrays with sum", k, "are:", subarrays);
    return cnt;
}

// Example usage:
const arr = [3, 1, 2, 5, 4];
const k = 9;
const cnt = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is:", cnt); // Output: 2
