function test(s) {
    let arr = s.split(" ");
    return +Math.min.apply(...arr)+ ' ' + Math.max.apply(...arr);
}

function solution(n) {
    // x + 2y = n ( x >= 0 , y >= 0);

    let count = 0;

    for(let i = n ; i >= 0 ; i -= 2){
        let x = i;
        let y = (n - i) / 2;
        let num = factorial(x + y) / (factorial(x) * factorial(y));
        count += num;
        console.log(`x: ${x} y: ${y} num: ${num} count: ${count}`);
    }
    return count;
}




const factorial = (function() {
    let save = {};
    let fact = function(number) {
        if (number > 0) {
            let saved = save[number - 1] || fact(number - 1);
            let result = number * saved;
            save[number] = result;
            return result;
        } else {
            return 1;
        }
    };
    return fact;
})();

console.log(solution(11));