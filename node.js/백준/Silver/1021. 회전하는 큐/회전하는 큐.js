let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,m] = input.shift();

const arr = Array.from({length:n},(_,index)=>index+1)

input = input.shift();
let count = 0;

// 최소거리 찾기
// 순환 로직

for(let i=0;i<m;i++){
    const findValue = input[i]
    let index = arr.indexOf(findValue)
    while(findValue !== arr[0]){
        if(arr.length/2 > index){
            const unshift = arr.shift()
            arr.push(unshift)
        }else{
            const pop = arr.pop();
            arr.unshift(pop)
        }
        count++
    }

    arr.shift();
}
console.log(count)


