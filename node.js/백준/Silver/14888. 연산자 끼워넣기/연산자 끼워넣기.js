let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))

const n= input.shift();
const arr = input.shift().map((item)=>Number(item));
const cal = input.shift().map((item)=>Number(item));

let max=-1000000000
let min=1000000000

const result = []

const add = (a,b)=>{
    return a+b
}

const minus=(a,b)=>{
    return a-b
}

const mult=(a,b)=>{
    return a*b
}

const div=(a,b)=>{
    if(a<0){
        return -Math.floor(-a/b)
    }
    return Math.floor(a/b)
}

const back = (sum,depth) =>{
    if(depth===arr.length){
        min=Math.min(sum,min)
        max=Math.max(max,sum)
        return;
    }

    for(let i=0;i<4;i++){
        if(cal[i]===0) continue;

        switch(i){
            case 0:
                cal[i]-=1
                back(add(sum,arr[depth]),depth+1)
                cal[i]+=1
                break;
            case 1:
                cal[i]-=1
                back(minus(sum,arr[depth]),depth+1)
                cal[i]+=1
                break;
            case 2:
                cal[i]-=1
                back(mult(sum,arr[depth]),depth+1)
                cal[i]+=1
                break;
            case 3:
                cal[i]-=1
                back(div(sum,arr[depth]),depth+1)
                cal[i]+=1
                break;
        }
    }
}

back(arr[0],1)

//js는 0과 -0이 다르다
console.log(max?max:0)
console.log(min?min:0)