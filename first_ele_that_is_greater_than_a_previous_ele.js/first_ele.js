let arr=[7,45,88,87,92]

for(let i=0;i,arr.length;i++){
    if(arr[i]>arr[i+1]){
        console.log("The first element is greater than a previous element in the array is ",arr[i])
        break;
    }
}