function inverteString(palavra: string): string {
  return palavra.split("").reverse().join("")
}

console.log(inverteString("Rodrigo"))