let arr=[12,45,32,34,18,56]

let min=arr[0]
for (let i=1;i<arr.length;i++){
    if(arr[i]<=min){
        min=arr[i]
    }
}

console.log("The smallest element in the array is ",min)