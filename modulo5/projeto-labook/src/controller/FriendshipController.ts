import { Request, Response } from "express"
import FriendshipBusiness from "../business/FriendshipBusiness"

class FriendshipController {

  constructor(
    private friendshipBusiness: FriendshipBusiness
  ) { }

  public makeFriendship = async (req: Request, res: Response) => {

    const id = req.params.id

    //pega o token passado no header
    const token = req.headers.authorization as string

    try {

      const message: string = await this.friendshipBusiness.makeFriendship(id, token)

      res.status(201).send(message)

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
      } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
      }
    }

  }
}

export default FriendshipController