function solution(n) {
    return parseInt((n+"").split("").reverse().map(v => parseInt(v)).sort((a,b) => a < b).join(""));
}

console.log(typeof solution(118372));