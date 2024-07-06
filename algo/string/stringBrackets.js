function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (map[char]) {
            const topElement = stack.pop();
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const s1 = "()";
console.log(isValid(s1));

const s2 = "([)]";
console.log(isValid(s2)); 

const s3 = "{[]}";
console.log(isValid(s3)); 
