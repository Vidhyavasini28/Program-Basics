let arr=[55,7,65,12,39,34]
let count=0
let founded=54

for(let i=0;i<arr.length;i++){
    if(arr[i]<founded){
        count=count+1
    }
}
console.log("The counting of number of elements is less than a given number in the array is ",count)