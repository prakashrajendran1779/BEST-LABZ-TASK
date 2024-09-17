// check whether number is prime or not :
// Eg: (i) i/p n=2 
//o/p => 2 is a prime number
function isPrime(n) {
    // Check if the number is less than 2
    if (n < 2) {
        return `${n} is not a prime number`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`;
}
console.log(isPrime(2)); 
//(ii) i/p=4
//o/p =>4 is not a prime number
function isPrime(n) {
    // Check if the number is less than 2
    if (n < 2) {
        return `${n} is not a prime number`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`;
}
console.log(isPrime(4)); 

//I/P; N = 541 
//O/P=> 541 IS NOT A PRIME NUMBER
function isPrime(n) {
    if (n < 2) {
        return `${n} is not a prime number`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }
    return `${n} is a prime number`;
}
const number = 541;
console.log(isPrime(number)); 

//THE NUMBER 72 BY USING THE PRIME FACTORIZE OF WRITTEN THE PRIME NUMBERS EG :72
function primeFactorize(num, f = 2, result = '') {
    if (num < 2) {
        return result.trim();
    }
    if (num % f === 0) {
        result += f + ' ';
        return primeFactorize(num / f, f, result);
    } else {
        return primeFactorize(num, f === 2 ? 3 : f + 2, result);
    }
}
const number = 72;
const factors = primeFactorize(number);
console.log(factors);

    

