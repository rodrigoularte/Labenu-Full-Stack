import connection from "./connection"
import { user } from "../types"

export default async function selectLimitedUsers(size: number, offset: number): Promise<any> {
  const result = await connection("aula48_exercicio")
    .limit(size)
    .offset(offset)

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