import { Request, Response } from "express"
import connection from "../connection"

async function editUser(req: Request, res: Response): Promise<any> {
  let errorCode: number = 400
  try {
    const id: number = Number(req.params.id)

    const result = await connection("TodoListUser")
      .select("id")
      .from("TodoListUser")
      .where({ id: id })

    if (result.length === 0) {
      errorCode = 422
      throw new Error("User não encontrado. Verifique se o id passado está correto")

    } else {

      if(!req.body.name || typeof req.body.name !== "string") {
        errorCode = 422
        throw new Error("O campo name não pode ficar vazio e deve ser do tipo string")
      }

      if(!req.body.nickname || typeof req.body.nickname !== "string") {
        errorCode = 422
        throw new Error("O campo nickname não pode ficar vazio e deve ser do tipo string")
      }
      
      await connection("TodoListUser")
        .where({ id: id })
        .update({
          name: req.body.name,
          nickname: req.body.nickname
        })
  
      res.status(200).send("User atualizado com sucesso!")
    }


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
}

export default editUser