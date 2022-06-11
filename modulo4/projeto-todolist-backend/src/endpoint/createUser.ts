import {Request, Response} from "express"
import connection from "../connection"

async function createUser(req: Request, res: Response): Promise<any> {
  let errorCode: number = 400
  try {
    const id: number = new Date().getTime()

    if(!req.body.name || typeof req.body.name !== "string") {
      errorCode = 422
      throw new Error("O campo name não pode ficar vazio e deve ser do tipo string")
    }

    if(!req.body.nickname || typeof req.body.nickname !== "string") {
      errorCode = 422
      throw new Error("O campo nickname não pode ficar vazio e deve ser do tipo string")
    }

    if(!req.body.email || typeof req.body.email !== "string") {
      errorCode = 422
      throw new Error("O campo email não pode ficar vazio e deve ser do tipo string")
    }

    await connection("TodoListUser")
      .insert({
        id: id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
      })
      .into("TodoListUser")

    res.status(200).send("User criado com sucesso!")
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
}

export default createUser