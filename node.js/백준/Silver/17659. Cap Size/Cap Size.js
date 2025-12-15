let input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n').map((item)=>item.split(' ')).map((item)=>item.map(Number));
const n = input.shift()

let cnt = 1;

while(input.length){
    const metadata = input.shift();
    const [dataSize,tried] = metadata
    const data = input.shift().map((item)=>Number(item))
    let min = -Infinity
    let max = Infinity
    const perfectFitSet = new Set();
    for(let i=0;i<tried;i++){
        const triedData = input.shift();
        const [capSize, capFit] = triedData;

        switch(capFit){
            // 너무 작아
            case 1:
                min = Math.max(capSize,min)
                break;
            // 완벽해
            case 0:
                perfectFitSet.add(capSize)
                break;
            // 너무 커
            case -1:
                max = Math.min(capSize,max)
                break;
        }
    }

    const perfectFitSize = perfectFitSet.size;

    console.log(`Data Set ${cnt}:`)
    if(perfectFitSize>=2){
        console.log('Inconsistent feedback');
        console.log('')
        cnt++;
        continue;
    }

    if(min>=max){
        console.log('Inconsistent feedback');
        console.log('')
        cnt++;
        continue;
    }

    if(perfectFitSize){
        if(perfectFitSize !== 1) {
            console.log('Inconsistent feedback');
            console.log('')
            cnt++;
            continue;
        }
        else{
            const perfectFit = perfectFitSet.values().next().value;
            if(!(min<perfectFit&&perfectFit<max)){
                console.log('Inconsistent feedback');
                console.log('')
                cnt++;
                continue;
            }
            cnt++;
            console.log(1); 
            console.log('')
            continue;
        }
    }else{
        let ans = 0;
        for (const s of data) {
            if (min < s && s < max) ans++;
        }
        console.log(ans)
        console.log('')
        cnt++
        continue;   
    }
}


