function largest(arr,k){
    arr.sort((a,b)=> b-a)
    return arr[k-1]
}
let arr = [1,3,4,7,8,9,10,5]
let k = 1
console.log(largest(arr,k))