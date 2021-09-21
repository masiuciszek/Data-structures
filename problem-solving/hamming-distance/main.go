package main

import (
	"errors"
	"fmt"
)

func distance(a, b string) (int, error) {
	var err error = nil
	result := 0

	if len(a) == len(b) {
		for i := 0; i < len(a); i++ {
			if a[i] != b[i] {
				result++
			}
		}
	} else {
		err = errors.New("unable to calculate distance for inputs of different lengths")
	}

	return result, err

}

func main() {
	fmt.Println(distance("GGACGGATTCTG", "AGGACGGATTCT"))
}
