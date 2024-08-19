let str = "a man a plan a canal panama";
let cleanedStr = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        cleanedStr += str[i];
    }
}

let isPalindrome = true;
let len = cleanedStr.length;

for (let i = 0; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome); 
