import { Request, Response } from "express"
import connection from "../data/connection"
import selectUserByType from "../data/selectUserByType"
import { user } from "../types"

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
  try {
    const type = req.params.type

    if(type === "") {
      throw new Error("Nome é obrigatório!")
    }

    const result = await selectUserByType(type)

    if(result.length < 1) {
      throw new Error("Nenhum usuário com esses parâmetros foi encontrado.")
   }
    
    res.status(200).send(result)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}