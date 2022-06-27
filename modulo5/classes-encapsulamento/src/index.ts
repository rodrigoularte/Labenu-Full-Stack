// Exercício 1

// a) Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?
// O constructor é uma função que serve para passar os dados para dentro do objeto que forma a classe.
// Para chamá-lo, declaramos constructor e definimos os parâmetros com os atributos da classe.

class UserAccount {
  private cpf: string
  private name: string
  private age: number
  private balance: number = 0
  private transactions: Transaction[] = []

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf
    this.name = name
    this.age = age
  }

  public getUserAccount(): object {
    return {
      cpf: this.cpf,
      name: this.name,
      age: this.age,
      balance: this.balance,
      transactions: this.transactions
    }
  }

  public setTransaction(transaction: Transaction): void {
    this.transactions = [...this.transactions, transaction]
  }
}

// b) Crie uma instância dessa classe (dê o nome, cpf e idade que você quiser).
// Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal
// Uma vez

const user1: UserAccount = new UserAccount("182730123897", "Roberto Carlos", 25)

// console.log(user1)

// c) Como conseguimos ter acesso às propriedades privadas de uma classe?
// Somente dentro da própria classe

// -------------------------------------------------------------------------------------------------------------------------

// Exercício 2

// Transforme a variável de tipo abaixo, chamada Transaction em uma classe Transaction.
// Ela deve conter as mesmas propriedades: data, valor e descrição. Agora, porém, todas elas devem ser privadas.
// Portanto, crie métodos (getters) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount.
// Crie uma instância dessa classe e adicione à instância já criada de UserAccount 

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
  private description: string
  private value: number
  private date: string

  constructor(description: string, value: number, date: string) {
    this.description = description
    this.value = value
    this.date = date
  }

  public getDescription(): string {
    return this.description
  }

  public getValue(): number {
    return this.value
  }

  public getDate(): string {
    return this.date
  }
}

const transaction1: Transaction = new Transaction("transferencia", 500, "20/06/2022")

user1.setTransaction(transaction1)

// -------------------------------------------------------------------------------------------------------------------------

// Exercício 3
// Crie uma classe Bank, que será responsável por guardar todos os dados da aplicação.
// Ela deve possuir a propriedade accounts, privada (crie os getters e setters que achar apropriado).

class Bank {
  private accounts: UserAccount[]

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts
  }

  public getAccounts(): UserAccount[] {
    return this.accounts
  }
}

const bank1: Bank = new Bank([user1])

// console.log(bank1.getAccounts())