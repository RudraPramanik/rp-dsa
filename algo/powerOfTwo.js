//except 1 if 2^any
// power of any^any
// in place of n%2 n%any and ,n/2 replace n/any 

function powerTwo(n){
    if (n<1){
        return false
    }
    while(n>1){
        if(n%2 !==0){
            return false
        }
        n= n/2
    }
    return true
}
console.log(powerTwo(16))