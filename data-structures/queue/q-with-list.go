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
