function word(num){
       const numArray = num.split('').map(Number);
    
       const middleIndex = Math.floor(numArray.length / 2);
       
       let middleNumber = numArray[middleIndex];
       
       if (middleNumber % 2 !== 0) {
           return middleNumber;
       } else {
           return middleIndex + 1 < numArray.length ? numArray[middleIndex + 1] : -1; 
       }
   
}

console.log(word('34566778'))