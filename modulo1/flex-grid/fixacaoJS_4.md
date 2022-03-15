```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let contagem = 0

    for (let numero of arrayDeNumeros) {
        if (numeroEscolhido === numero) {
            contagem ++
        }
    }

    if (contagem > 0) {
        return `O número ${numeroEscolhido} aparece ${contagem}x`
    }
    else {
        return "Número não encontrado"
    }
}
```