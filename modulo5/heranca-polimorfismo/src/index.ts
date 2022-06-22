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
// console.log(customer1.introduceYourself())


//---------------------------------------------------------------------------------------------------------------


// POLIMORFISMO

// Exercício 1

export interface Client {
  name: string
  // Refere-se ao nome do cliente

  registrationNumber: number
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Centauro",
  registrationNumber: 59684,
  consumedEnergy: 50,
  calculateBill: () => { return 2}
}

// console.log(client.name)
// console.log(client.registrationNumber)
// console.log(client.consumedEnergy)
// console.log(client.calculateBill())

// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// R: Todas foram impressas.


//---------------------------------------------------------------------------------------------------------------


// Exercício 2

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep
  }
}

// const place: Place = new Place()

// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)).
// Qual foi o erro que o Typescript gerou?
// R: Não é possível criar uma instância de uma classe abstrata.

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// R: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.


//---------------------------------------------------------------------------------------------------------------


// Exercício 3

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep)
  }

  public getResidentsQuantity(): number {
    return this.residentsQuantity
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep)
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number, 
    // Refere-se à quantidade de máquinas do local 
    
    cep: string
		) {
	    super(cep)
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity
  }
}

const residence1: Residence = new Residence(5, "26719-821")
const commerce1: Commerce = new Commerce(3, "24572-087")
const industry1: Industry = new Industry(10, "84352-201")

// console.log(residence1.getCep())
// console.log(commerce1.getCep())
// console.log(industry1.getCep())


//---------------------------------------------------------------------------------------------------------------


// Exercício 4

export class ResidentialClient extends Residence implements Client {
  
  constructor(
    private cpf: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep)
  }

  public getCpf(): string {
    return this.cpf
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75
  }
}

// a) Que métodos e propriedades essa classe possui? Por quê?
// R: métodos de pegar cpf e de calcular a conta. Possui propriedades da classe Residence e da interface Client


//---------------------------------------------------------------------------------------------------------------


// Exercício 5

export class CommercialClient extends Commerce implements Client {

  constructor(
    private cnpj: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
  }

  public getCnpj(): string {
    return this.cnpj
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}

// a) Quais as semelhanças dessa classe com a ResidentialClient?
// R: usar as propriedades da interface Client

// b) Quais as diferenças dessa classe com a ResidentialClient?
// R: usar as propriedades da classe Commerce


//---------------------------------------------------------------------------------------------------------------


// Exercício 6

export class IndustrialClient extends Industry implements Client {

  constructor(
    private industryRegister: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
  }

  public getIndustryRegister(): string {
    return this.industryRegister
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
  }
}

// a) De qual classe a IndustrialClient deve ser filha? Por quê?
// R: da classe Industry. Pra herdar as propriedades da classe.

// b) Que interface a IndustrialClient implementa? Por quê?
// R: Cliente. Pra usar as propriedades dela.

// c) Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?
// R: 