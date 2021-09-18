export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  const xs: number[] = [];
  calculateBranchSum(root, 0, xs);
  return xs;
}

const calculateBranchSum = (node: BinaryTree, sum: number, xs: number[]) => {
  if (!node) return;
  const newSum = node.value + sum;
  // we have traversed to the very end, the leaf nodes
  if (!node.left && !node.right) {
    xs.push(newSum);
    return;
  }
  if (node.left) {
    calculateBranchSum(node.left, newSum, xs);
  }
  if (node.right) {
    calculateBranchSum(node.right, newSum, xs);
  }
};

const bst = new BinaryTree(3);
bst.right = new BinaryTree(444);
console.log(bst);
