package main

import "fmt"

func fn(decimal int, res string) string {
	if decimal == 0 {
		return res
	}

	res = fmt.Sprintf("%d %s", decimal%2, res)

	return fn(decimal/2, res)
}

func main() {
	res := fn(5, "")
	fmt.Printf("%s\n", res)
}

