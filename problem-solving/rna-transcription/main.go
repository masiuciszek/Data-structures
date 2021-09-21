package dna

import "fmt"

func ToRNA(dna string) string {
	codes := make(map[rune]string)
	codes['G'] = "C"
	codes['C'] = "G"
	codes['T'] = "A"
	codes['A'] = "U"

	final := ""
	for _, x := range dna {
		fmt.Println(codes[x])
		final += codes[x]
	}
	return final
}
