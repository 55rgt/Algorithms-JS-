function solution(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
    // return "*".repeat(s.length - 4) + s.slice(-4);
}

console.log(solution("01033334444"));