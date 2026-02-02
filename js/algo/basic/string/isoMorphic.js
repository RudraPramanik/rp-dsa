function isIsomorphic(s, t){
    if (s.length !== t.length) {
        return false;
    }

    const sToTMap = new Map();
    const tToSMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        if ((sToTMap.has(sChar) && sToTMap.get(sChar) !== tChar) ||
            (tToSMap.has(tChar) && tToSMap.get(tChar) !== sChar)) {
            return false;
        }

        sToTMap.set(sChar, tChar);
        tToSMap.set(tChar, sChar);
    }

    return true;
}

// Example usage:
const s1 = "egg";
const t1 = "add";
console.log(isIsomorphic(s1, t1)); // Output: true

const s2 = "foo";
const t2 = "bar";
console.log(isIsomorphic(s2, t2)); // Output: false
