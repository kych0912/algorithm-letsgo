let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split(' ')

let [n,m] = input.map((i)=>Number(i))

let ans=1n
let child=1n

for(let i=0;i<m;i++){
    ans = ans*BigInt(n-i)
    child=child*BigInt(i+1)
}

console.log((ans/child).toString())