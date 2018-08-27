function solution(s){

    return (s.match(/p/ig) || []).length === (s.match(/y/ig) || []).length;
    // undefined 에러 처리까
}

console.log(solution("pPooyY"));
console.log(solution("PyY"));
