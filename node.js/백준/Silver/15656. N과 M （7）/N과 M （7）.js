let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,m]=input.shift();
input = input.shift().sort((a,b)=>a-b)

const ans=[]
const result = []

const bt = (depth) =>{

    if(depth===m){
        result.push(ans.join(' '))
        return;
    }

    for(let i=0;i<input.length;i++){
        ans.push(input[i])
        bt(depth+1)
        ans.pop()
    }   
}

bt(0)
console.log(result.join('\n'))