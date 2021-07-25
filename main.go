package main

import (
	"fmt"
	"strconv"
	"strings"
)

// Node struct
type Node struct {
	data int
	next *Node
}

// LinkedList struct
type LinkedList struct {
	head *Node
	tail *Node
	size int
}

func makeList() LinkedList {
	return LinkedList{head: nil, tail: nil, size: 0}
}

func makeNode(data int) Node {
	return Node{data: data, next: nil}
}

func (l *LinkedList) append(data int) *Node {
	newNode := makeNode(data)
	if l.head == nil {
		l.head = &newNode
		l.tail = &newNode
		l.size++
		return &newNode
	}
	l.tail.next = &newNode
	l.tail = &newNode
	l.size++
	return &newNode
}

func (l *LinkedList) prepend(data int) *Node {
	newNode := makeNode(data)
	if l.head == nil {
		l.head = &newNode
		l.tail = &newNode
		l.size++
		return &newNode
	}

	newNode.next = l.head
	l.head = &newNode
	l.size++
	return &newNode
}

func (l *LinkedList) getSize() int {
	return l.size
}

func (l *LinkedList) print() string {
	xs := []string{}
	current := l.head

	for current != nil {
		xs = append(xs, strconv.Itoa(current.data))
		current = current.next
	}

	return strings.Join(xs, " -> ")

}

func (l *LinkedList) get(index int) *Node {
	if index == 0 {
		return l.head
	}
	if index > l.size {
		return nil
	}
	if index == l.size-1 {
		return l.tail
	}

	counter := 0
	current := l.head
	for current != nil {
		if counter == index {
			return current
		}
		counter++
		current = current.next
	}
	return nil
}

func (l *LinkedList) dropHead() bool {
	if l.head == nil {
		return false
	}
	l.head = l.head.next
	l.size--
	return true
}
func (l *LinkedList) dropTail() bool {
	if l.head == nil {
		return false
	}
	if l.head == l.tail {
		l.head = nil
		l.tail = nil
		l.size--
		return true
	}

	var prev *Node = nil
	current := l.head
	for current.next != nil {
		prev = current
		current = current.next
	}

	prev.next = nil
	l.tail = prev
	l.size--
	return true
}

func (l *LinkedList) deleteAt(index int) bool {
	if index < 0 || index > l.getSize() {
		return false
	}
	if index == l.getSize()-1 {
		return l.dropTail()
	}
	if index == 0 {
		return l.dropHead()
	}

	prev := l.get(index - 1)
	nodeToRemove := prev.next
	prev.next = nodeToRemove.next
	l.size--

	return true
}

func (l *LinkedList) set(data, index int) bool {
	node := l.get(index)
	if node != nil {
		node.data = data
		return true
	}
	return false
}

func (l *LinkedList) reverse() *LinkedList {
	var node *Node = l.head
	l.head = l.tail
	l.tail = node

	var next *Node = nil
	var prev *Node = nil

	for i := 0; i < l.getSize(); i++ {
		next = node.next
		node.next = prev
		prev = node
		node = next
	}
	return l
}

func main() {
	ll := makeList()
	ll.append(2)
	ll.append(12)
	ll.append(33)
	ll.append(45)
	ll.prepend(100)
	ll.prepend(24)

	fmt.Println(ll.print())
	ll.reverse()
	fmt.Println(ll.print())
}
