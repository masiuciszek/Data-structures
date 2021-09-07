export class Node {
  value: number
  left: null | Node
  right: null | Node
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class Bst {
  root: null | Node
  constructor() {
    this.root = null
  }

  insertNode(value: number): Bst {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
      return this
    }

    let current = this.root
    while (true) {
      if (value === current.value) return this
      if (value < current.value) {
        // go left
        if (!current.left) {
          // if we hit the end of the edge
          current.left = node
          return this
        } else {
          current = current.left
        }
      } else if (value > current.value) {
        // go right
        if (!current.right) {
          current.right = node
          return this
        } else {
          current = current.right
        }
      }
    }
  }
  search(key: number) {
    return this.searchHelper(this.root, key)
  }
  searchHelper(root: Node | null, key: number): Node | null {
    if (root == null || root.value == key) return root
    if (root.value < key) return this.searchHelper(root.right, key)
    return this.searchHelper(root.left, key)
  }

  // similar to binary search
  contains(value: number): boolean {
    if (!this.root) return false
    if (this.root.value === value) return true
    let current: Node = this.root
    while (current) {
      if (value < current.value) {
        current = current.left!
      } else if (value > current.value) {
        current = current.right!
      } else {
        return true
      }
    }
    return false
  }
}

const bst = new Bst()
