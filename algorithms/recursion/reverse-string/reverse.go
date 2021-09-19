package reversestring

// ReverseString func
func ReverseString(s string) string {
	if s == "" {
		return ""
	}
	return ReverseString(s[1:]) + string(s[0])
}

func rev(s string) string {
	if len(s) == 0 {
		return ""
	}
	return rev(s[1:]) + s[:1]
}
