let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,s,m] = input.shift();
const list = input.shift()

const dp = Array.from({length:51},()=>Array.from({length:1001},()=>false));
dp[0][s] = true;

for(let i=0;i<n;i++){
    // [false,false... ,true, ...]
    const prev = dp[i];
    // 5
    const v = list[i];

    for(let j=0;j<=1000;j++){
        if(!prev[j]) continue;
        if(j + v <=m) dp[i+1][j + v] = true
        if(j - v >=0) dp[i+1][j-v] = true
    }
}

let answer = -1

for(let i=0;i<=1000;i++){
    if(dp[n][i]) answer = Math.max(answer,i)
}
console.log(answer)