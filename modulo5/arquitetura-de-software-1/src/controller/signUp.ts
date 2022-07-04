import { Request, Response } from "express"
import { createUser } from "../business/userBusiness"

export const signUp = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    const {name, email, password, role} = req.body

    const input = {
      email,
      name,
      password,
      role
    }

    const token = await createUser(input)

    res.status(201).send({ access_token: token })

  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}