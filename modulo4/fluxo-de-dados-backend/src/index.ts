import express from "express"
import cors from "cors"
import { productsList, Produto } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log("O servidor está rodando em http://localhost:3003")
})


//Exercício 1
app.get("/test", (req, res) => {
  res.send("A API está funcional")
})


//Exercício 3 e 7
app.post("/newProduct", (req, res) => {
  try {
    const { name, price } = req.body

    const newProduct: Produto = {
      id: Date.now().toString(),
      name,
      price
    }

    // erro caso um ou nenhum (name e price) forem recebidos
    if (!name || !price) {
      throw new Error("Algum campo do produto está vazio")
    }

    // erro caso name seja diferente de string
    if (typeof name !== "string") {
      throw new Error("O nome não é uma string")
    }

    // erro caso price seja diferente de number
    if (typeof price !== "number") {
      throw new Error("O preço não é um number")
    }

    //erro caso price seja igual ou menor que 0
    if (price <= 0) {
      throw new Error("O preço não pode ser menor ou igual a 0")
    }

    productsList.push(newProduct)

    res.send(productsList)

  } catch (error: any) {
    switch (error.message) {
      case "Algum campo do produto está vazio":
        res.status(422)
        break
      case "O nome não é uma string":
        res.status(422)
        break
      case "O preço não é um number":
        res.status(422)
        break
      case "O preço não pode ser menor ou igual a 0":
        res.status(422)
        break
      default:
        res.status(500)
        break
    }
    res.send(error.message)
  }

})


//Exercício 4
app.get("/products", (req, res) => {
  res.send(productsList)
})


//Exercício 5 e 8
app.put("/products/edit/:id", (req, res) => {
  try {
    const id: string = req.params.id
    const newPrice = req.body.price

    for (let product of productsList) {

      if (product.id === id) {
        product.price = newPrice
      }

      //erro caso price não seja recebido
      if (!newPrice) {
        throw new Error("O preço não foi definido")
      }

      //erro caso `price` seja diferente de `number`
      if (typeof newPrice !== "number") {
        throw new Error("O preço não é um number")
      }

      //erro caso `price` seja igual ou menor que `0`
      if (newPrice <= 0) {
        throw new Error("O preço não pode ser menor ou igual a 0")
      }

      //erro caso id não seja recebida (exceto em casos de path params)

      //erro caso o produto a ser editado não seja encontrado
      else {
        throw new Error("Id do produto não foi encontrado")
      }

    }

    res.send(productsList)

  } catch (error: any) {
    switch (error.message) {
      case "O preço não foi definido":
        res.status(422)
        break
      case "O preço não é um number":
        res.status(422)
        break
      case "O preço não pode ser menor ou igual a 0":
        res.status(422)
        break
      case "Id do produto não foi encontrado":
        res.status(404)
        break
      default:
        res.status(500)
        break
    }
    res.send(error.message)
  }

})


//Exercício 6 e 9
app.delete("/products/:id", (req, res) => {
  try {
    const id: string = req.params.id

    for (let i = 0; i < productsList.length; i++) {

      if (productsList[i].id === id) {
        productsList.splice(i, 1)
      }

      // erro caso `id` não seja recebido (exceto em casos de path params)


      // erro caso o produto escolhido não seja encontrado
      else {
        throw new Error("Id do produto não foi encontrado")
      }
    }

    res.send(productsList)

  } catch (error: any) {
    switch (error.message) {
      case "O preço não foi definido":
        res.status(422)
        break
      case "Id do produto não foi encontrado":
        res.status(404)
        break
      default:
        res.status(500)
        break
    }
    res.send(error.message)
  }

})