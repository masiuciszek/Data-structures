const data = [
  {id: 1, name: "animal", parentId: null},
  {id: 2, name: "shape", parentId: null},
  {id: 3, name: "vehicle", parentId: null},

  {id: 4, name: "dog", parentId: 1},
  {id: 5, name: "horse", parentId: 1},
  {id: 6, name: "tiger", parentId: 1},

  {id: 7, name: "circle", parentId: 2},
  {id: 8, name: "rectangle", parentId: 2},
  {id: 9, name: "square", parentId: 2},

  {id: 10, name: "car", parentId: 3},
  {id: 11, name: "boat", parentId: 3},

  {id: 12, name: "bmw", parentId: 10},
  {id: 13, name: "mercedes", parentId: 10},

  {id: 14, name: "Pug", parentId: 4},
  {id: 15, name: "Schnauzer", parentId: 4},
  {id: 16, name: "Pudel", parentId: 4},
]

let result = ""

const makeTree = (data, parentId) => {
  const items = data.filter(item => item.parentId === parentId)
  const xs = []
  for (const x of items) {
    xs.push({...x, children: makeTree(data, x.id)})
  }
  return xs
}

const traverse = (node, fn, level = 0) => {
  fn(node, level)
  if (node.children.length > 0) {
    node.children.forEach(child => {
      // console.log(child.name)
      return traverse(child, fn, level + 1)
    })
  }
}

const show = (node, level = 0) => {
  result += result.length === 0 ? node.name : `\n${" ".repeat(level * 3)}${node.name}`
}

const tree = makeTree(data, null)
traverse(tree[0], show, 0)
traverse(tree[1], show, 0)
traverse(tree[2], show, 0)
console.log(result)
