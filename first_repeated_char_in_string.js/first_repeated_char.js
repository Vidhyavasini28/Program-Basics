let str = "Hello World";

let seenChars = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seenChars[char]) {
        console.log(char);
        break;
    } else {
        seenChars[char] = true; 
    }
}

