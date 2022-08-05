import { Request, Response } from "express"
import selectUserByname from "../data/selectUserByname"

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const filter: any = req.query.filter

    if(filter === "") {
      throw new Error("Nome é obrigatório!")
    }

    const users = await selectUserByname(filter)

    if(users.length < 1) {
      throw new Error("Nenhum usuário com esses parâmetros foi encontrado.")
    }
    
    res.status(200).send(users)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}