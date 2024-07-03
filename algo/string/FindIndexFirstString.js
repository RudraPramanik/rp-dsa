function strStr(haystack: string, needle: string): number {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    // Edge case: If needle is an empty string, return 0
    if (needleLength === 0) {
        return 0;
    }

    // Iterate through each possible starting position in the haystack
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        // Check if the substring starting from position i matches the needle
        let j;
        for (j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        // If the whole needle was matched, return the starting position
        if (j === needleLength) {
            return i;
        }
    }

    // If no match is found, return -1
    return -1;
}

// Example usage:
const haystack1 = "sadbutsad";
const needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

const haystack2 = "leetcode";
const needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1


// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.