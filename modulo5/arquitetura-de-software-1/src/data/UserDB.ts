
import { User } from "../model/User "
import BaseDatabase from "./BaseDatabase"

const userTableName = "User_Arq"

class UserDB extends BaseDatabase {

  public insertUser = async (user: User) => {

    try {
      await BaseDatabase.connection(userTableName)
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user. getEmail(),
          password: user.getPassword(),
          role: user.getRole()
        })

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  public selectUserByEmail = async (email: string): Promise<User> => {

    try {
      const user = await BaseDatabase.connection(userTableName)
        .select("*")
        .where({ email })

      return user[0] && User.toUserModel(user[0])

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  // public selectUserById = async (id: string): Promise<User> => {

  //   try {
  //     const user = await BaseDatabase.connection(userTableName)
  //       .select("*")
  //       .from(userTableName)
  //       .where({ id })

  //     return user[0] && User.toUserModel(user[0])

  //   } catch (error: any) {
  //     throw new Error(error.message || error.sqlMessage)
  //   }
  // }

}


export default UserDB