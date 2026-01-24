let input = require('fs')
.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
.toString()
.trim()
.split('\n')
.map((item)=>item.split(' '))
.map((item)=>item.map(Number))

const n = input.shift()[0];
const trees = input.shift();
const deleteId = input.shift()[0];

// node class
// 자식 노드 배열
// 자신의 숫자
// 자식 노드 삽입
class Node{
    constructor(id,parentNodeId){
        this.parent=parentNodeId
        this.id=id;
        this.children=[]
    }   

    insertChildren(childId){
        const newNode = new Node(childId,this.id)
        this.children.push(newNode);
        return newNode
    }

    getChildrenNodesLength(){
        return this.children.length
    }

    getDeletedNodeId(){
        const deletedNodeIds=[]
        this.children.map((node)=>{
            deletedNodeIds.push(...node.getDeletedNodeId())
        })
        return [...deletedNodeIds,this.id]
    }
}   

// tree class
// 노드 삽입
    // 부모 노드 입력 받으면 자식에 주입
// 노드 제거
    // 제거 노드를 입력받으면 재귀적으로 자식 노드들도 삭제
// leaf 노드 획득
    // 모든 노드를 순회해 자식이 없는 노드 숫자 확인

class Tree{
    constructor(){
        this.nodes=[]
        this.root = undefined
    }

    findNodeIndexById(id){
        const index = this.nodes.findIndex((el)=>{
            return id===el.id
        })
        return index
    }

    insertNode(id,parentId){
        if(parentId===-1){
            const Root = new Node(id,-1);
            this.root = Root
            this.nodes.push(Root);
            return;
        }

        const parentNodeIndex = this.findNodeIndexById(parentId)
        const newNode = this.nodes[parentNodeIndex].insertChildren(id)
        this.nodes.push(newNode)
    }

    deleteNode(id){
        // 부모에서 자식 노드 지우기
        const deleteNode = this.nodes[this.findNodeIndexById(id)]
        const parentId = deleteNode.parent
        let parentNode = this.nodes[this.findNodeIndexById(parentId)]

        // 루트 삭제면 다 삭제
        if(deleteNode.parent === -1){
            this.nodes=[];
            return;
        }
        parentNode.children = parentNode.children.filter((node)=>node.id!==id)
        // 삭제되는 자식 노드들 필터링하기
        const deletedNodeIds = deleteNode.getDeletedNodeId()
        deletedNodeIds.map((id)=>{
            this.nodes = this.nodes.filter((node)=>node.id !== id)
        })
    }

    getLeafNode(){
        let leaf=0;
        this.nodes.map((item)=>{
            if(item.getChildrenNodesLength()===0){
                leaf++;
            }
        })
        return leaf
    }
}

const tree = new Tree();
// 루트 순서 보장
const nodeArray = trees.map((value,index)=>{
    return{
        id:index,
        parentId:value
    }
}).sort((a,b)=>a.parentId - b.parentId)

tree.insertNode(nodeArray[0].id,nodeArray[0].parentId)
nodeArray.shift();

while(nodeArray.length){
    const node = nodeArray.shift()
    if(tree.findNodeIndexById(node.parentId) === -1){
        nodeArray.push(node);
        continue;
    }
    tree.insertNode(node.id,node.parentId)
}

tree.deleteNode(deleteId)
console.log(tree.getLeafNode())