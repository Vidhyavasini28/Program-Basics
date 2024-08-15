let arr=[12,34,278,56]
let found=false
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        found=true
    }
    else{
        found=false
        break
    }
}

if(found)
{
    console.log("The array contains only even number")
}
else
{
    console.log("Not found")
}