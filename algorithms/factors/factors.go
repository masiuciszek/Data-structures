package factors

import "fmt"

func IsPrime(n int) bool {
	for i := 2; i < n; i++ {
		fmt.Println(i)
		if n%i == 0 {
			return false
		}
	}
	return true
}

func Factors(n int) []int {
	var result = make([]int, n)
	for i := 2; i < n; i++ {
		if n%i == 0 {
			result = append(result, i)
		}
	}
	return result
}
