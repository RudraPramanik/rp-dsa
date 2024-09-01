function lowerBound(arr: number[], n: number, x: number) {
  let low: number = 0;
  let high: number = n - 1;
  let ans: number = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1; 