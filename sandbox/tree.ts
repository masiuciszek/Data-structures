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
    this.searchRec(this.root, key)
  }
  searchRec(node: Node | null, value: number): Node | null {
    if (node === null || node.value === value) {
      return node
    }
    if (node.value < value) {
      return this.searchRec(node.left, value)
    }
    return this.searchRec(node.right, value)
  }
}

const b = new Bst()
b.insert(100)
b.insert(10)
b.insert(20)
b.insert(50)
// console.log(b)
console.log(b.search(50))
console.log(b.searchRec(b.root, 20))
