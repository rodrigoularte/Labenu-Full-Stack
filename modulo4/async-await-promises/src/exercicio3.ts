import axios from "axios"
import { baseURL } from "./baseURL"

// a) Não, porque o retorno da função é um array de user mesmo

// b) Não é uma boa prática deixar any, já que no typescript podemos tipar o nosso código para minimizar os erros.

// c)
export type user = {
	id: string,
	name: string,
	email: string
}

export const getAllSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`)
  // console.log(response.data)
  return response.data.map((res:any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
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