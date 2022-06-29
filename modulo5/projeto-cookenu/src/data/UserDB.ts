import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

const userTableName = "user_cookenu"

class UserDB extends BaseDatabase {

  public insertUser = async (user: User) => {

    try {
      await BaseDatabase.connection(userTableName)
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user. getEmail(),
          password: user.getPassword()
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
}


export default UserDB