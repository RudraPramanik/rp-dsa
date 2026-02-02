function bubbleSort(arr: number[]): void {
    // Get the length of the array
    const n = arr.length;

    // If the array has 1 or zero elements, it's already sorted
    if (n <= 1) return;

    // Outer loop: Number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop: Compare and swap elements
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Example usage:
const arr: number[] = [13, 46, 24, 52, 20, 9];
console.log("Before Using Bubble Sort: ", arr.join(" "));

bubbleSort(arr);
console.log("After Using Bubble Sort: ", arr.join(" "));
