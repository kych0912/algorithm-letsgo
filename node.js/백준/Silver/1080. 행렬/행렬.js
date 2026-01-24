let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')

const [n,m]= input.shift().split(' ').map((item)=>Number(item));

input = input
.map((item)=>item.split(''))
.map((item)=>item.map(Number))

const init = input.splice(0,n);
const target = input.splice(0,n);

const isSame = (x,y)=>{
    return x===y
}

const calMatrix = (startX,startY) => {
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const value = init[startY + i][startX + j]
            switch(value){
                case 0:
                    init[startY + i][startX + j]=1
                    break
                case 1:
                    init[startY + i][startX + j]=0
                    break;
            }
        }
    }
}

let ans = -1

const isSameMatrix = () =>{
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(!isSame(init[i][j],target[i][j])){
                ans=-1
                return false;
            }
        }
    }
    return true;
}

if( n<3 || m<3 ){
    if(isSameMatrix()){
        console.log(0);
        return;
    }
    console.log(ans)
    return;
}

ans =0

for(let i=0;i<n-2;i++){
    for(let j=0;j<m-2;j++){
        if(!isSame(init[i][j],target[i][j])){
            calMatrix(j,i);
            ans++;
        }
    }
}

isSameMatrix();

console.log(ans)