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
]

const makeTree = (data, parentId = null) => {
  return data
    .filter(item => item.parentId === parentId)
    .reduce((list, node) => [...list, {...node, children: makeTree(data, node.id)}], [])
}

const traverse = tree => {
  if (tree.children.length === 0) return
  return tree.children.forEach(child => {
    console.log(child)
    traverse(tree)
  })
}

const tree = makeTree(data)
console.log(traverse(tree[0]))
