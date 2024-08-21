let array = [11, 8,125, 64, 10000, 16];
let count = 0;

for (let i = 0; i < array.length; i++) {
    let n = array[i];
    let isCube = false;
    
    for (let j = 0; j * j * j <= n; j++) {
        if (j * j * j === n) {
            isCube = true;
            break;
        }
    }
    
    if (isCube) {
        count++;
    }
}

console.log("Count the perfect cube in the array is ",count);  
