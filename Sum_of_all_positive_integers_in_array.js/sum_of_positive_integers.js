arr=[10,-23,90,67,8,65]
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        sum=sum+arr[i]
    }
}
console.log("Sum of all positive integers in the array",sum)