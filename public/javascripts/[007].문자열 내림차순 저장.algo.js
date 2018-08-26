function solution(s) {

    // 비효율적
    return Array.from(s).sort((p, c) => p < c ? 1 : -1).join('');
    return s.split("").sort((a,b) => a < b ? 1: -1).join("");
    return [...s].sort((a, b) => a < b ? 1 : -1).join('');
    return s.split('').sort((prev, cur) => cur.charCodeAt() - prev.charCodeAt()).join('')
}

s = "Zbcdefg";


console.log(solution(s));