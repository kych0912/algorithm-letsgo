let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n');
let n = input.shift();
const length = input[0].length;


// 뒤에 있는 인덱스를 반환
const getLastIndex = (i) => {
    return length - i - 1;
}

// 뒤에서 하나씩 확인
const isAnswer = (lastIndex) => {
    let set = new Set();
    input.map((item)=>{
        set.add(item.substring(lastIndex,length+1))
    })
    return Number(set.size) === Number(n);
}

for(let i=0;i<length;i++){
    const lastIndexReturn = getLastIndex(i);
    if(isAnswer(lastIndexReturn)){
        console.log(i+1)
        break;
    }
    
}