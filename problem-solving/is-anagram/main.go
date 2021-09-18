package main

func isAnagram(s1, s2 string) bool {
	chars := make(map[rune]int)
	for _, c := range s1 {
		_, ok := chars[c]
		if ok {
			chars[c]++
		} else {
			chars[c] = 1
		}
	}

	for _, c := range s2 {
		_, ok := chars[c]
		if ok {
			chars[c]--
		}
	}

	for _, v := range chars {
		if v != 0 {
			return false
		}
	}
	return true
}
