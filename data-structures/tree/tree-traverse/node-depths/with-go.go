package main

import "fmt"

// BinaryTree struct
type BinaryTree struct {
	Value       int
	Left, Right *BinaryTree
}

// LevelDepths func
func LevelDepths(root *BinaryTree) int {
	return CalcLevelDepths(root, 0)
}

// CalcLevelDepths func
func CalcLevelDepths(root *BinaryTree, depth int) int {
	if root == nil {
		return 0
	}
	return depth + CalcLevelDepths(root.Left, depth+1) + CalcLevelDepths(root.Right, depth+1)
}

type Level struct {
	Root  *BinaryTree
	Depth int
}

// LevelDepthsWithStack func
func LevelDepthsWithStack(root *BinaryTree) int {
	sum := 0
	stack := []Level{{Root: root, Depth: 0}}

	var top Level
	for len(stack) > 0 {
		top, stack = stack[len(stack)-1], stack[:len(stack)-1]
		node, depth := top.Root, top.Depth

		if node == nil {
			continue
		}
		sum += depth
		stack = append(stack, Level{Root: node.Left, Depth: depth + 1})
		stack = append(stack, Level{Root: node.Right, Depth: depth + 1})
	}
	return sum
}

type F struct {
	a, b int
}

func main() {
	x := F{a: 22, b: 100}
	xs := []F{x}

	a, b := x.a, x.b

	str := "hello"
	fmt.Println(str[:1])

	t, y := xs[len(xs)-1], xs[:len(xs)-1]
	fmt.Println(a, b, xs)
	fmt.Println(t, y)
}
