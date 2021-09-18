export const baseTenToBinary = (n: number): string => {
  let num = n
  let binary = (num % 2).toString()

  while (num > 1) {
    num = Math.floor(num / 2)
    binary = (num % 2) + binary
  }
  return binary
}
