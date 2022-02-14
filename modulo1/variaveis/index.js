/*
Exercícios de interpretação de código

1.
let a = 10      //declara a variável a de valor 10
let b = 10      //declara a variável b de valor 10

console.log(b)      //imprime 10

b = 5       //agora, a variável b assume o valor 5
console.log(a, b)       //imprime 10 5


2.
let a = 10      //declara a variável a de valor 10
let b = 20      //declara a variável b de valor 20
c = a       //variável c assume o valor de a, logo c = 10
b = c       //variável b assume o valor de c, logo b = 10
a = b       //variável a assume o valor de b, logo a = 10

console.log(a, b, c)        //imprime 10 10 10


3.
let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")    //pede para o usuario digitar as horas trabalhadas
let salarioDia = prompt("Quanto você recebe por dia?")      //pede para o usuario digitar quanto recebe por dia
alert(`Voce recebe ${salarioDia/horasTrabalhadasDia} por hora`)     //imprime o resultado da divisao entre as variaveis digitadas
*/


//Exercícios de escrita de código

/*
1.
let nome    //a)
let idade   //b)

console.log(typeof nome)    //c)
console.log(typeof idade)    //c)

//d) imprime undefined, pois as variáveis não foram definidas

// e)
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//f) agora imprime string para as duas variáveis

//g)
console.log("Olá", nome, ", você tem", idade, "anos.")



2.
let hamburguer = "SIM"
let sushi = "NÃO"
let pizza = "SIM"

console.log("Você gosta de hambúrguer? -", hamburguer)
console.log("Você gosta de sushi? -", sushi)
console.log("Você gosta de pizza? -", pizza)


3.
let a = 25
let b = 10
let c = b

b = a   //b passa a ser 25
a = c   //a passa a ser 10

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
*/