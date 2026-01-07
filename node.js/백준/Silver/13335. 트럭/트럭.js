let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const [n,l,w] = input.shift().split(' ').map((item)=>Number(item))
input = input[0].split(' ').map((item)=>Number(item))

const bridge = []

const getBridgeWeight = () => {
    let sum = 0;
    for(let i=0;i<bridge.length;i++){
        sum += bridge[i].w;
    }
    return sum
}

const addBridgeIndex = () => {
    for(let i=0;i<bridge.length;i++){
        ++bridge[i].i;
    }
}

const shiftBridgeFirst = () => {
    if(!bridge.length) return;
    const first = bridge[0];

    if(first.i >= l) bridge.shift();
}

const getIsFull = () => {
    return getBridgeWeight() + input[0] > w || bridge.length >=l;
}

ans = 0;

while(input.length || bridge.length){
    // 일단 한칸 이동 후
    addBridgeIndex();
    shiftBridgeFirst();
    // 비웠을 때 넣을 자리가 있고, inputd에도 남아있다면 push
    // 위 동작 모두가 하나의 단위시간
    if(!getIsFull() && input.length) bridge.push({i:0,w:input.shift()});
    ans++;
}

console.log(ans)