function reverseWords(s) {
    // Split the string by spaces and filter out any empty words
    const words = s.trim().split(/\s+/).filter(word => word.length > 0);
    
    // Reverse the array of words
    words.reverse();
    
    // Join the words back into a single string with a single space separating each word
    return words.join(' ');
}

// Example usage:
const sentence1 = "the sky is blue";
console.log(reverseWords(sentence1)); // Output: "blue is sky the"

const sentence2 = "  hello world  ";
console.log(reverseWords(sentence2)); // Output: "world hello"

const sentence3 = "a good   example";
console.log(reverseWords(sentence3)); // Output: "example good a"
