interface BstNode<T> {
  key: T
  left: null | BstNode<T>
  right: null | BstNode<T>
  addLeft(leftKey: T): BstNode<T>
  addRight(rightKey: T): BstNode<T>
}
function createBstNode<T>(key: T): BstNode<T> {
  return {
    key,
    left: null,
    right: null,

    addLeft(leftKey: T) {
      const newLeft = createBstNode(leftKey)
      this.left = newLeft
      return newLeft
    },
    addRight(leftKey: T) {
      const newRight = createBstNode(leftKey)
      this.right = newRight
      return newRight
    },
  }
}

type TraversalType = keyof typeof TRAVERSALS
type VisitFnType<T> = (node: BstNode<T>) => void

const TRAVERSALS = {
  // (a) Inorder (Left, Root, Right) : 4 2 5 1 3
  IN_ORDER: <T>(node: BstNode<T>, visitFn: VisitFnType<T>) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left!, visitFn)
      visitFn(node)
      TRAVERSALS.IN_ORDER(node.right!, visitFn)
    }
  },
  // (b) Preorder (Root, Left, Right) : 1 2 4 5 3

  PRE_ORDER: <T>(node: BstNode<T>, visitFn: VisitFnType<T>) => {
    if (node !== null) {
      visitFn(node)
      TRAVERSALS.PRE_ORDER(node.left!, visitFn)
      TRAVERSALS.PRE_ORDER(node.right!, visitFn)
    }
  },
  // (c) Postorder (Left, Right, Root) : 4 5 2 3 1
  POST_ORDER: <T>(node: BstNode<T>, visitFn: VisitFnType<T>) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left!, visitFn)
      TRAVERSALS.POST_ORDER(node.right!, visitFn)
      visitFn(node)
    }
  },
}

function createBinaryTree<T>(rootKey: T) {
  const root = createBstNode(rootKey)

  return {
    getRoot() {
      return root
    },
    print(traversalType: TraversalType = "IN_ORDER") {
      let result = ""

      const visitNode = (node: BstNode<T>) => {
        result += result.length === 0 ? node.key : ` -> ${node.key}`
      }

      TRAVERSALS[traversalType](this.getRoot(), visitNode)
      return result
    },
  }
}

const tree = createBinaryTree("a")
const b = tree.getRoot().addLeft("b")
const c = tree.getRoot().addRight("c")

const d = b.addLeft("d")
const e = b.addRight("e")
const f = c.addLeft("f")
const g = c.addRight("g")
const h = d.addLeft("h")
const i = d.addRight("i")

console.log(tree.print("PRE_ORDER"))
