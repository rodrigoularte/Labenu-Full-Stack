import { Request, Response } from "express"
import RecipeDB from "../data/RecipeDB"
import { Recipe } from "../model/Recipe"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import HashManager from "../services/HashManager"

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400

  try {
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

    const {title, description} = req.body

    //verifica se algum campo do body está vazio
    if(!title || !description) {
      errorCode = 422
      throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
    }

    //verifica se já existe um usuário com o email passado
    const recipeDB = new RecipeDB()
    const recipe = await recipeDB.selectRecipeByTitle(title)

    if(recipe) {
      errorCode = 409
      throw new Error("Essa receita já está cadastrada.")
    }

    //cria um id
    const generateId = new GenerateId()
    const id = generateId.generate()

    //armazena a data atual  
    const today = new Date(Date.now())
    const createdAt = today.toLocaleDateString()

    //cria a receita
    const newRecipe = new Recipe(id, title, description, createdAt)
    await recipeDB.insertRecipe(newRecipe)

    
    res.status(201).send({message: "Receita criada com sucesso!"})


  } catch (error: any) {
    res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
  }
}