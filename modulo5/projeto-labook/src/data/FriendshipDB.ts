import { Friendship } from "../model/Friendship"
import BaseDatabase from "./BaseDatabase"

class FriendshipDB extends BaseDatabase {

  protected TABLE_NAME = "labook_friendship"

  public insertFriendship = async (friendship: Friendship): Promise<void> => {

    try {
      await BaseDatabase.connection(this.TABLE_NAME)
        .insert({
          id_user: friendship.getIdUser(),
          id_friend: friendship.getIdFriend()
        })
        
    } catch (error: any) {
      throw new Error (error.message || error.sqlMessage)
    }
  }

  public selectFriendshipById = async (id: string): Promise<Friendship> => {

    try {
      const user = await BaseDatabase.connection(this.TABLE_NAME)
        .select("*")
        .where({id_friend: id})
      
      return user[0] && Friendship.toFriendshipModel(user[0])

    } catch (error: any) {
      throw new Error (error.message || error.sqlMessage)
    }
    
  }
}

export default FriendshipDB