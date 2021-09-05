interface Node {
  key: string
  children: Node[]
  addChild: (key: string) => Node
}
function createNode(key: string): Node {
  const children: Node[] = []

  const addChild = (key: string) => {
    const node = createNode(key)
    children.push(node)
    return node
  }

  return {
    key,
    children,
    addChild,
  }
}

type VisitFnType = (node: Node, level: number) => void

function createTree(rootKey: string) {
  const root = createNode(rootKey)

  const print = () => {
    let result = ""
    const traverse = (node: Node, fn: VisitFnType, level: number) => {
      fn(node, level)
      if (node.children.length > 0) {
        for (const n of node.children) {
          traverse(n, fn, level + 1)
        }
      }
    }
    // FN
    const addKeyToResult = (node: Node, level: number) => {
      result += result.length === 0 ? node.key : `\n${" ".repeat(level * 2)}${node.key}`
    }

    traverse(root, addKeyToResult, 0)
    return result
  }

  return {print, root}
}

const dom = createTree("html")
const head = dom.root.addChild("head")
const body = dom.root.addChild("body")
head.addChild("title")
const main = body.addChild("main")
main.addChild("h1")
main.addChild("section")
body.addChild("footer")
console.log(dom.print())
