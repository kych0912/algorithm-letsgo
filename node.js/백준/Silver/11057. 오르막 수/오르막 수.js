let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const n = +input.shift();

const matrix = Array.from({length:n+1},()=>Array.from({length:10},()=>1))

matrix[0] = Array.from({length:10},()=>1)

for(let i=1;i<=n;i++){
    for(let j=1;j<10;j++){
        matrix[i][j] = (matrix[i-1][j] + matrix[i][j-1])%10007
    }
}
console.log(matrix[n][9])