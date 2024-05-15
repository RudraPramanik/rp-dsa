function armstrong(num){
    let sum = 0;
    let n = num;
    let power = String(num).length;
    while(n>0){
        let lastDigit = n% 10
        sum += Math.pow(lastDigit, power)
        n = Math.floor(n/10)
    }
    return sum === num? true : false
}

console.log(armstrong(153))