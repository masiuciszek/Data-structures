interface Node {
  data: number
  next: Node | null
}

interface LinkedList {
  head: Node | null
  tail: Node | null
  size: number
  append(data: number): Node
  prepend(data: number): Node
  remove(index: number): boolean
  removeFromTail(): boolean
  removeFromHead(): boolean
  show(): string
  isEmpty(): boolean
  get(index: number): Node | boolean
  getSize(): number
  reverse(node: Node): Node
}
function createNode(data: number): Node {
  return {
    data,
    next: null,
  }
}

function LinkedList(): LinkedList {
  return {
    head: null,
    tail: null,
    size: 0,
    append(data: number) {
      const newNode = createNode(data)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.size++
        return newNode
      }

      this.tail!.next = newNode
      this.tail = newNode
      this.size++

      return newNode
    },
    prepend(data: number) {
      const newNode = createNode(data)
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
        this.size++
        return newNode
      }
      newNode.next = this.head
      this.head = newNode
      this.size++
      return newNode
    },

    get(index: number) {
      if (index < 0 || index >= this.getSize()) {
        return false
      }
      let counter = 0
      let current = this.head
      while (current) {
        if (counter === index) {
          return current
        }
        counter++
        current = current.next
      }
      return false
    },

    getSize() {
      return this.size
    },

    show() {
      const xs: string[] = []
      let current = this.head
      while (current) {
        xs.push(current.data.toString())
        current = current.next
      }
      return xs.join(" => ")
    },
    isEmpty() {
      return this.size === 0
    },
    removeFromHead() {
      if (this.isEmpty()) return false
      this.head = this.head!.next
      this.size--
      return true
    },
    removeFromTail() {
      if (this.isEmpty()) return false
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
        this.size--
        return true
      }
      let nodePrevTail = this.head
      while (nodePrevTail?.next !== this.tail) {
        nodePrevTail = nodePrevTail!.next
      }
      nodePrevTail.next = null
      this.size--
      return true
    },
    remove(index: number) {
      if (this.isEmpty()) return false
      if (index < 0 || index >= this.getSize()) return false
      if (index === 0) {
        this.removeFromHead()
        return true
      }
      if (index === this.getSize()) {
        this.removeFromTail()
        return true
      }

      let current = this.head
      let prev = null
      let counter = 0
      while (counter < index) {
        counter++
        prev = current
        current = current!.next
      }

      const deleted = current
      prev!.next = deleted!.next
      if (prev?.next === null) {
        this.tail = prev
      }
      this.size--
      return true
    },
    reverse(node: Node) {
      if (node === null || node.next === null) return node
      const p = this.reverse(node.next)
      node.next.next = node
      node.next = null
      return p
    },
  }
}

// const l = LinkedList()
// l.append(2)
// l.append(12)
// l.append(33)
// l.prepend(99)
// // l.removeFromHead()
// // l.removeFromHead()
// l.remove(2)
// console.log(l.show())
