// BIG O
// INSERTION O(logN)
// SERACHING O(logN)
// BINARY SEARCH TREE HAVE TWO APPROACHES TO TRAVERSE TREE.
// 1. BREADTH FIRST APPROACH  ====> WE TRAVERSE HORIZONTALLY FROM UP TO DOWN SIMPLE
// 2. DPETH FIRST APPROACH ===> 1. PREORDER  2. POSTORDER 3. INORDER   ====> IN THIS WE TRAVERSE IN DEPTH INSTEAD OF TRAVERSING HORIZONTALLY.
// Search	Order		
// pre-	    ROOT	LEFT	RIGHT
// in-	    LEFT	ROOT	RIGHT
// post-	LEFT	RIGHT	ROOT
    
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


    breadthFirstSearch(){
      let data=[]; // This array will store all element inwhich order those dequeued.
      let queue=[]; // This queue will be used to store what element will be dequeued a temp store.
      let node=this.root;
      queue.push(node);

      while(queue.length){
        // Removing element from queue from front.
        node=queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }

      return data;
    }

    depthFirstPreOrderSearch(){
        let data=[];

        const traverse=(node)=>{
            data.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right)
        }
         traverse(this.root)
        return data;
    }
    depthFirstPostOrderSearch(){
        let data=[];

        const traverse=(node)=>{
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right)
            data.push(node.value);
        }
         traverse(this.root)
        return data;
    }
    depthFirstInOrderSearch(){
        let data=[];

        const traverse=(node)=>{
            if(node.left)traverse(node.left);
            data.push(node.value);
            if(node.right)traverse(node.right)
        }
         traverse(this.root)
        return data;
    }
}

// DATA []
// QUEUE []

// 1. q [10]
//  enqueue 10 data [10]
// queue [5]

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

// [10,5,13,2,7,11,16]
console.log(tree.breadthFirstSearch())
// [10,5,2,7,13,11,16] PRE ORDER EXECUTE IN THIS ORDER => ROOT LEFT RIGHT
console.log(tree.depthFirstPreOrderSearch())
// depthFirstInOrderSearch result is sorted array you can expect by closing eye.INORDER EXECUTE IN THIS ORDER => LEFT ROOT RIGHT
// [2,5,7,10,11,13,16]
console.log(tree.depthFirstInOrderSearch())
// [2,7,5,11,16,13,10] POSTORDER EXECUTES IN THIS OREDR => LEFT RIGHT ROOT
console.log(tree.depthFirstPostOrderSearch())




