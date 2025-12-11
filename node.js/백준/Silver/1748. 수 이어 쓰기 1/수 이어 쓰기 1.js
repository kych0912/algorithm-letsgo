let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n');
const n  = Number(input[0])

let answer=0;

for(let i=1;i<=n;i++){
    const m = Math.floor(Math.log10(i)) +1
    answer +=m
}

console.log(answer);