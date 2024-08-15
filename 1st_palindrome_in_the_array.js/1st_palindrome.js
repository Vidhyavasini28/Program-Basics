let arr=[122,3,444,89,565,190]
let n,r
for(let i=0;i<arr.length;i++){
    var original = arr[i]
    while(arr[i]!=0){
        n=arr[i]%10
        r=r*10+n
        arr[i]=arr[i]/10
    }  
    if(original==r){
        
        break;
    }

}
console.log("The first palindrome in array is ",original)