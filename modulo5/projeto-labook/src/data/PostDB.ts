import { Post } from "../model/Post";
import BaseDatabase from "./BaseDatabase";

class PostDB extends BaseDatabase {

  protected TABLE_NAME = "labook_posts"

  public insertPost = async (post: Post) => {
    
    try {
      await BaseDatabase.connection(this.TABLE_NAME)
      .insert({
        id: post.getId(),
        photo: post.getPhoto(),
        description: post.getDescription(),
        postedAt: post.getPostedAt(),
        type: post.getType()
      })

    } catch (error: any) {
      throw new Error (error.message || error.sqlMessage)
    }
  }

}

export default PostDB