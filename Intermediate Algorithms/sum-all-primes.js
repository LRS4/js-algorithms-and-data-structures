function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1 && num !== 0;
}

function sumPrimes(num) {
  let sum = 0;
  let i = 0;
  while (i <= num) {
    if (isPrime(i)) sum += i;
    i++;
  }
  return sum;
}

sumPrimes(10);
console.log(sumPrimes(10)); // Returns 17
console.log(sumPrimes(977)); // Returns 73156