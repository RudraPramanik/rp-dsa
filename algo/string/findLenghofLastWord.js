// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

function lengthOfLastWord(s: string): number {
    s = s.trim();
    const words = s.split(' ');
    const filteredWords = words.filter(word => word.length > 0);
    const lastWord = filteredWords[filteredWords.length - 1];
    return lastWord.length;
};