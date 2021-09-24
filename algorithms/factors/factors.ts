const isPrime = (n: number) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}
const getFactors = (n: number) => {
  const res = []
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      res.push(i)
    }
  }
  // if res is empty then it is a prime number!
  return res
}
