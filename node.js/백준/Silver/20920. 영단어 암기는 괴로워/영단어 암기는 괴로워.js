let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

let [n, l] = input.shift().split(' ').map(v=>+v);
input = input.filter((item)=>item.length>=l)

let map=new Map()
const answer = []

input.map((item)=>{
    if(map.has(item)){
        map.set(item,map.get(item)+1)
    }else{
        map.set(item,1)
        answer.push(item)
    }
})

answer.sort().sort((a,b)=>b.length-a.length).sort((a,b)=>map.get(b)-map.get(a))

console.log(answer.join('\n'))

