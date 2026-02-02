function bubbleSort(arr: number[]): void {
    let n: number = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements using destructuring assignment
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function printArray(arr: number[]): void {
    console.log("After Using Bubble Sort:");
    console.log(arr.join(" "));
}

function main(): void {
    let arr: number[] = [13, 46, 24, 52, 20, 9];
    console.log("Before Using Bubble Sort:");
    console.log(arr.join(" "));

    bubbleSort(arr);
    printArray(arr);
}

main();
