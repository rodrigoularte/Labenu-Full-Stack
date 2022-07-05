import express, { Express } from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const adress = server.address() as AddressInfo
    console.log(`O servidor está rodando em http://localhost:${adress.port}`)
  } else {
    console.error("Falha ao iniciar o servidor.")
  }
})