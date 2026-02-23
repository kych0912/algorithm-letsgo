let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,m]=input.shift();
input = input.shift().sort((a,b)=>a-b)

const VISITED = Array.from({length:n},()=>false)

const bt = (d,ans,idx)=>{
    if(d===m){
        console.log(ans.join(' '))
    }

    let left =0

    for(let i=idx;i<n;i++){
        const item = input[i]
        if(VISITED[i] || left === item) continue;

        VISITED[i] = true;
        ans.push(item)
        left = item
        bt(d+1,ans,i+1)
        ans.pop()
        VISITED[i]=false
    }
}

bt(0,[],0)