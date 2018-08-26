function solution(n) {

    let answer = "";
    let remainder;

    while (n > 0) {
        remainder = n % 3;
        n = parseInt(n / 3);

        if (remainder === 0) {
            n -= 1;
            remainder = 4;
        }
        answer = remainder + answer;
    }
    return answer;
//    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}