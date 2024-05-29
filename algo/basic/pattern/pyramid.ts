//    *
//   ***
//  *****
// *******


function printPyramidPattern(n: number): void {
    for (let i = 1; i <= n; i++) {
        let str = '';

        // Print spaces
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }

        // Print asterisks
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += '*';
        }

        // Print the line
        console.log(str);
    }
}

// Example usage:
const n = 5;
printPyramidPattern(n);
