function mySqrt(x){
    if (x === 0 || x === 1) {
        return x;
    }

    let left = 0;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        }

        if (midSquared < x) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }

    return result;
}


console.log(mySqrt(4));
console.log(mySqrt(8)); 
console.log(mySqrt(0)); 
console.log(mySqrt(1)); 
console.log(mySqrt(16)); 
