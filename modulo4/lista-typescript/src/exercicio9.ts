function calculaAnagramas(palavra: string): number {
  
  const numPalavras: number = palavra.length

  let resultado = numPalavras

  for (let i = 1; i < numPalavras; i++) {
    resultado *= i
  }

  return resultado
}

console.log(calculaAnagramas("mesa"))