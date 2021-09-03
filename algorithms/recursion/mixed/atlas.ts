interface Item {
  id: number
  parentId: number | null
  name: string
}
const atlas: Array<Item> = [
  {
    id: 1,
    parentId: null,
    name: "America",
  },
  {
    id: 2,
    parentId: null,
    name: "Europe",
  },
  {
    id: 3,
    parentId: null,
    name: "Asia",
  },
  {
    id: 4,
    parentId: 1,
    name: "USA",
  },
  {
    id: 5,
    parentId: 1,
    name: "Mexico",
  },
  {
    id: 6,
    parentId: 1,
    name: "Canada",
  },
  {
    id: 7,
    parentId: 4,
    name: "LA",
  },
  {
    id: 8,
    parentId: 4,
    name: "New york",
  },
  {
    id: 9,
    parentId: 4,
    name: "Dallas",
  },
  {
    id: 10,
    parentId: 2,
    name: "France",
  },
  {
    id: 11,
    parentId: 2,
    name: "Poland",
  },
  {
    id: 12,
    parentId: 2,
    name: "Russia",
  },
  {
    id: 13,
    parentId: 2,
    name: "Sweden",
  },
  {
    id: 14,
    parentId: 3,
    name: "Thailand",
  },
  {
    id: 15,
    parentId: 3,
    name: "Japan",
  },
  {
    id: 16,
    parentId: 3,
    name: "Singapore",
  },
  {
    id: 17,
    parentId: 14,
    name: "Bangkok",
  },
  {
    id: 18,
    parentId: 14,
    name: "Phuket",
  },
  {
    id: 19,
    parentId: 15,
    name: "Tokyo",
  },
  {
    id: 20,
    parentId: 15,
    name: "Osaka",
  },
  {
    id: 21,
    parentId: 11,
    name: "Warsaw",
  },
  {
    id: 22,
    parentId: 11,
    name: "Krakow",
  },
  {
    id: 23,
    parentId: 11,
    name: "Gdansk",
  },
]

// interface Category {
//   id: number
//   name: string
//   parentId: number | null
// }
// const categories: Array<Category> = [
//   {id: 1, name: "animal", parentId: null},
//   {id: 2, name: "shape", parentId: null},
//   {id: 3, name: "cats", parentId: 1},
//   {id: 4, name: "dogs", parentId: 1},
//   {id: 5, name: "circle", parentId: 2},
//   {id: 6, name: "square", parentId: 2},
// ]

// interface MakeTreeOfItems extends Item {
//   children: Array<Item>
// }

interface ItemWithChildren extends Item {
  children: Array<Item>
}
type AtlasReturnType = ItemWithChildren[]

const makeTree = (categories: Array<Item>, parentId = null): any => {
  return (
    categories
      .filter(item => item.parentId === parentId)
      // @ts-ignore
      .reduce((list, node) => [...list, {...node, children: makeTree(categories, node.id)}], [])
  )
}

const atlasTree = makeTree(atlas)
