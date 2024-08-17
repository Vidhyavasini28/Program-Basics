let arr=[5,7,35,2,63,4]

for(let i=0;i<arr.length;i++){
    if(arr[i]%7==0){
        console.log("The first elements in an array that is multiple of 7 is ",arr[i])
        break
    }
}
