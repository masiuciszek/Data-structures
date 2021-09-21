const translation: Record<string, string> = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
}
const groupToList = (s: string) => {
  const result = []
  let i = 0
  const interval = 3
  while (i < s.length) {
    result.push(s.slice(i, i + interval))
    i += interval
  }
  return result
}

export const translate = (amino: string) => {
  if (!amino) {
    return []
  }
  const list = groupToList(amino)
  const result = []
  for (const dna of list) {
    if (translation[dna] === "STOP") {
      break
    }
    if (translation[dna]) {
      result.push(translation[dna])
    }
    if (!translation[dna]) throw new Error("invalid")
  }
  return result
}

console.log(translate("AUGUUUUCUUAAAUG"))
