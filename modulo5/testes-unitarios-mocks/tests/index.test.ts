import { validateCharacter } from "../src"
import { Character } from "../src/model/Character"

//Exercício 2
describe("Testes para verificar o comportamento da função validateCharacter", () => {

  //a
  test("Personagem com o nome vazio deve retornar falso", () => {

    const character: Character = {
      name: "",
      life: 1500,
      defense: 500,
      strength: 300
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })
  
  //b
  test("Personagem com a vida igual a zero deve retornar falso", () => {

    const character: Character = {
      name: "Goku",
      life: 0,
      defense: 500,
      strength: 300
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })

  //c
  test("Personagem com a força igual a zero deve retornar falso", () => {

    const character: Character = {
      name: "Goku",
      life: 1500,
      defense: 500,
      strength: 0
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })

  //d
  test("Personagem com a defesa igual a zero deve retornar falso", () => {

    const character: Character = {
      name: "Goku",
      life: 1500,
      defense: 0,
      strength: 5000
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })

  //e
  test("Personagem com vida/defesa/força menor que zero deve retornar falso", () => {

    const character: Character = {
      name: "Goku",
      life: 1500,
      defense: 500,
      strength: -50
    }

    const result = validateCharacter(character)

    expect(result).toBe(false)
  })

  //f
  test("Personagem com informações válidas deve retornar true", () => {

    const character: Character = {
      name: "Goku",
      life: 1500,
      defense: 1400,
      strength: 1400
    }

    const result = validateCharacter(character)

    expect(result).toBe(true)
  })

})