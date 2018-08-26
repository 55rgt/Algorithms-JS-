function solution(n) {

    let answer;
    let root = Math.sqrt(n);
    root === parseInt(root) ? answer = Math.pow(root + 1, 2) : answer = -1;
    return answer;
}

solution(121);
solution(3);

console.log(typeof 3);