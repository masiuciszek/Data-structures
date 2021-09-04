class DomNode {
  key: string
  children: DomNode[]

  constructor(key: string) {
    this.key = key
    this.children = []
  }

  addChild(key: string): DomNode {
    const newChild = new DomNode(key)
    this.children.push(newChild)
    return newChild
  }
}

type Fn = (node: DomNode, depth: number) => void

class DomTree {
  root: DomNode | null

  constructor() {
    this.root = null
  }

  setRoot(key: string) {
    if (this.root === null) {
      this.root = new DomNode(key)
    }
    return
  }

  getRoot() {
    return this.root
  }

  traverse(node: DomNode, fn: Fn, depth = 0) {
    // call visitFunction
    fn(node, depth)
    // base case
    if (node.children.length > 0) {
      // then we can traverse
      node.children.forEach(child => {
        this.traverse(child, fn, depth + 1)
      })
    }
  }

  print(): string {
    let result = ""
    const visitFn = (node: DomNode, depth: number) => {
      result += result.length === 0 ? node.key : `\n${" ".repeat(depth * 2)}${node.key}`
    }
    this.traverse(this.root as DomNode, visitFn, 0)
    return result
  }
}

const t = new DomTree()

t.setRoot("HTML")
const DomRoot = t.getRoot()
const nav = DomRoot?.addChild("nav")
const footer = DomRoot?.addChild("footer")
const main = DomRoot?.addChild("main")
const h1 = main?.addChild("h1 -- hello")
const div1 = main?.addChild("div")
const div2 = main?.addChild("div")
const p1 = div1?.addChild("p -- hello there")

console.log(t.print())
