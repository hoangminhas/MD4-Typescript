// let sum: number = 0;
// let count: number = 0;
// for (let i=2; count<3; i++) {
//     let isPrime: boolean = true;
//     if (i == 2) {
//         sum += i;
//         count++;
//         continue;
//     }
//
//     for (let j=2; j < i; j++) {
//         if (i % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//
//     if (!isPrime) {
//         continue;
//     }
//     sum += i;
//     count++;
// }
// console.log(sum);
function isPrime(num) {
    var isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    else if (num > 2) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
function sumOfPrimes(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var number = arr_1[_i];
        if (isPrime(number)) {
            sum += number;
        }
    }
    return "Sum of primes:   + ".concat(sum);
}
console.log(isPrime(3));
console.log(sumOfPrimes([2, 3, 5, 4, 7, 1]));
