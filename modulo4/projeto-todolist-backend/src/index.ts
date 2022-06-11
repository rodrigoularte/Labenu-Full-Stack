import express, {Request, Response} from "express"
import cors from "cors"

import createUser from "./endpoint/createUser"
import getUserById from "./endpoint/getUserById"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("O servidor está rodando em http://localhost:3003")
})

// Endpoint 1
app.post("/user", createUser)

// Endpoint 2
app.get("/user/:id", getUserById)