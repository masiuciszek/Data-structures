class BstNode {
  value: number
  left: BstNode | null
  right: BstNode | null
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  root: BstNode | null
  constructor() {
    this.root = null
  }

  insert(key: number) {
    if (!this.root) {
      this.root = new BstNode(key)
    } else {
      this.insertRecursive(this.root, new BstNode(key))
    }
  }

  insertRecursive(node: BstNode, newNode: BstNode) {
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

  breadthFirstTraversal(root: BstNode, visitFn: (value: number) => void) {
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

  print() {
    let result = ""

    const addKeyToResult = (node: BstNode, level: number) => {
      result += result.length === 0 ? node.value : `\n${"".repeat(level * 2)}${node.value}`
    }

    return result
  }
}

const bst = new BinarySearchTree()
bst.insert(11)
bst.insert(10)
bst.insert(12)
bst.insert(1)
bst.insert(16)

const visitFn = (value: number) => {
  console.log(value)
}
console.log(bst.breadthFirstTraversal(bst.root!, visitFn))
