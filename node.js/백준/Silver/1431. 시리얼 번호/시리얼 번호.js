let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const n = input.shift();

const compareLength = (a,b)=>{
    return a.length-b.length
}

const compareNumberSum = (a,b)=>{
    const numberRegExp = /^\d+$/
    const aNumber = a
    .split('')
    .filter((item)=>numberRegExp.test(item))
    .map((item)=>Number(item))
    .reduce((prev,cur)=>prev+cur,0)
    const bNumber = b
    .split('')
    .filter((item)=>numberRegExp.test(item))
    .map((item)=>Number(item))
    .reduce((prev,cur)=>prev+cur,0)
    return aNumber-bNumber
}


input.sort().sort(compareNumberSum).sort(compareLength).map((item)=>console.log(item))