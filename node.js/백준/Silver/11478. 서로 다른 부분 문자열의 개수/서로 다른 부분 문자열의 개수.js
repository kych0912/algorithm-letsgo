let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const string = input.shift();

const length = string.length

const answer = new Set()

// 수열 길이
for(let i=1;i<=length;i++){
    // 시작 인덱스
    for(let j=0;j<=length-i;j++){
        answer.add(string.substring(j,j+i))
    }
}

console.log(answer.size)