import { user } from "../types"
import connection from "./connection"

export default async function selectUserByType(name: string): Promise<user[]> {

  const result = await connection("aula48_exercicio")
    .where("type", "like", `%${name}%`)
  
  const users = result.map((user: user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type
    }
  })

  return users
}

