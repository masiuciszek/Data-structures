export class Node {
  name: string
  children: Node[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  addChild(name: string): Node {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch(array: string[]) {
    // use a queue
    // while queue is not empty
    // grab the first node in the queue
    // append iit to the array
    // check if there is any children of the current node
    // if so then we append it to the queue
    // return the array

    const queue: Node[] = [this]
    while (queue.length > 0) {
      const currentNode = queue.shift()
      if (currentNode?.name) {
        array.push(currentNode.name)
      }
      if (currentNode?.children) {
        for (const child of currentNode?.children) {
          queue.push(child)
        }
      }
    }
    return array
  }
}
