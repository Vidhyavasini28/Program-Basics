var str = prompt("Enter a string:");

var vowelsCount = 0;

var string = str.toString();
for (var i = 0; i < string.length; i++) {
    
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" ||
        string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U") {
        vowelsCount += 1;
    }
}
console.log("Number of vowels: " + vowelsCount);
