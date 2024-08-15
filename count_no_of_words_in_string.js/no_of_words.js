let str="Hi! This is vidhyavasini"

let count =0
let found=false
for(let i=0;i<str.length;i++){
    if(str[i]!==' ' && !found){
        count++;
        found=true;
    }
    else if (str[i] === ' ') {
        found = false;
    }
}
console.log("Count no of words in string",count)
