import { Request, Response } from "express";
import { selectUserByEmail } from "../data/UserDB";
import { generateToken } from "../services/generateToken";
import { HashManage } from "../services/hashManage";


export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const { email, password } = req.body

    const user = await selectUserByEmail(email)

    if (!email || email.indexOf("@") === -1) {
      errorCode = 422
      throw new Error("Email inválido.")
    }

    const id = user.id

    // criptografando a senha usando a classe hashManage
    const hashManage = new HashManage()

    const compare = await hashManage.compare(password, user.password)

    if (compare === false) {
      throw new Error("Senha incorreta.")
    }

    const token: string = generateToken({ id, role: user.role })

    res.status(200).send({ token })


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}