let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [x,y] = input.shift();

let prev = Math.floor(((y*100/x)))

// (prev+1)(x+a) = (100)(y+a)
// (prev+1)x + (prev+1)a = 100y + 100a
// (prev+1)x - 100y = (100-prev-1)a

if(prev >=99){
    console.log(-1)
    return;
}


// 부등소수점때문에 소수점 반올림처리
const result = Number((prev+1)*x - 100*y)/(100-prev-1).toFixed(10)

console.log(Math.ceil(result))