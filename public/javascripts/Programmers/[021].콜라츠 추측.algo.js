function solution(num, count) {
    let sum = arguments[1] === undefined ? 0 : arguments[1];
    if(num === 1) return sum;
    if(count === 500) return -1;
    return num % 2 === 0 ? solution(num / 2, ++sum) : solution(num * 3 + 1, ++sum);
}

// function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }
// console.log(solution(6));
// console.log(solution(16));
console.log(solution(626331));

