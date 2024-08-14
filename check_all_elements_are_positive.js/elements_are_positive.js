let arr=[23,78,5,-65,37,90]

let found=true
for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        found=false
    }
}
if(found){
    console.log("All elements in the array are positive")
}
else{
    console.log("The elements in the array are negative")
}