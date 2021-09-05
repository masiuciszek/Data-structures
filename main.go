package main

import "fmt"

type Some struct {
	n  *int
	fn func()
}

func counter(n *int) Some {
	counter := func() {
		*n++
	}
	return Some{n, counter}

}

func main() {
	var n int = 0
	_, fn := counter(&n).n, counter(&n).fn
	fn()
	fn()
	fn()
	fn()
	fn()
	fmt.Println(n)

}
