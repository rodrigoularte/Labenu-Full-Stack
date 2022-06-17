import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { User } from "../types"

export const registerUser = async (req: Request, res: Response) => {
  let errorCode: number = 400

  try {
    const user: User = {
      id: new Date().getTime().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    if (!user.name || !user.email || !user.password) {
      errorCode = 422
      throw new Error("Nenhum campo pode ficar vazio.")
    }

    if(typeof user.name !== "string" || typeof user.email !== "string" || typeof user.password !== "string") {
      errorCode = 422
      throw new Error("Todos os campos devem ser do tipo string.")
    }

    insertUser(user)

    res.status(201).send("Usuário cadastrado com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send({message: error.message} || {message: error.sqlMessage})
  }
}