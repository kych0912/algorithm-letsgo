let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const n = Number(input.shift())

input = input[0].split(' ').map((item)=>Number(item))

// 좌 우 스택 운영
// 만약 우 스택 최소보다 작다면 우 스택에 push
// 만약 우 스택 최소보다 크다면 우 스택 탑들의 수신처는 해당 인덱스를 갯수만큼 ans에 push
// 없다면 0

let ans = Array.from({length:n},()=>0);
const right = [];
let min = Infinity;

for(let i=n;i>=0;i--){
    const cur = input.pop();
    switch(cur < min || !right.length){
        case true:
            right.push({cur,i});
            min = cur;
            break;
        case false:
            while(cur>= right[right.length-1]?.cur){
                const r = right.pop()
                ans[r.i-1] = i;
            }
            right.push({cur,i})
            min = cur
            break;
    }

}
console.log(ans.join(' '))
