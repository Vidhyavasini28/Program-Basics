let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum=0
let avg,n=arr.length,count=0

for(let i=0;i<n;i++){
    sum=sum+arr[i]
    avg=sum/n
}
for(let i=0;i<n;i++){
    if(arr[i]>avg){
        count++
    }
}
console.log("Count the number of elements is greater than a average element of the array is ",count)