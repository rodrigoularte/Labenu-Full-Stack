enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type infoFilme = {
  titulo: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao: number
}

function mostraInfoDeFilmes(titulo: string, anoLancamento: number, genero: GENERO, pontuacao?: number ): infoFilme {

  return {
    titulo: titulo,
    anoLancamento: anoLancamento,
    genero: genero,
    pontuacao: pontuacao
  }
}

console.log(mostraInfoDeFilmes("Click", 2006, GENERO.COMEDIA))
console.log(mostraInfoDeFilmes("Shrek 2", 2004, GENERO.COMEDIA, 73))