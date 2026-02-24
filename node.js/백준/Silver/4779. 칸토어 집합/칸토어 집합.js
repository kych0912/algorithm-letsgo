let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>Number(item))

const fn = (s)=>{
    const length = s.length

    if(s.trim()==='') return s
    if(length === 1) return '-'

    return fn(s.substr(0,length/3))+fn(' '.repeat(length/3))+fn(s.substr(length*2/3,length))
}

for(const item of input){
    console.log(fn('-'.repeat(Math.pow(3,item))))
}
