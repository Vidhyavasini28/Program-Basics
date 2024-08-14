let arr=[76,53,25,9,45,13,28]

let sum=0
let num=24

for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
        sum=sum+arr[i]
    }
}
console.log("Sum of elements is greater than a given number:",sum)