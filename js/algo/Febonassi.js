//target [0,1,1,2,3,5,8,13] from n

function fibonassi(n){
    let fibo = [0,1]
    for(let i =2; i<n; i++){
        fibo[i]= fibo[i-1]+fibo[i-2]
    }
    return fibo
}
console.log(fibonassi(6))