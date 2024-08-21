var arr = ["madam", "racecar", "apple", "level", "banana"];

var count = 0;
for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    var len = str.length;
    var isPalindrome = true;
    for (var j = 0; j < len / 2; j++) {
        if (str[j] !== str[len - 1 - j]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        count++;
    }
    }

console.log("Number of palindromes:", count);
