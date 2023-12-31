/*
Write a function named countPrimeNumbers:

It will return the number of prime numbers from 2 to 100
Log to the console the time in milliseconds to execute the function in this format: Execution time of
 printing countPrimeNumbers was <time used> milliseconds.

Requirements:

You must use performance API to measure the time needed to execute the function (performance.now())
Your code should display something in the range of Execution time of printing countPrimeNumbers was 
0.2700000002514571 milliseconds.
*/

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

let t0 = process.hrtime();
let primeCount = countPrimeNumbers();
let [seconds, nanoseconds] = process.hrtime(t0);
let milliseconds = (seconds * 1000) + (nanoseconds / 1e6);

console.log('Number of prime numbers:', primeCount);
console.log(`Execution time of printing countPrimeNumbers was ${milliseconds} milliseconds.`);
