package main

import (
	"fmt"
	"strings"
	"unicode"
)

type charMap = map[rune]int

func containsAllLetters(s string, mapper charMap) bool {
	for r := 'a'; r < 'z'; r++ {
		if _, ok := mapper[r]; !ok {
			return false
		}
	}

	return true
}

func IsPangram(desc string) bool {
	var mapper = make(charMap)
	desc = strings.ToLower(desc)

	trimmed := strings.Map(func(r rune) rune {
		if unicode.IsSpace(r) && r > unicode.MaxASCII {
			return -1
		}
		return r
	}, desc)

	for _, r := range trimmed {
		if _, ok := mapper[r]; !ok {
			mapper[r] = 1
		}
	}

	return containsAllLetters(trimmed, mapper)
}

func main() {
	xYes := IsPangram("the quick brown fox jumps over the lazy dog")
	// xNot := IsPangram("a quick movement of the enemy will jeopardize five gunboats")
	xYes = IsPangram("\"Five quacking Zephyrs jolt my wax bed.\"")

	fmt.Println(xYes)
	// fmt.Println(xNot)
}
