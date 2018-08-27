function solution(n) {
    let array = [];

    n.toString().split('').reverse().forEach(function (e) {
        array.push(parseInt(e));
    });

    return array;

    //return (n+"").split("").reverse().map(v => parseInt(v));
}

solution(12345);