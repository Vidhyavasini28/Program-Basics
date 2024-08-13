arr=[12,13,451,56,31,76,89,34];

let count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        count=count+1
    }
}
console.log("The total count of even numbers in the array:",count)