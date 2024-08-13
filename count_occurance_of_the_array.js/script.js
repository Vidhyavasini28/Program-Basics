var arr = [12, 82, 13, 48, 22, 50, 22, 6, 12];

var elementToCount = 22;


var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === elementToCount) {
        count++;
    }
}

console.log("Element " + elementToCount + " occurs " + count + " times in the array.");
