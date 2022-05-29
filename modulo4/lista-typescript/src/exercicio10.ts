function verificaCPF(cpf: string): boolean {

  const d10: number = Number(cpf.slice(12, 13))
  const d11: number = Number(cpf.slice(13, 14))

  //cálculo do primeiro Dígito Verificador
  function verificaPrimeiroDV(cpf: string): number {

    const d1: number = Number(cpf.slice(0, 1)) * 10
    const d2: number = Number(cpf.slice(1, 2)) * 9
    const d3: number = Number(cpf.slice(2, 3)) * 8
    const d4: number = Number(cpf.slice(4, 5)) * 7
    const d5: number = Number(cpf.slice(5, 6)) * 6
    const d6: number = Number(cpf.slice(6, 7)) * 5
    const d7: number = Number(cpf.slice(8, 9)) * 4
    const d8: number = Number(cpf.slice(9, 10)) * 3
    const d9: number = Number(cpf.slice(10, 11)) * 2

    const resultado1: number = (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9)

    const modulo11: number = resultado1 % 11

    const dv: number = 11 - modulo11

    if (dv >= 10) {
      const dvCerto: number = 0
      return dvCerto
    } else {
      return dv
    }
  }

  const dv1: number = verificaPrimeiroDV(cpf)

  //cálculo do segundo Dígito Verificador
  function verificaSegundoDV(cpf: string, dv1: number): number {

    const d1: number = Number(cpf.slice(0, 1)) * 11
    const d2: number = Number(cpf.slice(1, 2)) * 10
    const d3: number = Number(cpf.slice(2, 3)) * 9
    const d4: number = Number(cpf.slice(4, 5)) * 8
    const d5: number = Number(cpf.slice(5, 6)) * 7
    const d6: number = Number(cpf.slice(6, 7)) * 6
    const d7: number = Number(cpf.slice(8, 9)) * 5
    const d8: number = Number(cpf.slice(9, 10)) * 4
    const d9: number = Number(cpf.slice(10, 11)) * 3

    const resultado2: number = (d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + (dv1 * 2))

    const modulo11: number = resultado2 % 11

    const dv: number = 11 - modulo11

    if (dv >= 10) {
      const dvCerto: number = 0
      return dvCerto
    } else {
      return dv
    }
  }

  const dv2: number = verificaSegundoDV(cpf, dv1)

  if (dv1 === d10 && dv2 === d11) {
    return true
  } else {
    return false
  }
}

console.log(verificaCPF("145.382.206-20"))