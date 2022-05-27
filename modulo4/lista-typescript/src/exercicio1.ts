function mostrafrase(nome: string, dataNasc: string): string {

  return `Olá, me chamo ${nome}, nasci no dia ${dataNasc.slice(0,2)} do mês de ${dataNasc.slice(3,5)} do ano de ${dataNasc.slice(6)}`
}

console.log(mostrafrase("Rodrigo", "10/01/1993"))