function solution(arr1, arr2) {
    for(let i = 0 ; i < arr1.length ; i++)
        for(let j = 0 ; j < arr1[i].length ; j++)
            arr2[i][j] += arr1[i][j];
    return arr2;
    // return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]));
console.log(solution([[1],[2]],[[3],[4]]));

