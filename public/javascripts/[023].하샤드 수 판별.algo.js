function solution(n) {
    let result = 0;
    let x = n;

    while(x !== 0){
        result += x % 10;
        x = parseInt(x / 10);
    }

    console.log(result);

    return n % result === 0;
}

function harshad(n){
    return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}

console.log(solution(10));
console.log(solution(12));console.log(solution(11));console.log(solution(13));


