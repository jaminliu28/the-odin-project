/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.*/

var largeNo = 600851475143;
var biggestFactor = 0;

for (i = 2; i < Math.sqrt(largeNo); i++) {
  while (largeNo % i === 0) {
    biggestFactor = i;
    largeNo /= i;
  }
}

console.log(biggestFactor);