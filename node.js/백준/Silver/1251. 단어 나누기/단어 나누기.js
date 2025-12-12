let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('');
const length = input.length;

const reverseString=(start,mid,end)=>{
    return [
        start.reverse(),
        mid.reverse(),
        end.reverse()
    ]
}

const sliceArray=(arr,start,end)=>{
    const startArr = arr.slice(0,start);
    const midArr = arr.slice(start,end);
    const endArr = arr.slice(end,length);
    return [startArr,midArr,endArr]
}
const answer = []

for(let i =1;i<length;i++){
    for(let j=i+1;j<length;j++){
        const [start,mid,end] = sliceArray(input,i,j);
        const joinStr = reverseString(start,mid,end).reduce((prev,cur)=>
            prev.concat(cur)
        ,[]).reduce((prev,cur)=>prev+=cur,'');
        answer.push(joinStr)
    }
}

answer.sort();
console.log(answer[0])