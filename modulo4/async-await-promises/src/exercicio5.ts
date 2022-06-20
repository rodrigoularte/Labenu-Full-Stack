import axios from "axios"
import { baseURL } from "./baseURL"
import { getAllSubscribers, user } from "./exercicio3"


const createNotification = async (subscribers: user[]): Promise<void> => {
  const subscribersId: string[] = subscribers.map((subscriber) => {
    return subscriber.id
  })

  for (const id of subscribersId) {
    try {
      await axios.post(`${baseURL}/notifications`, {
        subscriberId: id,
        message: "Olá, há uma nova notícia em nosso site"
      })
      console.log(`Notificação enviada a ${id}`)
    } catch (error) {
      console.log(`Erro ao enviar para ${id}`)
    }
  }
}

const main = async (): Promise<void> => {
  try {
    const subscribers: user[] = await getAllSubscribers()
    await createNotification(subscribers)
  } catch (error: any) {
    const res = error.response?.data || error.message
    console.log(res)
  }
}

main()