import UserDB from "../data/UserDB"
import { User, UserLoginInput, UserSignUpInput } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"
import HashManager from "../services/HashManager"

class UserBusiness {

  constructor(
    private userDB: UserDB,
    private generateId: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signUp = async (user: UserSignUpInput): Promise<string> => {

    try {
      let errorCode: number = 400
      
      const {name, email, password} = user

      //verifica se algum campo do body está vazio
      if(!name || !email || !password) {
        errorCode = 422
        throw new Error ("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
      }

      //verifica se o email passado já existe no banco de dados
      const verifyEmail = await this.userDB.selectUserByEmail(email)

      if(verifyEmail) {
        errorCode = 409
        throw new Error("Esse email já está cadastrado.")
      }

      //cria um id
      const id = this.generateId.generate()

      //criptografa a senha
      const hashPassword = await this.hashManager.hash(password)

      //cria o usuário
      const newUser: User = new User(id, name, email, hashPassword)
      await this.userDB.insertUser(newUser)

      //gera o token
      const token: string = this.authenticator.generate({id})

      return token

    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar um usuário.")
    }
  }

  public login = async (user: UserLoginInput) => {

    try {
      let errorCode: number = 400

      const {email, password} = user

      //verifica se algum campo do body está vazio
      if(!email || !password) {
        errorCode = 422
        throw new Error ("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
      }

      //verifica se o email passado já existe no banco de dados
      const verifyEmail = await this.userDB.selectUserByEmail(email)

      if(!verifyEmail) {
        errorCode = 409
        throw new Error("Email incorreto.")
      }

      //verifica se a senha passada corresponde à senha do banco
      const comparePassword: boolean = await this.hashManager.compare(password, verifyEmail.getPassword())

      if(comparePassword === false) {
        errorCode = 401
        throw new Error ("Senha incorreta.")
      }

      //gera o token
      const token: string = this.authenticator.generate({id: verifyEmail.getId()})

      return token

    } catch (error: any) {
      throw new Error(error.message || "Erro ao fazer login.")
    }
  }
}

export default UserBusiness