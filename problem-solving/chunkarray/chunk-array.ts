const len = <T>(list: Array<T>) => list.length

const chunkArray = (list: number[], size: number) => {
  const result = []
  let n = 0
  while (n < len(list)) {
    result.push(list.slice(n, size + n))
    n += size
  }
  return result
}

const chunkArray2 = (list: number[], size: number) => {
  const fn = (list: number[], size: number) => {
    const result: number[][] = []

    for (let i = 0; i < list.length; i += size) {
      result.push(list.slice(i, i + size))
    }

    return result
  }
}
