
/* start부터 end 사이의 소수 반환 */
function getPrimeNumberCount(start, end) {

    let count = 0;
    for(let i = start ; i <= end ; i++) if(isPrime(i)) count++;
    return count;
}

function isPrime(number) {

    if(number === 1) return false;
    for(let i = 2 ; i <= Math.sqrt(number) ; i++)
        if(number % i === 0) return false;
    return true;

}
console.log(getPrimeNumberCount(1, 10));


function getPrimeNumbers(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes.length;
}