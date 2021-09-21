interface Node {
  key: string
  children: Node[]
  addChild(key: string): Node
}
function createNote(key: string): Node {
  const children: Node[] = []
  return {
    key,
    children,
    addChild(key) {
      const newChild = createNote(key)
      children.push(newChild)
      return newChild
    },
  }
}
type FN = (node: Node, level: number) => void
function createTree(key: string) {
  const root = createNote(key)
  let result = ""
  return {
    root,
    traverse(node: Node, fn: FN, level: number) {
      fn(node, level)

      if (node.children.length > 0) {
        node.children.forEach(child => {
          this.traverse(child, fn, level + 1)
        })
      }
    },
    addKeyToResult(node: Node, level: number) {
      // result += result.length > 0 ? node.key : `\n${" ".repeat(level * 2)}${node.key}`
      result += result.length === 0 ? node.key : `\n${" ".repeat(level * 3)}${node.key}`
    },
    print() {
      this.traverse(root, this.addKeyToResult, 0)
    },
    getResult() {
      return result
    },
  }
}

const t = createTree("Europe")
const poland = t.root.addChild("Poland")
const france = t.root.addChild("France")
const sweden = t.root.addChild("Sweden")
const italy = t.root.addChild("Italy")
const waraszawa = poland.addChild("Waraszawa")
const poznan = poland.addChild("Poznan")
const rome = italy.addChild("Rom")
const florence = italy.addChild("Florence")
const gbg = sweden.addChild("gbg")
const backa = gbg.addChild("backa")
const olskroken = gbg.addChild("olskroken")
const lillaP = backa.addChild("lilla p")
t.print()
console.log(t.getResult())
