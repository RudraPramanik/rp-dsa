function findMiddleOrPrevious(numStr: string): number {
    const length = numStr.length;
    const middleIndex = Math.floor(length / 2);
    const middleNumber = parseInt(numStr[middleIndex], 10);
    
    if (middleNumber % 2 === 0) {
        return middleNumber;
    } else {
        const prevIndex = middleIndex - 1;
        if (prevIndex >= 0) {
            return parseInt(numStr[prevIndex], 10);
        } else {
            return -1; // Return -1 if there is no previous number
        }
    }
}

// Example usage
const numStr = "123456";
const result = findMiddleOrPrevious(numStr);
console.log(result); // Output depends on the middle value
