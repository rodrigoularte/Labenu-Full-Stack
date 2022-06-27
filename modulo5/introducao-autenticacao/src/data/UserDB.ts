import connection from "./connection"


const userTableName = "User"

export const insertUser = async(id: string, email: string, password: string): Promise<void> => {

  await connection(userTableName)
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName)
}


export const selectUserByEmail = async (email: string) => {

  const result = await connection(userTableName)
    .select("*")
    .where({email})

  return result[0]
}