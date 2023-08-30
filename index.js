// A graph can be defined as group of vertices and edges that are used to connect these vertices. 
// A graph can be seen as a cyclic tree, where the vertices (Nodes) maintain any complex relationship among them instead of having 
// parent child relationship.
// A vertic is nothing but node.
// Edge is nothing but connection between two vertices/edge.
// We have two type of graphs directed and undirected.
// Now inorder to store connection between vertix we have 2 ways.
//  1. ADJACENCY MATRIX
//  2. 
// 1. ADJACENCY MATRIX:-
//     A   B    C   D   
//  A  1   0    0   0
//  B  1   1    0   0
//  C  1   0    0   0
//  D  0   1    1   1
// 2. ADJACENCY LIST:- Instead of using matrix we use key value pair
//  {
//    A:["A"],
//    B:["A","B"],
//    C:["A"],
//    D:["B","C","D"]
//  }


class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen")
// g.removeEdge("Los Angeles", "Aspen")
console.log(g)