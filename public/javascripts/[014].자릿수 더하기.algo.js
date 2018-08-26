function solution(n) {

    let result = 0;

    while(n !== 0){
        result += n % 10;
        n = parseInt(n / 10);
    }
    return result;
}

console.log(solution(123));
console.log(solution(9876));
console.log(solution(7));