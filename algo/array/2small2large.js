function arrsmall(arr){
    if (arr.length === 0 || arr.length === 1){
        console.log(-1 + " "+ -1)
        return
    }
    arr.sort((a,b)=> a-b)
    let small = arr[1]
    let large = arr[arr.length-2]
    console.log("Second smallest is " + small);
  console.log("Second largest is " + large);
}

const arr = [1, 2, 4, 6, 7, 5];
arrsmall(arr);