import { performPurchase } from "../src"
import { User } from "../src/types"

describe("Testes Exercício 2", () => {

  test("usuário com o saldo maior do que o valor de compra", () => {

    const user: User = {name: "Mina", balance: 500}

    const result = performPurchase(user, 100)

    expect(result).toEqual({name: "Mina", balance: 400})
  })

  test("usuário com o saldo igual ao valor de compra", () => {

    const user: User = {name: "Mina", balance: 500}

    const result = performPurchase(user, 500)

    expect(result).toEqual({name: "Mina", balance: 0})
  })

  test("usuário com o saldo menor do que o valor de compra", () => {

    const user: User = {name: "Mina", balance: 100}

    const result = performPurchase(user, 500)

    expect(result).not.toBeDefined()  
  })

})