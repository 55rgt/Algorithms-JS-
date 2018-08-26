function solution(s) {
   //return Number(s).toString().length === s.length && s.length === 4 || s.length === 6;
    //return s.length == 4 || s.length == 6 ? !isNaN(s) : false
    return (/^\d{6}$|^\d{4}$/).test(s);
}


console.log(solution("12a34"));
console.log(solution("1234"));