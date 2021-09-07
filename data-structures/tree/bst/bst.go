package main

import (
	"fmt"
)

type node struct {
	left  *node
	right *node
	key   int
}

func newNode(key int) *node {
	return &node{left: nil, right: nil, key: key}
}

type binarySearchTree struct {
	root *node
	size int
}

func newTree() *binarySearchTree {
	return &binarySearchTree{root: nil, size: 0}
}

func (t *binarySearchTree) insertRec(key int) *node {
	return insertRecHelper(t.root, key)
}

func insertRecHelper(n *node, key int) *node {
	if n == nil {
		n = newNode(key)
		return n
	}
	if key < n.key {
		n.left = insertRecHelper(n.left, key)
	} else {
		n.right = insertRecHelper(n.right, key)

	}
	return n
}

func (t *binarySearchTree) insert(key int) *node {
	newTreeNode := newNode(key)
	if t.root == nil {
		t.root = newTreeNode
		t.size++
		return t.root
	}
	current := t.root
	for true {
		if key < current.key {
			// go left
			if current.left == nil {
				current.left = newTreeNode
				t.size++
				return current
			}
			current = current.left
		} else {
			if current.right == nil {
				current.right = newTreeNode
				t.size++
				return current
			}
			current = current.right
		}
	}
	return current
}

func (t *binarySearchTree) getMax() int {
	if t.root == nil {
		return 0
	}
	current := t.root
	for current.right != nil {
		current = current.right
	}
	return current.key
}
func (t *binarySearchTree) getMin() int {
	if t.root == nil {
		return 0
	}
	current := t.root
	for current.left != nil {
		current = current.left
	}
	return current.key
}

func (t *binarySearchTree) bfs() []int {
	queue := []*node{}
	visited := []int{}
	var n = t.root
	queue = append(queue, n)
	for len(queue) > 0 {
		n = queue[0]
		queue = queue[1:]
		visited = append(visited, n.key)

		if n.left != nil {
			queue = append(queue, n.left)
		}
		if n.right != nil {
			queue = append(queue, n.right)
		}
	}

	return visited

}

func (t *binarySearchTree) dfsInOrder() {
	dfsInOrderRec(t.root)
}

func dfsInOrderRec(root *node) {
	if root == nil {
		return
	}
	dfsInOrderRec(root.left)
	fmt.Println(root.key)
	dfsInOrderRec(root.right)
}

func (t *binarySearchTree) dfsPreOrder() {
	dfsPreOrderRec(t.root)
}

func dfsPreOrderRec(root *node) {
	if root == nil {
		return
	}
	fmt.Println(root.key)
	dfsPreOrderRec(root.left)
	dfsPreOrderRec(root.right)
}

func (t *binarySearchTree) dfsOutOrder() {
	dfsOutOrderRec(t.root)
}

func dfsOutOrderRec(root *node) {
	if root == nil {
		return
	}
	fmt.Println(root.key)
	dfsOutOrderRec(root.left)
	dfsOutOrderRec(root.right)
}
