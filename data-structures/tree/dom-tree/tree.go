package main

import (
	"fmt"
	"strings"
)

// AddChildFn func
// type AddChildFn func(string) Node

// Node struct
type Node struct {
	key      string
	children []*Node
}

// CreateNode func
func (n *Node) CreateNode(key string) *Node {
	return &Node{
		key:      key,
		children: []*Node{},
	}
}

// AddChild func
func (n *Node) AddChild(key string) *Node {
	node := n.CreateNode(key)
	n.children = append(n.children, node)
	return node
}

// Tree struct
type Tree struct {
	root *Node
}

// CreateTree func
func (t *Tree) CreateTree(key string) *Tree {
	var node Node
	t.root = node.CreateNode(key)
	return t
}

// AddKeyToResult func
type AddKeyToResult = func(result *string, node *Node, level int)

// GetRoot func
func (t *Tree) GetRoot() *Node {
	return t.root
}

func (t *Tree) print() string {
	res := ""
	traverse(&res, t.GetRoot(), addKeyToResult, 0)
	return res
}

func traverse(result *string, node *Node, fn AddKeyToResult, level int) {
	fn(result, node, level)
	if len(node.children) > 0 {
		for _, n := range node.children {
			traverse(result, n, fn, level+1)
		}
	}
}

func addKeyToResult(result *string, node *Node, level int) {
	nodeKey := fmt.Sprintf("%s", node.key)
	if len(*result) == 0 {
		*result += nodeKey
	} else {
		*result += "\n " + strings.Repeat(" ", level*2) + " " + node.key
	}
}

func main() {
	var dom Tree
	dom.CreateTree("html")
	body := dom.GetRoot().AddChild("body")
	footer := dom.GetRoot().AddChild("footer")
	footer.AddChild("ul --- social media list")
	main := body.AddChild("main")
	main.AddChild("h1 --- hello")
	fmt.Println(dom.print())
}
