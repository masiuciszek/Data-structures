class Node<T> {
  data: T
  next: Node<T> | null
  prev: Node<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class List<T> {
  head: Node<T> | null
  tail: Node<T> | null
  size: number
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  append(data: T) {
    const newNode = new Node(data)
    if (this.size === 0) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this
    }
    this.tail!.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
    this.size++
    return this
  }
  prepend(data: T) {
    var newNode = new Node(data)
    if (this.size === 0) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this
    }
    this.head!.prev = newNode
    newNode.next = this.head
    this.head = newNode
    this.size++
    return this
  }
  pop() {
    if (!this.tail) {
      return null
    }
    if (this.size === 1) {
      this.head = null
      this.tail = null
      this.size--
      return this
    }
    const poppedNode = this.tail
    this.tail = poppedNode.prev
    this.tail!.next = null
    poppedNode.prev = null
    this.size--
    return this
  }
  shift(data: T) {}
  get(index: number) {}
  deleteAt(index: number) {}
  get getSize() {
    return this.size
  }

  print(): string {
    const xs: T[] = []
    let current = this.head

    while (current !== null) {
      xs.push(current.data)
      current = current.next
    }
    return xs.join(" -> ")
  }
}

const list = new List()
list.prepend("L")
list.append("V")
list.append("R")
list.append("M")
list.pop()
console.log(list.print())
