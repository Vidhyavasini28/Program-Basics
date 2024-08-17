let arr=[5,7,3,2,6,4]
let sqr
let sum=0
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        sqr= arr[i] * arr[i]
        sum=sum+sqr
    }
}
console.log("the sum of squarsof an elements in the array is ",sum)
