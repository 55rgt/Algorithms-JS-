
/**
 * 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
 * @param n
 * n은 1,000,000 이하의 자연수 입니다.
 * @returns {number}
 * 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
 * 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
 * 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
 * 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
 */

/*

1001110
1010011

1001110



01111


10111


1. 맨 오른쪽부터 첫번째까지 탐험하면서 자기 왼쪽에 0이 있는 가장 왼쪽에 위치한 1의 위치를 찾는다. (찾은 1을 A라고 부르자)
case 1) 만약 A의 위치가 맨 왼쪽이 아니라고 하면, A의 왼쪽을 1로 바꾸고 A 위치부터 맨 오른쪽까지는 다 0으로 바꾼다.
        그 후, 맨 왼쪽부터 카운트해서 1로 바꿔준다.
case 2) 만약 A의 위치가 맨 왼쪽이라고 하면, 맨 왼쪽에 0을 추가하고 case 1처럼 한다.



 */
function solution(n) {

    let binary_n = n.toString(2);
    console.log(binary_n);
    let one_count = 0;
    let idx = 0;

    for(let i = binary_n.length - 1 ; i >= 0 ; i--){
        let elem = binary_n[i];
        if(elem === '1') one_count++;
        if(i === 0 || binary_n[i-1] === '0' && elem === '1'){
            idx = i;
            break;
        }
    }
    console.log(one_count, idx);


}

solution(78);
solution(15);