let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' ')).map((item)=>item.map(Number));

const dx = [0,0,1,-1,1,1,-1,-1]
const dy = [1,-1,0,0,1,-1,-1,1]

const isOverFlow = (x,y,w,h) =>{
    return x<0||x>=w||y>=h||y<0;
}

function DFS(x,y,map,VISITED){
    const dlength = dx.length;
    const w = map[0].length
    const h = map.length;

    if(!map[y][x]) return;

    for(let i=0;i<dlength;i++){
        const nextX = x+dx[i];
        const nextY = y+dy[i];
        if(isOverFlow(nextX,nextY,w,h)) continue; 
        if(VISITED[nextY][nextX]) continue;
        VISITED[nextY][nextX]=true
        DFS(nextX,nextY,map,VISITED)
    }
}


while(true){
    const[w,h]=input.shift();
    if(w===0&&h===0) break;

    const map=[]
    const VISITED = Array.from({length:h},()=>Array.from({length:w},()=>false))

    for(let i=0;i<h;i++){
        map.push(input.shift());
    }

    let ans = 0;
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            if(!map[i][j] || VISITED[i][j]) continue;
            DFS(j,i,map,VISITED);
            ans++;
        }
    }
    console.log(ans)

}