let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const n = input.shift();
input = input.shift()

const dp = Array.from({length:1000},(v,index)=>input[index] ?? 1)

for(let i=0;i<n;i++){
    for(let j=i;j<n;j++){
        if(input[i]<input[j]){
            dp[j] = Math.max(dp[i]+input[j],dp[j])
        }
    }
}

console.log(Math.max(...dp))