package main

// BinaryTree struct
type BinaryTree struct {
	Value int
	Left  *BinaryTree
	Right *BinaryTree
}

// BranchSums func
func BranchSums(root *BinaryTree) []int {
	xs := []int{}
	calculateBranchSum(root, 0, &xs)
	return xs
}

func calculateBranchSum(node *BinaryTree, sum int, xs *[]int) {

	if node == nil {
		return
	}
	currentSum := sum + node.Value

	if node.Left == nil && node.Right == nil {
		*xs = append(*xs, currentSum)
		return
	}
	calculateBranchSum(node.Left,currentSum,xs)
	calculateBranchSum(node.Right,currentSum,xs)
}
