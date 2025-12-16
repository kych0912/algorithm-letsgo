let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '));

const n = input.shift()
const max = Infinity
input.map((item)=>Math.max(max,item.length));
input.sort((a,b)=>a.length-b.length);

// 초과되면 무조건 unique
// 그럼? 길이 오름차순으로 정렬 후 확인
// n이랑 set자료구조 크기랑
for(let i=1;i<max;i++){
    const set = new Set();

    while(input[0].length-1<i){
        input.shift();
    }
    const startLength = input.length

    for(let j=0;j<input.length;j++){
        const item = input[j].slice(0,i).join();
        set.add(item)
    }

    if(set.size === startLength){
        console.log(i);
        break;
    }
}
