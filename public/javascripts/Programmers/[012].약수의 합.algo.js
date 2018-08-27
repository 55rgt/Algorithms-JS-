

function solution(n) {
    let result = (n)=>[...Array(n+1).keys()].slice(1).reduce((s, a)=>s+(!(n % (a)) && a), 0);
    return result(n);
}

console.log(solution(12));