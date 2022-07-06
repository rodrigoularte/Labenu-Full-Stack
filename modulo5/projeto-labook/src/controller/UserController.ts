import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import { UserInput } from "../model/User"


class UserController {

  constructor(
    private userBusiness: UserBusiness
  ) {}

  public signUp = async (req: Request, res: Response): Promise<void> => {

    let errorCode: number = 400

    const { name, email, password } = req.body

    const input: UserInput = {
      name,
      email,
      password
    }

    try {
      const token = await this.userBusiness.signUp(input)

      res.status(201).send({ access_token: token })

    } catch (error: any) {
      res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
    }

  }
}

export default UserController