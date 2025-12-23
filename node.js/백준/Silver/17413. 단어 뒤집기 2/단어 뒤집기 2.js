let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split('')).shift();

// 문자열 하나씩 탐색
// 태그 플래그로 태그 확인
// 태그가 아니라면
// 공백 || 마지막 끝이 나올때까지 버퍼에 넣어둠
// 나오면 reverse해서 입력



const ans = []
let tagFlag = false;
const buffer = [];

const pushAnsBuffer = () =>{
    const size=buffer.length
    for(let i=0;i<size;i++){
        ans.push(buffer.pop())
    }
}

while(input.length){
    const word = input.shift();

    if(word === '<'){
        if(buffer.length){
            pushAnsBuffer()
        }
        tagFlag = true
        ans.push(word)
        continue;
    }

    if(word==='>'){
        tagFlag = false
        ans.push(word)
        continue;
    }
    
    if(tagFlag) {
        ans.push(word)
        continue;
    }
    // 이제 그냥 단어
    // 공백이면 reverse해서 ans push

    if(word === ' '){
        pushAnsBuffer()
        ans.push(' ')
        continue;
    }

    // 문자면 buffer에 넣기
    buffer.push(word)
}   

// 버퍼 남아있으면 reverse해서 넣기
if(buffer.length){
    pushAnsBuffer()
}
console.log(ans.join(''))