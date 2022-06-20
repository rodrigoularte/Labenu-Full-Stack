// function obterEstatisticas(numeros) {

//   const numerosOrdenados = numeros.sort(
//       (a, b) => a - b
//   )

//   let soma = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   const estatisticas = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados: number[] = numeros.sort(
      (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas: {maior: number, menor: number, media: number} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

type amostraDeDados = {
  numeros: number[],
  obterEstatisticas: () => {
    obterEstatisticas(numeros: number[]): object
  }
}
