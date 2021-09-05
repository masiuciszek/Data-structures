class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function nodeDepths(root: BinaryTree, depth = 0): number {
  if (root === null) return 0;

  return root.left && root.right
    ? depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
    : 0;
}

interface Node {
  node: BinaryTree | null;
  depth: number;
}
export function nodeDepthsWithStack(root: BinaryTree, depth = 0): number {
  let sum = 0;

  const stack: Array<Node> = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sum;
}
