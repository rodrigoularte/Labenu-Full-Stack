import { Request, Response } from "express";
import { selectUserByEmail } from "../data/UserDB";
import { generateToken } from "../services/generateToken";


export const getUserByEmail = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const { email, password } = req.body
    
    const user = await selectUserByEmail(email)

    if(!email || email.indexOf("@") === -1 ) {
      errorCode = 422
      throw new Error("Email inválido.")
    }

    const id = user.id
    
    const token: string = generateToken({ id })

    res.status(201).send({ token })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}