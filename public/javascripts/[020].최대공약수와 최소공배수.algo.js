function solution(n, m) {

    let cm = m;
    let cn = n;

    while(m !== 0){
        let k = n;
        n = m;
        m = k % m;
    }
    let gcd =  n;

    return [gcd, (cm * cn) / gcd];
}

console.log(solution(3, 12));
console.log(solution(2, 5));