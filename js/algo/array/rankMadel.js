function findRelativeRanks(score) {
    // Step 1: Create a sorted copy of the score array in descending order
    const sortedScores = [...score].sort((a, b) => b - a);
    
    // Step 2: Create a map to associate each score with its rank
    const scoreToRank = new Map();
    for (let i = 0; i < sortedScores.length; i++) {
        if (i === 0) {
            scoreToRank.set(sortedScores[i], "Gold Medal");
        } else if (i === 1) {
            scoreToRank.set(sortedScores[i], "Silver Medal");
        } else if (i === 2) {
            scoreToRank.set(sortedScores[i], "Bronze Medal");
        } else {
            scoreToRank.set(sortedScores[i], (i + 1).toString());
        }
    }
    
    // Step 3: Build the result array based on the original scores
    return score.map(s => scoreToRank.get(s));
}

// Example usage:
const score = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(score)); // Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
