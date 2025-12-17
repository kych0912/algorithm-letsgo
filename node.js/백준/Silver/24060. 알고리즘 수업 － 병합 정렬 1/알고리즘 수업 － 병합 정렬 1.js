let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' ')).map((item)=>item.map(Number));
const [a,k] = input.shift();
let answer = -1;
let cnt = 0;

const merge = (arr,p,q,r)=>{
    let i = p
    let j = q+1
    let temp = [];
    while(i<=q&&j<=r){
        if(arr[i]<=arr[j]) temp.push(arr[i++])
        else temp.push(arr[j++])
    }

    while(i<=q) temp.push(arr[i++]);

    while(j<=r) temp.push(arr[j++])
    for(let _k=0;_k<temp.length;_k++){
        arr[p+_k] = temp[_k]
        cnt++;
        if(cnt===k) answer=temp[_k];
    }
}

const merge_sort = (arr,p,r) =>{
    if(p<r){
        const q = parseInt((p+r)/2)
        merge_sort(arr,p,q);
        merge_sort(arr,q+1,r);
        merge(arr,p,q,r);
    }
}

function main(){
    const array = input[0];
    const length = array.length
    merge_sort(array,0,length-1)
    console.log(answer)
}
main()