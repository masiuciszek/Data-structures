class BstN {
  value: number
  left: BstN | null
  right: BstN | null
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BstTree {
  root: BstN | null
  constructor() {
    this.root = null
  }

  insert(key: number) {
    if (!this.root) {
      this.root = new BstN(key)
    } else {
      this.insertRecursive(this.root, new BstN(key))
    }
  }

  insertRecursive(node: BstN, newNode: BstN) {
    if (newNode.value < node.value) {
      // go left
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertRecursive(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertRecursive(node.right, newNode)
      }
    }
  }

  bfsVersion2() {
    if (this.root === null) return
    let node = this.root
    const queue: Node[] = [node]
    const visited: Array<number> = []
    while (queue.length > 0) {
      node = queue.shift() as Node
      visited.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }

  breadthFirstTraversal(root: BstN, visitFn: (value: number) => void) {
    if (root === null) return
    const queue = [root]

    while (queue.length > 0) {
      const item = queue.shift()
      const value = item?.value
      if (value) {
        visitFn(value)
      }

      if (!item?.left && !item?.right) {
        continue
      }
      if (item.left !== null) {
        queue.push(item.left)
      }
      if (item.right !== null) {
        queue.push(item.right)
      }
    }
  }

  getMin() {
    if (this.root === null) return this
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  getMax() {
    if (this.root === null) return this
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current.value
  }

  find(data: number) {
    if (this.root === null) return this
    let current = this.root
    while (current.value !== data) {
      if (data < current.value) {
        current = current.left!
      } else {
        current = current.right!
      }
      if (current === null) return null
    }
    return current
  }
}
