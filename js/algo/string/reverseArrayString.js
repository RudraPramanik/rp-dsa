function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap elements at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];

        // Move pointers towards each other
        left++;
        right--;
    }
}

// Example usage:
let s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o", "l", "l", "e", "h"]

let s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]
