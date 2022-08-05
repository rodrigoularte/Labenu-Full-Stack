export type Produto = {
  id: string | number,
  name: string,
  price: number
}

//Exercício 2
export const productsList: Produto[] = [
  {
    id: "1drts",
    name: "Chinelo",
    price: 35
  },
  {
    id: "2aoiu",
    name: "Fone de ouvido",
    price: 20
  },
  {
    id: "3qwer",
    name: "Xícara",
    price: 18
  }
]