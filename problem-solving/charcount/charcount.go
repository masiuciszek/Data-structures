package charcount

import (
	"fmt"
	"strings"
	"unicode"
)

// Frequency type struct
type Frequency map[string]int

// WordCount func
func WordCount(s string) Frequency {
	var charMap = make(Frequency)

	sliceWithoutSpecialChars := strings.FieldsFunc(s, func(c rune) bool {
		return !(unicode.IsLetter(c) || unicode.IsNumber(c) || c == '\'')
	})
	fmt.Println(sliceWithoutSpecialChars)

	for _, word := range sliceWithoutSpecialChars {
		word = strings.Trim(strings.ToLower(word), "'")
		if _, ok := charMap[word]; ok {
			charMap[word]++
		} else {
			charMap[word] = 1
		}
	}
	return charMap

}
