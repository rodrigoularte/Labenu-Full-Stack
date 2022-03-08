```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  const comissaoDoMes = (100*qtdeCarrosVendidos) + (valorTotalVendas*0.05)
  let salarioFinal = salarioFixo + comissaoDoMes
  
  return salarioFinal
}
```