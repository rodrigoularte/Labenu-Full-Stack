import { User } from "../types"
import connection from "./connection"

export const insertUser = async (user: User): Promise<any> => {

  const {id, name, email, password} = user
  
  await connection("labecommerce_users")
    .insert({
      id,
      name,
      email,
      password
    })
}