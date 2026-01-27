let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const n = input.shift()
input = input.shift();

const dp =[input[0]]

for(let i=1 ;i<n;i++){
    dp[i] = Math.max(dp[i-1]+input[i],input[i])
}

console.log(Math.max(...dp))