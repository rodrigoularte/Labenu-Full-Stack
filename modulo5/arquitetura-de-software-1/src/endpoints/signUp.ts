// import { Request, Response } from "express"
// import UserDB from "../data/UserDB"
// import { User } from "../model/User "
// import { Authenticator } from "../services/Authenticator"
// import { GenerateId } from "../services/GenerateId"
// import HashManager from "../services/HashManager"

// export const signUp = async (req: Request, res: Response): Promise<void> => {
//   let errorCode: number = 400

//   try {
//     const {name, email, password, role} = req.body

//     //verifica se algum campo do body está vazio
//     if(!name || !email || !password || !role) {
//       errorCode = 422
//       throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
//     }

//     //verifica se já existe um usuário com o email passado
//     const userDB = new UserDB()
//     const user = await userDB.selectUserByEmail(email)

//     if(user) {
//       errorCode = 409
//       throw new Error("Esse email já está cadastrado.")
//     }

//     //cria um id
//     const generateId = new GenerateId()
//     const id = generateId.generate()

//     //criptografa a senha
//     const hashManager = new HashManager()
//     const hashPassword = await hashManager.hash(password)

//     //cria o usuário
//     const newUser = new User(id, name, email, hashPassword, role)
//     await userDB.insertUser(newUser)

//     //gera o token
//     const authenticator = new Authenticator
//     const token = authenticator.generate({id, role})

//     res.status(201).send({access_token: token})


//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message } || { message: error.sqlMessage })
//   }
// }