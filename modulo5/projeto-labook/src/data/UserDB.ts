import { User } from "../model/User"
import BaseDatabase from "./BaseDatabase"

class UserDB extends BaseDatabase {

  protected TABLE_NAME = "labook_users"

  public insertUser = async (user: User): Promise<void> => {

    try {
      await BaseDatabase.connection(this.TABLE_NAME)
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword()
        })
        
    } catch (error: any) {
      throw new Error (error.message || error.sqlMessage)
    }
  }

  public selectUserByEmail = async (email: string): Promise<User> => {

    try {
      const user = await BaseDatabase.connection(this.TABLE_NAME)
        .select("*")
        .where({email})
      
      return user[0] && User.toUserModel(user[0])

    } catch (error: any) {
      throw new Error (error.message || error.sqlMessage)
    }
    
  }
}

export default UserDB