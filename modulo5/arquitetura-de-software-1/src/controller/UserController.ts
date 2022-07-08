import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"

export class UserController {

  public signUp = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 400
  
    try {
      const {name, email, password, role} = req.body
  
      const input = {
        email,
        name,
        password,
        role
      }
      
      const createUser = new UserBusiness()
      const token = await createUser.signup(input)
  
      res.status(201).send({ access_token: token })
  
    } catch (error: any) {
      res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
    }
  }
}
