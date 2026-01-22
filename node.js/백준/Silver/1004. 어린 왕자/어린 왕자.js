let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

// 점이 원 안에 있는 경우
// 만약 계산된 원이면 제거

let m = input.shift()[0]

while(m--){
    const [x,y,x1,y1] = input.shift();
    const n = input.shift()[0];
    
    const list = []
    let ans=0;
    for(let i=0;i<n;i++){
        list.push(input.shift())
    }


    for(let j=0;j<n;j++){
        const [x3,y3,r3]=list[j];
        const dist1 = Math.pow(Math.abs(x3-x),2) + Math.pow(Math.abs(y3-y),2)
        const dist2 = Math.pow(Math.abs(x3-x1),2) + Math.pow(Math.abs(y3-y1),2)

        const rDist = Math.pow(r3,2)

        const isInside1 = dist1 < rDist
        const isInside2 = dist2 < rDist

        if(isInside1 !== isInside2){
            ans++
        }
        

    }

    console.log(ans)
}