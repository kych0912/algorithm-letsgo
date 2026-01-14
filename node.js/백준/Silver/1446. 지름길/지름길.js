let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))


const [n,d] = input.shift();

const arr = Array.from({length:10000},(_,index)=>index)

input = input.sort((a,b)=>a[0]-b[0])

for(let [start,end,dis] of input){
    // 지름길 정보 입력
    arr[end] = Math.min(arr[end],arr[start]+dis)

    // 그리고 지름길 정보를 바탕으로 end에서부터 d까지 모든 정보 갱신
    for(let i=end+1;i<=d;i++){
        if(arr[i]>arr[end]+i-end){

            arr[i] = arr[end]+i-end  
        }
    }
}

console.log(arr[d])