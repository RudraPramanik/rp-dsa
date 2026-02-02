function canBecomeGoal(s, goal) {
    // If lengths of the strings are not equal, s cannot be transformed into goal
    if (s.length !== goal.length) {
        return false;
    }

    // Concatenate s with itself
    let doubleS = s + s;

    // Check if goal is a substring of the concatenated string
    return doubleS.includes(goal);
}

// Example usage:
const s1 = "abcde";
const goal1 = "cdeab";
console.log(canBecomeGoal(s1, goal1)); // Output: true

const s2 = "abcde";
const goal2 = "abced";
console.log(canBecomeGoal(s2, goal2)); // Output: false
