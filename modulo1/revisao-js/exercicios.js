// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b
    })

    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayDePar = []

    for (let numero of array) {
        if (numero % 2 === 0) {
            arrayDePar.push(numero)
        }
    }

    return arrayDePar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayDeParAoQuadrado = []

    for (let numero of array) {
        if (numero % 2 === 0) {
            numero = Math.pow(numero, 2)
            arrayDeParAoQuadrado.push(numero)
        }
    }

    return arrayDeParAoQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity

    for (let numero of array) {
        if (numero > maior) {
            maior = numero
        }
    }

    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = (a, b) => {
        if (a > b) {
            return a
        } else {
            return b
        }
    }

    let menor = (a, b) => {
        if (a < b) {
            return a
        } else {
            return b
        }
    }

    let divisivel = (a, b) => {
        if (maior(a, b) % menor(a, b) === 0) {
            return true
        }
        else {
            return false
        }
    }

    let imprimeDiferenca = (a, b) => {
        if (a > b) {
            return a - b
        } else {
            return b - a
        }
    }

    let objeto = {
        maiorNumero: maior(num1, num2),
        maiorDivisivelPorMenor: divisivel(num1, num2),
        diferenca: imprimeDiferenca(num1, num2)
    }

    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
        return "Equilátero"
    }
    else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        return "Escaleno"
    }
    else {
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort((a, b) => a - b)

    let segundoMaior = array[array.length - 2]
    let segundoMenor = array[1]

    let novoArray = [segundoMaior, segundoMenor]

    return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let nomeDoFilme = filme.nome
    let anoDoFilme = filme.ano
    let diretorDoFilme = filme.diretor
    let atoresDoFilme = `${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}`

    return `Venha assistir ao filme ${nomeDoFilme}, de ${anoDoFilme}, dirigido por ${diretorDoFilme} e estrelado por ${atoresDoFilme}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novoObjeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}