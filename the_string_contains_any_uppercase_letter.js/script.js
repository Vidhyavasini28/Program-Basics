let str = "HelloWorld"; 
let found = false;

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (char >= 'A' && char <= 'Z') {
        found = true;
        break; 
    }
}

if (found) {
    console.log("Uppercase is found"); 
} else {
    console.log("Uppercase is not found"); 
}
