class Node {
  left: Node | null
  right: Node | null
  value: number
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Bst {
  root: Node | null
  constructor() {
    this.root = null
  }
  insert(value: number) {
    this.root = this.insertNode(this.root, value)
  }

  insertNode(root: Node | null, value: number) {
    if (root === null) {
      root = new Node(value)
      return root
    }
    if (value < root.value) {
      root.left = this.insertNode(root.left, value)
    }
    if (value > root.value) {
      root.right = this.insertNode(root.right, value)
    }
    return root
  }

  search(key: number) {
    return this.searchHelper(this.root, key)
  }
  searchHelper(root: Node | null, key: number): Node | null {
    if (root == null || root.value == key) return root
    if (root.value < key) return this.searchHelper(root.right, key)
    return this.searchHelper(root.left, key)
  }

  bfs() {
    if (this.root === null) return null
    const queue: Array<Node> = []
    const visited: Array<number> = []
    let node = this.root
    queue.push(node)

    while (queue.length > 0) {
      node = queue.shift() as Node
      visited.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }

  getMin() {
    let current = this.root
    if (current === null) return current
    while (current.left !== null) {
      current = current?.left
    }
    return current.value
  }
  getMax() {
    let current = this.root
    if (current === null) return current
    while (current.right !== null) {
      current = current?.right
    }
    return current.value
  }

  dfsPreOrder() {
    if (this.root === null) return this.root
    const nodes: Array<number> = []
    const traversePreOrder = (node: Node) => {
      if (node === null) {
        return node
      }
      nodes.push(node.value)
      traversePreOrder(node.left!)
      traversePreOrder(node.right!)
    }
    traversePreOrder(this.root)
    return nodes
  }

  dfsPostOrder() {}
  dfsInOrder() {}
}

const b = new Bst()
b.insert(100)
b.insert(50)
b.insert(120)
b.insert(30)
b.insert(20)
b.insert(110)
console.log(b.bfs())
console.log(b.getMax())
console.log(b.dfsPreOrder())
