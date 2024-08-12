arr=[10,20,30,11]

let max=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]>=max){
        max=arr[i]
    }
}

console.log("Maximum elements in the array is:",max);