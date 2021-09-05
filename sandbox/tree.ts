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

  insert(key: number) {
    this.root = this.insertRec(this.root, key)
  }
  insertRec(root: Node | null, value: number): Node {
    if (root === null) {
      root = new Node(value)
      return root
    }
    if (value < root.value) {
      root.left = this.insertRec(root.left, value)
    } else {
      root.right = this.insertRec(root.right, value)
    }
    return root
  }

  search(key: number) {
    let current = this.root
    let found = false
    while (current && !found) {
      if (key === current.value) {
        found = true
        return current
      }
      if (key < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return current
  }
  bfs() {
    if (this.root === null) {
      return
    }
    let node = this.root
    const queue: Array<Node> = [node]
    const visited: Set<number> = new Set()
    while (queue.length > 0) {
      node = queue.shift() as Node
      visited.add(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }

  dfsPreOrder() {
    const visited: Array<string> = []
    const traverse = (node: Node, level = 0) => {
      visited.push(`\n${" ".repeat(level * 2)}${node.value}`)
      if (node.left) traverse(node.left, level + 1)
      if (node.right) traverse(node.right, level + 1)
    }
    traverse(this.root as Node)
    return visited.join("\n")
  }

  dfsPostOrder() {
    const visited: Array<string> = []
    const traverse = (node: Node, level = 0) => {
      if (node.left) traverse(node.left, level + 1)
      if (node.right) traverse(node.right, level + 1)
      visited.push(`\n${" ".repeat(level * 2)}${node.value}`)
    }
    traverse(this.root as Node)
    return visited.join("\n")
  }
  dfsInOrder() {
    const visited: Array<string> = []
    const traverse = (node: Node, level = 0) => {
      if (node.left) traverse(node.left, level + 1)
      visited.push(`\n${" ".repeat(level * 2)}${node.value}`)
      if (node.right) traverse(node.right, level + 1)
    }
    traverse(this.root as Node)
    return visited.join("\n")
  }
}

const b = new Bst()
b.insert(100)
b.insert(10)
b.insert(20)
b.insert(50)
console.log(b.dfsPreOrder())
