let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' ')).map((item)=>item.map(Number));
const n = input.shift()[0];
input = input[0].sort((a,b)=>a-b)

// 하나씩 2개 조합,
// 0이면 최저로 break
// min 확인
// 합이 0보다 작으면 left++
// 크면 right--
// 0이면 정답
let absMin = Math.abs(input[0]+input[n-1])

let answer = [input[0],input[n-1]]
let [left,right] = [0,n-1];

while(left<right){
    const sum = input[left]+input[right]
    const absSum = Math.abs(sum);
    
    if(absSum === 0){
        answer[0] = input[left]
        answer[1] = input[right]
        break;
    }

    if(absMin>absSum) {
        absMin = absSum
        answer[0] = input[left]
        answer[1] = input[right];
    }

    if(sum<0){
        left++;
    }else{
        right--;
    }
}
console.log(answer.join(' '))