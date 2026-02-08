let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

let n = +input.shift();

const VISITED = Array.from({length:n},()=>false)

const backtracking = (arr,depth)=>{
    if(depth===n){
        console.log(arr.join(' '))
    }
    
    for(let i=0;i<n;i++){
        if(VISITED[i]) continue;
        arr.push(i+1)
        VISITED[i] = true
        backtracking(arr,depth+1)
        arr.pop()
        VISITED[i]=false;
    }
}   

backtracking([],0)