let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

let n = Number(input.shift());

const q = []

const flag = input.shift().split(' ').map(Number)
const value = input.shift().split(' ').map(Number)

for(let i=0;i<n;i++){
    if(flag[i] === 0) q.push(value[i])
}

input.shift()
const ans = []
q.reverse()
let index=0;

input[0].split(' ').map((item)=>{
    q.push(Number(item))
    ans.push(q[index++])
})

console.log(ans.join(' '))