import { Request, Response } from "express"
import selectAllUsers from "../data/selectAllUsers"
import selectUserByname from "../data/selectUserByname"
import selectUsersAndSort from "../data/selectUsersAndSort"

export const getUsersAndSort = async (req: Request, res: Response): Promise<void> => {
  try {
    const filter: any = req.query.filter
    let order = req.query.order
    let sort = req.query.sort

    if(!filter && !sort) {
      selectAllUsers()
    }

    if(filter === "" && order === "") {
      sort = 'name'
    }

    if(order !== 'asc' && order !== 'desc') {
      order = 'desc'
    }

    if(sort !== 'name' && sort !== 'type') {
      sort = 'name'
    }

    const users = await selectUsersAndSort(filter, order, sort)

    if(users.length < 1) {
      throw new Error("Nenhum usuário com esses parâmetros foi encontrado.")
    }
    
    res.status(200).send(users)

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}