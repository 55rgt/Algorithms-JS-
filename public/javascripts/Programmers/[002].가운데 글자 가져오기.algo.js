/***
 * 단어 s의 가운데 글자를 반환하는 함수. 단어의 길이가 짝수라면 가운데 두글자를 반환.
 * @param s
 * s는 길이가 1 이상, 100이하인 스트링입니다.
 * @returns {*}
 */
function solution(s) {
    if(s.length === 0) return s;
    return s.length % 2 === 1 ? s[parseInt(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
    // return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

console.log(solution("abcde"));
/*

ba -> ba (0, 1)

apple -> p (5 % 2)

rainbow -> n ( 7 % 2)

banana -> na (2, 3)


 */