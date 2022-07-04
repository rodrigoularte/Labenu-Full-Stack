import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import HashManager from "../services/HashManager"
import { User } from "../model/User "
import UserDB from "../data/UserDB"

export const createUser = async (user: any): Promise<string> => {
  let errorCode: number = 400

  try {

    //verifica se algum campo do body está vazio
    if(!user.name || !user.email || !user.password || !user.role) {
      errorCode = 422
      throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
    }

    //verifica se já existe um usuário com o email passado
    const userDB = new UserDB()
    const verifyUser = await userDB.selectUserByEmail(user.email)

    if(verifyUser) {
      errorCode = 409
      throw new Error("Esse email já está cadastrado.")
    }

    //cria um id
    const generateId = new GenerateId()
    const id = generateId.generate()

    //criptografa a senha
    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(user.password)

    //cria o usuário
    const newUser = new User(id, user.name, user.email, hashPassword, user.role)
    await userDB.insertUser(newUser)

    //gera o token
    const authenticator = new Authenticator
    const token = authenticator.generate({id, role: user.role})

    return token


  } catch (error: any) {
    throw new Error(error.message || "Erro ao criar um usuário.")
  }
}