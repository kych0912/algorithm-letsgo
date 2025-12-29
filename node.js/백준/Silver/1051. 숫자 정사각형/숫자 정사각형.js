let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))

const [n,m] = input.shift().map((item)=>Number(item));

input = input.map((item)=>item[0].split(''))

const isSameDot = (x,y,length) =>{
    const start = input[y][x];
    const rightTop = input[y][x+length]
    const leftBottom = input[y+length][x]
    const rightBottom = input[y+length][x+length]
    return start === rightTop && start === leftBottom && start === rightBottom
}

const checkIsOver = (x,y,length) =>{
    const X = x+length;
    const Y = y+length;
    return X >= m || Y >= n
}

const minAxisLength = Math.min(n,m)
let ans = -Infinity

const main = () =>{
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            // 정사각형 length
            for(let d=0;d<minAxisLength;d++){
                if(checkIsOver(j,i,d)) continue;

                if(isSameDot(j,i,d)) ans=Math.max(ans,d)
            }
        }
    }
}

main();
console.log((ans+1)*(ans+1))