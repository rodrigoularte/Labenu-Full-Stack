import {Request, Response} from "express"
import connection from "../connection"

async function getTaskById(req: Request, res: Response): Promise<any> {
  let errorCode: number = 400

  try {
    const id: number = Number(req.params.id)
    
    const result = await connection("TodoListUser")
      .select("id", "title", "description", "status", "limit_date", "creator_user_id")
      .from("TodoListTask")
      .where({ id: id })
    
    if(result.length === 0) {
      errorCode = 422
      throw new Error("Task não encontrada. Verifique se o id passado está correto")
    }

    const newResult = result.map((item) => {
      const dataDate = item.limit_date

      const data = `${dataDate.getDate()}/${dataDate.getMonth() + 1}/${dataDate.getFullYear()}`

      return {
        id: item.id,
        title: item.title,
        description: item.description,
        status: item.status,
        limitDate: data,
        creatorUserId: item.creator_user_id
      }
    })
    // console.log(result)
    res.status(200).send(newResult)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
}

export default getTaskById