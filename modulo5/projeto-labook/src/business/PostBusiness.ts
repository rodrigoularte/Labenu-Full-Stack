import PostDB from "../data/PostDB"
import { Post, PostInput, POST_TYPE } from "../model/Post"
import { Authenticator } from "../services/Authenticator"
import { GenerateId } from "../services/GenerateId"

class PostBusiness {

  constructor(
    private postDB: PostDB,
    private generateId: GenerateId,
    private authenticator: Authenticator
  ) { }

  public post = async (post: PostInput, token: string): Promise<string> => {

    try {

      if (!token) {
        throw new Error("Não autorizado. O endpoint precisa receber um token.")
      }

      const tokenData = this.authenticator.getTokenData(token)

      if (!tokenData) {
        throw new Error("Não autorizado. O token não tem permissão para acessar o banco de dados.")
      }

      const { photo, description, type } = post

      //verifica se algum campo do body está vazio
      if (!photo || !description || !type) {
        throw new Error("Insira corretamente as informações. Nenhum campo pode ficar vazio.")
      }

      //verifica se o tipo do post foi passado corretamente
      if (type !== POST_TYPE.NORMAL && type !== POST_TYPE.EVENTO) {
        throw new Error("Tipo inválido. Preencha com NORMAL ou EVENTO.")
      }

      //cria um id
      const id = this.generateId.generate()

      //armazena a data atual  
      const today = new Date(Date.now())
      const postedAt = today.toLocaleDateString()

      //cria o post
      const newPost: Post = new Post(id, photo, description, postedAt, type)
      await this.postDB.insertPost(newPost)

      return "Post criado com sucesso!"

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public getPostById = async (id: string, token: string) => {

    try {
      
      if (!token) {
        throw new Error("Não autorizado. O endpoint precisa receber um token.")
      }

      const tokenData = this.authenticator.getTokenData(token)

      if (!tokenData) {
        throw new Error("Não autorizado. O token não tem permissão para acessar o banco de dados.")
      }

      //passa o id do path params para a função com a query do banco de dados
      const post = await this.postDB.selectPostById(id)

      if(post === undefined) {
        throw new Error("Id incorreto.")
      }

      return post

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

}

export default PostBusiness