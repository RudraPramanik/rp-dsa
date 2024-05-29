// *
// **
// ***
// **
// *

function printPattern(n: number): void {
    let str = '';

    // Upper part of the pattern including the middle row
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        str += '\n';
    }

    // Lower part of the pattern excluding the middle row
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        str += '\n';
    }

    // Print the complete pattern
    console.log(str);
}

// Example usage:
const n = 3;
printPattern(n);
