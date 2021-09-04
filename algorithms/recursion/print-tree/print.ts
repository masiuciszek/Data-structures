type Item = {name: string; children: Item[]}
const tree: Item = {
  name: "Frank",
  children: [
    {name: "Linda", children: []},
    {name: "Bob", children: [{name: "Kim", children: []}]},
    {
      name: "Timmy",
      children: [
        {name: "Carl", children: []},
        {name: "Logan", children: [{name: "Alan", children: []}]},
        {name: "Stina", children: [{name: "Masiu", children: [{name: "Filip", children: []}]}]},
      ],
    },
  ],
}

const print = (t: typeof tree, level = 0) => {
  if (t.children.length === 0) {
    return
  }

  t.children.forEach((child: Item) => {
    console.log(child.name.padStart((level + 1) * 6))
    print(child, level + 1)
  })
}

const getChildrenNodes = (t: typeof tree[], result: Array<string>) => {
  for (const node of t) {
    if (!node.children || node.children.length === 0) {
      result.push(node.name)
    } else {
      getChildrenNodes(node.children, result)
    }
  }
  return result
}
