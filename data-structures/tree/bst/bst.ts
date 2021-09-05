export class BstNode<T> {
  value: T
  left: null | BstNode<T>
  right: null | BstNode<T>
  constructor(value: T) {
    this.value = value
    this.left = null
    this.right = null
  }
}

export class Bst<T> {
  root: null | BstNode<T>
  constructor() {
    this.root = null
  }

  insertNode(value: T): Bst<T> {
    const node = new BstNode(value)
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

  // similar to binary search
  contains(value: T): boolean {
    if (!this.root) return false
    if (this.root.value === value) return true
    let current: BstNode<T> = this.root
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

bst.insertNode(2)
bst.insertNode(1)
bst.insertNode(3)
