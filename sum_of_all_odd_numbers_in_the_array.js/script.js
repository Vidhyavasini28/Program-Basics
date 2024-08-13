let arr=[12,34,5,78,23,90,77]

let sum=0

for(let i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        sum=sum+arr[i]
    }
}
console.log("Som of all odd numbers in the array is", sum)