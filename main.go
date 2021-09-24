package main

import "fmt"

func productExceptSelf(nums []int) []int {
	var result = make([]int, len(nums))

	left := make([]int, len(nums))
	right := make([]int, len(nums))
	left[0] = 1
	right[len(nums)-1] = 1

	for i := 1; i < len(nums); i++ {
		left[i] = nums[i-1] * left[i-1]
	}

	for i := len(nums) - 2; i >= 0; i-- {
		right[i] = nums[i+1] * right[i+1]
	}

	for i := 0; i < len(nums); i++ {
		fmt.Println(i)
		result[i] = left[i] * right[i]
	}

	return result
}

func main() {

	fmt.Println(productExceptSelf([]int{1, 2, 3, 4}))

}

// const result: number[] = []
// const left: number[] = []
// const right: number[] = []
// const SIZE = nums.length

// left[0] = 1
// right[SIZE - 1] = 1

// for (let i = 1; i < SIZE; i++) {
// 	left[i] = nums[i - 1] * left[i - 1]
// }
// for (let i = SIZE - 2; i >= 0; i--) {
// 	right[i] = nums[i + 1] * right[i + 1]
// }

// for (let i = 0; i < SIZE; i++) {
// 	result[i] = left[i] * right[i]
// }
// return result
