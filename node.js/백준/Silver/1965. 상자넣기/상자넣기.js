let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' ')).map((item)=>item.map(Number));
const n = input.shift();
const dp = Array.from({length:n},()=>0)

// 최장길이수열문제

// dp[i]는 i가 최대로 만들 수 있는 최대길이수열
input = input[0]

input.map((item,index)=>{
    dp[index] = 1;
    for(let i=0;i<index;i++){
        if(input[index]>input[i]) dp[index] = Math.max(dp[index],dp[i]+1)
    }
})

console.log(Math.max(...dp))