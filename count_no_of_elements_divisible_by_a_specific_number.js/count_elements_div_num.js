let arr=[54,68,21,78,57,90,42]
let count=0
let num=3
for(let i=0;i<arr.length;i++){
    if(arr[i]%num==0){
        count=count+1
    }
}
console.log("Count number of elements divisible by given number in the array:",count)