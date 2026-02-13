let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const [n,m] = input.shift()

const count = (d,k) =>{
    let result = 0;
    temp = k

    while(temp<=d){
        result+=Math.floor(d/temp)
        temp*=k
    }
    return result
}

const d2 = count(n,2) - count(m,2) - count(n-m,2)
const d5 = count(n,5) - count(m,5) - count(n-m,5)

console.log(Math.min(d2,d5))