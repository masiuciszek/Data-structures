package sortedsquares

import "sort"

func transform(n int) int {
	return n * n
}

func mapList(list []int, fn func(int) int) []int {
	xs := []int{}
	for _, x := range list {
		xs = append(xs, fn(x))
	}

	return xs
}

func sortedSquares(nums []int) []int {
	result := mapList(nums, transform)
	sort.Ints(result)
	return result
}
