let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const left = input[0].split('');
const right = [];

const length = Number(input[1]);

for(let i=2;i<=length+1;i++){
    const command = input[i][0];
    
    switch(command){
        case 'P':
            left.push(input[i][2]);
            break;
        case 'L':
            if(left.length) right.push(left.pop());
            break;
        case 'D':
            if(right.length) left.push(right.pop())
            break;
        case 'B':
            left.pop();
            break;
    }
}

console.log(left.concat(right.reverse()).join(''))

