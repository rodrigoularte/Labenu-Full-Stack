import { app } from "./app"
import { createUser } from "./endpoints/createUser"
import { HashManage } from "./services/hashManage"

import { Request, Response } from "express"
import { generateId } from "./services/generateId"
import { generateToken } from "./services/generateToken"
import { insertUser } from "./data/UserDB"
import { getUserByEmail } from "./endpoints/getUserByEmail"
import { getUserById } from "./endpoints/getUserById"


app.post("/user/signup", createUser)

app.post("/user/login", getUserByEmail)

app.get("/user/profile", getUserById)


const hashManage = new HashManage()

const teste = async () => {
  const senha = "rodrigo"
  const senhaTentativa = "rodri"
  
  const hash = await hashManage.hash(senha)
  console.log(hash)

  const senhaCorreta = await hashManage.compare(senha, hash)
  console.log(senhaCorreta)

}

// teste()