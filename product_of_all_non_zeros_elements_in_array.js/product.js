let arr=[1,54,6,72,30]

var product=1
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        product=arr[i]*product
    }
}
console.log("The product of all non-zero elements in an array is ",product)