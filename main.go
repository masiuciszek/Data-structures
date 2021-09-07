package main

import (
	"container/list"
	"fmt"
)

type customQ struct {
	queue *list.List
}

func makeQ() *customQ {
	return &customQ{list.New()}
}

func (c *customQ) enqueue(val int) {
	c.queue.PushBack(val)
}

func (c *customQ) dequeue() int {
	if c.queue.Len() > 0 {
		x := c.queue.Front()
		c.queue.Remove(x)
		return x.Value.(int)
	}
	return -1
}

func (c *customQ) front() (int, error) {
	for c.queue.Len() > 0 {
		if val, ok := c.queue.Front().Value.(int); ok {
			return val, nil
		}
		return -1, fmt.Errorf("Queue is wrong")
	}
	return -1, fmt.Errorf("Queue is empty")
}

func (c *customQ) size() int {
	return c.queue.Len()
}

func (c *customQ) Empty() bool {
	return c.queue.Len() == 0
}

func (c *customQ) peek() int {
	if c.queue.Len() == 0 {
		return -1
	}
	return c.queue.Front().Value.(int)
}

// Node struct
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
		visited = append(visited, n.key)
		if n.left != nil {

		}
	}
	// while queue is not empty
	// get first node in queue
	// add it to the visited
	// check if we have more left nodes
	// check if we have more right nodes
	// add them to the queue

	return visited

}

func main() {
	tree := newTree()
	tree.insert(100)
	tree.insert(150)
	tree.insert(50)

	tree.bfs()
	l := list.New()
	l.PushBack("Apa")
	l.PushBack("bob")
	// fmt.Println(l)
	// x := l.Front()

	// fmt.Println(x.Value)

}
