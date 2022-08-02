// exercício 1

function isOneEdit(stringA: string, stringB: string): boolean {
  // Se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
  if (Math.abs(stringB.length - stringA.length) > 1) return false

  // Se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
  if (stringA.length > stringB.length) return stringA.includes(stringB)
  if (stringB.length > stringA.length) return stringB.includes(stringA)


  // Passando pelos ifs acima, significa que as duas têm o mesmo tamanho
  // Nesse caso, varremos as strings contando quantas letras diferentes tem
  let charactersDifferenceCount = 0
  for (let i = 0; i < stringA.length; i++) {
      if (stringA[i] !== stringB[i]) charactersDifferenceCount++
  }

  // Retorna true se a diferença é 1, false caso contrário
  return charactersDifferenceCount === 1
}

console.log(isOneEdit("banana", "anana"))

//exercício 2

export const stringCompression = (input: string) => {
  const substrings = []
  let lastChar = input[0]
  let charCount = 0

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount)
      lastChar = char
      charCount = 0
    }
    charCount++
  }

  substrings.push(lastChar + charCount);
  let result = ""
  for (const key of substrings) {
    result += key
  }

  return result.length > input.length ? input : result;
}

console.log(stringCompression("aadddeeeaasssi"))