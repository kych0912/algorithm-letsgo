let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const n = input.shift();

input = input.shift()

const answer = Array.from({length:n},()=>-1)

// 현재 index 기준으로 왼쪽에 x만큼 space가 남아있는지 확인
const isEnoughPlace = (x,index) =>{
    let cnt=0;
    for(let i=0;i<index;i++){
        if(answer[i]===-1) cnt++;
    }
    return x===cnt
}

// input[i]가 x일때, 자기보다 큰 수의 갯수이므로 answer[x] = i
// 이때 answer[x] = -1이면 replace
// 아니라면 answer[x+1]=i로 설정
// 우로 이동은 -1을 만날때까지
for(let i=0;i<n;i++){
   let initX =  input[i]
   let x = initX

   while(answer[x]!==-1 || !isEnoughPlace(initX,x)){
    x++ 
   }
   answer[x]=i+1
}

console.log(answer.join(' '))