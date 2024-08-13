var arr=[12,14,5,65,45,28,76]

var number=12
var found=false
for(let i=0;i<arr.length;i++){
    if(arr[i]==number){
        found=true
        break;
    }
}

if(found){
    console.log("The "+number+" exists in the array")
}
else
    {
        console.log("The "+number+" doesn't exists in the array")
    }