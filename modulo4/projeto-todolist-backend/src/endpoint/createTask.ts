import {Request, Response} from "express"
import connection from "../connection"

async function createTask(req: Request, res: Response): Promise<any> {
  let errorCode: number = 400

  try {
    const id: number = new Date().getTime()

    let { title, description, limit_date, creator_user_id} = req.body

    const [day, month, year] = limit_date.split("/")

    limit_date = new Date(year, month - 1, day)

    if(!title || !description || !limit_date || !creator_user_id) {
      errorCode = 422
      throw new Error("Nenhum campo pode estar vazio")
    }


    await connection("TodoListTask")
    .insert({
      id,
      title,
      description,
      limit_date,
      creator_user_id
    })

    res.status(200).send("Task criada com sucesso!")

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
}

export default createTask