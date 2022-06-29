import { Request, Response } from "express"
import { insertUser } from "../data/UserDB"
import { generateId } from "../services/generateId"
import { generateToken } from "../services/generateToken"
import { HashManage } from "../services/hashManage"


export const createUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const id: string = generateId()

    const token: string = generateToken({ id })

    const { email, password } = req.body

    if(!email || email.indexOf("@") === -1 ) {
      errorCode = 422
      throw new Error("Email inválido.")
    }

    if(password.length < 6) {
      errorCode = 422
      throw new Error("A senha deve conter 6 caracteres ou mais.")
    }

    // criptografando a senha usando a classe hashManage
    const hashManage = new HashManage()

    const hash = await hashManage.hash(password)


    await insertUser(id, email, hash)


    res.status(201).send({ token })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }

}