package anagram

import (
	"sort"
	"strings"
)

func sortString(s string) string {
	var xs = make([]string, len(s))
	copy(xs, strings.Split(s, ""))
	sort.Strings(xs)
	return strings.Join(xs, "")

}

func Detect(word string, candidates []string) []string {
	word = strings.ToLower(word)
	sortedString := sortString(word)
	result := []string{}

	for _, candidate := range candidates {
		if word != strings.ToLower(candidate) && sortString(strings.ToLower(candidate)) == sortedString {
			result = append(result, candidate)
		}
	}
	return result
}
