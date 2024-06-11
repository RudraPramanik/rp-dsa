function reverseSentece(string){
    string += " ";
    const stack = [];
    let word = "";
    for(let i =0; i<string.length; i++){
        if(string[i]===' '){
            stack.push(word);
            word="";
        }else{
            word += string[i]
        }
    }
    let reversed = ""
    while(stack.length> 1){
        reversed += stack.pop()+ " "
    }
    reversed += stack.pop()
    console.log("After reversing words:");
    console.log(reversed);

    return reversed;
    
}


// Example usage:
const sentence = "TUF is great for interview preparation";
reverseSentece(sentence);
