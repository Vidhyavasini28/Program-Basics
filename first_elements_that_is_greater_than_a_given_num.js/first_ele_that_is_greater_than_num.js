let arr=[12,45,38,56,19,98,65]

let found=43
for(let i=0;i<arr.length;i++){
    if(arr[i]>found){
        console.log("The first element that is greater than a given number in array is ",arr[i])
        break;
    }
}