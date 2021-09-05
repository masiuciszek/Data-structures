package main

import "fmt"

type F struct {
	getN    func() int
	counter func()
}

func counter() F {
	var n int = 0

	counter := func() {
		n++
	}
	getN := func() int {
		return n
	}

	return F{getN, counter}
}

func main() {
	a, b := counter().getN, counter().counter
	b()
	b()
	b()
	b()
	res := a()
	fmt.Println(res)

}
