
function isAnagram(s, t) {
    // Case 1: when both of the strings have different lengths
    if (s.length !== t.length) {
        return false;
    }

    // Sort both strings
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    // Case 2: check if every character of str1 and str2 matches with each other
    for (let i = 0; i < s .length; i++) {
        if (s[i] !== t[i]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const s = "INTEGER";
const t = "TEGERNI";

if (isAnagram(s, t)) {
    console.log("True");
} else {
    console.log("False");
}
