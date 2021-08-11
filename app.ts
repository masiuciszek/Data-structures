const handler = (n: number) => (fn: (n: number) => number) => {
  const cache: Record<string, number> = {}
  if (cache[n]) {
    const value = cache[n]
    return value
  } else {
    cache[n] = fn(n)
    return fn(n)
  }
}

const x = handler(42)
const fib = (n: number): number => (n <= 1 ? n : fib(n - 2) + fib(n - 1))

// console.time("foo")
// fib(42)
// console.timeEnd("foo")

console.time("apa")
x(fib)
console.timeEnd("apa")
