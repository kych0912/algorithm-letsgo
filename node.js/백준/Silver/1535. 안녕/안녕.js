let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

// 2차원 배열
// y축은 몇번째 사람인지
// x 값은 현재 체력
// dp[y][x] 는 y 번째 사람일 때, 체력 x일때 행복 최대값

const n = input.shift()[0];
const h = input.shift()
const happy = input.shift()

const dp = Array.from({length:n+1},()=>[])

dp[0].push({hp:100,happy:0})

for(let i=0;i<n;i++){
    const consume = h[i];
    const addHappy = happy[i];
    const curDP = dp[i]

    for(let j=0;j<curDP.length;j++){
        const cur = curDP[j]
        dp[i+1].push(cur);
        if(cur.hp - consume > 0) dp[i+1].push({hp:cur.hp-consume,happy:addHappy + cur.happy})
    }
}

let max = 0;

for(let i=0;i<dp[n].length;i++){
    max = Math.max(dp[n][i].happy,max)
}

console.log(max)