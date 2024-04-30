// if the number is prime. not devided by any regard 1

function isPrime(n){
    if(n<2){
        false
    }
    for(let i=2; i<n; i++){
        if(n % 2 !== 0){
            return false
        }
    }
    return true
}
console.log(isPrime(8))