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

function isPrime(num: number) : boolean {
    let isPrime = true;
    if (num < 2) {
        isPrime = false;
    } else if (num>2) {
        for (let i=2; i<= Math.sqrt(num); i++) {
            if (num%i==0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

function sumOfPrimes(arr: Array<number>) : any {
    let sum = 0;
    for (let number of arr) {
        if (isPrime(number)) {
            sum += number;
        }
    }
    return `Sum of primes = ${sum}`;
}

console.log(isPrime(3));
console.log(sumOfPrimes([2,3,5,4,7,1]));