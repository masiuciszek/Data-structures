export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string) {
    this.children.push(new Node(name));
    return this;
  }
  // time= O(V+E) | space= O(V)

  depthFirstSearch(array: string[]) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

const graph = new Node("A").addChild("B").addChild("C");
graph.children[0].addChild("E").addChild("F");
graph.children[1].addChild("G").addChild("H");

console.log(graph.depthFirstSearch([]));
