let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,l] = input.shift();
input = input.shift().sort((a,b)=>a-b)

const pipe = Array.from({length:1001},()=>-1)
input.map((item)=>pipe[item]=0)

let ans=0;

for(let i=0;i<=1000;i++){
    if(pipe[i]===-1) continue;

    if(pipe[i]===0){
        for(let j=0;j<l;j++){
            if(i+j>1000) continue;
            pipe[i+j]=1
        }
        ans++;
    }
}

console.log(ans)