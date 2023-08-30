// Binary Heap is a kind of tree.
// We have two types of binary heap.
// 1. MaxBinaryHeap ===> Parent is greater than children 
// 2. MinBinaryHeap ===> Parent is less than children
// For any index of an array n. Left child stored at 2n+1. Right childe stored at 2n+2
// For any child node at index n it's parent is at index Math.floor((n-1)/2)


class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(-10);
heap.insert(-9);
heap.insert(109);
console.log(heap.values)


