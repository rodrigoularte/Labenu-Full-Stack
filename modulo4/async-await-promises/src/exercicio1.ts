import axios from "axios"
import { baseURL } from "./baseURL"

// a) GET

// b) any[]

// c)
async function getAllSubscribers(): Promise<any[]> {
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