let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let primeCount = 0;

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else if (num === 2) {
        isPrime = true;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primeCount++;
    }
}
console.log(primeCount); // Output: 5
