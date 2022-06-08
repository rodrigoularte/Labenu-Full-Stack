function checaRenovacaoRG(data1: string, dataEmissao: string): void {

  const dataAtual = new Date()

  const diaN: number = Number(data1.slice(0,2))
  const mesN: number = Number(data1.slice(3,5))
  const anoN: number = Number(data1.slice(6))

  const dataNascimento = new Date(anoN, mesN -1, diaN)

  // console.log(dataAtual.toString())
  // console.log(dataAtual.getTime())
  
  const idade: number = dataAtual.getTime() - dataNascimento.getTime()
  // const tempoCarteira: number = anoAtual - anoEmissao
  console.log(new Date(idade))
  
  // const cond1: boolean = idade <= 20 && tempoCarteira >= 5
  // const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
  // const cond3: boolean = idade > 50 && tempoCarteira >= 15

  // return (cond1 || cond2 || cond3)
}

console.log(checaRenovacaoRG("15/06/1998",""))