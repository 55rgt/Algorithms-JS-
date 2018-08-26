function solution(strings, n) {
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}
console.log(solution(['abce', 'cdx', 'abcd'], 2));