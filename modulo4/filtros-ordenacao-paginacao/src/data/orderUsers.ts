import { user } from "../types"
import connection from "./connection"

export default async function orderUsers(filter: string, order: string, sort: string): Promise<user[]> {

  const result = await connection("aula48_exercicio")
    .where("type", "like", `%${filter}%`)
    .orWhere("name", "like", `%${filter}%`)
    .orderBy(sort, order)
  
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

