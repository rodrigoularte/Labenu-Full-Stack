import { Request, Response } from "express"
import orderUsers from "../data/orderUsers"
import selectUserByname from "../data/selectUserByname"

export const getAllUsersOrdered = async (req: Request, res: Response): Promise<void> => {
  try {
    const filter: any = req.query.filter
    let order = req.query.order
    let sort = req.query.sort

    if(filter === "" && order === "") {
      sort = 'email'
    }

    if(order !== 'asc' && order !== 'desc') {
      order = 'asc'
    }

    if(sort !== 'name' && sort !== 'type') {
      sort = 'email'
    }

    const users = await orderUsers(filter, order, sort)

    if(users.length < 1) {
      throw new Error("Nenhum usuário com esses parâmetros foi encontrado.")
    }
    
    res.status(200).send(users)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}