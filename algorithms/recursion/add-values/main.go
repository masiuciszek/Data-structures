package main

import "fmt"

func fn(n int) int {
	if n == 0 {
		return n
	}
	return fn(n-1) + n
}

func main() {
	res := fn(10)
	fmt.Printf("%d\n", res)
}

