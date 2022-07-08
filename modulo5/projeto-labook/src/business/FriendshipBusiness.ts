import FriendshipDB from "../data/FriendshipDB"
import { Friendship } from "../model/Friendship"
import { Authenticator } from "../services/Authenticator"

class FriendshipBusiness {

  constructor(
    private friendshipDB: FriendshipDB,
    private authenticator: Authenticator
  ) {}
  
  public makeFriendship = async (id: string, token: string) => {

    try {

      //verifica se o id passado já existe no banco de dados
      const verifyId = await this.friendshipDB.selectFriendshipById(id)

      if(verifyId) {
        throw new Error("Vocês já são amigos.")
      }
      
      if (!token) {
        throw new Error("Não autorizado. O endpoint precisa receber um token.")
      }

      const tokenData = this.authenticator.getTokenData(token)

      if (!tokenData) {
        throw new Error("Não autorizado. O token não tem permissão para acessar o banco de dados.")
      }

      //cria a amizade
      const newFriendship: Friendship = new Friendship(tokenData.id, id)
      await this.friendshipDB.insertFriendship(newFriendship)

      return "Vocês agora são amigos!"

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

}

export default FriendshipBusiness