function singleNonDuplicate(arr: number[]): number {
  var n = arr.length; // Size of the array
  if (n === 1) return arr[0];

  for (var i = 0; i < n; i++) {
    // Check for first index
    if (i === 0) {
      if (arr[i] !== arr[i + 1]) return arr[i];
    }
    // Check for last index
    else if (i === n - 1) {
      if (arr[i] !== arr[i - 1]) return arr[i];
    } else {
      if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) return arr[i];
    }
  }

  // Dummy return statement
  return -1;
}

var arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
var ans = singleNonDuplicate(arr);
console.log('The single element is: ' + ans);
