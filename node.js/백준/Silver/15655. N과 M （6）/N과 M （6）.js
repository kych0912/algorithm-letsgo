let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,m]=input.shift()
input = input.shift().sort((a,b)=>a-b)
const arr=[]

const backtracking = (x) => {
    // 종료 조건
    // cnt === m
    if(arr.length === m){
        console.log(arr.join(' '))
    }

    // 방문했던 숫자는 가지치기
    for(let i=x ;i<n;i++){
        arr.push(input[i])
        backtracking(i+1);
        arr.pop();
    }
    
}

backtracking(0)