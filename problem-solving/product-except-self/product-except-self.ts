function productExceptSelf(nums: number[]): number[] {
  const result: number[] = []
  const left: number[] = []
  const right: number[] = []
  const SIZE = nums.length

  left[0] = 1
  right[SIZE - 1] = 1

  for (let i = 1; i < SIZE; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }
  for (let i = SIZE - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }

  for (let i = 0; i < SIZE; i++) {
    result[i] = left[i] * right[i]
  }
  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))
