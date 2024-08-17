let arr=[5,7,6,12,3,4]
let sum =0
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        sum=sum+arr[i]
    }
}
console.log("The sum of elements in the even indices in the array is ",sum)