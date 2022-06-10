import {Request, Response} from "express"
import connection from "../connection"

async function createUser(req: Request, res: Response): Promise<any> {
  try {
    const id: number = new Date().getTime()

    await connection("TodoListUser")
      .insert({
        id: id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email
      })
      .into("TodoListUser")

    res.send("Ok")
  } catch (error: any) {
    res.status(400).send({chaveDoErro: "deu ruim"})
  }
}

export default createUser