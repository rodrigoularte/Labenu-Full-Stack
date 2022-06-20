import { Request, Response } from "express"
import { selectAllUsers } from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const users = await selectAllUsers()

    if (!users.length) {
      errorCode = 404
      throw new Error("Nenhum usuário encontrado")
    }

    res.status(200).send(users)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message} || {message: error.sqlMessage})
  }
}