

// function nearestPowerOf2(n) {
//     return 1 << 31 - Math.clz32(n);
// }



function solution(n) {

    let binaryNumber = n.toString(2);
    let string = '';
    let stringStore = [];

    for(let i = 0 ; i < binaryNumber.length ; i++){
        if(i === 0) stringStore.push('수');
        else if(i === 1) stringStore.push('수박');
        else stringStore.push(stringStore[stringStore.length - 1] + stringStore[stringStore.length - 1]);
    }


    for(let i = 0 ; i < binaryNumber.length ; i++){
        if(binaryNumber[i] === '1')
            string += stringStore[binaryNumber.length - 1 - i];
    }

    return string;

}

function solution2(n) {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}


console.time('someFunction');
console.log(solution(1025000));
console.timeEnd('someFunction');

// console.time('someFunction2');
// console.log(solution2(4));
// console.timeEnd('someFunction2');





