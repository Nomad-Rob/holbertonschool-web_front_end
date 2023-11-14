/*
Reuse the function countPrimeNumbers from 10-prime.js (copy/paste)

Log to the console the time in milleseconds to execute the function 100 times
Find a way to actually do most of the calculation at the end of the execution stack
Requirements:

Your code should display something in the range of Execution time of calculating prime 
numbers 100 times was 0.03999999910593033 milliseconds.
Use setTimeout keyword to change the stack order
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

let t0 = performance.now();
console.log('Number of prime numbers:', countPrimeNumbers());
let t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);

for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}

let t2 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t2 - t1} milliseconds.`);

setTimeout(() => {
  let t3 = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${t3 - t2} milliseconds.`);
}, 0);

