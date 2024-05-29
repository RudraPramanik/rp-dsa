// *
// **
// ***
// ****
// *****



function printRightAngledTriangle(n){
    // Loop through each row
    for (let i = 1; i <= n; i++) {
        // Initialize an empty string for the current row
        let row = '';

        // Append 'i' asterisks to the row string
        for (let j = 0; j < i; j++) {
            row += '*';
        }

        // Print the row string
        console.log(row);
    }
}

// Example usage:
const n = 5;
printRightAngledTriangle(n);
