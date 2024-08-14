let str="Hello world"

let count=0

for(let i=0;i<=str.length;i++){
    if(str[i]==" "){
        count=count+1
    }
}
console.log("Count no of space in the string:",count)