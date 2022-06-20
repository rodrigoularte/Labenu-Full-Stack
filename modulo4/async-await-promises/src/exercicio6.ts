import axios from "axios"
import { baseURL } from "./baseURL"
import { getAllSubscribers, user } from "./exercicio3"

// a) Executa as Promises simultaneamente, em vez de executar de forma síncrona.

// b) Ao usar o Promise.all podemos melhorar a performance da nossa aplicação.

// c)
const createNotification = async (subscribers: user[]): Promise<void> => {
  const subscribersId: string[] = subscribers.map((subscriber) => {
    return subscriber.id
  })

  try {
    const requests = subscribersId.map(id =>
        axios.post(`${baseURL}/notifications`, {
          subscriberId: id,
          message: "Olá, há uma nova notícia em nosso site"
        }))
      await Promise.all(requests)
      console.log(`Notificações enviadas com sucesso`)
  } catch (error: any) {
    console.log(`Erro ao notificar`)
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