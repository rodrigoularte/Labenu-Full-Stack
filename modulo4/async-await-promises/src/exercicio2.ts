import axios from "axios"
import { baseURL } from "./baseURL"

// a) em uma função nomeada, colocamos o async no início da função.
// Já na arrow function, colocamos o async entre o nome da função e
// o parâmetro, logo após o sinal de igual.

// b)
const getAllSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  console.log(response.data)
  return response.data
}

const main = async (): Promise<void> => {
  try {
    await getAllSubscribers()
  } catch (error: any) {
    const res = error.response?.data || error.message
    console.log(res)
  }
}

main()