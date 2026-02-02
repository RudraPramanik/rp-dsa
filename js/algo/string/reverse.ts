function findMiddleOrPrevious(word: string): number {
    let words = word.split('').reverse().join('');
    const numWord = parseInt(words,10)
    return numWord

}

let word = '223344'
let find = findMiddleOrPrevious(word)
console.log(find)

function middleOne(find:number[]):string{
    let given = find
    let middleIndex =Math.floor(find.length/2)
    let nextNum = middleIndex+1
    if(middleIndex%2 !== 0 ){
        let ans = given[middleIndex]
        return ans.toString()
    }else{
        let answer = given[nextNum]
        return answer.toString()
    }


}

let fin =[2,3,4,5,6,7,8,9,0]
let ans2 = middleOne(fin)
console.log(ans2)


// npx ts-node algo/string/reverse.ts
