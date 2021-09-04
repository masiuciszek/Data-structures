package main

import "fmt"

// TreeNode struct
type TreeNode struct {
	id       int
	parentID int
	name     string
	children []*TreeNode
}

var data = []TreeNode{
	TreeNode{id: 1, name: "Shape", parentID: 0},
	TreeNode{id: 2, name: "Animal", parentID: 0},
	TreeNode{id: 3, name: "Cat", parentID: 1},
	TreeNode{id: 4, name: "Dog", parentID: 1},
}

func filter(data []TreeNode, fn func(node *TreeNode, parentID int) bool) []TreeNode {
	xs := []TreeNode{}
	for _, v := range data {
		if fn(&v, 0) {
			xs = append(xs, v)
		}
	}

	return xs
}

func getFirstLevel(node *TreeNode, parentID int) bool {
	return node.parentID == parentID
}

func main() {
	fmt.Println(filter(data, getFirstLevel))
}
