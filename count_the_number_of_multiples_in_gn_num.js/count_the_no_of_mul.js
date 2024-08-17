let arr=[35,75,3,12,63,14]
let num=7
let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%7==0){
        count=count+1
    }
}
console.log("the number of multiples of a specific number in an array is ",count)              