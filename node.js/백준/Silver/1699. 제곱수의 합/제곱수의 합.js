let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()

const n = Number(input)

const array = Array.from({length:100001},()=>Infinity)

for(let i=1;i<=n;i++){
    const sqrt = parseInt(Math.sqrt(i))
    if(sqrt*sqrt === i) {
        array[i] = 1
        continue;
    }

    for(let j=1;j*j<=i;j++){
        array[i] = Math.min(1+ array[i-j*j],array[i]);
    }
}

console.log(array[n])
