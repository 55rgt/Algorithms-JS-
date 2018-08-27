function solution(x, n) {
    let arr = [];
    while(n--) arr.push(arr[arr.length - 1] === undefined ? x : arr[arr.length - 1] + x);
    return arr;
}
