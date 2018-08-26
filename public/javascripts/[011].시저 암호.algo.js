function solution(s, n) {
    let str = "";

    for(let i = 0 ; i < s.length ; i++){

        let code = s.charCodeAt(i);

        s[i] === ' ' ? str += ' ' :
            (code >= 65) && (code <= 90) ? str += String.fromCharCode(((code - 65 + n) % 26) + 65) :
                (code >= 97) && (code <= 122) ? str += String.fromCharCode(((code - 97 + n) % 26) + 97) : str += '';
    }
    return str;
}
