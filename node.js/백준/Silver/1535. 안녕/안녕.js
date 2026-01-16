let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

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
