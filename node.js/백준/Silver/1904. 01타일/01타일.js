let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()

const n = Number(input)

const arr = []
arr.push(1)
arr.push(1)

for(let i=2;i<=n;i++){
    arr.push((arr[i-1] + arr[i-2])%15746);
}

console.log(arr[n])


// 1
// 00 11
// 100 001 111
// 0000 1100 1001 0011 11111
// 10000 00001 00111 00100 11100 11001 10011 11111

// 00100 00001 00111
// 10000 11100 11001 10011 111111

// 000000 001100 001001 000011 0011111
// 110000 100001 100111 100100 111100 111001 110011 111111