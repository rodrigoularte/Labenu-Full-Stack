import { Request, Response } from "express"
import RecipeDB from "../data/RecipeDB"
import { Authenticator } from "../services/Authenticator"

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
    
    const id: string = req.params.id

    //pega o token passado no header
    const token = req.headers.authorization as string

    if (!token) {
      errorCode = 401
      throw new Error("Não autorizado. O endpoint precisa receber um token.")
    }

    //pega os dados do token
    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (!tokenData) {
      errorCode = 401
      throw new Error("Não autorizado. O token não tem permissão para acessar o banco de dados.")
    }

    //passa o id do path params para a função com a query do banco de dados
    const recipeDB = new RecipeDB()
    const recipe = await recipeDB.selectRecipeById(id)

    if (recipe === undefined) {
      errorCode = 422
      throw new Error("Id incorreto.")
    }

    res.status(200).send({
      id: recipe.getId(),
      title: recipe.getTitle(),
      description: recipe.getDescription(),
      createdAt: recipe.getCreatedAt()
    })


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}