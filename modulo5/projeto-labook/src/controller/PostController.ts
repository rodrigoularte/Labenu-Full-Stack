import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness"
import { PostInput } from "../model/Post"

class PostController {

  constructor(
    private postBusiness: PostBusiness
  ) { }

  public createPost = async (req: Request, res: Response): Promise<void> => {
    //pega o token passado no header
    const token = req.headers.authorization as string

    const { photo, description, postedAt, type } = req.body

    const input: PostInput = {
      photo,
      description,
      type
    }

    try {

      const postMessage: string = await this.postBusiness.post(input, token)

      res.status(201).send(postMessage)

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
      } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
      }
    }

  }

  public getPostById = async (req: Request, res: Response): Promise<void> => {

    const id = req.params.id

    //pega o token passado no header
    const token = req.headers.authorization as string

    try {

      const post = await this.postBusiness.getPostById(id, token)

      res.status(200).send(post)

    } catch (error: any) {
      if (res.statusCode === 200) {
        res.status(500).send({ message: error.message })
      } else {
        res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
      }
    }

  }
}

export default PostController