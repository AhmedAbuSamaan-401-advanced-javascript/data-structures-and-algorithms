class Vertex {
    constructor(value) {
      this.value = value;
    }
  }
  class Edge {
    constructor(vertex, weight = 0) {
      this.vertex = vertex;
      this.weight = weight;
    }
  }
  class Graph {
    constructor() {
      this._adjancyList = new Map();
      this.counter=0;
    }
    
    addNode(vertex) {
      this._adjancyList.set(vertex, []);
      this.counter ++;
    }
    addEdge(startVertex, endVertex, weight) {
      if (
        !this._adjancyList.has(startVertex) ||
        !this._adjancyList.has(endVertex)
      ) {
        console.log('Vertex not found');
      } else {
        const adjacencies = this._adjancyList.get(startVertex);
        adjacencies.push(new Edge(endVertex, weight));
        
      }
    }
    getNeighbors(vertex) {
      if (this._adjancyList.has(vertex)) {
        return this._adjancyList.get(vertex);
      }
    }
    getNodes() {
      for (const [vertex, edge] of this._adjancyList.entries()) {
        console.log('Vertex>> ', vertex);
        console.log('Edge>>', edge);
      }
    }

    size(){
            console.log('Node numbers ', this.counter);
    }
  }

  const graph = new Graph();
  const ten = new Vertex(10);
  const two = new Vertex(2);
  const six = new Vertex(6);
  const seven = new Vertex(7);
  const three = new Vertex(3);
  const eight = new Vertex(8);
  graph.addNode(ten);
  graph.addNode(two);
  graph.addNode(six);
  graph.addNode(seven);
  graph.addNode(three);
  graph.addNode(eight);
  graph.addEdge(ten, two);
  graph.addEdge(ten, six);
  graph.addEdge(ten, three);
  graph.addEdge(ten, seven);
  graph.addEdge(two, seven);
  graph.addEdge(six, seven);
  graph.addEdge(six, eight);
  graph.addEdge(three, seven);
  graph.addEdge(eight, three);
  graph.addEdge(seven, three);
  graph.size();
//   console.log(graph);
//   graph.getNodes();
  console.log('NEIGHBORS', graph.getNeighbors(ten));
  