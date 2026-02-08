let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

let n = +input.shift();

const RED = 1
const BLUE = 2

const result = []

const dfs = (start,graph,graphColor) =>{
    const stack=[start]

    while(stack.length){
        const cur = stack.pop()
        const curColor = graphColor[cur]

        if(!graph[cur].length) continue;

        for(const next of graph[cur]){
            if(curColor === graphColor[next]){
                return false;
            }
            if(!graphColor[next]){
                graphColor[next] = curColor===RED ? BLUE : RED
                stack.push(next)
            }
        }
    }
    return true
}

let idx = 0

while(n--){
    const [v,e] = input[idx++].split(' ').map(Number);
    const graph = Array.from({length:v+1},()=>[])
    const graphColor = Array(v+1).fill(0)
    for(let i=0;i<e;i++){
        const [a,b] = input[idx++].split(' ').map(Number);
        graph[a].push(b)
        graph[b].push(a)
    }

    let isNO=false;

    for(let i=1;i<=v;i++){
        if(!graphColor[i]){
            graphColor[i]=RED
            if(!dfs(i,graph,graphColor)){
                isNO=true
                break;
            }
        }
    }
    result.push(isNO ? 'NO' : 'YES');
}
console.log(result.join('\n'))