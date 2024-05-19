function selectionSort(array) {
    // Move through each element in the array
    for (let i = 0; i < array.length; i++) {
        // Assume the current position is the minimum
        let minIndex = i;

        // Check the rest of the array to find the actual minimum
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // If the minimum is not the position you initially assumed, swap them
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// Example usage:
const unsortedArray = [29, 10, 14, 37, 13];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray);  // Output: [10, 13, 14, 29, 37]
 