function uniqueElements(arr: number[]): number[] {
  return [...new Set(arr)];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
