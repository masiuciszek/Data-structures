package main

// Node struct
type Node struct {
	Name     string
	Children []*Node
}

// BreadthFirstSearch func
func (n *Node) BreadthFirstSearch(array []string) []string {

	queue := []*Node{n}

	for len(queue) > 0 {
		currentNode := queue[0]
		// everything except the first element [1:]
		queue = queue[1:]
		array = append(array, currentNode.Name)
		for _, child := range currentNode.Children {
			queue = append(queue, child)
		}
	}
	return array
}
