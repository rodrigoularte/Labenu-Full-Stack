import connection from "./connection"


const userTableName = "User"

export const insertUser = async(id: string, email: string, password: string, role: string): Promise<void> => {

  await connection(userTableName)
    .insert({
      id,
      email,
      password,
      role
    })
    .into(userTableName)
}


export const selectUserByEmail = async (email: string) => {

  const result = await connection(userTableName)
    .select("*")
    .where({email})

  return result[0]
}

export const selectUserById = async (id: string): Promise<any> => {

  const result = await connection(userTableName)
    .select("*")
    .from(userTableName)
    .where({ id })

  return result[0]
}