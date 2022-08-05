import {Request, Response} from "express"
import connection from "../connection"

async function getUserById(req: Request, res: Response): Promise<any> {
  let errorCode: number = 400
  try {
    const id: number = Number(req.params.id)

    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .from("TodoListUser")
      .where({ id: id })
    
    if(result.length === 0) {
      errorCode = 422
      throw new Error("User não encontrado. Verifique se o id passado está correto")
    }
    
    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
}

export default getUserById