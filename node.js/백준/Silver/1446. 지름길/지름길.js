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

arr[0] = 0

input.map((item)=>{
    const [start,end,dis] = item;
    const realGap = end-start
    arr[end] = Math.min(dis+arr[start],arr[end],realGap + arr[start])
})

for(let i=1;i<=d;i++){
    arr[i] = Math.min(arr[i],arr[i-1]+1)

    input.forEach((item)=>{
        const [start,end,dis] = item;
        if(start===i && end<=d){
            arr[end]=Math.min(arr[end],arr[i]+dis)
        }
    })
}


console.log(arr[d])