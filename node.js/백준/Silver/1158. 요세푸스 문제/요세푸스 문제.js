let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [n,k] = input.map((item)=>Number(item));

const arr = Array.from({length:n},(_,index)=>index+1);
let answer = [];
let count=0;

while(arr.length>0){
    count++;
    const item=arr.shift();
    if(count%k!==0){
        arr.push(item);
    }else{
        answer.push(item);
    }
}

console.log('<'+answer.join(', ')+'>');