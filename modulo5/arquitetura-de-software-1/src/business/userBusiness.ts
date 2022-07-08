import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import HashManager from "../services/HashManager"
import { User, UserInput, USER_ROLES } from "../model/User "
import UserDB from "../data/UserDB"

export class UserBusiness {

  public signup = async (user: UserInput): Promise<string> => {
    let errorCode: number = 400

    try {

      const { name, email, password, role } = user

      //verifica se algum campo do body está vazio
      if (!name || !email || !password || !role) {
        errorCode = 422
        throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
      }

      //verifica o role
      if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {
        throw new Error("Invalid role, fill with ADMIN or NORMAL")
      }

      //verifica se já existe um usuário com o email passado
      const userDB = new UserDB()
      const verifyUser = await userDB.selectUserByEmail(user.email)

      if (verifyUser) {
        errorCode = 409
        throw new Error("Esse email já está cadastrado.")
      }

      //cria um id
      const generateId = new GenerateId()
      const id = generateId.generate()

      //criptografa a senha
      const hashManager = new HashManager()
      const hashPassword = await hashManager.hash(password)

      //cria o usuário
      const newUser = new User(id, name, email, hashPassword, role)
      await userDB.insertUser(newUser)

      //gera o token
      const authenticator = new Authenticator
      const token = authenticator.generate({ id, role })

      return token


    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar um usuário.")
    }
  }
}
