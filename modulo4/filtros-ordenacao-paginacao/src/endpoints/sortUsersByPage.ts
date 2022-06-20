import { Request, Response } from "express"
import selectLimitedUsers from "../data/selectLimitedUsers"

export const sortUsersByPage = async (req: Request, res: Response): Promise<void> => {
  try {
    let page: number = Number(req.query.page)

    console.log(page)

    if(page < 1 || isNaN(page)) {
      page = 1
    }

    const size: number = 5

    let offset = (page-1) * size

    const users = await selectLimitedUsers(size, offset)

    if (!users.length) {
      res.statusCode = 404
      throw new Error("Nenhum usuário encontrado")
    }

    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}