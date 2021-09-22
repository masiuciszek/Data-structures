package main

import "fmt"

func grains(n uint64) uint64 {
	var value uint64 = 1

	var i uint64 = 1
	for i < n {
		fmt.Println(i)
		value = value * 2
		i++
	}

	return value
}
func main() {

	grains(4)
	grains(5)
	grains(6)

}
