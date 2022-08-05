import axios from "axios"
import { baseURL } from "./baseURL"

// a) É um array de news. Porque é um array com vários objetos do tipo news, como está abaixo
type news = {
	title: string,
	content: string,
	date: number
}

// b)

const newNews: news = {
  title: "Chaves é acusado de roubo",
  content: "Após o ferro de passar roupa sumir, Chaves é acusado de ladrãozinho",
  date: Date.now()
}

const createNews = async (news: news): Promise<news[]> => {
  const response = await axios.put(`${baseURL}/news`, news)
  // console.log(response.data)
  return response.data
}

const main = async (): Promise<void> => {
  try {
    await createNews(newNews)
  } catch (error: any) {
    const res = error.response?.data || error.message
    console.log(res)
  }
}

main()