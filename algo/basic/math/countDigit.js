// Function to count the number
// of digits in an integer 'n'.
function countDigits(n) {
    // Initialize a counter variable
    // 'cnt' to store the count of digits.
    let count = 0;
    // While loop iterates until 'n'
    // becomes 0 (no more digits left).
    while (n > 0) {
        // Increment the counter
        // for each digit encountered.
        count = count + 1;
        // Divide 'n' by 10 to
        // remove the last digit.
        n = Math.floor(n/10);
    }
    // Return the
    // count of digits.
    return count;
}

console.log(countDigits())

function main(){
    let N = 344535;
    console.log("N"+ N);
    let digits = countDigits(N)
    console.log("number of digits " + digits)
}
main()