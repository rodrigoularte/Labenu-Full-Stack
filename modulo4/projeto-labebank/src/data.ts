// Crie mais um tipo: para representar as transações que serão salvas no extrato
export type Transaction = {
  value: number,
  date: string,
  description: string
}

//Crie um tipo para representar uma conta para o usuário
export type User = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  statement: Transaction[]
}

//Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
export let users: User[] = [
  {
    name: "Gabriel Barbosa",
    cpf: "615.457.630-09",
    birthDate: "09/09/1999",
    balance: 1500099,
    statement: []
  },
  {
    name: "Bruno Henrique",
    cpf: "865.745.653-27",
    birthDate: "27/11/1987",
    balance: 800027,
    statement: []
  },
  {
    name: "Everton Ribeiro",
    cpf: "462.351.058-07",
    birthDate: "07/07/1987",
    balance: 1900607,
    statement: []
  },
]
