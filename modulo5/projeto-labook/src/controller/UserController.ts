import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import { UserLoginInput, UserSignUpInput } from "../model/User"


class UserController {

  constructor(
    private userBusiness: UserBusiness
  ) { }

  public signUp = async (req: Request, res: Response): Promise<void> => {

    const { name, email, password } = req.body

    const input: UserSignUpInput = {
      name,
      email,
      password
    }

    try {
      const token = await this.userBusiness.signUp(input)

      res.status(201).send({ access_token: token })

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
      } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
      }
    }
  }

  public login = async (req: Request, res: Response): Promise<void> => {

    const { email, password } = req.body

    const input: UserLoginInput = {
      email,
      password
    }

    try {
      const token = await this.userBusiness.login(input)

      res.status(200).send({ access_token: token })

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
      } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
      }
    }
  }
}

export default UserController