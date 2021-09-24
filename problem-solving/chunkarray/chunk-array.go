package chunkarray

// ChunkList func
func ChunkList(list []int, level int) [][]int {
	var result [][]int
	n := 0
	for n < len(list) {
		result = append(result, list[n:n+level])
		n += level
	}

	return result

}

// ChunkList2 func
func ChunkList2(list []int, level int) [][]int {
	var result [][]int
	for i := 0; i < len(list); i += level {
		result = append(result, list[i:level+i])
	}
	return result

}
