// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

function frequencySort(s){
    // Step 1: Count the frequency of each character
    const frequencyMap = {};
    for (const char of s) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Step 2: Sort characters by frequency in descending order
    const sortedChars = Object.keys(frequencyMap).sort((a, b) => frequencyMap[b] - frequencyMap[a]);

    // Step 3: Construct the resulting string
    let result = '';
    for (const char of sortedChars) {
        result += char.repeat(frequencyMap[char]);
    }

    return result;
}

// Example usage:
const s1 = "tree";
console.log(frequencySort(s1)); // Output: "eert" or "eetr"

const s2 = "cccaaa";
console.log(frequencySort(s2)); // Output: "cccaaa" or "aaaccc"

const s3 = "Aabb";
console.log(frequencySort(s3)); // Output: "bbaA" or "bbAa"
