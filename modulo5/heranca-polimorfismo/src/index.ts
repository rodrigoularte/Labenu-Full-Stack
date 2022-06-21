// Exercício 1

// class User {
//   private id: string
//   private email: string
//   private name: string
//   private password: string

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string
//   ) {
//     console.log("Chamando o construtor da classe User")
//     this.id = id
//     this.email = email
//     this.name = name
//     this.password = password
//   }

//   public getId(): string {
//     return this.id
//   }

//   public getEmail(): string {
//     return this.email
//   }

//   public getName(): string {
//     return this.name
//   }
// }

// const user1: User = new User("001", "cebolinha@tdm.com", "Cebolinha", "1hbu45e")

// console.log(user1.getId())
// console.log(user1.getName())
// console.log(user1.getEmail())


// a) Seria possível imprimir a senha (password) atrelada a essa instância?
// R: Somente se criasse uma função public que retorna a senha

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
// R: Uma vez


/*---------------------------------------------------------------------------------------------------*/


// Exercício 2

// class Customer extends User {
//   public purchaseTotal: number = 0
//   private creditCard: string

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password)
//     console.log("Chamando o construtor da classe Customer")
//     this.creditCard = creditCard
//   }

//   public getCreditCard(): string {
//     return this.creditCard
//   }
// }

// const customer1: Customer = new Customer("001", "r10@jogador.com", "Ronaldinho", "huwt67", "1826 1298 6728 7243")
// console.log(customer1)


// a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal?
// R: Uma vez.

// b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
// R: Duas vezes.


/*---------------------------------------------------------------------------------------------------*/


// Exercício 3

// console.log(customer1.getId())
// console.log(customer1.getEmail())
// console.log(customer1.getName())
// console.log(customer1.purchaseTotal)
// console.log(customer1.getCreditCard())
// console.log(customer1.password)

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// R: Não é possível, pois a senha é privada da classe.


/*---------------------------------------------------------------------------------------------------*/


// Exercício 4

// class User {
//   private id: string
//   private email: string
//   private name: string
//   private password: string

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string
//   ) {
//     console.log("Chamando o construtor da classe User")
//     this.id = id
//     this.email = email
//     this.name = name
//     this.password = password
//   }

//   public getId(): string {
//     return this.id
//   }

//   public getEmail(): string {
//     return this.email
//   }

//   public getName(): string {
//     return this.name
//   }
//   // Fazendo a mudança do exercício  
//   public introduceYourself(): string {
//     return "Olá, bom dia!"
//   }
// }

// class Customer extends User {
//   public purchaseTotal: number = 0
//   private creditCard: string

//   constructor(
//     id: string,
//     email: string,
//     name: string,
//     password: string,
//     creditCard: string
//   ) {
//     super(id, email, name, password)
//     console.log("Chamando o construtor da classe Customer")
//     this.creditCard = creditCard
//   }

//   public getCreditCard(): string {
//     return this.creditCard
//   }
// }

// const customer1: Customer = new Customer("001", "r10@jogador.com", "Ronaldinho", "huwt67", "1826 1298 6728 7243")
// console.log(customer1.introduceYourself())


/*---------------------------------------------------------------------------------------------------*/


// Exercício 5

class User {
  private id: string
  private email: string
  private name: string
  private password: string

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  // Fazendo a mudança do exercício
  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`
  }
}

class Customer extends User {
  public purchaseTotal: number = 0
  private creditCard: string

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password)
    console.log("Chamando o construtor da classe Customer")
    this.creditCard = creditCard
  }

  public getCreditCard(): string {
    return this.creditCard
  }
}

const customer1: Customer = new Customer("001", "r10@jogador.com", "Ronaldinho", "huwt67", "1826 1298 6728 7243")
console.log(customer1.introduceYourself())