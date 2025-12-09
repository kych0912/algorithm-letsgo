let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('');
input.sort();

let left = []
let right = []
let remain = [];

const pushRightAndLeft = (leftItem,rightItem)=>{
    left.push(leftItem)
    right.push(rightItem);
}

// 홀수개가 2개 이상이면 에루

while(input.length){
    let leftItem = input.shift();

    // 하나 남은 경우 remain에 넣기
    if(!input.length){
        remain.push(leftItem);
        break;
    }

    // 아닌경우 좌우 뽑기
    const rightItem = input.shift();
    //만약 다르면 
    if(leftItem !== rightItem){
        // 아니라면 하나는 remain에, 하나는 다시 앞으로
        remain.push(leftItem);
        input.unshift(rightItem);
    }else{
        pushRightAndLeft(leftItem,rightItem);
    }
}

if (remain.length > 1) {
    console.log("I'm Sorry Hansoo");
}else{
    const answer = left;

    //잔여가 있으면 넣기
    if(remain.length) answer.push(remain.shift())
    while(right.length){
        answer.push(right.pop());
    }
    console.log(answer.join(''));
}

